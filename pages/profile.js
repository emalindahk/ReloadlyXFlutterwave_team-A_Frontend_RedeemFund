import React, { useState, useEffect, useContext } from "react";
import { useRouter } from 'next/dist/client/router';
import { useUser } from "../lib/hooks";
import { useS3Upload } from 'next-s3-upload';
import { FormContext } from '../context/index'
import { useSession, getSession } from "next-auth/client";
import Image from 'next/image';
import Header from "../components/Header";
import Layout from "../components/Layout";


function profile() {

  const [session, loading] = useSession()
  const router = useRouter();
  const { userData, setUserData } = useContext(FormContext);
  const { user, isLoading, isError } = useUser()
  const firstName = user && user.firstName ? user.firstName : '';
  const lastName = user && user.lastName ? user.lastName : '';
  let [imageUrl, setImageUrl] = useState();
  let { FileInput, openFileDialog, uploadToS3 } = useS3Upload();

  useEffect(() => {
    if (imageUrl || userData.image) {
      setUserData({ ...userData, image: imageUrl ? imageUrl : userData.image });
    }
  }, [imageUrl])

  let handleFileChange = async file => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function (e) {
      setImageUrl(reader.result)

    }
    let { url } = await uploadToS3(file);
    setImageUrl(url);
  };

  useEffect(() => {
    if (!loading && !session?.accessToken) {
      router.push('/signin')
    }
  }, [loading, session])

  if (!session) {
    return (
        <div className="flex items-center justify-center">You need to be signed in.</div>
    )
  }

  const setProfImage = (e) => {
    setUserData({ ...userData, image: e.target.value });
  }

  const signUp = (e) => {
    e.preventDefault();
  }

  useEffect(() => {
    if (!loading && !session?.accessToken) {
      router.push('/signin')
    }
  }, [loading, session])

  return (
    <Layout title="Setup Profile">
      <Header/>

      <div className="flex flex-col justify-center p-10 max-w-2xl mx-auto">
        <div className="flex flex-col items-center ">
          <h2 className="text-3xl font-semibold text-primary">Setup your profile</h2>
        </div>

        <div className="max-w-full">
          <form onSubmit={signUp} className="flex flex-col md:px-10 pt-7 pb-4 space-y-6 text-grey">
            <div className="flex items-center justify-center">
              <FileInput onChange={handleFileChange} />
              {(imageUrl || userData.image) ? (
                <div className="relative flex h-24 w-24">
                  <Image src={imageUrl || userData.image} layout="fill" objectFit="cover" className="rounded-full" />
                  <input type="hidden" name="image" value={imageUrl} onChange={setProfImage} />
                </div>
              ) : (
                <div className="flex items-center justify-center rounded-full bg-greySec text-white h-24 w-24">
                  <p className="text-center text-3xl">EK</p>
                </div>
              )}
            </div>
            <button onClick={openFileDialog}><p className="text-green-600 underline">Upload a picture</p></button>

            <label htmlFor="fname" >
              <span className="font-semibold">Name</span>
              <input id="fname" name="fname" type="text" disabled placeholder={`${firstName} ${lastName}`}
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

export async function getServerSideProps(context) {
  return {
    props: {
      session: await getSession(context)
    },
  }
}