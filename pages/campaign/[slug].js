import React from 'react'

import Layout from '../../components/Layout'
import { useRouter } from 'next/dist/client/router'


function Campaign({post}) {

    const router = useRouter()
    const {id} = router.query

    return (
        <Layout>
            <h1>{post.title}</h1>
 
        </Layout>
    )
}

export default Campaign

export async function getStaticPaths() {
    const res = await fetch(`${process.env.BASE_API_URL}/campaigns/`);
    const campaign = await res.json();

  
    const paths = [campaign].map((item) => ({
      params: { slug: item.slug },
    }));
  
    return {
      paths,
      fallback: false,
    };
  }
  
  export async function getStaticProps({ params }) {
    const { slug } = params;
  
    const res = await fetch(`${process.env.BASE_API_URL}/campaign/${slug}`);
    const data = await res.json();
    const post = data[0];
  
    return {
      props: { post },
    };
  }