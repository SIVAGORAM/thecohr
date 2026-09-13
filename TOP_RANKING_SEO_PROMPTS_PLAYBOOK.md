# 🏆 Top 0.1% Ranking SEO Master Prompt Playbook
**Framework**: Next.js (App Router) + React + TypeScript + Schema.org  
**Target Goal**: Rank #1 and dominate Google SERPs with 100% technical accuracy, zero 404 errors, 95+ PageSpeed scores, and perfect indexation.

---

## 📋 Table of Prompts
1. [Prompt 1: Complete Technical SEO & Structural Audit](#prompt-1-complete-technical-seo--structural-audit)
2. [Prompt 2: Next.js 16 Dynamic Metadata & Canonical Engine](#prompt-2-nextjs-16-dynamic-metadata--canonical-engine)
3. [Prompt 3: Core Web Vitals, LCP & Protected Image Optimization](#prompt-3-core-web-vitals-lcp--protected-image-optimization)
4. [Prompt 4: Advanced Schema.org JSON-LD Rich Snippet Generator](#prompt-4-advanced-schemaorg-json-ld-rich-snippet-generator)
5. [Prompt 5: Automated Dynamic Sitemap.xml & Robots.txt Generator](#prompt-5-automated-dynamic-sitemapxml--robotstxt-generator)
6. [Prompt 6: Legacy Website (WordPress/Other) to Next.js 301 Migration](#prompt-6-legacy-website-wordpressother-to-nextjs-301-migration)
7. [Prompt 7: Non-Blocking GA4 Analytics Component](#prompt-7-non-blocking-ga4-analytics-component)
8. [Prompt 8: Post-Deployment Audit & SERP Indexation Master Check](#prompt-8-post-deployment-audit--serp-indexation-master-check)

---

## 🚀 PROMPT 1: Complete Technical SEO & Structural Audit

```text
Act as an expert Technical SEO Specialist and Next.js Frontend Architect. Perform a deep, end-to-end Technical SEO Audit of this entire codebase. 

Please inspect:
1. CANONICAL TAGS: Ensure every route has an explicit canonical tag preventing duplicate content indexing.
2. META TITLES & DESCRIPTIONS: Verify that every page has a unique, keyword-optimized title (50-60 chars) and meta description (120-160 chars) without any duplicates.
3. HEADING HIERARCHY: Audit all pages for a strict single <h1> element per page, followed by logical <h2> -> <h3> sequence without skipping levels.
4. IMAGE ALT TEXTS: Scan all <img>, <Image>, and custom image components across the codebase to ensure 100% have descriptive, keyword-rich alt tags.
5. OPENGRAPH & TWITTER CARDS: Inspect OpenGraph tags (og:title, og:description, og:url, og:image, og:site_name) and Twitter cards across all pages.
6. INDEXABILITY: Confirm no test `noindex` tags remain in production metadata for public pages.

Provide a prioritized list of fixes (P0, P1, P2) and automatically fix all identified issues across the codebase. Run build verification (`npm run build`) to ensure 0 errors.
```

---

## 🚀 PROMPT 2: Next.js 16 Dynamic Metadata & Canonical Engine

```text
Act as a Next.js 16 SEO Engineer. Build a centralized, reusable SEO metadata construction engine in `lib/seo.ts` that dynamically generates unique, keyword-optimized <title>, meta description, canonical URL, and OpenGraph/Twitter social cards for every page route in the project.

Requirements:
1. Create a `SITE_CONFIG` object in `lib/seo.ts` that dynamically resolves `process.env.NEXT_PUBLIC_SITE_URL` (falling back to production URL).
2. Create a `ROUTES_SEO` registry mapping route paths to target titles, descriptions, priorities, and change frequencies.
3. Implement `constructMetadata(config)` helper returning Next.js `Metadata` type.
4. Enforce strict `trailingSlash: true` normalization across all canonical URLs and OpenGraph URLs (e.g. `https://domain.com/page/`) to eliminate duplicate content indexing.
5. Update all route `page.tsx` files (`app/`, `app/about/`, `app/services/`, `app/contact/`, etc.) to consume `constructMetadata(ROUTES_SEO.<route>)`.
6. Run `npm run build` to verify clean compilation.
```

---

## 🚀 PROMPT 3: Core Web Vitals, LCP & Protected Image Optimization

```text
Act as a Next.js Performance Optimization Specialist. Audit all frontend components and images for Core Web Vitals bottlenecks (LCP, CLS, INP) to target a Google PageSpeed score above 90+.

Requirements:
1. LCP (Largest Contentful Paint): Locate the image detected as LCP (such as hero images or top section mockups). Remove `loading="lazy"` and add `priority` with explicit responsive `sizes` to force instant browser preloading.
2. CLS (Cumulative Layout Shift): Ensure all image wrappers reserve explicit pixel-space bounds using Tailwind CSS aspect ratio primitives or Next.js layout bounds to achieve a 0.00 CLS score.
3. IMAGE PROTECTION: Wrap images in a custom `ProtectedImage` component that disables context-menu right-click downloads and drag events while preserving 100% Googlebot image asset crawlability and `alt` propagation.
4. CACHING: Configure immutable HTTP Cache-Control headers in `next.config.ts` for images and fonts (`public, max-age=31536000, immutable`).
```

---

## 🚀 PROMPT 4: Advanced Schema.org JSON-LD Rich Snippet Generator

```text
Act as a Structured Data & Schema.org Engineer. Refactor our JSON-LD schema injection component in `components/seo/json-ld.tsx` for React 19 / Next.js 16 App Router compatibility.

Requirements:
1. SCRIPTER SAFETY: Ensure `<script type="application/ld+json">` safely escapes `<` characters (`JSON.stringify(data).replace(/</g, '\\u003c')`) to prevent XSS while maintaining 100% server-to-client SSR compatibility.
2. DYNAMIC SCHEMAS: Write dynamic schema generators that extract brand info directly from `lib/content.ts` and `SITE_CONFIG`:
   - `getOrganizationSchema()`: Schema.org `Corporation` / `Organization` with logo, slogan, legalName, sameAs social URLs, and contactPoint.
   - `getHcmSoftwareSchema()`: Schema.org `SoftwareApplication` with operatingSystem, applicationCategory, publisher, and offers.
   - `getBreadcrumbSchema()`: Schema.org `BreadcrumbList` for subpages.
3. INJECTION: Inject global organization and software schemas into root `app/layout.tsx`.
4. Validate schemas against Google Rich Results Test standards.
```

---

## 🚀 PROMPT 5: Automated Dynamic Sitemap.xml & Robots.txt Generator

```text
Act as a Senior Next.js Architect. Implement an automated filesystem route scanner and dynamic `sitemap.xml` / `robots.txt` generator matching Next.js `MetadataRoute` specifications.

Requirements:
1. SITEMAP (`app/sitemap.ts`): Write a dynamic filesystem crawler `getPageRoutes()` that automatically scans `app/` for any `page.tsx` routes. Ensure newly added pages (e.g. `app/blog/page.tsx`) are automatically discovered and included in `/sitemap.xml` without manual configuration. Exclude `noIndex` routes and `/api/*`.
2. ROBOTS (`app/robots.ts`): Implement `robots()` returning `MetadataRoute.Robots` pointing to `${SITE_CONFIG.domain}/sitemap.xml`, allowing `/` and disallowing `/api/`, `/wp-admin/`, and system feeds.
3. DOMAIN RESOLUTION: Ensure zero `localhost` or dev URLs exist in generated XML. All URLs must output absolute production HTTPS URLs with trailing slashes.
```

---

## 🚀 PROMPT 6: Legacy Website (WordPress/Other) to Next.js 301 Migration

```text
Act as a Technical SEO Migration Expert. We are replacing an active WordPress website on `https://domain.com` with a brand new Next.js 16 App Router application.

Requirements:
1. URL AUDIT: Analyze legacy WordPress footprint (`/about-us/`, `/contact-us/`, `/wp-content/uploads/`, `/category/`, `/feed/`, `/?p=123`).
2. REDIRECTS (`next.config.ts`): Write a production-ready `redirects()` array handling:
   - Static 301 permanent redirects for legacy page URLs to new Next.js routes.
   - Wildcard regex redirects for legacy uploads (`/wp-content/uploads/:path*` -> `/images/:path*`).
   - Wildcard redirects for RSS feeds (`/feed/:path*` -> `/`).
3. ROBOTS DISALLOW (`app/robots.ts`): Add legacy WP admin paths (`/wp-admin/`, `/wp-includes/`, `/wp-json/`, `/*.php$`, `/category/`, `/tag/`) to disallow list so Googlebot halts crawling dead WP paths.
```

---

## 🚀 PROMPT 7: Non-Blocking GA4 Analytics Component

```text
Act as a Next.js Frontend Performance Engineer. Build an optimized Google Analytics 4 (GA4) tracking component in `components/seo/google-analytics.tsx`.

Requirements:
1. SCRIPT STRATEGY: Use `next/script` with `strategy="afterInteractive"` so analytics script loading never blocks main-thread parsing or hydrations.
2. FAIL-SAFE: Safely read `process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID`. If the ID is missing, return `null` without throwing errors.
3. INJECTION: Mount `<GoogleAnalytics />` in `app/layout.tsx` inside `<body>`.
```

---

## 🚀 PROMPT 8: Post-Deployment Audit & SERP Indexation Master Check

```text
Act as a Principal SEO Auditor. Generate a comprehensive post-deployment verification guide and action checklist for the newly deployed Next.js site.

Cover:
1. Live curl commands to test SSL redirection, trailing slash 308 redirects, `robots.txt`, and `sitemap.xml`.
2. Google Search Console DNS verification, sitemap XML submission, and manual forced indexation workflow.
3. Schema.org Rich Results Test validation instructions.
4. Core Web Vitals audit targets (LCP < 2.5s, CLS = 0.00, INP < 200ms, PageSpeed > 90).
5. Save the complete document as `POST_DEPLOYMENT_SEO_CHECKLIST.md` in the root of the project.
```
