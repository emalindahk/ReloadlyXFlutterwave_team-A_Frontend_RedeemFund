import React, { useState } from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import { useRouter } from 'next/dist/client/router'

function setPassword() {

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const [successMsg, setSuccessMsg] = useState('')
    const router = useRouter()
    const back = () => {
        router.push('/forgot-password')
    }
    const signUp = () => {
        router.push('/signup')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (password !== confirmPassword) { setErrorMsg('Passwords do not match') }
        else { setErrorMsg('') }
        if (password.length < 8) { setErrorMsg('Password must be at least 8 characters long') }
        else { setErrorMsg('') }
        if (password.length > 0 && confirmPassword.length > 0 && password === confirmPassword && password.length > 7) {
            const res = await fetch(`${process.env.BASE_API_URL}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password : password })
            })
            if (res.status === 200) {
                setSuccessMsg('Password successfully changed')
                setTimeout(() => {
                    router.push('/login')
                }, 2000)
            } else { setErrorMsg('Something went wrong') }
          }
        }

    
    return (
        <Layout title="SignIn">
      <Header content="Do not have an account?" link={signUp} button="Sign Up" />
      <div className="relative bg-greyLight flex md:items-center md:justify-center md:py-20">
        <div className="bg-white flex flex-col space-y-4 rounded-sm shadow-sm w-full md:max-w-xl">
          <h2 className="text-2xl text-center text-primary px-4 pt-6 pb-2">Set New Password</h2>

          <hr />
          {errorMsg && <div className="absolute top-0 right-0 m-4 p-4 bg-red-600 text-white text-sm">{errorMsg}</div>}
          {successMsg && <div className="absolute top-0 right-0 m-4 p-4 bg-green-600 text-white text-sm">{successMsg}</div>}
          <form method="post" className="flex flex-col md:px-10 pt-7 pb-4 space-y-6" >
            <div className="flex flex-col space-y-5 px-4">
             <p className="text-base">Your new password must be different from your previously used password</p>
              <label htmlFor="password" className="w-full">
                  <span>Password</span>
                <input
                  required
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email address"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 px-4 py-3 block w-full rounded-md border-gray-400 shadow-sm focus:border-lightBlue 
                  focus:ring focus:ring-lightBlue focus:ring-opacity-50"
                />
              </label>
              <label htmlFor="password" className="w-full">
                <span>Confirm Password</span>
                <input
                  required
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email address"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="mt-1 px-4 py-3 block w-full rounded-md border-gray-400 shadow-sm focus:border-lightBlue 
                  focus:ring focus:ring-lightBlue focus:ring-opacity-50"
                />
              </label>
             
              <button type="submit"
                className="bg-green-600 border-2 text-white
                rounded-md py-3 px-4 text-sm hover:scale-105 transform transition duration-75 ease-out"
              >
            Reset password </button>
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

export default setPassword