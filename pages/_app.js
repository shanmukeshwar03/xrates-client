import { Provider } from 'react-redux'
import store from 'redux/store'
import 'styles/globals.css'
import 'styles/home.css'
import 'styles/dashboard.css'
import 'styles/sidebar.css'
import 'styles/loading.css'
import 'styles/404.css'

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
