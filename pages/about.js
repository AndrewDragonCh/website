import Header from '../components/header'
import Link from 'next/link'
import styles from '../styles/main.module.css'
import 'animate.css'

export default function Error404() {
  return (
    <div className={styles.container}>
      <Header pageTitle="About" />

      <main className={styles.main}>
        <div className={styles.head}>
          <h1 className={`${styles.title} animate__animated animate__backInDown`}>
            About
          </h1>
          <h1 className={`${styles.title} ${styles.orange} animate__animated animate__delay-1s animate__fadeInRight`}>
            Me
          </h1>
        </div>
        <div className={`${styles.mainbody} animate__animated animate__delay-2s animate__fadeInUp`}>
          <p className={`${styles.subtitle} animate__animated animate__fadeInUp animate__delay-2s`}>
            Hi, I&#39;m AndrewDragon
          </p>
        </div>
      </main>
    </div>
  )
}