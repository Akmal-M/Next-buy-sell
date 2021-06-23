import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import '../styles/Modal.css';


import Layout from "../Components/Layout";
import {DataProvider} from "../store/GlobalState";

function MyApp({ Component, pageProps }) {
  return (
      <DataProvider>
          <Layout>
              <Component {...pageProps}/>
          </Layout>
      </DataProvider>

  )
}

export default MyApp
