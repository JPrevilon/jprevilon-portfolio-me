function normalizeSiteUrl(value?: string) {
  if (!value) {
    return undefined;
  }

  const url = value.startsWith("http") ? value : `https://${value}`;
  return url.replace(/\/$/, "");
}

export const siteUrl =
  normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL) ??
  normalizeSiteUrl(process.env.VERCEL_PROJECT_PRODUCTION_URL) ??
  normalizeSiteUrl(process.env.VERCEL_URL) ??
  "http://localhost:3000";

export const siteTitle = "Joshua Previlon | Software Engineer";

export const siteDescription =
  "Portfolio of Joshua Previlon, a software engineer building React/TypeScript product surfaces for dashboards, developer workflows, real-time systems, media-aware tools, and full-stack applications.";

export const profile = {
  name: "Joshua Previlon",
  title: "Software Engineer",
  secondaryTitle: "Full-Stack Engineer | React | TypeScript | Frontend Infrastructure",
  location: "Miami, FL | Remote / NYC Hybrid Open",
  email: "joshuaprevilon13@gmail.com",
  linkedin: "https://www.linkedin.com/in/jprevilon",
  github: "https://github.com/JPrevilon",
  resumePath: "/Joshua_Previlon_Resume.pdf",
  positioning:
    "I build full-stack product surfaces, frontend infrastructure, dashboards, and workflow tools that make complex systems easier to operate, debug, and scale.",
  about:
    "Software Engineer with experience across React, TypeScript, Next.js, Node.js, Express, PostgreSQL, REST APIs, testing, cloud-hosted workflows, technical content systems, and media production environments. I enjoy turning ambiguous product and operational requirements into clean, scalable interfaces that help teams understand what is happening in the system.",
  headline:
    "Building frontend infrastructure, dashboards, and real-time workflows for complex product systems.",
  supportingCopy:
    "I work across React, TypeScript, Node.js, APIs, PostgreSQL, testing, and cloud-hosted workflows to build operational dashboards, developer-facing tools, observability-style interfaces, AI-assisted workflows, and media-aware product experiences.",
  contactCta:
    "Have a role involving frontend infrastructure, observability UI, developer tools, real-time dashboards, media workflows, or full-stack product development? Let's talk.",
} as const;

export const heroBadges = [
  "React",
  "TypeScript",
  "Frontend Infrastructure",
  "Observability UI",
  "Developer Tools",
  "Real-Time Systems",
  "Operational Dashboards",
  "API Contracts",
  "Media Workflows",
  "Testing",
] as const;

export const recruiterSnapshot = [
  {
    title: "Frontend Infrastructure",
    description:
      "React, TypeScript, component systems, routing, state boundaries, responsive layouts, accessibility, and UI architecture for product surfaces that need to hold up over time.",
  },
  {
    title: "Observability + Dashboards",
    description:
      "Operational views, reporting interfaces, filters, logs, metrics-style panels, loading/error/empty states, and dashboard flows that help teams scan system behavior quickly.",
  },
  {
    title: "Developer Tools + Workflow",
    description:
      "API-driven workflows, documentation, test-minded iteration, AI-assisted development, internal tools, and UI patterns that reduce friction for builders and operators.",
  },
  {
    title: "Media + Real-Time Systems",
    description:
      "Real-time engagement platforms, streaming-adjacent workflows, content discovery, asset handoffs, quality control, and calm debugging when live workflows are moving.",
  },
] as const;

export const mediaEdgeIntro =
  "My music background includes an internship at Republic Records (2016–2019) and a production deal with Sony (2019–2024). That experience shaped how I approach engineering: trace the signal, understand the system, debug calmly, document the workflow, and protect the final user experience.";

export const mediaEdgeCards = [
  {
    title: "Signal flow -> System debugging",
    description:
      "Following signal paths in production maps directly to tracing data flow, UI state, APIs, and failure boundaries in software.",
  },
  {
    title: "Session reliability -> Production reliability",
    description:
      "High-pressure sessions built habits around uptime, fallback thinking, calm incident response, and clear operational handoffs.",
  },
  {
    title: "Asset handoffs -> Content/workflow systems",
    description:
      "File organization, media delivery, and quality control translate into cleaner content systems, asset workflows, and operational tooling.",
  },
  {
    title: "Client deadlines -> Clear communication under pressure",
    description:
      "Technical work under deadline pressure strengthened requirements clarity, stakeholder updates, and steady debugging.",
  },
] as const;

export const certifications = [
  {
    title: "Software Engineering Certificate",
    issuer: "Flatiron School",
    description:
      "Completed May 2026. Full-stack software engineering training covering frontend, backend, databases, and applied product development.",
  },
  {
    title: "Audio Studies, 2014–2016",
    issuer: "Nassau Community College",
    description:
      "Audio studies that contributed to a background in music and technical production.",
  },
  {
    title: "Foundations of Cybersecurity",
    issuer: "Google",
    description:
      "Security fundamentals for risk awareness, systems thinking, and safer software development habits.",
  },
  {
    title: "AI Fluency Framework & Foundations",
    issuer: "Anthropic",
    description:
      "Foundational AI fluency for modern software workflows, evaluation habits, and responsible AI product thinking.",
  },
  {
    title: "Code in Action / Claude 101",
    issuer: "Claude",
    description:
      "Applied Claude workflow learning for AI-assisted development, prompt patterns, and iterative engineering support.",
  },
] as const;
