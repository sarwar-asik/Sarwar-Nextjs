import Footer from '../components2/Footer/Footer'
import '../styles/globals.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header'


export default function App({ Component, pageProps }) {
  return <div className='w-[] mx-auto' data-theme="cupcake">
    <Header></Header>
     <Component {...pageProps} />
     <Footer></Footer>
     <ToastContainer/>
  </div>
}
