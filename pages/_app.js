import { store, wrapper } from '@/store/store';
import '@/styles/globals.css'
import { useEffect } from 'react';
import { Provider } from 'react-redux';


const App = ({ Component, pageProps }) => {

  useEffect(() => {
    store.dispatch({ type: "APP_LOAD" })

  }, [])

  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
}

export default wrapper.withRedux(App);
