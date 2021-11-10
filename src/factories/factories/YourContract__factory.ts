/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { YourContract, YourContractInterface } from "../YourContract";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "purpose",
        type: "string",
      },
    ],
    name: "SetPurpose",
    type: "event",
  },
  {
    inputs: [],
    name: "purpose",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "newPurpose",
        type: "string",
      },
    ],
    name: "setPurpose",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c0604052601960808190527f4275696c64696e6720556e73746f707061626c6520417070730000000000000060a090815261003e9160009190610051565b5034801561004b57600080fd5b50610125565b82805461005d906100ea565b90600052602060002090601f01602090048101928261007f57600085556100c5565b82601f1061009857805160ff19168380011785556100c5565b828001600101855582156100c5579182015b828111156100c55782518255916020019190600101906100aa565b506100d19291506100d5565b5090565b5b808211156100d157600081556001016100d6565b600181811c908216806100fe57607f821691505b6020821081141561011f57634e487b7160e01b600052602260045260246000fd5b50919050565b6105aa806101346000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806370740aab1461003b578063eb68757f14610059575b600080fd5b61004361006e565b6040516100509190610509565b60405180910390f35b61006c610067366004610312565b610100565b005b60606000805461007d90610523565b80601f01602080910402602001604051908101604052809291908181526020018280546100a990610523565b80156100f65780601f106100cb576101008083540402835291602001916100f6565b820191906000526020600020905b8154815290600101906020018083116100d957829003601f168201915b5050505050905090565b8051610113906000906020840190610279565b506101cf336040518060400160405280600e81526020016d73657420707572706f736520746f60901b8152506000805461014c90610523565b80601f016020809104026020016040519081016040528092919081815260200182805461017890610523565b80156101c55780601f1061019a576101008083540402835291602001916101c5565b820191906000526020600020905b8154815290600101906020018083116101a857829003601f168201915b505050505061020c565b7f6ea5d6383a120235c7728a9a6751672a8ac068e4ed34dcca2ee444182c1812de336000604051610201929190610450565b60405180910390a150565b61025383838360405160240161022493929190610410565b60408051601f198184030181529190526020810180516001600160e01b031663fb77226560e01b179052610258565b505050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b82805461028590610523565b90600052602060002090601f0160209004810192826102a757600085556102ed565b82601f106102c057805160ff19168380011785556102ed565b828001600101855582156102ed579182015b828111156102ed5782518255916020019190600101906102d2565b506102f99291506102fd565b5090565b5b808211156102f957600081556001016102fe565b60006020828403121561032457600080fd5b813567ffffffffffffffff8082111561033c57600080fd5b818401915084601f83011261035057600080fd5b8135818111156103625761036261055e565b604051601f8201601f19908116603f0116810190838211818310171561038a5761038a61055e565b816040528281528760208487010111156103a357600080fd5b826020860160208301376000928101602001929092525095945050505050565b6000815180845260005b818110156103e9576020818501810151868301820152016103cd565b818111156103fb576000602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b0384168152606060208201819052600090610434908301856103c3565b828103604084015261044681856103c3565b9695505050505050565b60018060a01b0383168152600060206040818401526000845481600182811c91508083168061048057607f831692505b85831081141561049e57634e487b7160e01b85526022600452602485fd5b60408801839052606088018180156104bd57600181146104ce576104f9565b60ff198616825287820196506104f9565b60008b81526020902060005b868110156104f3578154848201529085019089016104da565b83019750505b50949a9950505050505050505050565b60208152600061051c60208301846103c3565b9392505050565b600181811c9082168061053757607f821691505b6020821081141561055857634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fdfea2646970667358221220b6af53b488014d39fb07c8c12388e21a7e260ecc0f28f15645ea782db5d8d93764736f6c63430008060033";

export class YourContract__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<YourContract> {
    return super.deploy(overrides || {}) as Promise<YourContract>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): YourContract {
    return super.attach(address) as YourContract;
  }
  connect(signer: Signer): YourContract__factory {
    return super.connect(signer) as YourContract__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): YourContractInterface {
    return new utils.Interface(_abi) as YourContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): YourContract {
    return new Contract(address, _abi, signerOrProvider) as YourContract;
  }
}
