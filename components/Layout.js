import React from 'react'
import Head from 'next/head'
import Footer from './Footer'

function Layout({children, title}) {
    return (
        <div>
        <Head>
        <title>RedeemFund - {title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap" />
      </Head>
 
      <main className="font-poppins max-w-full">
      {children}
      </main>

      <Footer/>

    </div>
    )
}

export default Layout
