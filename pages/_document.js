import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="AndrewDragon - YouTube Streamer and Content Creator" />
        <meta name="keywords" content="youtube, twitch, twitter" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' />
        <meta name="language" content="English" />
        <link rel="icon" href="https://cdn.andrewdragon.dev/favicon.ico" />
        <meta name='application-name' content='AndrewDragon' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='AndrewDragon' />
        <meta name='apple-touch-icon' content='/icon-192x192.png' />
        <meta name='description' content='AndrewDragon - YouTube Streamer and Content Creator' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='msapplication-TileColor' content='#FFFFFF' />
        <meta name='msapplication-tap-highlight' content='no' />
        <meta name='theme-color' content='#F46904' />
        <link rel='manifest' href='/manifest.webmanifest' />
        <link rel='shortcut icon' href='https://cdn.andrewdragon.dev/favicon.ico' />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:url' content='https://www.andrewdragon.dev/' />
        <meta name='twitter:title' content='AndrewDragon' />
        <meta name='twitter:description' content='AndrewDragon - YouTube Streamer and Content Creator' />
        <meta name='twitter:creator' content='@AndrewDragonCh' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='AndrewDragon' />
        <meta property='og:description' content='AndrewDragon - YouTube Streamer and Content Creator' />
        <meta property='og:site_name' content='AndrewDragon' />
        <meta property='og:url' content='https://www.andrewdragon.dev/' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}