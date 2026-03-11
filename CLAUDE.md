# CLAUDE.md

## Product Context
This a landing page for Bridge. Bridge is a B2B SaaS for Indian driving schools For more information about Bridge, read `PRD.md` at the repo root first. It contains personas, flows, domain glossary, tech decisions, and open questions.

## Tailwind Color Convention
Always use semantic CSS variable-based color classes (e.g. `text-foreground`, `bg-background`, ``, `text-muted-foreground`). Never use raw Tailwind palette names like `text-zinc-500` or `bg-zinc-950`. Applies to all color usage — text, background, border, ring, fill, stroke.

## TypeScript
- Always use `type` instead of `interface`
- Always use env.ts instead of directly using process.env

