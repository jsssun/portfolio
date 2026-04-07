const portfolioData = {
  profile: {
    name: "정선우",
    role: "백엔드 개발자",
    bio: "다양한 프로젝트와 동아리 활동을 통해 책임감 있게 끝까지 완주하는 태도와 협업 능력을 키웠습니다. 끊임없이 배우고 성장하는 개발자가 되기 위해 노력하고 있습니다.",
    avatar: "icons/profile_main.png",
    email: "gmhie1208@gmail.com",
    github: "https://github.com/jsssun"
  },

  techStack: {
    "Language": ["Java", "Python", "C#", "JavaScript", "TypeScript"],
    "Database": ["MySQL"],
    "Infra / DevOps": ["Nginx", "Apache Tomcat", "Docker", "AWS", "WSL"],
    "Backend": ["Spring Boot", "Servlet/JSP", "JDBC", "HikariCP", "Lombok", "Logback", "JUnit"],
    "Frontend": ["React", "Next.js", "Tailwind CSS", "HTML"],
    "협업 도구": ["Git", "Postman", "Notion"]
  },

  certs: [
    "OPIc IH",
    "정보처리기사",
    "TOPCIT 3수준",
    "SAP Certified Associate (ABAP Cloud)"
  ],

  projects: [
    {
      id: "payment",
      title: "MSA 프로젝트",
      role: "VAN 개발 · MSA 설계",
      desc: "POS → VAN → 카드사 → 은행 전 구간을 MSA + Docker로 구현한 실시간 결제 승인 및 정산 프로젝트",
      img: "icons/payment.png",
      stack: ["Java", "Spring Boot", "Spring Batch", "Spring Data JPA", "MySQL", "Docker", "Eureka"],
      links: { github: "https://github.com/fisa-card-payment" },
      detail: {
        overview: "POS 단말기의 결제 요청이 VAN을 거쳐 카드사 내부 서비스까지 처리되는 전체 파이프라인을 MSA 아키텍처로 구현한 시뮬레이터입니다. VAN, API Gateway, Payment, Settlement, Banking 5개 서비스가 Eureka 기반으로 연동됩니다.",
        problem: "서비스 간 직접 의존 없이 실시간 결제 승인과 야간 정산 배치를 안정적으로 처리해야 했고, 정산 완료 시점을 클라이언트에 효율적으로 통보해야 했습니다.",
        solution: "Spring Batch chunk 처리로 대량 거래 데이터를 안정적으로 정산 CSV로 변환하고, SSE(Server-Sent Events)를 도입해 정산 완료 결과를 실시간으로 VAN에 Push하도록 설계했습니다.",
        contributions: [
          "VAN 서비스 전체 설계 및 구현 — BIN 조회 기반 카드사 식별, API Gateway 경유 결제 중계",
          "Spring Batch(Reader → Processor → Writer) 구조로 일일 승인 내역 CSV 생성 및 카드사 전송 자동화",
          "SSE 기반 정산 결과 실시간 수신 구현 — Polling 대비 불필요한 요청 제거",
          "Eureka + Docker Compose 기반 5개 마이크로서비스 네트워크 구성",
          "ISO 8583 표준 참고한 RRN/STAN/응답코드 설계, DDC 방식 정산 구조 적용"
        ]
      }
    },
    {
      id: "picount",
      title: "PICOUNT (가계부 웹 서비스)",
      role: "백엔드 개발",
      desc: "소비 데이터를 기반으로 예산을 카테고리별로 관리하고 월별 소비 패턴을 시각화하는 가계부 웹 서비스",
      img: "icons/picount.png",
      stack: ["Java", "Spring Boot", "MySQL", "AWS EC2", "Gradle"],
      links: { github: "https://github.com/Picount-SOLUX" },
      detail: {
        overview: "사용자의 소비 데이터를 카테고리 단위로 관리하고, 월별 소비 통계 및 감정 기반 소비 패턴을 분석할 수 있는 가계부 서비스입니다. 데이터 집계 및 시각화를 통해 사용자에게 직관적인 소비 인사이트를 제공합니다.",
        problem: "소비 데이터를 단순 기록하는 수준을 넘어, 월별 통계와 변화 추이를 효율적으로 계산해야 했으며, 인증 및 프론트-백엔드 분리 환경에서 발생하는 보안 및 통신 이슈를 해결해야 했습니다.",
        solution: "카테고리 기반 데이터 모델을 설계하고, 월말 리포트 기능에서 집계 로직을 구현하여 소비 통계 및 변화량을 계산했습니다. 또한 Spring Security 설정을 통해 JWT 인증 흐름을 개선하고 CORS 문제를 해결하여 안정적인 API 통신 환경을 구축했습니다.",
        contributions: [
          "수입·지출 등록/수정/삭제 API 구현 및 카테고리 기반 DB 설계",
          "친구 추가 및 방명록 기능 개발을 통한 사용자 간 상호작용 기능 구현",
          "캘린더 기반 소비 기록 및 이미지 저장 기능 API 개발",
          "월말 소비 리포트 기능 구현 — 카테고리별 통계 및 소비 추이 계산",
          "JWT 인증 실패 응답 처리 로직 개선 및 예외 처리 일관성 확보",
          "Spring Security 기반 CORS 설정을 통한 프론트-백엔드 통신 문제 해결"
        ]
      }
    },
    {
      id: "cardtrend",
      title: "고객 카드 결제 트랜드 대시보드",
      role: "풀스택 개발 / 인프라 설계",
      desc: "Nginx 이중화 + MySQL Replication 구조 위에서 530만 건 데이터를 실시간 집계·시각화하는 3-Tier 대시보드",
      img: "icons/card.png",
      stack: ["Java", "Servlet/JSP", "JDBC", "HikariCP", "Nginx", "Tomcat", "MySQL", "Docker", "Logback"],
      links: { github: "https://github.com/jsssun/card-trend-dashboard" },
      detail: {
        overview: "약 530만 건의 거래 원천 데이터를 분기 단위로 사전 집계하여 카테고리별 금액·비율·증감률을 빠르게 조회할 수 있는 3-Tier 구조의 대시보드입니다. Nginx 로드밸런서 → Tomcat WAS 이중화 → MySQL Source/Replica 구조로 고가용성을 확보했습니다.",
        problem: "530만 건 원천 데이터를 매번 직접 조회할 경우 응답 속도가 지나치게 느려지는 문제와, WAS 이중화 환경에서 세션이 유지되지 않는 문제가 있었습니다.",
        solution: "사전 집계 테이블(TREND_QUARTERLY)을 도입해 쿼리 성능을 대폭 개선하고, Nginx Session Replication과 HikariCP 기반 Read/Write 분리 DataSource를 적용해 가용성과 성능을 함께 확보했습니다.",
        contributions: [
          "Nginx(로드밸런서) → Apache Tomcat 2대(이중화) → MySQL Source/Replica 전체 인프라 설계 및 구현",
          "사전 집계 테이블 도입으로 530만 건 데이터 조회 성능 최적화",
          "HikariCP 기반 Read/Write DataSource 분리 구성 (읽기 → Replica, 쓰기 → Source)",
          "Nginx Session Replication 적용으로 WAS 이중화 환경에서 세션 일관성 보장",
          "분기별 소비 트렌드, 전분기 대비 증감률, Top 3 카테고리 시각화 기능 구현"
        ]
      }
    },
    {
      id: "taw",
      title: "Travel Around The World",
      role: "클라이언트 게임 개발",
      desc: "세계를 여행하는 열차에서 카페를 운영하는 스토리 시뮬레이션 게임",
      img: "icons/taw.png",
      stack: ["Unity", "C#"],
      links: { github: "https://github.com/TUMS-Cafe/TravelAroundTheWorld" },
      detail: {
        overview: "세계를 여행하는 열차 '루나 익스프레스'를 배경으로, 낮에는 카페를 운영하고 밤에는 열차를 탐험하며 승객들의 이야기를 풀어가는 스토리 중심 어드벤처 게임입니다. UNICON 2024 전국 게임 전시회에서 50개 팀 중 우수상을 수상했습니다.",
        problem: "스토리 진행과 시뮬레이션 플레이를 자연스럽게 결합하고, 반복적인 일과 속에서도 선택이 의미 있게 작용하도록 만드는 것이 어려웠습니다.",
        solution: "낮/밤 진행 시스템과 카페 운영을 스토리 이벤트와 연결하고, 선택과 행동에 따라 분기되는 대사 및 엔딩 구조를 구현했습니다.",
        contributions: [
          "챕터 1 전체 게임 흐름(스토리, 카페 운영, 탐험, 엔딩 분기) 구현",
          "CSV 기반 대사 및 이벤트 관리 시스템 개발 — 기획 변경에 유연하게 대응",
          "카페 메인 루프 및 룸서비스 비동기 이벤트 구현",
          "NPC 상호작용, 퀘스트 UI, 해피/배드 엔딩 로직 구현"
        ]
      }
    },
    {
      id: "recipe",
      title: "단 하나의 레시피",
      role: "클라이언트 게임 개발",
      desc: "할머니의 제과점을 운영하는 힐링 2D 베이킹 타이쿤 게임 — Google Play 출시",
      img: "icons/recipe2.png",
      stack: ["Unity", "C#"],
      links: {
        github: "https://github.com/SUHHAN/HexaSnow",
        playstore: "https://play.google.com/store/apps/details?id=com.DefaultCompany.HexaSnow&pli=1"
      },
      detail: {
        overview: "할머니로부터 물려받은 제과점을 10일간 운영하며 베이킹과 손님 응대를 통해 따뜻한 이야기를 경험하는 힐링 스토리 중심의 2D 베이킹 게임입니다. 동아리 발표회 대상 수상 후 리팩토링을 거쳐 Google Play Store에 출시했습니다.",
        problem: "반복적인 플레이로 인한 피로감을 줄이면서도, 베이킹 과정 자체는 재미있고 의미 있게 만드는 것이 과제였습니다.",
        solution: "반죽·오븐·재료 상점 등 다양한 베이킹 미니게임과 레시피·재료·토핑 시스템을 도입하고, 손님별 시나리오와 결과 분기를 추가해 플레이에 변화를 주었습니다.",
        contributions: [
          "Unity와 C#을 활용한 클라이언트 전반 개발 담당",
          "베이킹 전체 플레이 흐름(재료 선택 → 반죽 → 오븐 → 토핑) 설계 및 구현",
          "레시피 해금 조건 및 레시피북 연동 시스템 구현",
          "손님별 시나리오 및 결과 분기 로직 구현"
        ]
      }
    }
  ],

  activities: [
    { title: "우리FISA 6기", period: "2025.12 ~ 현재", desc: "클라우드 서비스 개발 과정 (React, Next.js, TypeScript, Java, Spring Boot)" },
    { title: "개발 동아리", period: "2024.03 ~ 2026.02", desc: "기술 세미나 6회 운영, 부원·프로젝트팀 관리, 타 학회 협업 해커톤 추진. 프로젝트 발표회 대상·최우수상 수상" },
    { title: "알고리즘 학회", period: "2024.03 ~ 2025.02", desc: "매주 알고리즘 스터디 진행 및 과제 채점·피드백 제공" },
    { title: "게임 개발 동아리", period: "2023.09 ~ 2025.02", desc: "UNICON 우수상, SBA 게임 공모전 우수상 수상" }
  ],

  awards: [
    { title: "기술세미나 우수상", org: "우리FIS 아카데미", date: "2026.03.05", desc: "오픈소스 기여하기 주제로 기술세미나를 진행해 우수상을 수상하였습니다." },
    { title: "2024 SBA X 슈퍼빌런랩스 게임 컨테스트 우수상", org: "서울경제진흥원(SBA) & 슈퍼빌런랩스", date: "2024.09.08", desc: "전국 참가팀 중 창의성과 완성도를 인정받아 수상했으며, 기획 및 개발 능력과 팀 프로젝트를 통한 실무 문제 해결 능력을 인정받았습니다." },
    { title: "UNICON 2024 우수상", org: "UNIDEV", date: "2024.08.24", desc: "Travel Around The World를 UNICON 2024 게임 전시회에 출품하여 전국 19개 동아리, 50개 팀 중 4등을 수상했습니다." }
  ]
};

// --- Badge Map & Tech Stack Renderer ---

const BADGE_MAP = {
  "Java":          "https://img.shields.io/badge/Java-007396?style=flat&logo=openjdk&logoColor=white",
  "Python":        "https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white",
  "JavaScript":    "https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black",
  "TypeScript":    "https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white",
  "C#":            "https://img.shields.io/badge/C%23-239120?style=flat&logo=csharp&logoColor=white",
  "MySQL":         "https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white",
  "Nginx":         "https://img.shields.io/badge/Nginx-009639?style=flat&logo=nginx&logoColor=white",
  "Apache Tomcat": "https://img.shields.io/badge/Tomcat-F8DC75?style=flat&logo=apachetomcat&logoColor=black",
  "Docker":        "https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white",
  "AWS":           "https://img.shields.io/badge/AWS-232F3E?style=flat&logo=amazonwebservices&logoColor=white",
  "WSL":           "https://img.shields.io/badge/WSL-0078D4?style=flat&logo=windows&logoColor=white",
  "Spring Boot":   "https://img.shields.io/badge/Spring_Boot-6DB33F?style=flat&logo=springboot&logoColor=white",
  "Spring Batch":  "https://img.shields.io/badge/Spring_Batch-6DB33F?style=flat&logo=spring&logoColor=white",
  "Servlet/JSP":   "https://img.shields.io/badge/Servlet%2FJSP-007396?style=flat&logo=openjdk&logoColor=white",
  "JDBC":          "https://img.shields.io/badge/JDBC-007396?style=flat&logo=openjdk&logoColor=white",
  "HikariCP":      "https://img.shields.io/badge/HikariCP-0096FF?style=flat&logoColor=white",
  "Lombok":        "https://img.shields.io/badge/Lombok-CC0000?style=flat&logoColor=white",
  "Logback":       "https://img.shields.io/badge/Logback-6DB33F?style=flat&logoColor=white",
  "JUnit":         "https://img.shields.io/badge/JUnit5-25A162?style=flat&logo=junit5&logoColor=white",
  "React":         "https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black",
  "Next.js":       "https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white",
  "Tailwind CSS":  "https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white",
  "HTML":          "https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white",
  "Git":           "https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white",
  "Postman":       "https://img.shields.io/badge/Postman-FF6C37?style=flat&logo=postman&logoColor=white",
  "Notion":        "https://img.shields.io/badge/Notion-000000?style=flat&logo=notion&logoColor=white",
  "Eureka":        "https://img.shields.io/badge/Eureka-6DB33F?style=flat&logo=spring&logoColor=white",
  "Spring Data JPA": "https://img.shields.io/badge/Spring_Data_JPA-6DB33F?style=flat&logo=spring&logoColor=white"
};

function renderTechStack(techStack) {
  return Object.entries(techStack).map(([category, items]) => `
    <div class="techstack-row">
      <span class="techstack-category">${category}</span>
      <div class="techstack-badges">
        ${items.map(item => {
          const url = BADGE_MAP[item];
          return url
            ? `<img src="${url}" alt="${item}" class="techstack-badge-img" />`
            : `<span class="techstack-badge">${item}</span>`;
        }).join("")}
      </div>
    </div>
  `).join("");
}

// --- App Logic ---

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  initTheme();

  window.addEventListener("hashchange", router);
  router();

  function router() {
    const hash = window.location.hash;
    window.scrollTo(0, 0);

    if (hash.startsWith("#project/")) {
      const projectId = hash.split("/")[1];
      const project = portfolioData.projects.find((p) => p.id === projectId);
      if (project) {
        renderDetail(project);
      } else {
        renderHome();
      }
    } else {
      renderHome();
    }
  }

  function renderHome() {
    const { profile, techStack, certs, projects, activities, awards } = portfolioData;

    app.innerHTML = `
      <header class="profile-section">
        <div class="avatar-wrapper">
          <img src="${profile.avatar}" alt="${profile.name}" class="avatar" />
        </div>
        <div class="profile-info">
          <h1 class="name">${profile.name}</h1>
          <p class="bio">${profile.bio}</p>
          <div class="social-links">
            <a href="mailto:${profile.email}" class="btn-pill">Email</a>
            <a href="${profile.github}" target="_blank" class="btn-pill">GitHub</a>
          </div>
        </div>
      </header>

      <hr class="divider" />

      <!-- 채팅 섹션: 서버 연결 확인 후 표시 -->
      <section class="fade-in chat-section" style="display:none;">
        <h2 class="section-title">선우에게 물어보기</h2>
        <p class="chat-desc">프로젝트, 기술스택, 경험 등 무엇이든 질문해보세요.</p>
        <div class="chat-container">
          <div class="chat-messages" id="chatMessages">
            <div class="chat-bubble bot">
              안녕하세요. 선우의 포트폴리오에 오셨군요.<br/>
              궁금하신 점이 있으시면 편하게 물어봐 주세요.
            </div>
          </div>
          <div class="chat-input-row">
            <input
              type="text"
              id="chatInput"
              class="chat-input"
              placeholder="어떤 프로젝트를 해봤나요?"
            />
            <button id="chatSendBtn" class="chat-send-btn" aria-label="전송">→</button>
          </div>
        </div>
      </section>

      <section class="fade-in">
        <h2 class="section-title">Tech Stack</h2>
        <div class="techstack-table">
          ${renderTechStack(techStack)}
        </div>
      </section>

      <section class="fade-in">
        <h2 class="section-title">Certifications</h2>
        <div class="certs-list">
          ${certs.map((c) => `<span class="cert-badge">${c}</span>`).join("")}
        </div>
      </section>

      <section class="fade-in">
        <h2 class="section-title">Featured Projects</h2>
        <div class="grid-container">
          ${projects.map((p) => `
            <a href="#project/${p.id}" class="project-card">
              <div class="card-img-wrapper">
                <img src="${p.img}" alt="${p.title}" />
              </div>
              <div class="card-content">
                <div class="card-header">
                  <h3>${p.title}</h3>
                  <span class="role-badge">${p.role}</span>
                </div>
                <p class="card-desc">${p.desc}</p>
                <div class="tech-stack">
                  ${p.stack.slice(0, 3).map((t) => `<span class="tech-item">${t}</span>`).join("")}
                  ${p.stack.length > 3 ? `<span class="tech-item">+${p.stack.length - 3}</span>` : ""}
                </div>
              </div>
            </a>
          `).join("")}
        </div>
      </section>

      <section class="fade-in">
        <h2 class="section-title">Awards</h2>
        <div class="awards-list">
          ${awards.map((a) => `
            <div class="award-item">
              <div class="award-left">
                <span class="award-trophy">🏆</span>
              </div>
              <div class="award-body">
                <div class="award-header">
                  <h4 class="award-title">${a.title}</h4>
                  <span class="award-date">${a.date}</span>
                </div>
                <span class="award-org">${a.org}</span>
                <p class="award-desc">${a.desc}</p>
              </div>
            </div>
          `).join("")}
        </div>
      </section>

      <section class="fade-in">
        <h2 class="section-title">Experience & Activities</h2>
        <div class="activity-list">
          ${activities.map((a) => `
            <div class="activity-item">
              <div class="act-header">
                <h4>${a.title}</h4>
                <span class="period">${a.period}</span>
              </div>
              <p class="act-desc">${a.desc}</p>
            </div>
          `).join("")}
        </div>
      </section>

      <footer>
        &copy; 2026 ${profile.name}. All rights reserved.
      </footer>
    `;

    // app.innerHTML 세팅 완료 후 채팅 초기화
    initChat();
  }

  function renderDetail(p) {
    app.innerHTML = `
      <nav class="back-nav">
        <button class="back-btn">
          ← Back to Portfolio
        </button>
      </nav>

      <article class="detail-header">
        <h1 class="detail-title">${p.title}</h1>
        <span class="role-badge" style="font-size: 0.9rem; padding: 6px 12px;">${p.role}</span>
      </article>

      <div class="detail-grid">
        <div class="detail-main">
          <img src="${p.img}" alt="${p.title}" class="detail-image" />

          <div class="detail-desc">
            <h3>Overview</h3>
            <p>${p.detail.overview}</p>

            <h3>Problem & Solution</h3>
            <p><strong>Problem:</strong> ${p.detail.problem}</p>
            <p><strong>Solution:</strong> ${p.detail.solution}</p>

            <h3>Key Contributions</h3>
            <ul>
              ${p.detail.contributions.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </div>
        </div>

        <aside class="detail-sidebar">
          <div class="sidebar-section">
            <span class="sidebar-label">Tech Stack</span>
            <div class="tech-stack" style="margin-top:8px;">
              ${p.stack.map((t) => `<span class="tech-item">${t}</span>`).join("")}
            </div>
          </div>

          <div class="sidebar-section">
            <span class="sidebar-label">Links</span>
            <a href="${p.links.github}" target="_blank" class="btn-pill" style="display:block; text-align:center; width:100%;">GitHub Repository</a>
            ${p.links.playstore
              ? `<a href="${p.links.playstore}" target="_blank" class="btn-pill" style="display:block; text-align:center; width:100%; margin-top:10px;">Play Store</a>`
              : ""}
          </div>
        </aside>
      </div>

      <footer>
        &copy; 2026 ${portfolioData.profile.name}. All rights reserved.
      </footer>
    `;

    const backBtn = app.querySelector(".back-btn");
    backBtn.onclick = (e) => {
      e.preventDefault();
      window.location.hash = "";
    };
  }

  function initChat() {
    const section = document.querySelector(".chat-section");
    const input = document.getElementById("chatInput");
    const sendBtn = document.getElementById("chatSendBtn");
    const messages = document.getElementById("chatMessages");

    if (!section || !input || !sendBtn || !messages) return;

    const RAG_URL = "http://localhost:8080";

    // 서버 연결 확인 — 연결되면 섹션 표시, 아니면 숨김 유지
    fetch(`${RAG_URL}/api/rag/health`, {
      signal: AbortSignal.timeout(2000)
    })
      .then((res) => {
        if (!res.ok) throw new Error("서버 응답 오류");
        section.style.display = "block";
      })
      .catch(() => {
        section.style.display = "none";
      });

    // 메시지 버블 추가
    function addMessage(text, isUser) {
      const bubble = document.createElement("div");
      bubble.className = `chat-bubble ${isUser ? "user" : "bot"}`;
      bubble.innerHTML = text.replace(/\n/g, "<br/>");
      messages.appendChild(bubble);
      messages.scrollTop = messages.scrollHeight;
    }

    // 로딩 말풍선 (점 애니메이션)
    function addLoading() {
      const bubble = document.createElement("div");
      bubble.className = "chat-bubble bot loading";
      bubble.id = "loadingBubble";
      bubble.innerHTML = `<span class="loading-dots"><span>.</span><span>.</span><span>.</span></span>`;
      messages.appendChild(bubble);
      messages.scrollTop = messages.scrollHeight;
    }

    function removeLoading() {
      const loading = document.getElementById("loadingBubble");
      if (loading) loading.remove();
    }

    // API 호출
    async function sendMessage() {
      const query = input.value.trim();
      if (!query) return;

      input.value = "";
      sendBtn.disabled = true;
      addMessage(query, true);
      addLoading();

      try {
        const res = await fetch(`${RAG_URL}/api/rag/query`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query, maxResults: 3 }),
        });

        const json = await res.json();
        removeLoading();

        if (json.success) {
          addMessage(json.data.answer, false);
        } else {
          addMessage("답변을 가져오지 못했습니다. 다시 시도해주세요.", false);
        }
      } catch (e) {
        removeLoading();
        addMessage("서버에 연결할 수 없습니다. 잠시 후 다시 시도해주세요.", false);
      } finally {
        sendBtn.disabled = false;
        input.focus();
      }
    }

    sendBtn.addEventListener("click", sendMessage);
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") sendMessage();
    });
  }

  function initTheme() {
    const STORAGE_KEY = "theme";
    const toggleBtn = document.getElementById("themeToggle");
    if (!toggleBtn) return;

    const iconEl = toggleBtn.querySelector(".theme-icon");
    if (!iconEl) return;

    const systemPrefersDark = () =>
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const applyTheme = (theme) => {
      document.documentElement.setAttribute("data-theme", theme);
      iconEl.textContent = theme === "dark" ? "🌙" : "☀️";
      toggleBtn.setAttribute(
        "aria-label",
        `Switch to ${theme === "dark" ? "light" : "dark"} mode`
      );
    };

    const getInitialTheme = () => {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return saved;
      return systemPrefersDark() ? "dark" : "light";
    };

    applyTheme(getInitialTheme());

    toggleBtn.addEventListener("click", () => {
      const current =
        document.documentElement.getAttribute("data-theme") || "dark";
      const next = current === "dark" ? "light" : "dark";
      localStorage.setItem(STORAGE_KEY, next);
      applyTheme(next);
    });
  }
});