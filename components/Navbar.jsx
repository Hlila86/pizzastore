import Image from 'next/image'
import React from 'react'
import styles from '../styles/Navbar.module.scss'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { GoSearch } from 'react-icons/go'
import {BiUser} from 'react-icons/bi'
import {AiOutlineMenu} from 'react-icons/ai'
import Link from 'next/link'


const Navbar = () => {
  
  return (

    <>
      
      <div className={styles.container}>

        <div className={styles.navleft}>

          <div className={styles.outlineMenu}>
            <AiOutlineMenu />
          </div>
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

          <div className={styles.search}>
            <GoSearch />
          </div>
          <div className={styles.wishlist}>
            <MdOutlineFavoriteBorder />
          </div>

          <div className={styles.userIcon}>
            <BiUser />
          </div>
          <div className={styles.cart}>
            <AiOutlineShoppingCart />
            <div className={styles.cartCount}>0</div>
          </div>

        </div>
      </div>

    </>
  )
}

export default Navbar