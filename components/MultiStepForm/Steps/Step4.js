import React, { useContext, useState, useRef, useEffect } from 'react'

import { FormContext } from '../../../context/index';
import { useUser } from '../../../lib/hooks';
import { useSession, getSession } from "next-auth/client";
import Image from 'next/image'

import FormCompleted from '../FormCompleted';

import LinearProgress from '@mui/material/LinearProgress';
import slugify from '../../../lib/util';

function Step4({ formStep,  currentStep, prevFormStep }) {

    const { user } = useUser()
    const [errorMsg, setErrorMsg] = useState('')
    const firstName = user && user.firstName ? user.firstName : '';
    const lastName = user && user.lastName ? user.lastName : '';
    const profPic = user && user.profilePhotoS3 ? user.profilePhotoS3 : '';
    const  session  = useSession();
    const { campaignData, setCampaignData } = useContext(FormContext)

    const [open, setOpen] = useState(false)

    const usePrevious = (value) => {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        });
        return ref.current;
    }

    const prevOpen = usePrevious(open)
    const handleComplete = _ => {
        setOpen(!prevOpen)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = {
            title: campaignData.subject,
            goalAmount: campaignData.amount,
            description: campaignData.body,
            fundType: campaignData.fundType,
            coverPictureS3: campaignData.image,
            platform: campaignData.platform
          };
      
        const res = await fetch(`${process.env.BASE_API_URL}campaigns`, {
            method: "POST",
            headers: { "Content-Type": "application/json",
            "Authorization": `Bearer ${session && session[0].accessToken}` },
            body: JSON.stringify(body),
          });
          if (res.status === 200) {
            setCampaignData({...campaignData, slug: slugify(campaignData.subject)})
            handleComplete()
          } else {
            setErrorMsg(await res.text());
          }
    };



    return (
        <div className={`${formStep === 3 ? " w-full md:px-5 lg:px-40 pt-8" : "hidden"}`}>
            <div className="flex flex-col items-center space-y-10 md:space-y-16">
                <h1 className="text-2xl font-semibold">Campaign preview</h1>
                <FormCompleted openModal={open} setOpen={handleComplete} />
                {errorMsg && <p className="text-red-500 text-center">{errorMsg}</p>}
                <form onSubmit={(e) => handleSubmit(e)} className="w-full flex flex-col">
                    <div className="flex flex-col md:flex-row justify-between w-full space-y-10 space-x-10">
                        <div className="flex flex-col space-y-5">
                            <div className="relative h-[200px] md:h-[320px] md:w-[520px]">
                                <Image src={campaignData.image} layout="fill" objectFit="cover" objectPosition="center" />
                            </div>

                            <div className="flex flex-row space-x-8 pt-4">
                                {(profPic) ? (
                                    <div className="relative h-16 w-16">
                                        <Image src={profPic} layout="fill" className="rounded-full" />
                                    </div>
                                ) : (
                                    <PersonIcon className="w-8 h-8 text-black" />
                                )}
                                <div className="flex space-x-3">
                                    <span>🇳🇬</span>
                                    <p className="text-sm">{`${firstName} ${lastName}`}</p>
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
                            <LinearProgress variant="determinate" value={0} color="primary" className="h-3 rounded" />
                            <div className="flex flex-row justify-between w-full py-2 text-xs">
                                <p>$0</p>
                                <p>Goal ${campaignData.amount}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col pt-10 md:pt-40 md:flex-row w-full justify-between md:space-x-64">

                        {currentStep < 4 && (
                            <>
                                {currentStep > 0 && (
                                    <button className="p-2 rounded-md text-base hover:scale-105 transform transition duration-75 ease-out
                           text-grey order-2"
                                        onClick={prevFormStep}>
                                        Back
                                    </button>
                                )}
                            </>
                        )}
                        <button className="bg-green-600 p-2 rounded-md text-base hover:scale-105 transform transition duration-75 ease-out
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

export async function getServerSideProps(context) {
    return {
      props: {
        session: await getSession(context),
      },
    }
  }
