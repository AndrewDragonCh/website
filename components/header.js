import Head from 'next/head'

export default function Header({pageTitle}) {
  let fullPageTitle = 'AndrewDragon - ' + pageTitle;
  return (
    <Head>
      <title>{fullPageTitle}</title>
      <meta property='og:title' content={`${fullPageTitle}`} />
      <meta name='twitter:title' content={`${fullPageTitle}`} />
    </Head>
  )
}