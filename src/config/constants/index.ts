// viewed
import JSBI from "jsbi";
import { Percent } from "../entities/fractions/percent";
import { Token } from "../entities/token";
import { mainnetTokens, testnetTokens } from "./tokens";
import { Address, RecognizedChainId } from "./types";
import type { Networks } from "../../hooks/types";
import type { SetupNetworkArgs } from "./types";

export enum ChainId {
  MAINNET = 56,
  TESTNET = 97,
}

export const FAST_INTERVAL = 10000;
export const SLOW_INTERVAL = 60000;

// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[];
};

/**
 * Addittional bases for specific tokens
 * @example { [WBTC.address]: [renBTC], [renBTC.address]: [WBTC] }
 */
export const ADDITIONAL_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.MAINNET]: {},
};

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 * @example [AMPL.address]: [DAI, WETH[ChainId.MAINNET]]
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.MAINNET]: {},
};

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  [ChainId.MAINNET]: [
    mainnetTokens.wbnb,
    mainnetTokens.busd,
    mainnetTokens.usdt,
    mainnetTokens.btcb,
    mainnetTokens.eth,
    mainnetTokens.usdc,
  ],
  [ChainId.TESTNET]: [testnetTokens.wbnb, testnetTokens.busd],
};

export const BASE_BSC_SCAN_URLS = {
  [ChainId.MAINNET]: "https://bscscan.com",
  [ChainId.TESTNET]: "https://testnet.bscscan.com",
};

export const BASE_BSC_SCAN_URL = BASE_BSC_SCAN_URLS[ChainId.MAINNET];

export const addresses: { [index: string]: Address } = {
  kryptolite: {
    97: "",
    56: "0x69A3C92cE7d543f6aaC7630E0e4Df265BdBB8c0D",
  },
  cyberChain: {
    97: "",
    56: "0x8d0445895EFed557Ce67008Dd5537BCa67414Ea8",
  },
  kryptolitePool2: {
    97: "",
    56: "0x1C03768153bd9883f4997482F8841029e905250D",
  },
  kryptoliteSwapRefereeTracker: {
    97: "",
    56: "0xf284A1FaCD86360DA814FE441e49F118cE5db097",
  },
  kryBabClub: {
    97: "",
    56: "0x8e0531Ec55D08A1AA5280f6530F745da62e79573",
  },
  btcPizzaDay: {
    97: "0x28305505a077a69A577092018D38ab59b233BeA6",
    56: "0x4Eac34a0d67214B5E7f950aFeE942DE5F938349c",
  },
  multiCall: {
    56: "0xfF6FD90A470Aaa0c1B8A54681746b07AcdFedc9B",
    97: "",
  },
};

export const RecognizedChainIdList: RecognizedChainId[] = [1, 2, 3, 4, 42, 56, 97];

export const networkLists: Partial<{ [key in Networks]: SetupNetworkArgs }> = {
  polygon: {
    id: "polygon",
    chainId: 137,
    networkName: "Polygon Mainnet",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://polygon-rpc.com/"],
    blockExplorerUrls: ["https://polygonscan.com/"],
  },
  bsc: {
    id: "bsc",
    chainId: 56,
    networkName: "Binance Smart Chain Mainnet",
    nativeCurrency: {
      name: "Binance Chain Native Token",
      symbol: "BNB",
      decimals: 18,
    },
    rpcUrls: [
      "https://bsc-dataseed1.binance.org",
      "https://bsc-dataseed2.binance.org",
      "https://bsc-dataseed3.binance.org",
      "https://bsc-dataseed4.binance.org",
      "https://bsc-dataseed1.defibit.io",
      "https://bsc-dataseed2.defibit.io",
      "https://bsc-dataseed3.defibit.io",
      "https://bsc-dataseed4.defibit.io",
      "https://bsc-dataseed1.ninicoin.io",
      "https://bsc-dataseed2.ninicoin.io",
      "https://bsc-dataseed3.ninicoin.io",
      "https://bsc-dataseed4.ninicoin.io",
      "wss://bsc-ws-node.nariox.org",
    ],
    blockExplorerUrls: ["https://bscscan.com"],
  },
  cronos: {
    id: "cronos",
    chainId: 25,
    networkName: "Cronos",
    nativeCurrency: {
      name: "Cronos Token",
      symbol: "CRO",
      decimals: 18
    },
    rpcUrls: ["https://evm.cronos.org/"],
    blockExplorerUrls: ["https://chain.crypto.com/"]
  }
};

export const ZERO_PERCENT = new Percent("0");
export const ONE_HUNDRED_PERCENT = new Percent("1");

export const BETTER_TRADE_LESS_HOPS_THRESHOLD = new Percent(JSBI.BigInt(50), JSBI.BigInt(10000));

// BNB
export const DEFAULT_INPUT_CURRENCY = "BNB";
// KRL
export const DEFAULT_OUTPUT_CURRENCY = "0xF1288cF18B1FAaA35F40111c3E5d2f827e1E920E";

// Gelato uses this address to define a native currency in all chains
export const GELATO_NATIVE = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
export const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";

export const ROUTER_ADDRESS = {
  [ChainId.MAINNET]: "0xfd28480e8fabbc1f3d66cf164dfe6b0818249a25",
  [ChainId.TESTNET]: "",
};

// used to ensure the user doesn't send so much BNB so they end up with <.01
export const MIN_BNB: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)); // .01 BNB

// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 70;

// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20;

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000));
export const BIPS_BASE = JSBI.BigInt(10000);

// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE); // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE); // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE); // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE); // 10%
