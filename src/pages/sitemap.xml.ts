import type { APIRoute } from 'astro';
import { site } from '../data/site';

export const GET: APIRoute = () => {
  const pages = import.meta.glob('./**/*.astro');
  const urls = Object.keys(pages)
    .filter(path => !['./404.astro', './thank-you.astro'].includes(path))
    .map(path => path.replace(/^\.\//, '').replace(/\.astro$/, '').replace(/(^|\/)index$/, ''))
    .map(path => new URL(path ? `/${path}/` : '/', site.url).href);
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map(url => `<url><loc>${url}</loc></url>`).join('')}</urlset>`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
