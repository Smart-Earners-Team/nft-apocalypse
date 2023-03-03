import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { BiCaretDown, BiCaretUp, BiFilter } from 'react-icons/bi';

type FarmProps = {
  id: string;
};

type FileNode = {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData;
  };
};

type QueryResult = {
  file: FileNode;
};

const Farm = ({ id }: FarmProps) => {
  const data = useStaticQuery<QueryResult>(graphql`
    query {
      file(relativePath: { eq: "catlia.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  const [isTruncated, setIsTruncated] = useState(true);

  const handleShowMore = () => {
    setIsTruncated(false);
  };

  const handleShowLess = () => {
    setIsTruncated(true);
  };

  const bgImage = getImage(data.file);

  return (
    <React.Fragment>
      <Helmet>
        <link rel="icon" href="../images/icon.png" />
        <title>{id}</title>
      </Helmet>

      <Layout stakeNavbar>

        <section className='pb-2 z-0'>

          <div className='h-[40vh] md:h-[65vh] w-full justify-items-center overflow-hidden'>
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

        <section className='mt-[70px] md:mt-[120px] px-[12%] py-2 z-0'>

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
              <button className='flex gap-x-5 align-middle' onClick={handleShowMore}>Show more {<BiCaretDown/>}</button>
            ) : (
              <button className='flex gap-x-5 align-middle' onClick={handleShowLess}>Show less {<BiCaretUp/>}</button>
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

        <section className='px-[12%] py-2 grid grid-cols-1 md:grid-cols-3'>

          <div className='flex gap-8 text-xl'>
            <BiFilter size={30}/>
            <span className='text-red-600'>Items</span>
            <span>Activity</span>
          </div>

          <div></div>

          <div></div>

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