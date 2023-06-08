import jwt from "jsonwebtoken";
import {
  findVideoIdByUser,
  insertStats,
  updateStats,
} from "../../lib/db/hasura";
export default async function stats(req, resp) {
  if (req.method === "POST") {
    try {
      const token = req.cookies.token;
      if (!token) {
        resp.status(403).send({});
      } else {
        const { videoId, favourited, watched = true } = req.body;

        if (videoId) {
          const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);

          const userId = decodedToken.issuer;
          const doesStatsExist = await findVideoIdByUser(
            token,
            userId,
            videoId
          );
          if (doesStatsExist) {
            // update it
            const response = await updateStats(token, {
              watched,
              userId,
              videoId,
              favourited,
            });
            resp.send({ msg: "it works", response });
          } else {
            // add it
            const response = await insertStats(token, {
              watched,
              userId,
              videoId,
              favourited,
            });
            resp.send({ msg: "it works", response });
          }
        }
      }
    } catch (error) {

    
  
      console.error("Error occurred /stats", error);
      resp.status(500).send({ done: false, error: error?.message });
    }
  }
}


// export default async function stats(req, resp) {
//   if (req.method === "POST") {
//     console.log({ cookies: req.cookies });

//     try {
//       if (!req.cookies.token) {
//         resp.status(403).send({});
//       } else {
//         resp.send({ msg: "it works" });
//       }
//     } catch (error) {
//       console.error("Error occurred /stats", error);
//       resp.status(500).send({ done: false, error: error?.message });
//     }
//   }
// }