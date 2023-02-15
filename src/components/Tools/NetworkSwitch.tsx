import * as React from 'react'
import { useState } from 'react';
import { networks } from './DropdownMenu'

export const NetworkSwitch = () => {
    const [selectedOption, setSelectedOption] = useState('Select Network');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleOptionClick = (network:any) => {
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
                        <div className='flex border border-b-2 px-1 py-1'>
                            <span className='p-1'>
                                {network.networkIcon}
                            </span>
                            <button key={key} onClick={() => handleOptionClick(network)} className='p-1'>
                                {network.network}
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
