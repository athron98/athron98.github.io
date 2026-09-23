import { SITE } from './constants';
import type { SEOProps } from './types';

/** Resolve a path or URL into an absolute canonical URL for this site. */
export function absoluteUrl(pathOrUrl: string): string {
  if (/^https?:\/\//.test(pathOrUrl)) return pathOrUrl;
  const path = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`;
  return new URL(path, SITE.url).toString();
}

/** Normalize partial SEO props into a complete, validated set with defaults. */
export function normalizeSeo(props: Partial<SEOProps> & Pick<SEOProps, 'title' | 'description'>): SEOProps {
  return {
    title: props.title,
    description: props.description,
    canonical: absoluteUrl(props.canonical ?? '/'),
    ogType: props.ogType ?? 'website',
    ogImage: absoluteUrl(props.ogImage ?? '/assets/hub/og-image.png'),
    robots: props.robots ?? 'index, follow',
    schema: props.schema ?? [],
  };
}

/** Clamp a page title to SEO-friendly length, keeping the site suffix. */
export function pageTitle(title: string): string {
  const suffix = ` | ${SITE.name}`;
  if (title.length + suffix.length <= 60) return `${title}${suffix}`;
  return title.slice(0, Math.max(0, 60 - suffix.length)).trimEnd() + suffix;
}
