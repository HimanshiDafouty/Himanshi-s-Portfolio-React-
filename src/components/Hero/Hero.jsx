import React, { useEffect } from "react";
import Typed from "typed.js";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  useEffect(() => {
    var typed = new Typed('#element', {
      strings: ['Student', 'Web Developer', 'Open-Source Contributor', 'Programmer'],
      typeSpeed: 50,
      smartBackspace: true, 
    });

    return () => {
      typed.destroy();
    };
  }); 

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm <span className={styles.blue}>Himanshi Dafouty</span></h1>
        <div className={styles.description}>
          and I'm a Passionate
        </div><span id="element" className={`${styles.description} ${styles.blue}`}></span>
        <a href="mailto:riyadafouty755201@gmail.com" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img src={getImageUrl("hero/heroImage.png")} alt="Hero" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
