import React, {useContext} from 'react'
import HeaderWithProfile from '../../components/HeaderWithProfile'
import Layout from '../../components/Layout'
import { useRouter } from 'next/dist/client/router'

function tips() {

    const router = useRouter();
    const whatsapp = () => {
        router.push ('/share/whatsapp')
    }
    const { campaignData } = useContext(FormContext)

    return (
        <Layout title="Sharing Tips">
            <HeaderWithProfile />
            <div className="justify-center max-w-5xl mx-auto">
                <div className="flex flex-col items-center justify-center p-8 space-y-5">
                    <h2 className="text-2xl font-semibold">Important tips when you share</h2>

                    <div className="flex flex-col space-y-5">
                        <h3 className="text-lg pt-3 text-left">You should at least try to convey these 3 important points!</h3>

                        <ul className="max-w-xl space-y-3 font-semibold">
                            <li>
                                <h4 className="font-semibold">1. What are you raising the funds for?</h4>
                                <p className="font-normal">Let’s try to explain as detailed as possible on how the fund will
                                    support your dreams</p> </li>
                            <li>
                                <h4 className="font-semibold">2. Why do you need this fund?</h4>
                                <p className="font-normal">Let’s try to explain as detailed as possible on how the fund will
                                    support your dreams</p> </li>
                            <li>
                                <h4 className="font-semibold">3. Lets try to put an effort on asking for help</h4>
                                <p className="font-normal">People do not know your situation or dreams unless you share with them or ask
                                    for help. As long as you are sincere in asking for help, people close like friends
                                    and families might be moree willing to help and fund your dreams.
                                    Plus it is also more effective if those friends and families share to
                                    their close ones too.</p> </li>
                        </ul>

                        <button className="bg-green-600 rounded-md p-3 text-base hover:scale-105 transform transition 
                    duration-75 ease-out mt-4 text-white" onClick={whatsapp}>Share it with friends</button>
                    </div>
                </div>


            </div>
        </Layout>
    )
}

export default tips
