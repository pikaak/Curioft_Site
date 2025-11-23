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
        재미있는 심리 테스트, 게임, 챗봇을 실험하는 작은 웹 스튜디오.
      </p>
    </div>
  </footer>
);

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Curioft — AI 기반 심리 서비스 실험실</title>
        <meta
          name="description"
          content="Curioft는 재미있는 심리 테스트, 게임, AI 기반 컨셉 챗봇 등을 만들어 방문자에게 무료로 제공하는 작은 웹 실험실입니다."
        />
      </Head>
      {NAV}
      <main className="site-main">
        <section className="hero-section">
          <div className="container hero-container">
            <div className="hero-text">
              <h1>Curioft — Curious & Soft Web Lab</h1>
              <p className="hero-subtitle">
                재미있는 심리 테스트, 작은 게임, AI를 활용한 챗봇까지.
                <br />
                누구나 부담없이 즐기고, 웃고, 생각해볼 수 있는 실험적인 웹 서비스를 만듭니다.
              </p>
              <div className="hero-actions">
                <a
                  href="https://cattarot-s897.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  캣 타로 체험하기
                </a>
                <a href="/about" className="btn btn-secondary">
                  Curioft 소개 보기
                </a>
              </div>
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
                  가볍게 즐길 수 있지만, 의외로 정확해서 공유하고 싶어지는 심리 테스트들을
                  계속 추가할 예정입니다. - 서비스 미정 -
                </p>
              </div>
              <div className="card">
                <h3>게임</h3>
                <p>
                  만약 내가 백혈구가 된다면? 스킬을 업그레이드하며 우리 몸에 침입한 각종 세균과 바이러스들을 무찔러보세요! - 서비스 미정 -
                </p>
              </div>
              <div className="card">
                <h3>AI 챗봇</h3>
                <p>
                  여러 세계관의 인물과 대화해보세요! - 사비스 미정 -
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
                  우리 고양이는 날 어떻게 생각할까? 어디 아픈 데는 없을까? "보고싶었어, 집사!" 당신의 반려묘를 위한 타로 카드 리딩 앱
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
