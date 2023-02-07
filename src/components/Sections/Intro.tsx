import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Button from '../Buttons/Button'

export const Intro = () => {

    const image = `../../assets/images/blocks.jpg`

    return (

        <div>
            <div className="flex justify-center">
            </div>

            <div className='items-center flex flex-wrap md:flex-nowrap px-10 py-3 gap-5'>

                <div className='md:w-[50%]'>

                    <div className='text-2xl p-1 text-center'>Introducing the future</div>

                    <div className='text-md py-2'>
                        The NFT Apocalypse Dao would connect augmented reality (AR/VR) with Decentralized Finance (Defi) and Non-Fungible Tokens (NFTs) across multiple blockchains while rewarding holders and creators.
                    </div>

                    <div className='text-md py-2'>
                        NFT Apocalyse is the first Multichain Metaverse platform adding value to both holders and digital creators. Don’t miss!!!
                    </div>

                </div>

                <div className='p-1 md:w-[50%]'>
                    <StaticImage src={image} alt='' className='rounded-xl min-w-full h-[350px]' />
                </div>

            </div>
        </div>
    )
}