import Header from '../components/header'
import { useRouter } from 'next/router'
import styles from '../styles/main.module.css'

export default function Error404() {
  const router = useRouter()
  return (
    <div className={styles.container}>
      <Header pageTitle="Error 500" />

      <main className={styles.main}>
        <div className={styles.head}>
          <h1 className={styles.title}>
            Error
          </h1>
          <h1 className={`${styles.title} ${styles.orange}`}>
            500
          </h1>
        </div>

        <p onClick={() => router.push('/')} className={`${styles.description} ${styles.link}`}>
          Server-side error occurred
        </p>
      </main>
    </div>
  )
}