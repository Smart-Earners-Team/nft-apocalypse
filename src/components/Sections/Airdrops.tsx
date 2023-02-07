import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import { BsGithub, BsTwitter } from 'react-icons/bs'
import { MediaIcon } from '../common/styled'

export const Airdrops = () => {

    const image = `../../assets/images/bitkoin.jpg`

    return (
        <div id='airdrops' className='items-center flex flex-wrap md:flex-nowrap px-10 py-3 gap-5'>

            <div className='text-justify md:w-[50%]'>

                <div className='text-2xl p-1 text-center'>Airdrop</div>

                <div className='text-md p-1'>
                    Round 1 closed. Please stay tuned on our official handles for more information.

                    <div>

                        <MediaIcon name={<BsGithub />} href='https://github.com/Smart-Earners-Team/' target='_blank' className='bg-[#404d51] text-white hover:bg-[#2d3538] duration-300'/>

                        <MediaIcon name={<BsTwitter />} href='https://www.google.com' target='_blank' className='bg-[#404d51] text-white hover:bg-[#2d3538] duration-300' />

                    </div>
                </div>

            </div>

            <div className='p-1 md:w-[50%]'>
                <StaticImage src={image} alt='' className='rounded-xl min-w-full h-[350px]' />
            </div>

        </div>
    )
}