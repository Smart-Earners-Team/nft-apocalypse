// viewed
import { injected } from "../lib/connectors";
import { useEffect } from "react";
import useActiveWeb3React from "./useActiveWeb3React";

export function useInactiveListener(suppress = false) {
  const { active, error, activate } = useActiveWeb3React();

  useEffect(() => {
    const { ethereum } = window;
    if (ethereum && ethereum.on && !active && !error && !suppress) {
      const handleChainChanged = (chainId: string | number) => {
        if (process.env.NODE_ENV === "development") {
          console.log("chainChanged", chainId);
        }
        activate(injected);
      };

      const handleAccountsChanged = (accounts: string[]) => {
        if (process.env.NODE_ENV === "development") {
          console.log("accountsChanged", accounts);
        }
        if (accounts.length > 0) {
          activate(injected);
        }
      };

      const handleNetworkChanged = (networkId: string | number) => {
        if (process.env.NODE_ENV === "development") {
          console.log("networkChanged", networkId);
        }
        activate(injected);
      };

      ethereum.on("chainChanged", handleChainChanged);
      ethereum.on("accountsChanged", handleAccountsChanged);
      ethereum.on("networkChanged", handleNetworkChanged);

      return () => {
        if (ethereum.removeListener) {
          ethereum.removeListener("chainChanged", handleChainChanged);
          ethereum.removeListener("accountsChanged", handleAccountsChanged);
          ethereum.removeListener("networkChanged", handleNetworkChanged);
        }
      };
    }

    return () => {};
  }, [active, error, suppress, activate]);
}
