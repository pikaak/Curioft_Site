// pages/index.js
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
          궁금증 해소 캣타로
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
        재미있는 테스트, 게임 등을 실험하는 작은 웹 스튜디오.
      </p>
    </div>
  </footer>
);

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Curioft — Curious Web Lab</title>
        <meta
          name="description"
          content="Curioft는 여러가지 테스트, 게임, 챗봇 등을 무료 제공하기 위한 실험실입니다."
        />
      </Head>
      {NAV}
      <main className="site-main">
        <section className="hero-section">
          <div className="container hero-container">
            <div className="hero-text">
              <h1>Curioft — Curious & Soft Web Lab</h1>
              <p className="hero-subtitle">
                내 고양이가 직접 답해주는 타로, 우리 아이와 함께하는 게임 등.
                <br />
                누구나 부담없이 즐기고 힐링할 수 있는 웹 서비스를 만듭니다.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-light">
          <div className="container">
            <h2>Curioft가 만드는 것들</h2>
            <div className="card-grid">
              <div className="card">
                <h3>심리 테스트</h3>
                <p>
                  가볍게 즐길 수 있지만 의외로 정확해서 공유하고 싶어지는 테스트들을
                  계속 추가할 예정입니다. - 서비스 미정 -
                </p>
              </div>
              <div className="card">
                <h3>게임</h3>
                <p>
                  내가 백혈구가 된다면? 우리 몸에 침입한 세균과 싸워 면역체계를 지켜내세요! - 서비스 미정 -
                </p>
              </div>
              <div className="card">
                <h3>캐릭터 챗봇</h3>
                <p>
                  여러 세계관의 캐릭터와 나만의 경험을 쌓아보세요! - 사비스 미정 -
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-dark">
          <div className="container">
            <h2>현재 공개된 서비스</h2>
            <div className="card-grid">
              <div className="card card-accent">
                <h3>냥이 타로 번역기</h3>
                <p>
                  '우리 고양이는 날 어떻게 생각할까?' 집사들을 위한 Mystical cats 기반의
                  타로 리딩 사이트.
                </p>
                <a
                  href="https://cattarot-s897.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  지금 바로 사용해보기
                </a>
              </div>
              <div className="card">
                <h3>Coming soon…</h3>
                <p>
                  다양한 서비스가 준비 중입니다. Curioft는 천천히, 꾸준히 실험을 이어갑니다.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      {FOOTER}
    </>
  );
}
