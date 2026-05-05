# andrewmazzola.com

Personal portfolio site for Andrew Mazzola — AI-native engineer specializing in agent orchestration, LLM infrastructure, and voice-powered automation.

## Tech Stack

- **React 19** + **TypeScript** — UI and type safety
- **Vite** — build tooling and dev server
- **Tailwind CSS v4** — styling
- **Framer Motion** — page transitions and animations
- **React Router v7** — client-side routing
- **Vercel** — hosting and deployment

## Pages

| Route          | Description                                  |
| -------------- | -------------------------------------------- |
| `/`            | Hero landing page with animated background   |
| `/about`       | Background and experience                    |
| `/projects`    | Featured open-source and production projects |
| `/consulting`  | Consulting services and engagement info      |
| `/contact`     | Contact form and links                       |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/    # Reusable UI components (Navbar, Footer, ProjectCard, etc.)
├── pages/         # Route-level page components
├── data/          # Static data (project listings)
├── main.tsx       # App entry point
└── App.tsx        # Router and layout
```

## Deployment

Deployed on Vercel. Push to `master` to trigger a production deploy. The `vercel.json` config handles SPA rewrites so all routes resolve correctly on hard refresh.
