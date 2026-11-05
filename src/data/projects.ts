export type ProjectStatus = "Live Website" | "Featured" | "Case Study" | "Prototype" | "Code Sample";

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
  visualNote?: string;
  imageCaption?: string;
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
    slug: "aeterna",
    name: "Aeterna Spa",
    subtitle: "Live Wellness Website & Interactive Brand Experience",
    role: "Website Developer",
    status: "Live Website",
    image: "/projects/aeterna-live.jpg",
    imageAlt: "Reception imagery served by the live Aeterna Spa website",
    caseStudyImage: "/projects/aeterna-live.jpg",
    caseStudyImageAlt: "Aeterna Spa website imagery with warm interiors and green brand accents",
    caseStudyImageWidth: 1376,
    caseStudyImageHeight: 768,
    imageCaption: "Image served by the live Aeterna Spa website. Open the live website to explore the video tour and interactive interface.",
    description:
      "Built the live Aeterna Spa website with HTML, CSS, and JavaScript: a scroll-driven video tour, treatment discovery, interactive comparison sliders, and a consultation enquiry interface.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "Video Interactions",
      "Accessibility",
    ],
    highlights: [
      "Built a scroll-scrubbed tour across six video clips, with sequential media prefetching and synchronized chapter navigation.",
      "Implemented treatment category tabs, responsive navigation, comparison sliders, and reduced-motion alternatives.",
      "Built contact and newsletter form interfaces with validation and phone/email fallback paths.",
    ],
    roleFit: [
      "Live website delivery",
      "Interactive frontend",
      "Responsive brand experience",
    ],
    caseStudyAngle:
      "A published website combining media interaction, service discovery, accessible controls, and consultation paths.",
    problem:
      "Present a wellness brand and its service information through an engaging website with clear navigation and a direct path to make an enquiry.",
    architecture: [
      "Semantic HTML contains the page sections and treatment menu; CSS provides the responsive visual system.",
      "Vanilla JavaScript coordinates video scrubbing, treatment tabs, navigation, carousel states, and comparison sliders.",
      "Consultation calls to action lead to the contact section. Forms validate input and provide phone/email fallback messages when an endpoint is unavailable.",
    ],
    decisions: [
      "Kept the deployed frontend as static HTML, CSS, and JavaScript with no build dependencies.",
      "Prefetched tour clips sequentially and tied chapter navigation to shared scroll progress.",
      "Used keyboard-operable controls and reduced-motion alternatives for interactive sections.",
    ],
    quality: [
      "Includes keyboard navigation for treatment tabs, a no-script preloader fallback, and reduced-motion handling.",
      "The live HTML, stylesheet, and JavaScript match the public repository's aeterna-2-site implementation.",
      "The current website presents consultation and enquiry paths; booking and payment processing are separate integration work.",
    ],
    improvements: [
      "Extend automated coverage of navigation, media loading, and form states.",
      "Validate any future booking-provider or enquiry-backend handoff end to end.",
      "Continue monitoring media-loading performance across mobile devices.",
    ],
    links: {
      github: "https://github.com/JPrevilon/aeterna",
      demo: "https://www.aeternaspa.com/",
    },
  },
  {
    slug: "pulse",
    name: "Pulse",
    subtitle: "Real-Time Streaming & Operational Dashboard Platform",
    role: "Founder & Developer — Independent Venture",
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
    links: {
      github: "https://github.com/JPrevilon/PULSE",
    },
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
      "Built a wine discovery and personal cellar MVP with React, Flask, PostgreSQL, session authentication, and user-owned cellar records. Wine discovery currently uses local mock data behind a replaceable WineService abstraction.",
    tech: [
      "React",
      "JavaScript",
      "Vite",
      "React Router",
      "Python",
      "Flask",
      "PostgreSQL",
      "SQLAlchemy",
      "REST APIs",
      "Session Authentication",
    ],
    highlights: [
      "Implemented signup, login, logout, session restore, and protected cellar/profile routes with a Flask API.",
      "Built cellar CRUD for saved bottles, tasting notes, ratings, occasions, and favorites; server queries filter entries by the authenticated user's ID.",
      "Built React discovery/detail views and Open Cellar shelves, with a mock-data wine service that can later connect to an external provider.",
    ],
    roleFit: [
      "Data-heavy product UI",
      "Reusable state patterns",
      "Structured content workflows",
    ],
    caseStudyAngle:
      "Full-stack MVP, session authentication, relational data modeling, user-owned records, and a mock-data service boundary.",
    problem:
      "Wine discovery can become scattered across saved lists, tasting notes, favorites, and content feeds unless the product centers structured user-owned records.",
    architecture: [
      "React/Vite and React Router provide discovery, wine detail, login, profile, and cellar interfaces.",
      "Flask routes use signed HTTP-only session cookies and pass the current user's ID to cellar services.",
      "SQLAlchemy models relate users, wines, and cellar entries in PostgreSQL; WineService currently searches local mock wine data.",
    ],
    decisions: [
      "Separated wine discovery behind a backend WineService so the mock provider can be replaced without changing the frontend contract.",
      "Kept cellar entry ownership checks in server-side queries.",
      "Used related User, Wine, and CellarEntry records for saved bottle and tasting workflows.",
    ],
    quality: [
      "Includes validation responses, loading/error/empty states, and feedback for key user actions.",
      "Cellar routes require authentication and query records with the current user's ID.",
      "This case study documents the MVP implementation with public source and a mock wine data provider.",
    ],
    improvements: [
      "Connect a real wine data provider through WineService.",
      "Add advanced cellar filtering, sorting, and inventory quantities.",
      "Expand automated coverage of authenticated CRUD and ownership checks.",
    ],
    links: {
      github: "https://github.com/JPrevilon/GRAPEVYNE",
    },
  },
  {
    slug: "martha",
    name: "Martha",
    subtitle: "React Native / Expo Daily Assistant Prototype",
    role: "Mobile Prototype Developer",
    status: "Prototype",
    image: "/projects/martha_placeholder.png",
    imageAlt: "Martha AI assistant workflow interface concept",
    caseStudyImage: "/projects/martha_placeholder.png",
    caseStudyImageAlt: "Martha AI assistant workflow case study visual",
    caseStudyImageWidth: 1280,
    caseStudyImageHeight: 720,
    visualNote: "Concept illustration of the intended assistant interface; the current repository is an early mobile prototype.",
    description:
      "Built an early React Native/Expo daily assistant prototype with a spoken greeting, static sample weather and medication information, and device links for ride, call, and SMS actions. AI services and reminder automation are future work.",
    tech: [
      "React Native",
      "Expo",
      "TypeScript",
      "Expo Router",
      "Expo Speech",
      "Device Deep Links",
    ],
    highlights: [
      "Built a mobile home screen with assistant-themed cards and static sample information.",
      "Added a spoken greeting using Expo Speech.",
      "Added device links for ride, phone, and SMS actions; medication and grocery controls are interface placeholders.",
    ],
    roleFit: [
      "Mobile interface prototype",
      "Speech interaction",
      "Device action links",
    ],
    caseStudyAngle:
      "Early mobile prototyping, speech interaction, and device action links.",
    problem:
      "Explore a simple mobile home screen that brings everyday information and device actions into one calm interface.",
    architecture: [
      "React Native components and Expo Router organize the mobile prototype.",
      "Expo Speech handles the greeting; React Native Linking delegates supported actions to device handlers.",
      "Weather and medication information are static samples; AI and reminder services remain future work.",
    ],
    decisions: [
      "Used Expo to explore a mobile interface across supported platforms.",
      "Kept speech and device-link actions separate from the static information cards.",
      "Left future assistant and reminder services outside the current prototype scope.",
    ],
    quality: [
      "The current repository is an early prototype with sample information and incomplete controls.",
      "Device-link behavior depends on installed handlers and device permissions.",
      "Automated reminders, AI responses, and broader device validation remain follow-up work.",
    ],
    improvements: [
      "Implement medication and grocery interactions with persistent data.",
      "Add a real reminder service and any assistant API integrations.",
      "Validate speech, device links, accessibility, and error handling on target devices.",
    ],
    links: {
      github: "https://github.com/JPrevilon/MARTHA",
    },
  },
  {
    slug: "ultara",
    name: "Ultara",
    subtitle: "TV Discovery & Media Data Application",
    role: "Frontend Developer",
    status: "Code Sample",
    image: "/projects/ultara_placeholder.png",
    imageAlt: "Ultara TV discovery and media data interface concept",
    caseStudyImage: "/projects/ultara_placeholder.png",
    caseStudyImageAlt:
      "Ultara TV discovery and media data case study visual",
    caseStudyImageWidth: 1280,
    caseStudyImageHeight: 720,
    visualNote: "Concept illustration of the media discovery interface; see the repository for the current code sample.",
    description:
      "Built a React/Vite TV discovery code sample using the public TVMaze API, route-based search and detail views, and a Favorites Vault saved in localStorage.",
    tech: [
      "JavaScript",
      "React",
      "Vite",
      "React Router",
      "LocalStorage",
      "API Integrations",
      "Media Data",
      "Content Discovery",
      "Responsive UI",
    ],
    highlights: [
      "Integrated live third-party media data through API-driven frontend workflows.",
      "Built query-based search, show/cast/episode details, recent and suggested searches, and a localStorage Favorites Vault.",
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
      "React Router and URL query parameters drive search/detail views; localStorage persists favorites on the current device.",
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
      "Add genre, network, or rating filters and a recently viewed section.",
      "Layer in stronger caching, API fallback behavior, and clearer degraded states.",
      "Add automated tests around search, favorites, and missing-data states.",
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
    visualNote: "Concept illustration of a proposed observability dashboard prototype.",
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
