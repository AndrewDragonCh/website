import Header from '../components/header'
import styles from '../styles/main.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header pageTitle="Home" />
      
      <main className={styles.main}>
        <div className={styles.head}>
          <h1 className={`${styles.title} animate__animated animate__backInDown`}>
            Andrew
          </h1>
          <h1 className={`${styles.title} ${styles.orange} animate__animated animate__delay-2s animate__slideInRight`}>
            Dragon
          </h1>
        </div>

        <p className={styles.description}>
          <Link href="/links" >
            YouTube Streamer and Content Creator
          </Link>
          {/* <a href='https://links.andrewdragon.dev/' target='_blank' rel='noopener noreferrer'>YouTube Streamer and Content Creator</a> */}
        </p>
      </main>

      {/* <footer className={styles.footer}>
        
      </footer> */}
    </div>
  )
}
