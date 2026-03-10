# UI Components + Tailwind Refactor

**Date:** 2026-03-10
**Status:** Approved

## Goal

Replace all custom CSS utility classes in `globals.css` with typed React components that use Tailwind CSS classes inline. Delete the CSS class definitions after migration.

## Approach

Pure React components (Option A). No new dependencies.

## New Components (`src/components/ui/`)

| File | Replaces | Key Props |
|---|---|---|
| `Button.tsx` | `.btn-primary`, `.btn-outline`, `.btn-lavender`, `.btn-outline-white` | `variant: "primary" \| "outline" \| "lavender" \| "outline-white"`, `href?`, `className?` |
| `DisplayHeadline.tsx` | `.display-headline` | `as?: "h1" \| "h2" \| "h3"`, `className?` |
| `SectionLabel.tsx` | `.section-label` | `className?` |
| `TrustBadge.tsx` | `.trust-badge` | `className?` |
| `WaBubble.tsx` | `.wa-bubble-in`, `.wa-bubble-out` | `direction: "in" \| "out"` |
| `MockupCard.tsx` | `.mockup-card` | `className?` |
| `GridBg.tsx` | `.grid-bg` | wrapper component, `className?` |
| `DotPattern.tsx` | `.dot-pattern` | wrapper component, `className?` |
| `index.ts` | — | barrel export for all above |

## Background Patterns

`GridBg` and `DotPattern` use `background-image` gradients not expressible in stock Tailwind. They render as div wrappers with inline styles (no CSS class needed).

## globals.css After

Retains only:
- `@import` statements
- `@theme inline { ... }` block
- `:root` and `.dark` CSS variable blocks
- `@layer base { * { } body { } }`
- `.text-2xs` utility (non-trivial font-size, keep as CSS or add to Tailwind config)
- `.font-dm-serif` / `.font-dm-sans` (custom font family aliases — keep as CSS)

Deleted: `.display-headline`, `.section-label`, `.trust-badge`, `.btn-primary`, `.btn-outline`, `.btn-lavender`, `.btn-outline-white`, `.mockup-card`, `.wa-bubble-in`, `.wa-bubble-out`, `.nav-border`, `.grid-bg`, `.dot-pattern`

## Consumer Updates

All 8 section components updated to import from `@/components/ui` and use new components instead of raw class strings.

Files to update:
- `Hero.tsx`
- `Navbar.tsx`
- `Footer.tsx`
- `FeaturesSection.tsx`
- `CapabilitiesSection.tsx`
- `CtaSection.tsx`
- `ProductSection.tsx`
- `HeroVideo.tsx`

## Success Criteria

- No `className="btn-*"`, `className="display-headline"`, etc. remain in any `.tsx` file
- Deleted CSS classes no longer exist in `globals.css`
- Visual output is pixel-identical
- All components are TypeScript-typed
