import React, { Fragment, useState } from 'react';
import Layout from '../../components/Layout';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
// import { BiCaretDown, BiCaretUp, BiFilter } from 'react-icons/bi';
// import { Listbox, Transition } from '@headlessui/react'
// import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import Button from '../../components/Buttons/Button';
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';

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

  // const [isTruncated, setIsTruncated] = useState(true);

  const [selected, setSelected] = useState(sort[0])

  // const handleShowMore = () => {
  //   setIsTruncated(false);
  // };

  // const handleShowLess = () => {
  //   setIsTruncated(true);
  // };

  return (
    <React.Fragment>
      <Helmet>
        <link rel="icon" href="../images/icon.png" />
        <title>{id}</title>
      </Helmet>

      <Layout stakeNavbar footer>

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
              By Peter Parker
            </span>

          </div>

        </section>

        <section className='mt-[0px] md:mt-[130px] px-[12%] py-2 z-0'>

          <div className='grid gap-5'>
            <div className='flex flex-wrap gap-x-8 text-xl my-2'>
              <div className='flex gap-x-3'>APR <span className='font-bold'>{`${'6'}%`}</span></div>
              <div className='flex gap-x-3'>TVL <span className='font-bold'>{`$${'733'}`}</span></div>
              <div className='flex gap-x-3'>Chain <span className='font-bold'>{`${'Ethereum'}`}</span></div>
            </div>
          </div>

        </section>

        {/* <section className='px-[12%] py-2'>
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

        </section> */}

        <section className='px-[12%] py-2 md:py-5 grid grid-cols-1 md:grid-cols-2'>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-2 align-middle my-2'>

            <div className='flex gap-5'>

              <div className='flex flex-wrap gap-2 align-middle text-center'>
                <span className='font-bold text-xl'>Staked</span>
                <span className='align-middle mt-1'>{`${'5'}`}</span>
              </div>

              <div className='flex flex-wrap gap-2 align-middle text-center'>
                <span className='font-bold text-xl'>Earned</span>
                <span className='align-middle mt-1'>{`${'2'} ${'BNB'}`}</span>
              </div>
            
            </div>

            <div className='flex'>

              <Button title='Stake' className='!text-inherit !bg-[#89DAF3]/20' />
              <Button title='Unstake' className='!text-inherit !bg-[#89DAF3]/20' />
              <Button title='Harvest' className='!text-inherit !bg-[#89DAF3]/20' />
              
            </div>

          </div>

        </section>

        <div className='divider' />

        <section className='px-[12%] py-2 md:py-5 grid grid-cols-1 md:grid-cols-3'>

          {/* <div className='col-span-1 grid gap-5'>

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
                <Button title='Apply' variant='primary' className='!w-40 !text-center' />
              </div>

            </div>

          </div> */}

          <div className='col-span-4 py-5'>

            <div className='text-center font-bold text-2xl py-2 px-2'>Staked</div>

            <Carousel
              autoPlay={false}
              additionalTransfrom={0}
              arrows={true}
              // autoPlaySpeed={3000}
              centerMode={false}
              className="my-5"
              containerClass=""
              dotListClass="border-none"
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024
                  },
                  items: 4
                },
                mobile: {
                  breakpoint: {
                    max: 740,
                    min: 0
                  },
                  items: 2
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 740
                  },
                  items: 3
                }
              }}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable>

              <div className='border border-inherit rounded-3xl p-3 relative mx-2'>

                <GatsbyImage image={apeImage!} alt='' className='rounded-3xl blur-[2px]' />

                <div className='rounded-xl h-fit absolute top-6 right-5 w-[45px] md:w-[50px] bg-cover bg-gradient-to-b from-[#89daf374] to-[#89DAF3] p-1'>
                  <GatsbyImage image={apeImage!} alt='' className='rounded-xl' />
                </div>

                <div className='my-3 grid justify-center'>
                  <div className='text-md'>Majestic APO 294</div>
                  <Button variant='secondary' className='text-sm'>Unstake</Button>
                </div>

              </div>

              <div className='border border-inherit rounded-3xl p-3  mx-2'>

                <GatsbyImage image={apeImage!} alt='' className='rounded-3xl blur-[2px]' />

                <div className='rounded-xl h-fit absolute top-6 right-5 w-[45px] md:w-[50px] bg-cover bg-gradient-to-b from-[#89daf374] to-[#89DAF3] p-1'>
                  <GatsbyImage image={apeImage!} alt='' className='rounded-xl' />
                </div>

                <div className='my-3 grid justify-center'>
                  <div className='text-md'>Majestic APO 294</div>
                  <Button variant='secondary' className='text-sm'>Unstake</Button>
                </div>

              </div>

              <div className='border border-inherit rounded-3xl p-3 relative mx-2'>

                <GatsbyImage image={apeImage!} alt='' className='rounded-3xl blur-[2px]' />

                <div className='rounded-xl h-fit absolute top-6 right-5 w-[45px] md:w-[50px] bg-cover bg-gradient-to-b from-[#89daf374] to-[#89DAF3] p-1'>
                  <GatsbyImage image={apeImage!} alt='' className='rounded-xl' />
                </div>

                <div className='my-3 grid justify-center'>
                  <div className='text-md'>Majestic APO 294</div>
                  <Button variant='secondary' className='text-sm'>Unstake</Button>
                </div>

              </div>

              <div className='border border-inherit rounded-3xl p-3 relative mx-2'>

                <GatsbyImage image={apeImage!} alt='' className='rounded-3xl blur-[2px]' />

                <div className='rounded-xl h-fit absolute top-6 right-5 w-[45px] md:w-[50px] bg-cover bg-gradient-to-b from-[#89daf374] to-[#89DAF3] p-1'>
                  <GatsbyImage image={apeImage!} alt='' className='rounded-xl' />
                </div>

                <div className='my-3 grid justify-center'>
                  <div className='text-md'>Majestic APO 294</div>
                  <Button variant='secondary' className='text-sm'>Unstake</Button>
                </div>

              </div>

            </Carousel>

          </div>

        </section>

      </Layout>
    </React.Fragment>
  );
};

export default Farm;
