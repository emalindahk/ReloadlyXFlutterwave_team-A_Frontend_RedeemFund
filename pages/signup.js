import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { useRouter } from 'next/dist/client/router';

const SignupPage = () => {

  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
  const body = {
      email: e.currentTarget.email.value,
      firstName: e.currentTarget.fname.value,
      lastName: e.currentTarget.lname.value,
      password: e.currentTarget.password.value,
    };

  const res = await fetch(`${process.env.NEXT_BASE_API_URL}register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (res.status === 200) {
      router.push("/profile");
    } else {
      setErrorMsg(await res.text());
    }
  };

  const signIn = () => {
      router.push({
          pathname: '/signin',
        })
      } 

  return (
    <Layout title="SignUp">

      <Header content="Already have an account?" link={signIn} button="Sign In" />
      <div className="relative bg-greyLight flex md:items-center md:justify-center md:py-20">
        <div className="bg-white flex flex-col space-y-4 rounded-sm shadow-sm w-full md:max-w-xl">
          <h2 className="text-3xl text-center text-primary px-4 pt-6 pb-2">Sign up</h2>
          <hr />
          <form onSubmit={handleSubmit} className="flex flex-col px-10 pt-7 pb-4 space-y-6">
            {/* {errorMsg ? <p style={{ color: "red" }}>{errorMsg}</p> : null} */}

            <div className="grid md:grid-cols-2 gap-10 px-4">

              <label htmlFor="fname" >
                <input id="fname" name="fname" type="text" placeholder="First Name" required
                  className="mt-1 px-4 py-3 block w-full rounded-md border-gray-400 shadow-sm focus:border-lightBlue 
            focus:ring focus:ring-lightBlue focus:ring-opacity-50" />
              </label>

              <label htmlFor="lname">
                <input id="lname" name="lname" type="text" placeholder="Last Name" required
                  className="mt-1 px-4 py-3 block w-full rounded-md border-gray-400 shadow-sm focus:border-lightBlue 
            focus:ring focus:ring-lightBlue focus:ring-opacity-50"/>
              </label>

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
                className="bg-green-600 rounded-md py-2 px-5 text-base hover:scale-105 transform transition duration-75 ease-out text-white">
                Next</button>
            </div>
          </form>

          <hr/>

          <div className="relative flex items-center md:w-[550px] pt-6 pb-8">
            <p className="text-xs px-4">RedeemFund's fee is 5% from each donation you receive. 
            The payment processor fee is 2.9% + $0.30 per donation.
              By continuing, you agree to the Redeemfund <span className="text-green-600">terms </span>
              and you acknowledge receipt of our  <span className="text-green-600"> privacy policy</span>.
            </p>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default SignupPage;