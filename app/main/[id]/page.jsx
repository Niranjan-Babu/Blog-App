import { fetchSingleBlog } from '@/app/lib/data'
import React from 'react'
import styles from '@/app/ui/single/single.module.css'


const Single = async({params}) => {
    const {id} = params;
    const a = await fetchSingleBlog(id);
    
  return (
    <div className={styles.container} >
          <h1 className={styles.title}>
            {a.title}
          </h1>
          <div className={styles.content} dangerouslySetInnerHTML={{__html: a.content}} />
          
           
          <div className={styles.cred}>
            <div></div>
            <div>{a.creatername}</div>
            <div>{a.createremail}</div>
          </div>
    </div>
  )
}

export default Single