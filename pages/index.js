// pages/index.js
import Head from 'next/head';

const NAV = (
  <header className="site-header">
    <div className="container nav-container">
      <div className="logo">
        <span style={{ cursor: 'default' }}>Curioft</span>
      </div>
      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/privacy">Privacy</a>
        <a href="/terms">Terms</a>
      </nav>
    </div>
  </header>
);

const FOOTER = (
  <footer className="site-footer">
    <div className="container footer-container">
      <p>© {new Date().getFullYear()} Curioft. All rights reserved.</p>
      <p className="footer-sub">무단 도용 및 재배포 금지</p>
    </div>
  </footer>
);

export default function HomePage() {
  return (
    <>
      <Head>
        <title>웹으로 즐기는 나만의 힐링 놀이터</title>
        <meta name="description" content="웹에서 즐기는 색다른 힐링." />

        {/* IBM Plex Sans KR 불러오기 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      {NAV}

      <main className="site-main">
        <section className="hero-section">
          <div className="container hero-container">
            <div className="hero-text">

              {/* ⭐ 위: subtitle 먼저 */}
              <p className="hero-subtitle">
                웹으로 즐기는 나만의 힐링 놀이터
              </p>

              {/* ⭐ 아래: h1 */}
              <h1>CURIONEST</h1>

            </div>
          </div>
        </section>

        {/* 현재 공개된 서비스 */}
        <section className="section section-dark">
          <div className="container">
            <h2>오늘은 뭘 해볼까?</h2>

            <div className="card-grid">
              <div className="card card-accent">
                <h3>냥이 타로 번역기</h3>
                <p>우리 고양이는 날 어떻게 생각할까? 뭘 말하고 싶은 걸까?</p>

                <div
                  style={{
                    margin: '1rem 0 1.2rem',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '1rem',
                  }}
                >
                  <img
                    src="/screenshots/cattarot1.png"
                    alt="캣타로 웹앱 스크린샷 1"
                    style={{
                      width: '42%',
                      borderRadius: '12px',
                      border: '1px solid #d4d4d4',
                    }}
                  />
                  <img
                    src="/screenshots/cattarot2.png"
                    alt="캣타로 웹앱 스크린샷 2"
                    style={{
                      width: '42%',
                      borderRadius: '12px',
                      border: '1px solid #d4d4d4',
                    }}
                  />
                </div>

                <div style={{ textAlign: 'center' }}>
                  <a
                    href="https://cattarot.curioft.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    이동
                  </a>
                </div>
              </div>

              <div
                className="card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  minHeight: '280px',
                }}
              >
                <h3>Coming soon…</h3>
                <p>
                  다양한 서비스가 준비 중입니다.
                  <br />
                  조금만 기다려주세요.
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
