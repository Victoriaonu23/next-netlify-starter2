import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          <a href="http://www.youtube.com/redirect?q=http%3A%2F%2Fnaijaspider.com&page=53"> </a>
          Get started by editing these <code> <a href="http://www.youtube.com/redirect?q=http%3A%2F%2Fnaijaspider.com&page=53"> </a> pages/index.js</code>         
        </p>
      </main>
    

      <Footer />
    </div>
  )
}
