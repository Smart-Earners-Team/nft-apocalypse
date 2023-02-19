import { BscConnector } from "@binance-chain/bsc-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import React, { createContext, useCallback, useMemo, useState } from "react";
import { ConnectorNames } from "../components/widgets/WalletModal/types";
import { ethers } from "ethers";
import { Networks } from "../hooks/types";
import { Web3Provider } from '@ethersproject/providers';

interface NetworkSelectorType {
  getWalletConnect: () => void;
  getInjectedConnector: () => void;
  getBscConnector: () => void;
  getLibrary: (
    provider:
      | ethers.providers.ExternalProvider
      | ethers.providers.JsonRpcFetchFunc
  ) => ethers.providers.Web3Provider;
  connectorsByName: {
    injected: any;
    walletconnect: any;
    bsc: any;
  };
  networkInfo: NetworkInfo;
  setNetworkInfo: React.Dispatch<React.SetStateAction<NetworkInfo>>;
}

interface NetworkInfo {
  chainId: number;
  networkName: Networks;
  rpcUrl: string;
}

const defaultValues: NetworkSelectorType = {
  getWalletConnect: function (): void {},
  getInjectedConnector: function (): void {},
  getBscConnector: function (): void {},
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
  networkInfo: {
    chainId: 137,
    rpcUrl: "https://polygon-rpc.com/",
    networkName: "Polygon",
  },
  setNetworkInfo: function (_value: React.SetStateAction<NetworkInfo>): void {},
};

const POLLING_INTERVAL = 6000;
export const NetworkSelectorContext = createContext(defaultValues);

function NetworkSelectorProvider({ children }: { children: React.ReactNode }) {
  const [networkInfo, setNetworkInfo] = useState<NetworkInfo>({
    chainId: 137,
    rpcUrl: "https://polygon-rpc.com/",
    networkName: "Polygon",
  });

  const getWalletConnect = useCallback(() => {
    const { chainId, rpcUrl } = networkInfo;
    const walletconnect = new WalletConnectConnector({
      rpc: { [chainId]: rpcUrl },
      // @ts-ignore
      pollingInterval: 15000,
      qrcode: true,
      chainId: chainId,
    });
    return walletconnect;
  }, [networkInfo]);

  const getInjectedConnector = useCallback(() => {
    const chainId = networkInfo.chainId;
    return new InjectedConnector({ supportedChainIds: [chainId] });
  }, [networkInfo.chainId]);

  const getBscConnector = useCallback(() => {
    const chainId = networkInfo.chainId;
    return new BscConnector({ supportedChainIds: [chainId] });
  }, [networkInfo.chainId]);

  const connectorsByName: { [connectorName in ConnectorNames]: any } = useMemo(() =>({
    [ConnectorNames.Injected]: getInjectedConnector(),
    [ConnectorNames.WalletConnect]: getWalletConnect(),
    [ConnectorNames.BSC]: getBscConnector(),
  }), [getInjectedConnector, getBscConnector, getWalletConnect]);

  const getLibrary = useCallback(
    (
      provider:
        | ethers.providers.ExternalProvider
        | ethers.providers.JsonRpcFetchFunc
    ): ethers.providers.Web3Provider => {
      const {chainId} = networkInfo;

      const library = new Web3Provider(provider, chainId);
      // const library = new ethers.providers.Web3Provider(provider);
      library.pollingInterval = POLLING_INTERVAL;
      return library;
    },
    [networkInfo]
  );

  return (
    <NetworkSelectorContext.Provider
      value={{
        getWalletConnect,
        getInjectedConnector,
        getBscConnector,
        getLibrary,
        connectorsByName,
        networkInfo,
        setNetworkInfo,
      }}
    >
      {children}
    </NetworkSelectorContext.Provider>
  );
}

export default NetworkSelectorProvider;
