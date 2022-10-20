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
        <div className={`${styles.mainbody} animate__animated animate__delay-2s animate__fadeInUp`}>
          <p className={`${styles.subtitle} animate__animated animate__fadeInUp animate__delay-2s`}>
            YouTube Streamer and Content Creator
          </p>
          <div className={`${styles.linkgroup}`}>
            <p className={`${styles.links} animate__animated animate__zoomIn animate__delay-2s`}>
              <Link href="/links">
                My Socials
              </Link>
            </p>
            {/* <p className={`${styles.links} animate__animated animate__zoomIn animate__delay-2s`}>
              <Link href="/portfolio">
                Things I've Made
              </Link>
            </p> */}
            <p className={`${styles.links} animate__animated animate__zoomIn animate__delay-2s`}>
              <Link href="/about">
                About Me
              </Link>
            </p>
          </div>
        </div>
      </main>

      {/* <footer className={styles.footer}>
        
      </footer> */}
    </div>
  )
}
