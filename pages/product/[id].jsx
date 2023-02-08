import Image from 'next/image'
import React from 'react'
import styles from '../../styles/Product.module.css'


const product = () => {
  const pizza ={
    img: "/img/pi3.jpeg",
    name: "Pizza hot",
    price: [19.9 , 23 , 27.3],
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  };
  return (
    <div className={styles.container}>

      <div className={styles.left}>

        <h1 className={styles.title}>{pizza.name} </h1>
        <div className={styles.imgContainer}>

          <Image src={pizza.img}  width={200} height={300} alt=""/>

        </div>
      </div>

      <div className={styles.right}>
        right section
      </div>
    
    </div>
  )
}

export default product