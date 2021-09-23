import React, {useState, useContext, useRef, useEffect} from 'react'
import { useFormData, FormContext } from '../../../context/index';

function Step1({ formStep, nextFormStep }) {
  const selectorRef = useRef(null);
  const platformRef = useRef(null);

  const {campaignData, setCampaignData} = useContext(FormContext)
  const { setFormValues } = useFormData();

  useEffect(() => {
    setCampaignData({...campaignData, 
      category: selectorRef.current.value, 
      platform: platformRef.current.value})
  }, [])

  const handleSubmit = (values) => {
    // setFormValues(values);
    nextFormStep();
};

   const setCategory = (e) => {
     setCampaignData({...campaignData, category: e.target.value})
   }
   const setCampaignName = (e) => {
     setCampaignData({...campaignData, campaignName: e.target.value})
   }
   const setPlatform = (e) => {
     setCampaignData({...campaignData, platform: e.target.value})
   }

   console.log(campaignData)

  return (
    <div className={`${formStep === 0 ? 'p-10 max-w-xl mx-auto' : 'hidden'}`}>
        <div className="flex flex-col items-center space-y-5">
        <h1 className="text-2xl font-semibold">What do you need funding for?</h1>
        <form  className="text-grey py-5 flex flex-col space-y-4" onSubmit={handleSubmit}>

             <label htmlFor="category" className="flex flex-col space-y-2">
             <span id="category" className="font-semibold" name="category" >Category</span>
             <select ref={ selectorRef } className="mt-1 px-4 py-3 block w-full border-greyPrim rounded-md shadow-sm focus:border-lightBlue 
                  focus:ring focus:ring-lightBlue focus:ring-opacity-50" required 
                  defaultValue="Course"
                  onChange={setCategory}>
                  <option>Course</option>
                  <option>Skill</option>
                  <option>Airtime</option>
                </select>
             </label>

             <label htmlFor="name" className="flex flex-col space-y-2">
             <span className="font-semibold">Name</span>
             <input id="name" name="name" type="text" className="mt-1 px-4 py-3 block w-full border-greyPrim rounded-md shadow-sm focus:border-lightBlue 
            focus:ring focus:ring-lightBlue focus:ring-opacity-50" placeholder="Search for your {name}" 
            value={campaignData['campaignName']}
            onChange={setCampaignName}
            required/>
             </label>
             

            <label htmlFor="platform" className="flex flex-col space-y-2">
             <span className="font-semibold">Platform</span>
             <select 
                  ref={ platformRef }
                  name="platform" id="platform" 
                  className="mt-1 px-4 py-3 block w-full border-greyPrim rounded-md shadow-sm focus:border-lightBlue 
                  focus:ring focus:ring-lightBlue focus:ring-opacity-50" 
                  defaultValue="Coursera"
                  onChange={setPlatform}
                  required>
                  <option>Coursera</option>
                  <option>Udacity</option>
                  <option>CC-Hub</option>
                  <option>Udemy</option>
                  <option>Skill Share</option>
                </select>
             </label>
             <div className="flex flex-col py-2 space-y-2">
                 <span className="text-md font-semibold">Funding Plan</span>
                 <label htmlFor="full" className="flex items-center">
                 <input type="radio" className="form-radio " id="full" name="full" value="full" required/>
                 <span className="ml-2 text-sm"><strong>Full Fund</strong> (you are granted access only when your fund is complete)</span>
                 </label>

                 <label htmlFor="flex" className="flex items-center">
                 <input type="radio" className="form-radio" name="flex" value="flex" id="flex" required/>
                 <span className="ml-2 text-sm"><strong>Flex Fund</strong> (you are granted access once you start receiving funds)</span>
                 </label>
             </div>
           
            <div className="w-full">
            <button type="submit"
            className="bg-green-600 rounded-md p-2 text-lg hover:scale-105 transform transition duration-75 ease-out
             text-white w-full"
             onSubmit={nextFormStep} 
             >
                  Next
               </button>
            </div>
            
            <p className="text-xs px-12">By starting a campaign, the user agrees with RedeemFund’s and RedeemFund’s Terms of use
             and <span className="text-green-600"> Privacy Policy</span> </p>
             </form>
            </div>
    </div>
    )
}

export default Step1
