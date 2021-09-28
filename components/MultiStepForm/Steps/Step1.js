import React, {useContext, useRef, useEffect, useState} from 'react'
import { FormContext } from '../../../context/index';

function Step1({ formStep, nextFormStep }) {
  const selectorRef = useRef(null);
  const platformRef = useRef(null);
  const fullFundRef = useRef(null);
  const flexFundRef = useRef(null);
  const [isAirtime, setAirtime ] = useState('');
  const [value , setValue] = useState({
    full: true,
  })
  const {campaignData, setCampaignData} = useContext(FormContext)

  useEffect(() => {
    setCampaignData({...campaignData, 
      category: selectorRef.current.value, 
      platform: platformRef.current.value,
      fundType: fullFundRef.current.value,
      fundType: flexFundRef.current.value})
  }, [])

  const handleSubmit = () => {
    nextFormStep();
};

   const setCategory = (e) => {
     setCampaignData({...campaignData, category: e.target.value})
     setAirtime(e.target.value)
   }
   const setCampaignName = (e) => {
     setCampaignData({...campaignData, campaignName: e.target.value})
   }
   const setPlatform = (e) => {
     setCampaignData({...campaignData, platform: e.target.value})
   }
   const setAmount = (e) => {
    setCampaignData({...campaignData, amount: e.target.value})
  }
  const setFundType = (e) => {

    setCampaignData({...campaignData, fundType: e.target.value})
  }


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

             {(isAirtime === 'Airtime') ? (
            <div>
                 <label htmlFor="platform" className="flex flex-col space-y-2">
             <span className="font-semibold">Platform</span>
             <select 
                  ref={ platformRef }
                  name="platform" id="platform" 
                  className="mt-1 px-4 py-3 block w-full border-greyPrim rounded-md shadow-sm focus:border-lightBlue 
                  focus:ring focus:ring-lightBlue focus:ring-opacity-50" 
                  defaultValue="Safaricom"
                  onChange={setPlatform}
                  required>
                  <option>Safaricom</option>
                  <option>MTN Uganda</option>
                  <option>MTN Ghana</option>
                  <option>Airtel Ke</option>
                  <option>MTN Nigeria</option>
                  <option>Airtel Uganda</option>
                </select>
             </label>
            </div>

             ): (

               <div className="flex flex-col space-y-2">
             <label htmlFor="name" className="flex flex-col space-y-2">
             <span className="font-semibold">Name</span>
             <input id="name" name="name" type="text" className="mt-1 px-4 py-3 block w-full border-greyPrim rounded-md shadow-sm focus:border-lightBlue 
            focus:ring focus:ring-lightBlue focus:ring-opacity-50" placeholder="Enter Course / Skill Name" 
            value={campaignData['campaignName'] || ''}
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
            </div>

             )}

            

             <label htmlFor="amount" className="flex flex-col space-y-2">
             <span className="font-semibold">Goal Amount</span>
             <input id="name" name="name" type="number" className="mt-1 px-4 py-3 block w-full border-greyPrim rounded-md shadow-sm focus:border-lightBlue 
            focus:ring focus:ring-lightBlue focus:ring-opacity-50" placeholder="Enter Amount in US Dollars" 
            value={campaignData['amount'] || ''}
            onChange={setAmount}
            required/>
             </label>

             <div className="flex flex-col py-2 space-y-2">
                 <span className="text-base font-semibold">Funding Plan</span>
                 <label htmlFor="full" className="flex items-center">
                 <input type="radio" 
                 ref={ fullFundRef }
                 className="form-radio" 
                 id="full" 
                 name="full" 
                 value="full"
                 checked={true === value.full}
                 onChange={() => setValue({full : true})}/>
                 <span className="ml-2 text-sm"><strong>Full Fund</strong> (you are granted access only when your fund is complete)</span>
                 </label>

                 <label htmlFor="flex" className="flex items-center">
                 <input type="radio" 
                 ref={ flexFundRef }
                 className="form-radio" 
                 name="flex" 
                 value="flex" 
                 id="flex" 
                 checked={false === value.full}
                 onChange={() => setValue({full : false})}/>
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
