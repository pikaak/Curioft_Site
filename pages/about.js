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
        타로, 게임, 편의성 툴 등을 만들고 무료 제공하는 웹 실험실
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
              웹에서 만나는 작은 재미와 부드러운 힐링을 실험하는 1인 스튜디오입니다.
            </p>

            <h2>무엇을 만들까요?</h2>
            <ul>
              <li>반려동물과 관련된 타로・심리 테스트</li>
              <li>가볍게 즐길 수 있는 웹 기반 게임</li>
              <li>하루를 조금 더 편하게 만들어 주는 작은 도구들</li>
              <li>AI를 활용한 컨셉 챗봇 및 실험적 인터랙션</li>
            </ul>

            <h2>Curioft의 방향</h2>
            <p>
              Curioft는 거대한 서비스를 목표로 하기보다는,
              <br />
              &quot;지금의 나&quot;와 &quot;조금 지친 일상&quot;에 도움이 되는,
              소규모이지만 정성이 담긴 웹 서비스를 천천히 쌓아가는 것을 목표로 합니다.
            </p>
            <p>
              직접 사용해보고, 주변 사람들에게 보여줄 수 있을 정도의 퀄리티를 기준으로,
              <br />
              차근차근 기능을 개선하고, 피드백을 반영해 나갈 예정입니다.
            </p>

            <h2>운영 방식</h2>
            <ul>
              <li>현재는 로그인이 필요 없는 가벼운 웹 실험이 중심입니다.</li>
              <li>사용자에게 불필요한 개인정보를 요구하지 않는 방향을 우선합니다.</li>
              <li>광고, 후원, 유료 기능 등은 향후 필요 시 신중하게 도입을 검토합니다.</li>
            </ul>

            <h2>연락 및 피드백</h2>
            <p>
              서비스와 관련된 피드백, 개선 제안, 버그 제보 등은
              <br />
              향후 별도의 안내 페이지 또는 연락 수단을 통해 받게 될 예정입니다.
            </p>
            <p className="legal-disclaimer">
              아직은 작은 실험실이지만, 방문자에게 &quot;한 번 더 와보고 싶은 공간&quot;이
              될 수 있도록 천천히, 꾸준히 만들어가겠습니다.
            </p>
          </div>
        </section>
      </main>

      {FOOTER}
    </>
  );
}
