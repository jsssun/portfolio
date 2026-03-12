const portfolioData = {
  profile: {
    name: "정선우",
    role: "풀스택 개발자",
    bio: "팀 프로젝트와 다양한 사이드 프로젝트를 통해 꾸준히 성장해온 개발자입니다. 언제든 피드백과 협업을 환영합니다!",
    avatar: "icons/profile2.jpg",
    email: "gmhie1208@gmail.com",
    github: "https://github.com/jsssun"
  },

  techStack: {
    "Language": ["Java", "Python", "C#", "JavaScript", "TypeScript"],
    "Database": ["MySQL"],
    "Infra / DevOps": ["Nginx", "Apache Tomcat", "Docker"],
    "Backend": ["Spring Boot", "Servlet/JSP", "JDBC", "HikariCP", "Lombok", "Logback", "JUnit"],
    "Frontend": ["React", "Next.js", "Tailwind CSS", "HTML"],
    "협업 도구": ["Git", "Postman", "WSL", "Notion"]
  },

  certs: [
    "정보처리기사",
    "TOPCIT 3수준",
    "SAP Certified Associate (ABAP Cloud)"
  ],

  projects: [
    {
      id: "cardtrend",
      title: "카드 거래 트렌드 대시보드",
      role: "풀스택 개발 / 인프라 설계",
      desc: "530만 건 카드 데이터를 분기 단위로 집계·시각화하는 3-Tier Architecture 대시보드",
      img: "icons/card.png",
      stack: ["Java", "Servlet/JSP", "JDBC", "HikariCP", "Nginx", "Tomcat", "MySQL", "Docker", "Logback"],
      links: {
        github: "https://github.com/light11014/woori-card-project"
      },
      detail: {
        overview:
          "약 530만 건의 카드 거래 원천 데이터를 분기 단위로 사전 집계하여, 소비 카테고리별 금액·비율·증감률을 빠르게 조회할 수 있는 3-Tier 구조의 대시보드 서비스입니다.",
        problem:
          "대용량 원천 데이터를 매번 직접 조회할 경우 응답 속도가 지나치게 느려지는 문제와, WAS 이중화 환경에서 세션이 유지되지 않는 문제가 있었습니다.",
        solution:
          "사전 집계 테이블(CARD_TREND_QUARTERLY)을 도입해 쿼리 성능을 대폭 개선하고, Nginx Session Replication과 HikariCP 기반 Read/Write 분리 DataSource를 적용해 가용성과 성능을 함께 확보했습니다.",
        contributions: [
          "Nginx(로드밸런서) → Apache Tomcat 2대(이중화) → MySQL Source/Replica 구조 설계 및 구현",
          "사전 집계 테이블 활용으로 530만 건 데이터 조회 성능 최적화",
          "HikariCP 기반 Read/Write DataSource 분리 구성 (읽기 → Replica, 쓰기 → Source)",
          "Nginx Session Replication 적용으로 WAS 이중화 환경에서 세션 유지",
          "분기별 소비 트렌드, 전분기 대비 증감률, Top 3 카테고리 시각화 기능 구현"
        ]
      }
    },

    {
      id: "keypad",
      title: "React 보안 키패드",
      role: "프론트엔드 개발 / npm 패키지 배포",
      desc: "랜덤 배치·혼합 키·연타방지를 지원하는 금융 보안 키패드 React 컴포넌트 라이브러리",
      img: "icons/keypad.png",
      stack: ["React", "TypeScript", "npm"],
      links: {
        github: "https://github.com/woori-fisa-frontend/secure-keypad"
      },
      detail: {
        overview:
          "금융 서비스에서 요구되는 보안 키패드 기능을 React 컴포넌트로 구현하고 npm 패키지로 배포한 라이브러리입니다. 누구든지 설치 즉시 보안 키패드를 프로젝트에 적용할 수 있도록 설계했습니다.",
        problem:
          "일반적인 input 필드는 키 입력이 그대로 노출되어 금융·인증 서비스에서 사용하기 어렵습니다. 매 프로젝트마다 보안 키패드를 직접 구현하는 것도 비효율적이었습니다.",
        solution:
          "랜덤 키 배치로 화면 캡처·패턴 추적을 방지하고, 키 동시 눌림 효과(mixed key)와 연타방지(cooldown) 기능을 조합해 실제 금융 서비스 수준의 보안 키패드를 컴포넌트화했습니다.",
        contributions: [
          "랜덤 키 배치(shuffle) 알고리즘 구현 — 렌더링마다 레이아웃이 달라져 화면 캡처 기반 공격 방지",
          "혼합 키 눌림 효과(mixed key) 구현 — 실제 입력 키를 특정하기 어렵게 만드는 UX 보안 기법 적용",
          "연타방지(cooldown) 기능 구현으로 자동화 입력 시도 차단",
          "npm 패키지로 빌드·배포하여 외부 프로젝트에서 즉시 설치·사용 가능하도록 제공"
        ]
      }
    },

    {
      id: "picount",
      title: "PICOUNT",
      role: "백엔드 개발",
      desc: "카테고리 기반 예산 관리 가계부 웹 서비스",
      img: "icons/picount.png",
      stack: [
        "Java",
        "Spring Boot",
        "Spring Data JPA",
        "MySQL",
        "H2 (Test DB)",
        "REST API"
      ],
      links: {
        github: "https://github.com/Picount-SOLUX"
      },
      detail: {
        overview:
          "PICOUNT(Piece + Count)는 예산을 카테고리별로 '조각내어' 관리할 수 있도록 돕는 예산 중심 가계부 서비스입니다.",
        problem:
          "기존 가계부 서비스는 예산을 사전에 카테고리별로 설정하더라도, 사용 중 줄어드는 흐름을 직관적으로 파악하기 어려웠습니다.",
        solution:
          "카테고리별 예산 분할과 시각화를 제공하고, 다이어리형 UI와 월말 리포트를 통해 소비 습관을 자연스럽게 관리할 수 있도록 설계했습니다.",
        contributions: [
          "친구, 방명록, 달력(다이어리+사진), 수입·지출 등록 기능 구현",
          "월말 리포트 기능을 통해 소비 요약 및 추이 시각화",
          "Spring Boot 기반 REST API 및 MySQL/H2 연동 설계 및 구현"
        ]
      }
    },

    {
      id: "wibee",
      title: "위비 챗봇 (Wibee Chatbot)",
      role: "풀스택 개발",
      desc: "우리FISA 수강생을 위한 일정·학습 안내 챗봇 서비스",
      img: "icons/wibee-chatbot.png",
      stack: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "NAVER CLOVA"],
      links: {
        github: "https://github.com/nnyouung/woorifisa-chatbot"
      },
      detail: {
        overview:
          "우리FISA 수강생들이 자주 묻는 일정 및 학습 관련 질문 해결을 위해, 24시간 대응 가능한 대화형 UI를 제공하는 웹 기반 챗봇 프로젝트입니다.",
        problem:
          "공지와 일정 등 중요한 정보가 여러 채널에 흩어져 있어, 수강생들이 필요한 내용을 제때 확인하는 데 어려움을 겪고 있었습니다.",
        solution:
          "CLOVA OCR 및 챗봇 API를 Express 백엔드와 연동하여 자연어 질문을 해석하고, 일정 및 학습 정보를 즉시 제공하도록 구현했습니다.",
        contributions: [
          "위비 캐릭터 아이콘을 활용한 친근한 챗봇 인터페이스 구현",
          "모바일 환경을 고려한 반응형 UI 설계 및 적용",
          "한글·영문 폰트를 함께 적용해 가독성과 접근성 개선"
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
      links: {
        github: "https://github.com/TUMS-Cafe/TravelAroundTheWorld"
      },
      detail: {
        overview:
          "세계를 여행하는 열차 '루나 익스프레스'를 배경으로, 낮에는 카페를 운영하고 밤에는 열차를 탐험하며 승객들의 이야기를 풀어가는 스토리 중심 어드벤처 게임입니다.",
        problem:
          "스토리 진행과 시뮬레이션 플레이를 자연스럽게 결합하고, 반복적인 일과 속에서도 선택이 의미 있게 작용하도록 만드는 것이 어려웠습니다.",
        solution:
          "낮/밤 진행 시스템과 카페 운영을 스토리 이벤트와 연결하고, 선택과 행동에 따라 분기되는 대사 및 엔딩 구조를 구현했습니다.",
        contributions: [
          "챕터 1 전체 게임 흐름(스토리, 카페 운영, 탐험, 엔딩 분기) 구현",
          "CSV 기반 대사 및 이벤트 관리 시스템 개발",
          "카페 메인 루프 및 룸서비스 비동기 이벤트 구현",
          "NPC 상호작용, 퀘스트 UI, 해피/배드 엔딩 로직 구현"
        ]
      }
    },

    {
      id: "recipe",
      title: "단 하나의 레시피",
      role: "클라이언트 게임 개발",
      desc: "할머니의 제과점을 운영하는 힐링 2D 베이킹 타이쿤 게임",
      img: "icons/recipe2.png",
      stack: ["Unity", "C#"],
      links: {
        github: "https://github.com/SUHHAN/HexaSnow",
        playstore: "https://play.google.com/store/apps/details?id=com.DefaultCompany.HexaSnow&pli=1"
      },
      detail: {
        overview:
          "할머니로부터 물려받은 제과점을 10일간 운영하며 베이킹과 손님 응대를 통해 따뜻한 이야기를 경험하는 힐링 스토리 중심의 2D 베이킹 게임입니다.",
        problem:
          "반복적인 플레이로 인한 피로감을 줄이면서도, 베이킹 과정 자체는 재미있고 의미 있게 만드는 것이 과제였습니다.",
        solution:
          "반죽·오븐·재료 상점 등 다양한 베이킹 미니게임과 레시피·재료·토핑 시스템을 도입하고, 손님별 시나리오와 결과 분기를 추가해 플레이에 변화를 주었습니다.",
        contributions: [
          "Unity와 C#을 활용한 클라이언트 전반 개발 담당",
          "베이킹 전체 플레이 흐름(재료 선택 → 반죽 → 오븐 → 토핑) 설계 및 구현",
          "레시피 해금 조건 및 레시피북 연동 시스템 구현",
          "손님별 시나리오 및 결과 분기 로직 구현",
          "발표회 대상 수상 후 리팩토링·밸런스 조정 거쳐 Google Play Store 출시"
        ]
      }
    }
  ],

  activities: [
    {
      title: "우리FISA 6기",
      period: "2025.12 ~ 현재",
      desc: "클라우드 서비스 개발 과정 (React, Next.js, TypeScript, Java, Spring Boot)"
    },
    {
      title: "개발 동아리 임원",
      period: "2024.03 ~ 2026.02",
      desc: "기술 세미나 6회 운영, 부원·프로젝트팀 관리, 타 학회 협업 해커톤 추진. 프로젝트 발표회 대상·최우수상 수상"
    },
    {
      title: "알고리즘 스터디 임원",
      period: "2024.03 ~ 2025.02",
      desc: "매주 알고리즘 스터디 진행 및 과제 채점·피드백 제공. 선제적 멘토링으로 제출률 및 참여율 향상"
    },
    {
      title: "게임 개발 동아리",
      period: "2023.09 ~ 2025.02",
      desc: "UNICON 우수상, SBA 게임 공모전 우수상 수상"
    }
  ]
};

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

  function renderTechStack(techStack) {
    return Object.entries(techStack).map(([category, items]) => `
      <div class="techstack-row">
        <span class="techstack-category">${category}</span>
        <div class="techstack-badges">
          ${items.map(item => `<span class="techstack-badge">${item}</span>`).join("")}
        </div>
      </div>
    `).join("");
  }

  function renderHome() {
    const { profile, techStack, certs, projects, activities } = portfolioData;

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
          ${projects
            .map(
              (p) => `
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
                  ${p.stack
                    .slice(0, 3)
                    .map((t) => `<span class="tech-item">${t}</span>`)
                    .join("")}
                  ${
                    p.stack.length > 3
                      ? `<span class="tech-item">+${p.stack.length - 3}</span>`
                      : ""
                  }
                </div>
              </div>
            </a>
          `
            )
            .join("")}
        </div>
      </section>

      <section class="fade-in">
        <h2 class="section-title">Experience & Activities</h2>
        <div class="activity-list">
          ${activities
            .map(
              (a) => `
            <div class="activity-item">
              <div class="act-header">
                <h4>${a.title}</h4>
                <span class="period">${a.period}</span>
              </div>
              <p class="act-desc">${a.desc}</p>
            </div>
          `
            )
            .join("")}
        </div>
      </section>

      <footer>
        &copy; 2026 ${profile.name}. All rights reserved.
      </footer>
    `;
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
            ${
              p.links.playstore
                ? `<a href="${p.links.playstore}" target="_blank" class="btn-pill" style="display:block; text-align:center; width:100%; margin-top:10px;">Play Store</a>`
                : ""
            }
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