/* ==========================================================
   EDIT THIS SECTION: all your content lives here.
   ========================================================== */

const PROFILE = {
  email: "your.email@example.com", // <- put your real email
  resume: "", // e.g. "resume.pdf" (put the file in this folder). Empty = button hidden
  socials: [
    { label: "GitHub", url: "https://github.com/Nithin-Naveen" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/naveenkumar-v-b2748b39a/" },
    // { label: "Resume", url: "resume.pdf" },
  ],
};

const PROJECTS = [
  {
    name: "OnionGrade AI",
    category: "Hackathon · SIH26031",
    tagline:
      "AI-based onion quality assessment and grading for farmers, mandi admins and buyers.",
    highlights: [
      "Gemini Vision analyses uploaded onion images for defects and assigns a quality grade.",
      "Role-based dashboards for farmer, mandi admin and buyer with JWT authentication.",
      "PDF grading reports, QR verification and a hash-chained audit log for tamper evidence.",
      "FastAPI backend on PostgreSQL with a React, Vite and Tailwind frontend.",
    ],
    stack: ["React", "Vite", "Tailwind", "FastAPI", "PostgreSQL", "Gemini Vision", "JWT"],
    links: [
      // { label: "Source", url: "https://github.com/your-username/oniongrade-ai" },
    ],
  },
  {
    name: "AuraRAG",
    category: "AI · Retrieval",
    tagline:
      "An interactive RAG chatbot that shows its work: chunks, vectors and citations.",
    highlights: [
      "Fully in-browser pipeline: configurable chunking, TF-IDF vectors and cosine similarity.",
      "Citation matching ties every answer back to the source chunks it used.",
      "Visual chunk and vector debugger so you can see why a passage was retrieved.",
      "Dark glassmorphism interface; live generation through the Groq API.",
    ],
    stack: ["React", "Vite", "Vanilla CSS", "TF-IDF", "Groq API", "lucide-react"],
    links: [],
  },
  {
    name: "Support Chatbot",
    category: "Full-stack · AI",
    tagline:
      "An AI customer-support chatbot with an admin dashboard for conversations and analytics.",
    highlights: [
      "Express API calling Google Gemini for natural-language replies.",
      "MongoDB with Mongoose for conversations, plus a seed script for demo data.",
      "React and Vite admin dashboard with JWT login and Recharts analytics.",
      "Dark slate and indigo UI with animated SVG details.",
    ],
    stack: ["React", "Vite", "Node.js", "Express", "MongoDB", "Mongoose", "Gemini API", "Recharts"],
    links: [],
  },
  {
    name: "Polyglot",
    category: "Tool · Translation",
    tagline: "A translation tool covering 24 languages, styled like manuscript paper.",
    highlights: [
      "Node and Express backend that proxies requests to Gemini (gemini-2.0-flash).",
      "Plain HTML, CSS and JavaScript frontend with a parchment and ink-blue theme.",
      "Packaged for submission with a full README and zero-cost dependencies.",
    ],
    stack: ["Node.js", "Express", "Gemini API", "HTML", "CSS", "JavaScript"],
    links: [],
  },
];

// Leave empty to hide the Education section. Example entry:
// { title: "B.E. Computer Science", place: "Your College", period: "2023 – 2027", note: "AI/ML coursework" }
const EDUCATION = [];

const STACK = [
  { title: "Frontend", items: ["React", "Vite", "HTML / CSS / JS", "Tailwind CSS", "Recharts"] },
  { title: "Backend", items: ["Node.js + Express", "FastAPI (Python)", "Flask", "JWT auth", "REST APIs"] },
  { title: "Data", items: ["PostgreSQL", "MongoDB + Mongoose", "SQLite", "TF-IDF search"] },
  { title: "AI", items: ["Gemini API", "Groq API", "RAG pipelines", "Vision analysis", "Gradio"] },
];

/* ==========================================================
   Rendering and behavior (you normally don't need to edit)
   ========================================================== */

const $ = (sel, root = document) => root.querySelector(sel);

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

/* Projects */
function renderProjects() {
  const list = $("#projectList");
  PROJECTS.forEach((p, i) => {
    const li = el("li", "project reveal");
    const panelId = `panel-${i}`;

    const btn = el("button", "project-btn");
    btn.type = "button";
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-controls", panelId);

    const left = el("div");
    const meta = el("div", "project-meta");
    meta.append(el("span", "tag", p.category));
    left.append(meta, el("h3", "project-name", p.name), el("p", "project-tagline", p.tagline));
    btn.append(left, el("span", "plus", "+"));

    const panel = el("div", "project-panel");
    panel.id = panelId;
    const wrapper = el("div");
    const inner = el("div", "panel-inner");

    const what = el("div");
    what.append(el("h4", null, "What I built"));
    const ul = el("ul", "highlights");
    p.highlights.forEach((h) => ul.append(el("li", null, h)));
    what.append(ul);

    const tech = el("div");
    tech.append(el("h4", null, "Stack"));
    const chips = el("div", "chips");
    p.stack.forEach((s) => chips.append(el("span", "chip", s)));
    tech.append(chips);

    if (p.links && p.links.length) {
      const links = el("div", "project-links");
      p.links.forEach((l) => {
        const a = el("a", "btn", l.label + " ↗");
        a.href = l.url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        links.append(a);
      });
      tech.append(links);
    }

    inner.append(what, tech);
    wrapper.append(inner);
    panel.append(wrapper);

    btn.addEventListener("click", () => {
      const open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!open));
      panel.classList.toggle("open", !open);
    });

    li.append(btn, panel);
    list.append(li);
  });

  // Open the first project so the section is not empty at first glance
  const firstBtn = $(".project-btn");
  if (firstBtn) firstBtn.click();
}

/* Stack */
function renderStack() {
  const grid = $("#stackGrid");
  STACK.forEach((group) => {
    const card = el("div", "stack-card reveal");
    card.append(el("h3", null, group.title));
    const ul = el("ul");
    group.items.forEach((item) => ul.append(el("li", null, item)));
    card.append(ul);
    grid.append(card);
  });
}

/* Education + resume (both stay hidden until you fill them in) */
function renderExtras() {
  if (PROFILE.resume) {
    const r = $("#resumeLink");
    r.href = PROFILE.resume;
    r.hidden = false;
  }
  if (EDUCATION.length) {
    const list = $("#timeline");
    EDUCATION.forEach((e) => {
      const li = el("li", "timeline-item reveal");
      li.append(el("span", "timeline-period", e.period || ""));
      const body = el("div");
      body.append(el("h3", null, e.title), el("p", "muted", e.place));
      if (e.note) body.append(el("p", null, e.note));
      li.append(body);
      list.append(li);
    });
    $("#education").hidden = false;
  }
}

/* Contact */
function renderContact() {
  const link = $("#emailLink");
  link.href = `mailto:${PROFILE.email}`;
  link.textContent = PROFILE.email;

  $("#copyEmail").addEventListener("click", async (e) => {
    const btn = e.currentTarget;
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      btn.textContent = "Copied ✓";
    } catch {
      btn.textContent = "Press Ctrl+C on the email";
    }
    setTimeout(() => (btn.textContent = "Copy email"), 2000);
  });

  const socials = $("#socials");
  PROFILE.socials.forEach((s) => {
    const li = el("li");
    const a = el("a", null, s.label + " ↗");
    a.href = s.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    li.append(a);
    socials.append(li);
  });
}

/* Theme toggle */
function initTheme() {
  const root = document.documentElement;
  const label = $("#themeLabel");
  const prefersDark = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
  const current = () => root.getAttribute("data-theme") || (prefersDark() ? "dark" : "light");
  const sync = () => (label.textContent = current() === "dark" ? "Light" : "Dark");

  sync();
  $("#themeToggle").addEventListener("click", () => {
    const next = current() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    sync();
  });
}

/* Scroll reveal (content stays visible if JS or the observer fails) */
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((n) => n.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  items.forEach((n) => io.observe(n));
  setTimeout(() => items.forEach((n) => n.classList.add("in")), 2500);
}

renderProjects();
renderStack();
renderExtras();
renderContact();
initTheme();
initReveal();
$("#year").textContent = new Date().getFullYear();
