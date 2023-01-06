import React, { useState, useRef } from 'react';
import { SiBinance, SiEthereum } from 'react-icons/si';

export const address: undefined = undefined;

const networks = [
    {address: {address}, network1: <SiBinance/>},
    {address: {address}, network2: <SiEthereum/>}
]

export const DropdownMenu:React.FC = ({
    connected, address
} : any) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event:any) => {
        if (ref.current && ref.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
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
                <span className="shadow-sm">
                    <button
                        type="button"
                        className="inline-flex justify-center w-full border-0 px-2 py-2 text-xs leading-5 font-medium text-gray-800 hover:text-gray-700 focus:outline-none focus:border-0 outline-slate-50"
                        onClick={handleMenuToggle}
                    >
                        {connected ? `${address}` : `Select Chain` }
                    </button>
                </span>
            </div>
            {isOpen && (
                <div className="origin-top-left absolute left-0 text-center mt-0 w-full shadow-lg">
                    <div className="rounded-full">
                        <div className="py-1">
                            {networks.map((val, key) => {
                                return (
                                    <div key={key}>
                                        <button>{val.network1}</button>
                                        <button>{val.network2}</button>
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


