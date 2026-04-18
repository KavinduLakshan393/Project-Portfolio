# Portfolio project folder structure

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

