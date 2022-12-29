import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image";
import { GlobalTypes } from '../../globals';
import styled from 'styled-components';
import { RiFileCopy2Fill } from 'react-icons/ri'

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

export const LogoImage = () => {

    const logoStyle = {
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        maxWidth: "50px",
        maxHeight: "50px",
        padding: '5px',
    }

    return(
        <a href='/'>
            <StaticImage src='../../assets/icons/icon.png' alt='logo' style={logoStyle} />
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

    return(
        <main>
            <button onClick={onClick}><RiFileCopy2Fill className='absolute top-3 left-auto ml-3 text-xl' /></button>
            <div id='alert' className='hidden'>Hello</div>
        </main>
    )

}
