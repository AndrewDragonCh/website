import Link from 'next/link'
import 'animate.css'

export default function Error500() {
  return (
    <div className='container'>
      <main className='main'>
        <div className='head'>
          <h1 className='title animate__animated animate__backInDown'>
            Error
          </h1>
          <h1 className='title orange animate__animated animate__delay-1s animate__fadeInRight'>
            500
          </h1>
        </div>
        <div className='mainbody animate__animated animate__delay-2s animate__fadeInUp'>
          <p className='subtitle animate__animated animate__fadeInUp animate__delay-2s'>
            <Link href="/" >
              Page Not Found
            </Link>
          </p>
        </div>
      </main>
    </div>
  )
}