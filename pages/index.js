import Head from 'next/head'
import Banner from '../components/Banner'
import NavBar from '../components/NavBar'
import Image from 'next/image'
import ProcessContainer from '../components/ProcessContainer'
import BenefitsContainer from '../components/BenefitsContainer'
import Testimonials from '../components/Testimonials'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>RedeemFund</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap" />
      </Head>

      <NavBar />
      <Banner />

      <main className="font-poppins max-w-full">

        <section className="grid px-4 py-14 sm:grid-cols-2 md:py-20 max-w-7xl mx-auto">

          <div className="relative order-2 mx-10 h-[300px] sm:h-[300px] md:h-[400px] lg:h-[500px] md:m-4 ">
            <Image src="/aboutus.png" layout="fill" objectFit="cover" className="rounded-2xl" />
          </div>

          <div className="px-8 md:pl-8 space-y-2 sm:order-2">
            <h2 className="text-5xl font-semibold text-center text-primary"> About Us</h2>
            <p className="p-4 text-sm md:text-lg">Every one of us has a dream, personal dreams and dreams of a better world.
              That spark of inspiration to help a person, teach a person, fix a neighborhood, or even change a nation.
              At Redeemfund, we empower individuals to chase their dreams and and donors to turn compassion into action.
              Because that is how dreams come true and change happens..</p>

            <p className="p-4 text-sm md:text-lg">With Redeemfund, we are creating a space where individuals can fund their dreams and
              champion causes that matter and raise money to make a lasting difference.
              Through RedeemFund, people have the tools they need to share their cause far and wide and harness the power of generosity.
              We are transforming the way people give and changing lives—are you ready to join us?
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-5xl font-semibold text-center text-primary">How it works</h2>
          <h3 className="text-lg md:text-2xl text-center p-2 font-normal">Create a campaign for your cause in 3 easy steps</h3>
          <div className="bg-primary text-white py-8 mt-10 ">
            <div className="grid md:grid-cols-3 mt-10 max-w-7xl mx-auto gap-10 md:gap-40">
              <ProcessContainer
                src="/create.png"
                title="Create"
                content="Create a campaign to raise funds for your dream course or skill." />

              <ProcessContainer
                src="/share.png"
                title="Share"
                content="Sharing tools to spread your campaign across social networks" />

              <ProcessContainer
                src="/fund.png"
                title="Fund"
                content="Receive donations for your cause direct to your account" />
            </div>
            <div className="flex justify-center py-8">
              <button className="bg-green-600 rounded-md p-3 text-md hover:scale-105 transform transition 
            duration-75 ease-out mt-4">Start a campaign</button>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto py-10 mt-5 p-6">
          <div className="grid md:grid-cols-3 gap-14">
            <BenefitsContainer
              src="/leader.png"
              title="African Leader"
              content="RedeemFund is the first  and only donor guarantee in Africa catering to africans" />

            <BenefitsContainer
              src="/simple.png"
              title="Simple Setup"
              content="You can personalise and share your Redeemfunds link  in just a few minutes." />

            <BenefitsContainer
              src="/secure.png"
              title="Secure"
              content="Our Trust & Safety team works around the clock to protect you against fraud." />

            <BenefitsContainer
              src="/protection.png"
              title="Donor Protection"
              content="Redeemfund is trusted around the world for its simple, reliable fundraising platform." />

            <BenefitsContainer
              src="/reach.png"
              title="Social Reach"
              content=" Harness the power of social media to spread your story and get more support." />

            <BenefitsContainer
              src="/cust.png"
              title="24/7 customer service"
              content="Our best-in-class Customer Support agents will answer your questions, day or night." />

          </div>
          <div className="flex justify-center py-8">
            <button className="bg-green-600 rounded-md p-3 text-md hover:scale-105 transform transition 
            duration-75 ease-out mt-4 text-white">Start a campaign</button>
          </div>
        </section>

        <section className="bg-greyLight">
          <Testimonials />
        </section>

        <section className="mt-10 md:mt-20 pb-10">
          <h2 className="text-lg md:text-4xl text-center text-grey">Ready to fund your dreams?</h2>
          <div className="flex justify-center py-8">
            <button className="bg-green-600 rounded-md p-3 text-md hover:scale-105 transform transition 
            duration-75 ease-out mt-4 text-white">Start a campaign</button>
          </div>
        </section>

        <section className="hidden md:block bg-contact relative">
          <div className="absolute h-full w-full bg-black bg-opacity-70"></div>

          <div className="grid grid-cols-2 p-14 gap-14">
            <div className="flex flex-col text-white z-50 space-y-6">
              <h2 className="text-3xl md:text-5xl font-semibold text-center ">Contact Us</h2>
              <p className="px-16 leading-7">With Redeemfunds, we are creating a space where individuals can fund their dreams and champion causes that matter and raise money to make a lasting difference.
                Through RedeemFunds, people have the tools they need to share their cause far and wide and harness the power of generosity.
                We are transforming the way people give and changing lives—are you ready to join us?</p>
            </div>

            <div>
              <ContactForm />
              <button className="bg-green-600 rounded-md p-4 text-sm hover:scale-105 transform transition 
            duration-75 ease-out mt-4 text-white z-50">Send a message</button>
            </div>

          </div>
        </section>

        <section className="bg-primary">
          <Footer/>
        </section>

      </main>
    </div>
  )
}
