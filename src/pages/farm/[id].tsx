import React from 'react';
import Layout from '../../components/Layout';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';

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

  const bgImage = getImage(data.file);

  return (
    <React.Fragment>
      <Helmet>
        <link rel="icon" href="../images/icon.png" />
        <title>{id}</title>
      </Helmet>

      <Layout stakeNavbar>

        <section className='relative py-2'>

          <div className='h-[40vh] md:h-[60vh] w-full justify-items-center overflow-clip'>

            <GatsbyImage image={bgImage!} alt='' className='w-full opacity-70 rounded-lg -top-[30%] md:-top-[65%] z-0' />
          </div>

          <GatsbyImage image={bgImage!} alt='' className='absolute z-0 top-[70%] md:top-[60%] left-[10%] w-[30%] md:w-[20%] rounded-lg bg-cover' />

          <div className='absolute top-[15%] right-[15%] py-8 md:py-16 z-0'>

            <span className='uppercase block text-2xl md:text-5xl py-1'>
              NFT&nbsp;<span className='text-[red]'>Apocalypse</span>
            </span>

            <span className='float-right -mr-[10%] py-1 text-sm md:text-xl'>
              By Isaac John
            </span>

          </div>

        </section>

        <section className='mt-[20%] md:mt-[10%] px-[10%]'>

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
      </Layout>
    </React.Fragment>
  );
};

export default Farm;
