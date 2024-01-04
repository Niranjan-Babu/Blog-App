import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import Search from '../search/search'
import { Suspense } from 'react'
const Navbar = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}><b>Blog.io</b></h1>
      
      <div className={styles.navbox}> 
      <Suspense>
        <Search className={styles.searchbar} placeholder="Search"/>
      </Suspense>
         <Link href="/"><div className={styles.navbox1}>Home</div></Link> 
         <Link href="/main"><div className={styles.navbox1}>Blogs</div></Link>
         <Link href="https://dashboard-flax-eta.vercel.app/dashboard" target='blank'><div className={styles.navbox1}>Dashboard</div></Link>
         <Link href="/main/createBlog"><div className={styles.navbox1}>Create</div></Link>
      </div>
    </div>
  )
}

export default Navbar