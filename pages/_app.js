import 'tailwindcss/tailwind.css'
import './global.css'
import { Provider } from 'next-auth/client'
import React, {useState} from 'react';
import FormProvider from '../context';
import ProgressBar from "@badrap/bar-of-progress";
import Router from 'next/router'

const progress = new ProgressBar({
  size: 4,
  color: '#0A2342',
  className:'z-50',
  delay: 100
});

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)

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

