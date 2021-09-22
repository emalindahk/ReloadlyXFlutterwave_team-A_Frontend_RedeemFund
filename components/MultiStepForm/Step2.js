import React from 'react'
import Image from 'next/image'

function Step2() {
    return (
        <div className="flex flex-col justify-center items-center space-y-5 p-10 max-w-xl mx-auto">
            <h2 className="text-2xl font-semibold">Select a cover picture</h2>
            <div className="bg-greyLight p-10 rounded-md border-2 text-xs text-grey">
                 <p>You will receive more support if  your cover picture is related with the  content 
                      of your campaign</p>
                     
            </div>
            <div className="flex bg-greyPrim items-center justify-center h-72 w-full">
                  <div className="relative h-[75px] w-[100px]">
                      <Image src="/img.png" layout="fill" />
                  </div>
            </div>

            <div className="w-full ">
            <button className="border-green-600 border-2 rounded-md p-2 text-md hover:scale-105 transform transition duration-75 ease-out
             text-green-600 w-full">
                  Select a picture
               </button>
            </div>

            <div className="w-full flex flex-row justify-between">
            <button className="border-green-600 p-2 text-md hover:scale-105 transform transition duration-75 ease-out
             text-grey">
                  Back
               </button>

               <button className="border-green-600 p-2 text-md hover:scale-105 transform transition duration-75 ease-out
             text-grey">
                  Skip
               </button>
            </div>
            
        </div>
    )
}

export default Step2
