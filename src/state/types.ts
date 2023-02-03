// viewed
import { DeserializedFarmConfig, SerializedFarmConfig } from "../config/constants/types";
import BigNumber from "bignumber.js";
import { ChainId } from "../config/constants";
import { TokenInfo, TokenList, Tags } from "@uniswap/token-lists";
import { Token } from "../config/entities/token";

export type SerializedBigNumber = string;

export interface SerializedFarmsState {
  data: SerializedFarm[];
  userDataLoaded: boolean;
}
interface SerializedFarmUserData {
  allowance: string;
  tokenBalance: string;
  stakedBalance: string;
  earnings: string;
}

export interface DeserializedFarmUserData {
  allowance: BigNumber;
  tokenBalance: BigNumber;
  stakedBalance: BigNumber;
  earnings: BigNumber;
}

export interface DeserializedFarm extends DeserializedFarmConfig {
  tokenPriceBusd?: string;
  quoteTokenPriceBusd?: string;
  tokenAmountTotal?: BigNumber;
  lpTotalInQuoteToken?: BigNumber;
  lpTotalSupply?: BigNumber;
  tokenPriceVsQuote?: BigNumber;
  extras: {
    /** Balance of LP tokens in the krl smart contract */
    lpTokenBalanceMC: BigNumber;
    totalTokenStaked: BigNumber;
    rewardPerBlock: BigNumber;
    rewardPerToken: BigNumber;
    rewardForDuration: BigNumber;
    rewardsDuration: BigNumber;
  };
  userData?: DeserializedFarmUserData;
}

export interface SerializedFarm extends SerializedFarmConfig {
  tokenPriceBusd?: string;
  quoteTokenPriceBusd?: string;
  tokenAmountTotal?: SerializedBigNumber;
  lpTotalInQuoteToken?: SerializedBigNumber;
  lpTotalSupply?: SerializedBigNumber;
  tokenPriceVsQuote?: SerializedBigNumber;
  extras?: {
    lpTokenBalanceMC: SerializedBigNumber;
    rewardPerToken: SerializedBigNumber;
    totalTokenStaked: SerializedBigNumber;
    rewardPerBlock: SerializedBigNumber;
    rewardForDuration: SerializedBigNumber;
    rewardsDuration: SerializedBigNumber;
  };
  userData?: SerializedFarmUserData;
}

export interface DeserializedFarmsState {
  data: DeserializedFarm[];
  userDataLoaded: boolean;
}

// Global state

export interface State {
  farms: SerializedFarmsState;
}

/**
 * Token instances created from token info.
 */
export class WrappedTokenInfo extends Token {
  public readonly tokenInfo: TokenInfo;

  public readonly tags: TagInfo[];

  constructor(tokenInfo: TokenInfo, tags: TagInfo[]) {
    super(tokenInfo.chainId, tokenInfo.address, tokenInfo.decimals, tokenInfo.symbol, tokenInfo.name);
    this.tokenInfo = tokenInfo;
    this.tags = tags;
  }

  public get logoURI(): string | undefined {
    return this.tokenInfo.logoURI;
  }
}

type TagDetails = Tags[keyof Tags];
export interface TagInfo extends TagDetails {
  id: string;
}

export type TokenAddressMap = Readonly<{
  [chainId in ChainId]: Readonly<{ [tokenAddress: string]: { token: WrappedTokenInfo; list: TokenList } }>;
}>;

/**
 * An empty result, useful as a default.
 */
export const EMPTY_LIST: TokenAddressMap = {
  [ChainId.MAINNET]: {},
  [ChainId.TESTNET]: {},
};
