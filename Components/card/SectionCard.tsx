
import Card from "./Card";
import styles from "./Sectioncard.module.css";

const SectionCards = (props:any) => {

    const { title, videos, size } = props;
    console.log({ videos });
  
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
      {videos.map((video:any, idx:any) => {
          return <Card key={idx} id={idx} imgUrl={video.imgUrl} size={size} />;
        })}
      </div>
    </section>
  );
};

export default SectionCards;