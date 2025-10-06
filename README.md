# accelRT — Main Website

## Purpose

The public-facing website for accelRT:

- Organization overview, mission, team, sponsors, and resources
- News, blog, and global event index (not individual event microsites)
- Page for partners/sponsors

## Tech stack

- Next.js
- Bun
- Cloudflare Pages

## Getting started

Prerequisites

- Bun (latest stable) — https://bun.sh

Install

```bash
git clone <repo-url>
cd accelrt-website
bun install
```

Development

```bash
bun run dev
# then open http://localhost:3000
```

## Contributing

We run a very lean operation

- Pull
- Code
- Commit

Information for AI agents follows:

## Project structure (example)

- public/ — static assets
- src/
  - app/ — Next.js pages and routes
  - components/ — UI components

## Conventions & best practices

- Keep single source of truth for site config in config/site.\*
- Use semantic HTML, React and follow a11y guidelines
- Optimize images with next/image and serve responsive sizes
- Add meta tags and Open Graph for SEO and social sharing
- Keep environment secrets out of the repo
