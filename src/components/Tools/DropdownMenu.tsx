import React, { useState, useRef } from 'react';
import { SiBinance, SiChainlink, SiEthereum } from 'react-icons/si';
import useActiveWeb3React from '../../hooks/useActiveWeb3React';
import { useAppContext } from '../../hooks/useAppContext';
import useWallet from '../../hooks/useWallet';

export const address: undefined = undefined;

const networks = [
    { networkIcon: <SiBinance />, network: 'SmartChain', name: 'bsc' },
    { networkIcon: <SiEthereum />, network: 'Ethereum', name: "polygon" },
    { networkIcon: <SiChainlink/>, network: 'ChainLink', name: 'cro' },
]

export const DropdownMenu: React.FC = ({
    connected, address
}: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const {
      krlWallet: { active, error, retry, isConnecting },
    } = useAppContext();
  const { account } = useActiveWeb3React();


    const {onPresentConnectModal} = useWallet();

    const openModal = (net:any) => {
        handleNetworkSwitch(net)
        // console.log(net)
        onPresentConnectModal();
      };

    const network = {
        polygon: {
          chainId: `0x${Number(137).toString(16)}`,
          chainName: "Polygon Mainnet",
          nativeCurrency: {
            name: "MATIC",
            symbol: "MATIC",
            decimals: 18
          },
          rpcUrls: ["https://polygon-rpc.com/"],
          blockExplorerUrls: ["https://polygonscan.com/"]
        },
        bsc: {
          chainId: `0x${Number(56).toString(16)}`,
          chainName: "Binance Smart Chain Mainnet",
          nativeCurrency: {
            name: "Binance Chain Native Token",
            symbol: "BNB",
            decimals: 18
          },
          rpcUrls: [
            "https://bsc-dataseed1.binance.org",
            "https://bsc-dataseed2.binance.org",
            "https://bsc-dataseed3.binance.org",
            "https://bsc-dataseed4.binance.org",
            "https://bsc-dataseed1.defibit.io",
            "https://bsc-dataseed2.defibit.io",
            "https://bsc-dataseed3.defibit.io",
            "https://bsc-dataseed4.defibit.io",
            "https://bsc-dataseed1.ninicoin.io",
            "https://bsc-dataseed2.ninicoin.io",
            "https://bsc-dataseed3.ninicoin.io",
            "https://bsc-dataseed4.ninicoin.io",
            "wss://bsc-ws-node.nariox.org"
          ],
          blockExplorerUrls: ["https://bscscan.com"]
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

    const changeNetwork = async (networkName:any) => {
        try {
            if (!window.ethereum) throw new Error("No crypto wallet found");
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [
                ...network[networkName]
                ]
              });
        } catch (err:any) {
            console.log("Error message: " + err.message);
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                ...network[networkName]
              }
            ]
          });
        }
      };

      const handleNetworkSwitch = async (networkName:any) => {
        await changeNetwork(networkName);
      };

    React.useEffect(() => {
        if (isOpen) {
            document.addEventListener('click', handleClickOutside, true);
        } else {
            document.removeEventListener('click', handleClickOutside, true);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [isOpen]);

    return (
        <div ref={ref} className="relative inline-block mt-2">
            <div>

                <span className="shadow-md">

                    <button
                        type="button"
                        className="inline-flex justify-center w-full border-0 px-2 py-2 text-sm leading-5 font-medium text-gray-800 hover:text-gray-700 focus:outline-none focus:border-0 outline-slate-50"
                        onClick={handleMenuToggle}
                    >
                        {connected ? `${address}` : `Select Chain`}
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
                                        <button onClick={()=>openModal(`${val.name}`)} className='flex align-middle justify-center p-2'>{val.networkIcon} 
                                            <span className='text-xs pl-2 pt-1'>
                                                {val.network}
                                            </span>
                                        </button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}


