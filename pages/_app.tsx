import { Provider } from 'react-redux'
import 'normalize.css'
import 'border-box.css'

import store from 'src/store'

const MyApp = ({ Component, pageProps, }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
