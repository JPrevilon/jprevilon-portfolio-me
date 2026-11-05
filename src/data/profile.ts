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

export const siteDescription = "Portfolio of Joshua Previlon: React and TypeScript interfaces, responsive websites, and full-stack applications with Node.js, Express, Flask, and PostgreSQL.";

export const profile = {
  "name": "Joshua Previlon",
  "title": "Software Engineer",
  "secondaryTitle": "React, TypeScript & Next.js | Front-End & Full-Stack Applications",
  "location": "Miami-Fort Lauderdale, FL",
  "availability": "Seeking full-time front-end or full-stack engineering opportunities in Miami, New York, or remotely within the US. Other US locations require employer-paid moving costs and temporary housing.",
  "email": "joshua@duorya.com",
  "linkedin": "https://www.linkedin.com/in/jprevilon/",
  "github": "https://github.com/JPrevilon",
  "resumePath": "/Joshua_Previlon_Resume.pdf",
  "positioning": "I build responsive websites, React and TypeScript interfaces, and full-stack applications with connected data.",
  "about": "I am a software developer based in Miami–Fort Lauderdale. My work includes responsive business websites, React and TypeScript interfaces, and applications using Node.js/Express or Flask with PostgreSQL. Selected projects show their current live, preview, or application status.",
  "headline": "Building responsive websites and front-end/full-stack applications.",
  "supportingCopy": "My work includes a live wine-cellar demo, published websites, cinematic website previews, and a venue-streaming application. I use React, TypeScript, JavaScript, and connected APIs where the project calls for them.",
  "focus": "React and TypeScript interfaces, responsive websites, Node.js/Express or Flask APIs, and PostgreSQL-backed applications.",
  "contactCta": "Seeking full-time front-end or full-stack engineering opportunities in Miami, New York, or remotely within the US. Other US locations require employer-paid moving costs and temporary housing."
} as const;

export const resumeDownloads = [
  {
    "label": "Front-End Résumé",
    "href": "/Joshua_Previlon_Front_End_Resume.pdf"
  },
  {
    "label": "Full-Stack Résumé",
    "href": "/Joshua_Previlon_Full_Stack_Resume.pdf"
  }
] as const;

export const heroBadges = [
  "React",
  "TypeScript",
  "JavaScript",
  "Next.js",
  "HTML",
  "CSS",
  "Node.js",
  "Flask",
  "PostgreSQL",
  "Responsive Design"
] as const;

export const recruiterSnapshot = [
  {
    "title": "Front-End Development",
    "description": "React and TypeScript interfaces, responsive HTML/CSS, Next.js pages, and component-based application views."
  },
  {
    "title": "Full-Stack Applications",
    "description": "Node.js/Express or Flask APIs, PostgreSQL data, authentication, and user-scoped CRUD workflows."
  },
  {
    "title": "Published Websites & Previews",
    "description": "Aeterna Spa’s live website and the Deer Creek and Mark the Shark previews show media-driven interfaces and responsive fallbacks."
  },
  {
    "title": "Tools & Workflow",
    "description": "Git, GitHub, and Vite support the projects shown here, from source changes to working web pages."
  }
] as const;

export const aboutCards = [
  {
    "title": "Full-time opportunities",
    "description": "Seeking full-time front-end or full-stack engineering opportunities in Miami, New York, or remotely within the US. Other US locations require employer-paid moving costs and temporary housing."
  },
  {
    "title": "Earlier experience",
    "description": "Music production under a Sony Music Entertainment production deal and an internship at Republic Records."
  }
] as const;

export const certifications = [
  {
    "title": "Bachelor of Science in Computer Science",
    "issuer": "St. John's University",
    "description": "2016 - 2018"
  },
  {
    "title": "Associate of Science in Computer Science",
    "issuer": "Nassau Community College",
    "description": "2014 - 2016"
  },
  {
    "title": "Foundations of Cybersecurity",
    "issuer": "Google",
    "description": "Foundational cybersecurity coursework."
  },
  {
    "title": "AI Fluency: Framework & Foundations",
    "issuer": "Anthropic",
    "description": "Foundational AI fluency coursework."
  }
] as const;
