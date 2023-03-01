import { MouseEventHandler, ReactNode } from 'react';

export interface GlobalTypes {
    text?: string | undefined,
    children?: ReactNode | undefined,
    href?: string | undefined;
    className?: string | undefined;
    name?: ReactNode | string | undefined,
    target?: string | undefined,
    success?: boolean | undefined,
    danger?: boolean | undefined,
    info?: boolean | undefined,
    warning?: boolean | undefined,
    onClick?: MouseEventHandler,
    navbar?: boolean,
    farmNavbar?: boolean,
    stakeNavbar?: boolean,
    footer?: boolean,
}

export const GlobalVariables =
    {
        smartContractAddress: '0xda5dea132f9c30f2f6b513266795fec16426c0c6'
    }