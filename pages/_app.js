import '../styles/globals.css'
import "@fontsource/montserrat/700.css";
import "@fontsource/merriweather/400.css";
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
    
  )
}

export default MyApp;