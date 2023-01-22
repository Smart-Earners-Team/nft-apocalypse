import React from 'react'
import { Navbar } from './Navigation/Navbar'
import { Footer } from './Footer'
import { AppWrapper } from './AppWrapper';

const Layout = ( {children}:any ) => (
    <AppWrapper>

        <Navbar/>

        {children}

        <Footer/>

    </AppWrapper>
)

export default Layout