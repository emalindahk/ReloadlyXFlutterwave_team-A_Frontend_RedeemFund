import React,  {useContext} from 'react'
import HeaderWithProfile from '../../components/HeaderWithProfile'
import Layout from '../../components/Layout'
import Image from 'next/image'
import { FormContext } from '../../context'
import { useRouter } from 'next/dist/client/router'
import { FacebookMessengerShareButton } from 'next-share'

function messenger() {
    const router = useRouter()
    const { campaignData } = useContext(FormContext)
    const slug = campaignData.slug
    const skip = () => {
        router.push('/share/facebook')
    }
    return (
        <Layout title={campaignData.title} previewImage={campaignData.image} description={campaignData.body}>

            <HeaderWithProfile />

            <div className="justify-center w-full bg-messenger">
                <div className="flex flex-col max-w-5xl mx-auto items-center justify-center p-10 space-y-5">
                    <div className="relative w-[300px] h-[300px] sm:w-[400px]  md:w-[500px]">
                        <Image src="/messenger.png" layout="fill" objectFit="contain" />
                    </div>
                    <div className="flex flex-col items-center text-white text-sm md:text-base max-w-xl mx-auto space-y-5 text-center">
                        <h2 className="text-lg md:text-2xl">Lets tell your close friends and family</h2>
                        <p className="px-4 font-light md:font-normal">First, Let's share  about this your campaign to close
                            acquaintances like family and friends through direct message</p>

                        <div className="flex flex-row items-center justify-center bg-white text-messenger rounded-md 
                           py-2 px-3 text-sm md:text-base hover:scale-105 transform transition duration-75 ease-out mt-4 md:w-3/4">
                            <FacebookMessengerShareButton
                                url={`https://redeemfund.vercel.app/campaign/${slug}`}
                                appId={''}
                                style={{display : 'flex', alignItems: 'center'}}>
                                <div className="relative h-10 w-10 mr-5">
                                    <Image src="/messengericon.png" layout="fill" />
                                </div>
                                Share through messenger
                            </FacebookMessengerShareButton>
                        </div>

                        <button onClick={skip}>Skip</button>

                    </div>

                </div>
            </div>

        </Layout>
    )
}

export default messenger
