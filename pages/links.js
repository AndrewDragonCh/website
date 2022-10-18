import Header from '../components/header'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../styles/main.module.css'

export default function Error404() {
  const router = useRouter()
  return (
    <div className={styles.container}>
      <Header pageTitle="Links" />

      <main className={styles.main}>
        <div className={styles.head}>
          <h1 className={styles.title}>
            The
          </h1>
          <h1 className={`${styles.title} ${styles.orange}`}>
            Links
          </h1>
        </div>

        <p className={styles.description}>
          <Link href="/" >
            My Website
          </Link>
        </p>
        <p className={styles.description}>
          <Link href="https://go.andrewdragon.dev/f45" >
            YouTube
          </Link>
        </p>
        <p className={styles.description}>
          <Link href="https://go.andrewdragon.dev/fyx" >
            Discord
          </Link>
        </p>
        <p className={styles.description}>
          <Link href="https://go.andrewdragon.dev/pyd" >
            Twitter
          </Link>
        </p>
        <p className={styles.description}>
          <Link href="https://go.andrewdragon.dev/7mw" >
            GitHub
          </Link>
        </p>
        <p className={styles.description}>
          <Link href="https://go.andrewdragon.dev/w2o" >
            PcPartPicker
          </Link>
        </p>
      </main>
    </div>
  )
}