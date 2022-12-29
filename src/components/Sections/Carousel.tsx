import * as React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Address } from './Slides/Address';
import { Tokenomics } from './Slides/Tokenomics';
import { Listing } from './Slides/Listing';

export const CarouselComp: React.FC = () => {
    return (
        <div className='bg-[]'>
            <Carousel autoPlay interval={3000} infiniteLoop showThumbs={false}>

                <div>
                    <Tokenomics />
                </div>

                <div className='active'>
                    <Address />
                </div>

                <div>
                    <Listing />
                </div>

            </Carousel>
        </div>
    );
};