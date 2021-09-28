import React, { useState } from 'react'

function ContactForm() {

    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = {
            name: e.currentTarget.name.value,
            email: e.currentTarget.email.value,
            message: e.currentTarget.message.value,
            subject: e.currentTarget.subject.value
        }
        const res = await fetch(`${process.env.BASE_API_URL}inquiry`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            })
        if (res.status === 200) {
            setSuccessMsg('Message sent successfully!')
        } else {
            setErrorMsg('Message failed to send!')
        }
    }

    return (
        <div>
            <form action="post" className="text-white py-2" onSubmit={handleSubmit}>
                {errorMsg && <div className="absolute top-0 right-0 m-4 p-4 bg-red-600 text-white text-sm">{errorMsg}</div>}
                {successMsg && <div className="absolute top-0 right-0 m-4 p-4 bg-green-600 text-white text-sm">{successMsg}</div>}
                <div className="grid grid-cols-2 gap-6 ">
                    <label htmlFor="name" className="flex flex-col z-50 space-y-2">
                        <span>Name</span>
                        <input
                            required
                            id="name"
                            name="name"
                            type="text" className="mt-1 px-4 py-3 block w-full border-lightBlue shadow-sm focus:border-lightBlue 
            focus:ring focus:ring-lightBlue focus:ring-opacity-50" placeholder="Enter your name" />
                    </label>
                    <label htmlFor="email" className="flex flex-col z-50 space-y-2">
                        <span>Email</span>
                        <input
                            required
                            id="email"
                            name="email"
                            type="email" className="mt-1 px-4 py-3 block w-full border-lightBlue shadow-sm focus:border-lightBlue 
            focus:ring focus:ring-lightBlue focus:ring-opacity-50" placeholder="Enter your name" />
                    </label>
                </div>

                <div className="z-50 mt-4">
                    <label htmlFor="subject" className="flex flex-col z-50 space-y-2">
                        <span className="z-50">Subject</span>
                        <input
                            required
                            id="subject"
                            name="subject"
                            type="text" className="mt-1 z-50 px-4 py-3 block w-full border-lightBlue shadow-sm focus:border-lightBlue 
            focus:ring focus:ring-lightBlue focus:ring-opacity-50 text-black" placeholder="Subject" />
                    </label>
                </div>

                <div className="mt-4">
                    <label htmlFor="message" className="flex flex-col z-50 space-y-2">
                        <span className="z-50">Message</span>
                        <textarea
                            required
                            id="message"
                            name="message"
                            className="z-50 mt-1 px-4 py-3 block w-full border-lightBlue shadow-sm focus:border-lightBlue 
            focus:ring focus:ring-lightBlue focus:ring-opacity-50 text-black" cols="20" rows="8" placeholder="Enter your message"></textarea>
                    </label>
                </div>

                <button className="bg-green-600 rounded-md p-4 text-sm hover:scale-105 transform transition 
            duration-75 ease-out mt-4 text-white z-50" type="submit">Send a message</button>

            </form>
        </div>
    )
}

export default ContactForm
