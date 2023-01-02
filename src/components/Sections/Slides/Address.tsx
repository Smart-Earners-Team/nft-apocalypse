import * as React from 'react'
import { CopyButton } from '../../common/styled'

const smartContractAddress = '0xda5dea132f9c30f2f6b513266795fec16426c0c6'

export const Address = () => {

    return (
        <div className='px-10 py-3 gap-5 my-5'>

            <div className='text-center gap-3'>

                <div className='text-xl p-1'>Smart Contract Address</div>

                <div className='text-sm p-1'>
                    We are a revolutionary project already existing on four(4) Blockchains with the same smart contract address.
                </div>

                <div className='flex m-2 relative place-content-center'>

                    <CopyButton onClick={()=>{

                        navigator.clipboard.writeText(smartContractAddress)
                        console.log(smartContractAddress)

                    }}></CopyButton>                    

                    <input type={'text'} className='text-center text-xs px-2 py-3 shadow-md outline-none w-[400px] cursor-default bg-transparent hover:shadow-sm' value={smartContractAddress} readOnly />

                </div>

                <div className='my-5 text-sm'>

                    <div className='flex justify-center flex-wrap'>

                        <a className='mx-1 my-1 rounded-xl bg-[#89daf3] px-3 py-2 text-slate-800' href='#'>View on Binance SmartChain</a>
                        
                        <a className='mx-1 my-1 rounded-xl bg-[#89daf3] px-3 py-2 text-slate-800' href='#'>View on Huobi Blockchain</a>

                    </div>

                    <div className='flex justify-center flex-wrap'>

                        <a className='mx-1 my-1 rounded-xl bg-[#89daf3] px-3 py-2 text-slate-800' href='#'>View on xDai Mainnet</a>

                        <a className='mx-1 my-1 rounded-xl bg-[#89daf3] px-3 py-2 text-slate-800' href='#'>View on Fantom Opera (FTM)</a>

                    </div>

                </div>

            </div>

        </div>
    )
}