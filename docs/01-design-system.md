# The Co HR — Brand & Design System
Version 1.0 · For Next.js + Tailwind CSS + Chakra UI build

This is the single source of truth for color, type, spacing, and component style. Every screen should be built by referencing this file, not by eyeballing the logo again.

---

## 1. Brand Colors

Sampled from the two supplied logo files (icon + horizontal lockup). Treat these as the working palette — before final production, drop the logo PNG into a color picker (Figma / Photoshop eyedropper) once to confirm exact hex, since PNG compression can shift values slightly.

### Primary — Deep Navy
Used for: "The" and "HR" wordmark, primary headings, footer background, primary text on light backgrounds.
| Token | Hex | Notes |
|---|---|---|
| `navy.900` | `#0B1F4D` | Darkest — footer bg, hero overlays |
| `navy.700` | `#12306F` | Headings, nav bar text |
| `navy.500` | `#1B3E8C` | Secondary buttons, links |

### Secondary — Bright Sky Blue
Used for: "Co" in wordmark, the right figure in the icon, primary CTA buttons, active states, icon accents.
| Token | Hex | Notes |
|---|---|---|
| `blue.600` | `#0EA5E9` | Primary CTA background |
| `blue.500` | `#22B2EE` | Hover / gradient end |
| `blue.400` | `#5FD1F5` | Light accents, chips, badges |

### Accent — Silver / Steel Gray
Used for: the swoosh under the icon, the "PEOPLE | PERFORMANCE | POSSIBILITIES" tagline, dividers, muted labels.
| Token | Hex | Notes |
|---|---|---|
| `gray.500` | `#8A8F98` | Tagline text, secondary copy |
| `gray.300` | `#D3D7DC` | Dividers, borders |
| `gray.100` | `#F4F6F8` | Section alt-background (never pure white-on-white) |

### Neutrals
| Token | Hex | Notes |
|---|---|---|
| `white` | `#FFFFFF` | Base background — client explicitly wants a light theme, no dark mode |
| `ink` | `#1A1D23` | Body copy (do not use pure black) |
| `success` | `#16A34A` | Form success states only |
| `danger` | `#DC2626` | Form error states only |

### Gradient (brand signature)
`linear-gradient(135deg, #0B1F4D 0%, #0EA5E9 100%)` — this is the icon's gradient. Reserve it for: hero background accents, the logo mark itself, primary button hover, section divider "waves." Do not apply it to large body backgrounds — it will read as heavy against the "clean/white" brief.

---

## 2. Typography

Client wants "premium, sleek, professional" — pair a confident geometric sans for headings with a highly legible sans for body copy.

- **Headings:** `Sora` or `Plus Jakarta Sans` (Google Fonts, free, modern geometric feel close to the logo's rounded letterforms) — weights 600/700.
- **Body:** `Inter` — weights 400/500. Excellent readability at small sizes, industry-standard for SaaS/ERP dashboards.
- **Numerals / stats (e.g. "500+ companies"):** `Sora` 700, tabular-nums.

### Type scale (Tailwind `fontSize` custom scale)
| Token | Size / Line-height | Use |
|---|---|---|
| `display` | 56px / 64px | Hero headline only |
| `h1` | 40px / 48px | Page titles |
| `h2` | 32px / 40px | Section titles |
| `h3` | 24px / 32px | Card / sub-section titles |
| `body-lg` | 18px / 28px | Hero sub-copy, intro paragraphs |
| `body` | 16px / 26px | Default paragraph |
| `small` | 14px / 20px | Captions, tags, form labels |

Letter-spacing: headings `-0.02em` (tight, premium feel); body default.

---

## 3. Spacing, Grid & Radius

- **Base unit:** 4px (Tailwind default). Section vertical padding: `py-24` desktop / `py-16` mobile.
- **Container:** max-width `1280px`, centered, `px-6` mobile / `px-8` desktop.
- **Grid:** 12-column on desktop, 4-column on mobile. Card grids typically 3-up (services) or 4-up (industries/logos).
- **Radius:** `rounded-2xl` (16px) for cards and buttons, `rounded-full` for pill badges and avatar/icon circles — this matches the logo's rounded-square + circular figures.
- **Shadow:** soft, never harsh — `shadow-[0_8px_30px_rgba(11,31,77,0.08)]` for cards; increase opacity slightly on hover for lift.

---

## 4. Core Components

### Buttons
- **Primary:** `blue.600` background, white text, `rounded-2xl`, `px-6 py-3`, on hover shifts to the brand gradient + slight scale (`hover:scale-[1.02]`) + shadow lift. This is "Book a Demo."
- **Secondary:** white background, `navy.700` 1.5px border, `navy.700` text; hover fills with `gray.100`. This is "Talk to an Expert."
- **Ghost / text link:** `blue.600` text, underline on hover, used for "Learn more →" inside cards.

### Cards (Service / Industry / Feature)
White background, `gray.300` 1px border OR soft shadow (pick one system, don't combine both everywhere), `rounded-2xl`, icon in a `blue.400`-tinted circle at top, `h3` title, `body` description, optional bullet list, optional "Explore" link at bottom.

### Icons
Use a single consistent icon set (Lucide or Phosphor, both work well in React/Next). Icons should sit inside a filled circle using `blue.400` at 15% opacity with a `blue.600` icon glyph — this echoes the two circular "head" shapes in the logo.

### Navigation Bar
White, sticky, subtle bottom border (`gray.300` at 1px) or a soft shadow on scroll. Logo left, nav links center/right in `navy.700`, active link gets a `blue.600` underline, "Book a Demo" primary button far right.

### Footer
`navy.900` background, white/`gray.300` text, logo (white/light variant), 4-column link layout, bottom bar with copyright + social icons in `blue.400`.

---

## 5. Motion Principles (for the "animated" requirement)

Keep motion purposeful, not decorative — premium B2B sites use restrained motion.

- **Page load:** hero headline + sub-copy fade-up (`opacity 0→1`, `translateY 16px→0`, 500–600ms, ease-out).
- **Scroll reveal:** sections fade-up as they enter viewport (`Framer Motion` `whileInView`, trigger once, `staggerChildren` 80–120ms for card grids).
- **Employee Journey timeline:** animate the connector line drawing left-to-right (or top-to-bottom on mobile) as the user scrolls, with each stage icon popping in sequentially.
- **Hover:** cards lift 4–6px with shadow growth; buttons scale 1.02 with gradient shift; icons rotate/scale slightly (`scale-110`) on hover.
- **Counters:** animate stat numbers counting up once in view (e.g., "500+ Companies").
- Avoid: parallax overkill, auto-playing carousels without pause controls, anything that delays the CTA button becoming clickable.

---

## 6. Do / Don't (from client brief)

**Do:** white/light backgrounds throughout, generous whitespace, the logo's navy+blue+gray palette, rounded geometric shapes, confident but restrained motion.

**Don't:** dark mode or dark section backgrounds (client explicitly rejected this), neon or off-brand colors, dense text blocks without hierarchy, stock-photo-heavy hero (prefer icon/illustration system or a light custom illustration).
