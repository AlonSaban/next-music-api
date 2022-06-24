import { getProviders, signIn } from 'next-auth/react'
import { Button } from '@material-ui/core'
import Image from 'next/image'
import styles from '../styles/login.module.css'

export default function Login({ providers }) {

  return (
    <div className={styles.container}>
      <img className={styles.img} src="https://links.papareact.com/9xl" />
      {Object.values(providers).map(provider => (
        <div key={provider.name}>
          <Button onClick={() => signIn(provider.id, { callbackUrl: "/" })}>
            <div className={styles.loginButton}>
              Login with {provider.name}
            </div>
          </Button>
        </div>
      ))}

      <footer className={styles.footer}>
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
      </footer>
    </div>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: {
      providers,
    },
  };
}