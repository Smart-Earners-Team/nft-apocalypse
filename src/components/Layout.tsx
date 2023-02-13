import React from 'react'
import { Navbar } from './Navigation/Navbar'
import { Footer } from './Footer'
import { AppWrapper } from './AppWrapper';
import { ThemeSwitch } from './Tools/ThemeSwitch';
import { GlobalTypes } from '../globals';
import { FarmNavbar } from './Navigation/FarmNavbar';

const Layout:React.FC<GlobalTypes> = ( {
    children,
    navbar,
    footer,
    farmNavbar
} ) => (

    <AppWrapper>

        <span className='top-[15vw] absolute w-[45vw] h-[50vw] md:h-[80vw] bg-[#89DAF3]/25 blur-[100px] md:blur-[20vw]' />

        <span className='top-[30vw] md:top-[15vw] absolute left-[50vw] w-[45vw] h-[50vw] md:h-[80vw] bg-[#EC1F38]/25 blur-[100px] md:blur-[20vw]' />

        <span className='flex fixed z-[999] right-0 top-1/2 shadow-xl bg-white/10 backdrop-blur-[3px] hover:pr-5 rounded-l-3xl p-2 align-middle duration-300 ease-in-out hover:bg-white/20'>
            <ThemeSwitch/>
        </span>

        {
            navbar ? <Navbar /> : null
        }

        {
            farmNavbar ? <FarmNavbar /> : null
        }

        {children}

        {
            footer ? <Footer /> : null
        }

    </AppWrapper>
)

export default Layout