import '../styles/globals.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
 useEffect(() => {
  require('../node_modules/bootstrap/dist/js/bootstrap.bundle.js');
 }, []);
 return (
  <>
   <Head>
    <meta name='viewport' content='width=device-width, initial-scale=1' />
   </Head>
   <Component {...pageProps} />
  </>
 );
}
