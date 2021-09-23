import React from 'react'

function FormLayout({ children, currentStep, prevFormStep }) {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col items-center justify-center w-full p-4 mx-auto">

                <span className="text-center w-full">Step {currentStep + 1} of 3</span>
                {children}

            </div>

        </div>
    )
}

export default FormLayout
