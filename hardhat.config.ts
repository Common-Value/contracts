/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/order */
// This adds support for typescript paths mappings
import 'tsconfig-paths/register';

import '@typechain/hardhat';
import '@nomiclabs/hardhat-waffle';
import '@nomiclabs/hardhat-ethers';
import '@tenderly/hardhat-tenderly';
import 'hardhat-deploy';
import 'solidity-coverage';
import 'hardhat-gas-reporter';
import '@nomiclabs/hardhat-etherscan';

import * as fs from 'fs';

import { HardhatUserConfig, task } from 'hardhat/config';

import { config as envConfig } from 'dotenv';
envConfig({ path: './.env' });

const mnemonicPath = './mnemonic.secret';
const getMnemonic = (): string => {
  try {
    return fs.readFileSync(mnemonicPath).toString().trim();
  } catch (e) {
    console.log('missing mnemonic file in deployment to live network');
  }
  return '';
};

export const LOCAL_CHAIN_ID = 1337;

const config: HardhatUserConfig = {
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
    },
  },
  networks: {
    hardhat: {
      mining: {
        auto: false,
        interval: 5000,
      },
      chainId: LOCAL_CHAIN_ID,
    },
    mainnet: {
      url: `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_MAINNET_KEY}`,
      accounts: {
        mnemonic: getMnemonic(),
      },
    },
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_GOERLI_KEY}`,
      accounts: {
        mnemonic: getMnemonic(),
      },
    },
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_MUMBAI_KEY}`,
      accounts: {
        mnemonic: getMnemonic(),
      },
    },
    polygon: {
      url: `https://polygon-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_POLYGON_KEY}`,
      accounts: {
        mnemonic: getMnemonic(),
      },
    },
    gnosis: {
      url: 'https://rpc.gnosischain.com/',
      accounts: {
        mnemonic: getMnemonic(),
      },
    },
    chiado: {
      url: 'https://rpc.chiadochain.net',
      accounts: {
        mnemonic: getMnemonic(),
      },
    },
  },
  etherscan: {
    apiKey: {
      goerli: `${process.env.ETHERSCAN_API_KEY}`,
      mainnet: `${process.env.ETHERSCAN_API_KEY}`,
      polygonMumbai: `${process.env.POLYSCAN_API_KEY}`,
      polygon: `${process.env.POLYSCAN_API_KEY}`,
    },
  },
  solidity: {
    compilers: [
      {
        version: '0.8.6',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  paths: {
    cache: './generated/cache',
    artifacts: './generated/artifacts',
    deployments: './generated/deployments',
  },
  typechain: {
    outDir: './typechain',
  },
};
export default config;

/*
task('wallet', 'Create a wallet (pk) link', async (_, { ethers }) => {
  const randomWallet = ethers.Wallet.createRandom();
  const { privateKey } = randomWallet._signingKey();
  console.log(`🔐 WALLET Generated as ${randomWallet.address}`);
  console.log(`🔗 http://localhost:3000/pk#${privateKey}`);
});

task('reset', 'Get tx receipt').setAction(async (_, hre) => {
  await hre.network.provider.send('hardhat_reset');
});
*/
