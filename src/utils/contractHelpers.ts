// viewed
import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import {
  getCyberChainAddress,
  getKrlAddress,
  getKrlBabClubAddress,
  getKrlPool2Address,
  getKrlRefereeTrackerAddress,
  getMulticallAddress,
  getPizzaDayAddress,
} from "./addressHelpers";
import bep20Abi from "../config/abi/erc20.json";
import MultiCallAbi from "../config/abi/Multicall.json";
import krl from "../config/abi/krlReward.json";
import krlPool2 from "../config/abi/krlPool2.json";
import pizzaDay from "../config/abi/pizzaDay.json";
import cyberChainAbi from "../config/abi/cyberChainAbi.json";
import { JsonRpcSigner, Web3Provider } from "@ethersproject/providers";
import { simpleRpcProvider } from "./providers";
import KrlRefTracker from "../config/abi/KrlRefTracker.json";
import krlBabClub from "../config/abi/krlBabClub.json";

export const getContract = (abi: any, address: string, signer?: Signer | Provider) => {
  const signerOrProvider = signer ?? simpleRpcProvider;
  return new Contract(address, abi, signerOrProvider);
};

export function getSigner(library: Web3Provider, account: string): JsonRpcSigner {
  return library.getSigner(account).connectUnchecked();
}

export function getProviderOrSigner(library: Web3Provider, account?: string): Web3Provider | JsonRpcSigner {
  return account ? getSigner(library, account) : library;
}

export const getBep20Contract = (address: string, signer?: Signer | Provider) => {
  return getContract(bep20Abi, address, signer);
};

export const getKrlContract = (signer?: Signer | Provider) => {
  return getContract(krl, getKrlAddress(), signer);
};

export const getKrlPool2Contract = (signer?: Signer | Provider) => {
  return getContract(krlPool2, getKrlPool2Address(), signer);
};

export const getMulticallContract = (signer?: Signer | Provider) => {
  return getContract(MultiCallAbi, getMulticallAddress(), signer);
};

export const getPizzaDayContract = (signer?: Signer | Provider) => getContract(pizzaDay, getPizzaDayAddress(), signer);
export const getCyberChainContract = (signer?: Signer | Provider) =>
  getContract(cyberChainAbi, getCyberChainAddress(), signer);

export const getKrlRefereeTrackerContract = (signer?: Signer | Provider) => {
  return getContract(KrlRefTracker, getKrlRefereeTrackerAddress(), signer);
};

export const getKrlBabClubContract = (signer?: Signer | Provider) =>
  getContract(krlBabClub, getKrlBabClubAddress(), signer);
