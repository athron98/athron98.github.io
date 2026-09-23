import { rename } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const dist = path.resolve('dist');
const from = path.join(dist, 'sitemap-index.xml');
const to = path.join(dist, 'sitemap.xml');

if (existsSync(from)) {
  await rename(from, to);
  console.log('renamed sitemap-index.xml -> sitemap.xml');
} else if (!existsSync(to)) {
  console.warn('no sitemap file found in dist/');
}
