export type ExperienceItem = {
  title: string;
  company: string;
  dates: string;
  location?: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    title: "Founding Full-Stack Engineer",
    company: "Pulse Interactive",
    dates: "2025 - Present",
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
    title: "Web Software Engineer",
    company: "White Sapphire",
    dates: "2023 - 2025",
    location: "Remote",
    bullets: [
      "Developed customer-facing and operational web applications using React, TypeScript, JavaScript, Node.js, Express, REST APIs, SQL-backed workflows, and cloud-hosted deployment patterns.",
      "Built React/TypeScript UI for data-heavy workflows including dashboards, reporting views, filtering, status states, forms, and operational product interfaces.",
      "Integrated frontend applications with Node.js/Express APIs, SQL-backed data models, REST services, JSON contracts, authentication flows, and backend service boundaries.",
      "Improved system performance by 35% through backend optimization, SQL/query refinement, frontend performance tuning, debugging, and cleaner service boundaries across data-heavy paths.",
      "Reduced production defects by 25% by expanding unit, integration, regression, and automated test coverage with Jest, React Testing Library, and Cypress.",
      "Participated in pull requests, code reviews, release validation, defect triage, documentation, and engineering collaboration with product, QA, and backend stakeholders.",
    ],
  },
  {
    title: "Creative Web Producer / Founder",
    company: "FREEPOWER Clothing & Freelance Digital Campaigns",
    dates: "2024 - Present",
    bullets: [
      "Built and managed e-commerce and campaign pages using Shopify, Wix, GoDaddy, structured content workflows, theme edits, product content, media assets, and launch QA.",
      "Created web-ready digital assets, product mockups, social campaign visuals, and content updates using Figma, Photoshop, and Premiere Pro.",
      "Prepared images and video for web use through resizing, exporting, compression, file organization, SEO-aware copy, and responsive page checks.",
      "Strengthened practical product sense across brand, content, usability, conversion, and web production workflows.",
    ],
  },
  {
    title: "Technical Production Engineer / Audio Engineer",
    company: "Sony Music, Republic Records, QUAD Studio, Platinum Sound",
    dates: "2015 - 2022",
    location: "New York, NY",
    bullets: [
      "Supported commercial music and media production workflows in fast-paced, client-facing environments where technical reliability, signal flow, asset management, and production quality directly impacted final deliverables.",
      "Troubleshot audio, session, equipment, routing, and digital production workflow issues under deadline pressure.",
      "Coordinated with artists, producers, engineers, and creative stakeholders to keep production systems reliable and sessions moving.",
      "Managed media assets, technical handoffs, file/session organization, quality control, and repeatable production processes.",
      "Built strong habits around operational excellence, clear communication, incident-style troubleshooting, and calm debugging under pressure.",
    ],
  },
];
