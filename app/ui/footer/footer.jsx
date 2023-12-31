import React from 'react'
import styles from './footer.module.css'
import nir from '@/public/n.jpg'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
  return (
    
      <div className={styles.botbox}>
              <Image src={nir} height={350} width={350} alt='' className={styles.nir}/>
              <div className={styles.detials}>
                <h2>Detials</h2>
              <p>Name: Niranjan Babu</p>
              <p>Role: Frontend Developer</p>
              <p>LinkedIn: <Link href='https://www.linkedin.com/in/niranjan-babu-b71283233/' target='blank' className={styles.Link}><u> Niranjan Babu</u></Link></p>
              <p>Github:<Link href='https://github.com/Niranjan-Babu' target='blank' className={styles.Link}><u> Niranjan Babu</u></Link></p>
              <p>Email: babuniranjan310@gmail.com</p>
              </div>
              <div className={styles.projects}>
                <h2>Projects:</h2>
                <p><Link href="https://mymusic-df1c1.web.app/" target="_blank" className={styles.Link}>Music App</Link></p>
                <p><Link href="https://fir-53b7a.web.app/" target="_blank" className={styles.Link}>Code edior</Link></p>
                <p><Link href="https://music-117e2.web.app/" target="_blank" className={styles.Link}>Weather App</Link></p>
                <p><Link href="https://dashboard-flax-eta.vercel.app/dashboard/" target="_blank" className={styles.Link}>Admin Dashboard</Link></p>
                <p>Blog Website</p>
              </div>
              <div className={styles.skill}>
                <h2>Skills:</h2>
                <p>HTML,CSS</p>
                <p>Javascript</p>
                <p>React js</p>
                <p>MUI</p>
                <p>Next Js</p>
                <p>MongoDB</p>
              </div>
            </div>
  )
}

export default Footer