import * as React from 'react';
import { Address } from './Slides/Address';
import { Tokenomics } from './Slides/Tokenomics';
import { Listing } from './Slides/Listing';

export const CarouselComp: React.FC = () => {
    return (
        <div>

            <div className="carousel carousel-center slide w-full p-4 space-x-4">

                <div id='item1' className="carousel-item">
                    <Address/>
                </div>

                <div id='item2' className="carousel-item">
                    <Tokenomics/>
                </div>

                <div id='item3' className="carousel-item">
                    <Listing/>
                </div>

            </div>
            
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>

        </div>
    );
};