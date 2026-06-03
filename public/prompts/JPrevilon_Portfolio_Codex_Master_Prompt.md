# Codex Master Prompt — Joshua Previlon Futuristic Software Engineering Portfolio

You are building a production-ready personal portfolio website for **Joshua Previlon**.

## Goal
Create a polished, recruiter-ready portfolio that positions Joshua as a **Software Engineer / Full-Stack Engineer** who builds modern web applications, data-heavy user interfaces, dashboards, internal tools, AI-powered products, media-aware workflows, backend APIs, and scalable product experiences.

The site should be broad enough for roles at companies like Netflix, Paramount, ClickHouse, Penguin Random House, Little Cinema Digital, SaaS startups, AI product teams, media/streaming companies, and full-stack software teams — not tailored to only one company.

## Visual identity
The site should look **futuristic, modern, cinematic, and premium**, with a dark engineering-console feel.

Use the supplied logo assets:
- `/public/brand/jp-logo.svg`
- `/public/brand/jp-wordmark.svg`
- `/public/favicon.svg`

Design direction:
- Near-black / graphite background
- Warm gold accent
- Electric cyan highlight
- Muted red/purple secondary glow
- Glass cards with thin borders
- Subtle radial gradients and grid/noise texture
- Sharp technical hierarchy
- Smooth but restrained animation
- Premium SaaS / engineering-console feel, not a bootcamp template

## Tech stack
Use:
- Next.js latest stable version
- App Router
- TypeScript
- Tailwind CSS
- Framer Motion for subtle animation
- lucide-react for icons
- next/image
- Fully responsive
- SEO-ready
- Accessible semantic HTML
- Deployable on Vercel

## Identity content
Name: Joshua Previlon  
Title: Software Engineer  
Secondary title: Full-Stack Engineer | React • TypeScript • Node.js  
Location: Miami, FL | Remote / NYC Hybrid Open  
Email: joshuaprevilon13@gmail.com  
LinkedIn: https://www.linkedin.com/in/jprevilon  
GitHub: https://github.com/JPrevilon

## Main positioning
Primary one-liner:
> I build full-stack products, data-heavy interfaces, dashboards, real-time workflows, and AI-powered applications that make complex systems feel simple.

Supporting copy:
> Software Engineer with experience across React, TypeScript, Next.js, Node.js, Express, PostgreSQL, REST APIs, testing, cloud-hosted workflows, technical content systems, and media production environments. I enjoy turning ambiguous product requirements into clean, scalable, user-focused software.

## Hero section
Create a high-impact hero with:
- JP logo / wordmark
- Joshua Previlon
- Software Engineer
- Headline:
  “Building full-stack products, data-heavy UIs, and real-time workflows that make complex systems feel simple.”
- Supporting copy:
  “I work across React, TypeScript, Node.js, APIs, PostgreSQL, testing, and cloud-hosted workflows to build dashboards, internal tools, AI-powered applications, content systems, and media-aware product experiences.”
- Buttons:
  - View Projects
  - View GitHub
  - Contact Me
  - Download Resume
- Credibility chips:
  - React
  - TypeScript
  - Node.js
  - PostgreSQL
  - REST APIs
  - Dashboards
  - AI Products
  - Media Workflows
  - Testing
  - Cloud-hosted Apps

## Navigation
Sticky top nav:
- Home
- Projects
- Experience
- Stack
- About
- Contact
- Resume button

Mobile nav should be clean and not cramped.

## Homepage sections
Create these sections:
1. Hero
2. Recruiter Snapshot
3. Featured Projects
4. Technical Stack
5. Experience Timeline
6. Engineering Strengths
7. Media / Production Edge
8. Certifications
9. Contact CTA

## Recruiter Snapshot
Use four premium cards:

### Full-Stack Product Engineering
React, TypeScript, Node.js, Express, PostgreSQL, REST APIs, authentication, CRUD workflows, JSON contracts, cloud-hosted apps.

### Data-Heavy UI + Dashboards
Dashboards, operational views, reporting interfaces, filtering/search, loading/error/empty states, reusable UI components, responsive layouts.

### AI + Developer Workflow
AI-powered product workflows, LLM integrations, Claude Code, GitHub Copilot, API-driven AI features, documentation, testing, and rapid iteration.

### Media + Real-Time Systems
Real-time engagement platforms, streaming-adjacent workflows, content discovery, technical production, asset workflows, quality control, and high-pressure debugging.

## Featured projects
Use this order:
1. Pulse — Real-Time Streaming & Operational Dashboard Platform
2. GrapeVyne — Data-Heavy Wine Discovery & Personal Cellar Platform
3. Martha — AI Assistant / User Workflow Application
4. Ultara — TV Discovery & Media Data Application
5. Media Observability Dashboard — React, TypeScript & GraphQL Infrastructure UI Prototype

Use project data from `/src/data/projects.ts`. If the file does not exist, create it using the content from the attached `content/projects.ts` file.

Each project card should include:
- Screenshot image
- Name
- Subtitle
- Role
- Status badge
- Short description
- Tech chips
- Top 2–3 highlights
- Buttons: Case Study, GitHub, Live Demo if available

If live demos are missing, do not invent them. Hide the button or show “Demo coming soon.”

## Dynamic project pages
Create `/projects/[slug]` pages.

Each case study page should include:
- Hero with screenshot
- Overview
- Problem
- Role
- Tech stack
- Architecture / data flow
- Key features
- Engineering decisions
- Quality / testing
- What I would improve next
- Links

Use a premium case-study layout.

## Experience timeline
Create polished timeline cards.

### Founding Full-Stack Engineer — Pulse Interactive
Dates: 2025 – Present  
Location: Remote

Bullets:
- Built and led development of PULSE, a real-time streaming and business engagement platform focused on live activity data, dynamic rankings, creator/venue workflows, monetized boosts, dashboards, and operational tools.
- Built data-heavy React/Next.js and TypeScript interfaces for live activity streams, ranking systems, dashboard views, admin workflows, and user-facing platform states.
- Integrated frontend workflows with Node.js/Express APIs, PostgreSQL-backed data models, authentication, engagement metrics, payment/boost logic, and structured JSON API contracts.
- Worked across frontend and backend layers to debug data flow issues, API behavior, user state, service boundaries, and production-style workflow problems.
- Took ownership from concept through implementation: clarifying requirements, defining product behavior, building features, QA testing, documenting issues, and iterating toward production-ready releases.

### Web Software Engineer — White Sapphire
Dates: 2023 – 2025  
Location: Remote

Bullets:
- Developed customer-facing and operational web applications using React, TypeScript, JavaScript, Node.js, Express, REST APIs, SQL-backed workflows, and cloud-hosted deployment patterns.
- Built React/TypeScript UI for data-heavy workflows including dashboards, reporting views, filtering, status states, forms, and operational product interfaces.
- Integrated frontend applications with Node.js/Express APIs, SQL-backed data models, REST services, JSON contracts, authentication flows, and backend service boundaries.
- Improved system performance by 35% through backend optimization, SQL/query refinement, frontend performance tuning, debugging, and cleaner service boundaries across data-heavy paths.
- Reduced production defects by 25% by expanding unit, integration, regression, and automated test coverage with Jest, React Testing Library, and Cypress.
- Participated in pull requests, code reviews, release validation, defect triage, documentation, and engineering collaboration with product, QA, and backend stakeholders.

### Creative Web Producer / Founder — FREEPOWER Clothing & Freelance Digital Campaigns
Dates: 2024 – Present

Bullets:
- Built and managed e-commerce and campaign pages using Shopify, Wix, GoDaddy, structured content workflows, theme edits, product content, media assets, and launch QA.
- Created web-ready digital assets, product mockups, social campaign visuals, and content updates using Figma, Photoshop, and Premiere Pro.
- Prepared images and video for web use through resizing, exporting, compression, file organization, SEO-aware copy, and responsive page checks.
- Strengthened practical product sense across brand, content, usability, conversion, and web production workflows.

### Technical Production Engineer / Audio Engineer — Sony Music, Republic Records, QUAD Studio, Platinum Sound
Dates: 2015 – 2022  
Location: New York, NY

Bullets:
- Supported commercial music and media production workflows in fast-paced, client-facing environments where technical reliability, signal flow, asset management, and production quality directly impacted final deliverables.
- Troubleshot audio, session, equipment, routing, and digital production workflow issues under deadline pressure.
- Coordinated with artists, producers, engineers, and creative stakeholders to keep production systems reliable and sessions moving.
- Managed media assets, technical handoffs, file/session organization, quality control, and repeatable production processes.
- Built strong habits around operational excellence, clear communication, incident-style troubleshooting, and calm debugging under pressure.

## Technical stack section
Group skills into beautiful cards.

Frontend:
React, TypeScript, JavaScript, Next.js, HTML, CSS, Tailwind CSS, Responsive Design, Accessibility, UI State Management

Backend:
Node.js, Express, REST APIs, PostgreSQL, SQL, Authentication, API Contracts, JSON, CRUD Workflows, Backend Debugging

Testing / Quality:
Jest, React Testing Library, Cypress, Unit Tests, Integration Tests, Regression Tests, QA, Debugging, Code Reviews

Cloud / DevOps:
AWS concepts, Docker, GitHub, CI/CD practices, Environment Variables, Deployment Workflows, Vercel

Product / Systems:
Data-heavy UIs, Dashboards, Operational Tools, Developer Tools, Real-Time Systems, Observability Concepts, Media Workflows, Content Systems

AI:
AI-assisted development, LLM workflows, Prompt patterns, Claude Code, GitHub Copilot, API-based AI features

## Engineering strengths
Create cards for:
- Full-stack product development
- Data-heavy UI development
- API-driven workflows
- Real-time systems thinking
- Operational dashboard design
- Backend debugging from the frontend
- QA and test-minded development
- Strong written/verbal communication
- Technical production reliability mindset
- Fast learning / new framework ramp-up

## Media / Production Edge section
This should not make Joshua look like only an audio engineer. It should make the media background feel like a software advantage.

Copy:
> Before software engineering, I worked in technical production and audio engineering environments with Sony Music, Republic Records, QUAD Studio, and Platinum Sound. That background shaped how I approach engineering: trace the signal, understand the system, debug calmly, document the workflow, and protect the final user experience.

Use cards:
- Signal flow → System debugging
- Session reliability → Production reliability
- Asset handoffs → Content/workflow systems
- Client deadlines → Clear communication under pressure

## Certifications
Include:
- Flatiron School — Certificate, Full-Stack Web Development
- St. John's University — Bachelor of Business Administration
- Google — Foundations of Cybersecurity
- Anthropic — AI Fluency Framework & Foundations
- Claude — Code in Action / Claude 101

## Contact section
CTA:
> Have a role involving full-stack engineering, frontend platforms, dashboards, AI products, media systems, internal tools, or product development? Let’s talk.

Buttons:
- Email Joshua
- GitHub
- LinkedIn
- Download Resume

Use mailto link for email.

## Resume file
Set the download button to `/Joshua_Previlon_Resume.pdf`.
Add README instructions to place the latest resume PDF in `/public/Joshua_Previlon_Resume.pdf`.

## Screenshots
Use these project images if they are copied into `/public/projects/`:
- `pulse_thumb.png`
- `grape_thumb.png`
- `pulse_case_study_page.png`
- `grapevyne_case_study_page.png`

Create polished placeholder images for missing projects:
- `martha_placeholder.png`
- `ultara_placeholder.png`
- `observability_placeholder.png`

## SEO
Set metadata:
Title: Joshua Previlon | Software Engineer  
Description: Portfolio of Joshua Previlon, a software engineer building full-stack products, React/TypeScript interfaces, Node.js APIs, PostgreSQL-backed workflows, dashboards, AI-powered applications, real-time systems, and media-aware software.

Add Open Graph tags.
Add Twitter card metadata.
Use semantic HTML.
Use accessible headings.
Add alt text.
Make buttons keyboard accessible.

## Performance
- Use next/image
- Use local data
- Avoid unnecessary large dependencies
- Optimize images
- Avoid excessive animations
- Make the site pass Lighthouse as much as possible

## Deliverables
Build the complete app with:
- Clean component architecture
- `src/data/projects.ts`
- `src/data/experience.ts`
- `src/data/skills.ts`
- Reusable UI components
- Dynamic project pages
- Responsive layout
- README with setup, editing, screenshot replacement, resume replacement, and Vercel deployment instructions
- No broken links
- No TypeScript errors
- No ESLint errors

## After building
Run:
- `npm run lint`
- `npm run build`

Fix all errors.

Return a concise summary of:
- What was built
- How to run locally
- How to deploy
- What files I should replace with real screenshots/resume
