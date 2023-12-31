import React from 'react'
import Card from '../ui/card/cardpaper'
import CardPaper from '../ui/card/cardpaper'
import { fetchUser,fetchBlog } from '../lib/data'
import styles from './globals.module.css'
import Pagination from '../ui/pagination/pagination'

const BlogMain = async ({searchParams}) => {
  const  q = searchParams?.q||"";
  const page = searchParams?.page||1;
  const {blogs,count} = await fetchBlog(q,page);

  return (
    <>
   
    <div className={styles.container}>
        {blogs?.map((blog)=>(
            <div key={blog.id}>
            <CardPaper id={blog.id} title={blog.title} content={blog.content}/>
            </div>
        ))}
        
    </div>
    <Pagination count={count}/>
    </>
  )
}

export default BlogMain