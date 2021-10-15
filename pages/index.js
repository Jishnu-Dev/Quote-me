import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
// import Image from 'next/image'

export default function Home() {
  let brand = 'QuoteMe'
  let [quote, setQuote] = useState(null)
  let [author, setAuthor] = useState(null)
  let loading = false

  async function randomQuote() {
    loading = true
    const response = await fetch('https://api.quotable.io/random')
    const data = await response.json()
    loading = false
    setQuote(data.content)
    setAuthor(data.author)
  }
  
  return (
    <div className={styles.container}>
      <Head>
        <title>QuoteMe | Make your day</title>
        <meta name="description" content="Quote me random quotes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
      <h2 className={styles.description}>
        <a href="\" style={{fontWeight: 700, color: '#a8a8a8 '}}>QuoteMe</a> 😊
      </h2>
      </header>
      <main className={styles.main}>
      <h1 className={styles.title}>
        {quote ? quote:`Welcome to "${brand}"`}
      </h1>
      <h3 style={{color: '#0070f3'}}>{ author ? `- ${author}`:null }</h3>
      <a onClick={randomQuote} className={styles.card}>
        <h2 style={{marginBottom: 0}}>Read &rarr;</h2>
      </a>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/Jishnu-Dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by{' '}
          <span style={{fontWeight: 800, color: '#0070f3'}} className={styles.logo}>
            Jishnu Raj
          </span>
        </a>
      </footer>
    </div>
  )
}