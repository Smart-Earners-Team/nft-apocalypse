import * as React from 'react'
import { Link } from 'gatsby'
import { LogoImage } from '../common/styled';
import { farmNavItems } from '.';
import Button from '../Buttons/Button';

export const FarmNavbar = () => {

    return (

        <div className='px-[10vw] py-2 shadow-xl dark:text-slate-50'>

            <div className='float-left pr-[30px] md:pr-0 md:hidden'>
                <div className="flex items-center gap-2 border border-gray-200 rounded-lg py-3 px-2">
                    <button className="flex-shrink-0 text-gray-500">
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
                    <input
                        type="text"
                        className="w-[80px] outline-none bg-transparent focus:w-[100px] duration-700"
                        placeholder="Search..."
                    />
                </div>
            </div>

            <LogoImage />

            <nav className='flex float-right gap-5'>
                {farmNavItems.map((val, key) => {
                    return (
                        <div key={key} className='p-3 md:block hidden'>
                            <Link to={`${val.to}`}>{val.title}</Link>
                        </div>
                    );
                })}

                <span className='float-right md:flex hidden'>
                    <Button title='Stake NFTx' variant='secondary' size='small' />
                </span>

            </nav>

        </div>
    )
}
