import React from 'react'
import { getImageUrl } from '../../utils'

import styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>
                Hi, I'm Alden
            </h1>
            <p className={styles.description}>
              I'm a fresh graduate computer science student with Artificial Intelligence who is also an attentive and creative computer science professional skilled in solving complex software issues and enhancing user experience.
              Proficient in Java, Python, HTML/CSS, JavaScript, C/C++, MySQL, REST API, MATLAB, Machine Learning, Deep Learning, and Reinforcement Learning. Experienced in analyzing and identifying areas for development and modification.
            </p>
            <a href="mailto:aldensia0207@gmail.com" className={styles.contactBtn}>Contact ME</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero Image of me"  className={styles.heroImg}/>
        <div className={styles.topBlur} />
        <div className={styles.topBlur} />
    </section>
  );
}
