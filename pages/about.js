
// pages/about.js
import Head from 'next/head';

const NAV = (
  <header className="site-header">
    <div className="container nav-container">
      <div className="logo">
        <a href="/">Curioft</a>
      </div>
      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/privacy">Privacy</a>
        <a href="/terms">Terms</a>
        <a
          href="https://cattarot-s897.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-link"
        >
          캣 타로 웹앱
        </a>
      </nav>
    </div>
  </header>
);

const FOOTER = (
  <footer className="site-footer">
    <div className="container footer-container">
      <p>© {new Date().getFullYear()} Curioft. All rights reserved.</p>
      <p className="footer-sub">
        재미있는 심리 테스트, 게임, AI 챗봇을 실험하는 작은 웹 스튜디오.
      </p>
    </div>
  </footer>
);

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About — Curioft</title>
        <meta
          name="description"
          content="Curioft는 재미있는 심리 테스트, 작은 게임, AI 기반 컨셉 챗봇을 만드는 1인/소규모 웹 실험실입니다."
        />
      </Head>
      {NAV}
      <main className="site-main">
        <section className="section section-light">
          <div className="container">
            <h1>About Curioft</h1>
            <p>
              Curioft는 &quot;Curious&quot;와 &quot;Soft&quot;를 합쳐 만든 이름으로, 가볍게
              궁금해하고, 부드럽게 즐길 수 있는 웹 서비스를 만들고자 시작된 작은 실험실입니다.
            </p>
            <p>
              이곳에서 만들어지는 것들은 대부분
              <strong> 심리 테스트, 소규모 웹 게임, AI를 활용한 컨셉 챗봇 </strong>
              형태를 하고 있습니다. 거창한 목표보다는, 일상 속에서 잠깐 웃고 생각해볼 수
              있는 경험을 제공하는 것을 중요하게 생각합니다.
            </p>
            <p>
              현재 공개된 서비스로는 반려묘를 위한 타로 리딩 컨셉의
              <strong> 캣 타로 웹앱 </strong>
              이 있으며, 앞으로도 천천히 새로운 실험들을 추가해 나갈 예정입니다.
            </p>

            <h2>Curioft가 지키려는 것들</h2>
            <ul>
              <li>가볍게 즐길 수 있지만, 대충 만들지 않기</li>
              <li>과도한 개인정보 수집 없이 서비스 제공하기</li>
              <li>광고가 서비스 경험을 심하게 해치지 않도록 절제하기</li>
            </ul>

            <h2>연락</h2>
            <p>
              서비스와 관련된 문의, 제안, 버그 제보 등은 추후 별도의 연락 수단을
              공개할 예정입니다.
            </p>
          </div>
        </section>
      </main>
      {FOOTER}
    </>
  );
}
