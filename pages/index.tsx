import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Charlie Sabino</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Main />
      <Footer />
    </div>
  )
}

export default Home
