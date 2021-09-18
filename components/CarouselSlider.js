import React from 'react'
import Image from 'next/image'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const ArrowRight = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    return  (
    <div className="absolute hidden lg:inline-flex rounded-full border-2 border-primary right-2 p-2 lg:mr-20 cursor-pointer">
    <button className="relative w-8 h-8" onClick={() => onClick()} >
    <Image src="/next.png" layout="fill"/>
    </button>
   </div>
    )
  };

  const ArrowLeft = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    return  (
    <div className="absolute hidden lg:inline-flex rounded-full border-2 border-primary left-2 p-2  lg:ml-16 cursor-pointer">
    <button className="relative w-8 h-8" onClick={() => onClick()} >
    <Image src="/prev.png" layout="fill"/>
    </button>
   </div>
    )
  };




function CarouselSlider() {
    return (
        <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass=""
            customLeftArrow={<ArrowLeft/>}
            customRightArrow={<ArrowRight/>}
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
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
            <div className="max-w-7xl mx-auto p-10 md:p-20">
                <div className="grid md:grid-cols-2 px-4 gap-y-10 md:gap-x-40">
                    <div className="flex flex-col order-2 pr-10 lg:px-5 space-y-3 justify-center">
                        <h3 className="text-lg text-primary font-semibold">RedeemFund Success stories</h3>
                        <p className="text-grey text-sm">“After a succesful fundraising campaign
                            I am now a product designer thanks to
                            Udemy & Redeemfunds.”</p>
                        <div className="flex flex-col text-right text-sm">
                            <p className="font-semibold"> -Tamara Kimani,</p>
                            <p> Product Designer</p>
                        </div>
                    </div>
                    <div className="relative h-[350px] w-[350px] md:order-2 mx-5 md:ml-10">
                        <Image src="/test1.png" layout="fill"/>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto p-10 md:p-20">
                <div className="grid md:grid-cols-2 px-4 gap-y-10 md:gap-x-40">
                    <div className="flex flex-col order-2 pr-10 lg:px-5space-y-3 justify-center">
                        <h3 className="text-lg text-primary font-semibold">RedeemFund Success stories</h3>
                        <p className="text-grey text-sm">“After a succesful fundraising campaign
                            I am now a product designer thanks to
                            Udemy & Redeemfunds.”</p>
                        <div className="flex flex-col text-right text-sm">
                            <p className="font-semibold"> -Tamara Kimani,</p>
                            <p> Product Designer</p>
                        </div>
                    </div>
                    <div className="relative h-[350px] w-[350px] md:order-2 mx-5 md:ml-10">
                        <Image src="/test2.png" layout="fill"/>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto p-10 md:p-20">
                <div className="grid md:grid-cols-2 px-4 gap-y-10 md:gap-x-40">
                    <div className="flex flex-col order-2 px-5 space-y-3 justify-center">
                        <h3 className="text-lg text-primary font-semibold">RedeemFund Success stories</h3>
                        <p className="text-grey text-sm">“After a succesful fundraising campaign
                            I am now a product designer thanks to
                            Udemy & Redeemfunds.”</p>
                        <div className="flex flex-col text-right text-sm">
                            <p className="font-semibold"> -Tamara Kimani,</p>
                            <p> Product Designer</p>
                        </div>
                    </div>
                    <div className="relative h-[350px] w-[350px] md:order-2 mx-5 md:ml-10 flex items-center">
                        <Image src="/test3.png" layout="fill"/>
                    </div>
                </div>
            </div>
        </Carousel>
    )
}

export default CarouselSlider
