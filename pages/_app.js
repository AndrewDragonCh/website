import '../styles/globals.css'
import { useEffect } from "react"
import { useRouter } from 'next/router';
import * as Fathom from 'fathom-client';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    Fathom.load('WAFSB', {
      includedDomains: ['stats.andrewdragon.dev'],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    router.events.on('routeChangeComplete', onRouteChangeComplete);

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, [router.events])
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
