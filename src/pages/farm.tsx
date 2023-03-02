import React from 'react'
import { Helmet } from 'react-helmet';
import { StaticImage } from 'gatsby-plugin-image';
import { Footer } from '../components/Footer';
import Button from '../components/Buttons/Button';
import Layout from '../components/Layout';
import useAuthWallet from '../hooks/useWallet';
import useActiveWeb3React from '../hooks/useActiveWeb3React';
import { Link } from 'gatsby';
// import { BiCaretRight } from 'react-icons/bi';

const pool = [
  {
    id: 1,
    name: "NFTx APO",
    apr: 1.0,
    tvl: 1.10,
    earned: 1.11,
  },
  {
    id: 2,
    name: "NFTx APO",
    apr: 0.0,
    tvl: 0.0,
    earned: 0.0,
  },
  {
    id: 3,
    name: "NFTx APO",
    apr: 0.0,
    tvl: 0.0,
    earned: 0.0,
  },
  {
    id: 4,
    name: "NFTx APO",
    apr: 0.0,
    tvl: 0.0,
    earned: 0.0,
  },
  {
    id: 5,
    name: "NFTx APO",
    apr: 0.0,
    tvl: 0.0,
    earned: 0.0,
  },
  {
    id: 6,
    name: "NFTx APO",
    apr: 0.0,
    tvl: 0.0,
    earned: 0.0,
  },
  {
    id: 7,
    name: "NFTx APO",
    apr: 0.0,
    tvl: 0.0,
    earned: 0.0,
  },
  {
    id: 8,
    name: "NFTx APO",
    apr: 0.0,
    tvl: 0.0,
    earned: 0.0,
  },
  {
    id: 9,
    name: "NFTx APO",
    apr: 0.0,
    tvl: 0.0,
    earned: 0.0,
  },
]
const Farm = () => {

  console.log(pool)

  const { onPresentConnectModal } = useAuthWallet();
  const { account } = useActiveWeb3React()


  const openModal = () => {
    onPresentConnectModal();
  }

  return (
    <React.Fragment>

      <Helmet>
        <link rel="icon" href="../images/icon.png" />
        <title>FarmWithUs</title>
      </Helmet>

      <Layout farmNavbar>

        <div className='my-5 mx-auto'>

          <div className="w-[300px] relative gap-2 border border-gray-200 rounded-lg py-3 px-2 mx-auto hidden md:block">

            <input
              type="text"
              className="w-[250px] px-2 text-sm outline-none bg-transparent duration-700 text-inherit text-opacity-70"
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

        <div className='mx-[20%] md:mx-[20%] grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

          {pool.map((item, index) => {
            return (
              <div key={index} className='w-full mx-auto relative z-1 rounded-2xl border border-[#AAD5E3] p-2 shadow-sm duration-300 ease-in-out'>

                <div className='rounded-2xl bg-[#D8F2FB]/90 border border-[#AAD5E3] p-2 mx-auto'>
                  <StaticImage src='../assets/images/robloxNFT.png' alt='roblox' className='w-[120px] left-[22%] md:left-[22%] select-none pointer-events-none' />
                  <Link to={`/farm/${item.id}`}>
                    <Button title={item.name} className='!mx-auto !w-[150px] !bg-white/70 shadow-lg' />
                  </Link>
                </div>

                <div className='text-left text-slate-800 select-none absolute top-[60%] md:top-14 right-3 md:left-3 text-xs border-r-4 md:border-l-4 border-l-[#1A8FDD] px-2 gap-y-1 md:block hidden'>
                  <div>APR: {item.apr}%</div>
                  <div>TVL: {item.tvl}%</div>
                </div>

                {/* <div className='absolute text-left top-[8vw] md:top-10 right-[5vw] md:left-[22vw] p-2 shadow-2xl duration-300 ease-in-out w-fit md:w-[25vw] border-0 md:border md:rounded-r-xl md:rounded-l-none rounded-2xl'>
                    
                    <div className='p-3 text-left md:text-inherit text-slate-800 grid gap-3 md:gap-5 my-auto bg-inherit'>

                      <div className='flex text-xs md:text-sm text font-bold gap-x-3 px-2 text-inherit'>
                        <div>APR: {item.apr}%</div>
                        <div>TVL: {item.tvl}%</div>
                      </div>

                      <div className='text-lg md:text-2xl'>Earned: {item.earned}</div>

                      <div>
                        <Button title='Harvest' className='!w-full !mx-auto !px-1' />
                      </div>

                      <div>
                        <Button title='Remove Staking' className='!border !border-dashed !border-[#DD261A] text-[#DD261A] !bg-[#DD261A]/10 !w-full !mx-auto !px-1' />
                      </div>

                    </div>

                  </div> */}

              </div>
            )
          })}
        </div>

        {/* Pagination */}
        <div className="flex justify-center w-full py-5 gap-2">
          <a href="#previous" className="btn bg-inherit text-inherit hover:bg-[#dbe4f2] border-[#dbe4c8] btn-xs">{'<'}</a>
          <a href="#page1" className="btn bg-inherit text-inherit hover:bg-[#dbe4f2] border-[#dbe4c8] btn-xs">1</a>
          <a href="#page2" className="btn bg-inherit text-inherit hover:bg-[#dbe4f2] border-[#dbe4c8] btn-xs">2</a>
          <a href="#selectPage" className="btn bg-inherit text-inherit hover:bg-[#dbe4f2] border-[#dbe4c8] btn-xs">{'...'}</a>
          <a href="#page10" className="btn bg-inherit text-inherit hover:bg-[#dbe4f2] border-[#dbe4c8] btn-xs">10</a>
          <a href="#next" className="btn bg-inherit text-inherit hover:bg-[#dbe4f2] border-[#dbe4c8] btn-xs">{'>'}</a>
        </div>

        <div className='block'/>

        <div className=''>
          <Footer />
        </div>

      </Layout>

    </React.Fragment>
  )
}

export default Farm