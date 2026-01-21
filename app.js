const portfolioData = {
  profile: {
    name: "Sunwoo Jung",
    role: "Full Stack & SAP Developer",
    bio: "Currently diving into open source projects and enjoying the journey. Always open to feedback and collaboration!",
    avatar: "icons/profile2.jpg",
    email: "gmhie1208@gmail.com",
    github: "https://github.com/jsssun"
  },
  certs: [
    "Engineer Information Processing",
    "SAP Certified Associate (ABAP Cloud)",
    "OPIc (IH)"
  ],
  projects: [
    {
      id: "wibee",
      title: "Wibee Chatbot",
      role: "Full Stack",
      desc: "Schedule & Learning Guide Chatbot using CLOVA API for WooriFISA students.",
      img: "icons/wibee-chatbot.png",
      stack: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "NAVER CLOVA Chatbot"],
      links: { github: "https://github.com/nnyouung/woorifisa-chatbot" },
      detail: {
        overview: "A web-based chatbot demo that reduces repetitive questions about schedules and learning materials by providing a 24/7 conversational UI for Woori FISA students.",
        problem: "Students frequently missed announcements and staff faced repetitive questions. We needed a system available 24/7.",
        solution: "Integrated CLOVA OCR and Chatbot API with a FastAPI backend to interpret natural language queries and provide instant schedule updates.",
        contributions: [
          "Designed the FastAPI backend architecture and database schema.",
          "Integrated Naver CLOVA API for high-accuracy Korean natural language processing."
        ]
      }
    },
    {
      id: "picount",
      title: "Picount",
      role: "Backend Dev",
      desc: "Asset management & expense tracker web service categorized by user needs.",
      img: "icons/picount.png",
      stack: [
        "Java",
        "Spring Boot",
        "Spring Data JPA",
        "MySQL",
        "H2 (Test Database)",
        "REST API"
      ],
      links: { github: "https://github.com/Picount-SOLUX" },
      detail: {
        overview:
          "PICOUNT (Piece + Count) is a budget-first household ledger that helps users split their budget into categories and track spending with clear visuals and motivating diary-style customization.",
        problem:
          "Many users want structured budget control, but existing apps are either too complex, hard to stick with daily, or unfriendly to beginners who don’t know how to start budgeting.",
        solution:
          "We designed features around real pain points: category-based budget ‘pieces’ with visual tracking, a diary-like UI (stickers/themes) to keep the habit, and a monthly report that summarizes spending by category and emotion to help users reflect and plan.",
        contributions: [
          "Built core features: Friends, Guestbook, Calendar (diary + photos), and income/expense transaction creation flow.",
          "Implemented the Month-End Report feature to visualize spending summaries and trends.",
          "Designed and implemented related REST APIs and database interactions (Spring Boot + MySQL/H2), focusing on reliable CRUD and clean data modeling."
        ]
      }
    },
{
  id: "recipe",
  title: "The Only Recipe",
  role: "Client-side Game Development",
  desc: "A healing, story-driven 2D baking tycoon game about running an inherited bakery.",
  img: "icons/recipe2.png",
  stack: ["Unity", "C#"],
  links: {
    github: "https://github.com/SUHHAN/HexaSnow",
    playstore: "https://play.google.com/store/apps/details?id=com.DefaultCompany.HexaSnow"
  },
  detail: {
    overview:
      "A healing, story-driven 2D baking simulation game where the player runs their grandmother’s bakery for 10 in-game days, baking goods, serving customers, and experiencing a warm narrative that unfolds into multiple endings.",
    problem:
      "The main challenge was preventing repetitive gameplay while maintaining a relaxing experience, and designing baking mechanics that felt engaging yet accessible to casual players.",
    solution:
      "We introduced multiple interactive baking mini-games, a structured recipe and ingredient system, and customer-specific scenarios that influence outcomes, creating variety while keeping the core loop intuitive and emotionally engaging.",
    contributions: [
      "Led the full client-side development of the game, covering gameplay flow, UI, and system integration using Unity and C#.",
      "Designed and implemented the complete baking flow, including ingredient selection, dough and oven mini-games, and topping systems.",
      "Developed the recipe system managing unlock conditions, ingredients, and real-time synchronization with the in-game recipe book.",
      "Implemented customer-specific scenarios and branching outcomes based on baking results and topping combinations."
    ]
  }
},

{
  id: "taw",
  title: "Travel Around The World",
  role: "Client-side Game Development",
  desc: "Story-driven visual novel simulation about running a café on a train traveling around the world.",
  img: "icons/taw.png",
  stack: ["Unity", "C#"],
  links: {
    github: "https://github.com/TUMS-Cafe/TravelAroundTheWorld"
  },
  detail: {
    overview:
      "A story-driven adventure simulation set on the Luna Express, a train traveling across the world. The player works as a barista, serving drinks during the day and exploring the train at night, uncovering passengers’ stories and hidden secrets that lead to multiple endings.",
    problem:
      "The main challenge was to seamlessly combine narrative progression with simulation gameplay, while keeping the daily routine engaging and ensuring player choices meaningfully affected the story.",
    solution:
      "We designed a structured day–night progression system, integrated café operations directly into story flow, and implemented branching dialogue and event systems that react to player actions, relationships, and accumulated choices.",
    contributions: [
      "Developed the full Chapter 1 gameplay flow, including story progression, café operation sequences, exploration, and ending branching logic.",
      "Implemented a CSV-based dialogue and event management system to improve maintainability and scalability of narrative content.",
      "Built the café operation loop (dialogue → order → drink crafting → reaction) and asynchronous room-service events.",
      "Implemented exploration and NPC interaction systems, quest tracking UI, and ending branch logic (Happy / Bad endings)."
    ]
  }
},

{
  id: "knight",
  title: "The Way to Be Knight",
  role: "Client-side Game Logic & Story Systems",
  desc: "A collectible RPG adventure game focused on NPC interaction, story progression, and multiple endings.",
  img: "icons/twk.png",
  stack: ["Unity", "C#"],
  links: {
    github: "https://github.com/SUHHAN/FIVEUS"
  },
  detail: {
    overview:
      "A collectible RPG story adventure where players interact with various NPCs, build relationships, form a party, and progress through a branching narrative that leads to multiple endings based on choices and stats.",
    problem:
      "The key challenge was managing complex story progression driven by NPC interactions, affinity changes, time-based events, and player choices, while keeping the systems understandable and maintainable.",
    solution:
      "We implemented data-driven story and interaction systems using CSV-based dialogue, affinity and persuasion mechanics, time-based NPC movement, and conditional branching logic to ensure player decisions meaningfully affected progression and endings.",
    contributions: [
      "Designed and implemented NPC interaction systems including dialogue, affinity, persuasion, and gift mechanics.",
      "Built a CSV-based dialogue system supporting choices, affinity changes, and conditional branching.",
      "Implemented time-of-day NPC movement logic and interaction availability control.",
      "Developed story progression and multiple ending logic based on clues, stats, and player decisions.",
      "Implemented joystick-based player movement and scene interaction logic."
    ]
  }
}

  ],
  activities: [
    { title: "WooriFISA 6th", period: "2025.12 ~ Present", desc: "Cloud Service Development Course" },
    { title: "Dev Club Executive", period: "2024.03 ~ 2026.02", desc: "Organized tech seminars. Won Grand Prize & 1st Place in Project Exhibition." },
    { title: "Algorithm Club Executive", period: "2024.03 ~ 2025.02", desc: "Mentored junior students in data structures and algorithm optimization." },
    { title: "Game Dev Club", period: "2023.09 ~ 2025.02", desc: "UNIDEV UNICON Excellence Award / SBA Contest Excellence Award" }
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
      const project = portfolioData.projects.find(p => p.id === projectId);
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
    const { profile, certs, projects, activities } = portfolioData;

    app.innerHTML = `
      <header class="profile-section">
        <div class="avatar-wrapper">
          <img src="${profile.avatar}" alt="${profile.name}" class="avatar" />
        </div>
        <div class="profile-info">
          <h1 class="name">${profile.name}</h1>
          <p class="role">${profile.role}</p>
          <p class="bio">${profile.bio}</p>
          <div class="social-links">
            <a href="mailto:${profile.email}" class="btn-pill">Email</a>
            <a href="${profile.github}" target="_blank" class="btn-pill">GitHub</a>
          </div>
        </div>
      </header>

      <hr class="divider" />

      <section class="fade-in">
        <h2 class="section-title">Certifications</h2>
        <div class="certs-list">
          ${certs.map(c => `<span class="cert-badge">${c}</span>`).join('')}
        </div>
      </section>

      <section class="fade-in">
        <h2 class="section-title">Featured Projects</h2>
        <div class="grid-container">
          ${projects.map(p => `
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
                  ${p.stack.slice(0, 3).map(t => `<span class="tech-item">${t}</span>`).join('')}
                  ${p.stack.length > 3 ? `<span class="tech-item">+${p.stack.length - 3}</span>` : ''}
                </div>
              </div>
            </a>
          `).join('')}
        </div>
      </section>

      <section class="fade-in">
        <h2 class="section-title">Experience & Activities</h2>
        <div class="activity-list">
          ${activities.map(a => `
            <div class="activity-item">
              <div class="act-header">
                <h4>${a.title}</h4>
                <span class="period">${a.period}</span>
              </div>
              <p class="act-desc">${a.desc}</p>
            </div>
          `).join('')}
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
        <button onclick="history.pushState('', document.title, window.location.pathname + window.location.search); window.dispatchEvent(new Event('hashchange'));" class="back-btn">
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
              ${p.detail.contributions.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
        </div>

        <aside class="detail-sidebar">
          <div class="sidebar-section">
            <span class="sidebar-label">Tech Stack</span>
            <div class="tech-stack" style="margin-top:8px;">
              ${p.stack.map(t => `<span class="tech-item">${t}</span>`).join('')}
            </div>
          </div>
          
          <div class="sidebar-section">
            <span class="sidebar-label">Links</span>
            <a href="${p.links.github}" target="_blank" class="btn-pill" style="display:block; text-align:center; width:100%;">GitHub Repository</a>
          </div>
        </aside>
      </div>
      
      <footer>
        &copy; 2026 Sunwoo Jung. All rights reserved.
      </footer>
    `;
    
    const backBtn = app.querySelector('.back-btn');
    backBtn.onclick = (e) => {
        e.preventDefault();
        window.location.hash = "";
    };
  }

  function initTheme() {
    const STORAGE_KEY = "theme";
    const toggleBtn = document.getElementById("themeToggle");
    const iconEl = toggleBtn.querySelector(".theme-icon");

    const systemPrefersDark = () => window.matchMedia("(prefers-color-scheme: dark)").matches;

    const applyTheme = (theme) => {
      document.documentElement.setAttribute("data-theme", theme);
      iconEl.textContent = theme === "dark" ? "🌙" : "☀️";
      toggleBtn.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} mode`);
    };

    const getInitialTheme = () => {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return saved;
      return systemPrefersDark() ? "dark" : "light";
    };

    applyTheme(getInitialTheme());

    toggleBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "dark";
      const next = current === "dark" ? "light" : "dark";
      localStorage.setItem(STORAGE_KEY, next);
      applyTheme(next);
    });
  }
});