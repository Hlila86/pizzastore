import Image from 'next/image'
import React from 'react'
import styles from '../../styles/Order.module.css'
import {BsFillBagCheckFill} from 'react-icons/bs'
import {MdLocalShipping} from 'react-icons/md'
import {FaTruckLoading} from 'react-icons/fa'
import {FcShipped} from 'react-icons/fc'
import {FcPaid} from 'react-icons/fc'


const Order = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.row}>
                    <table className={styles.table}>
                        <tbody className={styles.tbody}>
                            <tr className={styles.tr}>
                                <th >Order ID</th>
                                <th >Costumer</th>

                                <th >Adress</th>
                                <th >Total</th>
                            </tr>

                            <tr>

                                <td>
                                    <span className={styles.id}>154896213</span>
                                </td>

                                <td>
                                    <span className={styles.name}>john Doe</span>
                                </td>
                                <td>
                                    <span className={styles.address}>12 rue de bizerte 5023 Touza </span>
                                </td>
                                <td>
                                    <span className={styles.total}>150$</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.row}>
                    <div className={styles.status}>
<BsFillBagCheckFill/>
                    </div>
                    <div className={styles.status}>
<MdLocalShipping/>
                    </div>
                    <div className={styles.status}>
<FaTruckLoading/>
                    </div>
                    <div className={styles.status}>
<FcShipped/>
                    </div>
                    <div className={styles.status}>
<FcPaid/>
                    </div>


                </div>

            </div>


            <div className={styles.right}>

                <div className={styles.wrapper}>
                    <h2 className={styles.title}>CART TOTAL</h2>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Total:</b>$79.5
                    </div>

                    <button disabled className={styles.button}>PAID</button>

                </div>
            </div>


        </div>
    )
}

export default Order