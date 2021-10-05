import React from 'react'

import Image from 'next/image'

function GiftCard({img}) {
    const defaultImg = '/defaultPic.png'
    return (
        <div className="flex items-center mt-5 rounded-xl cursor-pointer">
            <div className="relative h-40 w-52">
                <Image src={ img || defaultImg}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"/>
            </div>
        </div>
    )
}

export default GiftCard
