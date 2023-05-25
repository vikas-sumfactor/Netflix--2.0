import Card from './Card'
import styles from './SectionCard.module.css'

const SectionCard = (props:any) => {
    const { title, videos=[],size } = props;  
    // console.log(videos);
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.cardWrapper}>

            {videos.map((video:any,idx:any)=>{
                return <Card id={idx} imgUrl={video.imgUrl} size={size} />

            })}
            </div>
        </section>
    );
};

export default SectionCard;