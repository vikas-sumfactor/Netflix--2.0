import Head from "next/head";
import NavBar from "../../Components/nav/Navbar";
import SectionCard from "../../Components/card/SectionCard";
import { redirectUser } from "../../utils/redirectUser";
import { getMyList } from "../../lib/videos";
import styles from "../../styles/MyList.module.css";

export async function getServerSideProps(context) {
  const { userId, token } = await redirectUser(context);
  const videos = await getMyList(userId, token);
  return {
    props: {
      myListVideos: videos,
    },
  };
}
const MyList = ({ myListVideos }) => {
  return (
    <div>
      <Head>
        <title>My list</title>
      </Head>
      <main className={styles.main}>
        <NavBar />
        <div className={styles.sectionWrapper}>
        <SectionCard
            title="My List"
            videos={myListVideos}
            size="small"
            shouldWrap
            shouldScale={false}
          />
        </div>
      </main>
    </div>    
    
  
  );
};
export default MyList;