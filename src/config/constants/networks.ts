// viewed
// I have repeated the export here because of issues with circular deps
export enum ChainId {
  MAINNET = 56,
  TESTNET = 97,
}
export const CHAIN_ID = process.env.GATSBY_CHAIN_ID! as unknown as ChainId;
