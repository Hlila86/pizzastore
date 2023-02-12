import Image from 'next/image'
import React from 'react'
import styles from '../styles/Cart.module.css'

const Cart = () => {
  return (
    <div className={styles.container}>
       <div className={styles.left}>
        
        <h1>this is left</h1>

        <table className={styles.table}>
    <tbody>
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
<h1>tis is right</h1>
        </div>
    </div>
  )
}

export default Cart