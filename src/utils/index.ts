// viewed
import { getAddress } from "@ethersproject/address";
import { BigNumber } from "@ethersproject/bignumber";
import { Web3Provider } from "@ethersproject/providers";
import JSBI from "jsbi";
import { ROUTER_ADDRESS } from "../config/constants";
import { CHAIN_ID } from "../config/constants/networks";
import { Percent } from "../config/entities/fractions/percent";
import { getContract, getProviderOrSigner } from "./contractHelpers";
import KrlRouterABI from "../config/abi/KrlSwapRouterABI.json";
import { Currency, ETHER } from "../config/entities/currency";
import { Token } from "../config/entities/token";
import { TokenAddressMap } from "../state/types";

// returns the checksummed address if the address is valid, otherwise returns false
export function isAddress(value: any): string | false {
  try {
    return getAddress(value);
  } catch {
    return false;
  }
}

// converts a basis points value to a sdk percent
export function basisPointsToPercent(num: number): Percent {
  return new Percent(JSBI.BigInt(num), JSBI.BigInt(10000));
}

// add 10%
export function calculateGasMargin(value: BigNumber): BigNumber {
  return value.mul(BigNumber.from(10000).add(BigNumber.from(1000))).div(BigNumber.from(10000));
}

// account is optional
export function getRouterContract(library: Web3Provider, account?: string) {
  return getContract(KrlRouterABI, ROUTER_ADDRESS[CHAIN_ID], getProviderOrSigner(library, account));
}

export const copyText = (text: string, cb?: () => void) => {
  if (navigator.clipboard && navigator.permissions) {
    navigator.clipboard.writeText(text).then(cb);
  } else if (document.queryCommandSupported("copy")) {
    const ele = document.createElement("textarea");
    ele.value = text;
    document.body.appendChild(ele);
    ele.select();
    document.execCommand("copy");
    document.body.removeChild(ele);
    cb?.();
  }
};

export function isTokenOnList(defaultTokens: TokenAddressMap, currency?: Currency): boolean {
  if (currency === ETHER) return true;
  return Boolean(currency instanceof Token && defaultTokens[currency.chainId]?.[currency.address]);
}

export function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}
