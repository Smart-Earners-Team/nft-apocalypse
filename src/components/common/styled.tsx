import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image";
import { GlobalTypes } from '../../globals';
import styled from 'styled-components';
import { RiFileCopy2Fill } from 'react-icons/ri'
import { useToast } from '@chakra-ui/react'

export const Error404Image = () => {

    const style404 = {
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        maxWidth: "550px",
        maxHeight: "550px",
    }

    return(
        <StaticImage src='../../assets/images/Err404.png' alt='' style={style404}></StaticImage>
    )
};

export const LogoImage:React.FC<GlobalTypes> = (
    {
        className
    }
) => {

    const logoStyle = {
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        maxWidth: "50px",
        maxHeight: "50px",
        padding: '5px',
    }

    return(
        <a href='/'>
            <StaticImage src='../../assets/icons/icon.png' alt='logo' style={logoStyle} className={className}/>
        </a>
    )
};

const MediaButton = styled.button`
    text-decoration: none;
    padding: 8px;
    border-radius: 50px;
    margin: 5px;
`

export const MediaIcon: React.FC<GlobalTypes> = (
    {
        children,
        text,
        href,
        className,
        name,
        target,
    }
) => {

    return(
        <MediaButton className={className}>
            <a href={href} target={target}>
                {children}{name}{text}
            </a>
        </MediaButton>
    )
}

export const CopyButton:React.FC<GlobalTypes> = ({
    onClick
}) => {

    const toast = useToast()

    return(
        <div>
            <button onClick={() =>
                toast({
                    title: 'Copied!',
                    position: 'bottom-right',
                    status: 'success',
                    isClosable: false,
                })}><RiFileCopy2Fill className='absolute top-3 left-auto ml-3 text-xl' onClick={onClick}/></button>
        </div>
    )

}

export const HamburgerIcon = () => {
    return(
        <label className="mx-1 btn btn-circle border-0 hover:border-0 bg-inherit text-inherit hover:bg-inherit swap swap-rotate">

            {/* <!-- this hidden checkbox controls the state --> */}
            <input type="checkbox" />

            {/* <!-- sun icon --> */}
            <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

            {/* <!-- moon icon --> */}
            <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

        </label>
    )
}

export const MenuSwitcher = ({
    action
}:any) => {
    return(
        <span>
            <label className="mx-1 btn btn-circle border-0 hover:border-0 bg-inherit text-inherit hover:bg-inherit swap swap-rotate relative">

                {/* <!-- this hidden checkbox controls the state --> */}
                <input onClick={action} type="checkbox" />

                {/* <!-- hamburger icon --> */}
                <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

                {/* <!-- close icon --> */}
                <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

            </label>

        </span>
    )
}
