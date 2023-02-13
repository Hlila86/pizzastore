import Image from 'next/image'
import React from 'react'
import styles from '../styles/Cart.module.css'

const Cart = () => {
  return (
    <div className={styles.container}>
       <div className={styles.left}>
        

        <table className={styles.table}>
    <tbody className={styles.tbody}>
      <tr className={styles.tr}>
        <th >Product</th>
        <th >Name</th>

        <th >Price</th>
        <th >Quantity</th>
        <th >Total</th>
            </tr>

            <tr>
              <td>
                <div className={styles.imgContainer}>
                  <Image
                  src="/img/pi3.jpeg"
                  objecFit="cover"
                  width={80}
                  height={120}
                  alt=""
                  />
                </div>
                </td>
                <td>
                  <span className={styles.name}>Margeritta</span>
                </td>
              
              <td>
                <span className={styles.price}>150$</span>
              </td>
              <td>
                <span className={styles.quantity}>1</span>
              </td>
              <td>
                <span className={styles.total}>150$</span>
              </td>
            </tr>
    </tbody>
  </table>
        </div>

        <div className={styles.right}>
<div className={styles.wrapper}>
  <h2 className={styles.title}>CART TOTAL</h2>
  <div className={styles.totalText}> 
    <b className={styles.totalTextTitle}>Total:</b>$79.5
  </div>

  <button className={styles.button}>CECKOUT NOW</button>

</div>
        </div>
    </div>
  )
}

export default Cart