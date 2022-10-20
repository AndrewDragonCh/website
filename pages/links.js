import Header from '../components/header'
import Link from 'next/link'
import styles from '../styles/main.module.css'
import 'animate.css'

export default function Error404() {
  return (
    <div className={styles.container}>
      <Header pageTitle="Links" />

      <main className={styles.main}>
        <div className={styles.head}>
          <h1 className={`${styles.title} animate__animated animate__backInDown`}>
            Social
          </h1>
          <h1 className={`${styles.title} ${styles.orange} animate__animated animate__delay-1s animate__fadeInRight`}>
            Links
          </h1>
        </div>
        <div className={`${styles.linkPageGroup} animate__animated animate__delay-2s animate__fadeInUp`}>
          <p className={`${styles.subtitle} animate__animated animate__fadeInUp animate__delay-2s`}>
            Find me on These Platforms
          </p>
          <p className={`${styles.links} animate__animated animate__zoomIn animate__delay-2s`}>
            <Link href="/" >
              My Website
            </Link>
          </p>
          <p className={`${styles.links} animate__animated animate__zoomIn animate__delay-2s`}>
            <Link href="https://go.andrewdragon.dev/f45" >
              YouTube
            </Link>
          </p>
          <p className={`${styles.links} animate__animated animate__zoomIn animate__delay-2s`}>
            <Link href="https://go.andrewdragon.dev/fyx" >
              Discord
            </Link>
          </p>
          <p className={`${styles.links} animate__animated animate__zoomIn animate__delay-2s`}>
            <Link href="https://go.andrewdragon.dev/pyd" >
              Twitter
            </Link>
          </p>
          <p className={`${styles.links} animate__animated animate__zoomIn animate__delay-2s`}>
            <Link href="https://go.andrewdragon.dev/7mw" >
              GitHub
            </Link>
          </p>
          <p className={`${styles.links} animate__animated animate__zoomIn animate__delay-2s`}>
            <Link href="https://go.andrewdragon.dev/w2o" >
              PcPartPicker
            </Link>
          </p>
        </div>
      </main>
    </div>
  )
}