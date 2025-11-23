// pages/privacy.js
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

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy — Curioft</title>
        <meta
          name="description"
          content="Curioft의 개인정보 처리방침 안내 페이지입니다."
        />
      </Head>

      {NAV}

      <main className="site-main">
        <section className="section section-light">
          <div className="container legal-page">
            <h1>개인정보 처리방침</h1>
            <p className="legal-note">
              Curioft(이하 &quot;서비스&quot;)는 이용자의 개인정보를 소중하게 여기며,
              관련 법령을 준수하기 위해 아래와 같은 방침을 따릅니다.
            </p>
            <p className="legal-updated">최종 업데이트: 2025-01-01</p>

            <h2>1. 수집하는 개인정보 항목</h2>
            <p>현재 Curioft는 회원가입/로그인 기능을 제공하지 않으며, 다음과 같은 정보가 수집될 수 있습니다.</p>
            <ul>
              <li>
                <strong>서비스 이용 과정에서 자동으로 수집되는 정보</strong>
                <ul>
                  <li>접속 일시, 이용한 페이지, 간단한 사용 기록 등</li>
                  <li>브라우저 종류, OS, 화면 해상도 등 비식별 기기 정보</li>
                  <li>쿠키 및 유사 기술을 통해 수집되는 로그 데이터</li>
                </ul>
              </li>
              <li>
                <strong>이용자가 자발적으로 입력하는 내용</strong>
                <ul>
                  <li>질문 입력란 등에 사용자가 직접 작성하는 텍스트</li>
                  <li>설문/피드백 폼 등에 사용자가 직접 입력한 내용</li>
                </ul>
              </li>
            </ul>

            <h2>2. 개인정보의 이용 목적</h2>
            <p>서비스는 수집된 정보를 다음의 목적 범위 내에서만 사용합니다.</p>
            <ul>
              <li>서비스 품질 개선 및 기능 추가를 위한 통계 분석</li>
              <li>오류/버그 확인 및 보안 사고 대응</li>
              <li>이용 패턴을 파악하여 UI/UX 개선에 참고</li>
            </ul>

            <h2>3. 보관 및 파기</h2>
            <ul>
              <li>법령에 특별한 규정이 없는 한, 서비스 이용 기록은 통계적 목적을 위해 일정 기간 보관될 수 있습니다.</li>
              <li>더 이상 보관 목적이 없어질 경우, 지체 없이 해당 정보를 삭제하거나 비식별화합니다.</li>
              <li>로그 데이터는 개인을 직접 식별할 수 없는 형태로 관리되며, 분석 목적 이외의 용도로 사용하지 않습니다.</li>
            </ul>

            <h2>4. 쿠키(Cookie)의 사용</h2>
            <p>
              서비스는 편의 기능 제공 및 이용 통계 분석을 위해 쿠키를 사용할 수 있습니다.
              사용자는 브라우저 설정을 통해 쿠키 저장을 거부하거나 삭제할 수 있습니다.
            </p>
            <ul>
              <li>쿠키 허용/차단 여부는 브라우저 설정에서 변경할 수 있습니다.</li>
              <li>쿠키를 차단할 경우, 일부 기능이 정상적으로 동작하지 않을 수 있습니다.</li>
            </ul>

            <h2>5. 제3자 제공 및 외부 서비스 이용</h2>
            <p>
              서비스는 원칙적으로 이용자의 개인정보를 외부에 판매하거나 임의로 제공하지 않습니다.
              다만, 다음과 같은 경우에는 예외적으로 제공될 수 있습니다.
            </p>
            <ul>
              <li>이용자가 사전에 동의한 경우</li>
              <li>법령에 따라 수사기관 등 공공기관이 정해진 절차에 따라 요청하는 경우</li>
            </ul>
            <p>
              향후 웹 분석 도구, 광고 네트워크 등 제3자 서비스를 도입할 경우,
              해당 서비스에 제공되는 정보 및 목적을 별도로 안내하고 필요한 동의를 받도록 하겠습니다.
            </p>

            <h2>6. 이용자의 권리</h2>
            <p>
              이용자는 본 서비스와 관련하여 자신의 개인정보 처리에 대해 열람, 정정, 삭제, 처리 정지 등을 요청할 수 있습니다.
              다만, 현재는 실명 기반의 회원제 서비스를 운영하지 않으며, 개별 이용자를 직접 식별할 수 있는 정보는 최소한으로만 처리합니다.
            </p>

            <h2>7. 정보 보호를 위한 기술적・관리적 조치</h2>
            <ul>
              <li>서비스는 HTTPS(SSL)를 통한 암호화 통신을 지향합니다.</li>
              <li>불필요한 로그 및 민감한 정보는 저장하지 않도록 개발 단계에서부터 최소 수집 원칙을 적용합니다.</li>
              <li>오류 로그 및 통계 데이터는 가능한 한 비식별화된 형태로 보관합니다.</li>
            </ul>

            <h2>8. 개인정보 처리방침의 변경</h2>
            <ul>
              <li>법령 개정, 서비스 구조 변경 등에 따라 본 방침은 수정될 수 있습니다.</li>
              <li>중요한 변경 사항이 있을 경우, 본 페이지를 통해 개정 내용을 안내합니다.</li>
            </ul>

            <h2>9. 문의</h2>
            <p>
              개인정보 처리와 관련한 문의, 의견 또는 불만 사항은 추후 별도로 안내될 연락처 또는
              문의 채널을 통해 접수할 예정입니다.
            </p>

            <p className="legal-disclaimer">
              본 개인정보 처리방침은 서비스 초기 운영을 위한 기본 안내로, 실제 운영 상황에 따라
              세부 내용이 조정될 수 있습니다. 중요한 변경 사항이 있을 경우, 가능한 한 명확하게 공지하도록 하겠습니다.
            </p>
          </div>
        </section>
      </main>

      {FOOTER}
    </>
  );
}
