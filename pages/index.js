import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Slider from '@/components/Slider'
import PizzaList from '@/components/PizzaList'
import Companies from '@/components/Companies'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>MyPizza</title>
        <meta name="description" content="The Best Pizza is here" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main>

        <Slider />

        <PizzaList />
        <Companies />
      </main>

    </>
  )
}
