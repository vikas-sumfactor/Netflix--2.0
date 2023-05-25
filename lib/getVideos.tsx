
import videoData from "../data/videos.json";


const abc:any = process.env.MYYOUTUBE_API_KEY;
console.log(abc);

export const getVideos = async () => {
  const MYKEY = abc;
 
  

  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=disney%20trailer&key=${MYKEY}`
  );
  
  const data = await response.json();
  console.log(data);

  return data?.items.map((item:any) => {
    return {
        title: item.snippet.title,
        imgUrl: item.snippet.thumbnails.high.url,
        id: item?.id?.videoId || item?.id?.channelId,
    }
});
}



