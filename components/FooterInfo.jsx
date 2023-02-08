import React from 'react'
import styles from '../styles/FooterInfo.module.css'
import { TbTruckDelivery } from 'react-icons/tb'
import { TbCertificate } from 'react-icons/tb'
import { GiPriceTag } from 'react-icons/gi'



const FooterInfo = () => {
  return (
    <div className={styles.container}>

      <div className={styles.wrapper}>

        <div className={styles.item}>
          <div className={styles.icon}>
            <TbTruckDelivery />
          </div>
          <div className={styles.info}>
            <div className={styles.title}>Extra fast delivery</div>
            <p>Your order will be delivered 3-5 business days after all of your items are available</p>


          </div>

        </div>
        <div className={styles.item}>
          <div className={styles.icon}>
            <GiPriceTag />
          </div>

          <div className={styles.info}>
            <div className={styles.title}>Best price</div>
            <p>Your order will be delivered 3-5 business days after all of your items are available</p>


          </div>



        </div>
        <div className={styles.item}>
          <div className={styles.icon}>
            <TbCertificate />
          </div>

          <div className={styles.info}>
            <div className={styles.title}>Guarantee</div>
            <p>Your order will be delivered 3-5 business days after all of your items are available</p>



          </div>

        </div>


      </div>
    </div>
  )
}

export default FooterInfo