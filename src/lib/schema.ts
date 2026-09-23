import { SITE } from './constants';
import { absoluteUrl } from './seo';
import type { SchemaType } from './types';

type Json = Record<string, unknown>;

/** Person schema for the homepage, linking all ecosystem profiles. */
export function personSchema(sameAs: string[] = [], knowsAbout: string[] = []): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE.owner,
    url: SITE.url,
    sameAs,
    ...(knowsAbout.length > 0 ? { knowsAbout } : {}),
  };
}

/** WebSite schema for the homepage, enabling sitelinks searchbox metadata. */
export function websiteSchema(): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    publisher: { '@type': 'Person', name: SITE.owner },
  };
}

/** BreadcrumbList schema for nested pages like the docs section. */
export function breadcrumbSchema(items: { name: string; path: string }[]): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** Software/Web application schema for project landing pages. */
export function applicationSchema(options: {
  type: SchemaType;
  name: string;
  description: string;
  url: string;
  category: string;
}): Json {
  return {
    '@context': 'https://schema.org',
    '@type': options.type,
    name: options.name,
    applicationCategory: options.category,
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description: options.description,
    url: absoluteUrl(options.url),
  };
}
