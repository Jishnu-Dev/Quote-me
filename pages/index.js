import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
// import Image from 'next/image'

export default function Home() {
  let brand = 'QuoteMe'
  let [quote, setQuote] = useState(null)
  let [author, setAuthor] = useState(null)
  let [quoteLength, setLength] = useState(0)

  async function randomQuote() {
    const response = await fetch('https://api.quotable.io/random')
    const data = await response.json()
    setQuote(data.content)
    setAuthor(data.author)
    setLength(data.length) 
    console.log(quoteLength)
  }
  
  return (
    <div className={styles.container}>
    <header className={styles.header}>
    <h2 className={styles.headertitle}>
      <a href="\" style={{fontWeight: 700, color: '#a8a8a8 '}}>QuoteMe</a> 😊
    </h2>
    </header>
      <Head>
        <title>QuoteMe | Make your day</title>
        <meta name="description" content="Quote me random quotes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <h1 className={quoteLength > 200 ? styles.longtitle:styles.title}>
        {quote ? quote:`Welcome to ${brand}`}
      </h1>
      <h3 className={styles.author}>{ author ? `- ${author}`:null }</h3>
      <a onClick={randomQuote} className={styles.card}>
        <h2 style={{marginBottom: 0}}>Get Wisdom &rarr;</h2>
      </a>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/Jishnu-Dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by &nbsp;
          <span className={styles.footername}>
            Jishnu Raj
          </span>
        </a>
      </footer>
    </div>
  )
}