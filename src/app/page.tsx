import Link from 'next/link'
import 'animate.css'

export default function Home() {
  return (
    <div className='container'>
      <main className='main'>
        <div className='head'>
          <h1 className='title animate__animated animate__backInDown'>
            Andrew
          </h1>
          <h1 className='title orange animate__animated animate__delay-1s animate__fadeInRight'>
            Dragon
          </h1>
        </div>
        <div className='mainbody animate__animated animate__delay-2s animate__fadeInUp'>
          <p className='subtitle animate__animated animate__fadeInUp animate__delay-2s'>
            YouTube Streamer and Content Creator
          </p>
          <div className='linkgroup'>
            <p className='links animate__animated animate__zoomIn animate__delay-2s'>
              <Link href="/links">
                My Socials
              </Link>
            </p>
            <p className='links animate__animated animate__zoomIn animate__delay-2s'>
              <Link href="/about">
                About Me
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
