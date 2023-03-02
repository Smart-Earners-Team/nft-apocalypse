import * as React from 'react'
import {
    Link
} from 'gatsby'
import {
    LogoImage
} from '../common/styled';
import {
    stakeNavItems
} from '.';
import {
    DropdownMenu
} from '../Tools/DropdownMenu';
import { BiCartAlt, BiMenu, BiSearch } from 'react-icons/bi';
import {
    RiCloseFill
} from 'react-icons/ri';
import { NetworkSwitch } from '../Tools/NetworkSwitch';
// import Button from '../Buttons/Button';
// import {
//     network
// } from '.';

export const StakeNavbar = () => {

    const [isMenuOpen,
        setIsMenuOpen] = React.useState(false)

    return (
        <div>

            <div className='px-[10vw] py-2 shadow-2xl flex justify-between'>

                <div className='float-left pr-[30px] md:pr-0 md:hidden py-3'>
                    <button>
                        <BiSearch className='text-2xl z-0 cursor-pointer' />
                    </button>
                </div>

                <div className='align-middle justify-center'>
                    <LogoImage className='cursor-pointer z-0' />
                </div>

                <div className='align-middle'>

                    <div className="w-full relative gap-2 border border-gray-200 rounded-lg py-3 px-2 mx-auto hidden md:block">

                        <input
                            type="text"
                            className="hidden md:block w-[18vw] px-2 text-sm outline-none bg-transparent duration-700 text-inherit text-opacity-70"
                            placeholder="Search items, collections..."
                            autoFocus
                        />

                        <button className="text-slate-50 absolute top-1 right-1 bg-[#89daf3] hover:bg-[#65c5e2] duration-300 p-[7px] rounded-md">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>

                    </div>

                </div>


                <nav className='flex float-right gap-3'>
                    {stakeNavItems.map((val, key) => {
                        return (
                            <div key={key} className='p-3 md:block hidden'>
                                <Link to={`${val.to}`}>{val.title}</Link>
                            </div>
                        );
                    })}

                    <span className='mt-3 justify-items-end duration-300 select-none md:block hidden z-0'>
                        <NetworkSwitch />
                    </span>

                    <Link to='/farm/' className='justify-center align-baseline'>
                        <BiCartAlt size={33} className='mt-2 p-1 duration-300 cursor-pointer z-0' />
                    </Link>

                    <span className='mt-2 duration-300 select-none md:block hidden z-0'>
                        <DropdownMenu />
                    </span>

                    <span className='justify-center align-baseline md:hidden block'>
                        <BiMenu size={33} className='mt-2 p-1 duration-300 cursor-pointer z-0' onClick={() => setIsMenuOpen(true)} />
                    </span>

                </nav>

            </div>
            {isMenuOpen && (
                <div
                    className='fixed top-0 inset-0 z-50 overflow-y-auto'
                >
                    <div className='relative sm:w-[25vw] w-full min-h-screen backdrop-blur bg-inherit/80 p-4 text-inherit shadow-lg duration-300 rounded-r-2xl ease-in-out'>

                        <button
                            className='absolute right-0 top-0 mx-2 my-2 px-2 py-2 border border-slate-500 rounded-full text-inherit text-md hover:bg-slate-800 hover:text-white ease-in-out duration-300'
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <RiCloseFill />
                        </button>

                        <nav className='block gap-3 md:gap-5 content-center'>
                            {stakeNavItems.map((val, key) => {
                                return (
                                    <div key={key} className='p-3'>
                                        <Link onClick={() => setIsMenuOpen(false)} to={`${val.to}`}>{val.title}</Link>
                                    </div>
                                )
                            })}

                            <span className='absolute top-5 right-24 duration-300 select-none z-0'>
                                <NetworkSwitch />
                            </span>

                            <Link to='/farm/' className='justify-center align-baseline'>
                                <BiCartAlt size={33} className='p-1 m-2 duration-300 cursor-pointer z-0' />
                            </Link>

                            <span className='mt-5 duration-300 select-none opacity-90'>
                                <DropdownMenu />
                            </span>

                        </nav>

                        <div className='absolute left-5 bottom-10 animate-bounce md:hidden inline-block text-inherit text-xs'>
                            Download Whitepaper | <a className='hover:underline' href='/404' >PDF</a> | <a className='hover:underline' href='/404'>EPUB</a>
                        </div>

                    </div>

                </div>
            )}
        </div>
    )
}