import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import CancelIcon from '@mui/icons-material/Cancel';

export default function Modal() {
    const [open, setOpen] = useState(true)

    const cancelButtonRef = useRef(null)

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
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
                        <div className="inline-block align-bottom bg-white text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="flex flex-col p-5 space-y-5">
                                <div className="flex flex-row justify-between">
                                    <h3 className="text-green-600">How to write a succesful story</h3>
                                    <button onClick={() => setOpen(false)}>  <CancelIcon className="text-greySec" /></button>

                                </div>

                                <div>
                                    <h4 className="text-xs">Answer the 6 essential questions to let everybody know about you and your campaign story</h4>
                                </div>

                                <div className="flex flex-col text-xs space-y-2">
                                    <p> <span className="font-semibold">WHO</span>: Introduce yourself or who  you want to help</p>
                                    <p> <span className="font-semibold">WHERE</span>: Explain where do you live</p>
                                    <p> <span className="font-semibold">WHAT</span>: Explain the  skill or course you want to achieve with your campaign</p>
                                    <p> <span className="font-semibold">WHY</span>: Explain why the skill or course or gadget is important to you</p>
                                    <p> <span className="font-semibold">WHEN</span>: When do you need the funds</p>
                                    <p> <span className="font-semibold">HOW</span>: Describe how you are going to maximize this opportunity.</p>

                                </div>

                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}








