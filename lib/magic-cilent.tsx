import { Magic } from "magic-sdk";

const abc:any = process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_API_KEY;

const createMagic = () => {
  return (
    typeof window !== "undefined" &&  new Magic(abc)
  ); 
};

  
export  const magic = createMagic();
console.log("magic setup", magic);