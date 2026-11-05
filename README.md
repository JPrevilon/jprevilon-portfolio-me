# Joshua Previlon Portfolio

Production-ready personal portfolio for Joshua Previlon, built with Next.js 16,
TypeScript, Tailwind CSS, Framer Motion, lucide-react, and local editable data.

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Edit Content

Primary content is split into data files:

```txt
src/data/profile.ts
src/data/projects.ts
src/data/experience.ts
src/data/skills.ts
```

Dynamic project case studies are generated from `src/data/projects.ts` at:

```txt
src/app/projects/[slug]/page.tsx
```

## Replace Screenshots

Project images live in:

```txt
public/projects
public/screenshots
```

Current high-resolution screenshot files:

```txt
public/screenshots/pulse.png
public/screenshots/grapevyne.png
```

`public/screenshots/pulse.png` was exported from `public/screenshots/pulse.pdf`.

Generated placeholder files to replace when real screenshots are ready:

```txt
public/projects/martha_placeholder.png
public/projects/ultara_placeholder.png
public/projects/observability_placeholder.png
```

Update `image`, `caseStudyImage`, and alt text in `src/data/projects.ts` if you
change filenames.

## Replace Resume

The resume download points to:

```txt
public/Joshua_Previlon_Resume.pdf
```

The published file is the factual resume updated November 5, 2026. Keep the
same filename for future updates unless you also update `profile.resumePath`
in `src/data/profile.ts`.

## Brand Assets

The site uses:

```txt
public/brand/jp-logo.svg
public/brand/jp-wordmark.svg
public/favicon.svg
```

## SEO and Vercel

Metadata is configured in `src/app/layout.tsx`. Robots and sitemap routes are in
`src/app/robots.ts` and `src/app/sitemap.ts`.

Vercel settings:

```txt
Framework Preset: Next.js
Install Command: npm install
Build Command: npm run build
Output Directory: .next
Node.js Version: 20.x or newer
```

Set this environment variable in Vercel when using a custom domain so canonical
sitemap, robots, and Open Graph URLs use the final production domain:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

If `NEXT_PUBLIC_SITE_URL` is not set, the app falls back to Vercel's automatic
production URL environment variables and finally to `http://localhost:3000` for
local development.

Before publishing, confirm:

```bash
npm run lint
npm run build
```

Deploy by importing the repository into Vercel and keeping the Next.js preset.

## Quality Checks

```bash
npm run lint
npm run build
```

Project GitHub/demo buttons only render when real URLs are present in
`src/data/projects.ts`.
