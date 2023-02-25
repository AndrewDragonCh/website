import '../styles/globals.css'
import { useEffect } from "react"
import { useRouter } from 'next/router';
import * as Fathom from 'fathom-client';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    Fathom.load('WAFSB', {
      includedDomains: ['andrewdragon.dev'],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
      if("serviceWorker" in navigator) {
        window.addEventListener("load", function () {
          navigator.serviceWorker.register("/sw.js").then(
            function (registration) {
              console.log("Service Worker registration successful with scope: ", registration.scope);
            },
            function (err) {
              console.log("Service Worker registration failed: ", err);
            }
          );
        });
      }
    }
    router.events.on('routeChangeComplete', onRouteChangeComplete);

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, [])
  return  (
    <>
      <Head>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
