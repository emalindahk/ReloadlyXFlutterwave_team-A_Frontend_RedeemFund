import React from 'react'

import Image from 'next/image'
import { useRouter } from 'next/dist/client/router'

import LinearProgress from '@mui/material/LinearProgress';


function CampaignCard({title, country, goalAmount, percentage, category, currentAmount}) {
    return (
        <div className="w-60 h-[300px] flex flex-col justify-between border-l-2 border-r-2">
            <div className="flex flex-col">
            <div className="relative h-36">
                <Image src="/test1.png" layout="fill" objectFit="cover"/>
            </div>
            <div className="flex flex-col p-4 space-y-3">
                <h3 className="text-sm">{title} </h3>
                <div className="flex flex-row justify-between">
                  <span>{country}</span>
                  <p>{category}</p>
                </div>
                <div className="flex flex-row justify-between">
                  <span>${goalAmount}</span>
                  <p>{percentage}%</p>
                </div>
               
            </div>
            </div>
            <div >
            <LinearProgress variant="determinate" value={currentAmount} color="success" className="h-2"/>
            </div>
        </div>
    )
}

export default CampaignCard
