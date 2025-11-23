
// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Curioft — 재미있는 심리 테스트, 게임, 챗봇을 만드는 작은 실험실."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Curioft — Curious & Soft Web Lab" />
        <meta
          property="og:description"
          content="고양이 타로 등 다양한 웹 서비스를 무료로 즐겨보세요."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://curioft.com" />
        <meta property="og:site_name" content="Curioft" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
