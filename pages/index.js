import Header from '../components/header'
import styles from '../styles/main.module.css'
import Link from 'next/link'
import 'animate.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header pageTitle="Home" />
      
      <main className={styles.main}>
        <div className={styles.head}>
          <h1 className={`${styles.title} animate__animated animate__backInDown`}>
            Andrew
          </h1>
          <h1 className={`${styles.title} ${styles.orange} animate__animated animate__delay-1s animate__fadeInRight`}>
            Dragon
          </h1>
        </div>

        <p className={`${styles.description} animate__animated animate__zoomIn animate__delay-2s`}>
          <Link href="/links">
            YouTube Streamer and Content Creator
          </Link>
        </p>
      </main>

      {/* <footer className={styles.footer}>
        
      </footer> */}
    </div>
  )
}
