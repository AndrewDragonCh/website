import Header from '../components/header'
import styles from '../styles/main.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header pageTitle="Home" />
      
      <main className={styles.main}>
        <div className={styles.head}>
          <h1 className={styles.title}>
            Andrew
          </h1>
          <h1 className={`${styles.title} ${styles.orange}`}>
            Dragon
          </h1>
        </div>

        <p className={styles.description}>
          <a href='https://links.andrewdragon.dev/' target='_blank' rel='noopener noreferrer'>YouTube Streamer and Content Creator</a>
        </p>
      </main>

      {/* <footer className={styles.footer}>
        
      </footer> */}
    </div>
  )
}
