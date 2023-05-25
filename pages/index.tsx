
import Head from 'next/head';
import { Inter } from 'next/font/google'
import styles from "../styles/Home.module.css"
import Banner from '@/Components/banner/Banner';
import Navbar from '@/Components/nav/Navbar';
//  import Card from '@/Components/card/Card';
import SectionCard from '@/Components/card/SectionCard';
import { getVideos,getPopularVideos } from "@/lib/videos";

const inter = Inter({ subsets: ['latin'] });


export async function getServerSideProps(context:any){

  const disneyVideos = await getVideos("disney trailer");

  const productivityVideos = await getVideos("Productivity");

  const travelVideos = await getVideos("indie music");
  
  const popularVideos = await getPopularVideos();

  return {
    props:{disneyVideos,travelVideos, productivityVideos, popularVideos}
  };

}


export default function Home({disneyVideos,travelVideos,productivityVideos, popularVideos,}) {

    // console.log({disneyVideos});

  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
  <Navbar username = "vikasrana"/>

      <Banner 
      title= "Dabbangg "
      subTitle ="Robin Hood"
      imgUrl = "/static/poster-3.jpg"
      />

<div className={styles.sectionWrapper}>
    <SectionCard title="Disney" videos={disneyVideos} size="large" />

       <SectionCard title="Travel" videos={travelVideos} size="small" />

        <SectionCard title="Productivity" videos={productivityVideos}  size="medium" />

        <SectionCard title="Popular" videos={disneyVideos} size="small" />

        <SectionCard title="Popular" videos={popularVideos} size="small" />

      </div>
      </div>
      


      </div>
  );
}