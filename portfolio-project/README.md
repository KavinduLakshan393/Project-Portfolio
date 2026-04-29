# Kavindu Lakshan Portfolio

A modern developer portfolio built with Next.js, React, TypeScript, and Tailwind CSS.

This portfolio showcases projects from my GitHub profile across:

1. Web development
2. Software systems
3. Mobile applications
4. Game development

## Profile Links

- GitHub: https://github.com/KavinduLakshan393
- LinkedIn: https://www.linkedin.com/in/kavindu-lakshan-6536b83b1
- Email: kavinduuni@gmail.com

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Flutter
- Dart
- PHP
- C#
- Unity
- PostgreSQL
- Supabase

## Main Features

- Separate Web and Game portfolio sections
- Dynamic project detail pages
- Centralized project, skill, and profile data
- GitHub-sourced project information
- Responsive layout
- Clear case study structure
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

Stores personal profile information such as name, title, summary, email, GitHub link, LinkedIn link, and highlights.

### `src/data/projects.ts`

Stores curated project data from GitHub repositories.

### `src/data/skills.ts`

Stores technical skills grouped by category.

### `src/types/portfolio.ts`

Stores the TypeScript types used by the portfolio data.

## Next Improvements

* Add real screenshots for each project
* Add live demo links where available
* Add a downloadable CV in the `public` folder
* Add Open Graph image for better social media previews
* Add better project filtering by technology
* Rename the Web section to Software if mobile and desktop projects remain inside it

## Author

Kavindu Lakshan
