import Head from 'next/head'
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>RedeemFund</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" />
      </Head>

       <NavBar/>
    </div>
  )
}
