import React, { useState } from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import { useRouter } from 'next/dist/client/router'

function forgotPassword() {
    
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [email, setEmail] = useState("");
    const router = useRouter()
    const signUp = () => {
        router.push('/signup')
    }
    const back = () => {
        router.back()
    }
    const handleSubmit = async (e) => {

        e.preventDefault();
        const body = {
          email: email
        };
    
        const res = await fetch(`https://redeemfund-api.herokuapp.com/api/password-reset`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        if (res.status === 200) {
          setSuccessMsg("Password reset link sent to your email");
        } else {
          setErrorMsg(await res.text());
        }
      };

    return (
    <Layout title="SignIn">
      <Header content="Do not have an account?" link={signUp} button="Sign Up" />
      <div className="relative bg-greyLight flex md:items-center md:justify-center md:py-20">
        <div className="bg-white flex flex-col space-y-4 rounded-sm shadow-sm w-full md:max-w-xl">
          <h2 className="text-2xl text-center text-primary px-4 pt-6 pb-2">Reset Your Password</h2>

          <hr />
          {errorMsg ? <p style={{ color: "red" }} className="text-center">{errorMsg}</p> : null}
          {successMsg ? <p style={{ color: "green" }} className="text-center">{successMsg}</p> : null}
          <form method="post" className="flex flex-col md:px-10 pt-7 pb-4 space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-5 px-4">
             <h3 className="text-center">Forgot your Password?</h3>
             <p className="text-xs  px-4">Enter your email and we will send you a link to reset your password.</p>
              <label htmlFor="email" className="w-full">
                <input
                  required
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 px-4 py-3 block w-full rounded-md border-gray-400 shadow-sm focus:border-lightBlue 
                  focus:ring focus:ring-lightBlue focus:ring-opacity-50"
                />
              </label>
             
              <button type="submit"
                className="bg-green-600 border-2 text-white
                rounded-md py-3 px-4 text-sm hover:scale-105 transform transition duration-75 ease-out"
              >
                Request new password </button>
            </div>
          </form>

          <hr />

          <div className="relative flex items-center md:w-[550px] pt-6 pb-8 justify-center">
            <button onClick={back}><p className="text-green-600 text-sm underline">Go Back</p>
            </button>
          </div>

        </div>
      </div>

    </Layout>
    )
}

export default forgotPassword
