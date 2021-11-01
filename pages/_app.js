import Head from 'next/head'

import 'styles/style.sass';

function RecipeApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Recipe Searcher</title>
        <meta name="description" content="Example application using Next.js & deployed on Vercel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default RecipeApp;
