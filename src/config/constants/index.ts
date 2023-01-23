// viewed
import JSBI from "jsbi";
import { Percent } from "../entities/fractions/percent";
import { Token } from "../entities/token";
import { mainnetTokens, testnetTokens } from "./tokens";
import { Address, RecognizedChainId } from "./types";

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

export const networkList = {
  1: {
    url: "https://etherscan.io/",
    name: "Ethereum Mainnet",
  },
  2: {
    url: "https://mordenexplorer.ethernode.io/",
    name: "Morden",
  },
  3: {
    url: "https://ropsten.etherscan.io/",
    name: "Ropsten",
  },
  4: {
    url: "https://rinkeby.etherscan.io/",
    name: "Rinkeby",
  },
  42: {
    url: "https://kovan.etherscan.io/",
    name: "Kovan",
  },
  56: {
    url: "https://bsc-dataseed.binance.org/",
    name: "Binance Smart Chain",
  },
  97: {
    url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
    name: "Binance Smart Chain - Testnet",
  },
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
