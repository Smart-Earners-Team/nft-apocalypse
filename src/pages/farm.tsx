import React from 'react'
import { FarmNavbar } from '../components/Navigation/FarmNavbar'
import { Helmet } from 'react-helmet';
import { StaticImage } from 'gatsby-plugin-image';
// import ConnectWalletButton from '../components/Buttons/ConnectWalletButton';
import { Footer } from '../components/Footer';
import Button from '../components/Buttons/Button';

const Farm = () => {
  return (
    <React.Fragment>

      <Helmet>
        <link rel="icon" href="../images/icon.png" />
        <title>FarmWithUs</title>
      </Helmet>

      <>

        <FarmNavbar />

        <div className='my-5 w-50 mx-auto'>

          <div className="w-[300px] flex relative gap-2 border border-gray-200 rounded-lg py-3 px-2 mx-auto">

            <input
              type="text"
              className="w-[250px] px-2 text-sm outline-none bg-transparent duration-700 text-slate-500"
              placeholder="Search here"
              autoFocus
            />

            <button className="text-slate-50 absolute top-1 right-1 bg-[#89daf3] hover:bg-[#65c5e2] duration-300 p-[7px] rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

          </div>

        </div>

        <div>

          <div className='mx-5 md:mx-20 my-5 rounded-xl'>

            <div className='grid grid-cols-3 gap-4 bg-[#89daf3] p-3'>

              <div className=''>
                <div>Name</div>
                <div className='text-xl pt-5'>NFTx APO</div>
              </div>

              <div className=''>
                <div>APR</div>
                <div className='text-xl pt-5'>0.00</div>
              </div>

              <div className=''>
                <div>TVL</div>
                <div className='text-xl pt-5'>0.000</div>
              </div>

            </div>

            <div className='grid grid-cols-3 gap-4 overflow-hidden h-[auto]'>

              <div className='bg-[#89daf356] p-3 text-center'>
                <StaticImage src='../assets/images/robloxNFT.png' alt='roblox' className='w-[100px]' />
              </div>

              <div className='col-span-2 p-8'>

                <div className='inline-flex flex-nowrap gap-10 text-sm'>

                  <div>
                    <div>Earned</div>
                    <div className='pt-3'>0.0</div>
                  </div>

                  <Button title='Harvest' size='small' variant='secondary' />

                  <div>
                    <div>Start Farming</div>
                    <Button title='Connect Wallet' size='small'/>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        <Footer/>

      </>

    </React.Fragment>
  )
}

export default Farm