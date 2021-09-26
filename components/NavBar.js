import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image'
import { useSession } from 'next-auth/client';
import { useUser } from '../lib/hooks';
import PersonIcon from '@mui/icons-material/Person';


function NavBar() {

  const router = useRouter();
  const [active, setActive] = useState(false);
  const [session, loading] = useSession();
  const { user } = useUser()
  const firstName = user && user.firstName ? user.firstName : '';
  const lastName = user && user.lastName ? user.lastName : '';

  const handleClick = () => {
    setActive(!active);
  };

  const home = () => {
    router.push({
      pathname: '/',
    })
  }

  const profile = () => {
    router.push({
      pathname: '/profile',
    })
  }

  const startCampaign = () => {
    router.push({
      pathname: '/campaign',
    })
  }

  if (!session) {
    return (
      <header className="grid md:grid-cols-3 sticky z-50 shadow-md bg-primary text-white font-poppins p-6 md:items-center">

      <div className="relative w-44 h-6 cursor-pointer" onClick={home}>
        <Image src="/logo.png" layout="fill" />
      </div>

      <button
        className='absolute top-4 right-4 inline-flex p-3 hover:bg-green-600 rounded md:hidden text-white ml-auto hover:text-white outline-none'
        onClick={handleClick}
      >
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </button>

      

      <div className={`${active ? 'flex flex-col text-left space-y-2 mt-3 ' : 'hidden'
        } md:flex md:flex-row md:items-center md:justify-between text-md md:mt-0 md:space-y-0`}>
        <Link href="/">Search</Link>
        <Link href="/">Discover</Link>
        <Link href="/">How It Works</Link>

      </div>

      

      <div className={`${active ? 'flex flex-col space-y-2 w-40 mt-2' : 'hidden'
        }  md:flex md:flex-row md:items-center md:justify-end md:space-x-5 md:w-full md:space-y-0 md:mt-0`}>
        <Link href="/signin">Sign In</Link>
        <button className="bg-green-600 rounded-md p-2 text-sm hover:scale-105 transform transition duration-75 ease-out"
          onClick={startCampaign}>
          Start a campaign
        </button>
      </div>
    </header>
    )
  }

  return (
    <header className="flex justify-between sticky z-50 shadow-md bg-primary text-white font-poppins p-6 md:items-center">

      <div className="relative w-44 h-6 cursor-pointer" onClick={home}>
        <Image src="/logo.png" layout="fill" />
      </div>

      <button
        className='absolute top-4 right-4 inline-flex p-3 hover:bg-green-600 rounded md:hidden text-white ml-auto hover:text-white outline-none'
        onClick={handleClick}
      >
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </button>

      

      <div className={`${active ? 'flex flex-col space-y-2 w-40 mt-2' : 'hidden'
        }  md:flex md:flex-row md:items-center md:justify-end md:space-x-5 md:w-full md:space-y-0 md:mt-0`}>
        <button className="bg-green-600 rounded-md p-2 text-sm hover:scale-105 transform transition duration-75 ease-out"
          onClick={startCampaign}>
          Start a campaign
        </button>
        <div className="relative flex flex-row items-center space-x-3">
        <PersonIcon />
        <p className="cursor-pointer" onClick="/profile">{`${firstName} ${lastName}`}</p>
        </div>
        
      </div>
    </header>
  )
}

export default NavBar
