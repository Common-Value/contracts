import { Balances, BalanceTree } from '@commonvalue/core';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { expect } from 'chai';
import { BigNumber } from 'ethers';
import { ethers } from 'hardhat';

import { Campaign, CampaignFactory } from '../typechain';

import { toBigNumber, fastForwardToTimestamp, deployCampaign, deployCampaignFactory, SECONDS_IN_DAY, SECONDS_IN_WEEK, ZERO_BYTES } from './support';

describe('Basic Test', () => {
  let campaignFactory: CampaignFactory;
  let counter = 0;
  before(async () => {
    const campaignMaster = await deployCampaign();
    campaignFactory = await deployCampaignFactory(campaignMaster.address);
  });

  describe('when there are two contributors with 50-50 shares', () => {
    let campaginProxy: Campaign;
    let funder: SignerWithAddress;
    let account1: SignerWithAddress;
    let account2: SignerWithAddress;
    let admin: SignerWithAddress;
    let oracle: SignerWithAddress;
    // eslint-disable-next-line mocha/no-setup-in-describe
    const claimer1Shares = toBigNumber('0.5', 18);
    // eslint-disable-next-line mocha/no-setup-in-describe
    const claimer2Shares = toBigNumber('0.5', 18);

    beforeEach(async () => {
      [funder, account1, account2, admin, oracle] = await ethers.getSigners();
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

    describe('and the oracle includes them both in the tree', () => {
      let tree: BalanceTree;

      beforeEach(async () => {
        const claimersBalances: Balances = new Map();
        claimersBalances.set(account1.address, claimer1Shares);
        claimersBalances.set(account2.address, claimer2Shares);
        tree = new BalanceTree(claimersBalances);
        const tx = await campaginProxy.connect(oracle).proposeShares(tree.getHexRoot(), ZERO_BYTES);
        await tx.wait();
      });

      describe('and a funder sends 1 Eth with the fund function', () => {
        beforeEach(async () => {
          const tx = await campaginProxy
            .connect(funder)
            .fund(ethers.constants.AddressZero, ethers.utils.parseEther('1.0'), { value: ethers.utils.parseEther('1.0') });
          await tx.wait();
        });

        it('returns 1 Eth for balanceOfAsset', async () => {
          expect(await campaginProxy.balanceOfAsset(ethers.constants.AddressZero)).to.eq(ethers.utils.parseEther('1.0').toString());
        });

        describe('and first account tries to claim while challenge period', () => {
          it('reverts with InvalidProof', async () => {
            const proofAccount1 = tree.getProof(account1.address, claimer1Shares);
            const tx = await campaginProxy
              .connect(account1)
              .claim(account1.address, claimer1Shares, proofAccount1, [ethers.constants.AddressZero], account1.address);
            await expect(tx.wait()).to.be.reverted;
          });
        });

        describe('and the oracle tries to update the root while challenge period', () => {
          it('reverts with ChallengePeriodActive', async () => {
            const tx = await campaginProxy.connect(oracle).proposeShares(ZERO_BYTES, ZERO_BYTES);
            await expect(tx.wait()).to.be.reverted;
          });
        });

        describe('and the admin cancels the campaign', () => {
          beforeEach(async () => {
            const tx = await campaginProxy.connect(admin).cancelCampaign();
            await tx.wait();
          });

          it('reverts when first account tries to claim', async () => {
            const proofAccount1 = tree.getProof(account1.address, claimer1Shares);
            const tx = await campaginProxy
              .connect(account1)
              .claim(account1.address, claimer1Shares, proofAccount1, [ethers.constants.AddressZero], account1.address);
            await expect(tx.wait()).to.be.reverted;
          });

          it('funder withdraws his funds', async () => {
            const funderBalanceBeforeWithdraw = await ethers.provider.getBalance(funder.address);
            const tx = await campaginProxy.connect(funder).withdrawAssets(funder.address, ethers.constants.AddressZero);
            const { gasUsed, effectiveGasPrice } = await tx.wait();
            const gasCostWithdraw = gasUsed.mul(effectiveGasPrice);
            const funderBalanceAfterWithdraw = await ethers.provider.getBalance(funder.address);
            expect(funderBalanceAfterWithdraw.add(gasCostWithdraw)).to.eq(funderBalanceBeforeWithdraw.add(ethers.utils.parseEther('1')));
          });
        });

        describe('and the admin cancels the pending root', () => {
          beforeEach(async () => {
            const tx = await campaginProxy.connect(admin).challenge();
            await tx.wait();
          });

          it('reverts when first account tries to claim', async () => {
            const proofAccount1 = tree.getProof(account1.address, claimer1Shares);
            const tx = await campaginProxy
              .connect(account1)
              .claim(account1.address, claimer1Shares, proofAccount1, [ethers.constants.AddressZero], account1.address);
            await expect(tx.wait()).to.be.reverted;
          });

          describe('and the challenge period passes', () => {
            beforeEach(async () => {
              const activationTime = await campaginProxy.activationTime();
              await fastForwardToTimestamp(activationTime.add(10));
            });

            it('reverts when first account tries to claim', async () => {
              const proofAccount1 = tree.getProof(account1.address, claimer1Shares);
              const tx = await campaginProxy
                .connect(account1)
                .claim(account1.address, claimer1Shares, proofAccount1, [ethers.constants.AddressZero], account1.address);
              await expect(tx.wait()).to.be.reverted;
            });

            describe('and the oracle publishes the root again', () => {
              beforeEach(async () => {
                const tx = await campaginProxy.connect(oracle).proposeShares(tree.getHexRoot(), ZERO_BYTES);
                await tx.wait();
                const activationTime = await campaginProxy.activationTime();
                await fastForwardToTimestamp(activationTime.add(10));
              });

              it('claim fails when proof is wrong', async () => {
                const proofAccount1 = tree.getProof(account1.address, claimer1Shares);
                const tx = await campaginProxy
                  .connect(account2)
                  .claim(account2.address, claimer2Shares, proofAccount1, [ethers.constants.AddressZero], account2.address);
                await expect(tx.wait()).to.be.reverted;
              });

              describe('and the first account claims the reward', () => {
                let account1BalanceBeforeClaim: BigNumber;
                let gasCostClaim: BigNumber;

                beforeEach(async () => {
                  account1BalanceBeforeClaim = await ethers.provider.getBalance(account1.address);
                  const proofAccount1 = tree.getProof(account1.address, claimer1Shares);
                  const tx = await campaginProxy
                    .connect(account1)
                    .claim(account1.address, claimer1Shares, proofAccount1, [ethers.constants.AddressZero], account1.address);
                  const { gasUsed, effectiveGasPrice } = await tx.wait();
                  gasCostClaim = gasUsed.mul(effectiveGasPrice);
                });

                it('account1 received the reward', async () => {
                  const account1balanceAfterClaim = await ethers.provider.getBalance(account1.address);
                  expect(account1balanceAfterClaim.add(gasCostClaim)).to.eq(account1BalanceBeforeClaim.add(ethers.utils.parseEther('0.5')));
                });

                describe('first account claims again', () => {
                  let account1BalanceBeforeClaim: BigNumber;
                  let gasCostClaim: BigNumber;

                  beforeEach(async () => {
                    account1BalanceBeforeClaim = await ethers.provider.getBalance(account1.address);
                    const proofAccount1 = tree.getProof(account1.address, claimer1Shares);
                    const tx = await campaginProxy
                      .connect(account1)
                      .claim(account1.address, claimer1Shares, proofAccount1, [ethers.constants.AddressZero], account1.address);
                    const { gasUsed, effectiveGasPrice } = await tx.wait();
                    gasCostClaim = gasUsed.mul(effectiveGasPrice);
                  });

                  it('received 0 rewards', async () => {
                    const account1balanceAfterClaim = await ethers.provider.getBalance(account1.address);
                    expect(account1balanceAfterClaim.add(gasCostClaim)).to.eq(account1BalanceBeforeClaim);
                  });

                  describe('and second account claims', () => {
                    let account2BalanceBeforeClaim: BigNumber;
                    let gasCostClaim: BigNumber;

                    beforeEach(async () => {
                      account2BalanceBeforeClaim = await ethers.provider.getBalance(account2.address);
                      // fast forward to claim period and then claim
                      const proofAccount2 = tree.getProof(account2.address, claimer1Shares);
                      const tx = await campaginProxy
                        .connect(account2)
                        .claim(account2.address, claimer2Shares, proofAccount2, [ethers.constants.AddressZero], account2.address);
                      const { gasUsed, effectiveGasPrice } = await tx.wait();
                      gasCostClaim = gasUsed.mul(effectiveGasPrice);
                    });

                    it('account2 received the reward', async () => {
                      const account2balanceAfterClaim = await ethers.provider.getBalance(account2.address);
                      expect(account2balanceAfterClaim.add(gasCostClaim)).to.eq(account2BalanceBeforeClaim.add(ethers.utils.parseEther('0.5')));
                    });
                  });
                });
              });
            });
          });
        });

        describe('and first account claims after challenge period', () => {
          let account1BalanceBeforeClaim: BigNumber;
          let gasCostClaim: BigNumber;

          beforeEach(async () => {
            account1BalanceBeforeClaim = await ethers.provider.getBalance(account1.address);
            // fast forward to claim period and then claim
            const activationTime = await campaginProxy.activationTime();
            await fastForwardToTimestamp(activationTime.add(10));
            const proofAccount1 = tree.getProof(account1.address, claimer1Shares);
            const tx = await campaginProxy
              .connect(account1)
              .claim(account1.address, claimer1Shares, proofAccount1, [ethers.constants.AddressZero], account1.address);
            const { gasUsed, effectiveGasPrice } = await tx.wait();
            gasCostClaim = gasUsed.mul(effectiveGasPrice);
          });

          it('account1 received the reward', async () => {
            const account1balanceAfterClaim = await ethers.provider.getBalance(account1.address);
            expect(account1balanceAfterClaim.add(gasCostClaim)).to.eq(account1BalanceBeforeClaim.add(ethers.utils.parseEther('0.5')));
          });

          describe('and the funder sends 1 more Eth', () => {
            beforeEach(async () => {
              const tx = await campaginProxy
                .connect(funder)
                .fund(ethers.constants.AddressZero, ethers.utils.parseEther('1.0'), { value: ethers.utils.parseEther('1.0') });
              await tx.wait();
            });

            describe('and first account claims again', () => {
              let account1BalanceBeforeClaim: BigNumber;
              let gasCostClaim: BigNumber;

              beforeEach(async () => {
                account1BalanceBeforeClaim = await ethers.provider.getBalance(account1.address);
                // fast forward to claim period and then claim
                const proofAccount1 = tree.getProof(account1.address, claimer1Shares);
                const tx = await campaginProxy
                  .connect(account1)
                  .claim(account1.address, claimer1Shares, proofAccount1, [ethers.constants.AddressZero], account1.address);
                const { gasUsed, effectiveGasPrice } = await tx.wait();
                gasCostClaim = gasUsed.mul(effectiveGasPrice);
              });

              it('account1 received the reward', async () => {
                const account1balanceAfterClaim = await ethers.provider.getBalance(account1.address);
                expect(account1balanceAfterClaim.add(gasCostClaim)).to.eq(account1BalanceBeforeClaim.add(ethers.utils.parseEther('0.5')));
              });

              describe('and second account claims', () => {
                let account2BalanceBeforeClaim: BigNumber;
                let gasCostClaim: BigNumber;

                beforeEach(async () => {
                  account2BalanceBeforeClaim = await ethers.provider.getBalance(account2.address);
                  // fast forward to claim period and then claim
                  const proofAccount2 = tree.getProof(account2.address, claimer1Shares);
                  const tx = await campaginProxy
                    .connect(account2)
                    .claim(account2.address, claimer2Shares, proofAccount2, [ethers.constants.AddressZero], account2.address);
                  const { gasUsed, effectiveGasPrice } = await tx.wait();
                  gasCostClaim = gasUsed.mul(effectiveGasPrice);
                });

                it('account2 received the reward', async () => {
                  const account2balanceAfterClaim = await ethers.provider.getBalance(account2.address);
                  expect(account2balanceAfterClaim.add(gasCostClaim)).to.eq(account2BalanceBeforeClaim.add(ethers.utils.parseEther('1')));
                });
              });
            });
          });
        });
      });

      describe('and a funder sends 1 Eth directly to the contract', () => {
        beforeEach(async () => {
          const tx = await funder.sendTransaction({ to: campaginProxy.address, value: ethers.utils.parseEther('1') });
          await tx.wait();
        });

        it('returns 1 Eth for balanceOfAsset for Eth', async () => {
          expect(await campaginProxy.balanceOfAsset(ethers.constants.AddressZero)).to.eq(ethers.utils.parseEther('1.0').toString());
        });
      });
    });

    describe('and the oracle includes only the first account in the tree', () => {
      let tree1: BalanceTree;
      let tree2: BalanceTree;

      beforeEach(async () => {
        const claimersBalances: Balances = new Map();
        claimersBalances.set(account1.address, claimer1Shares);
        tree1 = new BalanceTree(claimersBalances);
        const tx = await campaginProxy.connect(oracle).proposeShares(tree1.getHexRoot(), ZERO_BYTES);
        await tx.wait();
      });

      describe('and a funder sends 1 Eth with the fund function', () => {
        beforeEach(async () => {
          const tx = await campaginProxy
            .connect(funder)
            .fund(ethers.constants.AddressZero, ethers.utils.parseEther('1.0'), { value: ethers.utils.parseEther('1.0') });
          await tx.wait();
        });

        it('returns 1 Eth for balanceOfAsset', async () => {
          expect(await campaginProxy.balanceOfAsset(ethers.constants.AddressZero)).to.eq(ethers.utils.parseEther('1.0').toString());
        });

        describe('and the oracle updates the tree to include also the second account', () => {
          beforeEach(async () => {
            // fast forward to claim period
            const activationTime = await campaginProxy.activationTime();
            await fastForwardToTimestamp(activationTime.add(10));

            const claimersBalances: Balances = new Map();
            claimersBalances.set(account1.address, claimer1Shares);
            claimersBalances.set(account2.address, claimer2Shares);
            tree2 = new BalanceTree(claimersBalances);
            const tx = await campaginProxy.connect(oracle).proposeShares(tree2.getHexRoot(), ZERO_BYTES);
            await tx.wait();
          });

          describe('and first account claims while challenge period', () => {
            let account1BalanceBeforeClaim: BigNumber;
            let gasCostClaim: BigNumber;

            beforeEach(async () => {
              account1BalanceBeforeClaim = await ethers.provider.getBalance(account1.address);
              const proofAccount1 = tree1.getProof(account1.address, claimer1Shares);
              const tx = await campaginProxy
                .connect(account1)
                .claim(account1.address, claimer1Shares, proofAccount1, [ethers.constants.AddressZero], account1.address);
              const { gasUsed, effectiveGasPrice } = await tx.wait();
              gasCostClaim = gasUsed.mul(effectiveGasPrice);
            });

            it('account1 received the reward', async () => {
              const account1balanceAfterClaim = await ethers.provider.getBalance(account1.address);
              expect(account1balanceAfterClaim.add(gasCostClaim)).to.eq(account1BalanceBeforeClaim.add(ethers.utils.parseEther('0.5')));
            });

            it('reverts when second account tries to claim', async () => {
              const proofAccount2 = tree2.getProof(account2.address, claimer2Shares);
              const tx = await campaginProxy
                .connect(account2)
                .claim(account2.address, claimer1Shares, proofAccount2, [ethers.constants.AddressZero], account2.address);
              await expect(tx.wait()).to.be.reverted;
            });

            describe('and challenge period passes', () => {
              beforeEach(async () => {
                // fast forward to claim period
                const activationTime = await campaginProxy.activationTime();
                await fastForwardToTimestamp(activationTime.add(10));
              });

              describe('and second account claims', () => {
                let account2BalanceBeforeClaim: BigNumber;
                let gasCostClaim: BigNumber;

                beforeEach(async () => {
                  account2BalanceBeforeClaim = await ethers.provider.getBalance(account2.address);
                  const proofAccount2 = tree2.getProof(account2.address, claimer2Shares);
                  const tx = await campaginProxy
                    .connect(account2)
                    .claim(account2.address, claimer2Shares, proofAccount2, [ethers.constants.AddressZero], account2.address);
                  const { gasUsed, effectiveGasPrice } = await tx.wait();
                  gasCostClaim = gasUsed.mul(effectiveGasPrice);
                });

                it('account2 received the reward', async () => {
                  const account2balanceAfterClaim = await ethers.provider.getBalance(account2.address);
                  expect(account2balanceAfterClaim.add(gasCostClaim)).to.eq(account2BalanceBeforeClaim.add(ethers.utils.parseEther('0.5')));
                });
              });
            });
          });
        });
      });
    });
  });
});
