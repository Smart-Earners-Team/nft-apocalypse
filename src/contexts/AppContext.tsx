// viewed
import React, { useEffect, useState, createContext } from "react";
import useActiveWeb3React from "../hooks/useActiveWeb3React";
import connectorList, { resetWalletConnectConnector } from "../lib/connectors";
import { ethers } from "ethers";
import { formatFixedNumber } from "../utils/formatBalance";
import { useEagerConnect } from "../hooks/useEagerConnect";
import { useInactiveListener } from "../hooks/useInactiveListener";
import useQuery from "../hooks";
import { isAddress } from "../utils";
import { NULL_ADDRESS } from "../config/constants";
import { getAddressFromParams } from "../lib/hashAddress";

export interface GlobalAppContext {
  krlWallet: {
    active: boolean;
    balance: string;
    isConnecting: boolean;
    error: Error | undefined;
    retry: () => void;
  };
  refAddress: string;
}

const defaultValues: GlobalAppContext = {
  krlWallet: {
    active: false,
    balance: "0.000",
    isConnecting: true,
    error: undefined,
    retry: () => {},
  },
  refAddress: NULL_ADDRESS,
};

export const GlobalAppContextProvider = createContext<GlobalAppContext>(defaultValues);

export default function AppContext({ children }: { children: React.ReactNode }) {
  const [isConnecting, setIsConnecting] = useState(false);
  const { account, deactivate, active, error, library } = useActiveWeb3React();
  // get wallet balance in bnb
  const [balance, setBalance] = useState("0.000");
  // Refferal
  const [refAddress, setRefAddress] = useState(NULL_ADDRESS);
  const refFromParams = useQuery().get("ul");
 

  useEffect(() => {
    if (active) {
      setIsConnecting(true);
    } else {
      setIsConnecting(false);
    }
  }, [active, error]);

  const triedEager = useEagerConnect();

  useInactiveListener(!triedEager);

  useEffect(() => {
    if (account && library) {
      library.getBalance(account).then((bal) => {
        const accBal = ethers.FixedNumber.from(bal);
        setBalance(formatFixedNumber(accBal, 4));
      });
    } else {
      setBalance("0.000");
    }
  }, [account, library]);

  useEffect(() => {
    if (refFromParams !== null) {
      // get the correct address
      const getAddress = async function () {
        await getAddressFromParams(refFromParams, ({ address }) => {
          if (isAddress(address)) {
            setRefAddress(address);
          } else {
            setRefAddress(NULL_ADDRESS);
          }
        });
      };
      getAddress();
    } else {
      setRefAddress(NULL_ADDRESS);
    }
  }, [refFromParams]);

  const handleRetry = () => {
    setIsConnecting(false);
    resetWalletConnectConnector(connectorList["WalletConnect"]);
    deactivate();
  };

  return (
    <GlobalAppContextProvider.Provider
      value={{
        krlWallet: {
          active,
          balance: balance,
          isConnecting,
          error,
          retry: handleRetry,
        },
        refAddress,
      }}
    >
      {children}
    </GlobalAppContextProvider.Provider>
  );
}
