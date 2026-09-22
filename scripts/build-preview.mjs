import { execFileSync } from 'node:child_process';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

// GitHub Pages review build only. The normal build remains ready for the live domain.
const previewURL = new URL(process.env.PREVIEW_URL || 'https://conormorey3131.github.io/banner-padel-site/');
const base = previewURL.pathname.replace(/\/$/, '');
const origin = previewURL.href.replace(/\/$/, '');
execFileSync('npm', ['run', 'build'], { stdio: 'inherit' });

async function prepare(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) { await prepare(file); continue; }
    if (!/\.(html|css|xml)$/.test(entry.name)) continue;
    let text = await readFile(file, 'utf8');
    text = text.replaceAll('https://www.bannerpadel.ie', origin).replaceAll('https://bannerpadel.ie', origin);
    // Astro image srcsets and CSS resource URLs also need the project subdirectory.
    text = text.replaceAll('/_astro/', `${base}/_astro/`);
    text = text.replace(/\b(href|src|action)="\/(?!\/)([^" ]*)"/g, (match, attr, target) => {
      if (`/${target}`.startsWith(`${base}/`)) return match;
      return `${attr}="${base}/${target}"`;
    });
    if (entry.name.endsWith('.html')) {
      text = text.replace(/<meta name="robots"[^>]*>/g, '');
      text = text.replace('</head>', '<meta name="robots" content="noindex, nofollow"></head>');
    }
    await writeFile(file, text);
  }
}
await prepare('dist');
// Let crawlers read the noindex directive; this is a public client preview, not private hosting.
await writeFile('dist/robots.txt', 'User-agent: *\nAllow: /\n');
console.log(`Preview prepared for ${previewURL.href}`);
