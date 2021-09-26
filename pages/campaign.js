import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Layout from '../components/Layout'
import { Step1, Step2, Step3, Step4 } from '../components/MultiStepForm/Steps'
import FormLayout from '../components/MultiStepForm/FormLayout'
import FormCompleted from '../components/MultiStepForm/FormCompleted'
import { useSession, getSession } from "next-auth/client";
import { useUser } from '../lib/hooks';
import { useRouter } from 'next/dist/client/router';

function campaign() {

  const [formStep, setFormStep] = useState(0);
  const [session, loading] = useSession();
  const router = useRouter();
  const { user } = useUser()
  const firstName = user && user.firstName ? user.firstName : '';
  const lastName = user && user.lastName ? user.lastName : '';
  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);
  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

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
            <Header content={`${firstName} ${lastName}`}/>
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
