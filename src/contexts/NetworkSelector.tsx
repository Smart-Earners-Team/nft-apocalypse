import { BscConnector } from "@binance-chain/bsc-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import React, { createContext, useCallback, useState } from "react";
import { ConnectorNames } from "../components/widgets/WalletModal/types";
import { ethers } from "ethers";
import { Networks } from "../hooks/types";

interface NetworkSelectorType {
  chainId: number;
  setChainId: React.Dispatch<React.SetStateAction<number>>;
  getWalletConnect: () => void;
  getInjectedConnector: () => void;
  getBscConnector: () => void;
  networkName: Networks;
  setNetworkName: React.Dispatch<React.SetStateAction<Networks>>;
  getLibrary: (
    provider:
      | ethers.providers.ExternalProvider
      | ethers.providers.JsonRpcFetchFunc
  ) => ethers.providers.Web3Provider;
  setRpcUrl: React.Dispatch<React.SetStateAction<string>>;
  connectorsByName: {
    injected: any;
    walletconnect: any;
    bsc: any;
  };
}

const defaultValues: NetworkSelectorType = {
  chainId: 25,
  setChainId() {},
  getWalletConnect: function (): void {},
  getInjectedConnector: function (): void {},
  getBscConnector: function (): void {},
  networkName: "polygon",
  setNetworkName: function (_value: React.SetStateAction<Networks>): void {},
  setRpcUrl: function (_value: React.SetStateAction<string>): void {},
  getLibrary: function (
    provider:
      | ethers.providers.ExternalProvider
      | ethers.providers.JsonRpcFetchFunc
  ): ethers.providers.Web3Provider {
    return new ethers.providers.Web3Provider(provider);
  },
  connectorsByName: {
    injected: undefined,
    walletconnect: undefined,
    bsc: undefined,
  },
};

const POLLING_INTERVAL = 6000;
export const NetworkSelectorContext = createContext(defaultValues);

function NetworkSelectorProvider({ children }: { children: React.ReactNode }) {
  const [chainId, setChainId] = useState(137);
  const [rpcUrl, setRpcUrl] = useState("https://polygon-rpc.com/");
  const [networkName, setNetworkName] = useState<Networks>("polygon");

/*   const [networkInfo, setNetworkInfo] = useState({
    chainId: 137,
    rpcUrl: "https://polygon-rpc.com/",
    networkName: "polygon"
  }) */

  const getWalletConnect = useCallback(() => {
    const walletconnect = new WalletConnectConnector({
      rpc: { [chainId]: rpcUrl },
      // @ts-ignore
      pollingInterval: 15000,
      qrcode: true,
      chainId: chainId,
    });
    return walletconnect;
  }, [chainId, rpcUrl]);

  const getInjectedConnector = useCallback(() => {
    return new InjectedConnector({ supportedChainIds: [chainId] });
  }, [chainId]);

  const getBscConnector = useCallback(() => {
    return new BscConnector({ supportedChainIds: [chainId] });
  }, [chainId]);

  const connectorsByName: { [connectorName in ConnectorNames]: any } = {
    [ConnectorNames.Injected]: getInjectedConnector(),
    [ConnectorNames.WalletConnect]: getWalletConnect(),
    [ConnectorNames.BSC]: getBscConnector(),
  };

  const getLibrary = useCallback(
    (
      provider:
        | ethers.providers.ExternalProvider
        | ethers.providers.JsonRpcFetchFunc
    ): ethers.providers.Web3Provider => {
      const library = new ethers.providers.Web3Provider(provider);
      library.pollingInterval = POLLING_INTERVAL;
      return library;
    },
    []
  );

  return (
    <NetworkSelectorContext.Provider
      value={{
        chainId,
        setChainId,
        getWalletConnect,
        getInjectedConnector,
        getBscConnector,
        networkName,
        setNetworkName,
        getLibrary,
        setRpcUrl,
        connectorsByName,
      }}
    >
      {children}
    </NetworkSelectorContext.Provider>
  );
}

export default NetworkSelectorProvider;
