export type Project = {
  slug: string;
  name: string;
  subtitle: string;
  role: string;
  status: "Featured" | "Case Study" | "Prototype" | "Code Sample";
  description: string;
  tech: string[];
  highlights: string[];
  caseStudyAngle: string;
  image: string;
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "pulse",
    name: "Pulse",
    subtitle: "Real-Time Streaming & Operational Dashboard Platform",
    role: "Founding Full-Stack Engineer",
    status: "Featured",
    image: "/projects/pulse_thumb.png",
    description:
      "Built a real-time business streaming and engagement platform with live activity data, dynamic rankings, creator/venue workflows, monetized boosts, dashboard states, and operational tooling.",
    tech: ["React", "Next.js", "TypeScript", "Node.js", "Express", "PostgreSQL", "REST APIs", "Docker", "GitHub", "AWS concepts"],
    highlights: [
      "Built data-heavy React/TypeScript interfaces for live activity streams, ranking systems, dashboard views, admin workflows, and user-facing platform states.",
      "Integrated frontend workflows with Node.js/Express APIs, PostgreSQL-backed data models, authentication, engagement metrics, payment/boost logic, and structured JSON API contracts.",
      "Designed reusable UI components, responsive layouts, loading/error/empty states, and simple-to-navigate UX without relying on dedicated design support.",
      "Debugged frontend/backend data flow issues across APIs, state, service boundaries, and production-style workflows.",
      "Improved developer productivity through clear component patterns, reusable service boundaries, documentation, testing, and repeatable engineering workflows."
    ],
    caseStudyAngle: "Real-time systems, operational dashboards, platform workflows, and full-stack data flow."
  },
  {
    slug: "grapevyne",
    name: "GrapeVyne",
    subtitle: "Data-Heavy Wine Discovery & Personal Cellar Platform",
    role: "Full-Stack Engineer",
    status: "Case Study",
    image: "/projects/grape_thumb.png",
    description:
      "Built a full-stack wine discovery and personal cellar platform that allows users to manage a personal wine cellar, save favorite wines, track tasting activity, and discover wine-related content through structured user-owned data.",
    tech: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "REST APIs", "Authentication", "Protected Routes"],
    highlights: [
      "Built authentication, protected routes, CRUD workflows, relational data models, filtering, API integrations, and structured user-owned records.",
      "Developed reusable React/TypeScript UI, responsive layouts, saved-record flows, search/filter behavior, and predictable frontend/backend data handling.",
      "Designed a simple user experience around structured data, content discovery, saved wines, and personal cellar management."
    ],
    caseStudyAngle: "Data-heavy UI, relational models, content discovery, and user-owned data."
  },
  {
    slug: "martha",
    name: "Martha",
    subtitle: "AI Assistant / User Workflow Application",
    role: "Frontend / Full-Stack Engineer",
    status: "Case Study",
    image: "/projects/martha_placeholder.png",
    description:
      "Built a mobile-first AI assistant experience with responsive UI states, API integrations, structured workflows, error handling, and accessible interaction patterns.",
    tech: ["React", "TypeScript", "API Integrations", "Responsive UI", "AI Workflows"],
    highlights: [
      "Built reusable UI components, responsive states, API-driven workflows, and error handling.",
      "Designed clear user flows for routines, reminders, and personal assistant interactions.",
      "Focused on accessible, mobile-first interaction patterns and iterative product delivery."
    ],
    caseStudyAngle: "AI product UX, API-driven frontend, and user workflows.",
    github: "https://github.com/JPrevilon/MARTHA"
  },
  {
    slug: "ultara",
    name: "Ultara",
    subtitle: "TV Discovery & Media Data Application",
    role: "Full-Stack Engineer",
    status: "Code Sample",
    image: "/projects/ultara_placeholder.png",
    description:
      "Built a TV discovery app around live TVMaze data, search/filter workflows, media content discovery, responsive UI states, and API-driven product behavior.",
    tech: ["JavaScript", "React", "API Integrations", "Media Data", "Responsive UI"],
    highlights: [
      "Integrated live third-party media data through API-driven frontend workflows.",
      "Built discovery, search, and structured content browsing experiences.",
      "Practiced clean frontend state handling, responsive UI, and media-content presentation."
    ],
    caseStudyAngle: "Media data, content discovery, third-party APIs, and user-facing UI.",
    github: "https://github.com/JPrevilon/ULTARA"
  },
  {
    slug: "media-observability-dashboard",
    name: "Media Observability Dashboard",
    subtitle: "React, TypeScript & GraphQL Infrastructure UI Prototype",
    role: "Frontend Engineer",
    status: "Prototype",
    image: "/projects/observability_placeholder.png",
    description:
      "Prototype dashboard for infrastructure-style workflows showing service health, job status, logs, metrics, pipeline events, filters, loading/error states, and GraphQL API consumption patterns.",
    tech: ["React", "TypeScript", "GraphQL", "Dashboard UI", "Observability", "Data Visualization"],
    highlights: [
      "Designed a data-heavy dashboard UI for infrastructure and operational workflows.",
      "Modeled service health, pipeline events, logs, metrics, and media-style processing states.",
      "Demonstrated GraphQL API consumption patterns, loading/error/empty states, filtering, and operational UX."
    ],
    caseStudyAngle: "Observability, developer enablement, operational excellence, data-heavy UI, and infrastructure workflows."
  }
];
