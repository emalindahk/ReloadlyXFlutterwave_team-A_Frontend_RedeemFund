import React from 'react'

import Layout from '../components/Layout'
import NavBar from '../components/NavBar'
import CampaignCard from '../components/CampaignCard'

function discover({ campaigns }) {
    return (
        <Layout title="Discover">
            <NavBar />

            <div className="max-w-6xl mx-auto px-6 py-10 text-grey">

                <div className="flex flex-col space-y-5 ">
                    <h2 className="text-2xl font-semibold">Featured Campaigns</h2>
                    <div className="grid grid-cols-4 gap-y-6 items-center">
                    {campaigns.slice(0, 8).map(({ id, title, goalAmount, currentAmount, category }) => (
                        <CampaignCard
                            key={id}
                            title={title}
                            goalAmount={goalAmount}
                            currentAmount={currentAmount}
                            percentage={(currentAmount / goalAmount) * 100}
                            category={category}
                        />
                    ))}
                </div>
                </div>  

            </div>

        </Layout>
    )
}

export default discover

export async function getStaticProps() {
    const campaigns = await fetch(`${process.env.BASE_API_URL}campaigns`).
        then(
            res => res.json()
        )


    return {
        props:
            { campaigns }
    }
}
