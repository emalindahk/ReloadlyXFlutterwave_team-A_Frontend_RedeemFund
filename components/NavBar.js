import React, { useState } from 'react'
import Link from 'next/link'


function NavBar() {

    const [active, setActive] = useState(true);

    const handleClick = () => {
      setActive(!active);
    };

    return (
       <header className="grid md:grid-cols-3 sticky z-50 shadow-md bg-primary text-white font-prestij p-6 md:items-center">

           <div className="flex items-center">
               <h1 className="text-2xl cursor-pointer">RedeemFund</h1>
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
           
           <div className= {`${
            active ? 'flex flex-col text-left space-y-2 mt-3' : 'hidden'
          } md:flex-row md:items-center md:justify-between text-md md:mt-0 md:space-y-0`}>
              <Link href="/">Search</Link>
              <Link href="/">Discover</Link>
              <Link href="/">How It Works</Link>
              
           </div>

           <div className={`${ active ? 'flex flex-col space-y-2 w-40 mt-2'  : 'hidden'
          }  md:flex-row md:items-center md:justify-end md:space-x-5 md:w-full md:space-y-0 md:mt-0`}>
              <Link href="/">Sign In</Link>
              <button className="bg-green-600 rounded-md p-2 text-sm hover:scale-105 transform transition duration-75 ease-out">
                   Start a Campaign
              </button>
           </div>


         

       </header>
    )
}

export default NavBar
