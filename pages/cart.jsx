import React from 'react'
import styles from '../styles/Cart.module.css'

const Cart = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
        
        <table className={styles.table}>
            <tr className={styles.tr}> 
               <th>Product</th>
               <th>Name</th>
               <th>Color</th>
               <th>Size</th>
               <th>Price</th>
               <th>quantity</th>
               <th>Total</th>


            </tr>
        </table>
        </div>

        <div className={styles.right}>

        </div>
    </div>
  )
}

export default Cart