import React from 'react'
import styles from '../styles/Slider.module.css'
import { BsArrowRightCircle, BsArrowLeftCircle } from 'react-icons/bs'


const Slider = () => {

  return (

    <div className={styles.content}>

      <BsArrowRightCircle />
      <div className={styles.wrapper}>

        <div className={styles.imgContainer}>
          <img src='/img/pi1.jpeg' />
        </div>

      </div>
      <BsArrowLeftCircle />
    </div>
  )
}

export default Slider