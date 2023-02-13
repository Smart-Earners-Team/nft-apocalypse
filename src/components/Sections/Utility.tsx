import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'

export const Utility = () => {

    const image = `../../assets/images/coinCandy.jpg`

    return (
        <div id='utility' className='z-0 items-center flex flex-wrap md:flex-nowrap px-10 py-3 gap-5'>

            <div className='z-0 p-1 md:w-[50%]'>
                <StaticImage src={image} alt='' className='z-0 rounded-xl min-w-full h-[350px]' />
            </div>

            <div className='z-0 md:w-[50%]'>

                <div className='z-0 text-2xl py-2 text-center'>The NFT Apocalypse Utility Token</div>

                <div className='z-0 text-md py-2'>
                    The NFT Apocalypse (NFTx) is well positioned to dominate the NFT MetaVerse as a utility token, and the first community-focused multi-chain project on 4 unique blockchains with the same contract address.
                </div>

                <div className='z-0 text-md py-2'>
                    NFTx is the governance token for NFT Apocalypse and can only be mined via LP mining (in Farms) and NFTx staking (in STUDIO pools). For fairness considerations, only 1,200,000,000,000 NFTx will be initally minted, hence all investors get an equal chance of getting NFTx. 0.05% of all transaction fee in NFTx Galleria (our own NFT marketplace) will be collected in the NFTx treasury account, which will all be used to buy back NFTx and burn
                </div>

            </div>

        </div>
    )
}