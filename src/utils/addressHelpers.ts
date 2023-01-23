// viewed
// import { ChainId } from "config/constants";
import { addresses, ChainId } from "../config/constants";
import { Address } from "../config/constants/types";

export const getAddress = (address: Address): string => {
  const chainId = process.env.GATSBY_CHAIN_ID as unknown as keyof Address;
  return (address[chainId] ? address[chainId] : address[ChainId.MAINNET])!;
};

export const getKrlAddress = () => getAddress(addresses.kryptolite);
export const getKrlPool2Address = () => getAddress(addresses.kryptolitePool2);
export const getMulticallAddress = () => getAddress(addresses.multiCall);
export const getPizzaDayAddress = () => getAddress(addresses.btcPizzaDay);
export const getKrlRefereeTrackerAddress = () => getAddress(addresses.kryptoliteSwapRefereeTracker);
export const getKrlBabClubAddress = () => getAddress(addresses.kryBabClub);
export const getCyberChainAddress = () => getAddress(addresses.cyberChain);
