import Card from './Card'
import Link from 'next/link';
import styles from './SectionCard.module.css'
import clsx from "classnames";

const SectionCard = (props:any) => {
  const { title, videos = [], size, shouldWrap = false, shouldScale } = props;
    // console.log(videos);
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div className={clsx(styles.cardWrapper, shouldWrap && styles.wrap)}>

            {videos.map((video:any,idx:any)=>{
                    console.log({ video });
                    return (
                      <Link legacyBehavior href={`/video/${video.id}`} key={video.id}>
                         <a>  <Card
                  id={idx}
                  imgUrl={video.imgUrl}
                  size={size}
                  shouldScale={shouldScale}
                />
              </a>
                      </Link>
                    );
            })}
            </div>
        </section>
    );
};

export default SectionCard;