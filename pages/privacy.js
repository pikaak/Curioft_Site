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

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy — Curioft</title>
        <meta name="description" content="Curioft 개인정보 처리방침 안내." />
      </Head>
      {NAV}
      <main className="site-main">
        <section className="section section-light">
          <div className="container legal-page">
            <h1>개인정보 처리방침</h1>
            <p className="legal-note">
              본 개인정보 처리방침은 Curioft(이하 &quot;회사&quot;)가 제공하는 웹 서비스
              (curioft.com 및 관련 서브도메인을 포함, 이하 &quot;서비스&quot;)에 적용됩니다.
            </p>

            <h2>1. 수집하는 개인정보 항목</h2>
            <p>회사는 서비스 제공 과정에서 다음과 같은 정보가 수집될 수 있습니다.</p>
            <ul>
              <li>
                <strong>필수 수집 항목</strong> (현재 기준)
                <ul>
                  <li>서비스 이용 기록 (접속 일시, 이용한 페이지 등)</li>
                  <li>기기 정보 (브라우저 종류, OS, 화면 해상도 등 비식별 정보)</li>
                  <li>쿠키 및 유사 기술을 통한 로그 정보</li>
                </ul>
              </li>
              <li>
                <strong>선택 수집 항목</strong> (향후 추가될 수 있음)
                <ul>
                  <li>이메일 주소 (문의/피드백 대응을 위한 경우)</li>
                  <li>사용자가 자발적으로 입력하는 닉네임, 질문 내용 등</li>
                </ul>
              </li>
            </ul>

            <h2>2. 개인정보 수집 및 이용 목적</h2>
            <p>회사는 수집한 정보를 다음의 목적으로 이용합니다.</p>
            <ul>
              <li>서비스 제공 및 유지, 품질 개선</li>
              <li>서비스 오류 분석 및 보안 강화</li>
              <li>콘텐츠 및 기능 개선을 위한 통계 분석</li>
              <li>서비스 이용과 관련된 공지 및 문의 대응</li>
              <li>향후 광고 게재 시, 광고 효율 분석 및 노출 제한 등</li>
            </ul>

            <h2>3. 쿠키(Cookie) 및 유사 기술의 사용</h2>
            <p>
              회사는 이용자 편의와 서비스 품질 향상을 위해 쿠키 및 유사 기술을 사용할 수
              있습니다.
            </p>
            <ul>
              <li>쿠키는 브라우저를 통해 저장되는 작은 텍스트 파일입니다.</li>
              <li>
                이용자는 브라우저 설정을 통해 쿠키 저장을 거부하거나 삭제할 수 있으나,
                이 경우 일부 기능 이용에 제약이 있을 수 있습니다.
              </li>
            </ul>

            <h2>4. 제3자 제공 및 처리 위탁</h2>
            <p>
              회사는 원칙적으로 이용자의 개인정보를 사전에 동의받지 않고 제3자에게 제공하지
              않습니다. 다만, 다음의 경우 예외적으로 제공될 수 있습니다.
            </p>
            <ul>
              <li>법령에 근거가 있거나, 수사기관의 적법한 요청이 있는 경우</li>
              <li>
                통계 작성, 연구, 공익적 기록 보존 등을 위해 개인을 식별할 수 없는 형태로
                가공하여 제공하는 경우
              </li>
            </ul>
            <p>
              향후 서비스 운영을 위해 외부 업체에 처리 업무를 위탁하는 경우, 관련 내용을 본
              개인정보 처리방침에 공개하고 필요한 법적 조치를 이행합니다.
            </p>

            <h2>5. 개인정보 보유 및 이용 기간</h2>
            <p>
              회사는 개인정보의 수집 및 이용 목적이 달성되면 지체 없이 해당 정보를 파기합니다.
              다만, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보관할 수 있습니다.
            </p>
            <ul>
              <li>
                <strong>서비스 이용 기록</strong>: 서비스 품질 개선 및 보안 로그 분석을 위해
                최대 1년간 보관할 수 있습니다.
              </li>
              <li>
                기타 관련 법령에 따라 보관이 필요한 정보: 해당 법령에서 정한 기간 동안 보관
              </li>
            </ul>

            <h2>6. 이용자의 권리</h2>
            <p>
              이용자는 언제든지 자신의 개인정보에 대해 열람, 정정, 삭제, 처리 정지를 요청할 수
              있습니다. 다만, 현재 서비스 구조상 Curioft는 최소한의 정보만 수집하고 있으며,
              개별 계정을 운영하지 않는 형태의 서비스에서는 열람·정정이 어려울 수 있습니다.
            </p>
            <p>
              개인정보와 관련한 문의는 추후 별도로 안내될 연락 수단을 통해 접수하실 수
              있습니다.
            </p>

            <h2>7. 개인정보의 안전성 확보 조치</h2>
            <p>회사는 개인정보의 안전성을 확보하기 위해 다음과 같은 조치를 취할 수 있습니다.</p>
            <ul>
              <li>접근 권한이 제한된 환경에서의 서비스 운영</li>
              <li>보안 업데이트 적용 및 취약점 점검</li>
              <li>로그 모니터링을 통한 이상 접근 탐지</li>
            </ul>

            <h2>8. 광고 및 분석 도구 사용에 대한 안내</h2>
            <p>
              회사는 향후 서비스 운영을 위해 Google Analytics, Google AdSense 등 외부 분석 및
              광고 도구를 도입할 수 있습니다.
            </p>
            <ul>
              <li>이들 도구는 쿠키 및 유사 기술을 사용하여 익명화된 통계 정보를 수집할 수 있습니다.</li>
              <li>
                이용자는 브라우저의 광고 개인 맞춤 설정 또는 쿠키 설정을 통해 맞춤 광고 노출을
                제한할 수 있습니다.
              </li>
            </ul>

            <h2>9. 개인정보 처리방침의 변경</h2>
            <p>
              회사는 법령 변경, 서비스 내용 변경 등으로 인해 개인정보 처리방침을 수정할 수
              있습니다. 중요한 변경 사항이 있을 경우, 서비스 공지사항 또는 본 페이지를 통해
              변경 내용을 고지합니다.
            </p>
            <p>본 개인정보 처리방침의 최종 개정일은 아래와 같습니다.</p>
            <p className="legal-updated">최종 업데이트: 2025-01-01</p>

            <h2>10. 문의처</h2>
            <p>
              개인정보 처리와 관련된 문의는 추후 안내될 전용 이메일 또는 문의 양식을 통해
              접수하실 수 있습니다.
            </p>

            <p className="legal-disclaimer">
              ※ 본 문서는 서비스 초기 운영을 위한 기본 템플릿이며, 향후 서비스 구조 변화 및 법령
              개정에 따라 수정될 수 있습니다. 법적 효력 확보를 위해서는 전문가의 검토를 권장합니다.
            </p>
          </div>
        </section>
      </main>
      {FOOTER}
    </>
  );
}
