"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import styles from './card.module.css'
import a from '../../../public/next.svg'
import Image from 'next/image'
import Link from 'next/link' 

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "80%",
  minHeight:"40%",
  bgcolor: "background.paper",
  border: 'none',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
 
};



export default function CardPaper({id,title,content,image}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Card  className={styles.container} >
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className={styles.title}>
          {title}
        </Typography>
        
      </CardContent>
      <CardActions className={styles.btns}>
        <Link href={`/main/${id}`} ><Button className={styles.btn}>Open</Button></Link>
        <Button open={open} onClick={handleOpen}  className={styles.btn}>Short View</Button>
      </CardActions>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className={styles.modal}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <h1><b>{title}</b></h1>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} className={styles.content}>
              <div dangerouslySetInnerHTML={{ __html: content }} />
          </Typography>
        </Box>
      </Modal>
    </Card>
  );
}