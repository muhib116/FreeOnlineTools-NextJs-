import './index.css'
import axios from 'axios'
axios.defaults.baseURL = "http://127.0.0.1:8000/api/"

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}