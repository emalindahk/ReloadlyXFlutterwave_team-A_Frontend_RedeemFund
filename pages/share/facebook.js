import React from 'react'
import HeaderWithProfile from '../../components/HeaderWithProfile'
import Layout from '../../components/Layout'
import Image from 'next/image'
import { FormContext } from '../../context'
import { useRouter } from 'next/dist/client/router'
import FacebookIcon from '@mui/icons-material/Facebook';
import { FacebookShareButton } from 'next-share';


function facebook() {
    const router = useRouter()
    const { campaignData } = useContext(FormContext)
    const slug = campaignData.slug
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
                        <p className="px-4 font-light md:font-normal">We recommend to share your campaign with your friends
                            atleast once a week. incase you urgently need to complete your campaign, share it more frequently</p>
                    </div>

                    <div className="relative w-[300px] h-[300px] sm:w-[400px] md:w-[500px]">
                        <Image src="/facebook-shar.png" layout="fill" objectFit="contain" />
                    </div>

                    <div className="flex flex-row items-center justify-center bg-facebook text-white rounded-md
                           py-1 px-3 text-sm md:text-base hover:scale-105 transform transition duration-75 ease-out mt-4 md:w-1/2">
                        <FacebookShareButton
                            url={`https://redeemfund.vercel.app/campaign/${slug}`}
                            quote={'next-share is a social share buttons for your next React apps.'}
                            hashtag={'#redeemFund'}>
                            <FacebookIcon className="w-10 h-10 mr-2" />
                            Share on facebook
                        </FacebookShareButton>
                    </div>

                    <button className="text-grey" onClick={skip}>Skip</button>

                </div>
            </div>

        </Layout>
    )
}

export default facebook
