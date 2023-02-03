// viewed
/* const KRYPTOLITE_SWAP_EXTENDED = "https://tokens.pancakeswap.finance/pancakeswap-extended.json";
const CMC = "https://tokens.pancakeswap.finance/cmc.json";
 */
const KRYPTOLITE_SWAP_EXTENDED = "https://kryptolite.rocks/assets/tokens/kryptoliteswap-extended.json";
const CMC = "https://kryptolite.rocks/assets/tokens/cmc.json";

// List of official tokens list
export const OFFICIAL_LISTS = [KRYPTOLITE_SWAP_EXTENDED];

export const UNSUPPORTED_LIST_URLS: string[] = [];
// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = [];

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [
  KRYPTOLITE_SWAP_EXTENDED,
  CMC,
  ...UNSUPPORTED_LIST_URLS, // need to load unsupported tokens as well
];
