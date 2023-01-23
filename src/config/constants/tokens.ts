// viewed
import { Token } from "../entities/token";
import { serializeToken } from "../../state/user/hooks/helpers";
import { SerializedToken } from "./types";
import { ChainId } from "./networks";

const { MAINNET, TESTNET } = ChainId;

interface TokenList {
  [symbol: string]: Token;
}

const defineTokens = <T extends TokenList>(t: T) => t;

interface SerializedTokenList {
  [symbol: string]: SerializedToken;
}

export const mainnetTokens = defineTokens({
  krl: new Token(
    MAINNET,
    "0xF1288cF18B1FAaA35F40111c3E5d2f827e1E920E",
    18,
    "KRL",
    "Kryptolite",
    "https://kryptolite.rocks",
  ),
  wagmi: new Token(
    MAINNET,
    "0xF53FcB849d5e6Cc2D1cCABC0bb120AC192bfB5f8",
    9,
    "WAGMI",
    "WAGMI ✊",
    "https://wagmi4ever.com",
  ),
  tteb: new Token(
    MAINNET,
    "0xc776400C2e53AD1731aaCAF7c3F76e61236Fa0E1",
    9,
    "TTEB",
    "TietoEVRY Corporation",
    "https://tteb.finance",
  ),
  lambo: new Token(
    MAINNET,
    "0xd83a832AD7202612FA53E0317DF685A5Df7cA8b8",
    18,
    "LAMBO",
    "Lamborghini 2.0",
    "https://tteb.finance",
  ),
  wbnb: new Token(
    MAINNET,
    "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    18,
    "WBNB",
    "Wrapped BNB",
    "https://www.binance.com/",
  ),
  // bnb here points to the wbnb contract. Wherever the currency BNB is required, conditional checks for the symbol 'BNB' can be used
  bnb: new Token(MAINNET, "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", 18, "BNB", "BNB", "https://www.binance.com/"),
  busd: new Token(
    MAINNET,
    "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
    18,
    "BUSD",
    "Binance USD",
    "https://www.paxos.com/busd/",
  ),
  usdt: new Token(
    MAINNET,
    "0x55d398326f99059fF775485246999027B3197955",
    18,
    "USDT",
    "Tether USD",
    "https://tether.to/",
  ),
  btcb: new Token(
    MAINNET,
    "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
    18,
    "BTCB",
    "Binance BTC",
    "https://bitcoin.org/",
  ),
  ust: new Token(
    MAINNET,
    "0x23396cF899Ca06c4472205fC903bDB4de249D6fC",
    18,
    "UST",
    "Wrapped UST Token",
    "https://mirror.finance/",
  ),
  eth: new Token(
    MAINNET,
    "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
    18,
    "ETH",
    "Binance-Peg Ethereum Token",
    "https://ethereum.org/en/",
  ),
  usdc: new Token(
    MAINNET,
    "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
    18,
    "USDC",
    "Binance-Peg USD Coin",
    "https://www.centre.io/usdc",
  ),
});

export const testnetTokens = defineTokens({
  wbnb: new Token(
    TESTNET,
    "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd",
    18,
    "WBNB",
    "Wrapped BNB",
    "https://www.binance.com/",
  ),
  busd: new Token(
    TESTNET,
    "0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee",
    18,
    "BUSD",
    "Binance USD",
    "https://www.paxos.com/busd/",
  ),
} as const);

const tokens = () => {
  const chainId = process.env.GATSBY_CHAIN_ID!;

  // If testnet - return list comprised of testnetTokens wherever they exist, and mainnetTokens where they don't
  if (parseInt(chainId, 10) === ChainId.TESTNET) {
    return Object.keys(mainnetTokens).reduce((accum, key) => {
      // @ts-ignore
      return { ...accum, [key]: testnetTokens[key] || mainnetTokens[key] };
    }, {} as typeof testnetTokens & typeof mainnetTokens);
  }

  return mainnetTokens;
};

const unserializedTokens = tokens();

export const serializeTokens = () => {
  const serializedTokens = Object.keys(unserializedTokens).reduce((accum, key) => {
    //@ts-ignore
    return { ...accum, [key]: serializeToken(unserializedTokens[key]) };
  }, {} as SerializedTokenList);

  return serializedTokens;
};

export default unserializedTokens;
