import React, { Fragment, useState } from 'react';
import Layout from '../../components/Layout';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { BiCaretDown, BiCaretUp, BiFilter } from 'react-icons/bi';
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import Button from '../../components/Buttons/Button';

const sort = [
  { order: 'Price low to high' },
  { order: 'Price high to low' },
]

type FarmProps = {
  id: string;
};

const Farm = ({ id }: FarmProps) => {
  const data = useStaticQuery(graphql`
    query {
      catlia: file(relativePath: { eq: "catlia.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      },
      ape: file(relativePath: { eq: "ape.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      },
    }
  `)

  const bgImage = getImage(data.catlia)
  const apeImage = getImage(data.ape)

  const [isTruncated, setIsTruncated] = useState(true);

  const [selected, setSelected] = useState(sort[0])

  const handleShowMore = () => {
    setIsTruncated(false);
  };

  const handleShowLess = () => {
    setIsTruncated(true);
  };

  return (
    <React.Fragment>
      <Helmet>
        <link rel="icon" href="../images/icon.png" />
        <title>{id}</title>
      </Helmet>

      <Layout stakeNavbar>

        <section className='pb-2 z-0'>

          <div className='h-[300px] md:h-[380px] w-full justify-items-center overflow-hidden'>
            <GatsbyImage image={bgImage!} alt='' className='w-full opacity-90 rounded-lg -top-[50%] md:-top-[80%] -z-[9999] blur-sm md:blur-md' />
          </div>

          <div className='h-fit absolute top-[165px] md:top-[250px] left-[10%] w-[30%] md:w-[20%] rounded-[30px] md:rounded-[60px] bg-cover bg-gradient-to-b from-[#887d748b] to-[#FECEA3] p-2'>
            <GatsbyImage image={bgImage!} alt='' className='rounded-[30px] md:rounded-[60px]' />
          </div>

          <div className='absolute top-[35px] right-[15%] py-8 md:py-16 z-0'>

            <span className='uppercase block text-2xl md:text-5xl py-1'>
              NFT&nbsp;<span className='text-[red]'>Apocalypse</span>
            </span>

            <span className='float-right -mr-[10%] py-1 text-sm md:text-xl'>
              By Isaac John
            </span>

          </div>

        </section>

        <section className='mt-[0px] md:mt-[130px] px-[12%] py-2 z-0'>

          <div className='grid gap-5'>
            <div className='text-xl'>
              NFT APOCALYPSE
              <div className='text-sm'>By Isaac John</div>
            </div>
            <div className='flex flex-wrap gap-x-8 text-xl my-2'>
              <div className='flex gap-x-3'>Unique Items <span className='font-bold'>{'6'}</span></div>
              <div className='flex gap-x-3'>Total Items <span className='font-bold'>{'733'}</span></div>
              <div className='flex gap-x-3'>Chain <span className='font-bold'>{'Ethereum'}</span></div>
            </div>
          </div>

        </section>

        <section className='px-[12%] py-2'>
          <div className="w-full">
            <div
              className={`text-inherit overflow-hidden ${isTruncated ? "max-h-24" : ""}`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            {isTruncated ? (
              <button className='flex gap-x-5 align-middle' onClick={handleShowMore}>Show more {<BiCaretDown />}</button>
            ) : (
              <button className='flex gap-x-5 align-middle' onClick={handleShowLess}>Show less {<BiCaretUp />}</button>
            )}
          </div>

        </section>

        <section className='px-[12%] py-2 grid grid-cols-3 md:grid-cols-7'>

          <div className='grid gap-3'>
            <span className='font-bold text-xl'>3452k</span>
            <span>Total Volume</span>
          </div>

          <div className='grid gap-3'>
            <span className='font-bold text-xl'>2.98</span>
            <span>Floor Price</span>
          </div>

          <div className='grid gap-3'>
            <span className='font-bold text-xl'>0.91</span>
            <span>Best Offer</span>
          </div>

        </section>

        <section className='px-[12%] py-2 md:py-5 grid grid-cols-1 md:grid-cols-2'>

          <div className='flex gap-8 text-xl align-baseline mt-1'>
            <BiFilter size={30} />
            <span className='text-red-600'>Items</span>
            <span>Activity</span>
          </div>

          <div className='flex md:pl-3'>

            <div className="w-full relative gap-2 border border-inherit rounded-lg py-3 px-2 mx-auto h-fit">

              <input
                type="text"
                className="w-full px-2 text-sm outline-none bg-transparent duration-700 text-inherit text-opacity-70"
                placeholder="Search items, collections..."
                autoFocus
              />

              <button className="text-slate-50 absolute top-0 right-0 bg-[#89daf3] hover:bg-[#65c5e2] duration-300 py-[7px] px-[10px] h-full rounded-r-md">
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

            <div className="w-fit border border-inherit rounded-lg mx-2 md:block hidden">
              <Listbox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                  <Listbox.Button className="relative w-full cursor-pointer bg-inherit py-2 pl-3 pr-10 text-left sm:text-sm">
                    <span className="block truncate">{selected.order}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute mt-1 max-h-60 w-fit overflow-hidden bg-inherit py-2 px-3 focus:outline-none sm:text-sm">
                      {sort.map((sort, key) => (
                        <Listbox.Option
                          key={key}
                          className={({ active }) =>
                            `relative cursor-pointer select-none py-3 px-2 ${active ? '' : ''
                            }`
                          }
                          value={sort}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                  }`}
                              >
                                {sort.order}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                  {/* <CheckIcon className="h-5 w-5" aria-hidden="true" /> */}
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>

          </div>

        </section>

        <div className='divider'/>

        <section className='px-[12%] py-2 md:py-5 grid grid-cols-1 md:grid-cols-3'>

          <div className='col-span-1 grid gap-5'>

            <div className='md:grid sm:hidden gap-5'>

              <div className='grid grid-cols-2 mb-5'>
                <span className='text-xl'>Status</span>
                <span><BiCaretUp /></span>
              </div>

              <div className='grid grid-cols-2'>
                <span className='text-sm'>Buy Now</span>
                <span className='transition-all duration-300'>
                  <input type="checkbox" className="rounded-md h-5 w-5 bg-[#89DAF3]" />
                </span>
              </div>

              <div className='grid grid-cols-2'>
                <span className='text-sm'>On Auction</span>
                <span className='transition-all duration-300'>
                  <input type="checkbox" className="rounded-md h-5 w-5 bg-[#89DAF3]" />
                </span>
              </div>

              <div className='grid grid-cols-2'>
                <span className='text-sm'>Has Offers</span>
                <span className='transition-all duration-300'>
                  <input type="checkbox" className="rounded-md h-5 w-5 bg-[#89DAF3]" />
                </span>
              </div>

              <div className='grid grid-cols-2'>
                <span className='text-sm'>New</span>
                <span className='transition-all duration-300'>
                  <input type="checkbox" className="rounded-md h-5 w-5 bg-[#89DAF3]" />
                </span>
              </div>

            </div>

            <div>

              <div className='grid grid-cols-2 mb-5'>
                <span className='text-xl'>Price Range</span>
                <span><BiCaretUp /></span>
              </div>

              <div className='text-center grid grid-cols-1'>
                <span className='flex py-1 px-2'>
                  <button className='px-4 py-2 bg-slate-400/20 hover:bg-slate-400/30 rounded-xl text-sm'>Min</button>
                  <label className='px-3 py-2 bg-inherit text-sm'>to</label>
                  <button className='px-4 py-2 bg-slate-400/20 hover:bg-slate-400/30 rounded-xl text-sm'>Max</button>
                </span>
                <Button title='Apply' variant='primary' className='!w-40 !text-center'/>
              </div>

            </div>
          
          </div>

          <div className='col-span-2 py-5'>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>

              <div className='border border-inherit rounded-3xl p-3 relative'>

                <GatsbyImage image={apeImage!} alt='' className='rounded-3xl blur-[2px]' />

                <div className='rounded-lg h-fit absolute top-6 right-5 w-[50px] bg-cover bg-gradient-to-b from-[#89DAF3] to-[#FECEA3] p-1'>
                  <GatsbyImage image={apeImage!} alt='' className='rounded-xl' />
                </div>

                <div className='my-2 grid justify-center'>
                  <div className='text-xl'>Majestic APO</div>
                  <div className='font-bold'>294</div>
                  <span className='font-thin'>Ends in 15hrs</span>
                </div>

              </div>

            </div>

          </div>

        </section>

      </Layout>
    </React.Fragment>
  );
};

export default Farm;

{/* <section className='px-[12%] py-2'>
          <div>

          </div>
        </section> */}