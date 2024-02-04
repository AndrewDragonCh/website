import Link from 'next/link'
import 'animate.css'
import { Box } from '@mui/system';

let page = "About"

export const metadata = {
  title: `${page}`,
};

export default function About() {
  return (
      <main>
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" minHeight="90vh">
          <Box display="flex" flexDirection="row">
            <h1 className='title animate__animated animate__backInDown'>
              About
            </h1>
            <h1 className='title orange animate__animated animate__delay-1s animate__fadeInRight'>
              Me
            </h1>
          </Box>
          <Box display="flex" flexDirection="column" className='mainbody animate__animated animate__delay-2s animate__fadeInUp'>
            <h2 className='subtitle animate__animated animate__fadeInUp animate__delay-2s'>
              Hi, I&#39;m AndrewDragon
            </h2>
          </Box>
        </Box>
      </main>
  )
}