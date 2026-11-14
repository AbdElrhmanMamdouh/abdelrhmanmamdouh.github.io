// /llms.txt: a plain-text summary of the site for AI assistants and crawlers.
import type { APIRoute } from 'astro';
import { allProjects, isPublished, projectUrl } from '../lib/projects';
import { profile, experience, focusAreas } from '../data/profile';
import { skillGroups } from '../data/skills';

export const GET: APIRoute = async ({ site }) => {
  const base = (site?.toString() ?? '').replace(/\/$/, '');
  const projects = (await allProjects()).filter(isPublished);
  const lines: string[] = [];
  lines.push(`# ${profile.name}`);
  lines.push('');
  lines.push(`> ${profile.role}. ${profile.positioningDetail} ${profile.availability}.`);
  lines.push('');
  lines.push('## Focus areas');
  for (const f of focusAreas) lines.push(`- ${f.value}: ${f.label}`);
  lines.push('');
  lines.push('## Experience');
  for (const e of experience) {
    lines.push(`- ${e.title}, ${e.org} (${e.date})`);
    for (const it of e.items) lines.push(`  - ${it.title}, ${it.org} (${it.date}): ${base}${it.href}`);
  }
  lines.push('');
  lines.push('## Projects');
  for (const p of projects) {
    lines.push(`- [${p.data.title}](${base}${projectUrl(p)}): ${p.data.hook} Role: ${p.data.role}. Technologies: ${p.data.tags.join(', ')}.`);
  }
  lines.push('');
  lines.push('## Skills');
  for (const g of skillGroups) lines.push(`- ${g.name}: ${g.skills.join(', ')}`);
  lines.push('');
  lines.push('## Publication');
  lines.push(`- ${profile.paper.title}. ${profile.paper.authors}. ${profile.paper.venue}. ${profile.paper.url}`);
  lines.push('');
  lines.push('## Links');
  lines.push(`- Resume (HTML): ${base}/resume/`);
  lines.push(`- Resume (PDF): ${base}${profile.resumePdf}`);
  lines.push(`- LinkedIn: ${profile.linkedin}`);
  lines.push(`- GitHub: ${profile.github}`);
  lines.push(`- Email: ${profile.emailUser}@${profile.emailDomain}`);
  lines.push('');
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
