import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
// import 'swiper/swiper.scss';

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
          <Layout>
              <Component {...pageProps}/>
          </Layout>


  )
}

export default MyApp
