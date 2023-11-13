import { Analytics } from '@vercel/analytics/react';
import { Metadata, Viewport } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.andrewdragon.dev'),
  title: {
    default: 'AndrewDragon',
    template: '%s - AndrewDragon'
  },
  description: 'AndrewDragon - YouTube Streamer and Content Creator',
  generator: 'Next.js',
  applicationName: 'AndrewDragon',
  creator: 'Andrew Still',
  referrer: 'origin-when-cross-origin',
  manifest: 'https://www.andrewdragon.dev/manifest.json',
  keywords: ['youtube', 'twitch', 'twitter'],
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
    date: false,
    url: false,
  },
  twitter: {
    card: 'summary',
    title: 'AndrewDragon',
    description: 'AndrewDragon - YouTube Streamer and Content Creator',
    creator: '@AndrewDragonCh'
  },
  robots: {
    index: true,
    follow: true,
    nocache: false
  },
  openGraph: {
    title: 'AndrewDragon',
    description: 'AndrewDragon - YouTube Streamer and Content Creator',
    url: 'https://www.andrewdragon.dev/',
    siteName: 'AndrewDragon',
    type: 'website',
    locale: 'en_US'
  },
  appleWebApp: {
    title: 'AndrewDragon',
    statusBarStyle: 'default',
    startupImage: [
      '/icon-512x512.png'
    ],
  },
  icons: {
    icon: 'https://static.wyvernaere.com/favicon.ico',
    shortcut: 'https://static.wyvernaere.com/favicon.ico',
    apple: '/icon-192x192png'
  }
};

export const viewport:Viewport = {
  themeColor: 'black',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
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
