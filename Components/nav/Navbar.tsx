import styles from "./navbar.module.css";
import { useRouter } from "next/router";
import { useState , useEffect} from "react";
import Image from "next/image";
import { magic } from "../../lib/magic-cilent";

const NavBar = (props:any) => {
  
  const[showDropdown , setShowDropdown] = useState(false);

  const [username, setUsername] = useState("");

  const router = useRouter();

  useEffect(() => {
    async function getUsername() {
      try {
        const { email, issuer } = await magic.user.getMetadata();

        const didToken = await magic.user.getIdToken();

        
        console.log({ didToken });
        
        if (email) {
          setUsername(email);
        }
      } catch (error) {
        console.log("Error retrieving email:", error);
      }
    }
    getUsername();
  }, []);

 

const handleOnClickHome = (e:any) =>{
  e.preventDefault();
  router.push('/');

}

const handleOnClickMyList = (e:any) =>{
  e.preventDefault();
  router.push('/browse/MyList');

}

const handleShowDropdown = (e:any) =>{
  e.preventDefault();
  setShowDropdown(!showDropdown);
}


const handleSignout = async (e:any) => {
  e.preventDefault();

  try {
    await magic.user.logout();
    console.log(await magic.user.isLoggedIn());
    router.push("/login");
  } catch (error) {
    console.error("Error logging out", error);
    router.push("/login");
  }
};




  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <a className={styles.logoLink}>
          <div className={styles.logoWrapper}>
            <Image
              src="/static/netflix.svg"
              alt="Netflix logo"
              width="128"
              height="34"
            />
          </div>
        </a>
        <ul className={styles.navItems}>
          <li className={styles.navItem} onClick={handleOnClickHome}>Home</li>
          <li className={styles.navItem2} onClick={handleOnClickMyList}>My List</li>
        </ul>
        <nav className={styles.navContainer}>
          <div>
            <button className={styles.usernameBtn} onClick={handleShowDropdown}>
              <p className={styles.username}>{username}</p>
              <Image 
              src="/static/expandmoreicons.svg" 
              alt="expand more img"
              width="25"
              height="25"
              
              />
            </button>

          {showDropdown && ( <div className={styles.navDropdown}>
              <div>
             
              <a className={styles.linkName} onClick={handleSignout}>Sign out</a>
                
               
                <div className={styles.lineWrapper}></div>
              </div>
            </div>
          )
         }
          </div>
        </nav>
      </div>
    </div>
  );
};
export default NavBar;