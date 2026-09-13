# 📋 Post-Deployment SEO Master Checklist & Guide
**Project**: The Co HR — Enterprise Next.js Platform  
**Target Domain**: `https://www.thecohr.com`  
**Document Purpose**: Complete step-by-step action plan for website owners, developers, and marketing teams immediately following live production launch.

---

## 📑 Table of Contents
- [Phase 1: Immediate Domain & Routing Verification (Day 1)](#phase-1-immediate-domain--routing-verification-day-1)
- [Phase 2: Search Console & Webmaster Submissions (Day 1 - 2)](#phase-2-search-console--webmaster-submissions-day-1---2)
- [Phase 3: Real-Time Analytics & Tracking Deployment (Day 1 - 2)](#phase-3-real-time-analytics--tracking-deployment-day-1---2)
- [Phase 4: Structured Data & Local SEO Setup (Week 1)](#phase-4-structured-data--local-seo-setup-week-1)
- [Phase 5: WordPress Migration & 301 Redirect Monitoring (Week 1 - 4)](#phase-5-wordpress-migration--301-redirect-monitoring-week-1---4)
- [Phase 6: Social Profiles & Backlink Reclamation (Week 2 - 4)](#phase-6-social-profiles--backlink-reclamation-week-2---4)
- [Phase 7: Monthly Maintenance & Content Scaling](#phase-7-monthly-maintenance--content-scaling)

---

## 📍 Phase 1: Immediate Domain & Routing Verification (Day 1)

### 1.1 SSL & Domain Canonical Redirect Check
Ensure non-www (`https://thecohr.com`) and HTTP (`http://thecohr.com`) requests automatically issue an `HTTP 301` or `HTTP 308` redirect to the primary HTTPS www domain (`https://www.thecohr.com`).

Run these terminal commands to test live headers:
```bash
# Test HTTP to HTTPS redirect
curl -I http://thecohr.com

# Test non-www to www redirect
curl -I https://thecohr.com

# Test trailing slash normalization
curl -I https://www.thecohr.com/services
```

### 1.2 Robots.txt & Sitemap Live URL Check
Inspect live system endpoints in your browser or terminal to confirm zero localhost references:
- **Robots URL**: `https://www.thecohr.com/robots.txt`
- **Sitemap URL**: `https://www.thecohr.com/sitemap.xml`

Verify the output matches:
```text
User-agent: *
Allow: /
Disallow: /api/
Disallow: /wp-admin/
Sitemap: https://www.thecohr.com/sitemap.xml
```

---

## 📍 Phase 2: Search Console & Webmaster Submissions (Day 1 - 2)

### 2.1 Google Search Console (GSC) Setup
1. Log in to [Google Search Console](https://search.google.com/search-console).
2. Click **Add Property** -> Choose **Domain Property** -> Enter `thecohr.com`.
3. Copy the `google-site-verification` string provided by Google.
4. Add a `TXT` record at your domain registrar (GoDaddy, Cloudflare, Namecheap, etc.):
   - **Host / Name**: `@`
   - **Type**: `TXT`
   - **Value**: `google-site-verification=YOUR_UNIQUE_CODE`
5. Click **Verify** in Search Console.

### 2.2 Sitemap XML Submission
1. In Search Console left menu, select **Sitemaps**.
2. Under "Add a new sitemap", enter: `https://www.thecohr.com/sitemap.xml`
3. Click **Submit**. Verify status shows **Success** within a few minutes.

### 2.3 Forced Crawl & URL Inspection (Priority Pages)
Manually trigger immediate indexing for key landing pages:
1. Open GSC **URL Inspection Tool** (`Ctrl + /` or top search bar).
2. Paste each URL sequentially:
   - `https://www.thecohr.com/`
   - `https://www.thecohr.com/services/`
   - `https://www.thecohr.com/about/`
   - `https://www.thecohr.com/contact/`
3. Click **Test Live URL** -> Confirm status is green.
4. Click **Request Indexing** for each route.

### 2.4 Bing Webmaster Tools Setup
1. Open [Bing Webmaster Tools](https://www.bing.com/webmasters).
2. Click **Import from Google Search Console** (synchronizes verified ownership instantly without manual DNS checks).
3. Confirm `https://www.thecohr.com/sitemap.xml` is listed under Sitemaps.

---

## 📍 Phase 3: Real-Time Analytics & Tracking Deployment (Day 1 - 2)

### 3.1 Google Analytics 4 (GA4) Setup
1. Log in to [Google Analytics](https://analytics.google.com/).
2. Create a property named **The Co HR**.
3. Create a **Web Data Stream** for `https://www.thecohr.com`.
4. Copy your **Measurement ID** (e.g., `G-XXXXXXXXXX`).

### 3.2 Add Environment Variable
Add the Measurement ID to your hosting environment settings (Vercel / AWS / Netlify):
```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://www.thecohr.com
```

### 3.3 Verify GA4 Realtime Tracking
1. Open `https://www.thecohr.com/` in your browser.
2. In Google Analytics, navigate to **Reports -> Realtime**.
3. Verify active users and pageviews (`/`, `/services/`) appear instantly on the map.

---

## 📍 Phase 4: Structured Data & Local SEO Setup (Week 1)

### 4.1 Schema.org Validation
Test live structured data using the official testing tools:
- **Tool**: [Google Rich Results Test](https://search.google.com/test/rich-results)
- **URL to test**: `https://www.thecohr.com/`
- **Expected Schemas**:
  - `Corporation` (Company brand details, sameAs links, contact info)
  - `SoftwareApplication` (HR ERP platform specification)
  - `ProfessionalService` (Local business address in Hyderabad, India)

### 4.2 Google Business Profile (GBP) Registration
Create or update your Google Business Profile for local map pack visibility:
1. Go to [Google Business Profile Manager](https://www.google.com/business/).
2. Set Business Name to **The Co HR**.
3. Category: **Human Resource Consultant** / **Software Company**.
4. Set Primary Address: **Hyderabad, Telangana - 500081, India**.
5. Set Phone: **+91 90197 24365**.
6. Set Website URL: `https://www.thecohr.com/`.

---

## 📍 Phase 5: WordPress Migration & 301 Redirect Monitoring (Week 1 - 4)

If replacing an old WordPress website on the same domain:

### 5.1 Monitor 404 Errors in Search Console
1. In Search Console, check **Page Indexing -> Not Found (404)** report every 3 days.
2. If old WordPress URLs (e.g., `/blog/old-post/`, `/services-2022/`) appear as 404 errors:
   - Add a 301 redirect rule in [`next.config.ts`](file:///d:/Projects/thecohr/next.config.ts) under `redirects()`.
   - Example:
     ```typescript
     { source: "/services-2022/", destination: "/services/", permanent: true }
     ```

### 5.2 Test Legacy Redirect Rules
Run terminal commands to confirm legacy URLs redirect permanently (HTTP 301):
```bash
# Test old WordPress about-us URL
curl -I https://www.thecohr.com/about-us/

# Test old media uploads
curl -I https://www.thecohr.com/wp-content/uploads/2023/05/logo.png
```

---

## 📍 Phase 6: Social Profiles & Backlink Reclamation (Week 2 - 4)

### 6.1 Update Social Media Profile Links
Update primary website URLs on all company social media channels to `https://www.thecohr.com/`:
- **LinkedIn**: [The Co HR LinkedIn](https://www.linkedin.com/in/the-co-hr-1a4842428/)
- **X (Twitter)**: [The Co HR X](https://x.com/thecohr)
- **Facebook**: [The Co HR Facebook](https://www.facebook.com/people/TheCo-HR/pfbid0Y9dBJZkUCq9jrpMwukbksVvaF3b7EPD6GvEdWDWLHTAEtzFMZmmxKznuax2S5Gsql/)
- **Instagram**: [The Co HR Instagram](https://www.instagram.com/thecohr_com/)

### 6.2 Citation & Directory Audit
Update company listings on directories (Crunchbase, Clutch, Justdial, Sulekha, Glassdoor) to ensure NAP (Name, Address, Phone) consistency across the web.

---

## 📍 Phase 7: Monthly Maintenance & Content Scaling

### 7.1 PageSpeed & Core Web Vitals Monitoring
Run monthly audits via [Google PageSpeed Insights](https://pagespeed.web.dev/):
- **Target Mobile Score**: `> 75`
- **Target Desktop Score**: `> 90`
- **LCP Target**: `< 2.5s`
- **CLS Target**: `< 0.1`
- **INP Target**: `< 200ms`

### 7.2 Scaling New Content
When adding new routes (e.g. `app/careers/page.tsx` or `app/blog/page.tsx`):
1. Use `constructMetadata(ROUTES_SEO.<key>)` from `@/lib/seo` for automatic title, description, canonical, and OpenGraph setup.
2. The dynamic filesystem scanner in [`app/sitemap.ts`](file:///d:/Projects/thecohr/app/sitemap.ts) will **automatically discover** and include the new page in `/sitemap.xml` without manual editing!

---

## 📞 Support & Contacts
For technical inquiries or search engine configuration assistance:
- **Company**: The Co HR Private Limited
- **Email**: [info@thecohr.com](mailto:info@thecohr.com)
- **Phone**: +91 90197 24365
- **Website**: [https://www.thecohr.com](https://www.thecohr.com)
