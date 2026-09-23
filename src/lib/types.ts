/** Shared type definitions for the Athron98 ecosystem hub. */

export interface EcosystemDomain {
  /** Domain URL, including protocol. */
  domain: string;
  /** Short purpose description shown on cards. */
  purpose: string;
  /** Keyword-rich anchor texts for natural backlink distribution. */
  anchorTexts: string[];
}

export type ProjectId = 'clarity' | 'nobo' | 'tuner';

export type SchemaType = 'Person' | 'SoftwareApplication' | 'WebApplication';

export interface ProjectMeta {
  id: ProjectId;
  name: string;
  title: string;
  description: string;
  /** Live application URL the landing page points to. */
  url: string;
  /** Path of the showcase landing page on this hub. */
  path: string;
  schemaType: SchemaType;
  /** Short tagline used on cards. */
  tagline: string;
  /** URL of the Open Graph image for this project. */
  ogImage: string;
}

export interface SEOProps {
  title: string;
  description: string;
  /** Path or absolute URL; canonical is resolved from it. */
  canonical: string;
  ogType: 'website' | 'article';
  ogImage: string;
  robots: string;
  /** JSON-LD objects to embed as structured data. */
  schema?: Record<string, unknown>[];
}

export interface NavItem {
  label: string;
  href: string;
}
