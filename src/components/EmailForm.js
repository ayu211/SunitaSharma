import React, { useRef } from "react";
import styles from "./EmailForm.module.css";
import emailjs from "@emailjs/browser";

const EmailForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_jn3he5x", "template_nr56lcj", form.current, {
        publicKey: "SVPSF4gceYi51JCjT",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <div className={styles.box}>
        <div className={styles.left}>
        <h2 className={styles.map}>Nearest MaxLabs Locations for checkups</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d109156.67486339387!2d75.63015425808433!3d31.24437890914667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smax%20lab%20near%20me!5e0!3m2!1sen!2sin!4v1707592395059!5m2!1sen!2sin"
            width="900"
            height="600"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
        <div className={styles.right}>
          <h2> Contact Dr. Harpal Singh</h2>
          <form className={styles.formcontainer} ref={form} onSubmit={sendEmail}>
            <label className={styles.lab}>
              Name:
              <input className={styles.inp} type="text" name="user_name" />
            </label>
            <label className={styles.lab}>
              Email:
              <input className={styles.inp} type="email" name="user_email" />
            </label>
            <label className={styles.lab}>
              Subject:
              <input className={styles.inp} type="text" name="subject" />
            </label>
            <label className={styles.lab}>
              Message:
              <textarea name="message" />
            </label>
            <button className={styles.subBtn} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EmailForm;
