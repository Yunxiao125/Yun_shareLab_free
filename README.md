# Self‑Awareness Site

A personal website for self‑reflection, built with **Next.js**, **Tailwind CSS**, and **Framer Motion**. It includes:
- Home page with stylish cards
- About page (auto‑loads data from `data/biography.json`)
- Simple quiz page
- Responsive design, mobile‑friendly UI, and scroll animations (AOS)

The site is configured for **static export** and can be deployed to **GitHub Pages** using the provided GitHub Actions workflow.

## Project Structure
```
my-self-awareness-site/
├─ .github/workflows/deploy.yml   # GitHub Actions for GH‑Pages deployment
├─ .gitignore
├─ package.json
├─ next.config.js
├─ tailwind.config.js
├─ postcss.config.js
├─ src/
│   ├─ pages/_app.tsx
│   ├─ pages/index.tsx
│   ├─ pages/about.tsx
│   ├─ pages/quiz.tsx
│   └─ components/…
├─ data/biography.json
└─ public/assets/…
```

## Development
```bash
npm install
npm run dev   # http://localhost:3000
```

## Build & Deploy
```bash
npm run build && npm run export   # generates ./out
npm run deploy   # pushes ./out to `gh-pages` branch via GitHub Actions
```

Feel free to replace the sample data in `data/biography.json` and add your own assets.
