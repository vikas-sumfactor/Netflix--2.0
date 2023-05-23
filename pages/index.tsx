
import Head from 'next/head';
import { Inter } from 'next/font/google'
import styles from "../styles/Home.module.css"
import Banner from '@/Components/banner/Banner';
import Navbar from '@/Components/nav/Navbar';

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Netflix new</h1>
      <Navbar username = "vikasrana"/>
      <Banner 
      title= "Dabbangg "
      subTitle ="Robin Hood"
      imgUrl = "/static/poster-3.jpg"

      />
      </div>
  );
}