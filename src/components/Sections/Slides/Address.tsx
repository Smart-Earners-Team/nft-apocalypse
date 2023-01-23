import * as React from 'react'
import { CopyButton } from '../../common/styled'
import { GlobalVariables } from '../../../globals/index';

export const Address = () => {

    return (
        <div className='px-10 py-3 gap-5 my-5 w-screen'>

            <div className='text-center gap-3'>

                <div className='p-1'>Smart Contract Address</div>

                <div className='p-1'>
                    We are a revolutionary project already existing on four(4) 
                    Blockchains with the same smart contract address.
                </div>

                <div className='flex m-2 relative place-content-center z-52'>

                    <CopyButton onClick={()=> navigator.clipboard.writeText(GlobalVariables.smartContractAddress)}/>                 

                    <input type={'text'} className='text-center text-xs px-2 py-3 shadow-md outline-none w-[400px] cursor-default bg-transparent hover:shadow-lg' value={GlobalVariables.smartContractAddress} readOnly />

                </div>

                <div className='my-5 text-sm flex justify-center flex-wrap'>

                    <div className='py-5'>

                        <a className='mx-1 my-1 rounded-xl bg-[#89daf3] px-3 py-2 text-slate-800' href='#'>View on Binance SmartChain</a>

                    </div>

                    <div className='py-5'>

                        <a className='mx-1 my-1 rounded-xl bg-[#89daf3] px-3 py-2 text-slate-800' href='#'>View on Huobi Blockchain</a>

                    </div>

                    <div className='py-5'>

                        <a className='mx-1 my-1 rounded-xl bg-[#89daf3] px-3 py-2 text-slate-800' href='#'>View on xDai Mainnet</a>

                    </div>

                    <div className='py-5'>

                        <a className='mx-1 my-1 rounded-xl bg-[#89daf3] px-3 py-2 text-slate-800' href='#'>View on Fantom Opera (FTM)</a>

                    </div>

                </div>

            </div>

        </div>
    )
}