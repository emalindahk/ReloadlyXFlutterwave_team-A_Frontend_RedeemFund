import 'tailwindcss/tailwind.css'
import './global.css'
import { Provider } from 'next-auth/client'
import React, {useState} from 'react';

function MyApp({ Component, pageProps }) {

  const [campaignData, setCampaignData] = useState({});
  const updateCampaignData = (newData) => {
    setCampaignData({ ...campaignData, ...newData });
  };

  return (
  <Provider session={pageProps.session}>
  <Component {...pageProps} updateCampaignData={updateCampaignData}/>
  </Provider>
  )
}

export default MyApp
