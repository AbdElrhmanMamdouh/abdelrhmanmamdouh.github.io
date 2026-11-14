import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

export async function allProjects(): Promise<Project[]> {
  const items = await getCollection('projects');
  return items.sort((a, b) => a.data.order - b.data.order);
}

/** A project gets its own page only when it is not a draft (schema enforces approval). */
export function isPublished(p: Project): boolean {
  return !p.data.draft;
}

export function projectUrl(p: Project): string {
  return `/projects/${p.id}/`;
}

export function tagUrl(tag: string): string {
  return `/projects/?tag=${encodeURIComponent(tag)}`;
}

export const shortNames: Record<string, string> = {
  'adas-ecu-ethernet-switch-driver': 'P1 ADAS switch',
  'switch-stress-test-framework': 'P1a Stress tests',
  'switch-frame-pipeline-simulator': 'P1b Simulator',
  'bluetooth-under-hypervisors': 'P2 Cockpit BT',
  'bluetooth-wifi-over-ethernet': 'P3 Two-ECU',
  'ai-test-generation': 'P4 AI tests',
  'sdv-open-platforms': 'P5 SDV',
  'qt-instrument-cluster': 'P6 Qt',
  'driver-monitoring-tda4vm': 'P7 DMS',
  'hardware-and-academic': 'P8 HW',
};
