import * as React from 'react';
import { Address } from './Slides/Address';
import { Tokenomics } from './Slides/Tokenomics';
import { Listing } from './Slides/Listing';

export const CarouselComp: React.FC = () => {
    return (
        <div>

            <div className="carousel carousel-center w-full p-4 space-x-4">

                <div className="carousel-item">
                    <Address/>
                </div>

                <div className="carousel-item">
                    <Tokenomics/>
                </div>

                <div className="carousel-item">
                    <Listing/>
                </div>

            </div>

        </div>
    );
};