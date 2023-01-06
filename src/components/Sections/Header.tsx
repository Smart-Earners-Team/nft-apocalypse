import Button from '../Buttons/Button';
import * as React from 'react';
import { Glitch } from '../Tools/GlitchText/GlitchText';

const Header = () => {

    return (
        <div>

            <div className='w-[80%] mx-auto py-7 pl-[20px] md:pl-[120px]'>

                <div className='text-center md:text-left text-3xl md:text-7xl py-6 whitespace-nowrap overflow-hidden'>
                    <Glitch text='NFT APOCALYPSE' />
                </div>
                <div className='flex md:ml-5'>
                    <div className='mx-1 py-5 flex'>
                        <Button title='Stake NFTs' />
                        <Button variant='secondary' title='Stake NFTx' />
                    </div>
                </div>

                <div>The first multichain metaverse NFT platform rewarding both holders and digital creators</div>

            </div>

            <div className="border border-[#ec1f38] mb-10" />

        </div>
    )
};

export default Header