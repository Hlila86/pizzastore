import React from 'react'
import styles from '../styles/PizzaList.module.css'
import PizzaCard from './PizzaCard'

const PizzaList = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>The best Pizza in the World</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptatem illo optio nihil consectetur odit amet officiis atque numquam laborum!</p>

        <div className={styles.wrapper}>
            <PizzaCard />
            <PizzaCard />

            <PizzaCard />

            <PizzaCard />

            <PizzaCard />


        </div>
    </div>
  )
}

export default PizzaList