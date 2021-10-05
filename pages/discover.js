import React from 'react'

import {table, minifyRecords} from '../utils/airtable'

import Layout from '../components/Layout'
import NavBar from '../components/NavBar'
import CampaignCard from '../components/CampaignCard'
import GiftCard from '../components/GiftCard'

function discover({ campaigns, cards }) {

    const country = {"Kenya": "🇰🇪",
                   "Ghana": "🇬🇭",
                   "Nigeria": "🇳🇬",
                   "Uganda": "🇺🇬"}

    return (
        <Layout title="Discover">
            <NavBar />

            <div className="max-w-6xl mx-auto px-6 py-10 text-grey">

                <div className="flex flex-col space-y-5 pt-4">
                    <h2 className="text-2xl font-semibold">Featured Campaigns</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 items-center">
                    {campaigns.slice(8, 16).map(({ id, title, goalAmount, currentAmount, category, coverPictureS3, beneficiary: {countryName} }) => (
                        <CampaignCard
                            key={id}
                            title={title}
                            country={country[countryName]}
                            goalAmount={goalAmount}
                            currentAmount={50}
                            percentage={(50 / goalAmount) * 100}
                            category={category}
                            img={coverPictureS3}
                        />
                    ))}
                </div>

                <section className="pt-7">
                <h2 className="text-2xl font-semibold">Gift Cards</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {cards.map(({id, fields:{image_url}}) =>
                    <GiftCard 
                    key={id}
                    img={image_url}/>
                    )}
                    
                </div>
                </section>
                </div>  

            </div>

        </Layout>
    )
}

export default discover

export async function getStaticProps() {
    const campaigns = await fetch(`${process.env.BASE_API_URL}campaigns`).
        then( res => res.json() )
    const giftCards = await table.select({}).firstPage()

    return {
        props:
            { campaigns,
              cards: minifyRecords(giftCards)  }
    }
}

