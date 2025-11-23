// pages/terms.js
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
        재미있는 심리 테스트, 게임, AI 챗봇을 실험하는 작은 웹 스튜디오.
      </p>
    </div>
  </footer>
);

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms of Service — Curioft</title>
        <meta name="description" content="Curioft 이용약관 안내." />
      </Head>
      {NAV}
      <main className="site-main">
        <section className="section section-light">
          <div className="container legal-page">
            <h1>이용약관</h1>
            <p className="legal-note">
              본 이용약관은 Curioft(이하 &quot;회사&quot;)가 제공하는 웹 서비스
              (curioft.com 및 관련 서브도메인, 이하 &quot;서비스&quot;)의 이용 조건 및 절차,
              회사와 이용자의 권리·의무 및 책임 사항 등을 규정합니다.
            </p>

            <h2>제1조 (목적)</h2>
            <p>
              본 약관은 이용자가 회사가 제공하는 서비스(심리 테스트, 게임, AI 챗봇 등)를
              이용함에 있어 회사와 이용자 간의 권리와 의무, 책임 사항 및 기타 필요한 사항을
              규정함을 목적으로 합니다.
            </p>

            <h2>제2조 (약관의 효력 및 변경)</h2>
            <ul>
              <li>본 약관은 서비스 화면에 게시하거나 기타의 방법으로 공지함으로써 효력이 발생합니다.</li>
              <li>
                회사는 관련 법령을 위배하지 않는 범위에서 약관을 개정할 수 있으며, 약관을
                개정하는 경우 개정 내용과 적용 일자를 서비스 내에 공지합니다.
              </li>
              <li>
                이용자가 개정 약관의 효력 발생일 이후에도 서비스를 계속 이용하는 경우, 개정된
                약관에 동의한 것으로 간주됩니다.
              </li>
            </ul>

            <h2>제3조 (용어의 정의)</h2>
            <p>본 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
            <ul>
              <li>
                &quot;서비스&quot;: 회사가 제공하는 웹 기반 콘텐츠 및 기능 일체 (심리 테스트,
                게임, AI 챗봇 등)
              </li>
              <li>
                &quot;이용자&quot;: 본 약관에 따라 서비스에 접속하여 회사가 제공하는 콘텐츠를
                이용하는 모든 자
              </li>
            </ul>

            <h2>제4조 (서비스의 제공 및 변경)</h2>
            <ul>
              <li>회사는 이용자에게 다음과 같은 서비스를 제공합니다.</li>
              <ul>
                <li>웹 기반 심리 테스트 및 간단한 게임</li>
                <li>AI 기술을 활용한 컨셉 챗봇</li>
                <li>기타 회사가 추가로 개발하거나 제공하는 서비스</li>
              </ul>
              <li>
                회사는 서비스 운영상 또는 기술상의 필요에 따라 서비스의 내용을 변경하거나
                중단할 수 있습니다. 중요한 변경 사항은 사전에 서비스 내 공지를 통해 안내합니다.
              </li>
            </ul>

            <h2>제5조 (서비스 이용의 기본 규칙)</h2>
            <ul>
              <li>이용자는 본 약관 및 관련 법령을 준수하여 서비스를 이용해야 합니다.</li>
              <li>
                이용자는 서비스 이용과 관련하여 다음 각 호의 행위를 해서는 안 됩니다.
                <ul>
                  <li>타인의 정보를 도용하거나 허위 정보를 입력하는 행위</li>
                  <li>서비스를 비정상적인 방법으로 이용하거나 과도한 트래픽을 유발하는 행위</li>
                  <li>서비스의 소스 코드, 보안 등을 침해하거나 시도하는 행위</li>
                  <li>타인의 명예를 훼손하거나 불쾌감을 유발하는 콘텐츠를 게시하는 행위</li>
                  <li>법령에 위반되거나 공공질서 및 미풍양속에 반하는 행위</li>
                </ul>
              </li>
            </ul>

            <h2>제6조 (지적재산권)</h2>
            <ul>
              <li>
                서비스 내에서 제공되는 모든 콘텐츠(텍스트, 이미지, 일러스트, UI 등)에 대한
                저작권 및 기타 지적재산권은 회사 또는 정당한 권리자에게 귀속됩니다.
              </li>
              <li>
                이용자는 회사의 사전 서면 동의 없이 서비스 내 콘텐츠를 복제, 배포, 전송, 2차
                저작물 작성 등으로 이용할 수 없습니다.
              </li>
            </ul>

            <h2>제7조 (광고 및 제휴)</h2>
            <ul>
              <li>
                회사는 서비스 내에 배너 광고, 링크 광고 등 다양한 형태의 광고를 게재할 수
                있습니다.
              </li>
              <li>
                서비스에 포함된 광고 또는 제3자가 제공하는 서비스 링크를 통해 접속한 외부
                웹사이트에서 제공되는 정보, 상품, 서비스 등에 대해서는 회사가 책임을 지지
                않습니다.
              </li>
            </ul>

            <h2>제8조 (서비스 이용의 제한 및 중지)</h2>
            <ul>
              <li>
                회사는 이용자가 본 약관을 위반하거나 서비스 운영에 지장을 초래하는 경우, 서비스
                이용을 제한하거나 중지할 수 있습니다.
              </li>
              <li>
                서비스 제공이 불가피하게 중단되는 경우, 회사는 가능한 범위 내에서 사전에 이용자에게
                공지합니다.
              </li>
            </ul>

            <h2>제9조 (책임의 제한)</h2>
            <ul>
              <li>
                회사는 무료로 제공되는 서비스와 관련하여, 관련 법령에 특별한 규정이 없는 한
                이용자에게 별도의 손해배상 책임을 지지 않습니다.
              </li>
              <li>
                회사는 서비스에서 제공하는 심리 테스트 결과, AI 챗봇 답변, 게임 결과 등이
                의학적/전문적 조언을 대체하지 않으며, 그러한 정보에 의존하여 발생한 결과에 대해
                책임을 지지 않습니다.
              </li>
              <li>
                회사는 천재지변, 정전, 서버 장애, 통신망 장애 등 회사의 합리적인 통제 범위를
                벗어난 사유로 인한 서비스 중단에 대해서 책임을 지지 않습니다.
              </li>
            </ul>

            <h2>제10조 (준거법 및 관할)</h2>
            <ul>
              <li>본 약관의 해석 및 적용에는 대한민국 법령을 준거법으로 합니다.</li>
              <li>
                서비스 이용과 관련하여 회사와 이용자 간 분쟁이 발생하는 경우, 관련 법령에 따른
                관할 법원을 통해 해결합니다.
              </li>
            </ul>

            <p className="legal-updated">최종 업데이트: 2025-01-01</p>

            <p className="legal-disclaimer">
              ※ 본 약관은 서비스 초기 운영을 위한 기본 템플릿이며, 향후 서비스 구조 변화 및
              법령 개정에 따라 수정될 수 있습니다. 법적 효력 확보를 위해서는 전문가의 검토를
              권장합니다.
            </p>
          </div>
        </section>
      </main>
      {FOOTER}
    </>
  );
}
