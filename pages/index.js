import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
// import Image from 'next/image'

export default function Home() {
  let brand = 'QuoteMe'
  let [quote, setQuote] = useState(null)
  let [author, setAuthor] = useState(null)
  let [quoteLength, setLength] = useState(0)
  let [loading, setLoading] = useState(false)

  async function randomQuote() {
    setLoading(true)
    const response = await fetch('https://api.quotable.io/random')
    const data = await response.json()
    setQuote(data.content)
    setAuthor(data.author)
    setLoading(false)
    setLength(data.length)
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.headertitle}>
          <a href="\" style={{ fontWeight: 700, color: '#a8a8a8 ' }}>
            QuoteMe
          </a>{' '}
          😊
        </h2>
      </header>
      <Head>
        <title>QuoteMe | Make your day</title>
        <meta name="description" content="Quote me random quotes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={quoteLength > 200 ? styles.longtitle : styles.title}>
          {quote ? quote : `Welcome to ${brand}`}
        </h1>
        <h3 className={styles.author}>{author ? `- ${author}` : null}</h3>
        <a onClick={randomQuote} className={styles.card}>
          <h2 style={{ marginBottom: 0 }}>
            {loading ? 'Getting...' : 'Get Wisdom'}
          </h2>
        </a>
      </main>

      <footer className={styles.footer}>
        <div>
          <a
            href="https://www.producthunt.com/posts/quoteme-2?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-quoteme&#0045;2"
            target="_blank">
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=346387&theme=light"
              alt="QuoteMe - Get&#0032;wisdom&#0032;on&#0032;the&#0032;go | Product Hunt"
              style={{ width: '250px', height: '54px' }}
              width="250"
              height="54"
            />
          </a>
        </div>
        <a
          href="https://www.instagram.com/plutokyd/"
          target="_blank"
          rel="noopener noreferrer">
          Follow Me On &nbsp;
          <span className={styles.footername}>Instagram</span>
        </a>
      </footer>
    </div>
  )
}
