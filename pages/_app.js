import 'tailwindcss/tailwind.css'
import './global.css'
import { Provider } from 'next-auth/client'
import React, {useState} from 'react';
import FormProvider from '../context';

function MyApp({ Component, pageProps}) {


  return (
  <Provider session={pageProps.session}>
  <FormProvider>
  <Component {...pageProps}/>
  </FormProvider>
  </Provider>
  )
}

export default MyApp

