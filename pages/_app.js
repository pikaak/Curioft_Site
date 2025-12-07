// pages/_app.js
import Head from 'next/head';
import '../styles/globals.css';
import '../styles/layout.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Google AdSense Ownership Verification */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5508808494020679"
          crossOrigin="anonymous"
        ></script>
      </Head>

      <Component {...pageProps} />
    </>
  );
}
