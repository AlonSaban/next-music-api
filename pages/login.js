import { getProviders, signIn } from 'next-auth/react'
import { Button } from '@material-ui/core'
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