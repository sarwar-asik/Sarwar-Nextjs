import Footer from '../components2/Footer/Footer'
import '../styles/globals.css'
import Header from './Header'

export default function App({ Component, pageProps }) {
  return <div className='w-[] mx-auto' data-theme="cupcake">
    <Header></Header>
     <Component {...pageProps} />
     <Footer></Footer>
  </div>
}
