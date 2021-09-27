import React from 'react'
import HeaderWithProfile from '../../components/HeaderWithProfile'
import Layout from '../../components/Layout'
import Image from 'next/image'
import { useRouter } from 'next/dist/client/router'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function link() {
    const router = useRouter()
    const skip = () => {
        router.push('/share/link')
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

                    <div className="flex flex-row space-x-5 items-center w-full justify-center px-4">
                        <input type="text" name="link" id="link" 
                        disabled
                        className="mt-1 px-4 py-3 block w-2/4 rounded-md border-gray-400 shadow-sm"/>
                        <button className="flex flex-row text-white bg-greySec rounded-md p-3 text-base"> 
                        <ContentCopyIcon className="h-6 w-6 mr-3" />
                        Copy </button>
                    </div>

                    <div className="w-full md:w-3/4 md:px-16">
                    <button className="flex flex-row items-center justify-center bg-green-600 text-white rounded-md 
                           p-3 text-sm md:text-lg hover:scale-105 transform transition duration-75 ease-out mt-4 w-full" >
                           Complete
                        </button>
                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default link
