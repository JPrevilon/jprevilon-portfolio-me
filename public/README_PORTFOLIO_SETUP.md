# Joshua Previlon Portfolio Build Pack

This pack contains the brand assets, project content, screenshots, and Codex prompt for building a futuristic software engineering portfolio.

## Recommended stack
- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react
- Vercel deployment

## Create the app

```bash
npx create-next-app@latest jprevilon-portfolio --ts --tailwind --eslint --app --src-dir --import-alias "@/*"
cd jprevilon-portfolio
npm install framer-motion lucide-react clsx
```

## Copy assets

Copy these into your project:

```text
brand/* -> public/brand/
brand/favicon.svg -> public/favicon.svg
screenshots/* -> public/projects/
content/projects.ts -> src/data/projects.ts
```

Copy your latest resume PDF to:

```text
public/Joshua_Previlon_Resume.pdf
```

## Give Codex the prompt

Open the project in Codex and paste:

```text
prompts/JPrevilon_Portfolio_Codex_Master_Prompt.md
```

## Run locally

```bash
npm run dev
```

## Check before deployment

```bash
npm run lint
npm run build
```

## Deploy to Vercel

1. Push the project to GitHub.
2. Sign into Vercel with GitHub.
3. Import the repository.
4. Keep the default Next.js settings.
5. Deploy.

Your free portfolio URL will look like:

```text
https://jprevilon-portfolio.vercel.app
```

## Recommended GitHub repo name

```text
jprevilon-portfolio
```

## Recommended final site title

```text
Joshua Previlon | Software Engineer
```
