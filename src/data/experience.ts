export type ExperienceItem = {
  title: string;
  company: string;
  dates: string;
  location?: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    title: "Founder & Full-Stack Software Engineer — Self-employed",
    company: "Duorya",
    dates: "Aug 2026 - Present",
    bullets: [
      "Build websites and software through a self-employed practice, including client storefront work for Perfume Plug USA.",
      "Work across interface development, API integration, troubleshooting, and deployment workflows.",
    ],
  },
  {
    title: "Founder & Developer",
    company: "PULSE — Independent Venture",
    dates: "2025 - 2026",
    location: "Remote",
    bullets: [
      "Built and led development of PULSE, a real-time streaming and business engagement platform focused on live activity data, dynamic rankings, creator/venue workflows, monetized boosts, dashboards, and operational tools.",
      "Built data-heavy React/Next.js and TypeScript interfaces for live activity streams, ranking systems, dashboard views, admin workflows, and user-facing platform states.",
      "Integrated frontend workflows with Node.js/Express APIs, PostgreSQL-backed data models, authentication, engagement metrics, payment/boost logic, and structured JSON API contracts.",
      "Worked across frontend and backend layers to debug data flow issues, API behavior, user state, service boundaries, and production-style workflow problems.",
      "Took ownership from concept through implementation: clarifying requirements, defining product behavior, building features, QA testing, documenting issues, and iterating toward production-ready releases.",
    ],
  },
  {
    title: "Owner & Developer",
    company: "White Sapphire — Self-owned Independent Venture",
    dates: "2024 - 2025",
    location: "Remote",
    bullets: [
      "Developed customer-facing and operational web applications using React, TypeScript, JavaScript, Node.js, Express, REST APIs, SQL-backed workflows, and cloud-hosted deployment patterns.",
      "Built React/TypeScript UI for data-heavy workflows including dashboards, reporting views, filtering, status states, forms, and operational product interfaces.",
      "Integrated frontend applications with Node.js/Express APIs, SQL-backed data models, REST services, JSON contracts, authentication flows, and backend service boundaries.",
      "Worked on debugging, query refinement, frontend performance, and test coverage while developing the venture's applications.",
    ],
  },
  {
    title: "Music Producer — Production Deal",
    company: "Sony",
    dates: "2019 - 2024",
    bullets: [
      "Worked in music production under a production deal with Sony.",
    ],
  },
  {
    title: "Intern",
    company: "Republic Records",
    dates: "2016 - 2019",
    bullets: [
      "Internship at Republic Records, 2016–2019.",
    ],
  },
];
