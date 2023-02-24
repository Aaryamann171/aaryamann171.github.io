import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Aaryamann</title>
        <link rel="shortcut icon" href="/favicon_console.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>      
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
