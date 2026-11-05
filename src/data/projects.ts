export type ProjectStatus = "Featured" | "Case Study" | "Prototype" | "Code Sample";

export type Project = {
  slug: string;
  name: string;
  subtitle: string;
  role: string;
  status: ProjectStatus;
  description: string;
  tech: string[];
  highlights: string[];
  roleFit: string[];
  caseStudyAngle: string;
  image: string;
  imageAlt: string;
  caseStudyImage: string;
  caseStudyImageAlt: string;
  caseStudyImageWidth: number;
  caseStudyImageHeight: number;
  problem: string;
  architecture: string[];
  decisions: string[];
  quality: string[];
  improvements: string[];
  links?: {
    github?: string;
    demo?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "pulse",
    name: "Pulse",
    subtitle: "Real-Time Streaming & Operational Dashboard Platform",
    role: "Founder / Full-Stack Engineer — Independent Venture",
    status: "Featured",
    image: "/screenshots/pulse.png",
    imageAlt: "Pulse real-time streaming platform dashboard and architecture visual",
    caseStudyImage: "/screenshots/pulse.png",
    caseStudyImageAlt:
      "Pulse case study visual showing real-time venue streaming, engagement dashboards, and architecture notes",
    caseStudyImageWidth: 1440,
    caseStudyImageHeight: 900,
    description:
      "Built a real-time engagement platform with operator-facing dashboards for live activity data, dynamic rankings, creator/venue workflows, monetized boosts, and fast-changing platform state.",
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "REST APIs",
      "Real-time UI",
      "API Contracts",
      "Docker",
      "GitHub",
    ],
    highlights: [
      "Built React/TypeScript dashboard surfaces for live activity streams, ranking changes, admin workflows, and user-facing platform states.",
      "Integrated frontend workflows with Node.js/Express APIs, PostgreSQL-backed data models, authentication, engagement metrics, boost logic, and structured JSON contracts.",
      "Designed reusable state patterns for loading, empty, error, and live-update views so operators could understand what changed and why.",
      "Debugged frontend/backend data flow across APIs, state, service boundaries, and production-style workflow issues.",
      "Improved developer velocity with reusable component patterns, clearer service boundaries, documentation, testing, and repeatable implementation notes.",
    ],
    roleFit: [
      "Real-time dashboard state",
      "Operational tooling",
      "API contract debugging",
    ],
    caseStudyAngle:
      "Real-time systems, operational dashboards, frontend infrastructure, and full-stack data flow.",
    problem:
      "Real-time engagement products need to keep live activity, ranking logic, creator actions, venue operations, and monetized state changes understandable while product state is moving quickly.",
    architecture: [
      "React and TypeScript UI states consume structured JSON contracts from Node.js and Express service boundaries.",
      "PostgreSQL-backed models support users, venues, engagement events, boosts, rankings, and operational dashboard views.",
      "Dashboard surfaces separate empty, loading, error, and live states so operators can read platform behavior quickly.",
    ],
    decisions: [
      "Modeled reusable dashboard primitives before building feature-specific screens.",
      "Kept API response shapes predictable so frontend state handling stayed debuggable.",
      "Prioritized clear operational states over decorative UI in admin-heavy workflows.",
    ],
    quality: [
      "Validated loading, empty, error, and live-update states across dashboard workflows.",
      "Documented repeatable implementation patterns for components, service boundaries, and API contracts.",
      "Used QA passes and debugging notes to track frontend/backend data-flow issues through release-style iteration.",
    ],
    improvements: [
      "Add richer observability around ranking updates, boost events, and operator actions.",
      "Introduce deeper automated regression coverage for core dashboard workflows.",
      "Expand analytics views for creator, venue, and platform-level trends.",
    ],
  },
  {
    slug: "grapevyne",
    name: "GrapeVyne",
    subtitle: "Data-Heavy Wine Discovery & Personal Cellar Platform",
    role: "Full-Stack Engineer",
    status: "Case Study",
    image: "/screenshots/grapevyne.png",
    imageAlt: "GrapeVyne case study visual showing wine discovery and cellar workflows",
    caseStudyImage: "/screenshots/grapevyne.png",
    caseStudyImageAlt:
      "GrapeVyne case study visual showing protected cellar workflows, architecture notes, and engineering contributions",
    caseStudyImageWidth: 1920,
    caseStudyImageHeight: 1080,
    description:
      "Built a full-stack discovery and personal cellar platform with authenticated data workflows, structured user-owned records, reusable UI states, and search/filter patterns for content-heavy product surfaces.",
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "REST APIs",
      "Authentication",
      "Data Modeling",
      "Workflow UI",
      "Protected Routes",
    ],
    highlights: [
      "Built authentication, protected routes, CRUD workflows, relational data models, filtering, API integrations, and structured user-owned records.",
      "Developed reusable React/TypeScript UI states for saved records, search/filter behavior, forms, and predictable frontend/backend data handling.",
      "Designed a clean product workflow around structured content, saved wines, tasting activity, and personal cellar management.",
    ],
    roleFit: [
      "Data-heavy product UI",
      "Reusable state patterns",
      "Structured content workflows",
    ],
    caseStudyAngle:
      "Data-heavy UI, frontend state architecture, relational models, content discovery, and user-owned data.",
    problem:
      "Wine discovery can become scattered across saved lists, tasting notes, favorites, and content feeds unless the product centers structured user-owned records.",
    architecture: [
      "Protected React routes separate authenticated cellar management from public discovery flows.",
      "REST endpoints coordinate saved wines, cellar records, tasting activity, and search/filter requests.",
      "Relational PostgreSQL models keep user-owned cellar data consistent, queryable, and easier to reason about from the UI.",
    ],
    decisions: [
      "Kept cellar actions close to the wine detail context to reduce workflow jumps.",
      "Used reusable record cards and state patterns for saved wines, favorites, and tasting activity.",
      "Designed filters around user intent instead of exposing raw database fields.",
    ],
    quality: [
      "Checked authenticated route behavior, saved-record workflows, and form states across user-owned data paths.",
      "Modeled predictable API responses so frontend state updates stayed traceable.",
      "Designed empty and error states for search, saved wines, and cellar management flows.",
    ],
    improvements: [
      "Add richer tasting history analytics and cellar recommendations.",
      "Support import/export workflows for cellar records.",
      "Increase end-to-end coverage around authenticated CRUD flows.",
    ],
  },
  {
    slug: "martha",
    name: "Martha",
    subtitle: "AI Assistant / User Workflow Application",
    role: "Frontend / Full-Stack Engineer",
    status: "Case Study",
    image: "/projects/martha_placeholder.png",
    imageAlt: "Martha AI assistant workflow interface concept",
    caseStudyImage: "/projects/martha_placeholder.png",
    caseStudyImageAlt: "Martha AI assistant workflow case study visual",
    caseStudyImageWidth: 1280,
    caseStudyImageHeight: 720,
    description:
      "Built a mobile-first AI assistant experience with structured workflow states, API integrations, error recovery, and interaction patterns designed to keep automated actions understandable.",
    tech: [
      "React",
      "TypeScript",
      "API Integrations",
      "Responsive UI",
      "AI Workflows",
      "Workflow State",
    ],
    highlights: [
      "Built reusable UI components for API status, user input, assistant responses, routine steps, and error handling.",
      "Designed clear workflow paths for routines, reminders, and personal assistant interactions without hiding important state changes.",
      "Focused on accessible, mobile-first interaction patterns and iterative product delivery.",
    ],
    roleFit: [
      "Workflow automation UI",
      "API state handling",
      "Error recovery paths",
    ],
    caseStudyAngle:
      "AI workflow UI, API-driven frontend state, and user-facing automation.",
    problem:
      "Personal assistant tools need to feel calm and reliable even when API responses, user routines, reminders, and edge cases create branching states.",
    architecture: [
      "Mobile-first React UI components organize assistant responses, routine steps, reminders, and error recovery.",
      "API integrations pass structured user workflow data between the interface and assistant logic.",
      "Accessible interaction patterns keep automated actions clear on small screens.",
    ],
    decisions: [
      "Designed workflow states before polishing visuals so the assistant felt dependable.",
      "Separated API status, user input, and response display into reusable UI pieces.",
      "Made error states actionable instead of leaving users in vague failure modes.",
    ],
    quality: [
      "Tested mobile responsive states across routine, reminder, and assistant response flows.",
      "Handled API failures with retry-oriented UI copy and clear user recovery paths.",
      "Kept interaction patterns keyboard and screen-size aware for accessibility.",
    ],
    improvements: [
      "Add stronger personalization controls for routines and reminders.",
      "Introduce conversation history search and saved assistant actions.",
      "Expand test coverage around API failure and retry behavior.",
    ],
    links: {
      github: "https://github.com/JPrevilon/MARTHA",
    },
  },
  {
    slug: "ultara",
    name: "Ultara",
    subtitle: "TV Discovery & Media Data Application",
    role: "Full-Stack Engineer",
    status: "Code Sample",
    image: "/projects/ultara_placeholder.png",
    imageAlt: "Ultara TV discovery and media data interface concept",
    caseStudyImage: "/projects/ultara_placeholder.png",
    caseStudyImageAlt:
      "Ultara TV discovery and media data case study visual",
    caseStudyImageWidth: 1280,
    caseStudyImageHeight: 720,
    description:
      "Built a TV discovery app around live TVMaze data, media metadata normalization, search/filter workflows, responsive UI states, and API-driven product behavior.",
    tech: [
      "JavaScript",
      "React",
      "API Integrations",
      "Media Data",
      "Content Discovery",
      "Responsive UI",
    ],
    highlights: [
      "Integrated live third-party media data through API-driven frontend workflows.",
      "Built discovery, search, and structured content browsing experiences around normalized media metadata.",
      "Handled missing imagery, incomplete metadata, and responsive presentation as expected product states.",
    ],
    roleFit: [
      "Media metadata UI",
      "Third-party API states",
      "Content discovery flows",
    ],
    caseStudyAngle:
      "Media data, content discovery, third-party APIs, and resilient user-facing UI.",
    problem:
      "Media discovery interfaces need to turn noisy third-party data into browseable, searchable, and responsive content experiences without overwhelming users.",
    architecture: [
      "React UI components consume external media API data and normalize it into discovery cards and detail views.",
      "Search and filter state drive content browsing without requiring users to understand the underlying API structure.",
      "Responsive layouts keep media metadata usable across desktop and mobile screens.",
    ],
    decisions: [
      "Centered the experience around discovery and browsing instead of raw API output.",
      "Kept media cards reusable across trending, search, and detail contexts.",
      "Handled missing imagery and metadata as expected product states.",
    ],
    quality: [
      "Checked empty, loading, and missing-media states for third-party API responses.",
      "Validated responsive behavior for card grids, metadata panels, and search controls.",
      "Kept the code sample focused on readable data flow and predictable component state.",
    ],
    improvements: [
      "Add saved lists and persistent user preferences.",
      "Layer in stronger caching, API fallback behavior, and clearer degraded states.",
      "Add automated tests around search, filtering, and missing-data states.",
    ],
    links: {
      github: "https://github.com/JPrevilon/ULTARA",
    },
  },
  {
    slug: "media-observability-dashboard",
    name: "Media Observability Dashboard",
    subtitle: "Frontend Infrastructure & GraphQL Observability UI Prototype",
    role: "Frontend Engineer",
    status: "Prototype",
    image: "/projects/observability_placeholder.png",
    imageAlt: "Media observability dashboard interface concept",
    caseStudyImage: "/projects/observability_placeholder.png",
    caseStudyImageAlt:
      "Media observability dashboard infrastructure case study visual",
    caseStudyImageWidth: 1280,
    caseStudyImageHeight: 720,
    description:
      "Prototyped a frontend infrastructure dashboard for media operations, modeling service health, job status, logs, metrics-style panels, pipeline events, filters, loading/error states, and GraphQL data patterns.",
    tech: [
      "React",
      "TypeScript",
      "GraphQL",
      "Dashboard UI",
      "Observability",
      "Developer Tools",
      "Data Visualization",
    ],
    highlights: [
      "Designed a dense but readable dashboard UI for infrastructure and media operations workflows.",
      "Modeled service health, pipeline events, logs, metrics-style panels, and media processing states.",
      "Demonstrated GraphQL data consumption patterns, loading/error/empty states, filtering, and operator-focused UX.",
    ],
    roleFit: [
      "Observability UI",
      "Developer-tool dashboard",
      "Media pipeline states",
    ],
    caseStudyAngle:
      "Frontend infrastructure, observability UI, developer enablement, operational excellence, and media workflow tooling.",
    problem:
      "Media infrastructure teams need to scan service health, processing jobs, logs, metrics, and pipeline events quickly enough to diagnose operational issues before delivery quality suffers.",
    architecture: [
      "React and TypeScript dashboard components model infrastructure entities, filters, metrics-style panels, and logs.",
      "GraphQL-style data consumption patterns keep nested service, job, and event data queryable from one dashboard surface.",
      "Loading, error, empty, warning, and healthy states make operational context explicit.",
    ],
    decisions: [
      "Designed dense but readable panels for repeated operational scanning.",
      "Modeled media-specific pipeline events instead of generic analytics cards.",
      "Prioritized filtering, state clarity, and incident-style debugging paths.",
    ],
    quality: [
      "Modeled healthy, degraded, failed, loading, and empty dashboard states.",
      "Structured filters and log panels for keyboard-friendly operational scanning.",
      "Kept the prototype ready for future mocked GraphQL resolvers and visual regression coverage.",
    ],
    improvements: [
      "Connect the prototype to a real GraphQL schema and mocked resolver layer.",
      "Add timeline playback for encoding and delivery events.",
      "Expand visual regression tests for dense dashboard states and degraded service scenarios.",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
