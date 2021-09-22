import React from 'react'

function Step1({ updateCampaignData }) {

    const handleCategoryChange = (e) => {
        updateCampaignData ({ category: e.target.value });
      };
      const handleNameChange = (e) => {
        updateCampaignData ({ name: e.target.value });
      };
      const handlePlatformChange = (e) => {
        updateCampaignData ({ platform: e.target.value });
      };

    return (
    <div className="p-10 max-w-2xl mx-auto">
        <div className="flex flex-col items-center space-y-5">
        <h1 className="text-2xl font-semibold">What do you need funding for?</h1>
        <form action="post" className="text-grey py-5 flex flex-col space-y-4">

             <label htmlFor="" className="flex flex-col space-y-2">
             <span className="font-semibold">Category</span>
             <select className="mt-1 px-4 py-3 block w-full border-greyPrim rounded-md shadow-sm focus:border-lightBlue 
                  focus:ring focus:ring-lightBlue focus:ring-opacity-50"
                  onChange={handleCategoryChange}>
                  <option>Course</option>
                  <option>Skill</option>
                  <option>Airtime</option>
                </select>
             </label>

             <label htmlFor="" className="flex flex-col space-y-2">
             <span className="font-semibold">Name</span>
             <input type="email" className="mt-1 px-4 py-3 block w-full border-greyPrim rounded-md shadow-sm focus:border-lightBlue 
            focus:ring focus:ring-lightBlue focus:ring-opacity-50" placeholder="Search for your {name}"
            onChange={handleNameChange}/>
             </label>
             

            <label htmlFor="" className="flex flex-col space-y-2">
             <span className="font-semibold">Platform</span>
             <select className="mt-1 px-4 py-3 block w-full border-greyPrim rounded-md shadow-sm focus:border-lightBlue 
                  focus:ring focus:ring-lightBlue focus:ring-opacity-50"
                  onChange={handlePlatformChange}>
                  <option>Coursera</option>
                  <option>Udacity</option>
                  <option>CC-Hub</option>
                  <option>Udemy</option>
                  <option>Skill Share</option>
                </select>
             </label>
             <div className="flex flex-col py-2 space-y-2">
                 <span className="text-md font-semibold">Funding Plan</span>
                 <label className="flex items-center">
                 <input type="radio" className="form-radio " name="full" value="full" checked/>
                 <span className="ml-2 text-sm"><strong>Full Fund</strong> (you are granted access only when your fund is complete)</span>
                 </label>

                 <label className="flex items-center">
                 <input type="radio" className="form-radio" name="flex" value="flex"/>
                 <span className="ml-2 text-sm"><strong>Flex Fund</strong> (you are granted access once you start receiving funds)</span>
                 </label>
             </div>
            </form>
            <div className="px-12 w-full">
            <button className="bg-green-600 rounded-md p-2 text-lg hover:scale-105 transform transition duration-75 ease-out
             text-white w-full">
                  Next
               </button>
            </div>
            
            <p className="text-xs px-12">By starting a campaign, the user agrees with RedeemFund’s and RedeemFund’s Terms of use
             and <span className="text-green-600"> Privacy Policy</span> </p>

            </div>
    </div>
    )
}

export default Step1
