import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Adorn Shaju   </h1>
        <p className={styles.description}>
        I'm a full-stack developer with 5 years of hands-on experience building web applications using 
        React and NodeJS. Feel free to reach out to discuss how I can help with your next project!
        </p>
        <a href="mailto:ashaju8@my.centennialcollege.ca" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
