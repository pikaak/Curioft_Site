// pages/terms.js
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
      <p className="footer-sub">
        타로, 게임, 편의성 툴 등을 만들고 무료 제공하는 호기심 공작소
      </p>
    </div>
  </footer>
);

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms of Service — Curioft</title>
        <meta
          name="description"
          content="Curioft 서비스 이용약관 안내 페이지입니다."
        />
      </Head>

      {NAV}

      <main className="site-main">
        <section className="section section-light">
          <div className="container legal-page">
            <h1>서비스 이용약관</h1>
            <p className="legal-note">
              본 약관은 Curioft(이하 &quot;서비스&quot;)의 이용과 관련하여 기본적으로 적용되는
              내용을 담고 있습니다. 서비스에 접속하거나 이용하는 경우, 본 약관에 동의한 것으로
              간주됩니다.
            </p>
            <p className="legal-updated">최종 업데이트: 2025-01-01</p>

            <h2>1. 약관의 목적</h2>
            <p>
              본 약관은 Curioft가 제공하는 웹 기반 콘텐츠, 타로・게임・도구 서비스 등의 이용과
              관련하여 서비스와 이용자 간의 권리, 의무 및 책임 사항을 규정하는 것을 목적으로 합니다.
            </p>

            <h2>2. 약관의 효력 및 변경</h2>
            <ul>
              <li>본 약관은 서비스 화면에 게시하거나 기타의 방법으로 공지함으로써 효력이 발생합니다.</li>
              <li>
                서비스는 관련 법령을 위반하지 않는 범위에서 약관을 변경할 수 있으며, 변경 시 개정
                약관의 적용 일자 및 개정 사유를 명시하여 사전에 공지합니다.
              </li>
              <li>이용자가 변경된 약관에 동의하지 않는 경우, 언제든지 서비스 이용을 중단하고 기록을 삭제할 수 있습니다.</li>
            </ul>

            <h2>3. 서비스의 제공</h2>
            <ul>
              <li>서비스는 별도의 회원 가입 없이 이용할 수 있는 웹 서비스를 우선 제공합니다.</li>
              <li>제공되는 서비스의 종류와 내용은 수시로 추가, 변경, 중단될 수 있습니다.</li>
              <li>
                서비스는 안정적인 제공을 위해 노력하지만, 다음 각 호의 경우 서비스의 전부 또는 일부가
                제한되거나 중단될 수 있습니다.
                <ul>
                  <li>서비스 설비의 점검, 보수, 교체 또는 장애</li>
                  <li>정전, 통신 장애, 천재지변 등 불가항력적 사유</li>
                  <li>기타 운영상 상당한 이유가 있는 경우</li>
                </ul>
              </li>
            </ul>

            <h2>4. 이용자의 의무</h2>
            <ul>
              <li>이용자는 서비스 이용 시 관련 법령, 본 약관 및 공지사항을 준수해야 합니다.</li>
              <li>타인의 권리(저작권, 초상권 등)를 침해하는 행위를 해서는 안 됩니다.</li>
              <li>서비스의 정상적인 운영을 방해하는 행위를 해서는 안 됩니다.</li>
            </ul>

            <h2>5. 금지되는 행위의 예</h2>
            <ul>
              <li>서비스 콘텐츠를 무단으로 복제, 배포, 2차 저작물로 이용하는 행위</li>
              <li>서비스를 역분석, 변조, 해킹하려는 시도</li>
              <li>타인에게 불쾌감・피해를 줄 수 있는 내용의 입력 또는 전송</li>
              <li>서비스와 관련 없는 광고, 홍보, 스팸성 메시지의 반복 전송</li>
            </ul>

            <h2>6. 지적 재산권</h2>
            <ul>
              <li>서비스 내에 제공되는 텍스트, 이미지, UI, 코드 등은 별도 표시가 없는 한 Curioft에 권리가 있습니다.</li>
              <li>이용자는 개인적인 비상업적 용도 내에서만 콘텐츠를 이용할 수 있습니다.</li>
              <li>사전 서면 동의 없이 콘텐츠를 상업적으로 이용하거나 재배포할 수 없습니다.</li>
            </ul>

            <h2>7. 책임의 한계</h2>
            <ul>
              <li>
                서비스는 &quot;있는 그대로&quot; 제공되며, 제공되는 콘텐츠의 완전성, 정확성, 신뢰성에 대해
                절대적인 보증을 하지는 않습니다.
              </li>
              <li>
                서비스 이용 과정에서 발생하는 개인적인 선택, 해석, 투자/의사결정 등은 전적으로 이용자
                본인의 책임입니다.
              </li>
              <li>
                단, 고의 또는 중대한 과실로 인한 손해에 대해서는 관련 법령이 허용하는 범위 내에서 책임을
                질 수 있습니다.
              </li>
            </ul>

            <h2>8. 타로/심리 테스트 등 콘텐츠에 대한 안내</h2>
            <p>
              서비스에서 제공되는 내용은 어디까지나 엔터테인먼트의 목적에 한하며, 의학적・법률적・재정적 조언을 대신하지 않습니다.            
              중요한 결정은 반드시 전문가와의 상담, 추가적인 정보 확인 등을 통해 신중히 진행해 주시기
              바랍니다.
            </p>

            <h2>9. 약관의 해석 및 준거법</h2>
            <ul>
              <li>본 약관에서 정하지 않은 사항은 관련 법령 및 일반적인 관례에 따릅니다.</li>
              <li>서비스 이용과 관련하여 분쟁이 발생한 경우, 상호 성실한 협의를 우선합니다.</li>
            </ul>

            <p className="legal-disclaimer">
              본 약관은 서비스 초기 운영을 위한 기본 안내로, 서비스 구조 변화 및 법령 개정에 따라
              변경될 수 있습니다. 변경 시 가능한 한 알기 쉬운 형태로 공지하도록 하겠습니다.
            </p>
          </div>
        </section>
      </main>

      {FOOTER}
    </>
  );
}
