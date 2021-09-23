import React, { useState } from 'react'
import Header from '../components/Header'
import Layout from '../components/Layout'
import { Step1, Step2, Step3, Step4 } from '../components/MultiStepForm/Steps'
import FormLayout from '../components/MultiStepForm/FormLayout'
import FormCompleted from '../components/MultiStepForm/FormCompleted'

function campaign() {

    const [formStep, setFormStep] = useState(0);

  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);

  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);


    return (
        <Layout title="Start a campaign">
            <Header content="Olubunmi Amaremo"/>
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
