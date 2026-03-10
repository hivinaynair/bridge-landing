# UI Components + Tailwind Refactor Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace all custom CSS utility classes in `globals.css` with typed React components using inline Tailwind CSS classes.

**Architecture:** Create `src/components/ui/` directory with one file per component type. Each component encapsulates its own Tailwind styling. Consumer components import from `ui/` instead of relying on globals.css class names.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS v4, TypeScript

---

## File Map

**Create:**
- `src/components/ui/Button.tsx` — renders `<a>` or `<button>`, variant prop
- `src/components/ui/DisplayHeadline.tsx` — polymorphic heading with serif font
- `src/components/ui/SectionLabel.tsx` — small uppercase label with `/` prefix
- `src/components/ui/TrustBadge.tsx` — bordered inline badge
- `src/components/ui/WaBubble.tsx` — WhatsApp-style chat bubble, in/out directions
- `src/components/ui/MockupCard.tsx` — white card with border + shadow
- `src/components/ui/GridBg.tsx` — wrapper with grid background pattern (inline style)
- `src/components/ui/DotPattern.tsx` — wrapper with dot background pattern (inline style)
- `src/components/ui/index.ts` — barrel export

**Modify:**
- `src/components/Hero.tsx` — use Button, DisplayHeadline, TrustBadge
- `src/components/HeroVideo.tsx` — use Button, DisplayHeadline, TrustBadge
- `src/components/Navbar.tsx` — use Button; replace `font-dm-sans` → `font-sans`
- `src/components/ProductSection.tsx` — use Button, SectionLabel, DisplayHeadline
- `src/components/FeaturesSection.tsx` — use SectionLabel, DisplayHeadline
- `src/components/CapabilitiesSection.tsx` — use SectionLabel, DisplayHeadline
- `src/components/CtaSection.tsx` — use Button, DotPattern
- `src/components/Footer.tsx` — replace `font-dm-sans` → `font-sans`
- `src/components/FeatureVisuals.tsx` — use MockupCard, WaBubble
- `src/app/globals.css` — delete all custom utility class blocks

---

## Chunk 1: Create UI Primitive Components

### Task 1: Button component

**Files:**
- Create: `src/components/ui/Button.tsx`

The Button renders an `<a>` when `href` is provided, otherwise a `<button>`. Variants map 1:1 to the old CSS classes.

- [ ] **Step 1: Create `src/components/ui/Button.tsx`**

```tsx
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "outline" | "lavender" | "outline-white";

const BASE =
  "inline-flex items-center text-[11px] font-semibold uppercase tracking-[0.1em] py-2.5 px-[22px] no-underline whitespace-nowrap transition-all duration-150 ease-linear cursor-pointer";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-card-foreground text-white hover:opacity-90",
  outline:
    "bg-transparent text-foreground border border-border hover:bg-secondary",
  lavender:
    "bg-[oklch(0.91_0.055_95)] text-[oklch(0.28_0.045_39)] hover:opacity-90",
  "outline-white":
    "bg-transparent text-white border border-white/35 hover:bg-white/10",
};

type AnchorProps = { href: string } & AnchorHTMLAttributes<HTMLAnchorElement>;
type ButtonProps = { href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>;

type Props = { variant?: Variant; className?: string } & (AnchorProps | ButtonProps);

export function Button({ variant = "primary", className = "", ...rest }: Props) {
  const cls = `${BASE} ${VARIANTS[variant]}${className ? ` ${className}` : ""}`;
  if ("href" in rest && rest.href !== undefined) {
    const { href, ...anchorRest } = rest as AnchorProps;
    return <a href={href} className={cls} {...anchorRest} />;
  }
  const { ...btnRest } = rest as ButtonProps;
  return <button type="button" className={cls} {...btnRest} />;
}
```

- [ ] **Step 2: Verify TypeScript — run build check**

```bash
cd /Users/vinay/code/bridge-landing && npx tsc --noEmit --project tsconfig.json 2>&1 | head -30
```

Expected: no errors on the new file (other files may still have errors until migration is complete — that's OK).

---

### Task 2: DisplayHeadline component

**Files:**
- Create: `src/components/ui/DisplayHeadline.tsx`

- [ ] **Step 1: Create `src/components/ui/DisplayHeadline.tsx`**

```tsx
import type { HTMLAttributes } from "react";

type As = "h1" | "h2" | "h3" | "h4" | "p";

type Props = {
  as?: As;
  className?: string;
} & HTMLAttributes<HTMLHeadingElement>;

export function DisplayHeadline({ as: Tag = "h2", className = "", children, ...rest }: Props) {
  return (
    <Tag
      className={`font-serif font-normal leading-[1.05] tracking-[-0.025em] text-card-foreground${className ? ` ${className}` : ""}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
```

---

### Task 3: SectionLabel component

**Files:**
- Create: `src/components/ui/SectionLabel.tsx`

The old `.section-label::before { content: "/" }` pseudo-element becomes an explicit JSX `<span>`.

- [ ] **Step 1: Create `src/components/ui/SectionLabel.tsx`**

```tsx
import type { HTMLAttributes } from "react";

type Props = { className?: string } & HTMLAttributes<HTMLDivElement>;

export function SectionLabel({ children, className = "", ...rest }: Props) {
  return (
    <div
      className={`flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-muted-foreground${className ? ` ${className}` : ""}`}
      {...rest}
    >
      <span className="opacity-45">/</span>
      {children}
    </div>
  );
}
```

---

### Task 4: TrustBadge component

**Files:**
- Create: `src/components/ui/TrustBadge.tsx`

- [ ] **Step 1: Create `src/components/ui/TrustBadge.tsx`**

```tsx
import type { HTMLAttributes } from "react";

type Props = { className?: string } & HTMLAttributes<HTMLSpanElement>;

export function TrustBadge({ children, className = "", ...rest }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground border border-border py-1 px-3 bg-background${className ? ` ${className}` : ""}`}
      {...rest}
    >
      {children}
    </span>
  );
}
```

---

### Task 5: WaBubble component

**Files:**
- Create: `src/components/ui/WaBubble.tsx`

- [ ] **Step 1: Create `src/components/ui/WaBubble.tsx`**

```tsx
import type { HTMLAttributes } from "react";

type Props = {
  direction: "in" | "out";
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

const STYLES = {
  in: "bg-white rounded-xl rounded-bl-[2px] py-2 px-3 text-[11px] text-[#111] max-w-[85%] shadow-[0_1px_1px_rgba(0,0,0,0.1)]",
  out: "bg-[#dcf8c6] rounded-xl rounded-br-[2px] py-2 px-3 text-[11px] text-[#111] max-w-[85%] shadow-[0_1px_1px_rgba(0,0,0,0.1)] self-end",
};

export function WaBubble({ direction, children, className = "", ...rest }: Props) {
  return (
    <div className={`${STYLES[direction]}${className ? ` ${className}` : ""}`} {...rest}>
      {children}
    </div>
  );
}
```

---

### Task 6: MockupCard component

**Files:**
- Create: `src/components/ui/MockupCard.tsx`

- [ ] **Step 1: Create `src/components/ui/MockupCard.tsx`**

```tsx
import type { HTMLAttributes } from "react";

type Props = { className?: string } & HTMLAttributes<HTMLDivElement>;

export function MockupCard({ children, className = "", ...rest }: Props) {
  return (
    <div
      className={`bg-white border border-border shadow-[0_2px_12px_0_oklch(0_0_0/0.06)]${className ? ` ${className}` : ""}`}
      {...rest}
    >
      {children}
    </div>
  );
}
```

---

### Task 7: Background pattern components

**Files:**
- Create: `src/components/ui/GridBg.tsx`
- Create: `src/components/ui/DotPattern.tsx`

These use `background-image` gradients that can't be expressed in stock Tailwind v4, so they use inline styles.

- [ ] **Step 1: Create `src/components/ui/GridBg.tsx`**

```tsx
import type { HTMLAttributes } from "react";

type Props = { className?: string } & HTMLAttributes<HTMLDivElement>;

const GRID_STYLE = {
  backgroundImage: [
    "linear-gradient(oklch(0.88 0.007 97 / 0.6) 1px, transparent 1px)",
    "linear-gradient(90deg, oklch(0.88 0.007 97 / 0.6) 1px, transparent 1px)",
  ].join(", "),
  backgroundSize: "44px 44px",
} as const;

export function GridBg({ children, className = "", style, ...rest }: Props) {
  return (
    <div className={className} style={{ ...GRID_STYLE, ...style }} {...rest}>
      {children}
    </div>
  );
}
```

- [ ] **Step 2: Create `src/components/ui/DotPattern.tsx`**

```tsx
import type { HTMLAttributes } from "react";

type Props = { className?: string } & HTMLAttributes<HTMLDivElement>;

const DOT_STYLE = {
  backgroundImage:
    "radial-gradient(circle, rgba(255, 255, 255, 0.06) 1.5px, transparent 1.5px)",
  backgroundSize: "22px 22px",
} as const;

export function DotPattern({ children, className = "", style, ...rest }: Props) {
  return (
    <div className={className} style={{ ...DOT_STYLE, ...style }} {...rest}>
      {children}
    </div>
  );
}
```

---

### Task 8: Barrel export

**Files:**
- Create: `src/components/ui/index.ts`

- [ ] **Step 1: Create `src/components/ui/index.ts`**

```ts
export { Button } from "./Button";
export { DisplayHeadline } from "./DisplayHeadline";
export { DotPattern } from "./DotPattern";
export { GridBg } from "./GridBg";
export { MockupCard } from "./MockupCard";
export { SectionLabel } from "./SectionLabel";
export { TrustBadge } from "./TrustBadge";
export { WaBubble } from "./WaBubble";
```

- [ ] **Step 2: Run dev server to confirm no import errors**

```bash
cd /Users/vinay/code/bridge-landing && bun run build 2>&1 | tail -20
```

Expected: build succeeds (consumer components still use old class names at this point — that's OK, they still compile).

- [ ] **Step 3: Commit**

```bash
git add src/components/ui/
git commit -m "feat: add ui primitive components with tailwind"
```

---

## Chunk 2: Update Consumer Components

### Task 9: Update Hero.tsx

**Files:**
- Modify: `src/components/Hero.tsx`

Replaces: `trust-badge` → `<TrustBadge>`, `display-headline` → `<DisplayHeadline>`, `btn-primary` → `<Button variant="primary">`, `btn-outline` → `<Button variant="outline">`

- [ ] **Step 1: Replace contents of `src/components/Hero.tsx`**

```tsx
import { Button } from "@/components/ui/Button";
import { DisplayHeadline } from "@/components/ui/DisplayHeadline";
import { TrustBadge } from "@/components/ui/TrustBadge";

export const CrossMark = ({
  position,
}: {
  position: "tl" | "tr" | "bl" | "br";
}) => {
  const paths = {
    tl: "M12 12V24M12 12H24",
    tr: "M12 12V24M12 12H0",
    bl: "M12 12V0M12 12H24",
    br: "M12 12V0M12 12H0",
  };
  const cls = {
    tl: "absolute z-10 pointer-events-none top-0 left-0 -mt-3 -ml-3 text-primary",
    tr: "absolute z-10 pointer-events-none top-0 right-0 -mt-3 -mr-3 text-primary",
    bl: "absolute z-10 pointer-events-none bottom-0 left-0 -mb-3 -ml-3 text-primary",
    br: "absolute z-10 pointer-events-none bottom-0 right-0 -mb-3 -mr-3 text-primary",
  };
  return (
    <div className={cls[position]}>
      <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
        <path d={paths[position]} stroke="#74675A" strokeWidth="1" fill="none" />
      </svg>
    </div>
  );
};

export function Hero() {
  return (
    <section className="relative w-full">
      <div className="absolute h-px bg-foreground/15 top-0 left-[calc(-50vw+50%)] right-[calc(-50vw+50%)]" />
      <div className="relative w-full overflow-x-clip">
        <div>
          <div className="absolute top-0 left-0 bottom-0 w-px bg-foreground/15 pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-px bg-foreground/15 pointer-events-none" />

          <div className="relative grid grid-cols-2 gap-16 items-center py-12 px-12">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-px bg-border pointer-events-none" />

            <CrossMark position="tl" />
            <CrossMark position="tr" />
            <CrossMark position="bl" />
            <CrossMark position="br" />

            <div>
              <div className="mb-8">
                <TrustBadge>
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary" />
                  Trusted by 50+ driving schools across India
                </TrustBadge>
              </div>

              <DisplayHeadline as="h1" className="m-0 text-[clamp(40px,5vw,60px)] mb-6">
                Modern software for Indian driving schools.
              </DisplayHeadline>

              <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-md">
                Replace your legacy software. Admit students in 5 minutes with
                Aadhaar KYC. Recover leads on WhatsApp. Fill Sarathi with one
                click.
              </p>

              <div className="flex gap-2">
                <Button href="/" variant="primary">GET STARTED →</Button>
                <Button href="/" variant="outline">BOOK A DEMO</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

### Task 10: Update HeroVideo.tsx

**Files:**
- Modify: `src/components/HeroVideo.tsx`

Same replacements as Hero.

- [ ] **Step 1: Replace contents of `src/components/HeroVideo.tsx`**

```tsx
import { Button } from "@/components/ui/Button";
import { DisplayHeadline } from "@/components/ui/DisplayHeadline";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { CrossMark } from "./Hero";

export function HeroVideo() {
  return (
    <section className="relative w-full">
      <div className="absolute h-px bg-foreground/15 top-0 left-[calc(-50vw+50%)] right-[calc(-50vw+50%)]" />
      <div className="relative w-full overflow-x-clip">
        <div>
          <div className="absolute top-0 left-0 bottom-0 w-px bg-foreground/15 pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-px bg-foreground/15 pointer-events-none" />

          <div className="relative grid grid-cols-2 gap-16 items-center py-12 px-12">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-px bg-border pointer-events-none" />

            <CrossMark position="tl" />
            <CrossMark position="tr" />
            <CrossMark position="bl" />
            <CrossMark position="br" />

            <div>
              <div className="mb-8">
                <TrustBadge>
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary" />
                  Trusted by 50+ driving schools across India
                </TrustBadge>
              </div>

              <DisplayHeadline as="h1" className="m-0 text-[clamp(40px,5vw,60px)] mb-6">
                Modern software for Indian driving schools.
              </DisplayHeadline>

              <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-md">
                Replace your legacy software. Admit students in 5 minutes with
                Aadhaar KYC. Recover leads on WhatsApp. Fill Sarathi with one
                click.
              </p>

              <div className="flex gap-2">
                <Button href="/" variant="primary">GET STARTED →</Button>
                <Button href="/" variant="outline">BOOK A DEMO</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-px bg-foreground/15 bottom-0 left-[calc(-50vw+50%)] right-[calc(-50vw+50%)]" />
    </section>
  );
}
```

---

### Task 11: Update Navbar.tsx

**Files:**
- Modify: `src/components/Navbar.tsx`

Replace `btn-primary` → `<Button>`. Replace `font-dm-sans` → `font-sans` (Tailwind `font-sans` already resolves to DM Sans via `@theme inline`).

- [ ] **Step 1: Replace contents of `src/components/Navbar.tsx`**

```tsx
"use client";

import { Home } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-background">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <Home size={20} className="text-primary" strokeWidth={1.5} />
          <span className="font-sans text-sm font-semibold text-card-foreground tracking-tighter">
            Bridge
          </span>
        </div>

        <div className="flex items-center gap-10">
          <div className="flex items-center gap-10">
            <Link
              href="#product"
              className="text-xs font-medium text-muted-foreground uppercase tracking-widest hover:text-foreground"
            >
              PRODUCT
            </Link>
            <Link
              href="#features"
              className="text-xs font-medium text-muted-foreground uppercase tracking-widest hover:text-foreground"
            >
              FEATURES
            </Link>
            <Link
              href="#pricing"
              className="text-xs font-medium text-muted-foreground uppercase tracking-widest hover:text-foreground"
            >
              PRICING
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Button href="/login" variant="primary">LOG IN</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
```

---

### Task 12: Update ProductSection.tsx

**Files:**
- Modify: `src/components/ProductSection.tsx`

- [ ] **Step 1: Replace contents of `src/components/ProductSection.tsx`**

```tsx
import { Button } from "@/components/ui/Button";
import { DisplayHeadline } from "@/components/ui/DisplayHeadline";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ProductSection() {
  return (
    <section className="border-b border-t border-border bg-background">
      <div className="mx-auto max-w-[1440px] px-6 py-20 text-center">
        <SectionLabel className="justify-center mb-6">PRODUCT</SectionLabel>
        <DisplayHeadline className="m-0 mb-5 text-[clamp(32px,4vw,52px)] max-w-lg mx-auto">
          Bridge. So you spend less time on paperwork.
        </DisplayHeadline>
        <p className="text-muted-foreground text-base max-w-md mx-auto mb-8 leading-relaxed">
          Built for school owners and branch managers who want to grow revenue,
          not chase spreadsheets and government portals.
        </p>
        <Button href="/" variant="primary" className="text-xs">
          START MANAGING YOUR SCHOOL NOW →
        </Button>
      </div>
    </section>
  );
}
```

---

### Task 13: Update FeaturesSection.tsx

**Files:**
- Modify: `src/components/FeaturesSection.tsx`

Replace `section-label` and `display-headline` usages.

- [ ] **Step 1: Edit `src/components/FeaturesSection.tsx` — update imports**

At the top of the file, add:
```tsx
import { DisplayHeadline } from "@/components/ui/DisplayHeadline";
import { SectionLabel } from "@/components/ui/SectionLabel";
```

- [ ] **Step 2: Replace the header JSX in FeaturesSection.tsx**

Find this block:
```tsx
        <div className="py-16 pb-12">
          <div className="section-label mb-4">FEATURES</div>
          <div className="grid grid-cols-2 gap-12 items-start">
            <h2 className="display-headline m-0 text-[clamp(28px,3.5vw,44px)]">
              Everything you need to run a driving school.
            </h2>
```

Replace with:
```tsx
        <div className="py-16 pb-12">
          <SectionLabel className="mb-4">FEATURES</SectionLabel>
          <div className="grid grid-cols-2 gap-12 items-start">
            <DisplayHeadline className="m-0 text-[clamp(28px,3.5vw,44px)]">
              Everything you need to run a driving school.
            </DisplayHeadline>
```

---

### Task 14: Update CapabilitiesSection.tsx

**Files:**
- Modify: `src/components/CapabilitiesSection.tsx`

- [ ] **Step 1: Replace contents of `src/components/CapabilitiesSection.tsx`**

```tsx
import {
  BarChart3,
  Building,
  Car,
  type LucideIcon,
  RefreshCw,
  Smartphone,
  Zap,
} from "lucide-react";
import { DisplayHeadline } from "@/components/ui/DisplayHeadline";
import { SectionLabel } from "@/components/ui/SectionLabel";

interface Capability {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const capabilities: Capability[] = [
  {
    icon: Zap,
    title: "Instant Onboarding",
    desc: "Students go from enquiry to enrolled in under 5 minutes. Aadhaar KYC, fee collection, schedule booking — all in one flow.",
  },
  {
    icon: BarChart3,
    title: "Revenue Intelligence",
    desc: "See conversion rates, average revenue per student, and lead recovery stats at a glance. No spreadsheets.",
  },
  {
    icon: RefreshCw,
    title: "Automated Follow-ups",
    desc: "WhatsApp sequences, DL upgrade campaigns, referral programs — all running on autopilot while you focus on teaching.",
  },
  {
    icon: Building,
    title: "Government Portal Integration",
    desc: "Sarathi auto-fill via Chrome extension. No duplicate data entry. Fewer errors. RTO filings done faster.",
  },
  {
    icon: Car,
    title: "Fleet & Instructor Management",
    desc: "Assign vehicles and instructors per session. Track availability. Prevent double-bookings automatically.",
  },
  {
    icon: Smartphone,
    title: "Multi-Branch Support",
    desc: "Own multiple branches? Manage them all from one dashboard. Student transfers, shared fleet, consolidated reporting.",
  },
];

export function CapabilitiesSection() {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1440px] px-6 py-20">
        <div className="grid grid-cols-2 gap-12 mb-14 items-start">
          <div>
            <SectionLabel className="mb-4">CAPABILITIES</SectionLabel>
            <DisplayHeadline className="m-0 text-[clamp(28px,3.5vw,44px)]">
              All-in-one platform for driving schools.
            </DisplayHeadline>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed pt-12 max-w-sm">
            Bridge covers the entire lifecycle of running a driving school —
            from first lead to DL issuance — out of the box.
          </p>
        </div>

        <div className="grid grid-cols-3 border border-border">
          {capabilities.map((cap, i) => (
            <div
              key={cap.title}
              className="p-7 border-border"
              style={{
                borderRight: i % 3 !== 2 ? "1px solid var(--border)" : undefined,
                borderBottom: i < 3 ? "1px solid var(--border)" : undefined,
              }}
            >
              <cap.icon size={28} className="mb-3 text-foreground" />
              <div className="text-base font-semibold text-card-foreground mb-2">
                {cap.title}
              </div>
              <div className="text-sm text-muted-foreground leading-relaxed">
                {cap.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

### Task 15: Update CtaSection.tsx

**Files:**
- Modify: `src/components/CtaSection.tsx`

Replace `dot-pattern` → `<DotPattern>`, `display-headline` → `<DisplayHeadline>`, button classes → `<Button>`.

- [ ] **Step 1: Replace contents of `src/components/CtaSection.tsx`**

```tsx
import { Button } from "@/components/ui/Button";
import { DisplayHeadline } from "@/components/ui/DisplayHeadline";
import { DotPattern } from "@/components/ui/DotPattern";

export function CtaSection() {
  return (
    <section className="bg-background px-6 pb-20">
      <div className="mx-auto max-w-[1440px]">
        <DotPattern
          className="py-20 px-12 text-center relative"
          style={{ background: "oklch(0.22 0.045 39)" }}
        >
          <div className="text-[11px] font-medium uppercase tracking-widest text-white/40 mb-6 flex items-center justify-center gap-2">
            <span className="opacity-40">/</span>
            LET'S TALK
          </div>
          <DisplayHeadline
            as="h2"
            className="text-[clamp(32px,4vw,52px)] text-white m-0 mb-4 max-w-2xl mx-auto"
          >
            Stop losing students to bad software.
          </DisplayHeadline>
          <p className="text-white/55 text-sm max-w-md mx-auto mb-9 leading-relaxed">
            See Bridge in action. We'll show you exactly how much revenue you're
            leaving on the table with your current setup.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Button href="/" variant="lavender">GET STARTED →</Button>
            <Button href="/" variant="outline-white">BOOK A DEMO</Button>
          </div>
        </DotPattern>
      </div>
    </section>
  );
}
```

---

### Task 16: Update Footer.tsx

**Files:**
- Modify: `src/components/Footer.tsx`

Replace `font-dm-sans` → `font-sans`.

- [ ] **Step 1: Edit `src/components/Footer.tsx` — replace font class**

Find:
```tsx
          <div className="flex items-center gap-2 mb-3">
            <Home size={18} className="text-primary" strokeWidth={1.5} />
            <span className="font-dm-sans font-semibold text-sm text-card-foreground">
```

Replace with:
```tsx
          <div className="flex items-center gap-2 mb-3">
            <Home size={18} className="text-primary" strokeWidth={1.5} />
            <span className="font-sans font-semibold text-sm text-card-foreground">
```

---

### Task 17: Update FeatureVisuals.tsx

**Files:**
- Modify: `src/components/FeatureVisuals.tsx`

Replace `mockup-card` → `<MockupCard>`, `wa-bubble-in` → `<WaBubble direction="in">`, `wa-bubble-out` → `<WaBubble direction="out">`.

- [ ] **Step 1: Add imports to `src/components/FeatureVisuals.tsx`**

Add at the top of the file:
```tsx
import { MockupCard } from "@/components/ui/MockupCard";
import { WaBubble } from "@/components/ui/WaBubble";
```

- [ ] **Step 2: Replace `mockup-card` in AdmissionsVisual**

Find:
```tsx
      <div className="mockup-card p-4">
```
Replace with:
```tsx
      <MockupCard className="p-4">
```
And the closing `</div>` → `</MockupCard>`.

- [ ] **Step 3: Replace `mockup-card` in LeadsVisual**

Find:
```tsx
      <div className="mockup-card rounded-xl overflow-hidden">
```
Replace with:
```tsx
      <MockupCard className="rounded-xl overflow-hidden">
```
And the closing `</div>` → `</MockupCard>`.

- [ ] **Step 4: Replace `wa-bubble-in` in LeadsVisual**

Find:
```tsx
          <div className="wa-bubble-in max-w-xs">
```
Replace with:
```tsx
          <WaBubble direction="in" className="max-w-xs">
```
And the closing `</div>` → `</WaBubble>`.

- [ ] **Step 5: Replace `wa-bubble-out` usages in LeadsVisual**

Find the first:
```tsx
            <div className="wa-bubble-out max-w-xs text-xs">
```
Replace with:
```tsx
            <WaBubble direction="out" className="max-w-xs text-xs">
```
And the closing `</div>` → `</WaBubble>`.

Find the second:
```tsx
            <div className="wa-bubble-out max-w-xs text-xs bg-green-100">
```
Replace with:
```tsx
            <WaBubble direction="out" className="max-w-xs text-xs bg-green-100">
```
And the closing `</div>` → `</WaBubble>`.

- [ ] **Step 6: Replace `mockup-card` in UpsellsVisual**

Find:
```tsx
      <div className="mockup-card p-6">
```
Replace with:
```tsx
      <MockupCard className="p-6">
```
And the closing `</div>` → `</MockupCard>`.

- [ ] **Step 7: Replace `mockup-card` in SchedulingVisual**

Find:
```tsx
      <div className="mockup-card p-4 overflow-x-auto">
```
Replace with:
```tsx
      <MockupCard className="p-4 overflow-x-auto">
```
And the closing `</div>` → `</MockupCard>`.

- [ ] **Step 8: Verify build**

```bash
cd /Users/vinay/code/bridge-landing && bun run build 2>&1 | tail -30
```

Expected: build succeeds with no errors.

- [ ] **Step 9: Commit**

```bash
git add src/components/
git commit -m "feat: migrate consumer components to ui primitives"
```

---

## Chunk 3: Clean Up globals.css

### Task 18: Remove custom utility class blocks from globals.css

**Files:**
- Modify: `src/app/globals.css`

Delete these sections (keep everything else):
- `/* ── Custom utility classes ─── */` block and `.text-2xs`, `.display-headline`, `.section-label`, `.trust-badge`
- `/* ── Buttons ─── */` block and all `.btn-*` rules
- `/* ── Cards & UI elements ─── */` block and `.mockup-card`, `.wa-bubble-in`, `.wa-bubble-out`
- `/* ── Structural ─── */` block and `.nav-border`, `.grid-bg`, `.dot-pattern`, `.font-dm-serif`, `.font-dm-sans`

Keep `.text-2xs` — it's a size not expressible cleanly in Tailwind and is still used directly in components.

- [ ] **Step 1: Delete all custom utility class blocks from globals.css**

The file should end after the `@layer base { ... }` closing brace (line ~227). Remove everything after that block.

The resulting file ends at:
```css
@layer base {
  * {
    @apply border-border outline-ring/50;
  }

  body {
    @apply bg-background text-foreground;
    font-family: var(--font-dm-sans), ui-sans-serif, system-ui, sans-serif;
    letter-spacing: var(--tracking-normal);
  }
}

/* ── Custom utility classes ─────────────────────────────────────────────── */

.text-2xs {
  font-size: 0.625rem;
  line-height: 1rem;
}
```

Everything after `.text-2xs { ... }` through the end of the file gets deleted.

- [ ] **Step 2: Verify no deleted class names remain in any TSX file**

```bash
grep -r "btn-primary\|btn-outline\|btn-lavender\|display-headline\|section-label\|trust-badge\|mockup-card\|wa-bubble\|nav-border\|grid-bg\|dot-pattern\|font-dm-serif\|font-dm-sans" /Users/vinay/code/bridge-landing/src/components/ /Users/vinay/code/bridge-landing/src/app/page.tsx
```

Expected: no output (no matches found).

- [ ] **Step 3: Run build to confirm everything still works**

```bash
cd /Users/vinay/code/bridge-landing && bun run build 2>&1 | tail -30
```

Expected: build succeeds with no errors.

- [ ] **Step 4: Start dev server and visually verify the page**

```bash
cd /Users/vinay/code/bridge-landing && bun run dev
```

Open `http://localhost:3000` and check:
- Navbar: logo, links, LOG IN button visible
- Hero: serif headline, trust badge, two buttons
- ProductSection: section label, headline, button
- FeaturesSection: section label, headline, accordion
- CapabilitiesSection: section label, headline, grid
- CtaSection: dark green section with dot pattern, serif headline, two buttons
- Footer: correct font on "Bridge" logo text

- [ ] **Step 5: Commit**

```bash
git add src/app/globals.css
git commit -m "chore: remove custom css classes, replaced by ui components"
```
