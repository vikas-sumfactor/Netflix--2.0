
import Head from 'next/head';
import { Inter } from 'next/font/google'
import styles from "../styles/Home.module.css"
import Banner from '@/Components/banner/Banner';
import Navbar from '@/Components/nav/Navbar';
//  import Card from '@/Components/card/Card';
import SectionCard from '@/Components/card/SectionCard';
import { redirectUser } from "../utils/redirectUser";


import {
  getPopularVideos,
  getVideos,
  getWatchItAgainVideos,
} from "../lib/videos";
// import { startFetchMyQuery } from '@/lib/db/hasura';

// const inter = Inter({ subsets: ['latin'] });


export async function getServerSideProps(context){

  const { userId, token } = await redirectUser(context);

  if (!userId) {
    return {
      props: {},
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

 
  const watchItAgainVideos = await getWatchItAgainVideos(userId, token);

  console.log({ watchItAgainVideos });

  const disneyVideos = await getVideos("disney trailer");

  const productivityVideos = await getVideos("Productivity");

  const travelVideos = await getVideos("indie music");
  
  const popularVideos = await getPopularVideos();

  return {
    props: {
      disneyVideos,
      travelVideos,
      productivityVideos,
      popularVideos,
      watchItAgainVideos,
    },
  };

}


export default function Home({disneyVideos,travelVideos,productivityVideos, popularVideos, watchItAgainVideos}) {

  console.log({ watchItAgainVideos });

    // console.log({disneyVideos});
    // startFetchMyQuery();
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
  <Navbar />

      <Banner
      videoId="4zH5iYM4wJo" 
      title= "Dabbangg "
      subTitle ="Robin Hood"
      imgUrl = "/static/poster-3.jpg"
      />

<div className={styles.sectionWrapper}>
    <SectionCard title="Disney" videos={disneyVideos} size="large" />
        <SectionCard title="Watch it again"
            videos={watchItAgainVideos}
            size="small"
          />

       <SectionCard title="Travel" videos={travelVideos} size="small" />

        <SectionCard title="Productivity" videos={productivityVideos}  size="medium" />

      

        <SectionCard title="Popular" videos={popularVideos} size="small" />

      </div>
      </div>
      


      </div>
  );
}

