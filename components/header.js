import Head from 'next/head'
import Script from 'next/script';
import { useRouter } from 'next/router'

export default function Header({pageTitle}) {
  const router = useRouter()
  let fullPageTitle = 'AndrewDragon - ' + pageTitle;
  return (
    <Head>
      <title>{fullPageTitle}</title>
    </Head>
  )
}