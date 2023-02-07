import Image from 'next/image'
import React from 'react'
import styles from '../styles/Navbar.module.scss'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { GoSearch } from 'react-icons/go'
import Link from 'next/link'
import Topbar from './Topbar'

const Navbar = () => {
  return (

    <>
    <Topbar />
    <div className={styles.container}>

      <div>
        <Image src="/img/logo.webp" alt='' width={109} height={55} />
      </div>

      <div className={styles.navmenu}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
          <Link href="/">Home</Link>          </li>
          <li className={styles.listItem}>
            <Link href="/homme">homme</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/femme">femme</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/children">Children</Link>
          </li>
        </ul>

      </div>

      <div className={styles.navright}>

        <div className={styles.rightItem}>
        <GoSearch />
        </div>
        <div className={styles.wishlist}>
        <MdOutlineFavoriteBorder />
        <div>0</div>
        </div>
        <div className={styles.cart}>
        <AiOutlineShoppingCart />
        <div>0</div>
        </div> 

      </div>
    </div>

    </>
  )
}

export default Navbar