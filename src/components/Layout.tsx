import React from 'react'
import { Navbar } from './Navigation/Navbar'
import { Footer } from './Footer'

const Layout = ({ children, ...rest }:any) => (
    <div {...rest}>

        <Navbar/>

        {children}

        <Footer/>

    </div>
)

export default Layout