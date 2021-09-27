import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/dist/client/router';
import { useUser } from '../lib/hooks';

function Header({content, link, button, children}) {
    
    const router = useRouter();
    const { user } = useUser();

    const home = () => {
        router.push({
          pathname: '/',
        })
      }

    return (
        <header className="flex justify-between sticky z-50 shadow-md bg-primary text-white font-poppins p-6 md:items-center">

        <div className="relative w-44 h-6 cursor-pointer" onClick={home}>
           <Image src="/logo.png" layout="fill" />
        </div>

        <div className="flex flex-row items-center justify-end space-x-2 md:w-full md:space-y-0 md:mt-0 px-10">
           <p className="hidden sm:inline-flex font-light text-sm">{content}</p>
           <button className="text-green-600 text-sm hover:scale-105 transform transition duration-75 ease-out" onClick={link}>
                {button}
            </button>
            {children}
        </div>
      </header>
    )
}

export default Header
