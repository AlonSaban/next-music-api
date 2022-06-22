import Head from 'next/head'
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

      {/* <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/alon-saban-92a09a19a/"
          target="_blank"
          rel="noopener noreferrer">
          My Linkdin:
          <span className={styles.logo}>
            <Image src="/Linkdin.png" alt="Logo" width={32} height={30} />
          </span>
        </a>

        <a
          href="https://github.com/AlonSaban?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          My githab:
          <span className={styles.logo}>
            <Image src="/github.png" alt="Logo" width={32} height={30} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
