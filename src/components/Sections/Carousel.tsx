import * as React from 'react';
import { Address } from './Slides/Address';
import { Tokenomics } from './Slides/Tokenomics';
import { Listing } from './Slides/Listing';
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';

export const CarouselComp: React.FC = () => {
    return (
        <Carousel 
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={false}
            className="mx-auto"
            containerClass=""
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside
            responsive={{
                desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024
                    },
                    items: 3
                },
                mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0
                    },
                    items: 1
                },
                tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464
                    },
                    items: 1
                }
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots
            sliderClass=""
            slidesToSlide={1}
            swipeable>

            <div id='tokenomics' className='w-fit'>
                <Tokenomics/>
            </div>

            <div id='address' className='w-fit'>
                <Address />
            </div>

            <div id='listing' className='w-fit'>
                <Listing />
            </div>

        </Carousel>
    );
};