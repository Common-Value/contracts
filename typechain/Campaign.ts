/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface CampaignInterface extends utils.Interface {
  contractName: "Campaign";
  functions: {
    "ACTIVATION_PERIOD()": FunctionFragment;
    "ACTIVE_DURATION()": FunctionFragment;
    "CHALLENGE_PERIOD()": FunctionFragment;
    "TOTAL_SHARES()": FunctionFragment;
    "activationTime()": FunctionFragment;
    "admin()": FunctionFragment;
    "approvedMerkleRoot()": FunctionFragment;
    "balanceOfAsset(address)": FunctionFragment;
    "campaignCancelled()": FunctionFragment;
    "cancelCampaign()": FunctionFragment;
    "challenge()": FunctionFragment;
    "checkMerkleRootUpdateAllowed(uint256)": FunctionFragment;
    "claim(address,uint256,bytes32[],address[],address)": FunctionFragment;
    "claimed(address,address)": FunctionFragment;
    "deployTime()": FunctionFragment;
    "fund(address,uint256)": FunctionFragment;
    "getValidRoot(uint256)": FunctionFragment;
    "initCampaign(bytes32,address,address,uint256,uint256,uint256,uint256)": FunctionFragment;
    "isChallengePeriod(uint256)": FunctionFragment;
    "isPendingActive(uint256)": FunctionFragment;
    "isProposeWindowActive(uint256)": FunctionFragment;
    "oracle()": FunctionFragment;
    "pendingMerkleRoot()": FunctionFragment;
    "proposeShares(bytes32,bytes32)": FunctionFragment;
    "providers(address,address)": FunctionFragment;
    "rewardRulesetUri()": FunctionFragment;
    "rewardsAvailableToClaimer(address,uint256,address)": FunctionFragment;
    "setSharesLock(bool)": FunctionFragment;
    "sharesLocked()": FunctionFragment;
    "totalClaimed(address)": FunctionFragment;
    "totalProvided(address)": FunctionFragment;
    "totalReceived(address)": FunctionFragment;
    "transferAdminRole(address)": FunctionFragment;
    "verifyShares(address,uint256,bytes32[],uint256)": FunctionFragment;
    "withdrawAssets(address,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "ACTIVATION_PERIOD",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ACTIVE_DURATION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CHALLENGE_PERIOD",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "TOTAL_SHARES",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "activationTime",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "approvedMerkleRoot",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOfAsset",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "campaignCancelled",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "cancelCampaign",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "challenge", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "checkMerkleRootUpdateAllowed",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claim",
    values: [string, BigNumberish, BytesLike[], string[], string]
  ): string;
  encodeFunctionData(
    functionFragment: "claimed",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "deployTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fund",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getValidRoot",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initCampaign",
    values: [
      BytesLike,
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "isChallengePeriod",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isPendingActive",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isProposeWindowActive",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "oracle", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingMerkleRoot",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proposeShares",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "providers",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardRulesetUri",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardsAvailableToClaimer",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setSharesLock",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "sharesLocked",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalClaimed",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "totalProvided",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "totalReceived",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferAdminRole",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyShares",
    values: [string, BigNumberish, BytesLike[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawAssets",
    values: [string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "ACTIVATION_PERIOD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ACTIVE_DURATION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CHALLENGE_PERIOD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "TOTAL_SHARES",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "activationTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "approvedMerkleRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "campaignCancelled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelCampaign",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "challenge", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "checkMerkleRootUpdateAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claimed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deployTime", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fund", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getValidRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initCampaign",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isChallengePeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isPendingActive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isProposeWindowActive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "oracle", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingMerkleRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposeShares",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "providers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rewardRulesetUri",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardsAvailableToClaimer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSharesLock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sharesLocked",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalClaimed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalProvided",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferAdminRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyShares",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawAssets",
    data: BytesLike
  ): Result;

  events: {
    "AdminTransfer()": EventFragment;
    "CampaignCancelled()": EventFragment;
    "Challenge()": EventFragment;
    "Claim(address,uint256,uint256,address)": EventFragment;
    "Fund(address,uint256,address)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "SharesLock(bool)": EventFragment;
    "SharesMerkleRootUpdate(bytes32,bytes32,uint256)": EventFragment;
    "Withdraw(address,uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AdminTransfer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CampaignCancelled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Challenge"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Claim"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Fund"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SharesLock"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SharesMerkleRootUpdate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export type AdminTransferEvent = TypedEvent<[], {}>;

export type AdminTransferEventFilter = TypedEventFilter<AdminTransferEvent>;

export type CampaignCancelledEvent = TypedEvent<[], {}>;

export type CampaignCancelledEventFilter =
  TypedEventFilter<CampaignCancelledEvent>;

export type ChallengeEvent = TypedEvent<[], {}>;

export type ChallengeEventFilter = TypedEventFilter<ChallengeEvent>;

export type ClaimEvent = TypedEvent<
  [string, BigNumber, BigNumber, string],
  { account: string; share: BigNumber; reward: BigNumber; assset: string }
>;

export type ClaimEventFilter = TypedEventFilter<ClaimEvent>;

export type FundEvent = TypedEvent<
  [string, BigNumber, string],
  { provider: string; amount: BigNumber; asset: string }
>;

export type FundEventFilter = TypedEventFilter<FundEvent>;

export type InitializedEvent = TypedEvent<[number], { version: number }>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export type SharesLockEvent = TypedEvent<[boolean], { locked: boolean }>;

export type SharesLockEventFilter = TypedEventFilter<SharesLockEvent>;

export type SharesMerkleRootUpdateEvent = TypedEvent<
  [string, string, BigNumber],
  { sharesMerkleRoot: string; sharesUri: string; activationTime: BigNumber }
>;

export type SharesMerkleRootUpdateEventFilter =
  TypedEventFilter<SharesMerkleRootUpdateEvent>;

export type WithdrawEvent = TypedEvent<
  [string, BigNumber, string],
  { account: string; amount: BigNumber; asset: string }
>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export interface Campaign extends BaseContract {
  contractName: "Campaign";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CampaignInterface;

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
    ACTIVATION_PERIOD(overrides?: CallOverrides): Promise<[BigNumber]>;

    ACTIVE_DURATION(overrides?: CallOverrides): Promise<[BigNumber]>;

    CHALLENGE_PERIOD(overrides?: CallOverrides): Promise<[BigNumber]>;

    TOTAL_SHARES(overrides?: CallOverrides): Promise<[BigNumber]>;

    activationTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    admin(overrides?: CallOverrides): Promise<[string]>;

    approvedMerkleRoot(overrides?: CallOverrides): Promise<[string]>;

    balanceOfAsset(
      asset: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    campaignCancelled(overrides?: CallOverrides): Promise<[boolean]>;

    cancelCampaign(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    challenge(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    checkMerkleRootUpdateAllowed(
      blockTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;

    claim(
      account: string,
      share: BigNumberish,
      proof: BytesLike[],
      assets: string[],
      target: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimed(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    deployTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    fund(
      asset: string,
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getValidRoot(
      blockTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { root: string }>;

    initCampaign(
      _rewardRulesetUri: BytesLike,
      _admin: string,
      _oracle: string,
      _activationTime: BigNumberish,
      _CHALLENGE_PERIOD: BigNumberish,
      _ACTIVATION_PERIOD: BigNumberish,
      _ACTIVE_DURATION: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isChallengePeriod(
      blockTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isPendingActive(
      blockTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean] & { isActive: boolean }>;

    isProposeWindowActive(
      blockTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    oracle(overrides?: CallOverrides): Promise<[string]>;

    pendingMerkleRoot(overrides?: CallOverrides): Promise<[string]>;

    proposeShares(
      _sharesMerkleRoot: BytesLike,
      _sharesUri: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    providers(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    rewardRulesetUri(overrides?: CallOverrides): Promise<[string]>;

    rewardsAvailableToClaimer(
      account: string,
      share: BigNumberish,
      asset: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { total: BigNumber }>;

    setSharesLock(
      _lock: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sharesLocked(overrides?: CallOverrides): Promise<[boolean]>;

    totalClaimed(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    totalProvided(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    totalReceived(
      asset: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { total: BigNumber }>;

    transferAdminRole(
      newAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    verifyShares(
      account: string,
      share: BigNumberish,
      proof: BytesLike[],
      blockTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;

    withdrawAssets(
      account: string,
      asset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  ACTIVATION_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

  ACTIVE_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

  CHALLENGE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

  TOTAL_SHARES(overrides?: CallOverrides): Promise<BigNumber>;

  activationTime(overrides?: CallOverrides): Promise<BigNumber>;

  admin(overrides?: CallOverrides): Promise<string>;

  approvedMerkleRoot(overrides?: CallOverrides): Promise<string>;

  balanceOfAsset(asset: string, overrides?: CallOverrides): Promise<BigNumber>;

  campaignCancelled(overrides?: CallOverrides): Promise<boolean>;

  cancelCampaign(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  challenge(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  checkMerkleRootUpdateAllowed(
    blockTimestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  claim(
    account: string,
    share: BigNumberish,
    proof: BytesLike[],
    assets: string[],
    target: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimed(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  deployTime(overrides?: CallOverrides): Promise<BigNumber>;

  fund(
    asset: string,
    amount: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getValidRoot(
    blockTimestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  initCampaign(
    _rewardRulesetUri: BytesLike,
    _admin: string,
    _oracle: string,
    _activationTime: BigNumberish,
    _CHALLENGE_PERIOD: BigNumberish,
    _ACTIVATION_PERIOD: BigNumberish,
    _ACTIVE_DURATION: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isChallengePeriod(
    blockTimestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isPendingActive(
    blockTimestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isProposeWindowActive(
    blockTimestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  oracle(overrides?: CallOverrides): Promise<string>;

  pendingMerkleRoot(overrides?: CallOverrides): Promise<string>;

  proposeShares(
    _sharesMerkleRoot: BytesLike,
    _sharesUri: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  providers(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  rewardRulesetUri(overrides?: CallOverrides): Promise<string>;

  rewardsAvailableToClaimer(
    account: string,
    share: BigNumberish,
    asset: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  setSharesLock(
    _lock: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sharesLocked(overrides?: CallOverrides): Promise<boolean>;

  totalClaimed(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  totalProvided(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  totalReceived(asset: string, overrides?: CallOverrides): Promise<BigNumber>;

  transferAdminRole(
    newAdmin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  verifyShares(
    account: string,
    share: BigNumberish,
    proof: BytesLike[],
    blockTimestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  withdrawAssets(
    account: string,
    asset: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    ACTIVATION_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    ACTIVE_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    CHALLENGE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    TOTAL_SHARES(overrides?: CallOverrides): Promise<BigNumber>;

    activationTime(overrides?: CallOverrides): Promise<BigNumber>;

    admin(overrides?: CallOverrides): Promise<string>;

    approvedMerkleRoot(overrides?: CallOverrides): Promise<string>;

    balanceOfAsset(
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    campaignCancelled(overrides?: CallOverrides): Promise<boolean>;

    cancelCampaign(overrides?: CallOverrides): Promise<void>;

    challenge(overrides?: CallOverrides): Promise<void>;

    checkMerkleRootUpdateAllowed(
      blockTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    claim(
      account: string,
      share: BigNumberish,
      proof: BytesLike[],
      assets: string[],
      target: string,
      overrides?: CallOverrides
    ): Promise<void>;

    claimed(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deployTime(overrides?: CallOverrides): Promise<BigNumber>;

    fund(
      asset: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getValidRoot(
      blockTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    initCampaign(
      _rewardRulesetUri: BytesLike,
      _admin: string,
      _oracle: string,
      _activationTime: BigNumberish,
      _CHALLENGE_PERIOD: BigNumberish,
      _ACTIVATION_PERIOD: BigNumberish,
      _ACTIVE_DURATION: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    isChallengePeriod(
      blockTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isPendingActive(
      blockTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isProposeWindowActive(
      blockTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    oracle(overrides?: CallOverrides): Promise<string>;

    pendingMerkleRoot(overrides?: CallOverrides): Promise<string>;

    proposeShares(
      _sharesMerkleRoot: BytesLike,
      _sharesUri: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    providers(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardRulesetUri(overrides?: CallOverrides): Promise<string>;

    rewardsAvailableToClaimer(
      account: string,
      share: BigNumberish,
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setSharesLock(_lock: boolean, overrides?: CallOverrides): Promise<void>;

    sharesLocked(overrides?: CallOverrides): Promise<boolean>;

    totalClaimed(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    totalProvided(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    totalReceived(asset: string, overrides?: CallOverrides): Promise<BigNumber>;

    transferAdminRole(
      newAdmin: string,
      overrides?: CallOverrides
    ): Promise<void>;

    verifyShares(
      account: string,
      share: BigNumberish,
      proof: BytesLike[],
      blockTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawAssets(
      account: string,
      asset: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AdminTransfer()"(): AdminTransferEventFilter;
    AdminTransfer(): AdminTransferEventFilter;

    "CampaignCancelled()"(): CampaignCancelledEventFilter;
    CampaignCancelled(): CampaignCancelledEventFilter;

    "Challenge()"(): ChallengeEventFilter;
    Challenge(): ChallengeEventFilter;

    "Claim(address,uint256,uint256,address)"(
      account?: string | null,
      share?: null,
      reward?: null,
      assset?: null
    ): ClaimEventFilter;
    Claim(
      account?: string | null,
      share?: null,
      reward?: null,
      assset?: null
    ): ClaimEventFilter;

    "Fund(address,uint256,address)"(
      provider?: string | null,
      amount?: null,
      asset?: null
    ): FundEventFilter;
    Fund(
      provider?: string | null,
      amount?: null,
      asset?: null
    ): FundEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "SharesLock(bool)"(locked?: null): SharesLockEventFilter;
    SharesLock(locked?: null): SharesLockEventFilter;

    "SharesMerkleRootUpdate(bytes32,bytes32,uint256)"(
      sharesMerkleRoot?: null,
      sharesUri?: null,
      activationTime?: null
    ): SharesMerkleRootUpdateEventFilter;
    SharesMerkleRootUpdate(
      sharesMerkleRoot?: null,
      sharesUri?: null,
      activationTime?: null
    ): SharesMerkleRootUpdateEventFilter;

    "Withdraw(address,uint256,address)"(
      account?: string | null,
      amount?: null,
      asset?: null
    ): WithdrawEventFilter;
    Withdraw(
      account?: string | null,
      amount?: null,
      asset?: null
    ): WithdrawEventFilter;
  };

  estimateGas: {
    ACTIVATION_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    ACTIVE_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    CHALLENGE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    TOTAL_SHARES(overrides?: CallOverrides): Promise<BigNumber>;

    activationTime(overrides?: CallOverrides): Promise<BigNumber>;

    admin(overrides?: CallOverrides): Promise<BigNumber>;

    approvedMerkleRoot(overrides?: CallOverrides): Promise<BigNumber>;

    balanceOfAsset(
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    campaignCancelled(overrides?: CallOverrides): Promise<BigNumber>;

    cancelCampaign(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    challenge(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    checkMerkleRootUpdateAllowed(
      blockTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claim(
      account: string,
      share: BigNumberish,
      proof: BytesLike[],
      assets: string[],
      target: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimed(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deployTime(overrides?: CallOverrides): Promise<BigNumber>;

    fund(
      asset: string,
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getValidRoot(
      blockTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initCampaign(
      _rewardRulesetUri: BytesLike,
      _admin: string,
      _oracle: string,
      _activationTime: BigNumberish,
      _CHALLENGE_PERIOD: BigNumberish,
      _ACTIVATION_PERIOD: BigNumberish,
      _ACTIVE_DURATION: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isChallengePeriod(
      blockTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isPendingActive(
      blockTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isProposeWindowActive(
      blockTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    oracle(overrides?: CallOverrides): Promise<BigNumber>;

    pendingMerkleRoot(overrides?: CallOverrides): Promise<BigNumber>;

    proposeShares(
      _sharesMerkleRoot: BytesLike,
      _sharesUri: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    providers(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardRulesetUri(overrides?: CallOverrides): Promise<BigNumber>;

    rewardsAvailableToClaimer(
      account: string,
      share: BigNumberish,
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setSharesLock(
      _lock: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sharesLocked(overrides?: CallOverrides): Promise<BigNumber>;

    totalClaimed(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    totalProvided(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    totalReceived(asset: string, overrides?: CallOverrides): Promise<BigNumber>;

    transferAdminRole(
      newAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    verifyShares(
      account: string,
      share: BigNumberish,
      proof: BytesLike[],
      blockTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdrawAssets(
      account: string,
      asset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ACTIVATION_PERIOD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ACTIVE_DURATION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    CHALLENGE_PERIOD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TOTAL_SHARES(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    activationTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    approvedMerkleRoot(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOfAsset(
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    campaignCancelled(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cancelCampaign(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    challenge(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    checkMerkleRootUpdateAllowed(
      blockTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claim(
      account: string,
      share: BigNumberish,
      proof: BytesLike[],
      assets: string[],
      target: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimed(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deployTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fund(
      asset: string,
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getValidRoot(
      blockTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initCampaign(
      _rewardRulesetUri: BytesLike,
      _admin: string,
      _oracle: string,
      _activationTime: BigNumberish,
      _CHALLENGE_PERIOD: BigNumberish,
      _ACTIVATION_PERIOD: BigNumberish,
      _ACTIVE_DURATION: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isChallengePeriod(
      blockTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isPendingActive(
      blockTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isProposeWindowActive(
      blockTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    oracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingMerkleRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposeShares(
      _sharesMerkleRoot: BytesLike,
      _sharesUri: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    providers(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardRulesetUri(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardsAvailableToClaimer(
      account: string,
      share: BigNumberish,
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setSharesLock(
      _lock: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sharesLocked(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalClaimed(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalProvided(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalReceived(
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferAdminRole(
      newAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    verifyShares(
      account: string,
      share: BigNumberish,
      proof: BytesLike[],
      blockTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdrawAssets(
      account: string,
      asset: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
