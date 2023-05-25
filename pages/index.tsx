
import Head from 'next/head';
import { Inter } from 'next/font/google'
import styles from "../styles/Home.module.css"
import Banner from '@/Components/banner/Banner';
import Navbar from '@/Components/nav/Navbar';
//  import Card from '@/Components/card/Card';
import SectionCard from '@/Components/card/SectionCard';
import { getVideos } from '@/lib/getVideos';

const inter = Inter({ subsets: ['latin'] });


export async function getServerSideProps(context:any){

  const disneyVideos = await getVideos();

  return {
    props:{disneyVideos}
  };

}


export default function Home(disneyVideos:any) {

    // console.log({disneyVideos});

  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

  <Navbar username = "vikasrana"/>

      <Banner 
      title= "Dabbangg "
      subTitle ="Robin Hood"
      imgUrl = "/static/poster-3.jpg"
      />

<div className={styles.sectionWrapper}>
<SectionCard title="Disney" videos={disneyVideos} size="large" />
        <SectionCard title="Disney" videos={disneyVideos} size="medium" />
      </div>
      


      </div>
  );
}