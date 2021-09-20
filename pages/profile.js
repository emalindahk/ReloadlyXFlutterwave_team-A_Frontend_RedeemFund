import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { useRouter } from 'next/dist/client/router';
import { useSession } from "next-auth/client";
import Image from 'next/image';
import Link from "next/link";


function profile() {
    const router = useRouter();

    const signUp = () => {
        router.push({
            pathname: '/signup',
        })
    } 
    const [session, loading] = useSession()
    useEffect(() => {
      if(!loading && !session?.accessToken) {
        router.push('/signin')
      }
    }, [loading, session])


    return (
        <Layout title="Setup Profile">
            <Header/>

            <div className="flex flex-col justify-center p-10 max-w-2xl mx-auto">
                <div className="flex flex-col items-center space-y-3">
                <h2 className="text-3xl font-semibold text-primary">Setup your profile</h2>
                <div className="flex items-center justify-center rounded-full bg-greySec text-white h-24 w-24">
                <p className="text-center text-3xl">EK</p>
                </div>
                <Link href="/"><p className="text-green-600 underline">Upload a picture</p></Link>
                </div>

                <div className="max-w-full">

                <form onSubmit={onSubmit} className="flex flex-col md:px-10 pt-7 pb-4 space-y-6 text-grey">

                <label htmlFor="fname" >
                 <span className="font-semibold">Name</span>
                <input id="fname" name="fname" type="text" value={name}
                  className="mt-1 px-4 py-3 block w-full rounded-md border-gray-400 shadow-sm focus:border-green-600 
            focus:ring focus:ring-green-600 focus:ring-opacity-50" />
              </label>

              <label htmlFor="fname" >
                <span className="font-semibold">Country</span>
                <select className="bmt-1 px-4 py-3 block w-full rounded-md border-gray-400 shadow-sm focus:border-green-600 
            focus:ring focus:ring-green-600 focus:ring-opacity-50">
                  <option>Nigeria</option>
                  <option>Ghana</option>
                  <option>Uganda</option>
                  <option>Kenya</option>
                </select>
              </label>

              <label htmlFor="fname" >
                <span className="font-semibold">Mobile Number</span>
                <input id="fname" name="fname" type="text" placeholder=""
                  className="mt-1 px-4 py-3 block w-full rounded-md border-gray-400 shadow-sm focus:border-green-600 
            focus:ring focus:ring-green-600 focus:ring-opacity-50" />
              </label>

              <button type="submit"
               className="bg-green-600 rounded-md p-3 mt-10 text-sm hover:scale-105 transform transition duration-75 ease-out text-white">
                  Save
              </button>
             </form>
                </div>
            </div>
        </Layout>
    )
}

export default profile
