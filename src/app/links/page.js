import Link from 'next/link'
import 'animate.css'

let page = "Links"

export const metadata = {
  title: `${page}`,
};

export default function Links() {
  return (
    <div className='container'>
      <main className='main'>
        <div className='head'>
          <h1 className='title animate__animated animate__backInDown'>
            Social
          </h1>
          <h1 className='title orange animate__animated animate__delay-1s animate__fadeInRight'>
            Links
          </h1>
        </div>
        <div className='mainbody animate__animated animate__delay-2s animate__fadeInUp'>
          <p className='subtitle animate__animated animate__fadeInUp animate__delay-2s'>
            Find me on These Platforms
          </p>
          <div className='linkgroup'>
            <p className='links animate__animated animate__zoomIn animate__delay-2s'>
              <Link href="/" >
                My Website
              </Link>
            </p>
            <p className='links animate__animated animate__zoomIn animate__delay-2s'>
              <Link href="https://go.andrewdragon.dev/f45" >
                YouTube
              </Link>
            </p>
            <p className='links animate__animated animate__zoomIn animate__delay-2s'>
              <Link href="https://go.andrewdragon.dev/fyx" >
                Discord
              </Link>
            </p>
            <p className='links animate__animated animate__zoomIn animate__delay-2s'>
              <Link href="https://go.andrewdragon.dev/pyd" >
                Twitter
              </Link>
            </p>
            <p className='links animate__animated animate__zoomIn animate__delay-2s'>
              <Link href="https://go.andrewdragon.dev/7mw" >
                GitHub
              </Link>
            </p>
            <p className='links animate__animated animate__zoomIn animate__delay-2s'>
              <Link href="https://go.andrewdragon.dev/w2o" >
                PcPartPicker
              </Link>
            </p>
            <p className='links animate__animated animate__zoomIn animate__delay-2s'>
              <Link href="https://go.andrewdragon.dev/zh1" >
                MyAnimeList
              </Link>
            </p>
            <p className='links animate__animated animate__zoomIn animate__delay-2s'>
              <Link href="https://go.andrewdragon.dev/5x6" >
                MangaDex
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}