import React from 'react'
import Modal from '../Modal';
import Image from 'next/image'

function Step3({ updateCampaignData }) {
    const handleChange = (event) => {
        updateCampaignData({ name: event.target.value });
    };
    const handleSurnameChange = (event) => {
        updateCampaignData({ surname: event.target.value });
    };

    return (
        <div className="flex flex-col p-10 justify-center items-center max-w-xl mx-auto">
            {/* <Modal/> */}
            <div className="flex flex-col space-y-4 items-center">
                <h2 className="text-lg font-semibold">Write your story</h2>

                <div className="flex flex-col space-y-4 bg-greyLight p-7 rounded-md border-2 text-xs text-grey">
                    <p className="">A concise and understandable title  is necessary to catch peoples attention
                        and get support. Do you want to improve yours. The tips on this page will help you for sure!</p>
                    <p className="text-right underline cursor-pointer">
                        Tips to write a good story
                    </p>
                </div>

                <div className="w-full space-y-2">
                    <label htmlFor="" className="flex flex-col space-y-2 w-full">
                        <span className="font-semibold">Title</span>
                        <input type="text" className="mt-1 px-4 py-3 block w-full rounded-md border-greyPrim shadow-sm focus:border-lightBlue 
            focus:ring focus:ring-lightBlue focus:ring-opacity-50" placeholder="Subject" />
                    </label>
                    <div className="text-xs text-greySec w-full text-right">4/60</div>
                </div>

                <div className="w-full space-y-2">
                    <label htmlFor="" className="flex flex-col space-y-2 w-full">
                        <span className="font-semibold">Story</span>
                        <div className="flex flex-col w-full  border-2 border-greyPrim space-y-3">
                            <div className="bg-black h-1"> </div>
                            <div className="flex flex-row px-2 space-x-3">
                              <div className="relative h-4 w-4">
                                  <Image src="/text.png" layout="fill" />
                              </div>
                              <div className="relative h-4 w-4">
                                  <Image src="/img.png" layout="fill" />
                              </div>
                            </div>

                        <textarea className="z-50 mt-1 px-4 py-3 block w-full border-t-2 border-greyPrim shadow-sm focus:border-lightBlue 
            focus:ring focus:ring-lightBlue focus:ring-opacity-50" cols="20" rows="8" placeholder="Enter your message"></textarea>
                        </div>
                    </label>
                </div>

                <button className="bg-green-600 p-2 rounded-md text-md hover:scale-105 transform transition duration-75 ease-out
             text-white w-full">
                  Confirm
               </button>

               <div className="text-grey">
                   Back
               </div>
            </div>

        </div>
    )
}

export default Step3
