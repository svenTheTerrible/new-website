# new-website
Demo [here](https://terrible-sven.com/)

A config-driven personal portfolio site built with Vite 8, React 19, and TypeScript.

## Features

- Dynamic content loaded at runtime from `public/custom/config.json`
- Responsive design with dark theme and retro CRT effects
- Project showcase with tag filtering
- Smooth scroll navigation between sections
- Dockerized deployment via nginx

## Quick Start

```bash
npm install
npm run start
```

Open http://localhost:5173.

## Site Configuration

Edit `public/custom/config.json` to customize:

- Personal info (name, role, tagline)
- About section text
- Projects (name, description, tags, links)
- Skills marquee items
- Stats and social media links

No code changes needed.

## Development

```bash
npm run start        # Dev server with HMR
npm run lint         # ESLint + Prettier check
npm run lint:fix     # Auto-fix lint/format issues
npm run format       # Prettier format all files
npm run build        # Type-check + production build
npm run preview      # Preview production build
```

## Docker

```bash
docker build -t new-website .
docker run -p 8080:80 new-website
```

## Stack

- Vite 8 (Rolldown)
- React 19 + React Compiler
- TypeScript ~6.0
- ESLint + Prettier
- nginx (production)