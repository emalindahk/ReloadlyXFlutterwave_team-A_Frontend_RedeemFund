import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useRouter } from 'next/dist/client/router'

export default function FormCompleted({openModal, setOpen}) {
    const router = useRouter()
    const cancelButtonRef = useRef(null)
    const share = () => {
        router.push('/share/tips')
    }

    return (
        <Transition.Root show={openModal} as={Fragment}>
            <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={()=>(setOpen(false))}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block align-bottom bg-white text-left 
                        overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="flex flex-col p-5 space-y-5">
                                <div className="flex flex-row justify-end">
                                    <button onClick={() => setOpen(false)}>  <CancelIcon className="text-greySec" /></button>

                                </div>

                                <div className="flex justify-center">
                                    <CheckCircleOutlineIcon className="text-green-600 text-6xl h-10" />
                                </div>

                                <div className="flex flex-col space-y-4 justify-center ">
                                    <h3 className="text-xl text-center"> You have successfully created a campaign 🎉 !</h3>
                                    <p className="text-xs text-center"> Currently only people around you who already know your campaign  URL can support you.
                                        Share your campaign with many more people in order to get more support</p>
                                    <button className="bg-green-600 border-2 text-white rounded-md py-2 px-4 
                                        text-sm hover:scale-105 transform transition duration-75 ease-out" 
                                        onClick={share}>
                                        OK</button>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}








