import React from 'react'
import Slider from "react-slick";
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="max-w-7xl mx-auto px-8 md:p-16">
            <Slider {...settings}>

                <div>
                    <div className="grid grid-cols-2 md:px-4 gap-14">
                        <div className="relative w-[300px] h-[350px] md:w-[500px] order-2">
                            <Image src="/test1.png" layout="fill" objectFit="contain" />
                        </div>
                        <div className="hidden md:flex flex-col justify-center items-end space-y-6 ml-14 px-12">
                            <h3 className="text-lg font-semibold text-primary">RedeemFunds Success stories</h3>
                            <p className="text-sm">"After a succesful fundraising campaign<br /> am now a product designer thanks to <br /> Udemy & Redeemfund.” </p>
                            <div className="text-right text-sm">
                                <p className="font-semibold">-Tamara Kimani,</p>
                                <p>Product Designer</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="grid grid-cols-2 md:px-4 gap-14">
                        <div className="relative w-[300px] h-[350px] md:w-[500px] order-2">
                            <Image src="/test2.png" layout="fill" objectFit="contain" />
                        </div>
                        <div className="hidden md:flex flex-col justify-center items-end space-y-6 ml-14 px-12">
                            <h3 className="text-lg font-semibold text-primary">RedeemFunds Success stories</h3>
                            <p className="text-sm">"After a succesful fundraising campaign<br /> am now a product designer thanks to <br /> Udemy & Redeemfund.” </p>
                            <div className="text-right text-sm">
                                <p className="font-semibold">-Olubunmi Grace,</p>
                                <p>Data scientist</p>
                            </div>
                        </div>
                    </div>
                </div>

            </Slider>
        </div>
    )
}

export default Testimonials
