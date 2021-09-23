import React from 'react'
import Image from 'next/image'
import LinearProgress from '@mui/material/LinearProgress';

function CampaignCard() {
    return (
        <div className="w-56 border-2 flex flex-col">
            <div className="relative h-36">
                <Image src="/test1.png" layout="fill" objectFit="cover"/>
            </div>
            <div className="flex flex-col p-4 space-y-3">
                <h3 className="text-sm">Raising Funds for a product design in udemy </h3>
                <div className="flex flex-row justify-between">
                  <span>🇳🇬</span>
                  <p>Course</p>
                </div>
                <div className="flex flex-row justify-between">
                  <span>$200</span>
                  <p>50%</p>
                </div>
               
            </div>
            <LinearProgress variant="determinate" value={50} color="success"  className="justify-end"/>
        </div>
    )
}

export default CampaignCard
