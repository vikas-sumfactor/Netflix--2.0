import styles from "./navbar.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const NavBar = (props:any) => {
  const { username } = props;

  const router = useRouter();

  const[showDropdown , setShowDropdown] = useState(false);

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
                <Link legacyBehavior href="/login">
                
                <a className={styles.linkName}>Sign out</a>
                
                </Link>
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