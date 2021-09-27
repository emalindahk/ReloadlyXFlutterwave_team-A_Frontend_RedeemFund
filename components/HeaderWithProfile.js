import React from 'react'
import Image from 'next/image'
import PersonIcon from '@mui/icons-material/Person';

import { useRouter } from 'next/dist/client/router';
import { useUser } from '../lib/hooks';

function HeaderWithProfile() {
    const router = useRouter();
    const { user } = useUser()
    const firstName = user && user.firstName ? user.firstName : '';
    const lastName = user && user.lastName ? user.lastName : '';
    const profPic = user && user.profilePhotoS3 ? user.profilePhotoS3 : '';

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

    return (
        <header className="flex justify-between sticky z-50 shadow-md bg-primary text-white font-poppins p-6 md:items-center">

            <div className="relative w-44 h-6 cursor-pointer" onClick={home}>
                <Image src="/logo.png" layout="fill" />
            </div>

            <div className="flex flex-row items-center justify-end space-x-4 md:w-full md:space-y-0 md:mt-0 px-10">
            {(profPic)? (
            <div className="relative h-12 w-12">
            <Image src={profPic} layout="fill" className="rounded-full" />
            </div>
          ):(
            <PersonIcon className="w-8 h-8" />
          )}
        
        <p className="cursor-pointer" onClick={profile}>{`${firstName} ${lastName}`}</p>
            </div>
        </header>
    )
}

export default HeaderWithProfile
