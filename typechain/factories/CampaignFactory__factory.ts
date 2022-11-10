/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CampaignFactory,
  CampaignFactoryInterface,
} from "../CampaignFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_master",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newCampaign",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "_rulesetUri",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_admin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_oracle",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "activationTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "CampaignCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "campaignAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_rewardRulesetUri",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_merkleRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_sharesUri",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
      {
        internalType: "address",
        name: "_oracle",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_activationTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_CHALLENGE_PERIOD",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_ACTIVATION_PERIOD",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_ACTIVE_DURATION",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "createAndPublishCampaign",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_rulesetUri",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
      {
        internalType: "address",
        name: "_oracle",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_activationTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_CHALLENGE_PERIOD",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_ACTIVATION_PERIOD",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_ACTIVE_DURATION",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "createCampaign",
    outputs: [
      {
        internalType: "address payable",
        name: "proxy",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161060638038061060683398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b610573806100936000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80635357af3b146100465780636e1a1fac1461005b578063a8e0bb661461008a575b600080fd5b6100596100543660046104a3565b61009d565b005b61006e61006936600461041c565b6101bd565b6040516001600160a01b03909116815260200160405180910390f35b61006e610098366004610435565b6101da565b6040516354705db360e11b8152600481018b90526001600160a01b03808916602483015287166044820152606481018690526084810185905260a4810184905260c4810183905260e48101829052600090309063a8e0bb669061010401602060405180830381600087803b15801561011457600080fd5b505af1158015610128573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061014c91906103ff565b604051630bdce82f60e11b8152600481018c9052602481018b90529091506001600160a01b038216906317b9d05e90604401600060405180830381600087803b15801561019857600080fd5b505af11580156101ac573d6000803e3d6000fd5b505050505050505050505050505050565b600080546101d4906001600160a01b0316836102ee565b92915050565b600080546101f1906001600160a01b03168361035b565b6040516354c565a360e11b8152600481018b90526001600160a01b038a811660248301528981166044830152606482018990526084820188905260a4820187905260c482018690529192509082169063a98acb469060e401600060405180830381600087803b15801561026357600080fd5b505af1158015610277573d6000803e3d6000fd5b5050604080513381526001600160a01b0385811660208301528183018e90528c811660608301528b16608082015260a081018a905260c0810186905290517f5e2acb8aee19e83f63206e8fd625b2113a58e47d6986e1e5514d514f8e19411093509081900360e0019150a198975050505050505050565b6000610354838330604051733d602d80600a3d3981f3363d3d373d3d3d363d7360601b8152606093841b60148201526f5af43d82803e903d91602b57fd5bf3ff60801b6028820152921b6038830152604c8201526037808220606c830152605591012090565b9392505050565b6000604051733d602d80600a3d3981f3363d3d373d3d3d363d7360601b81528360601b60148201526e5af43d82803e903d91602b57fd5bf360881b6028820152826037826000f59150506001600160a01b0381166101d45760405162461bcd60e51b815260206004820152601760248201527f455243313136373a2063726561746532206661696c6564000000000000000000604482015260640160405180910390fd5b60006020828403121561041157600080fd5b815161035481610525565b60006020828403121561042e57600080fd5b5035919050565b600080600080600080600080610100898b03121561045257600080fd5b88359750602089013561046481610525565b9650604089013561047481610525565b979a96995096976060810135975060808101359660a0820135965060c0820135955060e0909101359350915050565b6000806000806000806000806000806101408b8d0312156104c357600080fd5b8a35995060208b0135985060408b0135975060608b01356104e381610525565b965060808b01356104f381610525565b999c989b50969995989760a0870135975060c08701359660e08101359650610100810135955061012001359350915050565b6001600160a01b038116811461053a57600080fd5b5056fea264697066735822122078ec79de410c82408cb3611f448a2589995de98767eaa8b1f945147c751ec17064736f6c63430008060033";

type CampaignFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CampaignFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CampaignFactory__factory extends ContractFactory {
  constructor(...args: CampaignFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "CampaignFactory";
  }

  deploy(
    _master: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CampaignFactory> {
    return super.deploy(_master, overrides || {}) as Promise<CampaignFactory>;
  }
  getDeployTransaction(
    _master: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_master, overrides || {});
  }
  attach(address: string): CampaignFactory {
    return super.attach(address) as CampaignFactory;
  }
  connect(signer: Signer): CampaignFactory__factory {
    return super.connect(signer) as CampaignFactory__factory;
  }
  static readonly contractName: "CampaignFactory";
  public readonly contractName: "CampaignFactory";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CampaignFactoryInterface {
    return new utils.Interface(_abi) as CampaignFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CampaignFactory {
    return new Contract(address, _abi, signerOrProvider) as CampaignFactory;
  }
}
