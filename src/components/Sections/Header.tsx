import Button from '../Buttons/Button';
import * as React from 'react';
import { Glitch } from '../Tools/GlitchText/GlitchText';
import { Link } from 'gatsby';
import Typewriter from 'typewriter-effect';

const Header = () => {

    return (
        <div>

            <div className='w-[80%] mx-auto py-3'>

                <div className='text-center mx-auto text-[32px] md:text-8xl md:my-7 my-5 whitespace-nowrap overflow-hidden'>
                    <Glitch text='NFT APOCALYPSE' />
                </div>

                <div className='flex md:ml-10'>

                    <div className='mx-auto py-5 flex'>

                        <Link to='/farm' className='z-0 mx-1'>
                            <Button title='Stake NFTs' />
                        </Link>

                        <Link to='/' className='z-0 mx-1'>
                            <Button variant='secondary' title='Stake NFTx' />
                        </Link>

                    </div>
                    
                </div>

                <div className='text-center text-xl md:text-2xl -z-[999]'>
                    <Typewriter
                        options={{
                            strings: ['The first multichain metaverse NFT platform rewarding both holders and digital creators'],
                            autoStart: true,
                            loop: true,
                            delay: 100,
                        }}
                    />
                </div>

            </div>

            <div className="border border-[#ec1f38] my-10" />

        </div>
    )
};

export default Header