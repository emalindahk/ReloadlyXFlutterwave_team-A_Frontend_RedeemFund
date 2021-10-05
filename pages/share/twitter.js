import React, {useContext} from 'react'
import HeaderWithProfile from '../../components/HeaderWithProfile'
import Layout from '../../components/Layout'
import Image from 'next/image'
import { useRouter } from 'next/dist/client/router'
import { useUser } from "../../lib/hooks";
import { FormContext } from '../../context'
import TwitterIcon from '@mui/icons-material/Twitter';
import { TwitterShareButton } from 'next-share'

function twitter() {
    const router = useRouter()
    const { campaignData } = useContext(FormContext)
    const { user} = useUser()
    const slug = campaignData.slug
    const skip = () => {
        router.push('/share/link')
    }
    return (
        <Layout title={campaignData.title} previewImage={campaignData.image} description={campaignData.body}>

            <HeaderWithProfile/>

            <div className="justify-center w-full">
                <div className="flex flex-col max-w-5xl mx-auto items-center justify-center p-10 space-y-5">

                    <div className="flex flex-col items-center text-grey text-sm md:text-base max-w-xl mx-auto space-y-5 text-center">
                        <h2 className="text-lg md:text-2xl">Let’s share in a lot of different platforms</h2>
                        <p className="px-4 font-light md:font-normal">If possible, try to spread your campaign through many channels as much as you can Your friends could share
                            it too and you could receive more support.</p>
                    </div>

                    <div className="relative w-[300px] h-[300px] sm:w-[400px] md:w-[500px]">
                        <Image src="/twitter-share.png" layout="fill" objectFit="contain" />
                    </div>

                    <div className="flex flex-row items-center justify-center bg-twitter text-white rounded-md 
                           py-1 px-3 text-sm md:text-base hover:scale-105 transform transition duration-75 ease-out mt-4 md:w-1/2">
                        <TwitterShareButton
                            url={`https://redeemfund.vercel.app/campaign/${slug}`}
                            title={`Support ${user && user.firstName ? user.firstName : 'me'} ${user && user.lastName ? user.lastName : ''} with 
                            a ${campaignData && campaignData.subject ? campaignData.subject : 'campaign'}`}>
                            <TwitterIcon className="w-10 h-10 mr-2" />
                            Share on twitter
                        </TwitterShareButton>
                    </div>

                    <button className="text-grey" onClick={skip}>Skip</button>

                </div>
            </div>

        </Layout>
    )
}

export default twitter

