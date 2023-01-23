import { Web3ReactProvider } from "@web3-react/core";
import React from "react";
import { getLibrary } from "../utils/web3React";
import ModalProvider from "./Modal/ModalContext";
import AppWalletProvider from "../contexts/AppContext";


/**
 * This component is used to share state accross all sections of the site without unmounting on page
 * navigation.
 */
export default function GlobalAppWrapper(props: { children: React.ReactNode; path: string }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <AppWalletProvider>
      <ModalProvider>
              {props.children}
            </ModalProvider>
      </AppWalletProvider>
    </Web3ReactProvider>
  );
}
