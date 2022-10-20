/* eslint-disable mocha/no-setup-in-describe */
import { BalanceTree, Balances } from '@commonvalue/core';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { expect } from 'chai';
import { ethers } from 'hardhat';
import { CampaignFactory, Campaign } from 'typechain';

import scenarios from './scenarios.json';
import { deployCampaign, deployCampaignFactory, toBigNumber, fastForwardToTimestamp, SECONDS_IN_DAY, SECONDS_IN_WEEK, ZERO_BYTES } from './support';

describe('Scenario Tests', () => {
  let campaignFactory: CampaignFactory;
  let counter = 0;

  before(async () => {
    const campaignMaster = await deployCampaign();
    campaignFactory = await deployCampaignFactory(campaignMaster.address);
  });

  for (let scenerioIndex = 0; scenerioIndex < scenarios.length; scenerioIndex++) {
    const { shares, fundsPerFunderEth } = scenarios[scenerioIndex];
    const sharesScaled = shares.map((share) => toBigNumber(share, 18));

    let campaginProxy: Campaign;
    let funders: SignerWithAddress[];
    let claimers: SignerWithAddress[];
    let admin: SignerWithAddress;
    let oracle: SignerWithAddress;
    let fundsSum: number;

    beforeEach(async () => {
      const signers = await ethers.getSigners();
      oracle = signers[1];
      admin = signers[2];
      funders = signers.slice(3, 3 + fundsPerFunderEth.length);
      claimers = signers.slice(3 + funders.length, 3 + funders.length + shares.length);

      fundsSum = fundsPerFunderEth.reduce((partialSum, a) => partialSum + a, 0);

      const campaignCreationTx = await campaignFactory.createCampaign(
        ZERO_BYTES,
        admin.address,
        oracle.address,
        0,
        SECONDS_IN_WEEK,
        SECONDS_IN_WEEK,
        SECONDS_IN_DAY,
        ethers.utils.keccak256(ethers.utils.toUtf8Bytes(counter.toString()))
      );
      counter++;
      const campaignCreationReceipt = await campaignCreationTx.wait();
      const campaignProxyAddress: string = (campaignCreationReceipt as any).events[1].args[1]; // get campaign proxy address from the CampaignCreated event
      campaginProxy = await ethers.getContractAt('Campaign', campaignProxyAddress);
    });

    describe(`when the allocation is ${shares.join(',')}`, () => {
      let tree: BalanceTree;

      describe('and the oracle includes them all in the tree, challenge period passes', () => {
        beforeEach(async () => {
          const claimersBalances: Balances = new Map();
          for (let shareIndex = 0; shareIndex < sharesScaled.length; shareIndex++) {
            claimersBalances.set(claimers[shareIndex].address, sharesScaled[shareIndex]);
          }
          tree = new BalanceTree(claimersBalances);
          const tx = await campaginProxy.connect(oracle).proposeShares(tree.getHexRoot(), ZERO_BYTES);
          await tx.wait();
          const activationTime = await campaginProxy.activationTime();
          await fastForwardToTimestamp(activationTime.add(10));
        });

        describe('and all funders fund before claims begin', () => {
          beforeEach(async () => {
            for (let funderIndex = 0; funderIndex < funders.length; funderIndex++) {
              const tx = await campaginProxy
                .connect(funders[funderIndex])
                .fund(ethers.constants.AddressZero, ethers.utils.parseEther(fundsPerFunderEth[funderIndex].toString()), {
                  value: ethers.utils.parseEther(fundsPerFunderEth[funderIndex].toString()),
                });
              await tx.wait();
            }
          });

          it('returns sum of funds for balanceOfAsset Ether', async () => {
            expect(await campaginProxy.balanceOfAsset(ethers.constants.AddressZero)).to.eq(ethers.utils.parseEther(fundsSum.toString()).toString());
          });

          for (let claimerIndex = 0; claimerIndex < shares.length; claimerIndex++) {
            describe(`and claimer number ${claimerIndex + 1} tries to claim`, () => {
              it('claims successfully', async () => {
                const accountBalanceBeforeClaim = await ethers.provider.getBalance(claimers[claimerIndex].address);
                const proof = tree.getProof(claimers[claimerIndex].address, sharesScaled[claimerIndex]);
                const tx = await campaginProxy
                  .connect(claimers[claimerIndex])
                  .claim(claimers[claimerIndex].address, sharesScaled[claimerIndex], proof, [ethers.constants.AddressZero], claimers[claimerIndex].address);
                const { gasUsed, effectiveGasPrice } = await tx.wait();
                const gasCostClaim = gasUsed.mul(effectiveGasPrice);
                const accountbalanceAfterClaim = await ethers.provider.getBalance(claimers[claimerIndex].address);
                const rewardAmount = sharesScaled[claimerIndex].mul(fundsSum);
                expect(accountbalanceAfterClaim.add(gasCostClaim)).to.eq(accountBalanceBeforeClaim.add(rewardAmount));
              });
            });
          }
        });

        for (let funderIndex = 0; funderIndex < fundsPerFunderEth.length; funderIndex++) {
          describe(`and funder number ${funderIndex + 1} funds the campaign`, () => {
            beforeEach(async () => {
              const tx = await campaginProxy
                .connect(funders[funderIndex])
                .fund(ethers.constants.AddressZero, ethers.utils.parseEther(fundsPerFunderEth[funderIndex].toString()), {
                  value: ethers.utils.parseEther(fundsPerFunderEth[funderIndex].toString()),
                });
              await tx.wait();
            });

            for (let claimerIndex = 0; claimerIndex < shares.length; claimerIndex++) {
              describe(`and claimer number ${claimerIndex + 1} tries to claim`, () => {
                it('claims successfully', async () => {
                  const accountBalanceBeforeClaim = await ethers.provider.getBalance(claimers[claimerIndex].address);
                  const proof = tree.getProof(claimers[claimerIndex].address, sharesScaled[claimerIndex]);
                  const tx = await campaginProxy
                    .connect(claimers[claimerIndex])
                    .claim(claimers[claimerIndex].address, sharesScaled[claimerIndex], proof, [ethers.constants.AddressZero], claimers[claimerIndex].address);
                  const { gasUsed, effectiveGasPrice } = await tx.wait();
                  const gasCostClaim = gasUsed.mul(effectiveGasPrice);
                  const accountbalanceAfterClaim = await ethers.provider.getBalance(claimers[claimerIndex].address);
                  const rewardAmount = sharesScaled[claimerIndex].mul(fundsPerFunderEth[funderIndex]);
                  expect(accountbalanceAfterClaim.add(gasCostClaim)).to.eq(accountBalanceBeforeClaim.add(rewardAmount));
                });
              });
            }
          });
        }
      });
    });
  }
});
