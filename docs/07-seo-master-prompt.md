# The Co HR — Master SEO Prompt
Use this once the site (or a working draft of it) exists in the repo. Paste it as-is to your coding AI. It assumes the Next.js App Router stack from `03-technical-architecture.md`.

---

**PROMPT (copy everything below this line):**

---

You are my SEO + technical-SEO engineer. Do a full end-to-end SEO audit and fix pass on this Next.js (App Router) site for **The Co HR**, an HR company offering three services: HR ERP software, outsourced/Remote HR services, and HR/ERP training, targeting B2B buyers (startups, SMEs, enterprises) in India and overseas companies operating in India.

Work through the checklist below in order. For each item: check the current state, fix what's missing or wrong, and tell me what you changed and why. Don't guess at business facts (company address, phone number, social profile URLs, founding year) — ask me for anything you need that isn't already in the codebase or in `02-content-copy.md`.

## 1. Information architecture & crawlability
- Confirm every page (`/`, `/about`, `/services`, `/contact`) is reachable via internal links, has a unique, descriptive URL, and returns a real 200 (no orphan pages, no accidental `noindex`).
- Add/verify `app/sitemap.ts` generating a valid `sitemap.xml` listing all four pages with sensible `lastModified`/`changeFrequency`/`priority` values.
- Add/verify `app/robots.ts` allowing all crawlers, pointing to the sitemap, and blocking nothing important (only block things like internal API routes if any exist).
- Set a canonical URL on every page via `alternates.canonical` in `generateMetadata`, pointing to the production domain (ask me for the final domain if it isn't in the codebase yet).

## 2. Metadata — per page, using `generateMetadata`
For each of the 4 pages, write and implement a unique:
- **Title tag** (50–60 characters): include the primary service/topic for that page plus the brand name, e.g. Home → "HR ERP Software, Outsourced HR & Training | The Co HR"; About → "About The Co HR | HR Transformation Partner"; Services → "HR Services: ERP Software, Remote HR & Training | The Co HR"; Contact → "Book a Free HR Consultation | The Co HR." Don't stuff keywords — write for a human first.
- **Meta description** (140–160 characters): summarize the page's value using the actual copy in `02-content-copy.md`, include a soft call-to-action.
- **Open Graph tags**: `og:title`, `og:description`, `og:type` (`website`), `og:url`, `og:image` (use the horizontal logo lockup on a clean background, 1200x630px — generate/export this from `public/logo/` if it doesn't exist yet), `og:site_name`.
- **Twitter card**: `summary_large_image`, mirroring the OG title/description/image.
- Set a `themeColor` matching `navy.700` from the design system.

## 3. Structured data (JSON-LD)
Add these schema.org types via Next.js `<script type="application/ld+json">` in the relevant page/layout:
- **Organization** schema on the root layout: name, logo (URL to the icon logo), url, and `sameAs` array (ask me for real social profile URLs — don't invent any).
- **Service** schema for each of the three services (HR ERP Software, Remote HR Services, ERP Training) on the Services page, each with `name`, `description` (pulled from `02-content-copy.md`), `provider` referencing the Organization.
- **BreadcrumbList** schema on About/Services/Contact reflecting their position under Home.
- If/when a real FAQ section is added (flagged as missing content in `02-content-copy.md`), add `FAQPage` schema then — don't add it now with placeholder questions.
- Validate every schema block mentally against Google's structured data requirements (required fields present, correct nesting) before finishing — don't just paste boilerplate.

## 4. On-page content SEO
- Enforce one `<h1>` per page only (the main hero/page heading) — audit every page and fix any duplicate or missing `h1`.
- Check heading hierarchy is logical and sequential (`h1` → `h2` → `h3`, no skipped levels) across every section on every page.
- Every `next/image` usage must have descriptive, non-generic `alt` text (e.g. not `alt="image"` — describe what it actually shows, referencing HR/ERP context where relevant for the logo/illustrations).
- Add internal links between pages where it's natural and not forced: e.g. the Home page's service cards should link to the matching anchor on `/services`, the About page's closing CTA should link to `/contact`, `/services` sub-sections should be genuinely anchor-linkable (`id` attributes matching the sticky sub-nav from `04-sitemap-and-page-specs.md` §4) so they're also deep-linkable from search results.
- Make sure all body copy stays exactly as written in `02-content-copy.md` — don't rewrite the client's copy for keyword density; if you think a specific phrase should change for SEO reasons, tell me the suggestion separately rather than editing it silently.

## 5. Technical performance (Core Web Vitals affect SEO ranking directly)
- Confirm every image uses `next/image` with correct `width`/`height` (or `fill` with a sized parent) to prevent layout shift (CLS).
- Confirm fonts are loaded via `next/font` (already required by the technical doc) with no render-blocking external font `<link>` tags left over.
- Audit Framer Motion usage: none of it should delay the Largest Contentful Paint element (typically the hero headline) — hero text should render immediately and animate in, not wait on JS to become visible; verify with a check of what's marked `"use client"` vs. server components.
- Lazy-load below-the-fold heavy sections (e.g. the Employee Journey timeline, Industry Expertise marquee) using dynamic import where it clearly helps initial load, without lazy-loading anything above the fold.
- Run through and report estimated Lighthouse scores (Performance/Accessibility/SEO/Best Practices) for all four pages; target 90+ on each; list any remaining blockers you can't fix without my input (e.g. large uncompressed client-supplied images).

## 6. Mobile & accessibility (Google treats both as ranking-adjacent signals)
- Confirm mobile-first rendering has no horizontal scroll, tap targets are large enough (44px minimum), and the hamburger nav/contact form are fully usable on a small viewport.
- Confirm color contrast on every text/background combination from `01-design-system.md` meets WCAG AA — flag any pairing that doesn't and suggest the smallest possible token change to fix it.
- Confirm all interactive elements (nav links, buttons, form fields, sub-nav anchors) are keyboard-navigable and have visible focus states.

## 7. Local/entity SEO (since this targets India + overseas clients)
- If a physical business address, phone number, or service-area list is available, add a **LocalBusiness** (or more specifically a **ProfessionalService**) schema block alongside Organization — ask me for these details, don't invent them.
- Confirm the Contact page clearly states service availability (India-based, serving overseas companies operating in India, per `02-content-copy.md`) in plain text as well as schema, since this phrase is a real differentiator worth being crawlable.

## 8. Reporting
When you're done, give me a single summary covering: what you changed, per-page title/description you wrote, which schema blocks you added, any Lighthouse numbers you captured, and a short list of anything you couldn't finish because it needs information only I have (domain name, social URLs, business address/phone, analytics/Search Console account).

Do not deploy or submit anything to Google Search Console yourself — flag that as a manual step for me at the end.

---

*(End of prompt.)*

## After the AI finishes — your manual follow-ups (not code, can't be automated by the AI)
1. Verify the domain in Google Search Console and submit the `sitemap.xml`.
2. Set up Google Business Profile if the client wants local/map visibility.
3. Add Google Analytics / another analytics tool if the client wants traffic reporting (not in the original brief — confirm with client first).
4. Once real client logos/testimonials/FAQ content exist, come back and add the `FAQPage` schema and any review/rating schema — don't do this with placeholder data.
