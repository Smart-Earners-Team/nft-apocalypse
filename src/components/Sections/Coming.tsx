import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'

export const ComingSoon = () => {

    const image = `../../assets/images/bitzoom.jpg`

    return (
        <div className='items-center flex flex-wrap md:flex-nowrap px-10 py-3 gap-5'>

            <div className='p-1 md:w-[50%]'>
                <StaticImage src={image} alt='' className='rounded-xl min-w-full h-[350px]' />
            </div>

            <div className='md:w-[50%]'>

                <div className='text-2xl p-1 text-center'>Coming Soon</div>

                <div className='text-md p-2'>
                    <div className='py-2'>
                        <li className='list-disc'>NFTx Governanace Staking</li>
                        <li className='list-disc'>NFTx Galleria</li>
                    </div>

                    <div>
                        With NFTx, you'll be able to send (buy or sell) your NFTs accross different blockchains from one platform. Stake NFTx to earn more NFTx. NFTx is the governance token for the NFT Apocalypse Metaverse, all holders have a right in determining how network resources are allocated.
                    </div>

                </div>

            </div>

        </div>
    )
}