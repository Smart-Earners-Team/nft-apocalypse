import React from "react";
import ModalProvider from "./Modal/ModalContext";
import AppWalletProvider from "../contexts/AppContext";
import NetworkSelectorProvider from "../contexts/NetworkSelector";
import Web3ReactProvider from "./Web3ReactProvider";

/**
 * This component is used to share state accross all sections of the site without unmounting on page
 * navigation.
 */
export default function GlobalAppWrapper(props: {
  children: React.ReactNode;
  path: string;
}) {
  return (
    <NetworkSelectorProvider>
      <Web3ReactProvider>
        <AppWalletProvider>
          <ModalProvider>{props.children}</ModalProvider>
        </AppWalletProvider>
      </Web3ReactProvider>
    </NetworkSelectorProvider>
  );
}
