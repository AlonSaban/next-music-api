import Head from 'next/head'
import SideBar from '../component/SideBar'
import Player from '../component/Player'
import Center from '../component/Center'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Musixx</title>
        <meta name="description" content="Musixx" />
        <link rel="icon" href="/icon.png" />
        <link href='https://fonts.googleapis.com/css?family=Sacramento' rel='stylesheet' />
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