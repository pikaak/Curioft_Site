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
        {/* 상단 캣타로 링크 제거됨 */}
      </nav>
    </div>
  </header>
);

const FOOTER = (
  <footer className="site-footer">
    <div className="container footer-container">
      <p>© {new Date().getFullYear()} Curioft. All rights reserved.</p>
      <p className="footer-sub">
        타로, 게임, 편의성 툴 등을 만들고 무료 제공하는 웹 실험실
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
          content="웹에서 만나는 재미와 힐링."
        />
      </Head>

      {NAV}

      <main className="site-main">
        <section className="hero-section">
          <div className="container hero-container">
            <div className="hero-text">
              <h1>Curioft — Curious Web Lab</h1>
              <p className="hero-subtitle">
                내 고양이가 답해주는 타로, 아이와 함께하는 백혈구의 모험 etc... 일상 속 작은 흥미와 치유의 순간을 꿈꿉니다.
              </p>
            </div>
          </div>
        </section>

        {/* 현재 공개된 서비스 */}
        <section className="section section-dark">
          <div className="container">
            <h2>공개된 서비스</h2>

            <div className="card-grid">

              {/* 왼쪽: 냥이 타로 번역기 카드 */}
              <div className="card card-accent">
                <h3>냥이 타로 번역기</h3>
                <p>
                  '우리 고양이는 날 어떻게 생각할까?', '말하고 싶은 게 있나?' 냥님의 속마음을 번역해드립니다
                </p>

                {/* 가로 배치된 스크린샷 */}
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

                {/* 버튼 중앙 정렬 */}
                <div style={{ textAlign: 'center' }}>
                  <a
                    href="https://cattarot-s897.onrender.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    이동
                  </a>
                </div>
              </div>

              {/* 오른쪽: Coming soon 카드 — 완전 중앙 정렬 */}
              <div
                className="card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center', // 세로 중앙
                  alignItems: 'center',     // 가로 중앙
                  textAlign: 'center',
                  minHeight: '280px',
                }}
              >
                <h3>Coming soon…</h3>
                <p>
                  다양한 서비스가 준비 중입니다.
                  <br />
                  Curioft는 천천히, 꾸준히 상상을 현실로 이어갑니다.
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
