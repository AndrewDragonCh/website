import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="AndrewDragon - YouTube Streamer and Content Creator" />
        <meta name="keywords" content="youtube, twitch, twitter" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name='application-name' content='AndrewDragon' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='AndrewDragon' />
        <link rel='apple-touch-icon' href='/icon-192x192.png' />
        <meta name='description' content='AndrewDragon - YouTube Streamer and Content Creator' />
        <meta name='format-detection' content='telephone=no' />
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
        <script
          dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PWGKXT9');</script>`,
          }} />
      </Head>
      <body>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FX61WB9PER"></script>
        <Main />
        <NextScript />
        <script dangerouslySetInnerHTML={{
          __html: `<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PWGKXT9" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`,
        }} />
        <script id="statcounter-config" strategy="afterInteractive"
          dangerouslySetInnerHTML={{
          __html: `
          var sc_project=12808997;
          var sc_invisible=1;
          var sc_security="25afffe2";`
          }} />
        <script id="statcounter-script" strategy="afterInteractive"
        src="https://www.statcounter.com/counter/counter.js" async />
        <noscript id="statcounter-noscript">
          <div className="statcounter">
            <a title="Web Analytics" href="https://statcounter.com/" target="_blank"
            rel="noreferrer">
              <img className="statcounter"
              src="https://c.statcounter.com/12808997/0/25afffe2/1/" alt="Web Analytics"
              referrerPolicy="no-referrer-when-downgrade" />
            </a>
          </div>
        </noscript>
      </body>
    </Html>
  )
}