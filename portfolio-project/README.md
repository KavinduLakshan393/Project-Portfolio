# Kavindu Lakshan Portfolio

A modern developer portfolio built with Next.js, React, TypeScript, and Tailwind CSS.

This portfolio is structured to showcase two main areas:

1. Web development
2. Game development

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- App Router
- GitHub

## Main Features

- Separate Web Engineering and Game Development sections
- Dynamic project detail pages
- Centralized project, skill, and profile data
- Responsive layout
- Clean portfolio case study structure
- SEO metadata for portfolio identity

## Project Structure

```txt
portfolio-project/
├── public/
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── game/
│   │   │   └── projects/[slug]/
│   │   ├── web/
│   │   │   └── projects/[slug]/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   ├── data/
│   │   ├── index.ts
│   │   ├── profile.ts
│   │   ├── projects.ts
│   │   └── skills.ts
│   └── types/
│       └── portfolio.ts
├── package.json
└── README.md
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the local site:

```txt
http://localhost:3000
```

## Build

```bash
npm run build
```

## Lint

```bash
npm run lint
```

## Important Files

### `src/data/profile.ts`

Stores personal profile information such as name, title, summary, email, GitHub link, and highlights.

### `src/data/projects.ts`

Stores all web and game project data.

### `src/data/skills.ts`

Stores technical skills grouped by category.

### `src/types/portfolio.ts`

Stores the TypeScript types used by the portfolio data.

## Next Improvements

* Add real project screenshots
* Add live demo links
* Add GitHub links for each project
* Add a downloadable CV in the `public` folder
* Add Open Graph image for better social media previews
* Replace placeholder project data with completed real projects
* Improve contact form with backend or form service integration

## Author

Kavindu Lakshan
