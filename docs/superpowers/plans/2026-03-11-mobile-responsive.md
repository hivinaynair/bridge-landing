# Mobile Responsive Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make all landing page sections mobile-responsive down to 375px with a slide-out mobile nav menu.

**Architecture:** Adjust existing Tailwind classes across 9 component files. One new component: `MobileMenu` inside navbar.tsx. No new dependencies — uses existing `motion/react` for sheet animation and `lucide-react` for icons.

**Tech Stack:** Next.js, Tailwind CSS v4, Motion, Lucide React

**Spec:** `docs/superpowers/specs/2026-03-11-mobile-responsive-design.md`

---

## Chunk 1: Navbar Mobile Menu

### Task 1: Add mobile menu to Navbar

**Files:**
- Modify: `src/components/navbar.tsx`

- [ ] **Step 1: Add MobileMenu component inside navbar.tsx**

Add imports and a `MobileMenu` sub-component with slide-out sheet using `motion`:

```tsx
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { Menu, X } from "lucide-react";
```

Add `MobileMenu` component above `Navbar`:

```tsx
function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm"
            onClick={onClose}
          />
          {/* Sheet */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 z-50 h-dvh w-72 border-l bg-background p-8 pt-24"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute top-6 right-6 text-muted-foreground hover:text-foreground"
            >
              <X size={24} />
            </button>

            <nav className="flex flex-col gap-6">
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={onClose}
                  className="text-sm font-bold uppercase tracking-widest hover:text-foreground"
                >
                  {label}
                </Link>
              ))}
              <Button
                href="https://app.bridgedrive.in/sign-in"
                variant="primary"
                className="mt-4 justify-center"
              >
                LOG IN
              </Button>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
```

- [ ] **Step 2: Update Navbar to toggle mobile menu**

Add `menuOpen` state and hamburger button. Hide desktop nav on mobile, show hamburger:

```tsx
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (current) => {
    if (current > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <div className="fixed top-0 z-50 w-full px-3 transition-all duration-300 lg:px-6">
      <div
        className={`transition-all duration-300 ${scrolled ? "pt-2 lg:pt-3" : ""}`}
      >
        <nav
          className={`mx-auto transition-all duration-300 ${
            scrolled
              ? "max-w-[1440px] border border-foreground/10 bg-background/70 shadow-lg shadow-foreground/5 backdrop-blur-xl"
              : "max-w-[1600px] bg-transparent lg:px-14"
          }`}
        >
          <div
            className={`flex items-center justify-between transition-all duration-300 h-[72px] ${
              scrolled ? "px-4 lg:px-10" : "px-4 lg:px-6"
            }`}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image src="/arch.svg" alt="Bridge" width={32} height={32} />
              <span className="font-sans text-2xl font-semibold tracking-tighter text-card-foreground">
                Bridge
              </span>
            </Link>

            {/* Desktop nav links + CTA */}
            <div className="hidden lg:flex items-center gap-10">
              <div className="flex items-center gap-10">
                {NAV_LINKS.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-sm font-bold uppercase tracking-widest hover:text-foreground"
                  >
                    {label}
                  </Link>
                ))}
              </div>

              <Button
                href="https://app.bridgedrive.in/sign-in"
                variant="primary"
                className="px-4! py-2!"
              >
                LOG IN
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="lg:hidden text-foreground"
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
}
```

- [ ] **Step 3: Verify navbar**

Run: `npm run dev`
- At desktop (>1024px): nav links visible, no hamburger
- At mobile (<1024px): hamburger visible, no nav links, tapping opens slide-out sheet
- Links in sheet navigate and close the menu

- [ ] **Step 4: Commit**

```bash
git add src/components/navbar.tsx
git commit -m "feat: add mobile slide-out menu to navbar"
```

---

## Chunk 2: Section Padding & Typography

### Task 2: Hero padding

**Files:**
- Modify: `src/components/hero.tsx:13`

- [ ] **Step 1: Update hero padding**

Change the inner div's classes from:
```
p-12 py-20
```
to:
```
p-6 py-12 lg:p-12 lg:py-20
```

- [ ] **Step 2: Commit**

```bash
git add src/components/hero.tsx
git commit -m "fix: reduce hero padding on mobile"
```

### Task 3: Hero Video padding

**Files:**
- Modify: `src/components/hero-video.tsx:9`

- [ ] **Step 1: Update hero-video padding**

Same change — `p-12 py-20` → `p-6 py-12 lg:p-12 lg:py-20`

- [ ] **Step 2: Commit**

```bash
git add src/components/hero-video.tsx
git commit -m "fix: reduce hero-video padding on mobile"
```

### Task 4: Product section typography

**Files:**
- Modify: `src/components/product-section.tsx:13`

- [ ] **Step 1: Update headline size**

Change `text-5xl` to `text-3xl lg:text-5xl`

- [ ] **Step 2: Commit**

```bash
git add src/components/product-section.tsx
git commit -m "fix: responsive product section headline"
```

### Task 5: Features section accordion height

**Files:**
- Modify: `src/components/features-section.tsx:84`

- [ ] **Step 1: Fix accordion item height**

Change `h-40` to `h-auto min-h-[10rem]` on the accordion button element.

- [ ] **Step 2: Commit**

```bash
git add src/components/features-section.tsx
git commit -m "fix: prevent features accordion overflow on mobile"
```

### Task 6: Security section mobile adjustments

**Files:**
- Modify: `src/components/security-section.tsx`

- [ ] **Step 1: Reduce padding**

Line 35 — change `p-12 py-28` to `p-6 py-16 lg:p-12 lg:py-28`

- [ ] **Step 2: Reduce icon size on mobile**

Line 59 — change `w-20 h-20` to `w-12 h-12 lg:w-20 lg:h-20`

- [ ] **Step 3: Reduce gaps on mobile**

Line 53 — change `gap-x-8 gap-y-12` to `gap-x-4 gap-y-8 lg:gap-x-8 lg:gap-y-12`

- [ ] **Step 4: Commit**

```bash
git add src/components/security-section.tsx
git commit -m "fix: mobile-responsive security section"
```

### Task 7: Capabilities heading typography

**Files:**
- Modify: `src/components/capabilities-section.tsx:15`

- [ ] **Step 1: Update headline size**

Change `text-5xl` to `text-3xl lg:text-5xl`

- [ ] **Step 2: Commit**

```bash
git add src/components/capabilities-section.tsx
git commit -m "fix: responsive capabilities heading"
```

### Task 8: Capabilities cards padding

**Files:**
- Modify: `src/components/capabilities-section.tsx:93`

- [ ] **Step 1: Reduce mobile padding**

Change `px-8 lg:px-12` to `px-4 lg:px-12` and `py-20` to `py-12 lg:py-20` and `py-16` to `py-10 lg:py-16`.

The className should become:
```
${i === 0 ? "py-12 lg:py-20 px-4 lg:px-12" : "py-10 lg:py-16 px-4 lg:px-12"}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/capabilities-section.tsx
git commit -m "fix: reduce capabilities card padding on mobile"
```

### Task 9: Pricing section padding

**Files:**
- Modify: `src/components/pricing-section.tsx:33`

- [ ] **Step 1: Reduce padding**

Change `p-12 py-28` to `p-4 py-16 lg:p-12 lg:py-28`

- [ ] **Step 2: Commit**

```bash
git add src/components/pricing-section.tsx
git commit -m "fix: reduce pricing section padding on mobile"
```

### Task 10: CTA section padding

**Files:**
- Modify: `src/components/cta-section.tsx:16`

- [ ] **Step 1: Reduce padding**

Change `p-12 py-20` to `p-6 py-12 lg:p-12 lg:py-20`

- [ ] **Step 2: Commit**

```bash
git add src/components/cta-section.tsx
git commit -m "fix: reduce CTA section padding on mobile"
```

---

## Chunk 3: Footer

### Task 11: Make footer mobile-responsive

**Files:**
- Modify: `src/components/footer.tsx`

- [ ] **Step 1: Update footer layout**

Line 10 — change:
```
flex justify-between gap-12 mx-auto max-w-8xl px-20
```
to:
```
flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 mx-auto max-w-8xl px-6 lg:px-20
```

- [ ] **Step 2: Reduce link column gap on mobile**

Line 26 — change `gap-24` to `gap-12 lg:gap-24`

- [ ] **Step 3: Reduce GridText height on mobile**

Line 55 — change `h-[30rem]` to `h-48 lg:h-[30rem]` and `pt-28` to `pt-16 lg:pt-28`

- [ ] **Step 4: Reduce footer top padding on mobile**

Line 9 — change `pt-28` to `pt-16 lg:pt-28`

- [ ] **Step 5: Commit**

```bash
git add src/components/footer.tsx
git commit -m "fix: mobile-responsive footer layout"
```

---

## Chunk 4: Final Verification

### Task 12: Visual verification across breakpoints

- [ ] **Step 1: Run dev server and verify**

Run: `npm run dev`

Check at these widths:
- 375px (iPhone SE)
- 768px (tablet)
- 1024px (lg breakpoint boundary)
- 1440px (desktop)

Verify:
- No horizontal overflow at any width
- Navbar hamburger appears below lg, desktop nav above lg
- Mobile menu opens/closes smoothly
- All sections have appropriate padding at each breakpoint
- Footer stacks vertically on mobile
- Typography scales properly
- All buttons remain tappable (min 44px height)

- [ ] **Step 2: Run build to verify no errors**

Run: `npm run build`
Expected: Build succeeds with no errors

- [ ] **Step 3: Commit any final fixes if needed**
