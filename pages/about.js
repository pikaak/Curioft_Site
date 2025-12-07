// pages/about.js
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
        {/* 상단 캣타로 링크 제거 */}
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
              Curioft는 &quot;Curious&quot;와 &quot;Software&quot;를 합친 이름으로,
              웹을 통해 일상 속에서 편하게 즐길 수 있는 재미와 힐링의 순간을 제공하기 위한 1인 프로젝트입니다. 
              누구나 쉽게 접근 가능하면서 언제든 지친 하루의 에너지를 작게나마 충전해 돌아갈 수 있는 
              서비스를 지향합니다.
            </p>

            {/* ---- 확장된 본문 추가 시작 ---- */}
            <p>
              기술이 발전하면서 흥미를 위한 선택지도 많아졌지만, 그럴수록 우리는 스스로를 돌아보며 쉬어갈 틈을 잃고 있습니다.
              Curioft는 이러한 흐름 속에서 “작지만 의미 있는 경험”을 최대한 많은 이들에게 안겨주는 것을 목표로 합니다. 
              내 고양이에 대해 항상 궁금한 집사들을 위한 타로 리딩,
              정서적으로 교감할 수 있는 나만의 스피릿 애니멀, 그리고 가족과 함께 즐길 수 있는 교육 콘텐츠 등... 
              단순한 흥미를 넘어 현대인의 영혼을 소소하게나마 치유할 수 있는 다양한 실험을 하고 있습니다.
            </p>

            <p>
              Curioft가 추구하는 방향은 거대한 플랫폼 구축이나 복잡하고 팬시한 상업적 툴 같은 것이 아닙니다. 
              모바일로 편하게 드나들 수 있는 무료 웹 놀이터, 그리고 가볍지만 기억에 남는 순간을 만들어내는 일종의
              대명사로 누군가에게는 남을 수 있기를 꿈꿉니다.
            </p>
            {/* ---- 확장된 본문 추가 끝 ---- */}

            <h2>서비스 목록</h2>
            <ul>
              <li>EatEmAll</li>
              <li>냥이 타로 번역기</li>
              <li>내 스피릿 애니멀 찾기<li>
            </ul>

            {/* 상세 설명 추가 */}
            <p>
             각 서비스는 단순한 편의 기능을 넘어 늘 사용자가 직접 참여하고 상호작용할 수 있는 구조를 우선합니다. 
             아이가 이해하기 어려운 의학적 개념을 인터렉티브한 체험 형태로 풀어낸 게임, 
             Mystical Cats 시스템 기반의 질문 입력형 고양이 전용 타로,
             내 안에 잠자는 영혼의 동물을 찾아 대화해볼 수 있는 챗봇 등은 공통적으로 인터랙티브한 힐링 경험을 추구합니다.
            </p>

            <h2>Manifesto</h2>
            <ul>
              <li>누구나 즐길 수 있는 무료 공간을 지향합니다.</li>
              <li>불필요한 개인정보 수집을 지양합니다.</li>
            </ul>

            {/* 철학 확장 */}
            <p>
              Curioft는 가능하면 로그인이나 회원가입을 요구하지 않는 형태의
              서비스를 만듭니다. 사용자가 웹 페이지를 열자마자 바로 이용할 수 있으며, 개인정보에 대한 부담 없이 간단하게 즐길 수
              있는 환경이야말로 Curioft가 가장 중요하게 생각하는 가치입니다.
            </p>

            <h2>Contact</h2>
            <p>
              문의, 제안, 협업 요청 또는 버그 제보가 있다면 언제든 편하게
              연락해주세요.
              <br />
              <strong>curioftdayo@gmail.com</strong>
            </p>
          </div>
        </section>
      </main>

      {FOOTER}
    </>
  );
}
