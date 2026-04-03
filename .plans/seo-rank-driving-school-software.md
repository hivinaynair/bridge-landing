# SEO: Rank for "driving school software"

**Issue:** #1
**Goal:** Make bridgedrive.in rank on page 1 for "driving school software"

---

## Phase 1: Tracer Bullet — SSR + Metadata + Sitemap

Proves the architecture: homepage is server-rendered, Google can crawl it, metadata is rich.

### 1.1 Remove `"use client"` from page.tsx
- Remove the directive from `src/app/page.tsx`
- Already server-safe: Hero, SecuritySection, CtaSection, CapabilitiesHeading, CapabilitiesCards, Footer
- Already have `"use client"`: Navbar, FeaturesSection, PricingSection, ProductSection, ContactModal
- **Verify:** `npm run build` passes — no server/client boundary violations

### 1.2 Update H1 copy
- In `src/components/hero.tsx`, change the DisplayHeadline content:
  - From: "Everything Your Driving School Needs. In One App."
  - To: "The Only Software Your Driving School Needs"

### 1.3 Enrich metadata in layout.tsx
- Title: "Bridge — Driving School Software for Indian Motor Training Schools"
- Description: "Driving school management software built for India. Aadhaar KYC admissions, WhatsApp lead recovery, Sarathi auto-fill, fleet tracking. Start free."
- Canonical: `https://bridgedrive.in`
- Open Graph: title, description, url, siteName, type "website"
- Twitter: card "summary_large_image", title, description

### 1.4 Add robots.ts
- `src/app/robots.ts` — allow all, point sitemap to `https://bridgedrive.in/sitemap.xml`

### 1.5 Add sitemap.ts (static pages only for now)
- `src/app/sitemap.ts` — homepage + /privacy-policy + /terms-of-service + /refund-policy
- Blog entries added in Phase 4

### Tracer bullet checkpoint:
- `npm run build` passes
- View source of built homepage shows SSR HTML with keyword-rich content
- `/robots.txt` and `/sitemap.xml` resolve correctly

---

## Phase 2: Shared Constants + JSON-LD

### 2.1 Extract pricing to shared constants
- Create `src/content/pricing.ts`
- Move starterFeatures, proFeatures, enterpriseFeatures, prices from PricingSection
- Export a `plans` object with name, monthly, annual, description, features per tier
- Refactor PricingSection to import from `src/content/pricing.ts`
- **Verify:** pricing section renders identically

### 2.2 Create FAQ constants
- Create `src/content/faq.ts`
- Export array of `{ question, answer }` objects for:
  1. How does Aadhaar KYC work in Bridge?
  2. Does Bridge work with the Sarathi portal?
  3. How does WhatsApp automation work? Do I need a WhatsApp Business API?
  4. How is Bridge different from other driving school software?
  5. How much does Bridge cost?
  6. Can I manage multiple branches from one account?
  7. Is my data secure?

### 2.3 Add JSON-LD to homepage
- Create `src/components/json-ld.tsx` (server component)
- Render `<script type="application/ld+json">` with:
  - `Organization`: name "Bridge", url, description, logo
  - `SoftwareApplication`: name, category "BusinessApplication", OS "Web", AggregateOffer computed from pricing.ts (lowPrice = min annual, highPrice = max monthly, priceCurrency INR)
  - `FAQPage`: mapped from faq.ts
- Add `<JsonLd />` to page.tsx

### Phase 2 checkpoint:
- Build passes
- JSON-LD visible in page source
- Google Rich Results Test validates structured data (manual check)
- PricingSection still renders correctly from shared constants

---

## Phase 3: FAQ Section

### 3.1 Build FAQ accordion component
- Create `src/components/faq-section.tsx`
- Server component with a client island for the accordion toggle
- Import from `src/content/faq.ts`
- Each Q&A rendered as visible text (matches JSON-LD exactly)
- Accordion: click question to expand/collapse answer
- Style consistent with existing sections (border-y, max-w-8xl, BorderEdges, DisplayHeadline for heading, SectionLabel)

### 3.2 Add to homepage
- In page.tsx, add `<FaqSection />` between PricingSection and CtaSection
- Add "FAQ" to navbar links? — No, keep nav minimal. Anchor `#faq` for direct linking.

### Phase 3 checkpoint:
- FAQ renders on homepage
- All 7 Q&As visible
- Accordion expand/collapse works
- Content matches JSON-LD FAQPage exactly (same strings from faq.ts)

---

## Phase 4: Blog System

### 4.1 Configure @next/mdx
- Install `@next/mdx` and `@mdx-js/loader`
- Update `next.config.ts` to use `createMDX` wrapper
- Add `mdx-components.tsx` at project root (required by @next/mdx)
- Map MDX elements to existing UI components (h1 -> DisplayHeadline, etc.)

### 4.2 Create blog registry
- Create `src/content/blog-posts.ts`
- Export array of `{ slug, title, description, date, tags }` for each post
- 3 seed entries

### 4.3 Create blog index page
- `src/app/blog/page.tsx` — server component
- Import blog-posts.ts, render cards sorted by date desc
- Each card: title, description, date, link to `/blog/[slug]`
- Style consistent with landing page (border grid, typography)
- Export metadata for SEO

### 4.4 Create blog layout
- `src/app/blog/layout.tsx` — shared layout for blog pages
- Navbar + Footer, max-width prose container
- BlogPosting JSON-LD per post (generated from registry metadata)

### 4.5 Write seed post 1: "Best Driving School Software in India (2026)"
- `src/app/blog/best-driving-school-software-india/page.mdx`
- Export metadata (title, description)
- Honest comparison: Bridge, HashStudioz, Sanyog Soft, DrivingSchoolSoftware.com
- Highlight Bridge's India-specific edge: Aadhaar, Sarathi, WhatsApp, multi-branch

### 4.6 Write seed post 2: "How to Manage a Motor Training School in 2026"
- `src/app/blog/how-to-manage-motor-training-school/page.mdx`
- Educational guide: challenges, solutions, where Bridge fits
- Target: "motor training school management"

### 4.7 Write seed post 3: "Why Indian Driving Schools Need Digital Admissions"
- `src/app/blog/why-driving-schools-need-digital-admissions/page.mdx`
- Problem-aware: manual paperwork, Aadhaar/Sarathi pain, time waste
- Target: "driving school admission software"

### 4.8 Update sitemap.ts
- Import blog-posts.ts, add entries for /blog and each /blog/[slug]

### 4.9 Update navbar
- Add "Blog" link to NAV_LINKS in navbar.tsx pointing to `/blog`

### Phase 4 checkpoint:
- `/blog` renders index with 3 post cards
- Each post renders with proper typography and metadata
- Sitemap includes all blog URLs
- Blog link appears in navbar

---

## Phase 5: Hardening

### 5.1 Blog post metadata validation
- Each MDX post exports metadata with title + description
- BlogPosting JSON-LD rendered per post with datePublished, author, description

### 5.2 404 handling
- `/blog/nonexistent` returns 404 (Next.js handles this via file-based routing)

### 5.3 Internal linking
- Blog posts link back to homepage sections where relevant
- Homepage footer adds Blog link

### 5.4 Final build + lighthouse
- `npm run build` — no errors
- Check all routes render server-side
- Validate JSON-LD with Google Rich Results Test (manual)
