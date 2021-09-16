import React from 'react'
import Image from 'next/image'

function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] font-poppins">
           <Image src="/banner.png"
           layout="fill"
           objectFit="cover"
           />

           <div className="absolute h-full w-full bg-black bg-opacity-40"></div>

           <div className="absolute top-1/4 text-left text-white left-20 space-y-5">
               <h1 className="text-2xl sm:text-6xl font-bold">Hakuna Matata</h1>
               <p className="text-sm sm:text-xl font-extralight">The future belongs to those who believe <br/> in the beauty of their dreams</p>
               <button className="bg-green-600 rounded-md p-3 text-md hover:scale-105 transform transition duration-75 ease-out">Start a campaign</button>
           </div>
          
        </div>
    )
}

export default Banner
