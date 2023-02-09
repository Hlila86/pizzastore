import Image from 'next/image'
import React, { useState } from 'react'
import styles from '../../styles/Product.module.css'


const product = () => {


  const pizza = {
    img: "/img/pi3.jpeg",
    name: "Pizza hot",
    price: 15,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    color: "red",
    size: "XXL"
  };
  return (
    <div className={styles.container}>

      <div className={styles.left}>

        <h1 className={styles.title}>{pizza.name} </h1>
        <div className={styles.imgContainer}>

          <Image src={pizza.img} width={200} height={300} alt="" />

        </div>
      </div>

      <div className={styles.right}>
        <span className={styles.price}>${pizza.price}</span>
        <p className={styles.desc}>{pizza.desc}</p>


        <div className={styles.sizes}>
          <b>  Size :</b>
          <div className={styles.size}>
            <span className={styles.value}>S</span>

          </div>
          <div className={styles.size} >
            <span className={styles.value}>M</span>

          </div>
          <div className={styles.size} >
            <span className={styles.value}>L</span>

          </div>
          <div className={styles.size} >
            <span className={styles.value}>XL</span>

          </div>

          <div className={styles.size} >
            <span className={styles.value}>XXL</span>

          </div>
        </div>

        <div className={styles.colors}>
          <b>Color:</b>

          <div className={styles.color}></div>
          <div className={styles.color}></div>
          <div className={styles.color}></div>

        </div>

        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.button}>Add To Cart</button>
        </div>


      </div>

    </div>
  )
}

export default product