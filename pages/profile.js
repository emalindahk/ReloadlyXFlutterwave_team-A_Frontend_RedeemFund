import React, { useState, useEffect, useContext } from "react";
import { useRouter } from 'next/dist/client/router';
import { useUser } from "../lib/hooks";
import { useS3Upload } from 'next-s3-upload';
import { FormContext } from '../context/index'
import { useSession,  signOut } from "next-auth/client";
import Image from 'next/image';
import Header from "../components/Header";
import Layout from "../components/Layout";
import CountrySelect from "../components/CountrySelect";
import PersonIcon from '@mui/icons-material/Person';


function profile() {

  const [session, loading] = useSession()
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const router = useRouter();
  const { userData, setUserData } = useContext(FormContext);
  const { user} = useUser()
  const firstName = user && user.firstName ? user.firstName : '';
  const lastName = user && user.lastName ? user.lastName : '';
  const profPic = user && user.profilePhotoS3 ? user.profilePhotoS3 : '';
  const phoneNo = user && user.phoneNumber ? user.phoneNumber : '';
  const country = user && user.countryName ? user.countryName : '';
  const [mobileNo, setMobileNo] = useState();
  const [countryName, setCountryName] = useState();
  const [countryId, setCountryId] = useState();
  const countries = [
    { id: 'KE', country: 'Kenya' },
    { id: 'GH', country: 'Ghana' },
    { id: 'UG', country: 'Uganda' },
    { id: 'NG', country: 'Nigeria' }
  ]
  let [imageUrl, setImageUrl] = useState();
  let [isUploaded, setImageUploaded] = useState(false)
  let { FileInput, openFileDialog, uploadToS3 } = useS3Upload();

  let handleFileChange = async file => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function (e) {
      setImageUrl(reader.result)

    }
    let { url } = await uploadToS3(file);
    setImageUrl(url);
    setImageUploaded(true)
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

  useEffect(() => {
    if (isUploaded && imageUrl || userData.image) {
      setUserData({ ...userData, image: imageUrl ? imageUrl : userData.image });
    }
  }, [imageUrl])


  const handleCountryChange = (e) => {
    setCountryId(e.target.value);
    setCountryName(e.target.options[e.target.selectedIndex].text);
  }

  const handleMobileNoChange = (e) => {
    setMobileNo(e.target.value);
  }

  const setProfImage = () => {
   isUploaded && setUserData({ ...userData, image: imageUrl });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      countryCode: countryId,
      countryName: countryName,
      profilePhotoS3: imageUrl,
      phoneNumber: mobileNo,
      };
    
    const res = await fetch(`${process.env.BASE_API_URL}beneficiary`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", 
        "Authorization": `Bearer ${session && session.accessToken}` },
        body: JSON.stringify(body),
      });
      if (res.status === 200) {
        setSuccessMsg("Profile updated successfully")
        router.push("/");
      } else {
        setErrorMsg(await res.text());
      }
    };




  return (
    <Layout title="Setup Profile">
      <Header />

      <div className="flex flex-col justify-center p-10 max-w-2xl mx-auto">
        <div className="flex flex-col items-center ">
          <h2 className="text-3xl font-semibold text-primary">Setup your profile</h2>
        </div>

        <div className="max-w-full">
          <form onSubmit={handleSubmit} className="flex flex-col md:px-10 pt-7 pb-4 space-y-6 text-grey">
          {errorMsg && <div className="absolute top-0 right-0 m-4 p-4 bg-red-600 text-white text-sm">{errorMsg}</div>}
          {successMsg && <div className="absolute top-0 right-0 m-4 p-4 bg-green-600 text-white text-sm">{successMsg}</div>}
            <div className="flex items-center justify-center">

              <FileInput onChange={handleFileChange} />
              {(imageUrl || profPic) ? (
                <div className="relative flex h-24 w-24">
                  <Image src={imageUrl || profPic} layout="fill" objectFit="cover" className="rounded-full" />
                  <input type="hidden" name="image" value={imageUrl} onChange={setProfImage} />
                </div>
              ) : (
                <div className="flex items-center justify-center rounded-full bg-greySec text-white h-24 w-24">
                  <PersonIcon className="h-10 w-10"/>
                </div>
              )}
            </div>
            <button onClick={openFileDialog} type="button"><p className="text-green-600 underline">Upload a picture</p></button>

            <label htmlFor="fname" >
              <span className="font-semibold">Name</span>
              <input id="fname" name="fname" type="text" disabled placeholder={`${firstName} ${lastName}`}
                className="mt-1 px-4 py-3 block w-full rounded-md border-gray-400 shadow-sm focus:border-green-600 
            focus:ring focus:ring-green-600 focus:ring-opacity-50" />
            </label>

            <label htmlFor="fname" >
              <span className="font-semibold">Country</span>
              <CountrySelect
                options={countries}
                title="Kenya"
                value={countryId || country}
                disabled={country ? true : false}
                handleSelectChange={handleCountryChange}
              />
            </label>

            <label htmlFor="mobile" >
              <span className="font-semibold">Mobile Number</span>
              <input 
                id="mobile" 
                name="mobile" 
                type="text" 
                placeholder="Enter mobile number with country code"
                className="mt-1 px-4 py-3 block w-full rounded-md border-gray-400 shadow-sm focus:border-green-600 
            focus:ring focus:ring-green-600 focus:ring-opacity-50" 
            value={mobileNo || phoneNo }
            disabled={phoneNo ? true : false}
            onChange={handleMobileNoChange}/>
            </label>

            <button type="submit"
              className="bg-green-600 rounded-md p-3 mt-10 text-sm hover:scale-105 
              transform transition duration-75 ease-out text-white">
              Save
            </button>
           
          </form>
        </div>
        <button type="submit"
              className="bg-white rounded-md p-3 mt-3 hover:scale-105 
              transform transition duration-75 ease-out text-green-600 text-lg font-semibold"
              onClick={() => signOut({callbackUrl: '/'})}>
              Sign Out
            </button>
      </div>
    </Layout>
  )
}

export default profile



