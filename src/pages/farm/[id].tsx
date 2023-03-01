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
        <section className='relative'>
          <div className='h-[50vh] w-full justify-items-center overflow-clip'>
            <GatsbyImage image={bgImage!} alt='' className='w-full opacity-70 rounded-lg bg-cover' />
          </div>
          <GatsbyImage image={bgImage!} alt='' className='absolute top-[40vh] left-32 w-40 rounded-lg bg-cover' />
        </section>
      </Layout>
    </React.Fragment>
  );
};

export default Farm;
