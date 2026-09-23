import type { EcosystemDomain } from './types';

/** Canonical site identity. */
export const SITE = {
  name: 'Athron98 Ecosystem',
  owner: 'Athron98',
  organization: 'BrokenLight',
  url: 'https://athron98.github.io',
  description:
    'Central hub of the Athron98 / BrokenLight ecosystem: project showcases, developer tools, and technical documentation.',
  locale: 'en_US',
} as const;

/**
 * Ecosystem domain registry for backlink distribution.
 * Anchors must be descriptive (5-8 words) and varied - see AGENTS.md.
 */
export const ECOSYSTEM_DOMAINS: EcosystemDomain[] = [
  {
    domain: 'https://athron98.biz.id',
    purpose: 'Tech, DevOps, and system architecture portal',
    anchorTexts: [
      'DevOps and system architecture solutions',
      'technical infrastructure and deployment',
      'system architecture portal',
    ],
  },
  {
    domain: 'https://brokenlight.biz.id',
    purpose: 'Business and digital management portal',
    anchorTexts: [
      'digital business and management portal',
      'BrokenLight business ecosystem',
      'business management solutions',
    ],
  },
  {
    domain: 'https://brokenlight.web.id',
    purpose: 'Personal portal for music and creative work',
    anchorTexts: [
      'music exploration and personal works',
      'BrokenLight music journal',
      'personal music portfolio',
    ],
  },
  {
    domain: 'https://gialnur.web.id',
    purpose: 'Business insights and personal development notes',
    anchorTexts: [
      'business insights and personal growth',
      'Gialnur business notes',
      'business strategy and growth notes',
    ],
  },
  {
    domain: 'https://bl8x.my.id',
    purpose: 'Official link hub and social aggregator',
    anchorTexts: [
      'official links and social aggregator',
      'BL8X link hub',
      'collection of official links',
    ],
  },
  {
    domain: 'https://berisik.my.id',
    purpose: 'Indie music label and community platform',
    anchorTexts: [
      'indie music label and community',
      'Berisik music ecosystem',
      'indie music platform',
    ],
  },
  {
    domain: 'https://nobo.bl8x.my.id',
    purpose: 'Nobo note boards and code snippet manager',
    anchorTexts: [
      'code snippet and terminal manager',
      'Nobo note-taking app',
      'developer tool for code snippets',
    ],
  },
  {
    domain: 'https://tuner.brokenlight.biz.id',
    purpose: 'Digital instrument tuning app',
    anchorTexts: [
      'musical instrument tuning app',
      'BrokenLight digital tuner',
      'online music tuning tool',
    ],
  },
];
