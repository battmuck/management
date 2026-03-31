# Hawaii Vacation Homes

Boutique Maui vacation rental property management company. This is a conversion-focused marketing site with one primary goal: get Maui property owners to submit the lead form.

## Business Context

### What the company does
Boutique vacation rental property management on Maui. No hidden fees, personalized service — positioned against large-scale operators like Vacasa and MyPerfectStays.

### Core differentiators (use these when writing copy)
- **18% above Maui market average** revenue earned for owners in 2025
- **100% owner retention** — no owner has ever left
- **No hidden fees** — fully transparent pricing
- **Boutique model** — direct owner relationships, not a call center

### Primary audience
Maui vacation rental owners — ideally owners of premium properties who want to maximize revenue. Most are mainland investors or second-home owners who don't live on Maui full-time.

### Secondary audience
Real estate agents who close Maui vacation rental sales and can refer new owners to us.

### Lead flow
After form submission: email first → phone call. Target response within 24 hours.

## Referral Program (`/referral`)

What agents receive when they refer an owner who signs a management agreement:

1. **$1,200 referral fee** paid on signed management agreement
2. **Buy/sell referrals back** — we don't sell properties, so we send any owner transactions back to the referring agent
3. **Guest lead source** — a section in every property guest guide refers guests who want to buy/sell to the agent (the managed property becomes an ongoing lead source)
4. **Free revenue estimates** — available on request for any property, useful for agent pitches

## Roadmap

- **Revenue comparison widget** — planned interactive tool on competitor pages showing how much more an owner would earn with HVH vs. a competitor, based on their property. No dedicated page needed — it will be embedded inline on existing pages.

## Stack

- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS** + shadcn/ui (trimmed — only `button`, `toast`, `toaster`, `sonner`, `tooltip` remain)
- **React Router v6** for routing
- **npm** for package management (not bun — ignore `bun.lock` if it reappears)
- **Vercel** for hosting (`vercel --prod` to deploy)

## Project Structure

```
src/
  components/       # Page sections (Header, HeroSection, Footer, etc.)
  components/ui/    # Shadcn primitives — only kept what's used
  config/
    competitors.ts  # Single source of truth for all competitor pages
  hooks/
    use-toast.ts    # Toast hook (used by ui/toaster)
  lib/
    utils.ts        # cn() helper
  pages/
    CompetitorPage.tsx   # Dynamic competitor comparison page (/:competitorSlug)
    JobsPage.tsx         # /jobs
    ReferralPage.tsx     # /referral
    NotFound.tsx         # 404
  index.css         # Design tokens (CSS vars), Tailwind base
  App.tsx           # Router + providers
  main.tsx          # Entry point
public/             # Static assets (favicon, OG images, robots.txt)
```

## Routing

| Route | Page |
|---|---|
| `/` | Redirects to `/myperfectstays` |
| `/:competitorSlug` | `CompetitorPage` — renders if slug exists in `competitors.ts`, otherwise redirects home |
| `/jobs` | Jobs/hiring page |
| `/referral` | Agent referral program |

## Adding a Competitor Page

Only one file to edit: `src/config/competitors.ts`

```ts
vacasa: {
  slug: "vacasa",
  name: "Vacasa",
  tagline: "Vacasa vs Hawaii Vacation Homes",
  heroHeadline: "Choosing the Right",
  heroSubheadline: "Maui Property Manager?",
  metaTitle: "Hawaii Vacation Homes vs Vacasa",
  metaDescription: "Compare Hawaii Vacation Homes to Vacasa. ...",
},
```

No routing or component changes needed — `/:competitorSlug` handles it automatically.

## Design System

- **Fonts**: Jost (headings) + Open Sans (body) via Google Fonts
- **Colors**: Primary teal `hsl(173 27% 46%)`, background cream `hsl(30 43% 97%)`
- **CSS variables** defined in `src/index.css` under `:root`
- **Layout utilities**: `.section-padding`, `.container-narrow` (defined in `index.css`)

## External Integrations

| Service | Location | ID |
|---|---|---|
| LeadConnector form | HeroSection + ContactFormSection | `NIkdCb3EJxwZ7DtCplGq` |
| Elfsight reviews widget | GuestReviewsSection | `25f1a7c3-19e2-415c-8096-ddcaa436db9e` |

Both are embedded as iframes/scripts — no API keys needed in this repo.

## Common Commands

```bash
npm run dev       # Start dev server (localhost:8080)
npm run build     # Production build → dist/
npm run lint      # ESLint
vercel --prod     # Deploy to production
```

## Key Decisions

- `Index.tsx` was removed — the `/` route redirects directly to `/myperfectstays`, so the page was dead
- shadcn/ui was trimmed to only the 5 components actually used — don't re-add components unless they're needed
- `lovable-tagger` was removed from `vite.config.ts` — this was a Lovable platform plugin, not needed
- `dist/` is gitignored — Vercel builds from source, never commit the dist folder
