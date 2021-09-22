import React, { useState } from 'react'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Step1 from '../components/MultiStepForm/Step1'
import Step2 from '../components/MultiStepForm/Step2'
import Step3 from '../components/MultiStepForm/Step3'
import Step4 from '../components/MultiStepForm/Step4'

function campaign() {


    return (
        <Layout >
            <Header content="Olubunmi Amaremo"/>
          <Step4/>
        </Layout>
    )
}

export default campaign
