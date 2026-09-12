# The Co HR — Technical Architecture & Build Documentation
Version 1.0 · For AI-assisted ("vibe coding") build in Next.js

## 1. Stack decision — one important flag first

You listed **Tailwind CSS + Chakra UI** together. These two are usually **not combined** in practice — Chakra has its own styling engine (Emotion + its own style props/theme tokens), and pairing it with Tailwind causes class conflicts, larger bundle size, and fights over who controls spacing/colors. Pick one:

- **Recommended: Next.js + Tailwind CSS + shadcn/ui** — shadcn components are copy-into-your-repo (not an npm dependency), fully thearmable with Tailwind tokens, and give you accessible primitives (dialog, accordion, tabs, form) without a second styling system. This is the standard modern stack for exactly this kind of marketing/corporate site and matches the "clean, professional, animated" brief well.
- **Alternative: Next.js + Chakra UI only** (drop Tailwind) — faster to theme via a single `theme.ts` file, good accessibility defaults, less popular in 2025+ new projects but solid.

This document assumes **Option A: Next.js + Tailwind + shadcn/ui + Framer Motion**.

## 2. Core stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 14+ (App Router) | SSR/SSG for SEO, file-based routing, image optimization |
| Styling | Tailwind CSS | Utility-first, fast to theme from the design-system doc |
| Components | shadcn/ui | Accessible primitives, owns no runtime styling conflict |
| Animation | Framer Motion | Scroll-reveal, hover, timeline animation from design doc §5 |
| Icons | lucide-react | Consistent single icon set |
| Forms | React Hook Form + Zod | Demo/contact form validation |
| Fonts | next/font (Google Fonts: Sora + Inter) | Zero layout shift, self-hosted |
| Deployment | Vercel | Native Next.js hosting, preview URLs per PR |
| Analytics (optional) | Vercel Analytics or Plausible | Lightweight, privacy-friendly |
| CMS (optional, if client wants self-editing) | none for v1 — copy is static in code; revisit Sanity/Contentful only if client asks to edit copy without a developer |

## 3. Folder structure

```
the-co-hr/
├─ app/
│  ├─ layout.tsx              # root layout, fonts, nav, footer
│  ├─ page.tsx                # Home
│  ├─ about/page.tsx
│  ├─ services/page.tsx
│  ├─ contact/page.tsx        # demo request form
│  └─ globals.css
├─ components/
│  ├─ layout/
│  │  ├─ navbar.tsx
│  │  └─ footer.tsx
│  ├─ sections/
│  │  ├─ hero.tsx
│  │  ├─ why-us.tsx
│  │  ├─ core-services.tsx
│  │  ├─ industry-expertise.tsx
│  │  ├─ employee-journey.tsx
│  │  ├─ cta-banner.tsx
│  │  └─ services-detail.tsx   # reused on /services with more depth
│  └─ ui/                     # shadcn generated primitives (button, card, accordion, etc.)
├─ lib/
│  ├─ content.ts              # exported copy objects sourced from 02-content-copy.md
│  └─ utils.ts
├─ public/
│  └─ logo/                   # both supplied logo files, plus favicon exports
├─ tailwind.config.ts          # design tokens from 01-design-system.md
└─ next.config.js
```

## 4. Tailwind config — map design tokens directly

`tailwind.config.ts` `theme.extend.colors` should mirror §1 of the design-system doc exactly (`navy.900/700/500`, `blue.600/500/400`, `gray.500/300/100`) so every component references `bg-navy-700` etc. rather than raw hex — this is what makes future edits (client asks to nudge a color) a one-line change.

`theme.extend.fontFamily`: `heading: ['var(--font-sora)']`, `body: ['var(--font-inter)']`.

`theme.extend.borderRadius`: add a `2xl` alias if not already at 16px.

## 5. Content strategy

Keep all page copy in `lib/content.ts` as typed objects (one per page/section), imported into components — don't hardcode strings inside JSX. This does two things: (1) makes it trivial for you or the client to review/edit copy in one file, (2) sets you up cleanly if you ever add a CMS later.

## 6. Component checklist (build order)

1. `Navbar` — logo, links (Home/About/Services/Contact), sticky, mobile hamburger + slide-in menu
2. `Hero` — headline, sub-copy, two CTAs, optional light illustration/gradient blob background
3. `WhyUs` — section title + paragraph
4. `CoreServices` — 3 cards (ERP / Remote HR / Training), each with feature list + deployment/delivery tags
5. `WhyChooseUs` — 5 feature blocks (ecosystem, licensing, lifecycle, industries, security)
6. `IndustryExpertise` — grid/marquee of 10 industry chips
7. `EmployeeJourney` — 12-stage horizontal (desktop) / vertical (mobile) animated timeline
8. `CTABanner` — final "Ready to Transform Your HR?" band with demo CTA
9. `Footer` — logo, link columns, socials, copyright
10. `AboutPage` sections — story, vision, mission, 6 core values grid
11. `ServicesPage` sections — 3 detailed service blocks with module/programme lists
12. `ContactForm` — demo request form (name, company, email, phone, company size, message) with RHF + Zod validation, success/error states

## 7. Performance & SEO baseline

- Use `next/image` for the logo and any illustrations (automatic optimization, no CLS).
- Set metadata per page via Next.js `generateMetadata` (title, description, OG image using the horizontal logo lockup).
- Target Lighthouse ≥ 90 on Performance/Accessibility/SEO for a marketing site this size — mostly achieved by: self-hosted fonts, no unnecessary client components (mark Framer Motion sections `"use client"` but keep the rest server components), optimized images, no layout shift from web fonts.
- Add a `sitemap.xml` and `robots.txt` via Next.js's built-in `app/sitemap.ts` / `app/robots.ts`.

## 8. Accessibility

- Color contrast: verify `navy.700` on white and white on `blue.600` both pass WCAG AA (they should at the hex values in the design doc, but re-check with a contrast checker once final hex is locked from the logo).
- All interactive elements keyboard-navigable (shadcn primitives handle this by default).
- Respect `prefers-reduced-motion` — Framer Motion: wrap animations with a check and fall back to instant opacity/no animation.

## 9. What to hand the client at launch

- Deployed Vercel URL + custom domain instructions
- A short "how to request a copy change" note (since copy lives in `lib/content.ts`, any future text edit is a small PR)
- Contact form destination confirmed (where do submissions go — email via Resend/SendGrid, or a Google Sheet/CRM webhook?) — confirm this with the client before building the form, it's not specified in the brief yet.
