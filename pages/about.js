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
              웹을 통해 일상 속의 힐링을 제공하기 위한 1인 프로젝트입니다. <br/> 
              어디서나 쉽게 접근 가능하면서 지친 하루의 에너지를 충전해 돌아갈 수 있는 콘텐츠를 추구합니다.
            </p>

            <p className="legal-note">
              기술이 발전하면서 흥미를 위한 선택지도 많아졌지만, 그럴수록 우리는 스스로 돌아보고 쉬어갈 틈을 잃고 있습니다. <br/>
              Curioft는 이러한 흐름 속에서 “작지만 의미 있는 순간”을 최대한 많은 분들께 안겨드리는 것을 목표로 합니다. <br/> 
              <br/> 내 고양이의 조그만 머릿속이 궁금한 집사들을 위한 전용 펫타로,
              정서적으로 교감할 수 있는 나만의 스피릿 애니멀, 그리고 가족과 함께 즐길 수 있는 교육 콘텐츠 등... 
              단순한 흥미를 넘어 현대인의 영혼을 소소하게나마 치유할 수 있는 다양한 실험을 진행하고 있습니다.
            </p>

            <p>
              Curioft가 꿈꾸는 방향은 거대한 플랫폼 구축이나 복잡하고 팬시한 상업적 툴 같은 것이 아닙니다. 
              PC 및 모바일을 통해 간편하게 즐길 수 있는 '무료 웹 놀이터'를 꿈꾸고 있습니다.
            </p>
            {/* ---- 확장된 본문 추가 끝 ---- */}

            <h2>놀이터 목록</h2>
            <ul>
              <li>EatEmAll</li>
              <li>냥이 타로 번역기</li>
              <li>내 스피릿 애니멀 찾기</li> {/* ← 여기 오류 수정됨 */}
            </ul>

            {/* 상세 설명 추가 */}
            <p>
              모든 콘텐츠는 공통적으로 사용자가 참여하고 상호작용할 수 있는 구조를 우선합니다. <br/>
              <br/> 아이가 이해하기 어려운 의학적 개념을 몸 안의 백혈구가 되어 체험해보는 형태로 풀어낸 2D 게임, 
              Mystical Cats 시스템 기반으로 질문을 입력하면 고양이의 입장에서 직접 리딩해주는 타로,
              내 안에 잠자는 영혼의 동물을 찾아 대화해볼 수 있는 경험 등이 여러분을 기다리고 있습니다.
            </p>

            <h2>핵심가치</h2>
            <ul>
              <li>누구나 즐길 수 있는 무료 공간을 지향합니다.</li>
              <li>불필요한 개인정보 수집을 지양합니다.</li>
            </ul>

            {/* 철학 확장 */}
            <p>
              Curioft는 처음부터 로그인이나 회원가입을 요구하지 않는 형태로만 제작에 나섭니다. <br/> 
              <br/>웹 페이지를 여는 즉시 서비스 사용이 가능하며, 언제든 부담 없이 이용할 수 있는 환경의 유지는 Curioft가 가장 
              중요하게 생각하는 가치입니다.
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
