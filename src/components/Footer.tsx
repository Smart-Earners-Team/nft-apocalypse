import React from 'react'
import { MediaIcon } from './common/styled';
import { SiGmail, SiTelegram, SiTwitter } from 'react-icons/si';

export const Footer = () => {
  return (
    <div>

        <div className='border border-slate-100 my-5'/>

        <div className='text-center pb-5'>
            <div className='text-5xl md:text-8xl p-5'>NFT Apocalypse</div>
            <div className='pt-2'>MultiChain metaverse NFT Platform</div>

            <div>
                <MediaIcon name={<SiGmail />} href='#' target='_blank' className='text-2xl duration-300'/>

                <MediaIcon name={<SiTelegram />} href='#' target='_blank' className='text-2xl duration-300'/>

                <MediaIcon name={<SiTwitter />} href='#' target='_blank' className='text-2xl duration-300'/>

            </div>

        </div>
        
    </div>
  )
}