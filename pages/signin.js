import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Layout from '../components/Layout'
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link'
import Image from 'next/image'
import { signIn } from 'next-auth/client'


function Signin() {
    const router = useRouter();
    const signUp = () => {
        router.push({
            pathname: '/signup',
        })
    } 

    const [errorMsg, setErrorMsg] = useState('')

    const handleSubmit = async (e) => {
      e.preventDefault();
      const body = {
        email: e.currentTarget.email.value,
        password: e.currentTarget.password.value,
      };

      const res = await fetch(`https://redeemfund-api.herokuapp.com/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (res.status === 200) {
        const userObj = await res.json();
        console.log('user object ',userObj)
        localStorage.setItem("userId", userObj.userId);
        router.push("/profile");
        // mutate(userObj);
      } else {
        setErrorMsg(await res.text());
      }
    };

    const fbSignin = (e) => {
      e.preventDefault()
      signIn('facebook'),
      {
        callbackUrl: `${window.location.origin}/profile`,
      }
    }

  

    return (
       <Layout title="SignIn">
            <Header content="Do not have an account?" link={signUp} button="Sign Up"/>
        <div className="relative bg-greyLight flex md:items-center md:justify-center md:py-20">
        <div className="bg-white flex flex-col space-y-4 rounded-sm shadow-sm w-full md:max-w-xl">
          <h2 className="text-3xl text-center text-primary px-4 pt-6 pb-2">Sign in</h2>

          <hr />
          {errorMsg ? <p style={{ color: "red" }} className="text-center">{errorMsg}</p> : null}
          <form onSubmit={handleSubmit} className="flex flex-col md:px-10 pt-7 pb-4 space-y-6">

              <div className="flex flex-col p-4">
                  <button className="flex bg-fbBlue text-white py-3 items-center justify-center rounded-md"
                  onClick={fbSignin}>
                    <div className="relative h-7 w-7 mr-4">
                        <Image src="/fb.png" layout="fill"/>
                    </div>
                    Continue with Facebook
                  </button>

                  <div className="grid grid-cols-3 items-center pt-5">
                     <hr className="bg-grey"/>
                     <p className="text-center">or</p>
                     <hr className="bg-grey"/>
                  </div>
            
                  </div>
            <div className="flex flex-col items-center space-y-5 px-4">
              <label htmlFor="email" className="w-full">
                <input
                  required
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email address"
                  className="mt-1 px-4 py-3 block w-full rounded-md border-gray-400 shadow-sm focus:border-lightBlue 
            focus:ring focus:ring-lightBlue focus:ring-opacity-50"
                />
              </label>
              <label htmlFor="password" className="w-full">
                <input
                  required
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Create a password"
                  className="mt-1 px-4 py-3 block w-full rounded-md border-gray-400 shadow-sm focus:border-lightBlue 
            focus:ring focus:ring-lightBlue focus:ring-opacity-50"
                />
              </label>
              <button type="submit"
                className="border-green-600 border-2 text-green-600 
                rounded-md py-2 px-4 text-sm hover:scale-105 transform transition duration-75 ease-out">
               Sign in to RedeemFund </button>
            </div>
          </form>

          <hr/>

          <div className="relative flex items-center md:w-[550px] pt-6 pb-8 justify-center">
            <Link href="/"><p className="text-green-600 text-sm underline">Forgot Your Password?</p>
               </Link>
          </div>

        </div>
      </div>

       </Layout>
    )
}

export default Signin
