import React, { useContext, useState, useEffect } from 'react'
import Image from 'next/image'
import { useS3Upload } from 'next-s3-upload';
import { FormContext } from '../../../context/index';

function Step2({ formStep, nextFormStep, prevFormStep, currentStep }) {

    const { submitData, campaignData, setCampaignData } = useContext(FormContext);
    let [imageUrl, setImageUrl] = useState();
    let [isUploaded, setImageUploaded] = useState(false)
    let { FileInput, openFileDialog, uploadToS3 } = useS3Upload();

    useEffect(() => {
        if (imageUrl || campaignData.image) {
            setCampaignData({ ...campaignData, image: imageUrl ? imageUrl : campaignData.image });
        }
    }, [imageUrl])

    let handleFileChange = async file => {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function (e) {
            setImageUrl(reader.result)

        }
        let { url } = await uploadToS3(file);
        setImageUrl(url);
        setImageUploaded(true);
    };

    const setImgUrl = (e) => {
        setCampaignData({ ...campaignData, image: e.target.value });
    }

    const handleSubmit = () => {
        isUploaded && (setImgUrl, nextFormStep())
    };

    console.log(campaignData)

    return (
        <div className={`${formStep === 1 ? "flex flex-col justify-center items-center space-y-5 md:p-10 md:max-w-xl mx-auto" : "hidden"}`}>
            <h2 className="text-2xl font-semibold">Select a cover picture</h2>
            <div className="bg-greyLight p-4 md:p-10 rounded-md border-2 text-xs text-grey">
                <p>You will receive more support if  your cover picture is related with the  content
                    of your campaign</p>

            </div>
            <div className="flex  flex-col w-full space-y-4">
                <FileInput onChange={handleFileChange} />
                {(imageUrl || campaignData.image) ? (
                    <div className="relative h-72">
                        <Image src={imageUrl || campaignData.image} layout="fill" objectFit="cover" />
                        <input type="hidden" name="image" value={imageUrl} onChange={setImageUrl} />
                        <div>
                        </div>
                    </div>
                ) :
                    (
                        <div className="relative h-72 cursor-pointer"
                            onClick={openFileDialog}>
                            <Image src="/placeholder.png" layout="fill" />
                        </div>
                    )
                }
                <div className="w-full ">
                    <button className="border-green-600 border-2 rounded-md p-2 text-base hover:scale-105 
                    transform transition duration-75 ease-out text-green-600 w-full"
                        onClick={openFileDialog}>
                        Select a picture
                    </button>
                </div>

                <div className="w-full flex flex-row justify-between">

                    {currentStep < 4 && (
                        <>
                            {currentStep > 0 && (
                                <button className="border-green-600 p-2 text-base hover:scale-105 transform transition duration-75 ease-out
                                   text-grey"
                                    onClick={prevFormStep}>
                                    Back
                                </button>
                            )}
                        </>
                    )}


                    <button
                        className="border-green-600 p-2 text-base hover:scale-105 transform transition duration-75 ease-out
             text-grey" onClick={handleSubmit}>
                        Next
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Step2
