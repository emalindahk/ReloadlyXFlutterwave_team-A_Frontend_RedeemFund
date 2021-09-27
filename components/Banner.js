import React from 'react'
import Image from 'next/image'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useRouter } from 'next/dist/client/router';

function Banner() {
    const router = useRouter();

    const campaign = () =>{
        router.push('/campaign');
    }

    return (
        <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass=""
        dotListClass=""
        draggable
        focusOnSelect={false}
        autoPlay
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
            desktop: {
                breakpoint: {
                    max: 3000,
                    min: 1024
                },
                items: 1
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
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
    >
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] font-poppins">
           <Image src="/banner.png"
           layout="fill"
           objectFit="cover"
           />

           <div className="absolute h-full w-full bg-black bg-opacity-40"></div>

           <div className="absolute top-1/4 text-left text-white left-12 space-y-5">
               <h1 className="text-2xl sm:text-6xl font-bold">Hakuna Matata</h1>
               <p className="text-sm sm:text-xl font-extralight">The future belongs to those who believe <br/> in the beauty of their dreams</p>
               <button onClick={campaign}
               className="bg-green-600 rounded-md p-3 text-base hover:scale-105 transform transition duration-75 ease-out">Start a campaign</button>
           </div>
          
        </div>
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] font-poppins">
           <Image src="/banner2.png"
           layout="fill"
           objectFit="cover"
           />

           <div className="absolute h-full w-full bg-black bg-opacity-40"></div>

           <div className="absolute top-1/4 text-left text-white left-12 space-y-5">
               <h1 className="text-2xl sm:text-6xl font-bold">Hakuna Matata</h1>
               <p className="text-sm sm:text-xl font-extralight">The future belongs to those who believe <br/> in the beauty of their dreams</p>
               <button onClick={campaign}
               className="bg-green-600 rounded-md p-3 text-base hover:scale-105 transform transition duration-75 ease-out">Start a campaign</button>
           </div>
          
        </div>
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] w-full font-poppins">
           <Image src="/banner3.png"
           layout="fill"
           objectFit="cover"
           />

           <div className="absolute h-full w-full bg-black bg-opacity-40"></div>

           <div className="absolute top-1/4 text-left text-white left-12 space-y-5">
               <h1 className="text-2xl sm:text-6xl font-bold">Hakuna Matata</h1>
               <p className="text-sm sm:text-xl font-extralight">The future belongs to those who believe <br/> in the beauty of their dreams</p>
               <button onClick={campaign}
               className="bg-green-600 rounded-md p-3 text-base hover:scale-105 transform transition duration-75 ease-out">Start a campaign</button>
           </div>
          
        </div>
        </Carousel>
    )
}

export default Banner
