import Image from 'next/image'
import React from 'react'
import styles from '../styles/PizzaCard.module.css'

const PizzaCard = () => {
  return (
    <div className={styles.container}>
        <Image src="/img/pi.jpeg" alt="" width="200" height="300" />
        <h1 className={styles.title}>Pizza Margeritta</h1>
        <span className={styles.price}>$19</span>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, incidunt.</p>
    </div>
  )
}

export default PizzaCard