import Button from '../Buttons/Button';
import * as React from 'react';
import { Glitch } from '../Tools/GlitchText/GlitchText';
import { Link } from 'gatsby';
import Typewriter from 'typewriter-effect';

const Header = () => {

    return (
        <div>

            <div className='w-[80%] mx-auto py-3'>

                <div className='text-center mx-auto text-3xl md:text-8xl md:py-7 py-5 whitespace-nowrap overflow-hidden'>
                    <Glitch text='NFT APOCALYPSE' />
                </div>

                <div className='flex md:ml-10'>

                    <div className='mx-auto py-5 flex'>

                        <Link to='/farm'>
                            <Button title='Stake NFTs' />
                        </Link>

                        <Button variant='secondary' title='Stake NFTx' />

                    </div>
                    
                </div>

                <div className='text-center text-xl'>
                    <Typewriter
                        options={{
                            strings: ['The first multichain metaverse NFT platform rewarding both holders and digital creators'],
                            autoStart: true,
                            loop: true,
                            delay: 200,
                        }}
                    />
                </div>

            </div>

            <div className="border border-[#ec1f38] my-10" />

        </div>
    )
};

export default Header