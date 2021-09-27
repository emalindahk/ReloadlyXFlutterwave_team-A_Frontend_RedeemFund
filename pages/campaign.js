import React, { useState, useEffect } from 'react'

import { useSession, getSession } from "next-auth/client";
import { useUser } from '../lib/hooks';
import { useRouter } from 'next/dist/client/router';
import PersonIcon from '@mui/icons-material/Person';
import Image from 'next/image'

import Header from '../components/Header'
import Layout from '../components/Layout'
import { Step1, Step2, Step3, Step4 } from '../components/MultiStepForm/Steps'
import FormLayout from '../components/MultiStepForm/FormLayout'
import FormCompleted from '../components/MultiStepForm/FormCompleted'

function campaign() {

  const [formStep, setFormStep] = useState(0);
  const [session, loading] = useSession();
  const router = useRouter();
  const { user } = useUser()
  const firstName = user && user.firstName ? user.firstName : '';
  const lastName = user && user.lastName ? user.lastName : '';
  const profPic = user && user.profilePhotoS3 ? user.profilePhotoS3 : '';
  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);
  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

  const profile = () => {
    router.push({
        pathname: '/profile',
    })}

  useEffect(() => {
    if (!loading && !session?.accessToken) {
      router.push('/signin')
    }
  }, [loading, session])

  if (!session) {
    
    return (
        <div className="flex items-center justify-center">You need to be signed in.</div>
    )
  }
  return (
        <Layout title="Start a campaign">
            <Header>
            <div className="relative flex flex-row items-center space-x-4">
          {(profPic)? (
            <div className="relative h-12 w-12">
            <Image src={profPic} layout="fill" className="rounded-full" />
            </div>
          ):(
            <PersonIcon className="w-8 h-8" />
          )}
        
        <p className="cursor-pointer" onClick={profile}>{`${firstName} ${lastName}`}</p>
        </div>
            </Header>
          <FormLayout currentStep={formStep} >
              {formStep === 0 && <Step1 formStep={formStep} nextFormStep={nextFormStep}/>}
              {formStep === 1 && <Step2 formStep={formStep} nextFormStep={nextFormStep} currentStep={formStep} prevFormStep={prevFormStep}/>}
              {formStep === 2 && <Step3 formStep={formStep} nextFormStep={nextFormStep} currentStep={formStep} prevFormStep={prevFormStep}/>}
              {formStep === 3 && <Step4 formStep={formStep} nextFormStep={nextFormStep} currentStep={formStep} prevFormStep={prevFormStep}/>}
              {formStep > 3 && <FormCompleted/>}

          </FormLayout>
        </Layout>
    )
}

export default campaign

export async function getServerSideProps(context) {
  return {
    props: {
      session: await getSession(context)
    },
  }
}
