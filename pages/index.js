import Head from 'next/head'
import { getSession } from 'next-auth/react'
import SideBar from '../component/SideBar'
import Player from '../component/Player'
import Center from '../component/Center'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Musixx</title>
        <meta name="description" content="Musixx" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <div className={styles.main}>
        <div className={styles.sidebar}>
          <SideBar />
        </div>

        <div className={styles.center}>
          <Center />
        </div>
      </div>

      <div className={styles.player}>
        <Player />
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  }
}
