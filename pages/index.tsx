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
        <meta name='description' content="Charlie Sabino's website" />
        <link rel='initials' href='/../public/bigcerul.png' />
      </Head>
      <Navbar />
      <Main />
      <Footer />
    </div>
  )
}

export default Home
