/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  ProjectFactory,
  ProjectFactoryInterface,
} from "../ProjectFactory";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "projectAddress",
        type: "address",
      },
    ],
    name: "CreatedProject",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "minimum",
        type: "uint256",
      },
    ],
    name: "CreateCampaign",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
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
    name: "deployedCampaigns",
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
    name: "getDeployedCampaigns",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506112b7806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063339d50a5146100465780634acb9d4f146100765780639ab5685714610094575b600080fd5b610060600480360381019061005b9190610291565b6100c4565b60405161006d9190610361565b60405180910390f35b61007e610103565b60405161008b919061037c565b60405180910390f35b6100ae60048036038101906100a99190610291565b610191565b6040516100bb9190610361565b60405180910390f35b600081815481106100d457600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6060600080548060200260200160405190810160405280929190818152602001828054801561018757602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001906001019080831161013d575b5050505050905090565b60008082336040516101a29061026f565b6101ad92919061039e565b604051809103906000f0801580156101c9573d6000803e3d6000fd5b5090506000819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f49990b7ced939700389078f342a0053e2b1142014606f84d3d56f5362b1747718160405161025e9190610361565b60405180910390a180915050919050565b610e298061045983390190565b60008135905061028b81610441565b92915050565b6000602082840312156102a7576102a661043c565b5b60006102b58482850161027c565b91505092915050565b60006102ca83836102d6565b60208301905092915050565b6102df81610400565b82525050565b6102ee81610400565b82525050565b60006102ff826103d7565b61030981856103ef565b9350610314836103c7565b8060005b8381101561034557815161032c88826102be565b9750610337836103e2565b925050600181019050610318565b5085935050505092915050565b61035b81610432565b82525050565b600060208201905061037660008301846102e5565b92915050565b6000602082019050818103600083015261039681846102f4565b905092915050565b60006040820190506103b36000830185610352565b6103c060208301846102e5565b9392505050565b6000819050602082019050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600061040b82610412565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600080fd5b61044a81610432565b811461045557600080fd5b5056fe608060405260405162000e2938038062000e298339818101604052810190620000299190620000a6565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600181905550505062000164565b600081519050620000898162000130565b92915050565b600081519050620000a0816200014a565b92915050565b60008060408385031215620000c057620000bf6200012b565b5b6000620000d0858286016200008f565b9250506020620000e38582860162000078565b9150509250929050565b6000620000fa8262000101565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600080fd5b6200013b81620000ed565b81146200014757600080fd5b50565b620001558162000121565b81146200016157600080fd5b50565b610cb580620001746000396000f3fe60806040526004361061007b5760003560e01c8063b309a91a1161004e578063b309a91a14610133578063cc58b5ef1461013d578063d7d1bbdb14610159578063e9f146a3146101755761007b565b8063481c6a751461008057806381d12c58146100ab5780638a9cfd55146100ec578063aaffadf314610108575b600080fd5b34801561008c57600080fd5b506100956101a0565b6040516100a29190610907565b60405180910390f35b3480156100b757600080fd5b506100d260048036038101906100cd9190610874565b6101c4565b6040516100e3959493929190610922565b60405180910390f35b61010660048036038101906101019190610805565b6102af565b005b34801561011457600080fd5b5061011d6103c6565b60405161012a919061097c565b60405180910390f35b61013b6103cc565b005b61015760048036038101906101529190610874565b61044c565b005b610173600480360381019061016e9190610874565b610584565b005b34801561018157600080fd5b5061018a6106c2565b604051610197919061097c565b60405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60046020528060005260406000206000915090508060000180546101e790610ac4565b80601f016020809104026020016040519081016040528092919081815260200182805461021390610ac4565b80156102605780601f1061023557610100808354040283529160200191610260565b820191906000526020600020905b81548152906001019060200180831161024357829003601f168201915b5050505050908060010154908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020160149054906101000a900460ff16908060030154905085565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461030757600080fd5b6000600460006003600081548092919061032090610b27565b91905055815260200190815260200160002090508381600001908051906020019061034c9291906106c8565b50828160010181905550818160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008160020160146101000a81548160ff0219169083151502179055506000816003018190555050505050565b60015481565b60015434116103da57600080fd5b6001600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506002600081548092919061044590610b27565b9190505550565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146104a457600080fd5b60006004600083815260200190815260200160002090508060020160149054906101000a900460ff16156104d757600080fd5b600280546104e59190610a09565b8160030154116104f457600080fd5b8060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc82600101549081150290604051600060405180830381858888f19350505050158015610562573d6000803e3d6000fd5b5060018160020160146101000a81548160ff0219169083151502179055505050565b6000600460008381526020019081526020016000209050600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166105f157600080fd5b8060040160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561064a57600080fd5b60018160040160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508060030160008154809291906106b990610b27565b91905055505050565b60025481565b8280546106d490610ac4565b90600052602060002090601f0160209004810192826106f6576000855561073d565b82601f1061070f57805160ff191683800117855561073d565b8280016001018555821561073d579182015b8281111561073c578251825591602001919060010190610721565b5b50905061074a919061074e565b5090565b5b8082111561076757600081600090555060010161074f565b5090565b600061077e610779846109bc565b610997565b90508281526020810184848401111561079a57610799610c31565b5b6107a5848285610a82565b509392505050565b6000813590506107bc81610c51565b92915050565b600082601f8301126107d7576107d6610c2c565b5b81356107e784826020860161076b565b91505092915050565b6000813590506107ff81610c68565b92915050565b60008060006060848603121561081e5761081d610c3b565b5b600084013567ffffffffffffffff81111561083c5761083b610c36565b5b610848868287016107c2565b9350506020610859868287016107f0565b925050604061086a868287016107ad565b9150509250925092565b60006020828403121561088a57610889610c3b565b5b6000610898848285016107f0565b91505092915050565b6108aa81610a3a565b82525050565b6108b981610a4c565b82525050565b60006108ca826109ed565b6108d481856109f8565b93506108e4818560208601610a91565b6108ed81610c40565b840191505092915050565b61090181610a78565b82525050565b600060208201905061091c60008301846108a1565b92915050565b600060a082019050818103600083015261093c81886108bf565b905061094b60208301876108f8565b61095860408301866108a1565b61096560608301856108b0565b61097260808301846108f8565b9695505050505050565b600060208201905061099160008301846108f8565b92915050565b60006109a16109b2565b90506109ad8282610af6565b919050565b6000604051905090565b600067ffffffffffffffff8211156109d7576109d6610bfd565b5b6109e082610c40565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b6000610a1482610a78565b9150610a1f83610a78565b925082610a2f57610a2e610b9f565b5b828204905092915050565b6000610a4582610a58565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610aaf578082015181840152602081019050610a94565b83811115610abe576000848401525b50505050565b60006002820490506001821680610adc57607f821691505b60208210811415610af057610aef610bce565b5b50919050565b610aff82610c40565b810181811067ffffffffffffffff82111715610b1e57610b1d610bfd565b5b80604052505050565b6000610b3282610a78565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610b6557610b64610b70565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b610c5a81610a3a565b8114610c6557600080fd5b50565b610c7181610a78565b8114610c7c57600080fd5b5056fea264697066735822122041da91c6558be763979d401e94075fa8e7885ce6cb31593fdb0d280a4025172464736f6c63430008060033a264697066735822122064081a7299d1dcff0281cd127cdc1bdeb0f732f1448ff2ab503700c38466431064736f6c63430008060033";

type ProjectFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ProjectFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ProjectFactory__factory extends ContractFactory {
  constructor(...args: ProjectFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ProjectFactory> {
    return super.deploy(overrides || {}) as Promise<ProjectFactory>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ProjectFactory {
    return super.attach(address) as ProjectFactory;
  }
  override connect(signer: Signer): ProjectFactory__factory {
    return super.connect(signer) as ProjectFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProjectFactoryInterface {
    return new utils.Interface(_abi) as ProjectFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ProjectFactory {
    return new Contract(address, _abi, signerOrProvider) as ProjectFactory;
  }
}
