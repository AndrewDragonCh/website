import Head from 'next/head'
import Script from 'next/script';
import { useRouter } from 'next/router'

export default function Header({pageTitle}) {
  const router = useRouter()
  let fullPageTitle = 'AndrewDragon - ' + pageTitle;
  return (
    <div>
      <Head>
        <title>{fullPageTitle}</title>
        <meta name="title" content={fullPageTitle} />
        <meta name="description" content="AndrewDragon - YouTube Streamer and Content Creator" />
        <meta name="keywords" content="youtube, twitch, twitter" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
        <meta name="language" content="English" />
        <link rel="icon" href="https://cdn.andrewdragon.dev/favicon.ico" />
        <meta name='application-name' content='AndrewDragon' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='AndrewDragon' />
        <meta name='description' content='AndrewDragon - YouTube Streamer and Content Creator' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='msapplication-TileColor' content='#FFFFFF' />
        <meta name='msapplication-tap-highlight' content='no' />
        <meta name='theme-color' content='#F46904' />
        <link rel='manifest' href='/manifest.webmanifest' />
        <link rel='shortcut icon' href='https://cdn.andrewdragon.dev/favicon.ico' />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:url' content='https://www.andrewdragon.dev' />
        <meta name='twitter:title' content='AndrewDragon' />
        <meta name='twitter:description' content='AndrewDragon - YouTube Streamer and Content Creator' />
        <meta name='twitter:creator' content='@AndrewDragonCh' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='AndrewDragon' />
        <meta property='og:description' content='AndrewDragon - YouTube Streamer and Content Creator' />
        <meta property='og:site_name' content='AndrewDragon' />
        <meta property='og:url' content='https://www.andrewdragon.dev' />
      </Head>
      <div className="h-14 p-4 flex flex-row justify-between items-center bg-[#202020]">
        
      </div>
    </div>
  )
}