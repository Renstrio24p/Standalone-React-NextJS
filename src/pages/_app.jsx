import './styles/index.css'
import './components/react-18/react.css'

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
  }