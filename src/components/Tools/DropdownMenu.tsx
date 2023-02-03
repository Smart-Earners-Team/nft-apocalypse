import React, { useState, useRef } from "react";
import { SiBinance, SiChainlink } from "react-icons/si";
import useAuthWallet from "../../hooks/useWallet";
import { Networks } from "../../hooks/types";
import { BiPolygon } from "react-icons/bi";
import useNetworkSelectorContext from "../../hooks/useNetworkSelectorContext";
import { networkLists } from "../../config/constants";
import truncateHash from "../../utils/truncateHash";
import useActiveWeb3React from "../../hooks/useActiveWeb3React";

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
        <div ref={ref} className="relative inline-block mt-2">
          <div>
            <span className="shadow-md">
              <button
                type="button"
                className="inline-flex justify-center w-full border-0 px-2 py-2 text-sm leading-5 font-medium text-gray-800 hover:text-gray-700 focus:outline-none focus:border-0 outline-slate-50"
                onClick={handleMenuToggle}
              >
                Select Chain
              </button>
            </span>
          </div>

          {isOpen && (
            <div className="origin-top-left absolute top-6 left-0 text-center mt-0 w-auto shadow-lg h-auto text-slate-500 text-md">
              <div>
                <div className="py-1 text-xl">
                  {networks.map((val, key) => {
                    return (
                      <div key={key}>
                        <button
                          onClick={() => openModal(`${val.name}`)}
                          className="flex align-middle justify-center p-2"
                        >
                          {val.networkIcon}
                          <span className="text-xs pl-2 pt-1">{val.network}</span>
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
