# The Co HR — Sitemap & Page-by-Page Build Spec
Version 1.0

## 1. Sitemap

```
/                → Home
/about           → About Us
/services        → Services
/contact         → Book a Demo / Talk to an Expert (form)
```

Nav order: Home · About · Services · Contact, with "Book a Demo" as a standalone button (not just a nav link) on the far right of the navbar per the design system.

Footer link columns (suggested, confirm with client):
- **Company:** About, Contact
- **Solutions:** HR ERP, Remote HR Services, ERP Training
- **Industries:** Healthcare, Manufacturing, IT, Education, Retail (top 5, "+more" link if needed)
- **Legal:** Privacy Policy, Terms of Service *(not in client's supplied content — flag as missing, needs client input or standard boilerplate)*

---

## 2. Home Page — section-by-section spec

| # | Section | Layout | Animation |
|---|---|---|---|
| 1 | Navbar | Sticky top, white, logo + links + CTA | Shrinks slightly + gains shadow on scroll |
| 2 | Hero | Left: headline/sub-copy/CTAs. Right: light illustration or gradient blob using logo colors | Fade-up headline → sub-copy → buttons, staggered 100ms each |
| 3 | Why The Co HR | Centered heading + paragraph, max-width ~720px for readability | Fade-up on scroll into view |
| 4 | Three Core Services | 3-column card grid (stacks to 1 column on mobile) | Cards stagger fade-up, 100ms apart; hover = lift + border color shift to `blue.400` |
| 5 | Why Choose Us | 5-item feature grid (2-3-2 or icon-left list layout) | Icon pops in (`scale 0.8→1`) as each item enters view |
| 6 | Industry Expertise | Horizontal chip/pill row, wraps or auto-scrolls (marquee) with 10 industries | Optional slow auto-scroll marquee, pauses on hover |
| 7 | Secure & Scalable | 5-item icon row (security features) | Same fade-up-stagger pattern as §5 |
| 8 | Employee Journey | 12-stage horizontal timeline (desktop), vertical stack (mobile) | Connector line draws in on scroll; each stage icon appears in sequence |
| 9 | Final CTA banner | Full-width band, gradient or navy background, heading + CTA button | Fade-up, button has gradient hover per design doc |
| 10 | Footer | 4-column + bottom bar | No animation needed |

## 3. About Page — section-by-section spec

| # | Section | Notes |
|---|---|---|
| 1 | Page hero | Short — heading "About The Co HR" + sub-heading, no big illustration needed (reserve visual weight for Home) |
| 2 | Story | Single readable column, 4 short paragraphs (as in content doc), max-width ~720px |
| 3 | Vision & Mission | Two side-by-side cards or stacked blocks, visually distinct from the story paragraphs above (light background tint using `gray.100`) |
| 4 | Core Values | 6-item grid (3x2 desktop, 1 column mobile), icon + title + one-line description per value |
| 5 | CTA banner | Reuse the Home page's final CTA component for consistency |

## 4. Services Page — section-by-section spec

| # | Section | Notes |
|---|---|---|
| 1 | Page hero | Heading "Our Services" + sub-heading |
| 2 | Service 1 — HR ERP Software | Full-width alternating layout: text block + module list on one side, deployment-options tag row below. Consider a tabbed or accordion module list if the 14 modules feel dense as a flat list |
| 3 | Service 2 — Remote HR Services | Mirror layout, alternate text/visual side for rhythm |
| 4 | Service 3 — ERP Training | Same pattern, programmes list |
| 5 | CTA banner | Reuse shared component |

Note: consider a sticky in-page sub-nav (Service 1 / Service 2 / Service 3 anchor links) at the top of this page since it's the longest/densest page — improves usability without adding new copy.

## 5. Contact / Demo Request Page

- Left: short reassurance copy ("Book a free consultation today...") reused from the Home CTA.
- Right: form — Name, Company, Work Email, Phone, Company Size (dropdown), Message. Submit → confirm destination with client (see technical doc §9) before wiring it up.
- Success state: inline confirmation message, not just a toast (B2B users may not notice a toast and worry the form failed).

## 6. Responsive breakpoints

Use Tailwind defaults: `sm 640` / `md 768` / `lg 1024` / `xl 1280`. Key rules:
- 3-column card grids → 1 column below `md`.
- Employee Journey timeline → horizontal above `lg`, vertical stacked below.
- Navbar → hamburger menu below `md`.

## 7. Open questions to confirm with the client before/while building

These aren't answered anywhere in the supplied files — flag them early so they don't block you mid-build:
1. Real testimonials / client logos / trust stats — none supplied, don't fabricate them.
2. FAQ content — mentioned as a "suggestion" in the raw brief but no actual Q&A given.
3. Contact form destination (email inbox / CRM / Google Sheet).
4. Legal pages (Privacy Policy, Terms) — needed for a live B2B site, not in the brief.
5. Final locked hex values — confirm by eyedropping the actual logo file once, rather than the approximated values in the design-system doc.
6. Domain/hosting access if you're deploying on the client's behalf.
