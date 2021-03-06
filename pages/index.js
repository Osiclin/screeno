import Head from 'next/head'
import All from '../components/All/All'
import Grow from '../components/Grow/Grow'
import Hero from '../components/Hero/Hero'
import Navbar from '../components/Navbar/Navbar'
import Sponsor from '../components/Sponsor/Sponsor'
import Start from '../components/Start/Start'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Screeno</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      <Hero/>
      <Sponsor/>
      <All/>
      <Grow/>
      <Start/>
      
    </div>
  )
}
