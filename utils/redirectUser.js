import { verifyToken } from "../lib/util";

export const redirectUser = async (context) => {
  const token = context.req ? context.req.cookies?.token : null;

  const userId = await verifyToken(token);


  return {
    userId,
    token,
  };
};