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
        {/* 상단 캣타로 링크 제거 */}
      </nav>
    </div>
  </header>
);

const FOOTER = (
  <footer className="site-footer">
    <div className="container footer-container">
      <p>© {new Date().getFullYear()} Curioft. All rights reserved.</p>
      <p className="footer-sub">
        타로, 게임, 편의성 툴 등을 만들고 제공하는 웹 실험실
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
          content="Curioft는 작은 호기심에서 시작된 1인 웹 실험실입니다."
        />
      </Head>

      {NAV}

      <main className="site-main">
        <section className="section section-light">
          <div className="container legal-page">
            <h1>About Curioft</h1>
            <p className="legal-note">
              Curioft는 &quot;Curious&quot;와 &quot;Soft&quot;를 합친 이름으로,
              <br />
              누구나 즐길 수 있는 재미와 힐링의 경험을 실험하는 1인 스튜디오입니다.
            </p>

            <h2>개발중 서비스</h2>
            <ul>              
              <li>아이와 함께할 수 있는 과학 게임</li>
              <li>하루를 조금 더 편하게 만들어 주는 작은 도구들</li>
              <li>특정 세계관의 캐릭터를 구현한 나만의 챗봇</li>
            </ul>      

            <h2>Manifesto</h2>
            <ul>
              <li>누구나 즐길 수 있는 무료 공간을 지향합니다.</li>
              <li>불필요한 개인정보 수집을 지양합니다.</li>                          
            </ul>

            <h2>Contact</h2>
            <p>
              문의, 제안, 버그 제보
              <br />
              curioftdayo@gmail.com
            </p>        
          </div>
        </section>
      </main>

      {FOOTER}
    </>
  );
}
