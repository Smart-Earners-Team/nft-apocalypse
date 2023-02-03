import * as React from 'react'
import { Link } from 'gatsby'
import { LogoImage } from '../common/styled';
import { farmNavItems } from '.';
import { DropdownMenu } from '../Tools/DropdownMenu';
// import { BiMenu } from 'react-icons/bi';
import { RiCloseFill } from 'react-icons/ri';
import Button from '../Buttons/Button';

const network = {
    id: `${{}}`,
    symbol: `BSC`,
    user: {
        address: ``
    },
}

export const FarmNavbar = () => {
    
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    return (
        <>

            <div className='px-[10vw] py-2 shadow-xl dark:text-slate-50'>

                <LogoImage />

                <nav className='flex float-right gap-5'>
                    {farmNavItems.map((val, key) => {
                        return (
                            <div key={key} className='p-3 md:block hidden'>
                                <Link to={`${val.to}`}>{val.title}</Link>
                            </div>
                        );
                    })}

                    <span onClick={() => setIsMenuOpen(true)} className='duration-300 select-none opacity-90'>
                        <Button 
                        variant='secondary'
                        title={`${network.symbol} ${network.user.address}`}
                        />
                    </span>

                    {/* <span className='flex justify-center align-baseline'>
                        <BiMenu size={33} className='mt-2 p-1 duration-300' onClick={() => setIsMenuOpen(true)} />
                    </span> */}

                </nav>
            </div>
            {isMenuOpen && (
                <div
                    className='fixed top-0 inset-0 z-50 overflow-y-auto'
                >
                    <div className='relative sm:w-[25vw] w-full min-h-screen backdrop-blur bg-white/75 p-4 shadow-lg duration-300 rounded-r-2xl ease-in-out'>
                        <div className='w-[85%]'>
                            <h3 className='text-2xl font-bold'></h3>
                            <div>
                                <DropdownMenu />
                            </div>
                        </div>

                        <button
                            className='absolute right-0 top-0 mx-2 my-2 px-2 py-2 border border-slate-500 rounded-full text-slate-500 text-md hover:bg-slate-800 hover:text-white ease-in-out duration-300'
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <RiCloseFill />
                        </button>

                        <div className='absolute left-5 bottom-5 animate-bounce md:hidden text-slate-900 text-xs'>
                            Download Whitepaper | <a className='hover:underline' href='/404' >PDF</a> | <a className='hover:underline' href='/404'>EPUB</a>
                        </div>

                    </div>
                </div>
            )}

        </>
    )
}
