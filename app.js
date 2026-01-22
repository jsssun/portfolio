// const portfolioData = {
//   profile: {
//     name: "Sunwoo Jung",
//     role: "Full Stack & SAP Developer",
//     bio: "Currently diving into open source projects and enjoying the journey. Always open to feedback and collaboration!",
//     avatar: "icons/profile2.jpg",
//     email: "gmhie1208@gmail.com",
//     github: "https://github.com/jsssun"
//   },
//   certs: [
//     "Engineer Information Processing",
//     "SAP Certified Associate (ABAP Cloud)",
//     "OPIc (IH)"
//   ],
//   projects: [
//     {
//       id: "wibee",
//       title: "Wibee Chatbot",
//       role: "Full Stack",
//       desc: "Schedule & Learning Guide Chatbot using CLOVA API for WooriFISA students.",
//       img: "icons/wibee-chatbot.png",
//       stack: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "NAVER CLOVA Chatbot"],
//       links: { github: "https://github.com/nnyouung/woorifisa-chatbot" },
//       detail: {
//         overview: "A web-based chatbot demo that reduces repetitive questions about schedules and learning materials by providing a 24/7 conversational UI for Woori FISA students.",
//         problem: "Students frequently missed announcements and staff faced repetitive questions. We needed a system available 24/7.",
//         solution: "Integrated CLOVA OCR and Chatbot API with a FastAPI backend to interpret natural language queries and provide instant schedule updates.",
//         contributions: [
//           "Designed the FastAPI backend architecture and database schema.",
//           "Integrated Naver CLOVA API for high-accuracy Korean natural language processing."
//         ]
//       }
//     },
//     {
//       id: "picount",
//       title: "Picount",
//       role: "Backend Dev",
//       desc: "Asset management & expense tracker web service categorized by user needs.",
//       img: "icons/picount.png",
//       stack: [
//         "Java",
//         "Spring Boot",
//         "Spring Data JPA",
//         "MySQL",
//         "H2 (Test Database)",
//         "REST API"
//       ],
//       links: { github: "https://github.com/Picount-SOLUX" },
//       detail: {
//         overview:
//           "PICOUNT (Piece + Count) is a budget-first household ledger that helps users split their budget into categories and track spending with clear visuals and motivating diary-style customization.",
//         problem:
//           "Many users want structured budget control, but existing apps are either too complex, hard to stick with daily, or unfriendly to beginners who don’t know how to start budgeting.",
//         solution:
//           "We designed features around real pain points: category-based budget ‘pieces’ with visual tracking, a diary-like UI (stickers/themes) to keep the habit, and a monthly report that summarizes spending by category and emotion to help users reflect and plan.",
//         contributions: [
//           "Built core features: Friends, Guestbook, Calendar (diary + photos), and income/expense transaction creation flow.",
//           "Implemented the Month-End Report feature to visualize spending summaries and trends.",
//           "Designed and implemented related REST APIs and database interactions (Spring Boot + MySQL/H2), focusing on reliable CRUD and clean data modeling."
//         ]
//       }
//     },
// {
//   id: "recipe",
//   title: "The Only Recipe",
//   role: "Client-side Game Development",
//   desc: "A healing, story-driven 2D baking tycoon game about running an inherited bakery.",
//   img: "icons/recipe2.png",
//   stack: ["Unity", "C#"],
//   links: {
//     github: "https://github.com/SUHHAN/HexaSnow",
//     playstore: "https://play.google.com/store/apps/details?id=com.DefaultCompany.HexaSnow"
//   },
//   detail: {
//     overview:
//       "A healing, story-driven 2D baking simulation game where the player runs their grandmother’s bakery for 10 in-game days, baking goods, serving customers, and experiencing a warm narrative that unfolds into multiple endings.",
//     problem:
//       "The main challenge was preventing repetitive gameplay while maintaining a relaxing experience, and designing baking mechanics that felt engaging yet accessible to casual players.",
//     solution:
//       "We introduced multiple interactive baking mini-games, a structured recipe and ingredient system, and customer-specific scenarios that influence outcomes, creating variety while keeping the core loop intuitive and emotionally engaging.",
//     contributions: [
//       "Led the full client-side development of the game, covering gameplay flow, UI, and system integration using Unity and C#.",
//       "Designed and implemented the complete baking flow, including ingredient selection, dough and oven mini-games, and topping systems.",
//       "Developed the recipe system managing unlock conditions, ingredients, and real-time synchronization with the in-game recipe book.",
//       "Implemented customer-specific scenarios and branching outcomes based on baking results and topping combinations."
//     ]
//   }
// },

// {
//   id: "taw",
//   title: "Travel Around The World",
//   role: "Client-side Game Development",
//   desc: "Story-driven visual novel simulation about running a café on a train traveling around the world.",
//   img: "icons/taw.png",
//   stack: ["Unity", "C#"],
//   links: {
//     github: "https://github.com/TUMS-Cafe/TravelAroundTheWorld"
//   },
//   detail: {
//     overview:
//       "A story-driven adventure simulation set on the Luna Express, a train traveling across the world. The player works as a barista, serving drinks during the day and exploring the train at night, uncovering passengers’ stories and hidden secrets that lead to multiple endings.",
//     problem:
//       "The main challenge was to seamlessly combine narrative progression with simulation gameplay, while keeping the daily routine engaging and ensuring player choices meaningfully affected the story.",
//     solution:
//       "We designed a structured day–night progression system, integrated café operations directly into story flow, and implemented branching dialogue and event systems that react to player actions, relationships, and accumulated choices.",
//     contributions: [
//       "Developed the full Chapter 1 gameplay flow, including story progression, café operation sequences, exploration, and ending branching logic.",
//       "Implemented a CSV-based dialogue and event management system to improve maintainability and scalability of narrative content.",
//       "Built the café operation loop (dialogue → order → drink crafting → reaction) and asynchronous room-service events.",
//       "Implemented exploration and NPC interaction systems, quest tracking UI, and ending branch logic (Happy / Bad endings)."
//     ]
//   }
// },

// {
//   id: "knight",
//   title: "The Way to Be Knight",
//   role: "Client-side Game Logic & Story Systems",
//   desc: "A collectible RPG adventure game focused on NPC interaction, story progression, and multiple endings.",
//   img: "icons/twk.png",
//   stack: ["Unity", "C#"],
//   links: {
//     github: "https://github.com/SUHHAN/FIVEUS"
//   },
//   detail: {
//     overview:
//       "A collectible RPG story adventure where players interact with various NPCs, build relationships, form a party, and progress through a branching narrative that leads to multiple endings based on choices and stats.",
//     problem:
//       "The key challenge was managing complex story progression driven by NPC interactions, affinity changes, time-based events, and player choices, while keeping the systems understandable and maintainable.",
//     solution:
//       "We implemented data-driven story and interaction systems using CSV-based dialogue, affinity and persuasion mechanics, time-based NPC movement, and conditional branching logic to ensure player decisions meaningfully affected progression and endings.",
//     contributions: [
//       "Designed and implemented NPC interaction systems including dialogue, affinity, persuasion, and gift mechanics.",
//       "Built a CSV-based dialogue system supporting choices, affinity changes, and conditional branching.",
//       "Implemented time-of-day NPC movement logic and interaction availability control.",
//       "Developed story progression and multiple ending logic based on clues, stats, and player decisions.",
//       "Implemented joystick-based player movement and scene interaction logic."
//     ]
//   }
// }

//   ],
//   activities: [
//     { title: "WooriFISA 6th", period: "2025.12 ~ Present", desc: "Cloud Service Development Course" },
//     { title: "Dev Club Executive", period: "2024.03 ~ 2026.02", desc: "Organized tech seminars. Won Grand Prize & 1st Place in Project Exhibition." },
//     { title: "Algorithm Club Executive", period: "2024.03 ~ 2025.02", desc: "Mentored junior students in data structures and algorithm optimization." },
//     { title: "Game Dev Club", period: "2023.09 ~ 2025.02", desc: "UNIDEV UNICON Excellence Award / SBA Contest Excellence Award" }
//   ]
// };

// // --- App Logic ---

// document.addEventListener("DOMContentLoaded", () => {
//   const app = document.getElementById("app");
  
//   initTheme();

//   window.addEventListener("hashchange", router);
//   router();

//   function router() {
//     const hash = window.location.hash;
    
//     window.scrollTo(0, 0);

//     if (hash.startsWith("#project/")) {
//       const projectId = hash.split("/")[1];
//       const project = portfolioData.projects.find(p => p.id === projectId);
//       if (project) {
//         renderDetail(project);
//       } else {
//         renderHome();
//       }
//     } else {
//       renderHome();
//     }
//   }

//   function renderHome() {
//     const { profile, certs, projects, activities } = portfolioData;

//     app.innerHTML = `
//       <header class="profile-section">
//         <div class="avatar-wrapper">
//           <img src="${profile.avatar}" alt="${profile.name}" class="avatar" />
//         </div>
//         <div class="profile-info">
//           <h1 class="name">${profile.name}</h1>
//           <p class="role">${profile.role}</p>
//           <p class="bio">${profile.bio}</p>
//           <div class="social-links">
//             <a href="mailto:${profile.email}" class="btn-pill">Email</a>
//             <a href="${profile.github}" target="_blank" class="btn-pill">GitHub</a>
//           </div>
//         </div>
//       </header>

//       <hr class="divider" />

//       <section class="fade-in">
//         <h2 class="section-title">Certifications</h2>
//         <div class="certs-list">
//           ${certs.map(c => `<span class="cert-badge">${c}</span>`).join('')}
//         </div>
//       </section>

//       <section class="fade-in">
//         <h2 class="section-title">Featured Projects</h2>
//         <div class="grid-container">
//           ${projects.map(p => `
//             <a href="#project/${p.id}" class="project-card">
//               <div class="card-img-wrapper">
//                 <img src="${p.img}" alt="${p.title}" />
//               </div>
//               <div class="card-content">
//                 <div class="card-header">
//                   <h3>${p.title}</h3>
//                   <span class="role-badge">${p.role}</span>
//                 </div>
//                 <p class="card-desc">${p.desc}</p>
//                 <div class="tech-stack">
//                   ${p.stack.slice(0, 3).map(t => `<span class="tech-item">${t}</span>`).join('')}
//                   ${p.stack.length > 3 ? `<span class="tech-item">+${p.stack.length - 3}</span>` : ''}
//                 </div>
//               </div>
//             </a>
//           `).join('')}
//         </div>
//       </section>

//       <section class="fade-in">
//         <h2 class="section-title">Experience & Activities</h2>
//         <div class="activity-list">
//           ${activities.map(a => `
//             <div class="activity-item">
//               <div class="act-header">
//                 <h4>${a.title}</h4>
//                 <span class="period">${a.period}</span>
//               </div>
//               <p class="act-desc">${a.desc}</p>
//             </div>
//           `).join('')}
//         </div>
//       </section>

//       <footer>
//         &copy; 2026 ${profile.name}. All rights reserved.
//       </footer>
//     `;
//   }

//   function renderDetail(p) {
//     app.innerHTML = `
//       <nav class="back-nav">
//         <button onclick="history.pushState('', document.title, window.location.pathname + window.location.search); window.dispatchEvent(new Event('hashchange'));" class="back-btn">
//           ← Back to Portfolio
//         </button>
//       </nav>

//       <article class="detail-header">
//         <h1 class="detail-title">${p.title}</h1>
//         <span class="role-badge" style="font-size: 0.9rem; padding: 6px 12px;">${p.role}</span>
//       </article>

//       <div class="detail-grid">
//         <div class="detail-main">
//           <img src="${p.img}" alt="${p.title}" class="detail-image" />
          
//           <div class="detail-desc">
//             <h3>Overview</h3>
//             <p>${p.detail.overview}</p>

//             <h3>Problem & Solution</h3>
//             <p><strong>Problem:</strong> ${p.detail.problem}</p>
//             <p><strong>Solution:</strong> ${p.detail.solution}</p>

//             <h3>Key Contributions</h3>
//             <ul>
//               ${p.detail.contributions.map(item => `<li>${item}</li>`).join('')}
//             </ul>
//           </div>
//         </div>

//         <aside class="detail-sidebar">
//           <div class="sidebar-section">
//             <span class="sidebar-label">Tech Stack</span>
//             <div class="tech-stack" style="margin-top:8px;">
//               ${p.stack.map(t => `<span class="tech-item">${t}</span>`).join('')}
//             </div>
//           </div>
          
//           <div class="sidebar-section">
//             <span class="sidebar-label">Links</span>
//             <a href="${p.links.github}" target="_blank" class="btn-pill" style="display:block; text-align:center; width:100%;">GitHub Repository</a>
//           </div>
//         </aside>
//       </div>
      
//       <footer>
//         &copy; 2026 Sunwoo Jung. All rights reserved.
//       </footer>
//     `;
    
//     const backBtn = app.querySelector('.back-btn');
//     backBtn.onclick = (e) => {
//         e.preventDefault();
//         window.location.hash = "";
//     };
//   }

//   function initTheme() {
//     const STORAGE_KEY = "theme";
//     const toggleBtn = document.getElementById("themeToggle");
//     const iconEl = toggleBtn.querySelector(".theme-icon");

//     const systemPrefersDark = () => window.matchMedia("(prefers-color-scheme: dark)").matches;

//     const applyTheme = (theme) => {
//       document.documentElement.setAttribute("data-theme", theme);
//       iconEl.textContent = theme === "dark" ? "🌙" : "☀️";
//       toggleBtn.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} mode`);
//     };

//     const getInitialTheme = () => {
//       const saved = localStorage.getItem(STORAGE_KEY);
//       if (saved) return saved;
//       return systemPrefersDark() ? "dark" : "light";
//     };

//     applyTheme(getInitialTheme());

//     toggleBtn.addEventListener("click", () => {
//       const current = document.documentElement.getAttribute("data-theme") || "dark";
//       const next = current === "dark" ? "light" : "dark";
//       localStorage.setItem(STORAGE_KEY, next);
//       applyTheme(next);
//     });
//   }
// });

const portfolioData = {
  profile: {
    name: "정선우",
    role: "풀스택 & SAP 개발자",
    bio: "다양한 프로젝트에 참여하며 성장하는 과정을 즐기고 있습니다. 언제든 피드백과 협업을 환영합니다!",
    avatar: "icons/profile2.jpg",
    email: "gmhie1208@gmail.com",
    github: "https://github.com/jsssun"
  },

  certs: [
    "정보처리기사",
    "SAP Certified Associate (ABAP Cloud)",
    "OPIc IH"
  ],

  projects: [
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
          "CLOVA OCR 및 챗봇 API를 FastAPI 백엔드와 연동하여 자연어 질문을 해석하고, 일정 및 학습 정보를 즉시 제공하도록 구현했습니다.",
        contributions: [
          "위비 캐릭터 아이콘을 활용한 친근한 챗봇 인터페이스 구현",
          "모바일 환경을 고려한 반응형 UI 설계 및 적용",
          "한글·영문 폰트를 함께 적용해 가독성과 접근성 개선"
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
          "PICOUNT(Piece + Count)는 예산을 카테고리별로 ‘조각내어’ 관리할 수 있도록 돕는 예산 중심 가계부 서비스입니다.",
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
      id: "recipe",
      title: "단 하나의 레시피 (The Only Recipe)",
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
          "손님별 시나리오 및 결과 분기 로직 구현"
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
          "세계를 여행하는 열차 ‘루나 익스프레스’를 배경으로, 낮에는 카페를 운영하고 밤에는 열차를 탐험하며 승객들의 이야기를 풀어가는 스토리 중심 어드벤처 게임입니다.",
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
      id: "knight",
      title: "The Way to Be Knight",
      role: "클라이언트 게임 로직 & 스토리 시스템",
      desc: "NPC 상호작용과 선택에 따라 전개되는 수집형 RPG 스토리 어드벤처",
      img: "icons/twk.png",
      stack: ["Unity", "C#"],
      links: {
        github: "https://github.com/SUHHAN/FIVEUS"
      },
      detail: {
        overview:
          "다양한 NPC와의 상호작용을 통해 관계를 형성하고, 선택과 능력치에 따라 여러 엔딩으로 분기되는 수집형 RPG 스토리 어드벤처 게임입니다.",
        problem:
          "NPC 호감도, 설득, 시간대, 선택지 등 여러 요소가 얽힌 스토리 진행을 안정적으로 관리하는 것이 과제였습니다.",
        solution:
          "CSV 기반 대화 시스템과 데이터 중심 설계를 적용하고, 조건 기반 분기 로직을 통해 플레이어 선택이 스토리와 엔딩에 직접 반영되도록 구현했습니다.",
        contributions: [
          "NPC 대화, 호감도, 설득, 선물 시스템 구현",
          "선택지·조건 분기를 지원하는 CSV 기반 대화 시스템 개발",
          "시간대별 NPC 이동 및 상호작용 제어 로직 구현",
          "다중 엔딩 분기 및 조이스틱 이동 시스템 구현"
        ]
      }
    }
  ],

  activities: [
    {
      title: "우리FISA 6기",
      period: "2025.12 ~ 현재",
      desc: "클라우드 서비스 개발 과정"
    },
    {
      title: "개발 동아리 임원",
      period: "2024.03 ~ 2026.02",
      desc: "기술 세미나 운영 및 프로젝트 발표회 대상, 최우수상 수상"
    },
    {
      title: "알고리즘 스터디 임원",
      period: "2024.03 ~ 2025.02",
      desc: "자료구조 및 알고리즘 학습 멘토링 진행"
    },
    {
      title: "게임 개발 동아리",
      period: "2023.09 ~ 2025.02",
      desc: "UNICON 우수상, SBA 게임 공모전 우수상 수상"
    }
  ]
};
