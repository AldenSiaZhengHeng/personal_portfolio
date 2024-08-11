import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css";
import about_data from '../../data/about_data'

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
         <ul className={styles.aboutItems}>
             {about_data.map(item => (
                 <li key={item.id} className={styles.aboutItem}>
                    <img src={getImageUrl(item.pointer)} alt="Cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>{item.name}</h3>
                        <pre>{item.description}</pre>
                    </div>
                 </li>
             ))}
         </ul>
      </div>
    </section>
  )
}
