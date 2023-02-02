// viewed
import { AbstractConnector } from "@web3-react/abstract-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import getNodeUrl from "../../utils/getRpcUrl";

const POLLING_INTERVAL = 6000;
const rpcUrl = getNodeUrl();
const chainId = parseInt(process.env.GATSBY_CHAIN_ID!, 10);

// reset WalletConnect connector
export const resetWalletConnectConnector = (connector: AbstractConnector) => {
  if (connector && connector instanceof WalletConnectConnector) {
    connector.walletConnectProvider = undefined;
  }
};

export const injected = new InjectedConnector({
  supportedChainIds: [chainId],
});

export const walletconnect = new WalletConnectConnector({
  rpc: { [chainId]: rpcUrl },
  qrcode: true,
  supportedChainIds: [chainId],
  // @ts-ignore
  pollingInterval: POLLING_INTERVAL,
  chainId: chainId,
});

export const connectorList = {
  MetaMask: injected,
  WalletConnect: walletconnect,
};

export default connectorList;
