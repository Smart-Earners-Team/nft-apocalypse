import Button from '../Buttons/Button';
import React /*{ useState, useEffect }*/ from 'react';
import { Glitch } from '../Tools/GlitchText/GlitchText';

const Header = () => {

    // const [color, setColor] = useState('')

    // useEffect(() => {

    //     const colors = ['inherit', '#DCD5D5', '#ec1f38']

    //     let index = 0;

    //     setInterval(() => {

    //         if (index === colors.length) {
    //             index = 0;
    //         }
    //         setColor(colors[index])
    //         index++
    //     }, 1000)

    // }, [])


    return (
        <div>

            <div className='w-[80%] mx-auto py-7 pl-[30px] md:pl-[150px]'>

                <div className='text-center md:text-left text-4xl md:text-8xl py-6 whitespace-nowrap overflow-hidden'>
                    <Glitch text='NFT Apocalypse'/>
                </div>
                <div className='flex'>
                    <div className='mx-1 py-5 flex'>
                        <Button title='Buy NFTx' />
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