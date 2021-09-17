import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
    return (
        <div className="flex flex-col bg-primary max-w-7xl mx-auto pt-16 pb-8 px-8">
           <div className="flex flex-col md:flex-row justify-between space-y-4">
              <div className="flex flex-col space-y-5">

                  <div className="relative w-48 h-6">
                      <Image src="/logo.png" layout="fill"/>
                  </div>

                  <select className="block mt-1 w-72">
                  <option>English (United Kingdom)</option>
                  <option>English (U.S.A)</option>
                  <option>French</option>
                </select>

              </div>
              <div className="flex flex-col md:px-8 text-left text-md space-y-2 font-light text-white">
                  <h1 className="text-green-600 font-normal text-lg mb-2">Learn More</h1>
                  <Link href="/">How RedeemFunds work</Link>
                  <Link href="/">Success Stories</Link>
                  <Link href="/">FAQs</Link>
                  <Link href="/">Supported countries</Link>
              </div>
           </div>

           <div className="grid md:grid-cols-3 text-white mt-24 gap-8 md:gap-20">
               <div className="order-2 md:order-1">2021 RedeemFunds</div>

               <div className="order-3 grid md:grid-cols-3">
               <Link href="/">Terms</Link>
               <Link href="/">Privacy</Link>
               <Link href="/">Legal</Link>
               </div>

               <div className="order-1 md:order-10 grid grid-cols-4 md:gap-x-14 justify-items-start w-48 md:w-full">
                 <Link href="/" className="relative">
                     <Image src="/twitter.png" width="30" height="30" className="cursor-pointer"/>
                 </Link>
                 <Link href="/" className="relative ">
                     <Image src="/linkedin.png" width="30" height="30" className="cursor-pointer"/>
                 </Link>
                 <Link href="/" className="relative">
                     <Image src="/facebook.png" width="30" height="30" className="cursor-pointer"/>
                 </Link>
                 <Link href="/" className="relative">
                     <Image src="/instagram.png" width="30" height="30" className="cursor-pointer"/>
                 </Link>
               </div>

           </div>
        </div>
    )
}

export default Footer
