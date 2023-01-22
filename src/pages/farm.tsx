import React from 'react'
import { Helmet } from 'react-helmet';
import { StaticImage } from 'gatsby-plugin-image';
import { Footer } from '../components/Footer';
import Button from '../components/Buttons/Button';
import Layout from '../components/Layout';

const Farm = () => {
  return (
    <React.Fragment>

      <Helmet>
        <link rel="icon" href="../images/icon.png" />
        <title>FarmWithUs</title>
      </Helmet>

      <Layout farmNavbar>

        <div className='my-5 mx-auto'>

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

        <div className='w-50 sm:mx-52 mx-auto'>

          {/* Card */}
          <div className='mx-5 md:mx-20 my-5 shadow-md flex-wrap'>

            <div className='grid grid-cols-3 gap-4 bg-[#89daf3] p-3'>

              <div className='text-slate-800'>
                <div>Name</div>
                <div className='text-xl pt-5'>NFTx APO</div>
              </div>

              <div className='text-slate-800'>
                <div>APR</div>
                <div className='text-xl pt-5'>0.00</div>
              </div>

              <div className='text-slate-800'>
                <div>TVL</div>
                <div className='text-xl pt-5'>0.000</div>
              </div>

            </div>

            <div className='grid grid-cols-3 gap-4 h-[auto]'>

              <div className='bg-[#89daf356] p-3 text-center'>
                <StaticImage src='../assets/images/robloxNFT.png' alt='roblox' className='w-[100px]' />
              </div>

              <div className='inline-flex flex-wrap'>

                <div className='justify-evenly place-self-center flex sm:gap-10 text-sm'>

                  <div className='sm:flex sm:gap-10'>
                    <div className='px-2 py-2'>
                      <div>Earned</div>
                      <div className='pt-3'>0.0</div>
                    </div>

                    <div>
                      <Button title='Harvest' size='small' variant='secondary' />
                    </div>
                  </div>

                  <div className='py-2 whitespace-nowrap align-middle ml-5'>
                    <div className='px-2'>Start Farming</div>
                    <Button title='Connect Wallet' size='small' />
                  </div>

                </div>

              </div>

            </div>

          </div> flex-wrap

          {/* Card */}
          <div className='mx-5 md:mx-20 my-5 shadow-md flex-wrap'>

            <div className='grid grid-cols-3 gap-4 bg-[#89daf3] p-3'>

              <div className='text-slate-800'>
                <div>Name</div>
                <div className='text-xl pt-5'>NFTx APO</div>
              </div>

              <div className='text-slate-800'>
                <div>APR</div>
                <div className='text-xl pt-5'>0.00</div>
              </div>

              <div className='text-slate-800'>
                <div>TVL</div>
                <div className='text-xl pt-5'>0.000</div>
              </div>

            </div>

            <div className='grid grid-cols-3 gap-4 h-[auto]'>

              <div className='bg-[#89daf356] p-3 text-center'>
                <StaticImage src='../assets/images/robloxNFT.png' alt='roblox' className='w-[100px]' />
              </div>

              <div className='inline-flex flex-wrap'>

                <div className='justify-evenly place-self-center flex sm:gap-10 text-sm'>

                  <div className='sm:flex sm:gap-10'>
                    <div className='px-2 py-2'>
                      <div>Earned</div>
                      <div className='pt-3'>0.0</div>
                    </div>

                    <div>
                      <Button title='Harvest' size='small' variant='secondary' />
                    </div>
                  </div>

                  <div className='py-2 whitespace-nowrap align-middle ml-5'>
                    <div className='px-2'>Start Farming</div>
                    <Button title='Connect Wallet' size='small' />
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Card */}
          <div className='mx-5 md:mx-20 my-5 shadow-md flex-wrap'>

            <div className='grid grid-cols-3 gap-4 bg-[#89daf3] p-3'>

              <div className='text-slate-800'>
                <div>Name</div>
                <div className='text-xl pt-5'>NFTx APO</div>
              </div>

              <div className='text-slate-800'>
                <div>APR</div>
                <div className='text-xl pt-5'>0.00</div>
              </div>

              <div className='text-slate-800'>
                <div>TVL</div>
                <div className='text-xl pt-5'>0.000</div>
              </div>

            </div>

            <div className='grid grid-cols-3 gap-4 h-[auto]'>

              <div className='bg-[#89daf356] p-3 text-center'>
                <StaticImage src='../assets/images/robloxNFT.png' alt='roblox' className='w-[100px]' />
              </div>

              <div className='inline-flex flex-wrap'>

                <div className='justify-evenly place-self-center flex sm:gap-10 text-sm'>

                  <div className='sm:flex sm:gap-10'>
                    <div className='px-2 py-2'>
                      <div>Earned</div>
                      <div className='pt-3'>0.0</div>
                    </div>

                    <div>
                      <Button title='Harvest' size='small' variant='secondary' />
                    </div>
                  </div>

                  <div className='py-2 whitespace-nowrap align-middle ml-5'>
                    <div className='px-2'>Start Farming</div>
                    <Button title='Connect Wallet' size='small' />
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Card */}
          <div className='mx-5 md:mx-20 my-5 shadow-md flex-wrap'>

            <div className='grid grid-cols-3 gap-4 bg-[#89daf3] p-3'>

              <div className='text-slate-800'>
                <div>Name</div>
                <div className='text-xl pt-5'>NFTx APO</div>
              </div>

              <div className='text-slate-800'>
                <div>APR</div>
                <div className='text-xl pt-5'>0.00</div>
              </div>

              <div className='text-slate-800'>
                <div>TVL</div>
                <div className='text-xl pt-5'>0.000</div>
              </div>

            </div>

            <div className='grid grid-cols-3 gap-4 h-[auto]'>

              <div className='bg-[#89daf356] p-3 text-center'>
                <StaticImage src='../assets/images/robloxNFT.png' alt='roblox' className='w-[100px]' />
              </div>

              <div className='inline-flex flex-wrap'>

                <div className='justify-evenly place-self-center flex sm:gap-10 text-sm'>

                  <div className='sm:flex sm:gap-10'>
                    <div className='px-2 py-2'>
                      <div>Earned</div>
                      <div className='pt-3'>0.0</div>
                    </div>

                    <div>
                      <Button title='Harvest' size='small' variant='secondary' />
                    </div>
                  </div>

                  <div className='py-2 whitespace-nowrap align-middle ml-5'>
                    <div className='px-2'>Start Farming</div>
                    <Button title='Connect Wallet' size='small' />
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Card */}
          <div className='mx-5 md:mx-20 my-5 shadow-md flex-wrap'>

            <div className='grid grid-cols-3 gap-4 bg-[#89daf3] p-3'>

              <div className='text-slate-800'>
                <div>Name</div>
                <div className='text-xl pt-5'>NFTx APO</div>
              </div>

              <div className='text-slate-800'>
                <div>APR</div>
                <div className='text-xl pt-5'>0.00</div>
              </div>

              <div className='text-slate-800'>
                <div>TVL</div>
                <div className='text-xl pt-5'>0.000</div>
              </div>

            </div>

            <div className='grid grid-cols-3 gap-4 h-[auto]'>

              <div className='bg-[#89daf356] p-3 text-center'>
                <StaticImage src='../assets/images/robloxNFT.png' alt='roblox' className='w-[100px]' />
              </div>

              <div className='inline-flex flex-wrap'>

                <div className='justify-evenly place-self-center flex sm:gap-10 text-sm'>

                  <div className='sm:flex sm:gap-10'>
                    <div className='px-2 py-2'>
                      <div>Earned</div>
                      <div className='pt-3'>0.0</div>
                    </div>

                    <div>
                      <Button title='Harvest' size='small' variant='secondary' />
                    </div>
                  </div>

                  <div className='py-2 whitespace-nowrap align-middle ml-5'>
                    <div className='px-2'>Start Farming</div>
                    <Button title='Connect Wallet' size='small' />
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Card */}
          <div className='mx-5 md:mx-20 my-5 shadow-md flex-wrap'>

            <div className='grid grid-cols-3 gap-4 bg-[#89daf3] p-3'>

              <div className='text-slate-800'>
                <div>Name</div>
                <div className='text-xl pt-5'>NFTx APO</div>
              </div>

              <div className='text-slate-800'>
                <div>APR</div>
                <div className='text-xl pt-5'>0.00</div>
              </div>

              <div className='text-slate-800'>
                <div>TVL</div>
                <div className='text-xl pt-5'>0.000</div>
              </div>

            </div>

            <div className='grid grid-cols-3 gap-4 h-[auto]'>

              <div className='bg-[#89daf356] p-3 text-center'>
                <StaticImage src='../assets/images/robloxNFT.png' alt='roblox' className='w-[100px]' />
              </div>

              <div className='inline-flex flex-wrap'>

                <div className='justify-evenly place-self-center flex sm:gap-10 text-sm'>

                  <div className='sm:flex sm:gap-10'>
                    <div className='px-2 py-2'>
                      <div>Earned</div>
                      <div className='pt-3'>0.0</div>
                    </div>

                    <div>
                      <Button title='Harvest' size='small' variant='secondary' />
                    </div>
                  </div>

                  <div className='py-2 whitespace-nowrap align-middle ml-5'>
                    <div className='px-2'>Start Farming</div>
                    <Button title='Connect Wallet' size='small' />
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Card */}
          <div className='mx-5 md:mx-20 my-5 shadow-md flex-wrap'>

            <div className='grid grid-cols-3 gap-4 bg-[#89daf3] p-3'>

              <div className='text-slate-800'>
                <div>Name</div>
                <div className='text-xl pt-5'>NFTx APO</div>
              </div>

              <div className='text-slate-800'>
                <div>APR</div>
                <div className='text-xl pt-5'>0.00</div>
              </div>

              <div className='text-slate-800'>
                <div>TVL</div>
                <div className='text-xl pt-5'>0.000</div>
              </div>

            </div>

            <div className='grid grid-cols-3 gap-4 h-[auto]'>

              <div className='bg-[#89daf356] p-3 text-center'>
                <StaticImage src='../assets/images/robloxNFT.png' alt='roblox' className='w-[100px]' />
              </div>

              <div className='inline-flex flex-wrap'>

                <div className='justify-evenly place-self-center flex sm:gap-10 text-sm'>

                  <div className='sm:flex sm:gap-10'>
                    <div className='px-2 py-2'>
                      <div>Earned</div>
                      <div className='pt-3'>0.0</div>
                    </div>

                    <div>
                      <Button title='Harvest' size='small' variant='secondary' />
                    </div>
                  </div>

                  <div className='py-2 whitespace-nowrap align-middle ml-5'>
                    <div className='px-2'>Start Farming</div>
                    <Button title='Connect Wallet' size='small' />
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Card */}
          <div className='mx-5 md:mx-20 my-5 shadow-md flex-wrap'>

            <div className='grid grid-cols-3 gap-4 bg-[#89daf3] p-3'>

              <div className='text-slate-800'>
                <div>Name</div>
                <div className='text-xl pt-5'>NFTx APO</div>
              </div>

              <div className='text-slate-800'>
                <div>APR</div>
                <div className='text-xl pt-5'>0.00</div>
              </div>

              <div className='text-slate-800'>
                <div>TVL</div>
                <div className='text-xl pt-5'>0.000</div>
              </div>

            </div>

            <div className='grid grid-cols-3 gap-4 h-[auto]'>

              <div className='bg-[#89daf356] p-3 text-center'>
                <StaticImage src='../assets/images/robloxNFT.png' alt='roblox' className='w-[100px]' />
              </div>

              <div className='inline-flex flex-wrap'>

                <div className='justify-evenly place-self-center flex sm:gap-10 text-sm'>

                  <div className='sm:flex sm:gap-10'>
                    <div className='px-2 py-2'>
                      <div>Earned</div>
                      <div className='pt-3'>0.0</div>
                    </div>

                    <div>
                      <Button title='Harvest' size='small' variant='secondary' />
                    </div>
                  </div>

                  <div className='py-2 whitespace-nowrap align-middle ml-5'>
                    <div className='px-2'>Start Farming</div>
                    <Button title='Connect Wallet' size='small' />
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Card */}
          <div className='mx-5 md:mx-20 my-5 shadow-md flex-wrap'>

            <div className='grid grid-cols-3 gap-4 bg-[#89daf3] p-3'>

              <div className='text-slate-800'>
                <div>Name</div>
                <div className='text-xl pt-5'>NFTx APO</div>
              </div>

              <div className='text-slate-800'>
                <div>APR</div>
                <div className='text-xl pt-5'>0.00</div>
              </div>

              <div className='text-slate-800'>
                <div>TVL</div>
                <div className='text-xl pt-5'>0.000</div>
              </div>

            </div>

            <div className='grid grid-cols-3 gap-4 h-[auto]'>

              <div className='bg-[#89daf356] p-3 text-center'>
                <StaticImage src='../assets/images/robloxNFT.png' alt='roblox' className='w-[100px]' />
              </div>

              <div className='inline-flex flex-wrap'>

                <div className='justify-evenly place-self-center flex sm:gap-10 text-sm'>

                  <div className='sm:flex sm:gap-10'>
                    <div className='px-2 py-2'>
                      <div>Earned</div>
                      <div className='pt-3'>0.0</div>
                    </div>

                    <div>
                      <Button title='Harvest' size='small' variant='secondary' />
                    </div>
                  </div>

                  <div className='py-2 whitespace-nowrap align-middle ml-5'>
                    <div className='px-2'>Start Farming</div>
                    <Button title='Connect Wallet' size='small' />
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Card */}
          <div className='mx-5 md:mx-20 my-5 shadow-md flex-wrap'>

            <div className='grid grid-cols-3 gap-4 bg-[#89daf3] p-3'>

              <div className='text-slate-800'>
                <div>Name</div>
                <div className='text-xl pt-5'>NFTx APO</div>
              </div>

              <div className='text-slate-800'>
                <div>APR</div>
                <div className='text-xl pt-5'>0.00</div>
              </div>

              <div className='text-slate-800'>
                <div>TVL</div>
                <div className='text-xl pt-5'>0.000</div>
              </div>

            </div>

            <div className='grid grid-cols-3 gap-4 h-[auto]'>

              <div className='bg-[#89daf356] p-3 text-center'>
                <StaticImage src='../assets/images/robloxNFT.png' alt='roblox' className='w-[100px]' />
              </div>

              <div className='inline-flex flex-wrap'>

                <div className='justify-evenly place-self-center flex sm:gap-10 text-sm'>

                  <div className='sm:flex sm:gap-10'>
                    <div className='px-2 py-2'>
                      <div>Earned</div>
                      <div className='pt-3'>0.0</div>
                    </div>

                    <div>
                      <Button title='Harvest' size='small' variant='secondary' />
                    </div>
                  </div>

                  <div className='py-2 whitespace-nowrap align-middle ml-5'>
                    <div className='px-2'>Start Farming</div>
                    <Button title='Connect Wallet' size='small' />
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Pagination */}
          <div className="flex justify-center w-full py-2 gap-2">
            <a href="#previous" className="btn bg-inherit text-inherit hover:bg-[#dbe4f2] border-[#dbe4c8] btn-xs">{'<'}</a>
            <a href="#page1" className="btn bg-inherit text-inherit hover:bg-[#dbe4f2] border-[#dbe4c8] btn-xs">1</a>
            <a href="#page2" className="btn bg-inherit text-inherit hover:bg-[#dbe4f2] border-[#dbe4c8] btn-xs">2</a>
            <a href="#selectPage" className="btn bg-inherit text-inherit hover:bg-[#dbe4f2] border-[#dbe4c8] btn-xs">{'...'}</a>
            <a href="#page10" className="btn bg-inherit text-inherit hover:bg-[#dbe4f2] border-[#dbe4c8] btn-xs">10</a>
            <a href="#next" className="btn bg-inherit text-inherit hover:bg-[#dbe4f2] border-[#dbe4c8] btn-xs">{'>'}</a>
          </div>

        </div>

        <br/>

        <div className=''>
          <Footer />
        </div>

      </Layout>

    </React.Fragment>
  )
}

export default Farm