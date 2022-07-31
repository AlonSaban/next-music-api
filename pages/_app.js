import { RecoilRoot } from 'recoil'
import { store } from '../redux/store'
import { Provider } from 'react-redux'
import '../styles/globals.css'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <Provider store={store}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </Provider>
  )
}

export default MyApp
