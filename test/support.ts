import { BigNumber } from 'ethers';
import { ethers } from 'hardhat';
import { Campaign, CampaignFactory, CampaignFactory__factory, Campaign__factory } from 'typechain';

export const numOf = (str: string): string => {
  return str.replace(/\s/g, '');
};

export const toWei = (str: string): BigNumber => {
  return ethers.utils.parseEther(numOf(str));
};

export const toBigNumber = (num: string, decimals: number): BigNumber => {
  return ethers.utils.parseUnits(num, decimals);
};

// eslint-disable-next-line @typescript-eslint/ban-types
export const shouldFail = async (fun: Function): Promise<void> => {
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  await new Promise<void>(async (resolve, reject): Promise<void> => {
    try {
      await fun();
    } catch (e) {
      resolve();
    }
    reject('function execution did not failed');
  });
};

export async function getTimestamp(block?: string): Promise<BigNumber> {
  return ethers.BigNumber.from((await ethers.provider.getBlock(block == undefined ? 'latest' : block)).timestamp);
}

export async function fastForwardFromBlock(block: string, seconds: BigNumber): Promise<void> {
  const now = await getTimestamp();
  const timeSinceTimemark = now.sub(await getTimestamp(block));
  const fastforwardAmount = seconds.sub(timeSinceTimemark);
  await ethers.provider.send('evm_increaseTime', [fastforwardAmount.toNumber()]);
  await ethers.provider.send('evm_mine', []);
}

export async function fastForwardToTimestamp(toTimestamp: BigNumber): Promise<void> {
  const now = await getTimestamp();
  const fastforwardAmount = toTimestamp.sub(now);
  await ethers.provider.send('evm_increaseTime', [fastforwardAmount.toNumber()]);
  await ethers.provider.send('evm_mine', []);
}

export const deployCampaign = async (): Promise<Campaign> => {
  const campaignDeployer = await ethers.getContractFactory<Campaign__factory>('Campaign');
  const campaign = await campaignDeployer.deploy();
  return await campaign.deployed();
};

export const deployCampaignFactory = async (campaignMasterAddress: string): Promise<CampaignFactory> => {
  const campaignFactoryDeployer = await ethers.getContractFactory<CampaignFactory__factory>('CampaignFactory');
  const campaignFactory = await campaignFactoryDeployer.deploy(campaignMasterAddress);
  return await campaignFactory.deployed();
};

export const ZERO_BYTES = '0x0000000000000000000000000000000000000000000000000000000000000000';
export const SECONDS_IN_WEEK = 604800;
export const SECONDS_IN_DAY = 86400;
