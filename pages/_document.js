// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        {/* 기본 메타태그 */}
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Curioft — 재미있는 웹 서비스를 만드는 작은 실험실."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Curioft — Curious Web Lab" />
        <meta
          property="og:description"
          content="고양이 타로 등 다양한 웹 서비스를 무료로 즐겨보세요."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://curioft.com" />
        <meta property="og:site_name" content="Curioft" />

        {/* ⭐ Google AdSense 소유권 인증 스니펫 — 최상위 도메인 검증용 */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5508089402067916"
          crossOrigin="anonymous"
        ></script>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
