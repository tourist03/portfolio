import { mkdir, rm, cp, writeFile, readFile, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { renderHtml } from '../src/render.js';

const root = fileURLToPath(new URL('../', import.meta.url));
const dist = path.join(root, 'dist');
const digest = text => createHash('sha256').update(text).digest('hex').slice(0, 10);
const content = await readFile(path.join(root, 'src/content.js'), 'utf8');
const lib = await readFile(path.join(root, 'src/lib.js'), 'utf8');
const css = await readFile(path.join(root, 'src/styles.css'), 'utf8');
const files = { content: `content.${digest(content)}.js`, lib: `lib.${digest(lib)}.js`, css: `styles.${digest(css)}.css` };
const source = (await readFile(path.join(root, 'src/site.js'), 'utf8')).replace('./content.js', `./${files.content}`).replace('./lib.js', `./${files.lib}`);
files.script = `site.${digest(source)}.js`;

await access(path.join(root, 'public/Vineet_Singh_Resume.pdf'));
await access(path.join(root, 'public/social-card.png'));
await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await cp(path.join(root, 'public'), dist, { recursive: true });
await Promise.all([
  writeFile(path.join(dist, files.content), content),
  writeFile(path.join(dist, files.lib), lib),
  writeFile(path.join(dist, files.css), css),
  writeFile(path.join(dist, files.script), source),
  writeFile(path.join(dist, 'index.html'), renderHtml({ cssPath: `./${files.css}`, scriptPath: `./${files.script}` })),
  writeFile(path.join(dist, '.nojekyll'), ''),
  writeFile(path.join(dist, 'robots.txt'), 'User-agent: *\nAllow: /\nSitemap: https://tourist03.github.io/portfolio/sitemap.xml\n'),
  writeFile(path.join(dist, 'sitemap.xml'), '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://tourist03.github.io/portfolio/</loc></url></urlset>'),
  writeFile(path.join(dist, '404.html'), `<!doctype html><html lang="en" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Page not found — Vineet Singh</title><link rel="icon" href="/portfolio/favicon.svg"><link rel="stylesheet" href="/portfolio/${files.css}"></head><body><main class="not-found wrap"><a class="brand" href="/portfolio/"><span class="brand-mark">v.</span><span>Vineet Singh</span></a><p class="eyebrow">404 / A SMALL DETOUR</p><h1>Wrong turn.<br><em>Fresh start.</em></h1><p>This page isn’t here. My work, experience, and contact details are a click away.</p><a class="button button-primary" href="/portfolio/">Back to the portfolio <span aria-hidden="true">↗</span></a></main></body></html>`),
]);
console.log(`Built portfolio: ${files.script}, ${files.css}. Output: dist/`);
