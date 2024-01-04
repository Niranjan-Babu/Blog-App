"use client"
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
        <div className={styles.text}>
          <p>READMORE</p>
          <p className={styles.holow}>WRITEMORE</p>
          <p>LEARNMORE</p>
        </div>
    </div>
  )
}
