import React, {useContext} from 'react'
import Image from 'next/image'
import LinearProgress from '@mui/material/LinearProgress';
import { FormContext, useFormData } from '../../../context/index';

function Step4({ formStep, nextFormStep, currentStep, prevFormStep}) {

    const { setFormValues} = useFormData();
    const context = useContext(FormContext);
    const campaign = context.category
    console.log(campaign)


    const handleSubmit = (values) => {
        setFormValues(values);
        nextFormStep();
    };

    const {campaignData, setCampaignData} = useContext(FormContext)
    console.log(campaignData)

    return (
        <div className={`${formStep === 3 ? " w-full md:px-5 lg:px-40 pt-8" : "hidden"}`}>
            <div className="flex flex-col items-center space-y-10 md:space-y-16">
                <h1 className="text-2xl font-semibold">Campaign preview</h1>
                <form action="post" onSubmit={handleSubmit} className="w-full flex flex-col">
                    <div className="flex flex-col md:flex-row justify-between w-full space-y-10 space-x-10">
                        <div className="flex flex-col space-y-5">
                            <div className="relative h-[200px] md:h-[320px] md:w-[520px]">
                                <Image src={campaignData.image ||"/cover.png"} layout="fill" objectFit="cover" objectPosition="center"/>
                            </div>

                            <div className="flex flex-row space-x-8 pt-4">
                                <div className="relative h-16 w-16">
                                    <Image src="/profile.png" layout="fill" />
                                </div>
                                <div className="flex space-x-3">
                                    <span>🇳🇬</span>
                                    <p className="text-sm">Olubunmi Amaremo</p>
                                </div>
                            </div>

                            <div className="flex flex-col space-y-1">
                                <h3 className="font-semibold">{campaignData.subject}</h3>
                                <p className="text-sm w-1/2">{campaignData.body}</p>
                            </div>
                        </div>

                        <div className="flex flex-col md:w-1/3">
                            <h3 className="text-left md:text-center font-semibold">Collected Amount</h3>
                            <p className="text-center">$0</p>
                            <LinearProgress variant="determinate" value={0} color="primary" className="h-3" />
                            <div className="flex flex-row justify-between w-full py-2 text-xs">
                                <p>$0</p>
                                <p>Goal $1000</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col pt-10 md:pt-40 md:flex-row w-full justify-between md:space-x-64">

                        {currentStep < 4 && (
                            <>
                                {currentStep > 0 && (
                                    <button className="p-2 rounded-md text-md hover:scale-105 transform transition duration-75 ease-out
                           text-grey order-2"
                                        onClick={prevFormStep}>
                                        Back
                                    </button>
                                )}
                            </>
                        )}
                        <button className="bg-green-600 p-2 rounded-md text-md hover:scale-105 transform transition duration-75 ease-out
             text-white w-full md:order-2">
                            Complete
                        </button>

                    </div>
                </form>
            </div>

        </div>
    )
}

export default Step4
