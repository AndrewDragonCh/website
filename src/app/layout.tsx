import { Analytics } from '@vercel/analytics/react';
import './globals.css'
import Script from 'next/script'

export const metadata = {
  title: {
    default: 'AndrewDragon',
    template: '%s - AndrewDragon'
  },
  generator: 'Next.js',
  applicationName: 'AndrewDragon',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'dark',
  formatDetection: {
    email: 'no',
    address: 'no',
    telephone: 'no',
  },
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="AndrewDragon - YouTube Streamer and Content Creator" />
        <meta name="keywords" content="youtube, twitch, twitter" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='AndrewDragon' />
        <link rel='apple-touch-icon' href='/icon-192x192.png' />
        <meta name='description' content='AndrewDragon - YouTube Streamer and Content Creator' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='msapplication-TileColor' content='#FFFFFF' />
        <meta name='msapplication-tap-highlight' content='no' />
        <meta name='theme-color' content='#F46904' />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:url' content='https://www.andrewdragon.dev/' />
        <meta name='twitter:description' content='AndrewDragon - YouTube Streamer and Content Creator' />
        <meta name='twitter:creator' content='@AndrewDragonCh' />
        <meta property='og:type' content='website' />
        <meta property='og:description' content='AndrewDragon - YouTube Streamer and Content Creator' />
        <meta property='og:site_name' content='AndrewDragon' />
        <meta property='og:url' content='https://www.andrewdragon.dev/' />
        <link rel="icon" href="https://cdn.andrewdragon.dev/favicon.ico" />
        <link rel='shortcut icon' href='https://cdn.andrewdragon.dev/favicon.ico' />
        <link rel='manifest' href='/manifest.webmanifest' />
        <Script id='google-tag-manager'>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PWGKXT9');`}
        </Script>
      </head>
      <body>
        {children}
        <Script id='google-tag-manager' src='https://www.googletagmanager.com/gtag/js?id=G-FX61WB9PER' strategy='lazyOnload' />
        <noscript dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PWGKXT9"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }} />
        <Analytics />
      </body>
    </html>
  )
}
