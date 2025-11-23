
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
          냥이 타로 번역기
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
        힐링을 테마로 여러가지 웹 서비스를 실험하고 있습니다.
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
          content="Curioft는 일상 속의 재미를 추구합니다."
        />
      </Head>
      {NAV}
      <main className="site-main">
        <section className="section section-light">
          <div className="container">
            <h1>About Curioft</h1>
            <p>
              Curioft는 &quot;Curious&quot;와 &quot;Software&quot;를 합쳐 만든 이름으로, 우리의
              작은 궁금증들을 해소하거나 마음 속 상처를 치유할 수 있는 서비스를 꿈꾸며 시작되었습니다.
            </p>
            <p>
              이곳에서 만들어지는 것들은 크게
              <strong> 일상 속에서 잠깐 힐링할 수 있는 경험 </strong>
              을 제공하고자 합니다.
            </p>
            <p>
              현재 공개된 서비스로는 반려묘를 위한 타로 리딩 서비스
              <strong> 냥이 타로 번역기 </strong>
              가 있으며, 앞으로도 천천히 새로운 실험들을 추가해 나갈 예정입니다.
            </p>

            <h2>핵심가치</h2>
            <ul>
              <li>세상에 없던 서비스</li>
              <li>과도한 개인정보 수집 지양</li>
              <li>일상 속 재미와 힐링</li>
            </ul>

            <h2>Contanct</h2>
            <p>
              서비스 문의, 제안, 버그 제보: curioftdayo@gmail.com
            </p>
          </div>
        </section>
      </main>
      {FOOTER}
    </>
  );
}
