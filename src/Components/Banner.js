import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function Banner() {
    return (
        <div className=" relative  " >
            <div className=" absolute w-full h-32 
             bg-gradient-to-t 
              from-gray-100 to-transparent
             bottom-0
             z-20 " />
            <Carousel 
            autoPlay
            infiniteLoop
            showStatus={false}
            showThumbs={false}
            showIndicators={false} 
            interval={5000}>
                <div>
                <img loading="lazy" src="https://links.papareact.com/gi1" alt="" />
            </div>
            <div>
                <img loading="lazy" src="https://links.papareact.com/6ff" alt="" />
            </div>
            <div>
                <img loading="lazy" src="https://links.papareact.com/7ma" alt="" />
            </div>

            </Carousel>
        </div>
    )
}

export default Banner
