// Banned-terms check (PORTFOLIO_PLAN 1.4).
// Reads .banned-terms.txt (one term per line, # for comments). That file is in .gitignore
// and must NEVER be committed: it contains the confidential names it protects.
// Scans every text file in src/, public/ and dist/ (SVG text, alt text, file names included)
// and PDF files for the terms. Exit code 1 on any hit.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = process.cwd();
const listFile = join(root, '.banned-terms.txt');
if (!existsSync(listFile)) {
  console.error('No .banned-terms.txt found. Create it locally from the confidentiality mapping (never commit it).');
  process.exit(2);
}
const terms = readFileSync(listFile, 'utf8')
  .split(/\r?\n/).map((l) => l.trim()).filter((l) => l && !l.startsWith('#'));
const res = terms.map((t) => ({ t, re: new RegExp(t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i') }));

const textExt = /\.(astro|md|mdx|ts|js|mjs|json|css|html|svg|txt|xml|yml|yaml)$/i;
const skip = new Set(['node_modules', '.git', '.astro']);
let hits = 0;

function walk(dir) {
  for (const name of readdirSync(dir)) {
    if (skip.has(name)) continue;
    const p = join(dir, name);
    if (statSync(p).isDirectory()) { walk(p); continue; }
    scanFile(p);
  }
}
function scanFile(p) {
  const rel = relative(root, p);
  const name = p.split(/[\\/]/).pop();
  for (const { t, re } of res) if (re.test(name)) { console.log(`FILE NAME  ${rel}  ->  "${t}"`); hits++; }
  let content = null;
  if (textExt.test(name)) content = readFileSync(p, 'utf8');
  else if (/\.pdf$/i.test(name)) content = readFileSync(p).toString('latin1');
  if (content === null) return;
  content.split(/\r?\n/).forEach((line, i) => {
    for (const { t, re } of res) if (re.test(line)) { console.log(`${rel}:${i + 1}  ->  "${t}"`); hits++; }
  });
}
for (const d of ['src', 'public', 'dist', 'scripts']) if (existsSync(join(root, d))) walk(join(root, d));
for (const f of ['README.md', 'astro.config.mjs', 'package.json']) if (existsSync(join(root, f))) scanFile(join(root, f));
if (hits) { console.error(`\n${hits} banned-term hit(s). Fix before committing.`); process.exit(1); }
console.log(`Banned-terms check passed (${terms.length} terms).`);
