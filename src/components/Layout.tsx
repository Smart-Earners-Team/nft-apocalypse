import React from 'react'
import { GlobalStyles } from 'twin.macro'
import { Navbar } from './Navigation/Navbar'
import { Footer } from './Footer'

const Layout = ({ children, ...rest }:any) => (
    <div {...rest} className="bg-gradient-to-r from-[#e1f5fb77] to-[#facbd186] dark:from-[#1f3238] dark:to-[#3d0910] max-w-screen-2xl">
        <GlobalStyles />

        <Navbar/>

        {children}

        <Footer/>

    </div>
)

export default Layout