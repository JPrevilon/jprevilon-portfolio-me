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
LinkedIn: https://www.linkedin.com/in/jprevilon/
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
1. Aeterna Spa — Live HTML/CSS/JavaScript Wellness Website
2. Deer Creek Golf Club — Published Website Preview
3. Mark the Shark — Fishing Charter Website Preview
4. Pulse — Real-Time Streaming & Operational Dashboard Platform
5. GrapeVyne — Data-Heavy Wine Discovery & Personal Cellar Platform
6. Martha — React Native / Expo Daily Assistant Prototype
7. Ultara — TV Discovery & Media Data Application
8. Media Observability Dashboard — React, TypeScript & GraphQL Infrastructure UI Prototype

Use project data from `/src/data/projects.ts`. If the file does not exist, create it using the content from the attached `content/projects.ts` file.

Each project card should include:
- Case-study image, with concept illustrations labeled clearly
- Name
- Subtitle
- Role
- Status badge
- Short description
- Tech chips
- Top 2–3 highlights
- Buttons: Case Study, GitHub, Live Demo if available

If live demos are missing, do not invent them. Hide the button.

Keep source-backed project details and status accurate:
- Deer Creek Golf Club: published website preview at https://www.duorya.com/deercreek/, matching Duorya's Preview label. HTML/CSS/JavaScript with a Vite multi-page build, canvas hero, video transitions, and responsive navigation fallbacks. Repository is private; omit source links.
- Mark the Shark: public website preview at https://marktheshark-preview.vercel.app/, built with Next.js/React/TypeScript/Tailwind, a scroll-driven canvas hero, gallery, and booking-request interface. Repository is private; omit source links. Live production bookings, payment success, client relationships, dates, and metrics are not inferred.
- Aeterna Spa: live website at https://www.aeternaspa.com/, role Website Developer, source https://github.com/JPrevilon/aeterna. The deployed aeterna-2-site implementation uses HTML/CSS/vanilla JavaScript for its video tour, treatment tabs, comparison sliders, and enquiry interface. Other Next.js/backend code in the repository is a separate implementation; no live checkout, booking-provider, dates, client relationship, or impact metrics are inferred.
- PULSE: independent venture, 2025–2026; implemented integrations, without claims of verified live production use.
- GrapeVyne: React/Vite, Python/Flask, SQLAlchemy/PostgreSQL, signed session cookies, and user-owned cellar CRUD. WineService currently uses mock data; external wine provider integration is future work.
- Martha: early React Native/Expo/TypeScript prototype with speech and device links. Weather and medication data are static samples; AI and automated reminders are future work.
- Ultara: React/Vite/React Router, TVMaze search/detail data, and localStorage favorites. Genre/network/rating filters are future work.
- Media Observability Dashboard: prototype with a concept illustration.

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

### Founder & Full-Stack Software Engineer — Duorya (Self-employed)
Dates: August 2026 – Present

- Self-employed software and website work, including client storefront work for Perfume Plug USA.

### Founder & Developer — PULSE (Independent Venture)
Dates: 2025 – 2026

- Independent venture focused on real-time streaming, engagement, dashboards, and full-stack application development.

### Owner & Developer — White Sapphire (Self-owned Independent Venture)
Dates: 2024 – 2025

- Self-owned venture involving web application development, frontend interfaces, APIs, and database workflows.
- Do not publish unsupported performance percentages or imply employment at a separate company.

### Music Producer — Sony (Production Deal)
Dates: 2019 – 2024

- Music production under a production deal; do not describe this as staff employment.

### Intern — Republic Records
Dates: 2016 – 2019

- Internship at Republic Records, 2016–2019.

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
> My music background includes an internship at Republic Records (2016–2019) and a production deal with Sony (2019–2024). That background shaped how I approach engineering: trace the signal, understand the system, debug calmly, document the workflow, and protect the final user experience.

Use cards:
- Signal flow → System debugging
- Session reliability → Production reliability
- Asset handoffs → Content/workflow systems
- Client deadlines → Clear communication under pressure

## Certifications
Include:
- Flatiron School — Software Engineering Certificate, completed May 2026
- Nassau Community College — Audio Studies, 2014–2016 (do not imply a degree)
- Google — Foundations of Cybersecurity
- Anthropic — AI Fluency: Framework & Foundations
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
