import React from 'react'
import HeaderWithProfile from '../../components/HeaderWithProfile'
import Layout from '../../components/Layout'
import Image from 'next/image'
import { useRouter } from 'next/dist/client/router'
import FacebookIcon from '@mui/icons-material/Facebook';


function facebook() {
    const router = useRouter()
    const skip = () => {
        router.push('/share/twitter')
    }
    return (
        <Layout>
            <HeaderWithProfile />
            <div className="justify-center w-ful">
                <div className="flex flex-col max-w-5xl mx-auto items-center justify-center p-10 space-y-5">
                    
                    <div className="flex flex-col items-center text-sm md:text-base max-w-xl mx-auto space-y-5 text-center text-grey">
                        <h2 className="text-lg md:text-2xl">Let’s share in a lot of different platforms</h2>
                        <p className="px-4 font-light md:font-normal">We recommend to sharre your campaign with your friends 
                        atleast once a week. incase you urgently need to complete your campaign, share it more frequently</p>
                    </div>

                    <div className="relative w-[300px] h-[300px] sm:w-[400px] md:w-[500px]">
                        <Image src="/facebook-shar.png" layout="fill" objectFit="contain" />
                    </div>

                    <div className="w-full md:w-3/4 md:px-20">
                    <button className="flex flex-row items-center justify-center bg-facebook text-white rounded-md 
                           py-1 px-3 text-sm md:text-base hover:scale-105 transform transition duration-75 ease-out mt-4 w-full" >
                           <FacebookIcon className="w-10 h-10 mr-2" />
                           Share on facebook
                        </button>
                    </div>

                    <button className="text-grey" onClick={skip}>Skip</button>
                </div>
            </div>

        </Layout>
    )
}

export default facebook
