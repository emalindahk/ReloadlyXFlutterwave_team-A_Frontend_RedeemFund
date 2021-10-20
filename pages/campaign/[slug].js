import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

import LinearProgress from '@mui/material/LinearProgress';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

import { WhatsappShareButton, FacebookShareButton, TwitterShareButton } from 'next-share'

import Layout from '../../components/Layout';
import DonateModal from '../../components/DonateModal';
import NavBar from '../../components/NavBar';
import ClipboardCopy from '../../components/ClipboardCopy';


function Campaign({ post }) {

    const [open, setOpen] = useState(false)
    const slug = post.slug
    const coverPic = post.coverPictureS3
    const defaultPic = '/defaultPic.png'

    const usePrevious = (value) => {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        });
        return ref.current;
    }

    const prevOpen = usePrevious(open)
    const handleSupport = _ => {
        setOpen(!prevOpen)
    }


    return (
        <Layout previewImage={post.image}
            title={post.title}
            description={post.description}>
            <NavBar />
            <DonateModal openModal={open} setOpen={handleSupport} slug={slug} />

            <div className="max-w-6xl mx-auto p-6">
                <section className="flex flex-col md:flex-row w-full space-y-4 md:space-x-4 pt-10 justify-between ">

                    <div className="flex flex-col items-center ">
                        <div className="relative h-[200px] md:h-[320px] md:w-[520px]">
                            <Image src={coverPic || defaultPic} layout="fill" />
                        </div>
                    </div>

                    <div className="flex flex-col items-center w-full md:w-1/3 justify-between space-y-5">
                        <div className="flex flex-col w-full items-center">
                            <h3 className="text-lg">Collected Amount</h3>
                            <p>$0</p>
                            <LinearProgress variant="determinate" value={0} color="primary" className="h-3 rounded w-full" />
                            <div className="flex flex-row justify-between w-full py-2 text-xs">
                                <p>{post.currentAmount}</p>
                                <p>Goal $ {post.goalAmount}</p>
                            </div>
                        </div>

                        <div className="flex flex-col w-full mt-10 space-y-5">
                            <button className="bg-green-600 p-2 rounded-md text-base hover:scale-105 transform transition duration-75 ease-out
                 text-white w-full"
                                onClick={handleSupport}>
                                Support now
                            </button>
                            <button className="bg-white p-2 rounded-md text-base hover:scale-105 transform transition duration-75 ease-out
                 text-green-600 w-full border-2 border-green-600">
                                Help by sharing
                            </button>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col md:flex-row w-full space-y-4 md:space-x-4 pt-10 justify-between">
                    <div className="flex flex-col items-start space-y-4 w-full">
                        <h3 className="text-lg font-semibold text-left">People who shared 0</h3>
                        <div className="flex flex-col text-sm items-center space-y-3">
                            <h4 className="text-sm" >Lets be the first one to help!</h4>
                            <p className="text-xs w-2/3">By sharing more people will know about the project, and it will be morelikely to be supported.</p>
                            <button className="underline text-green-600 text-xs">Help by sharing</button>
                        </div>
                    </div>

                    <div className="flex flex-col w-full items-end space-y-3">
                        <div className="flex flex-col bg-greyLight text-grey p-4 text-xs w-2/3">
                            <h2>What is Redeemfund?</h2>
                            <p>RedeemFunds, people have the tools they need to share their cause far and wide and harness
                                the power of generosity</p>
                        </div>

                        <div className="relative w-full items-center pt-4">
                            <h2 className="text-lg font-semibold text-center">Times supported  0</h2>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col md:flex-row pt-5 w-full justify-between space-y-7 text-grey">

                    <div className="w-full flex flex-col space-y-3">
                        <h2 className="text-xl font-semibold mb-2">Story</h2>
                        <hr />
                        <div className="flex flex-col space-y-4">

                            <div className="flex flex-row mt-4 space-x-4">
                                <div className="relative h-24 w-24">
                                    <Image src={post.beneficiary.profilePhotoS3} layout="fill" className="rounded-full" objectFit="cover" />
                                </div>
                                <div className="flex flex-col justify-between p-4">
                                    <h3 className="text-lg font-semibold">{post.beneficiary.firstName} {post.beneficiary.lastName}</h3>
                                    <p>
                                        <VerifiedUserIcon className="text-lg text-green-600 mr-4" />
                                        Identity verified</p>
                                </div>
                            </div>

                            <div className="w-full items-center mt-4">
                                <h3 className="text-lg font-semibold">{post.title}</h3>
                                <p className="text-sm md:text-base ">
                                    {post.description}
                                </p>

                            </div>

                            <div className="flex flex-col items-center w-full space-y-3">
                                <h2 className="text-lg font-semibold md:mt-12">Help by sharing</h2>
                                <div className="grid grid-cols-3 w-1/2">

                                    <WhatsappShareButton
                                        url={`https://redeemfund.vercel.app/campaign/${slug}`}
                                        title={`Support ${post.beneficiary.firstName} ${post.beneficiary.lastName} with a ${post.title}`}
                                        separator=" :: ">
                                        <WhatsAppIcon className="text-whatsapp h-10 w-10" />
                                    </WhatsappShareButton>

                                    <TwitterShareButton
                                        url={`https://redeemfund.vercel.app/campaign/${slug}`}
                                        title={`Support ${post.beneficiary.firstName} ${post.beneficiary.lastName} with a ${post.title} #redeemFund`}>
                                        <TwitterIcon className=" text-twitter h-10 w-10" />
                                    </TwitterShareButton>

                                    <FacebookShareButton
                                        url={`https://redeemfund.vercel.app/campaign/${slug}`}
                                        quote={`Support ${post.beneficiary.firstName} ${post.beneficiary.lastName} with a ${post.title}`}
                                        hashtag={'#redeemFund'}>
                                        <FacebookIcon className="text-facebook h-10 w-10" />
                                    </FacebookShareButton>
                                </div>
                            </div>

                            <ClipboardCopy copyText={`https://redeemfund.vercel.app/campaign/${slug}`} />
                        </div>
                    </div>

                    <div className="w-full"></div>
                </section>
            </div>
        </Layout>
    )
}

export default Campaign

export async function getStaticPaths() {
    const res = await fetch(`${process.env.BASE_API_URL}campaigns`);
    const campaign = await res.json();
    const paths = campaign.map((item) => ({
        params: { slug: item.slug },
    }));

    return {
        paths,
        fallback: true,
    };
}

export async function getStaticProps({ params }) {
    const { slug } = params;

    const res = await fetch(`${process.env.BASE_API_URL}campaign/${slug}`);
    const data = await res.json();
    const post = data[0]

    return {
        props: { post },
        revalidate: 60 * 60,
    };
}