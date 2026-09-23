import type { ProjectId, ProjectMeta } from './types';

/** Registry of all showcased projects on this hub. */
export const projects: Record<ProjectId, ProjectMeta> = {
  clarity: {
    id: 'clarity',
    name: 'Clarity',
    title: 'Clarity - Modern Framework for Scalable Apps',
    description:
      'Clarity is a modern framework for building scalable applications with zero-config routing, type-safe APIs, and blazing-fast performance.',
    url: 'https://clarity.athron98.biz.id',
    path: '/clarity',
    schemaType: 'SoftwareApplication',
    tagline: 'Build scalable apps with zero-config clarity',
    ogImage: '/assets/clarity/og-image.png',
  },
  nobo: {
    id: 'nobo',
    name: 'Nobo',
    title: 'Nobo - Note Boards & Snippet Manager',
    description:
      'Nobo is a modern snippet manager and note board for developers: capture code snippets and terminal commands, organize boards, and retrieve them instantly.',
    url: 'https://nobo.bl8x.my.id',
    path: '/nobo',
    schemaType: 'WebApplication',
    tagline: 'Your snippets, organized on boards',
    ogImage: '/assets/nobo/og-image.png',
  },
  tuner: {
    id: 'tuner',
    name: 'Tuner',
    title: 'Tuner - Digital Instrument Tuning App',
    description:
      'Tuner is a precise digital tuner for musical instruments: real-time pitch detection, multiple instrument profiles, and a beautiful responsive interface.',
    url: 'https://tuner.brokenlight.biz.id',
    path: '/tuner',
    schemaType: 'WebApplication',
    tagline: 'Tune every instrument, perfectly',
    ogImage: '/assets/tuner/og-image.png',
  },
};

/** Ordered list for grid rendering. */
export const projectList: ProjectMeta[] = [projects.clarity, projects.nobo, projects.tuner];
