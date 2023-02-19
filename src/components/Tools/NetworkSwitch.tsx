import React, { useState } from 'react';
import { networks } from './DropdownMenu';
import useActiveWeb3React from '../../hooks/useActiveWeb3React';
import useNetworkSelectorContext from '../../hooks/useNetworkSelectorContext';
import useAuthWallet from '../../hooks/useWallet';
import { Networks } from '../../hooks/types';
import { networkLists } from '../../config/constants';

export const NetworkSwitch = () => {
    const [selectedOption, setSelectedOption] = useState('Select Network');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { account } = useActiveWeb3React();
    const ref = React.useRef<HTMLDivElement>(null);
    const { setNetworkInfo } = useNetworkSelectorContext();

    const { onPresentConnectModal } = useAuthWallet();

    const openModal = (net: Networks) => {
        const network = networkLists[net];

        if (network) {
            const { chainId, rpcUrls } = network;
            setNetworkInfo({ chainId, rpcUrl: rpcUrls?.[0], networkName: network.id });
            onPresentConnectModal();
        }
    };

    const handleOptionClick = (network: string) => {
        setSelectedOption(network);
        setDropdownOpen(false);
    };

    return (
        <div className="dropdown inline-block">
            <button onClick={() => setDropdownOpen(!dropdownOpen)}>
                {selectedOption} <span>&#9662;</span>
            </button>
            {dropdownOpen && (
                <div className="z-[999] dropdown-content bg-inherit/30 backdrop-blur-xl">
                    {networks.map((network, key) => (
                        <div key={key} className="flex border border-b-2 px-1 py-1">
                            <span className="p-1">{network?.networkIcon}</span>
                            <button
                                onClick={() => {
                                    openModal(network?.name);
                                    handleOptionClick(network?.name || 'Select Network');
                                }}
                                className="p-1"
                            >
                                {network?.network}
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
