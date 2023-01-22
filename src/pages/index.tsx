import * as React from 'react'
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import { Intro } from '../components/Sections/Intro';
import Header from '../components/Sections/Header';
import { Utility } from '../components/Sections/Utility';
import { CarouselComp } from '../components/Sections/Carousel';
import { Airdrops } from '../components/Sections/Airdrops';
import { ComingSoon } from '../components/Sections/Coming';

export default function IndexPage() {
  return (
    <React.Fragment>

      <Helmet>
        <link rel="icon" href="../images/icon.png" />
        <title>NFTX</title>
      </Helmet>

      <Layout navbar footer>
        <Header/>
        <Intro/>
        <Utility/>
        <CarouselComp/>
        <Airdrops/>
        <ComingSoon/>
      </Layout>

    </React.Fragment>
  )
}
