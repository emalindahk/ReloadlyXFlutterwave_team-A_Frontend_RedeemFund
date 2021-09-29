import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function DonateModal({ openModal, setOpen, slug }) {

    const cancelButtonRef = useRef(null)
    const [amount, setAmount ] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [fullName, setFullName] = useState('')



    const handleDonate = async (e) => {
        const body = {
            phoneNumber: phoneNumber,
            amount: amount,
            fullName: fullName,
            email: email, 
        }
        const res = await fetch (`${process.env.BASE_API_URL}make-payment/${slug}`, {
            method: 'POST',
            headers: {  'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })
        if (res.status === 200) {
            setOpen(false)
            console.log(res)
        } else {
            console.log('error')
        }
    }


    return (
        <Transition.Root show={openModal} as={Fragment}>
            <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} 
            onClose={() => (setOpen(false))}>
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
                        <form className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden 
                        shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                        onSubmit={() => handleDonate()}>
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start ">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                                        <Dialog.Title as="h3" className="text-xl leading-6 font-medium text-gray-900 text-center">
                                            Make Donation
                                        </Dialog.Title>
                                        <div className="mt-2 flex flex-col items-center w-full space-y-2 text-sm">
                                          
                                            <label htmlFor="fullName" className="flex flex-col space-y-2 w-full">
                                                <span className="font-semibold">Full Name</span>
                                                <input id="fullName" 
                                                name="fullName" 
                                                type="text" 
                                                className="mt-1 px-4 py-2 block w-full border-greyPrim rounded-md shadow-sm 
                                                focus:border-green-600 focus:ring focus:ring-green-600 focus:ring-opacity-50" 
                                                placeholder="Enter Full Name"
                                                value={fullName || ''}
                                                onChange={(e) => setFullName(e.target.value)}
                                                required />
                                            </label>

                                            <label htmlFor="phoneNumber" className="flex flex-col space-y-2 w-full">
                                                <span className="font-semibold">Phone Number</span>
                                                <input 
                                                id="phoneNumber" 
                                                name="phoneNumber" 
                                                type="text" 
                                                className="mt-1 px-4 py-2 block w-full border-greyPrim rounded-md shadow-sm 
                                                focus:border-green-600 focus:ring focus:ring-green-600 focus:ring-opacity-50" 
                                                placeholder="Enter Phone Number"
                                                value={phoneNumber || ''}
                                                onChange={(e) => setPhoneNumber(e.target.value)}
                                                required />
                                            </label>

                                            <label htmlFor="email" className="flex flex-col space-y-2 w-full">
                                                <span className="font-semibold">Email Address</span>
                                                <input 
                                                id="email" 
                                                name="email" 
                                                type="text" 
                                                className="mt-1 px-4 py-2 block w-full border-greyPrim rounded-md shadow-sm 
                                                focus:border-green-600 focus:ring focus:ring-green-600 focus:ring-opacity-50" 
                                                placeholder="Enter Email Address"
                                                value={email || ''}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required />
                                            </label>

                                            <label htmlFor="amount" className="flex flex-col space-y-2 w-full">
                                                <span className="font-semibold">Amount</span>
                                                <input 
                                                id="amount" 
                                                name="amount" 
                                                type="number" 
                                                className="mt-1 px-4 py-2 block w-full border-greyPrim rounded-md shadow-sm focus:border-lightBlue 
                                                focus:ring focus:ring-green-600 focus:ring-opacity-50" 
                                                placeholder="Enter Amount in US Dollars"
                                                value={amount || ''}
                                                onChange={(e) => setAmount(e.target.value)}
                                                required />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    type="submit"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 
                                    bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                                    focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm" >
                                    Donate
                                </button>

                            </div>
                        </form>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}