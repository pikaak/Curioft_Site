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
        타로, 게임, 편의성 툴 등을 만들고 무료 제공하는 1인 스튜디오
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
                내 고양이가 답해주는 타로, 아이와 함께하는 백혈구의 모험 etc...
                <br />
                일상 속 작은 흥미와 치유를 제공하는 웹 실험실입니다.
              </p>
            </div>
          </div>
        </section>

        {/* 현재 공개된 서비스 */}
        <section className="section section-dark">
          <div className="container">
            <h2>현재 공개된 서비스</h2>

            <div className="card-grid">
              <div className="card card-accent">
                <h3>냥이 타로 번역기</h3>
                <p>
                  &apos;우리 고양이는 날 어떻게 생각할까?&apos;  
                  알쏭달쏭한 집사들을 위한 Mystical Cats 기반 타로 리딩 사이트
                </p>

                {/* ⭐⭐ 가로 2장 이미지 배치 ⭐⭐ */}
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
                      width: '42%',    // 카드 폭의 약 40–45%
                      borderRadius: '12px',
                      border: '1px solid #d4d4d4',
                    }}
                  />
                  <img
                    src="/screenshots/cattarot2.png"
                    alt="캣타로 웹앱 스크린샷 2"
                    style={{
                      width: '42%',    // 균형 맞게 동일 비율
                      borderRadius: '12px',
                      border: '1px solid #d4d4d4',
                    }}
                  />
                </div>

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
                  다양한 서비스가 준비 중입니다.  
                  Curioft는 천천히, 꾸준히 실험을 이어갑니다.
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
