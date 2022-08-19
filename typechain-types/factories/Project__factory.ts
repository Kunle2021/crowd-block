/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
  BigNumberish,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Project, ProjectInterface } from "../Project";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "minimum",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "details",
        type: "string",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "address",
        name: "creator",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "Contribute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "approveRequest",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "contributersCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "createRequest",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "finishRequest",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getNumRequest",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSummary",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "numRequests",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minContribution",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "contributersCount",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "projectDetails",
            type: "string",
          },
          {
            internalType: "string",
            name: "projectName",
            type: "string",
          },
          {
            internalType: "address",
            name: "manager",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256",
          },
        ],
        internalType: "struct Project.Summary",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "manager",
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
    inputs: [],
    name: "minContribution",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "projectDetails",
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
    inputs: [],
    name: "projectName",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "requests",
    outputs: [
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "bool",
        name: "complete",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "approverCount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "sum",
    outputs: [
      {
        internalType: "uint256",
        name: "numRequests",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minContribution",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "contributersCount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "projectDetails",
        type: "string",
      },
      {
        internalType: "string",
        name: "projectName",
        type: "string",
      },
      {
        internalType: "address",
        name: "manager",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260405162001c8e38038062001c8e833981810160405281019062000029919062000208565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600181905550826003908051906020019062000088929190620000ac565b508160049080519060200190620000a1929190620000ac565b5050505050620004ae565b828054620000ba906200038b565b90600052602060002090601f016020900481019282620000de57600085556200012a565b82601f10620000f957805160ff19168380011785556200012a565b828001600101855582156200012a579182015b82811115620001295782518255916020019190600101906200010c565b5b5090506200013991906200013d565b5090565b5b80821115620001585760008160009055506001016200013e565b5090565b6000620001736200016d84620002e1565b620002b8565b9050828152602081018484840111156200019257620001916200045a565b5b6200019f84828562000355565b509392505050565b600081519050620001b8816200047a565b92915050565b600082601f830112620001d657620001d562000455565b5b8151620001e88482602086016200015c565b91505092915050565b600081519050620002028162000494565b92915050565b6000806000806080858703121562000225576200022462000464565b5b60006200023587828801620001f1565b945050602085015167ffffffffffffffff8111156200025957620002586200045f565b5b6200026787828801620001be565b935050604085015167ffffffffffffffff8111156200028b576200028a6200045f565b5b6200029987828801620001be565b9250506060620002ac87828801620001a7565b91505092959194509250565b6000620002c4620002d7565b9050620002d28282620003c1565b919050565b6000604051905090565b600067ffffffffffffffff821115620002ff57620002fe62000426565b5b6200030a8262000469565b9050602081019050919050565b600062000324826200032b565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b838110156200037557808201518184015260208101905062000358565b8381111562000385576000848401525b50505050565b60006002820490506001821680620003a457607f821691505b60208210811415620003bb57620003ba620003f7565b5b50919050565b620003cc8262000469565b810181811067ffffffffffffffff82111715620003ee57620003ed62000426565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b620004858162000317565b81146200049157600080fd5b50565b6200049f816200034b565b8114620004ab57600080fd5b50565b6117d080620004be6000396000f3fe6080604052600436106100c25760003560e01c80639a33e3001161007f578063b309a91a11610059578063b309a91a14610269578063cc58b5ef14610273578063d7d1bbdb1461028f578063e9f146a3146102ab576100c2565b80639a33e300146101e8578063aaffadf314610213578063b2b475271461023e576100c2565b80632accd144146100c75780634051ddac146100f2578063481c6a751461011d5780637e459c601461014857806381d12c581461018b5780638a9cfd55146101cc575b600080fd5b3480156100d357600080fd5b506100dc6102d6565b6040516100e9919061136b565b60405180910390f35b3480156100fe57600080fd5b50610107610364565b60405161011491906113e7565b60405180910390f35b34801561012957600080fd5b506101326107d8565b60405161013f9190611350565b60405180910390f35b34801561015457600080fd5b5061016f600480360381019061016a9190611127565b6107fc565b6040516101829796959493929190611424565b60405180910390f35b34801561019757600080fd5b506101b260048036038101906101ad91906111c3565b61096e565b6040516101c395949392919061138d565b60405180910390f35b6101e660048036038101906101e19190611154565b610a59565b005b3480156101f457600080fd5b506101fd610b70565b60405161020a919061136b565b60405180910390f35b34801561021f57600080fd5b50610228610bfe565b6040516102359190611409565b60405180910390f35b34801561024a57600080fd5b50610253610c04565b6040516102609190611409565b60405180910390f35b610271610c0e565b005b61028d600480360381019061028891906111c3565b610c8e565b005b6102a960048036038101906102a491906111c3565b610dc6565b005b3480156102b757600080fd5b506102c0610f04565b6040516102cd9190611409565b60405180910390f35b600380546102e3906115df565b80601f016020809104026020016040519081016040528092919081815260200182805461030f906115df565b801561035c5780601f106103315761010080835404028352916020019161035c565b820191906000526020600020905b81548152906001019060200180831161033f57829003601f168201915b505050505081565b61036c610f0a565b600554600860003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000181905550600154600860003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010181905550600254600860003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201819055506003600860003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301908054610497906115df565b6104a2929190610f5d565b506004600860003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206004019080546104f3906115df565b6104fe929190610f5d565b5060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600860003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555047600860003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060060181905550600860003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060e001604052908160008201548152602001600182015481526020016002820154815260200160038201805461065f906115df565b80601f016020809104026020016040519081016040528092919081815260200182805461068b906115df565b80156106d85780601f106106ad576101008083540402835291602001916106d8565b820191906000526020600020905b8154815290600101906020018083116106bb57829003601f168201915b505050505081526020016004820180546106f1906115df565b80601f016020809104026020016040519081016040528092919081815260200182805461071d906115df565b801561076a5780601f1061073f5761010080835404028352916020019161076a565b820191906000526020600020905b81548152906001019060200180831161074d57829003601f168201915b505050505081526020016005820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600682015481525050905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6008602052806000526040600020600091509050806000015490806001015490806002015490806003018054610831906115df565b80601f016020809104026020016040519081016040528092919081815260200182805461085d906115df565b80156108aa5780601f1061087f576101008083540402835291602001916108aa565b820191906000526020600020905b81548152906001019060200180831161088d57829003601f168201915b5050505050908060040180546108bf906115df565b80601f01602080910402602001604051908101604052809291908181526020018280546108eb906115df565b80156109385780601f1061090d57610100808354040283529160200191610938565b820191906000526020600020905b81548152906001019060200180831161091b57829003601f168201915b5050505050908060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060060154905087565b6006602052806000526040600020600091509050806000018054610991906115df565b80601f01602080910402602001604051908101604052809291908181526020018280546109bd906115df565b8015610a0a5780601f106109df57610100808354040283529160200191610a0a565b820191906000526020600020905b8154815290600101906020018083116109ed57829003601f168201915b5050505050908060010154908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020160149054906101000a900460ff16908060030154905085565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610ab157600080fd5b60006006600060056000815480929190610aca90611642565b919050558152602001908152602001600020905083816000019080519060200190610af6929190610fea565b50828160010181905550818160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008160020160146101000a81548160ff0219169083151502179055506000816003018190555050505050565b60048054610b7d906115df565b80601f0160208091040260200160405190810160405280929190818152602001828054610ba9906115df565b8015610bf65780601f10610bcb57610100808354040283529160200191610bf6565b820191906000526020600020905b815481529060010190602001808311610bd957829003601f168201915b505050505081565b60015481565b6000600554905090565b6001543411610c1c57600080fd5b6001600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060026000815480929190610c8790611642565b9190505550565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610ce657600080fd5b60006006600083815260200190815260200160002090508060020160149054906101000a900460ff1615610d1957600080fd5b60028054610d279190611524565b816003015411610d3657600080fd5b8060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc82600101549081150290604051600060405180830381858888f19350505050158015610da4573d6000803e3d6000fd5b5060018160020160146101000a81548160ff0219169083151502179055505050565b6000600660008381526020019081526020016000209050600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610e3357600080fd5b8060040160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610e8c57600080fd5b60018160040160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550806003016000815480929190610efb90611642565b91905055505050565b60025481565b6040518060e001604052806000815260200160008152602001600081526020016060815260200160608152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b828054610f69906115df565b90600052602060002090601f016020900481019282610f8b5760008555610fd9565b82601f10610f9c5780548555610fd9565b82800160010185558215610fd957600052602060002091601f016020900482015b82811115610fd8578254825591600101919060010190610fbd565b5b509050610fe69190611070565b5090565b828054610ff6906115df565b90600052602060002090601f016020900481019282611018576000855561105f565b82601f1061103157805160ff191683800117855561105f565b8280016001018555821561105f579182015b8281111561105e578251825591602001919060010190611043565b5b50905061106c9190611070565b5090565b5b80821115611089576000816000905550600101611071565b5090565b60006110a061109b846114c6565b6114a1565b9050828152602081018484840111156110bc576110bb61174c565b5b6110c784828561159d565b509392505050565b6000813590506110de8161176c565b92915050565b600082601f8301126110f9576110f8611747565b5b813561110984826020860161108d565b91505092915050565b60008135905061112181611783565b92915050565b60006020828403121561113d5761113c611756565b5b600061114b848285016110cf565b91505092915050565b60008060006060848603121561116d5761116c611756565b5b600084013567ffffffffffffffff81111561118b5761118a611751565b5b611197868287016110e4565b93505060206111a886828701611112565b92505060406111b9868287016110cf565b9150509250925092565b6000602082840312156111d9576111d8611756565b5b60006111e784828501611112565b91505092915050565b6111f981611555565b82525050565b61120881611555565b82525050565b61121781611567565b82525050565b6000611228826114f7565b6112328185611502565b93506112428185602086016115ac565b61124b8161175b565b840191505092915050565b6000611261826114f7565b61126b8185611513565b935061127b8185602086016115ac565b6112848161175b565b840191505092915050565b600060e0830160008301516112a76000860182611332565b5060208301516112ba6020860182611332565b5060408301516112cd6040860182611332565b50606083015184820360608601526112e5828261121d565b915050608083015184820360808601526112ff828261121d565b91505060a083015161131460a08601826111f0565b5060c083015161132760c0860182611332565b508091505092915050565b61133b81611593565b82525050565b61134a81611593565b82525050565b600060208201905061136560008301846111ff565b92915050565b600060208201905081810360008301526113858184611256565b905092915050565b600060a08201905081810360008301526113a78188611256565b90506113b66020830187611341565b6113c360408301866111ff565b6113d0606083018561120e565b6113dd6080830184611341565b9695505050505050565b60006020820190508181036000830152611401818461128f565b905092915050565b600060208201905061141e6000830184611341565b92915050565b600060e082019050611439600083018a611341565b6114466020830189611341565b6114536040830188611341565b81810360608301526114658187611256565b905081810360808301526114798186611256565b905061148860a08301856111ff565b61149560c0830184611341565b98975050505050505050565b60006114ab6114bc565b90506114b78282611611565b919050565b6000604051905090565b600067ffffffffffffffff8211156114e1576114e0611718565b5b6114ea8261175b565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600061152f82611593565b915061153a83611593565b92508261154a576115496116ba565b5b828204905092915050565b600061156082611573565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b838110156115ca5780820151818401526020810190506115af565b838111156115d9576000848401525b50505050565b600060028204905060018216806115f757607f821691505b6020821081141561160b5761160a6116e9565b5b50919050565b61161a8261175b565b810181811067ffffffffffffffff8211171561163957611638611718565b5b80604052505050565b600061164d82611593565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156116805761167f61168b565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b61177581611555565b811461178057600080fd5b50565b61178c81611593565b811461179757600080fd5b5056fea26469706673582212202f1606ebc40f39129f94d4b1dbe28636e791c158b00e24236ee8b543b943c33e64736f6c63430008060033";

type ProjectConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ProjectConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Project__factory extends ContractFactory {
  constructor(...args: ProjectConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    minimum: PromiseOrValue<BigNumberish>,
    details: PromiseOrValue<string>,
    name: PromiseOrValue<string>,
    creator: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<Project> {
    return super.deploy(
      minimum,
      details,
      name,
      creator,
      overrides || {}
    ) as Promise<Project>;
  }
  override getDeployTransaction(
    minimum: PromiseOrValue<BigNumberish>,
    details: PromiseOrValue<string>,
    name: PromiseOrValue<string>,
    creator: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      minimum,
      details,
      name,
      creator,
      overrides || {}
    );
  }
  override attach(address: string): Project {
    return super.attach(address) as Project;
  }
  override connect(signer: Signer): Project__factory {
    return super.connect(signer) as Project__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProjectInterface {
    return new utils.Interface(_abi) as ProjectInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Project {
    return new Contract(address, _abi, signerOrProvider) as Project;
  }
}
