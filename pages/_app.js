import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '../global.css'
import Head from 'next/head'
import { useEffect } from 'react';

config.autoAddCss = true


export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => console.log('scope is: ', registration.scope));
    }
  }, []);
  return (
    <>
      <Head>
        <title>offbrand spotify</title>
        <link rel="icon" href="assets/icons/favicon.ico" />
        <link rel="manifest" href="/app.webmanifest" />
        <meta name="description" content="offbrand spotify app for school, etc"></meta>
        <meta name="keywords" content="offbrand spotify"></meta>
        <meta name="author" content="sillyangel3"></meta>
        <meta name="theme-color" content="#222222"></meta>

      </Head>
      <Component {...pageProps} />
    </>
  )
}
