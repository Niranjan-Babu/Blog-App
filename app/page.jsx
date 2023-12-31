"use client"
import ReactQuill from 'react-quill'
import styles from './page.module.css'
import { useState } from 'react'
import Image from 'next/image'

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
