import Image from 'next/image'
import React from 'react'
import styles from '../styles/Footer.module.css'
import FooterInfo from './FooterInfo'

const Footer = () => {
  return (
    <>
    
<FooterInfo />
    <div className={styles.container}>

      <div className={styles.left}>
      <Image src="/img/logo.webp" alt='' width={109} height={55} />

      </div>
    </div>

    </>
  )
}

export default Footer