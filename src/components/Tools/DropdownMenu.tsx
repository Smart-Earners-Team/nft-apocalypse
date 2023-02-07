import React, { useState, useRef } from "react";
import { SiBinance, SiChainlink } from "react-icons/si";
import useAuthWallet from "../../hooks/useWallet";
import { Networks } from "../../hooks/types";
import { BiPolygon } from "react-icons/bi";
import useNetworkSelectorContext from "../../hooks/useNetworkSelectorContext";
import { networkLists } from "../../config/constants";
import truncateHash from "../../utils/truncateHash";
import useActiveWeb3React from "../../hooks/useActiveWeb3React";
import { network } from "../Navigation";

export const address: undefined = undefined;

export const networks: {
  networkIcon: JSX.Element;
  network: string;
  name: Networks;
}[] = [
  { networkIcon: <SiBinance />, network: "SmartChain", name: "bsc" },
  { networkIcon: <BiPolygon />, network: "Polygon", name: "polygon" },
  { networkIcon: <SiChainlink />, network: "Cronos", name: "cronos" },
];

export const DropdownMenu: React.FC = ({ connected, address }: any) => {
  const {account} = useActiveWeb3React()
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { setNetworkInfo } = useNetworkSelectorContext();

  const { onPresentConnectModal } = useAuthWallet();

  const openModal = (net: Networks) => {
    const network = networkLists[net];

    if (network) {
      const { chainId, rpcUrls } = network;
      setNetworkInfo({ chainId, rpcUrl: rpcUrls[0], networkName: network.id });
      onPresentConnectModal();
    }
  };

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  /* const changeNetwork = async (networkName: any) => {
    try {
      if (!window.ethereum) throw new Error("No crypto wallet found");
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [...network[networkName]],
      });
    } catch (err: any) {
      console.log("Error message: " + err.message);
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            ...network[networkName],
          },
        ],
      });
    }
  };

  const handleNetworkSwitch = async (networkName: any) => {
    await changeNetwork(networkName);
  }; */
  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutside, true);
    } else {
      document.removeEventListener("click", handleClickOutside, true);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [isOpen]);

  return (
    <React.Fragment>
      {!account && (
        <div ref={ref} className="inline-block relative -top-[3px]">
          <div>
            <span className="">
              <button
                type="button"
                className="inline-flex justify-center w-full px-3 py-2 text-md leading-5 font-medium text-inherit hover:text-inherit focus:outline-none focus:border-0"
                onClick={handleMenuToggle}
              >
                {network.symbol} {
                  connected ? network.user.address : null
                }
              </button>
            </span>
          </div>

          {isOpen && (
            <div className="absolute top-8 text-center w-auto h-auto text-inherit rounded-md bg-inherit">
              <div>
                <div className="py-1">
                  {networks.map((val, key) => {
                    return (
                      <div key={key}>
                        <button
                          onClick={() => openModal(`${val.name}`)}
                          className="flex align-middle justify-center py-2"
                        >
                          {val.networkIcon}
                          <span className="pl-2 pt-1 text-xs">{val.network}</span>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

        </div>
      )}
      <div>
        {account &&(
          <span onClick={()=>onPresentConnectModal()}>
            {truncateHash(account)}
          </span>
                      
        )}
      </div>
    </React.Fragment>
  );
};
