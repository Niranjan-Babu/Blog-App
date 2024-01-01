"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './card.module.css'
import Link from 'next/link' 

export default function CardPaper({id,title}) {
 
  return (
    <Card  className={styles.container} >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className={styles.title}>
          {title}
        </Typography>
      </CardContent>
      <CardActions className={styles.btns}>
        <Link href={`/main/${id}`} ><Button className={styles.btn}>Open</Button></Link>
      </CardActions>
      
    </Card>
  );
}