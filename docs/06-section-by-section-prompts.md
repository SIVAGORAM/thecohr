# The Co HR — Screen-Wise / Section-Wise Prompts
Use these one at a time, in order, after the AI has scaffolded the project from the master prompt. Paste one section's prompt, review what it builds, then move to the next. Each one assumes the AI already has all 4 reference docs loaded — reference them by name instead of re-pasting content.

---

## SHARED LAYOUT

### Prompt — Navbar
Build the `Navbar` component per `01-design-system.md` §4 and `04-sitemap-and-page-specs.md` §1.

Look: white background, full-width, sticky to the top. Left side: the horizontal logo lockup (icon + "The Co HR" wordmark), roughly 36px tall, clickable to Home. Center-right: nav links "Home / About / Services / Contact" in `navy.700`, `body` size, medium weight, evenly spaced (~32px gap). The active page's link gets a 2px `blue.600` underline that sits 4px below the text. Far right: a solid `blue.600` "Book a Demo" button, `rounded-2xl`, white text.

On scroll past ~40px, the navbar gains a subtle bottom shadow (`shadow-sm`) so it visually separates from page content — don't add a background color change, keep it white.

Below `md` breakpoint: collapse the nav links into a hamburger icon (right side, next to the logo), which opens a full-height slide-in panel from the right with the same links stacked vertically and the CTA button at the bottom of the panel. Panel background white, links `h3` size for easy tapping, close icon top-right.

### Prompt — Footer
Build the `Footer` component per `01-design-system.md` §4 and `04-sitemap-and-page-specs.md` §1.

Look: full-width `navy.900` background, white text. Four-column layout on desktop (stacks to 1 column, accordion-style optional, on mobile): Company (About, Contact), Solutions (HR ERP, Remote HR Services, ERP Training), Industries (top 5 + "and more"), Legal (Privacy Policy, Terms of Service — placeholder links, mark as `#`). Above the columns, place the logo in its light/white variant plus the tagline "People | Performance | Possibilities" in `gray.300`. Below the columns, a thin `gray.300`-at-10%-opacity divider line, then a bottom bar: "© [year] The Co HR. All rights reserved." on the left, three social icons (LinkedIn, Twitter/X, Facebook — use generic icons since none were supplied) in `blue.400` on the right.

---

## HOME PAGE

### Prompt — Hero
Build the Hero section per `04-sitemap-and-page-specs.md` §2 row 2 and the copy in `02-content-copy.md` §1.

Look: two-column layout on desktop (55/45 split), stacked on mobile. Left column: eyebrow-free — go straight into the `display`-size headline "HR Made Simple. HR Made Smarter." in `navy.700`, tight line-height, then the sub-heading paragraph in `body-lg` `gray.500`/`ink` below it with ~24px gap, then the two CTA buttons ("Book a Demo" primary, "Talk to an Expert" secondary) side by side with ~16px gap. Right column: a soft abstract shape using the brand gradient (`01-design-system.md` gradient token) behind a simple illustration or icon cluster suggesting people/connection — keep it light and geometric, not a stock photo, echoing the logo's circular figures. Background of the whole hero: white, with a very faint `gray.100` radial glow behind the right-column graphic so it doesn't look like it's floating on nothing.

Animation: headline fades up first (0ms delay), sub-heading fades up at 100ms, buttons fade up at 200ms, the right-column graphic fades/scales in at 150ms — all 500ms ease-out, translateY from 16px.

### Prompt — Why The Co HR
Build the "Why The Co HR" section per `02-content-copy.md` §1.

Look: centered content, max-width ~720px, generous vertical padding (`py-24`). Small section eyebrow label above the heading (e.g. "WHY US" in `blue.600`, `small`, uppercase, letter-spaced) is optional but adds polish — include it. Heading "One Partner. Three Powerful HR Solutions." in `h2`, `navy.700`, centered. Paragraph below in `body`, `ink`, centered, normal line-height. No cards or grid here — this is a plain, breathing text section that sets up the next section.

Animation: whole block fades up as it enters viewport, no stagger needed (it's one block).

### Prompt — Three Core Services
Build the Core Services section per `02-content-copy.md` §1 "Our Three Core Services."

Look: 3-column card grid on desktop (1 column on mobile, stacked with normal gap). Each card: white background, 1px `gray.300` border, `rounded-2xl`, `p-8`. Top of card: a 56px circle in `blue.400`-at-15%-opacity with a relevant `lucide-react` icon (e.g. database/layers icon for ERP, users icon for Remote HR, graduation-cap icon for Training) centered inside in `blue.600`. Below the icon: `h3` title ("HR ERP Platform", etc.), then one-line description in `body`/`gray.500`, then the feature list as small `gray.500` bullet tags (wrap in a `flex flex-wrap gap-2` of small pill chips rather than a plain bulleted list — more premium/scannable than a long list), then the deployment/ideal-for tags at the bottom in a slightly different chip style (outlined, not filled) to visually separate "what it does" from "how you get it." Add a subtle "Learn more →" text link at the bottom of each card in `blue.600`.

Animation: cards stagger fade-up, 100ms apart, left to right. On hover: card lifts 6px (`-translate-y-1.5`), shadow grows, border color shifts from `gray.300` to `blue.400`.

### Prompt — Why Choose Us
Build the "Why Choose Us" section per `02-content-copy.md` §1.

Look: heading "Complete HR Ecosystem" (`h2`, centered) with its one-line description below, then a 5-item feature layout below that — use a responsive grid (3 columns top row, 2 columns centered second row on desktop; 1 column on mobile) rather than a plain list, since these five (Ecosystem, Flexible Licensing, End-to-End Lifecycle, Industry Expertise, Secure & Scalable) deserve equal visual weight. Each item: small icon-in-circle (same style as Core Services cards) at the top, `h3`-scaled-down title (or `body` bold if `h3` feels too big at this density), 1-2 line description below in `body`/`gray.500`. No borders/cards here — keep this section lighter than the Core Services cards above it for visual rhythm (alternate "boxed" and "open" section styles down the page).

Animation: icons pop in (`scale 0.85→1`, 300ms) with a 80ms stagger as the section scrolls into view.

### Prompt — Industry Expertise
Build the Industry Expertise sub-section (nested inside "Why Choose Us" per the content doc, but can be its own visual band).

Look: a horizontal row of 10 pill/chip elements (Healthcare, Manufacturing, IT, Construction, Education, Retail, Logistics, Hospitality, Financial Services, Government Organisations), each a `rounded-full` outlined chip (`gray.300` border, `navy.700` text, `body` size, `px-5 py-2`), laid out as a wrapping flex row centered, OR as a slow auto-scrolling horizontal marquee if you want continuous motion — your call, but if you use the marquee, it must pause on hover/focus and respect `prefers-reduced-motion` by falling back to a static wrapped row.

### Prompt — Secure & Scalable
Build the "Secure & Scalable" block per `02-content-copy.md` §1.

Look: same visual pattern as "Why Choose Us" items — a 5-item icon+label row (Enterprise-grade security, Role-based access, Cloud backup, Data encryption, High availability), but simpler: icon + short label only, no long description, laid out in a single row on desktop (wraps to 2-3 per row on mobile). Use a lock/shield-family icon set for consistency.

### Prompt — Employee Journey Timeline
Build the Employee Journey section per `04-sitemap-and-page-specs.md` §2 row 8 and the 12-stage list in `02-content-copy.md` §1.

Look: heading "The Employee Journey" (or similar) above, then the 12-stage timeline: Recruit → Hire → Onboard → Manage Attendance → Leave Management → Payroll → Performance → Learning → Asset Tracking → Employee Engagement → Offboarding → Exit Management. Desktop: horizontal line running left to right in `gray.300`, with 12 small circular nodes along it in `blue.600`, each node connected to a small label below/above it alternating (label above the line for odd nodes, below for even, to avoid a cramped single row of text). Mobile: rotate to a vertical timeline, line running top to bottom, labels to the right of each node.

Animation: as the section scrolls into view, animate the connector line drawing from start to end (use an SVG `stroke-dashoffset` animation or a width/height transition on a div), and have each node+label fade/pop in shortly after the line reaches it, so it reads like the line is "revealing" each stage in sequence, not all nodes appearing at once.

### Prompt — Final CTA Banner
Build the `CTABanner` shared component per `02-content-copy.md` §1 "Final Call to Action."

Look: full-width band, background using the brand gradient (`01-design-system.md` gradient token, diagonal), `py-20`. Centered content: heading "Ready to Transform Your HR?" in white, `h2`, then the body paragraph in white-at-85%-opacity below, then a single white "Book a Free Consultation" button (`navy.700` text on white background — inverted from the usual primary button so it stands out against the gradient) centered below with some top margin.

This component gets reused at the bottom of every page (Home, About, Services), so build it once as a shared component with the CTA button text as a prop (default "Book a Free Consultation").

---

## ABOUT PAGE

### Prompt — About Hero
Build the About page hero per `04-sitemap-and-page-specs.md` §3 and copy in `02-content-copy.md` §2.

Look: simpler than the Home hero — no illustration, no split columns. Centered, `py-16`, heading "About The Co HR" (`h1`), sub-heading "Empowering Businesses Through People and Technology" below it in `body-lg`/`gray.500`.

### Prompt — Our Story
Build the story section using the 4 paragraphs in `02-content-copy.md` §2.

Look: single centered column, max-width ~720px for comfortable reading, `body` size, `ink` color, normal paragraph spacing (`space-y-6`). No cards, no icons — this is a plain reading section, intentionally calmer than the rest of the site.

### Prompt — Vision & Mission
Build the Vision & Mission block per `02-content-copy.md` §2.

Look: two side-by-side cards on desktop (stacked on mobile), each on a `gray.100` background (not white — this is the "alternate section background" moment from the design doc, visually separating this from the Story section above it), `rounded-2xl`, `p-8`. Left card: "Our Vision" (`h3`) + paragraph. Right card: "Our Mission" (`h3`) + paragraph. Keep both cards equal height even if text length differs slightly (use `flex` with equal-height columns).

### Prompt — Core Values
Build the Core Values grid per `02-content-copy.md` §2 (6 values).

Look: 3-column x 2-row grid on desktop (2 columns on tablet, 1 on mobile). Each value: small icon-in-circle (reuse the same icon-circle style as Home's Core Services cards for consistency), `h3`-scaled title (Innovation, Integrity, Customer Success, Excellence, Collaboration, Continuous Learning), one-line description below in `body`/`gray.500`. No card borders needed — keep it as an open grid, icons + text only, to match the calmer tone of the About page overall.

---

## SERVICES PAGE

### Prompt — Services Hero
Build the Services page hero, same pattern as the About hero: centered, `py-16`, heading "Our Services" (`h1`), sub-heading "One Platform. One Partner. Complete HR Solutions." below, plus the intro paragraph from `02-content-copy.md` §3 underneath in `body-lg`.

### Prompt — Service Detail Blocks (x3)
Build the three service detail sections per `04-sitemap-and-page-specs.md` §4 and full copy in `02-content-copy.md` §3.

Look: each service gets a full-width alternating two-column layout — Service 1 (HR ERP Software) has text/list on the left and a visual accent (icon cluster or simple diagram using brand colors) on the right; Service 2 (Remote HR Services) flips it, visual on the left, text on the right; Service 3 (ERP Training) flips back. This alternation creates visual rhythm down a long page. Within the text column: `h2` service name, one-line description, then the modules/services/programmes list — for Service 1's 14 modules specifically, use a 2-column checklist grid (icon + label) rather than a long single-column list, since 14 plain bullets would feel dense; for Services 2 and 3's shorter lists, a simple single-column checklist is fine. Below the list, show the deployment/delivery options as outlined pill chips.

Add a slim sticky sub-navigation bar just below the page hero with three anchor links ("HR ERP Software / Remote HR Services / ERP Training") that smooth-scroll to each block and highlight the active section as the user scrolls — this was flagged as a nice-to-have in `04-sitemap-and-page-specs.md` §4.

---

## CONTACT PAGE

### Prompt — Contact / Demo Request
Build the Contact page per `04-sitemap-and-page-specs.md` §5.

Look: two-column layout on desktop (40/60 split), stacked on mobile. Left column: heading "Book a Free Consultation" (`h1`), reassurance copy reused from the Home CTA text, and optionally the company's contact details (email/phone — placeholder, confirm with client) with small icons. Right column: the form in a white card with `gray.300` border and soft shadow — fields for Name, Company, Work Email, Phone, Company Size (dropdown: 1-10, 11-50, 51-200, 200+), Message (textarea), then a full-width `blue.600` "Submit" button. Field labels above each input in `small`/`gray.500`, inputs with `rounded-xl` and a `blue.600` focus ring.

Do NOT wire the submit handler to an actual destination yet — stub it with a loading state and an inline success message ("Thanks — we'll be in touch within one business day.") and stop to ask me where submissions should actually go (email service, CRM, or a webhook) before connecting it for real.
