import React from 'react'
import Head from 'next/head'
import Footer from './Footer'

function Layout({ children, title, twitterHandle, currentURL, previewImage }) {

  const desc = "RedeemFund is a community of people who want to fund skills and courses for themselves and others. Come to RedeemFund to learn, share, and collaborate."
  return (
    <div>
      <Head>
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content={twitterHandle} key="twhandle" />

        {/* Open Graph */}
        <meta property="og:url" content={currentURL} key="ogurl" />
        <meta property="og:image" content={previewImage} key="ogimage" />
        <meta property="og:site_name" content="RedeemFund" key="ogsitename" />
        <meta property="og:title" content={title} key="ogtitle" />
        <meta property="og:description" content={desc} key="ogdesc" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" /> 

        
        <title>RedeemFund - {title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap" />
      </Head>

      <main className="font-poppins max-w-full">
        {children}
      </main>

      <Footer />

    </div>
  )
}

export default Layout
