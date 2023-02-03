import React from 'react'
import { Web3ReactProvider as Web3React } from "@web3-react/core";
import useNetworkSelectorContext from '../hooks/useNetworkSelectorContext';

function Web3ReactProvider({children}: {children: React.ReactNode}) {
    const {getLibrary: getLibraryHandler} = useNetworkSelectorContext();

  return (
    <Web3React getLibrary={getLibraryHandler}>
        {children}
    </Web3React>
  )
}

export default Web3ReactProvider