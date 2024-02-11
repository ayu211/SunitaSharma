import React from "react";
import sunita_img from "../Images/sunita_photo.png";
import styles from'./Navbar.module.css';

export default function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.img}>
            <img src={sunita_img} alt="sunita" />
          </div>
          <p> <strong>Name :</strong> Sunita Sharma &nbsp; &nbsp; <strong>Age :</strong> 71yrs</p>
        </div>
      </nav>
    </>
  );
}
