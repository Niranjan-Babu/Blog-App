import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import Search from '../search/search'
import { Suspense } from 'react'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import EditNoteIcon from '@mui/icons-material/EditNote';
const Navbar = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}><b>Blog.io</b></h1>
      
      <div className={styles.navbox}> 
      <Suspense>
        <Search className={styles.searchbar} placeholder="Search" />
      </Suspense>
         <Link href="/"><div className={styles.navbox1}><span className={styles.name}>Home</span>
         <span className={styles.icon}><HomeIcon/></span></div></Link> 
         <Link href="/main"><div className={styles.navbox1}><span className={styles.name}>Blogs</span>
         <span className={styles.icon}><EditNoteIcon/></span></div></Link>
         <Link href="https://dashboard-flax-eta.vercel.app/dashboard" target='blank'>
          <div className={styles.navbox1}><span className={styles.name}>Dashboard</span>
          <span className={styles.icon}><AdminPanelSettingsIcon/></span></div></Link>
         <Link href="/main/createBlog"><div className={styles.navbox1}><span className={styles.name}>Create</span>
         <span className={styles.icon}><AddIcon/></span></div></Link>
      </div>
    </div>
  )
}

export default Navbar