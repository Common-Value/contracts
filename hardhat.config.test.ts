import baseConfig from './hardhat.config';

(baseConfig as any).networks.hardhat.mining = {
  auto: true,
  interval: 0,
};

export default baseConfig;
