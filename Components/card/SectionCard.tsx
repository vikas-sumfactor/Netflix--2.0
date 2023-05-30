import Card from './Card'
import Link from 'next/link';
import styles from './SectionCard.module.css'

const SectionCard = (props:any) => {
    const { title, videos=[],size } = props;  
    // console.log(videos);
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.cardWrapper}>

            {videos.map((video:any,idx:any)=>{
                    console.log({ video });
                    return (
                      <Link legacyBehavior key={idx} href={`/video/${video.id}`}>
                         <a>
                <Card key={idx} id={idx} imgUrl={video.imgUrl} size={size} />
              </a>
                      </Link>
                    );
            })}
            </div>
        </section>
    );
};

export default SectionCard;