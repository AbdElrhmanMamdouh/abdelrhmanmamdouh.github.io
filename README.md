# Portfolio site

Personal portfolio of AbdElrahman Khalil, built with [Astro](https://astro.build) and published on GitHub Pages.
It follows `PORTFOLIO_PLAN.md` (Phase 1 MVP: GREEN content only).

## Status

| Done (Phase 1) | Waiting |
|---|---|
| Palette D "Paper & Oxblood", light and dark, self-hosted fonts | Employer approval for client / internal case studies (plan D1) |
| Home, Projects (10 cards, area filter, `?tag=` links), Skills (evidence + matrix), About, Resume, 404 | |
| Full case studies: P7 driver monitoring, P8 hardware | Diagrams for P1 to P6 (Phase 2) |
| Approval gate in the content schema, banned-terms check, pre-commit hook | Demo repos (Phase 3) |
| Default social image, sitemap, robots.txt, JSON-LD | |

## Run locally

Needs Node.js 22 or newer.

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # output in dist/
npm run preview    # serve dist/
```

## Deploy (one-time setup)

1. Create a repository named exactly `abdelrhmanmamdouh.github.io` (your GitHub username + `.github.io`).
   If you rename the GitHub account first (plan 9.7), also change `site` in `astro.config.mjs` and the sitemap line in `public/robots.txt`.
2. Push this folder to its `main` branch.
3. In the repository: **Settings → Pages → Source: GitHub Actions**.
4. Every push to `main` builds and deploys via `.github/workflows/deploy.yml`.

## Adding or publishing a case study

Each project is one file in `src/content/projects/`. The front matter drives the card, the filter, the skills page and the matrix.

- `draft: true` → card only, marked "Case study coming", no page.
- `draft: false` → full page at `/projects/<file-name>/`.
- **Approval gate:** a project with `confidentiality: client` or `internal` cannot have `draft: false` while `approval: pending`. The build fails with a clear message. Set `approval: approved` only after written approval.
- Use `.mdx` when the page needs diagram components (see the P7 and P8 files).
- Every number must be in the work records. Every `skills[].name` must match a name in `src/data/skills.ts`, and every skill there must have at least one project, or the build fails.

## Confidentiality check

1. Create `.banned-terms.txt` in the repo root, one confidential term per line (customer, programme, tool and product names from the mapping table). It is in `.gitignore`. **Never commit it.**
2. Run `npm run check:terms`. It scans `src/`, `public/`, `dist/` (including SVG text, alt text, file names and PDF bytes).
3. Install the hook once so it runs before every commit:
   `cp scripts/hooks/pre-commit .git/hooks/pre-commit && chmod +x .git/hooks/pre-commit`
4. Strip metadata from images and PDFs before adding them (`exiftool -all= file`).

## Where things live

```
src/data/profile.ts       name, links, positioning sentence, headline numbers, timeline
src/data/skills.ts        skill groups shown on the site
src/content/projects/     one file per project
src/content.config.ts     front-matter schema and the approval gate
src/components/diagrams/  hand-written SVG diagrams that follow the theme (plan 4.7)
src/styles/tokens.css     palette, type scale, spacing
public/og/default.png     social preview image, 1200 × 630
```

Fonts: Source Serif 4 and IBM Plex Sans / Mono, SIL Open Font License (copies in `public/fonts/`).
