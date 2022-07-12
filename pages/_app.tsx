import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return ( 
 <>
      {/* Add the favicon */}
      <Head>
        <link rel="initials favicon" href="/" />
      </Head>
      {/* Add the favicon */}
      {/* Note that the path doesn't include "public" */}
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
