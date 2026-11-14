# abdelrhmanmamdouh.github.io

Personal portfolio of AbdElrahman Khalil, embedded software engineer. Built with [Astro](https://astro.build) and deployed to GitHub Pages by GitHub Actions on every push to `main`.

## Run locally

Needs Node.js 22 or newer.

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # output in dist/
npm run preview    # serve dist/
```

## Content

Each project is one file in `src/content/projects/`. Its front matter drives the card, the project page, the area filter, the skills page and `/llms.txt`.

- `page: summary` gives a short project page, `page: case-study` a full one, and `page: none` a card only.
- A project marked `confidentiality: client` or `internal` cannot use `page: case-study` while `approval: pending`. The build fails with a clear message.
- Every `skills[].name` must exist in `src/data/skills.ts`, and every skill listed there needs at least one project, or the build fails.

```
src/data/profile.ts       name, links, intro, focus areas, experience
src/data/skills.ts        skill groups
src/content/projects/     one file per project
src/content.config.ts     front-matter schema and the approval gate
src/components/diagrams/  SVG diagrams that follow the light and dark theme
src/pages/llms.txt.ts     plain-text summary for AI tools
src/styles/tokens.css     palette, type scale, spacing
public/resume.pdf         resume download
```

## Confidentiality check

Create `.banned-terms.txt` in the repository root with one confidential term per line. It is listed in `.gitignore` and must never be committed. Run `npm run check:terms` before pushing, or install the hook once:

```bash
cp scripts/hooks/pre-commit .git/hooks/pre-commit && chmod +x .git/hooks/pre-commit
```

Fonts: Source Serif 4 and IBM Plex Sans / Mono, SIL Open Font License (copies in `public/fonts/`).
