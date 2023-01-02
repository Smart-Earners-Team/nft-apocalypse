import React from 'react'
import { GlobalStyles } from 'twin.macro'
import { Navbar } from './Navigation/Navbar'
import { Footer } from './Footer'

const Layout = ({ children, ...rest }:any) => (
    <div {...rest}>
        <GlobalStyles />

        <Navbar/>

        {children}

        <Footer/>

    </div>
)

export default Layout