import React from 'react'
import Image from 'next/image'

function ProcessContainer( {src, title, content}) {
    return (
        <div className="flex flex-col items-center space-y-4">
                  <div className="relative flex items-center justify-center h-28 w-28 border-4 border-white rounded-full ">
                  <Image src={src} width="60" height="60" objectPosition="center" objectFit="contain"/></div>
                  <h3 className="text-2xl ">{title}</h3>
                  <p className="w-60 text-center text-lg font-extralight">{content}</p>
        </div>
    )
}

export default ProcessContainer
