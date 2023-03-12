import React, { Fragment, useState } from 'react';
import Layout from '../../components/Layout';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import { GlobalTypes } from '../../globals';
import Button from '../../components/Buttons/Button';
import { FaTimes } from 'react-icons/fa'

// const sort = [
//   { order: 'Price low to high' },
//   { order: 'Price high to low' },
// ]

type FarmProps = {
  id: string;
};

interface ModalProps extends GlobalTypes {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, className }) => {
  const overlayClass = isOpen
    ? 'fixed inset-0 bg-gray-800 opacity-50 z-50 mx-2'
    : 'hidden';

  const modalClass = isOpen
    ? 'fixed inset-0 flex items-center justify-center z-50 mx-2'
    : 'hidden';

  // Add these classes to center the modal horizontally and vertically
  const centeredClass = 'sm:max-w-lg sm:max-h-screen sm:mx-auto sm:my-auto';

  return (
    <>
      <div className={overlayClass} onClick={onClose}></div>
      <div className={modalClass}>
        <div className={`${className} bg-white rounded-3xl shadow-lg p-6 ${centeredClass}`}>
          {children}
        </div>
      </div>
    </>
  );
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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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

          <div className='col-span-4 py-5'>

            <div className='text-center font-bold text-2xl py-2 px-2'>Staked</div>

            {/* Staked NFTs */}
            <Carousel
              autoPlay={false}
              additionalTransfrom={0}
              arrows={true}
              // autoPlaySpeed={3000}
              centerMode={false}
              className="my-5 z-0"
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
                  <div className='text-md px-1'>Majestic APO 294</div>
                  <button onClick={handleOpenModal} className='text-sm px-5 py-3 ring-1 ring-slate-500 rounded-lg m-3'>Unstake</button>
                </div>

              </div>

              <div className='border border-inherit rounded-3xl p-3 relative mx-2'>

                <GatsbyImage image={apeImage!} alt='' className='rounded-3xl blur-[2px]' />

                <div className='rounded-xl h-fit absolute top-6 right-5 w-[45px] md:w-[50px] bg-cover bg-gradient-to-b from-[#89daf374] to-[#89DAF3] p-1'>
                  <GatsbyImage image={apeImage!} alt='' className='rounded-xl' />
                </div>

                <div className='my-3 grid justify-center'>
                  <div className='text-md px-1'>Majestic APO 294</div>
                  <button onClick={handleOpenModal} className='text-sm px-5 py-3 ring-1 ring-slate-500 rounded-lg m-3'>Unstake</button>
                </div>

              </div>

              <div className='border border-inherit rounded-3xl p-3 relative mx-2'>

                <GatsbyImage image={apeImage!} alt='' className='rounded-3xl blur-[2px]' />

                <div className='rounded-xl h-fit absolute top-6 right-5 w-[45px] md:w-[50px] bg-cover bg-gradient-to-b from-[#89daf374] to-[#89DAF3] p-1'>
                  <GatsbyImage image={apeImage!} alt='' className='rounded-xl' />
                </div>

                <div className='my-3 grid justify-center'>
                  <div className='text-md px-1'>Majestic APO 294</div>
                  <button onClick={handleOpenModal} className='text-sm px-5 py-3 ring-1 ring-slate-500 rounded-lg m-3'>Unstake</button>
                </div>

              </div>

              <div className='border border-inherit rounded-3xl p-3 relative mx-2'>

                <GatsbyImage image={apeImage!} alt='' className='rounded-3xl blur-[2px]' />

                <div className='rounded-xl h-fit absolute top-6 right-5 w-[45px] md:w-[50px] bg-cover bg-gradient-to-b from-[#89daf374] to-[#89DAF3] p-1'>
                  <GatsbyImage image={apeImage!} alt='' className='rounded-xl' />
                </div>

                <div className='my-3 grid justify-center'>
                  <div className='text-md px-1'>Majestic APO 294</div>
                  <button onClick={handleOpenModal} className='text-sm px-5 py-3 ring-1 ring-slate-500 rounded-lg m-3'>Unstake</button>
                </div>

              </div>

            </Carousel>

            <div className='text-center font-bold text-2xl py-2 px-2'>Available <span className='text-sm'>(Remaining in collection)</span></div>

            {/* Available NFTs, to be staked */}
            <Carousel
              autoPlay={false}
              additionalTransfrom={0}
              arrows={true}
              // autoPlaySpeed={3000}
              centerMode={false}
              className="my-5 z-0"
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
                  <div className='text-md px-1'>Majestic APO 294</div>
                  <button onClick={handleOpenModal} className='text-sm px-5 py-3 ring-1 ring-slate-500 rounded-lg m-3'>Stake</button>
                </div>

              </div>

              <div className='border border-inherit rounded-3xl p-3 relative mx-2'>

                <GatsbyImage image={apeImage!} alt='' className='rounded-3xl blur-[2px]' />

                <div className='rounded-xl h-fit absolute top-6 right-5 w-[45px] md:w-[50px] bg-cover bg-gradient-to-b from-[#89daf374] to-[#89DAF3] p-1'>
                  <GatsbyImage image={apeImage!} alt='' className='rounded-xl' />
                </div>

                <div className='my-3 grid justify-center'>
                  <div className='text-md px-1'>Majestic APO 294</div>
                  <button onClick={handleOpenModal} className='text-sm px-5 py-3 ring-1 ring-slate-500 rounded-lg m-3'>Stake</button>
                </div>

              </div>

              <div className='border border-inherit rounded-3xl p-3 relative mx-2'>

                <GatsbyImage image={apeImage!} alt='' className='rounded-3xl blur-[2px]' />

                <div className='rounded-xl h-fit absolute top-6 right-5 w-[45px] md:w-[50px] bg-cover bg-gradient-to-b from-[#89daf374] to-[#89DAF3] p-1'>
                  <GatsbyImage image={apeImage!} alt='' className='rounded-xl' />
                </div>

                <div className='my-3 grid justify-center'>
                  <div className='text-md px-1'>Majestic APO 294</div>
                  <button onClick={handleOpenModal} className='text-sm px-5 py-3 ring-1 ring-slate-500 rounded-lg m-3'>Stake</button>
                </div>

              </div>

              <div className='border border-inherit rounded-3xl p-3 relative mx-2'>

                <GatsbyImage image={apeImage!} alt='' className='rounded-3xl blur-[2px]' />

                <div className='rounded-xl h-fit absolute top-6 right-5 w-[45px] md:w-[50px] bg-cover bg-gradient-to-b from-[#89daf374] to-[#89DAF3] p-1'>
                  <GatsbyImage image={apeImage!} alt='' className='rounded-xl' />
                </div>

                <div className='my-3 grid justify-center'>
                  <div className='text-md px-1'>Majestic APO 294</div>
                  <button onClick={handleOpenModal} className='text-sm px-5 py-3 ring-1 ring-slate-500 rounded-lg m-3'>Stake</button>
                </div>

              </div>

            </Carousel>

          </div>

        </section>

        <Modal className='text-slate-700 relative' isOpen={isModalOpen} onClose={handleCloseModal}>
          <div className='text-center grid gap-2'>
            <div className='my-5 text-xl'>Stake NFT ID {id}</div>
            <div className='my-2'>
              <div className='grid grid-cols-7 gap-5 my-7 px-2 text-xs md:text-sm'>
                <button className='text-center rounded-2xl ring ring-[#01A4F0] px-2 py-3 md:py-3 md:px-2 whitespace-nowrap'>{'<'}</button>
                <button className='text-center rounded-2xl ring ring-[#EC1F38] px-2 py-3 md:py-3 md:px-2 whitespace-nowrap'>7</button>
                <button className='text-center rounded-2xl ring ring-[#01A4F0] px-2 py-3 md:py-3 md:px-2 whitespace-nowrap'>33</button>
                <button className='text-center rounded-2xl ring ring-[#EC1F38] px-2 py-3 md:py-3 md:px-2 whitespace-nowrap'>12</button>
                <button className='text-center rounded-2xl ring ring-[#01A4F0] px-2 py-3 md:py-3 md:px-2 whitespace-nowrap'>52</button>
                <button className='text-center rounded-2xl ring ring-[#EC1F38] px-2 py-3 md:py-3 md:px-2 whitespace-nowrap'>100</button>
                <button className='text-center rounded-2xl ring ring-[#01A4F0] px-2 py-3 md:py-3 md:px-2 whitespace-nowrap'>{'>'}</button>
              </div>
              {/* <div>
                <input type='text' className='' placeholder=''/>
              </div> */}
              <Button className='!w-full'>Select All</Button>
            </div>

            <div className='grid gap-7 mt-3'>
              <span className='text-left pl-3 text-xs opacity-70'>Annual ROI at current rates: $0.00</span>
              <div className='grid grid-cols-3'>
                <button className='rounded-xl float-left px-2 py-3 text-sm bg-[#EC1F38]' onClick={handleCloseModal}>Cancel</button>
                <div/>
                <button className='rounded-xl float-right px-3 py-2 text-sm bg-[#5ECF0D]'>Confirm</button>
              </div>
            </div>
          </div>
          {/* <FaTimes className='cursor-pointer absolute top-5 right-5' onClick={handleCloseModal} /> */}
        </Modal>

      </Layout>
    </React.Fragment>
  );
};

export default Farm;
