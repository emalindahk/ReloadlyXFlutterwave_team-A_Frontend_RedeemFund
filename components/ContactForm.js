import React from 'react'

function ContactForm() {
    return (
        <div>
             <form action="post" className="text-white py-2">
              <div className="grid grid-cols-2 gap-6 ">
             <label htmlFor="" className="flex flex-col z-50 space-y-2">
             <span>Name</span>
             <input type="text" className="mt-1 px-4 py-3 block w-full border-lightBlue shadow-sm focus:border-lightBlue 
            focus:ring focus:ring-lightBlue focus:ring-opacity-50" placeholder="Enter your name"/>
             </label>
             <label htmlFor="" className="flex flex-col z-50 space-y-2">
             <span>Email</span>
             <input type="email" className="mt-1 px-4 py-3 block w-full border-lightBlue shadow-sm focus:border-lightBlue 
            focus:ring focus:ring-lightBlue focus:ring-opacity-50" placeholder="Enter your name"/>
             </label>
              </div>

              <div className="z-50 mt-4">
            <label htmlFor="" className="flex flex-col z-50 space-y-2">
             <span className="z-50">Subject</span>
             <input type="text" className="mt-1 z-50 px-4 py-3 block w-full border-lightBlue shadow-sm focus:border-lightBlue 
            focus:ring focus:ring-lightBlue focus:ring-opacity-50" placeholder="Subject"/>
             </label>
              </div>
             
              <div className="mt-4">
              <label htmlFor="" className="flex flex-col z-50 space-y-2">
             <span className="z-50">Message</span>
            <textarea className="z-50 mt-1 px-4 py-3 block w-full border-lightBlue shadow-sm focus:border-lightBlue 
            focus:ring focus:ring-lightBlue focus:ring-opacity-50" cols="20" rows="8" placeholder="Enter your message"></textarea>
             </label>
              </div>
            
            </form>
        </div>
    )
}

export default ContactForm
