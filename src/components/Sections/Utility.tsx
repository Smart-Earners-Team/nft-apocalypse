import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'

export const Utility = () => {

    const image = `../../assets/images/coinCandy.jpg`

    return (
        <div className='items-center flex flex-wrap md:flex-nowrap px-10 py-3 gap-5'>

            <div className='p-1 md:w-[50%]'>
                <StaticImage src={image} alt='' className='rounded-xl min-w-full h-full' />
            </div>

            <div className='text-justify md:w-[50%]'>

                <div className='text-2xl p-1 text-center'>The NFT Apocalypse Utility Token</div>

                <div className='text-md p-1'>
                    The NFT Apocalypse (NFTx) is well positioned to dominate the NFT MetaVerse as a utility token, and the first community-focused multi-chain project on 4 unique blockchains with the same contract address.
                </div>

                <div className='text-md p-1'>
                    NFTx is the governance token for NFT Apocalypse and can only be mined via LP mining (in Farms) and NFTx staking (in STUDIO pools). For fairness considerations, only 1,200,000,000,000 NFTx will be initally minted, hence all investors get an equal chance of getting NFTx. 0.05% of all transaction fee in NFTx Galleria (our own NFT marketplace) will be collected in the NFTx treasury account, which will all be used to buy back NFTx and burn
                </div>

            </div>

        </div>
    )
}