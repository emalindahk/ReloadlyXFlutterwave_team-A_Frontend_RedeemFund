import React from 'react'
import HeaderWithProfile from '../../components/HeaderWithProfile'
import Layout from '../../components/Layout'
import Image from 'next/image'
import { FormContext } from '../../context'
import { useRouter } from 'next/dist/client/router'
import ClipboardCopy from '../../components/ClipboardCopy'

function link() {
    const router = useRouter()
    const { campaignData } = useContext(FormContext)
    const slug = campaignData.slug
    const complete = () => {
        router.push('/')
    }
    return (
        <Layout>
            <HeaderWithProfile />
            <div className="justify-center w-ful">
                <div className="flex flex-col max-w-5xl mx-auto items-center justify-center p-10 space-y-5">
                    
                    <div className="flex flex-col items-center text-sm md:text-base max-w-xl mx-auto space-y-5 text-center text-grey">
                        <h2 className="text-lg md:text-2xl">Share it on other social media platforms</h2>
                        <p className="px-4 font-light md:font-normal">Share your campaign througfh direct messages using the social media applications you use the most, its 
                        important to reach many people to get their support</p>
                    </div>

                    <div className="relative w-[300px] h-[300px] sm:w-[400px] md:w-[500px]">
                        <Image src="/links.png" layout="fill" objectFit="contain" />
                    </div>

                    <ClipboardCopy copyText={`https://redeemfund.vercel.app/campaign/${slug}`}/>

                    <div className="w-full md:w-3/4 md:px-16">
                    <button className="flex flex-row items-center justify-center bg-green-600 text-white rounded-md 
                           p-3 text-sm md:text-lg hover:scale-105 transform transition duration-75 ease-out mt-4 w-full"
                           onClick={complete}>
                           Complete
                        </button>
                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default link
