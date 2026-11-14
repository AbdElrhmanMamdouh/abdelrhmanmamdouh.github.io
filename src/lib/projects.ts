import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

export async function allProjects(): Promise<Project[]> {
  const items = await getCollection('projects');
  return items.sort((a, b) => a.data.order - b.data.order);
}

/** A project gets its own page unless page is 'none' (schema enforces approval for full case studies). */
export function isPublished(p: Project): boolean {
  return p.data.page !== 'none';
}

export function projectUrl(p: Project): string {
  return `/projects/${p.id}/`;
}

export function tagUrl(tag: string): string {
  return `/projects/?tag=${encodeURIComponent(tag)}`;
}

