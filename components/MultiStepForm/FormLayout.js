import React from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

function FormLayout({ children, currentStep, prevFormStep }) {

    const steps = [
        'General Settings',
        'Select a picture',
        'Write Story',
        'Complete'
    ];

    return (
        <div className="flex flex-col">
            <div className="flex flex-col items-center justify-center w-full p-4 mx-auto">

                <Box sx={{ width: '50%' }}>
                    <Stepper activeStep= {currentStep} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>

                {children}

            </div>

        </div>
    )
}

export default FormLayout
