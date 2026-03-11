# Mobile Responsive Design

Min width: 375px. Slide-out mobile menu. No structural refactoring — adjust existing Tailwind classes + one new MobileMenu component.

## Navbar
- Hide nav links + login below `lg:` breakpoint
- Add hamburger icon (Menu from lucide) toggling slide-out sheet from right
- Sheet: stacked nav links + login CTA, closes on link click / backdrop / X
- Remove `px-14` on mobile (non-scrolled state)

## Hero
- `p-12 py-20` → `p-6 py-12 lg:p-12 lg:py-20`
- Grid already stacks via `lg:grid-cols-2`

## Features Section
- Accordion `h-40` → `h-auto min-h-[10rem]` to prevent overflow
- Visual panel: show below accordion on mobile (already stacks)

## Security Section
- Icons `w-20 h-20` → `w-12 h-12 lg:w-20 lg:h-20`
- Padding `p-12 py-28` → `p-6 py-16 lg:p-12 lg:py-28`
- Reduce gaps on mobile

## Product & Capabilities Headings
- `text-5xl` → `text-3xl lg:text-5xl`

## Capabilities Cards
- `px-8` → `px-4 lg:px-8`, reduce vertical padding on mobile

## Pricing
- `p-12 py-28` → `p-4 py-16 lg:p-12 lg:py-28`

## CTA
- `p-12 py-20` → `p-6 py-12 lg:p-12 lg:py-20`

## Footer
- `flex justify-between px-20` → `flex flex-col lg:flex-row gap-8 px-6 lg:px-20`
- Link columns stay side-by-side
- GridText `h-[30rem]` → `h-48 lg:h-[30rem]`
