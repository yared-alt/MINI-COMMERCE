import { Html, Head, Main, NextScript } from 'next/document';

export default function document() {
    return (
      <Html>
        <Head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Bellefair&family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&family=Roboto+Slab:wght@100..900&display=swap');
        </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }