/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface ProjectFactoryInterface extends utils.Interface {
  functions: {
    "CreateCampaign(uint256)": FunctionFragment;
    "deployedCampaigns(uint256)": FunctionFragment;
    "getDeployedCampaigns()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "CreateCampaign"
      | "deployedCampaigns"
      | "getDeployedCampaigns"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "CreateCampaign",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "deployedCampaigns",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getDeployedCampaigns",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "CreateCampaign",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deployedCampaigns",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDeployedCampaigns",
    data: BytesLike
  ): Result;

  events: {
    "CreatedProject(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CreatedProject"): EventFragment;
}

export interface CreatedProjectEventObject {
  projectAddress: string;
}
export type CreatedProjectEvent = TypedEvent<
  [string],
  CreatedProjectEventObject
>;

export type CreatedProjectEventFilter = TypedEventFilter<CreatedProjectEvent>;

export interface ProjectFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ProjectFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    CreateCampaign(
      minimum: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    deployedCampaigns(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getDeployedCampaigns(overrides?: CallOverrides): Promise<[string[]]>;
  };

  CreateCampaign(
    minimum: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  deployedCampaigns(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getDeployedCampaigns(overrides?: CallOverrides): Promise<string[]>;

  callStatic: {
    CreateCampaign(
      minimum: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    deployedCampaigns(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getDeployedCampaigns(overrides?: CallOverrides): Promise<string[]>;
  };

  filters: {
    "CreatedProject(address)"(projectAddress?: null): CreatedProjectEventFilter;
    CreatedProject(projectAddress?: null): CreatedProjectEventFilter;
  };

  estimateGas: {
    CreateCampaign(
      minimum: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    deployedCampaigns(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDeployedCampaigns(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    CreateCampaign(
      minimum: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    deployedCampaigns(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDeployedCampaigns(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}