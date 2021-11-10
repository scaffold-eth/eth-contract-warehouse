/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/order */
// This adds support for typescript paths mappings
import 'tsconfig-paths/register';
import 'global-jsdom/register';

import { utils } from 'ethers';
import '@typechain/hardhat';
import '@nomiclabs/hardhat-waffle';
import '@nomiclabs/hardhat-ethers';
import '@tenderly/hardhat-tenderly';
import 'hardhat-deploy';
// not required as we are using @nomiclabs/hardhat-ethers@npm:hardhat-deploy-ethers

// import 'solidity-coverage';

import * as fs from 'fs';

import { HardhatUserConfig } from 'hardhat/config';
import { TEthers } from '~~/helpers/hardhat-type-extensions';

declare module 'hardhat/types/runtime' {
  // This is an example of an extension to the Hardhat Runtime Environment.
  // This new field will be available in tasks' actions, scripts, and tests.
  export interface HardhatRuntimeEnvironment {
    ethers: TEthers;
  }
}

const { isAddress, getAddress, formatUnits, parseUnits } = utils;
//
// Select the network you want to deploy to here:
//
const defaultNetwork = 'localhost';

const getMnemonic = (): string => {
  try {
    return fs.readFileSync('./mnemonic.secret').toString().trim();
  } catch (e) {
    // @ts-ignore
    if (defaultNetwork !== 'localhost') {
      console.log(
        '☢️ WARNING: No mnemonic file created for a deploy account. Try `yarn run generate` and then `yarn run account`.'
      );
    }
  }
  return '';
};

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      mining: {
        auto: true,
      },
    },
  },
  mocha: {
    bail: false,
    allowUncaught: false,
    require: ['ts-node/register'],
    timeout: 30000,
    reporter: process.env.GITHUB_ACTIONS === 'true' ? 'mocha-junit-reporter' : 'spec',
    reporterOptions: {
      mochaFile: 'testresult.xml',
    },
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
    },
  },
  // don't forget to set your provider like:
  // REACT_APP_PROVIDER=https://dai.poa.network in packages/react-app/.env
  // (then your frontend will talk to your contracts on the live network!)
  // (you will need to restart the `yarn run start` dev server after editing the .env)
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
      {
        version: '0.7.6',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: '0.6.7',
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
    sources: './src/contracts',
    cache: './generated/cache',
    artifacts: './generated/artifacts',
    deployments: './generated/deployments',
  },
  typechain: {
    outDir: './src/factories',
  },
};
export default config;
