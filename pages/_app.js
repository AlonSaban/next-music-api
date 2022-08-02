import { RecoilRoot } from 'recoil'
import { store } from '../redux/store'
import { Provider } from 'react-redux'
import '../styles/globals.css'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default MyApp
