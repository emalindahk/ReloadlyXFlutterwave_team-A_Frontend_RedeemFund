import React from 'react'
import Image from 'next/image'
import LinearProgress from '@mui/material/LinearProgress';

function Step4() {
    return (
        <div className="p-10 max-w-5xl mx-auto">
         <div className="flex flex-col items-center space-y-28">
          <h1 className="text-2xl font-semibold">Campaign  preview</h1>
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col space-y-5">
              <div className="relative h-[320px] w-[520px]">
                  <Image src="/cover.png" layout="fill"/>
              </div>

              <div className="flex flex-row space-x-8">
                  <div className="relative h-16 w-16">
                      <Image src="/profile.png" layout="fill"/>
                  </div>
                  <div className="flex space-x-3">
                      <span>🇳🇬</span>
                      <p className="text-sm">Olubunmi Amaremo</p>
                  </div>
              </div>

              <div className="flex flex-col space-y-4">
                  <h3 className="font-semibold">With RedeemFund</h3>
                  <p className="text-sm w-1/2">With RedeemFund, we are creating a space where individuals can fund
                       their dreams and champion causes that matter and raise money to make a lasting difference.
                       Through RedeemFund, people have the tools they need to share their cause far and wide and
                        harness the power of generosity.?</p>
              </div>
              </div>
              
              <div className="flex flex-col w-full">
                  <h3 className="text-center font-semibold">Collected Amount</h3>
                  <p className="text-center">$0</p>
                  <LinearProgress variant="determinate" value={0} color="primary" className="h-2"/>
                  <div className="flex flex-row justify-between w-full py-2 text-xs">
                    <p>$0</p>
                    <p>Goal $1000</p>
                  </div>
                  
              </div>
          </div>

          <div className="flex flex-col md:flex-row w-full justify-between space-x-64">
          <button className=" p-2 rounded-md text-md hover:scale-105 transform transition duration-75 ease-out
             text-grey">
                  Back
               </button>
               <button className="bg-green-600 p-2 rounded-md text-md hover:scale-105 transform transition duration-75 ease-out
             text-white w-full">
                  Complete
               </button>

          </div>
            </div>
            
        </div>
    )
}

export default Step4
