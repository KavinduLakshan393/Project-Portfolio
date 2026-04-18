# Portfolio  Project Proposal

## 1. Project Overview

### 1.1 Purpose

This project proposes the design and development of a modern personal portfolio website that presents two complementary professional identities within a single cohesive digital experience: **Web Development** and **Game Development**. The website will serve as both a personal brand platform and a practical showcase of technical skill, design awareness, and product thinking.

The core concept is a **split-entry landing page** that acts as a gateway to two portfolio paths:

- **Web Portfolio** — focused on full-stack development work, web applications, UI systems, technical case studies, and product-oriented projects.
- **Game Portfolio** — focused on game prototypes, systems experiments, tools, interactive concepts, and game development learning progress.

This structure allows the portfolio to communicate a clear and memorable professional identity: a developer who builds both **products** and **interactive experiences**.

### 1.2 Project Goals

The website should achieve the following goals:

- Present a strong and modern personal brand.
- Showcase professional web development work in a structured and credible way.
- Highlight game development projects and experiments without making them feel secondary.
- Create a polished, intuitive user experience with a distinctive visual identity.
- Provide scalable architecture that supports future growth, including new projects, detailed case studies, blog-style content, and additional portfolio sections.
- Demonstrate technical capability through thoughtful architecture, reusable components, and interactive UI behavior.

### 1.3 Target Audience

The primary audiences for the website are:

- Recruiters evaluating technical and product-oriented capabilities
- Potential freelance or contract clients
- Creative collaborators in web or game development
- Peers, mentors, and communities reviewing technical or design work

The website should appeal to both technical and non-technical viewers by balancing visual impact with clarity, structure, and readability.

---

## 2. Project Vision and Experience Strategy

### 2.1 Core Experience Concept

The portfolio is designed as a **single branded ecosystem with two entry points**. Rather than splitting the personal brand into two separate websites, the landing page introduces both specializations at once and allows the user to choose the perspective they want to explore.

This approach gives the project a stronger conceptual identity than a standard personal portfolio and immediately communicates multidisciplinarity in a clear and controlled way.

### 2.2 UX Direction

The user journey begins with a visually divided landing page:

- The **left side** represents Web Development
- The **right side** represents Game Development
- Each side is clickable and acts as a clear entry into the corresponding portfolio

The experience should be intuitive on first view. Users should immediately understand:

- who the portfolio belongs to
- what the two sides represent
- where each click will take them

The design should provide strong visual balance, with equal importance given to both disciplines while still differentiating them through theme, motion, and content emphasis.

### 2.3 Branding Direction

The overall identity should feel modern, dark, clean, and high-end, with a subtle futuristic or cyber-inspired tone. The two portfolio paths should share the same foundational brand language while differing in visual mood:

- **Web side:** structured, refined, system-driven, product-focused
- **Game side:** immersive, experimental, interactive, energetic

This contrast should be communicated through accent colors, textures, motion, and imagery while maintaining shared typography, spacing, layout logic, and tone of voice.

---

## 3. Chosen Technology Stack

## 3.1 Front-End Stack

### Next.js

The project will use **Next.js** as the primary framework. It is well suited for portfolio development because it offers:

- file-based routing
- strong performance
- server and client rendering options
- excellent SEO support
- scalable support for dynamic project pages and content-driven sections

The App Router structure is particularly suitable for organizing the landing page, the web portfolio routes, the game portfolio routes, and future additions such as blog entries or project detail pages.

### TypeScript

**TypeScript** will be used across the project to improve code safety, maintainability, and scalability. It helps define consistent data models for projects, navigation items, themes, and content structures.

### Tailwind CSS

**Tailwind CSS** will be used for styling. It supports rapid UI development while maintaining consistency through reusable utility classes and theme tokens. It is especially useful for building a visually polished interface with responsive layouts, component variants, and structured spacing.

### Framer Motion

**Framer Motion** will be used for subtle and meaningful animation, including:

- landing page hover interactions
- panel emphasis and transitions
- section reveal effects
- interactive hover states on cards and buttons

This will help create a premium, dynamic feel without overloading the experience.

## 3.2 Content and Page Authoring

### MDX

**MDX** will be used for project case studies and rich content pages. This allows written content to be stored in a structured and reusable way while still supporting custom UI components inside content pages when needed.

This is especially useful for:

- web project case studies
- game prototype writeups
- about page content
- future blog or devlog content

## 3.3 Back-End and API Layer

### Next.js Route Handlers

The project does not require a large traditional back-end. Instead, **Next.js route handlers** will be used for lightweight server functionality such as:

- processing contact form submissions
- simple analytics events if needed
- future integrations such as newsletter forms or content APIs

This keeps the architecture lightweight while still supporting essential interactive features.

## 3.4 Tooling and Development Workflow

### ESLint and Prettier

**ESLint** and **Prettier** will be used to maintain consistent code quality and formatting across the project.

### Git and GitHub

Version control will be managed with **Git**, and the repository will be hosted on **GitHub**. GitHub workflows can be used for continuous integration, linting, testing, and deployment.

### VS Code Settings

Project-level editor settings will be included to ensure formatting and tooling consistency.

### Testing Tools

A layered testing structure will support quality assurance:

- unit tests for utility functions and hooks
- integration tests for major page behaviors
- end-to-end tests for important user flows such as entering the Web or Game portfolio

## 3.5 Deployment and Hosting

The project is suitable for deployment to a modern hosting platform that supports Next.js. The final hosting setup should prioritize:

- fast page delivery
- HTTPS
- good caching behavior
- seamless deployment from GitHub

---

## 4. Website Content and Feature Scope

## 4.1 Main Experience Structure

The website will consist of three primary layers:

1. **Landing Page Gateway**
2. **Web Portfolio**
3. **Game Portfolio**

This creates a strong structure that is simple for users to understand while remaining flexible enough for future expansion.

## 4.2 Landing Page

### Purpose

The landing page is the website's central identity statement and entry point. It introduces both portfolio directions and guides the user into the most relevant path.

### Core Content

- Personal name or brand mark
- Short headline that connects both disciplines
- Split visual design with Web and Game sides
- Brief supporting text for each side
- Clear call-to-action on each side

### Core Features

- interactive split-screen layout
- hover or focus feedback on each side
- smooth visual response to user selection
- animated divider or central brand zone
- accessible and readable call-to-action states

### UX Goal

Users should understand the page in seconds: this is a developer portfolio with two clear paths, and each path leads to a focused body of work.

## 4.3 Web Portfolio Section

### Purpose

The Web portfolio will showcase professional full-stack development capability with emphasis on clarity, results, and real-world build quality.

### Main Sections

#### Hero Section

- professional introduction
- role description
- brief positioning statement
- primary CTA to view projects or contact

#### About Section

- short professional summary
- development background
- strengths and technical focus

#### Featured Projects

- selected web applications
- project cards with image, summary, stack, and links
- optional filters or tags in future versions

#### Skills Section

- frontend technologies
- backend technologies
- databases and infrastructure
- design and collaboration tools

#### Experience / Journey Section

- current role or recent experience
- timeline of technical growth
- relevant achievements or responsibilities

#### Contact Section

- contact form
- email and social links
- optional resume link

### Content Types

- project thumbnails
- case study pages
- short summaries and outcomes
- tech stacks
- GitHub and live links

## 4.4 Game Portfolio Section

### Purpose

The Game portfolio will present game development as a serious and growing discipline within the overall brand. It should communicate experimentation, creativity, and systems thinking without appearing unfinished or vague.

### Main Sections

#### Hero Section

- game development identity statement
- short explanation of current focus areas
- CTA to explore prototypes or experiments

#### About / Development Focus

- learning direction
- preferred engines or tools
- design interests such as systems, mechanics, or tools

#### Projects / Prototypes

- game prototypes
- mechanic experiments
- UI systems
- tools or small playable demos

#### Skills Section

- engines and languages
- game systems knowledge
- supporting tools and workflow skills

#### Lab / Experiments Section

- smaller explorations that may not be full projects
- mechanic studies
- visual or interaction experiments
- system prototypes

#### Contact Section

- same core contact options as the Web portfolio
- optional invitation for collaboration or feedback

### Content Types

- prototype thumbnails or clips
- short concept summaries
- system breakdowns
- process notes
- future devlog entries if added later

## 4.5 Shared Supporting Pages

### About Page

A broader page explaining the developer's background, philosophy, and current focus across both web and game development.

### Contact Page

A dedicated page with contact form, email, social links, and availability details.

### Resume Page

An optional page or downloadable asset for professional use.

## 4.6 Future Expansion Opportunities

The structure is intentionally scalable and can support:

- blog or article section
- game dev journal or devlog
- downloadable resume section
- project filtering and search
- light/dark or mode-specific themes
- multilingual content
- analytics dashboards
- CMS integration if content editing becomes more frequent

---

## 5. Interactive Elements and Special Functionality

## 5.1 Split-Panel Gateway Interaction

The landing page's defining feature is the two-panel gateway. Key interaction goals:

- each panel clearly signals clickability
- hover states increase clarity and energy
- animation remains elegant and fast
- keyboard and touch support are considered

## 5.2 Theme Differentiation

Each portfolio path should express its own mood:

- Web path with calmer spacing, cleaner grid, structured visuals, and purple or blue accents
- Game path with denser texture, stronger glow, more immersive contrast, and green or orange accents

This variation will be controlled through a shared design system rather than completely separate codebases.

## 5.3 Content-Driven Project Pages

Project detail pages will be generated from content files. This makes the site easier to maintain and allows new projects to be added without restructuring the application.

## 5.4 Contact Form Handling

A lightweight contact form will be included, supported by a route handler. Validation and error handling will be built in.

## 5.5 SEO and Metadata

Each major page and project page should include proper metadata support for:

- page titles
- descriptions
- share images
- clean URLs

This will improve discoverability and presentation when links are shared.

---

## 6. Comprehensive Project Folder Structure

The following structure will be used as the baseline architecture for the portfolio website.

## `portfolio-gateway/`

- `.env.example` — Example environment variables
- `.eslintrc.json` — ESLint rules
- `.gitignore`
- `.prettierrc` — Prettier formatting rules
- `components.json` — shadcn/ui config if used
- `next.config.ts` — Next.js configuration
- `package.json`
- `postcss.config.js`
- `tailwind.config.ts`
- `tsconfig.json`
- `README.md` — Setup, scripts, and architecture overview
- `LICENSE`

### `public/` — Static assets served directly

- `favicon.ico`
- `robots.txt`
- `sitemap.xml`

#### `public/og/` — Open Graph and social share images

- `default-og.png`
- `web-og.png`
- `game-og.png`

#### `public/images/`

##### `public/images/landing/` — Split landing page visuals

- `web-side-bg.webp`
- `game-side-bg.webp`
- `center-divider-glow.webp`

##### `public/images/web/` — Web portfolio images

###### `public/images/web/projects/`

- project screenshots and thumbnails

###### `public/images/web/profile/`

- profile and branding images

##### `public/images/game/` — Game portfolio images

###### `public/images/game/projects/`

- game screenshots, key art, and previews

###### `public/images/game/profile/`

- profile and branding images

##### `public/images/shared/` — Reused assets across both sides

- `logo.svg`

###### `public/images/shared/icons/`

- shared icons

###### `public/images/shared/patterns/`

- reusable textures and patterns

#### `public/fonts/`

- local font files if needed

#### `public/videos/` — Optional demo videos

- `web-preview.mp4`
- `game-preview.mp4`

### `src/` — Main application source

#### `src/app/` — App Router pages and layouts

- `layout.tsx` — Global root layout
- `page.tsx` — Main split landing page
- `globals.css` — Global styles
- `not-found.tsx` — 404 page
- `sitemap.ts` — Dynamic sitemap generation
- `robots.ts` — Dynamic robots config
- `middleware.ts` — Optional routing or redirect logic

##### `src/app/(marketing)/` — Optional static pages

###### `src/app/(marketing)/about/`

- `page.tsx`

###### `src/app/(marketing)/contact/`

- `page.tsx`

###### `src/app/(marketing)/resume/`

- `page.tsx`

##### `src/app/web/` — Web developer portfolio routes

- `page.tsx` — Main web portfolio page
- `layout.tsx` — Optional web-specific layout

###### `src/app/web/projects/`

- `page.tsx` — Web projects listing

###### `src/app/web/projects/[slug]/`

- `page.tsx` — Individual web project details

##### `src/app/game/` — Game developer portfolio routes

- `page.tsx` — Main game portfolio page
- `layout.tsx` — Optional game-specific layout

###### `src/app/game/projects/`

- `page.tsx` — Game projects listing

###### `src/app/game/projects/[slug]/`

- `page.tsx` — Individual game project details

##### `src/app/api/` — Backend endpoints

###### `src/app/api/contact/`

- `route.ts` — Contact form handler

###### `src/app/api/analytics/`

- `route.ts` — Optional analytics endpoint

#### `src/components/` — Reusable UI and feature components

##### `src/components/shared/` — Global reusable components

###### `src/components/shared/ui/`

- `Button.tsx`
- `Card.tsx`
- `Badge.tsx`
- `SectionHeading.tsx`
- `ThemeToggle.tsx`
- `ModeSwitch.tsx`

###### `src/components/shared/layout/`

- `Header.tsx`
- `Navigation.tsx`
- `Logo.tsx`
- `MobileMenu.tsx`
- `Container.tsx`
- `Footer.tsx`

###### `src/components/shared/seo/`

- `MetaTags.tsx`

###### `src/components/shared/effects/`

- `GridBackground.tsx`
- `GlowDivider.tsx`
- `DotPattern.tsx`

##### `src/components/landing/` — Landing page components

- `SplitHero.tsx`
- `WebPanel.tsx`
- `GamePanel.tsx`
- `PanelOverlay.tsx`
- `HoverPreview.tsx`
- `CenterBrand.tsx`
- `EnterPortfolioButton.tsx`

##### `src/components/web/` — Web portfolio components

- `WebHero.tsx`
- `WebProjectGrid.tsx`
- `WebProjectCard.tsx`
- `WebSkills.tsx`
- `WebExperience.tsx`
- `WebCaseStudy.tsx`

##### `src/components/game/` — Game portfolio components

- `GameHero.tsx`
- `GameProjectGrid.tsx`
- `GameProjectCard.tsx`
- `GameSkills.tsx`
- `GameExperience.tsx`
- `GameCaseStudy.tsx`

#### `src/content/` — Written content and project case studies

##### `src/content/web-projects/`

- `project-one.mdx`
- `project-two.mdx`
- `index.ts` — Export helpers and metadata

##### `src/content/game-projects/`

- `prototype-one.mdx`
- `prototype-two.mdx`
- `index.ts` — Export helpers and metadata

##### `src/content/pages/`

- `about.mdx`
- `contact.mdx`

##### `src/content/config/`

- `site.ts`
- `navigation.ts`
- `social-links.ts`

#### `src/data/` — Structured data files

##### `src/data/skills/`

- `webSkills.ts`
- `gameSkills.ts`

##### `src/data/timeline/`

- `careerTimeline.ts`

##### `src/data/testimonials/`

- `testimonials.ts`

#### `src/lib/` — App utilities and helpers

- `analytics.ts`
- `constants.ts`
- `metadata.ts`
- `routes.ts`
- `mdx.ts`
- `validation.ts`
- `animations.ts`
- `utils.ts`

#### `src/hooks/` — Custom React hooks

- `useMode.ts`
- `useHoverPanel.ts`
- `useLocalStorage.ts`
- `useScrollReveal.ts`

#### `src/store/` — Shared app state

- `ui-store.ts`

#### `src/styles/` — Design system and theme layers

- `tokens.css`
- `themes.css`
- `utilities.css`

#### `src/types/` — Shared TypeScript types

- `project.ts`
- `navigation.ts`
- `theme.ts`
- `api.ts`

### `tests/` — Test suite

#### `tests/unit/`

##### `tests/unit/lib/`

- `utils.test.ts`

##### `tests/unit/hooks/`

- `useMode.test.ts`

##### `tests/unit/components/`

- `ModeSwitch.test.tsx`
- `SplitHero.test.tsx`

#### `tests/integration/`

- `landing-page.test.tsx`
- `web-portfolio.test.tsx`
- `game-portfolio.test.tsx`

#### `tests/e2e/`

- `landing.spec.ts`
- `web-entry.spec.ts`
- `game-entry.spec.ts`

### `docs/` — Project documentation

- `architecture.md`
- `design-system.md`
- `content-guide.md`
- `deployment.md`

### `.github/`

#### `.github/workflows/`

- `ci.yml` — Lint, type-check, and test pipeline
- `deploy.yml` — Deployment workflow

### `.vscode/`

- `settings.json`
- `extensions.json`

---

## 7. Folder Structure Rationale

## 7.1 Separation of Responsibilities

The architecture is organized so each part of the project has a clear role:

- `app/` handles routes and page-level structure
- `components/` contains reusable UI elements and page sections
- `content/` stores long-form written material such as project case studies
- `data/` stores structured content such as skills, navigation, and timelines
- `lib/` and `hooks/` contain logic and reusable behavior
- `styles/` centralizes theme and design tokens
- `public/` stores media assets
- `tests/` ensures reliability

This separation improves maintainability, readability, and long-term scalability.

## 7.2 Scalability

The structure is designed to support future growth without reorganization. New project types, articles, experiments, or content sections can be added without disrupting the overall architecture.

## 7.3 Maintainability

Content lives outside components where appropriate, which means updates can be made without editing core layout files. This reduces technical friction and keeps presentation and content concerns more clearly separated.

---

## 8. Development Approach

## 8.1 Phase 1: Foundation

- establish project repository and base configuration
- implement global styles and design tokens
- create shared layout and navigation system
- build landing page split-screen experience

## 8.2 Phase 2: Portfolio Sections

- build Web portfolio homepage
- build Game portfolio homepage
- implement project listing pages
- add basic content and assets

## 8.3 Phase 3: Content and Case Studies

- add project detail pages using MDX
- build reusable case study components
- populate project content for both disciplines

## 8.4 Phase 4: Interaction and Polish

- refine animation and hover states
- optimize responsiveness and accessibility
- improve metadata and SEO
- finalize contact flow and testing

## 8.5 Phase 5: Launch Readiness

- test key flows
- optimize performance
- prepare deployment pipeline
- finalize content and media assets

---

## 9. Expected Outcome

At completion, the project will deliver a polished, modern, and scalable portfolio website that:

- presents a distinctive personal brand
- clearly separates Web and Game work without fragmenting identity
- supports project growth over time
- demonstrates both technical competence and design maturity
- provides a strong foundation for professional visibility

The website will function not only as a portfolio, but also as a product in itself: a clear example of thoughtful interaction design, structured architecture, and modern front-end development practice.

---

## 10. Conclusion

This proposal outlines a portfolio website designed to be both visually memorable and technically robust. By combining a strong concept, a modern technology stack, and a scalable project structure, the website will effectively represent a developer working across both full-stack web development and game development.

The proposed architecture supports immediate implementation needs while leaving room for future evolution. The result will be a professional, engaging, and maintainable portfolio platform suitable for recruiters, collaborators, and clients alike.

