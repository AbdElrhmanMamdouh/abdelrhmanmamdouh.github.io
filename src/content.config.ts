import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Front-matter schema from PORTFOLIO_PLAN section 6.1.
// The build FAILS if a client or internal case study is published while approval is pending.

const level = z.enum(['production', 'built', 'evaluated']);

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z
    .object({
      title: z.string().max(80),
      hook: z.string().min(20).max(180),
      context: z.string(),
      period: z.string(),
      role: z.string(),
      team: z.string(),
      order: z.number().int(),
      featured: z.boolean().default(false),
      confidentiality: z.enum(['client', 'internal', 'open', 'academic']),
      approval: z.enum(['pending', 'approved', 'not-needed']),
      areas: z.array(z.enum(['Automotive', 'Embedded Linux', 'Connectivity', 'AI', 'Hardware'])).min(1),
      tags: z.array(z.string()).min(1).max(16),
      skills: z.array(z.object({ name: z.string(), level })).default([]),
      metrics: z.array(z.object({ value: z.string(), label: z.string().min(3) })).max(4).default([]),
      heroAlt: z.string().optional(),
      repo: z.string().url().or(z.literal('')).default(''),
      paper: z.string().url().or(z.literal('')).default(''),
      // page: 'summary'    -> short public-safe page, resume-level wording only (allowed without approval)
      //       'case-study' -> full case study (client / internal work needs written approval)
      //       'none'       -> card only
      page: z.enum(['none', 'summary', 'case-study']).default('summary'),
      // Short name used in the skills lists.
      short: z.string().max(24),
    })
    .superRefine((p, ctx) => {
      const needsApproval = p.confidentiality === 'client' || p.confidentiality === 'internal';
      if (p.page === 'case-study' && needsApproval && p.approval === 'pending') {
        ctx.addIssue({
          code: 'custom',
          message: `"${p.title}" is ${p.confidentiality} work and approval is still "pending". Use page: summary until written approval arrives.`,
        });
      }
    }),
});

export const collections = { projects };
