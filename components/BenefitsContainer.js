import React from 'react'
import Image from 'next/image'

function BenefitsContainer({src, title, content}) {
    return (
        <div className="flex text-grey ">
            <div className="relative ">
              <Image src={src}  width="100" height="100" objectPosition="center" objectFit="contain"/>
            </div>

            <div className="flex flex-col px-4 space-y-3">
                 <h3 className="text-lg font-semibold">{title}</h3>
                 <p className="text-md ">{content}</p>
            </div>
            
        </div>
    )
}

export default BenefitsContainer
