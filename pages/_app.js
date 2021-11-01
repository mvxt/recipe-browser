import Head from 'next/head'
import { config } from "@fortawesome/fontawesome-svg-core";
import '@fortawesome/fontawesome-svg-core/styles.css';

import 'styles/style.sass';

config.autoAddCss = false;

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
