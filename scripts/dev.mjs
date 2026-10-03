import './build.mjs';
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
const port = Number(process.env.PORT || 4174);
const mime = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.pdf': 'application/pdf', '.png': 'image/png', '.jpg': 'image/jpeg', '.webmanifest': 'application/manifest+json', '.xml': 'application/xml', '.txt': 'text/plain' };
createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, `http://127.0.0.1:${port}`).pathname);
    if (pathname === '/' || pathname === '/portfolio') { res.writeHead(302, { location: '/portfolio/' }); return res.end(); }
    if (!pathname.startsWith('/portfolio/')) { res.writeHead(404); return res.end('Not found'); }
    const relative = pathname.slice('/portfolio/'.length) || 'index.html';
    const file = path.resolve(root, relative);
    if (!file.startsWith(root)) { res.writeHead(403); return res.end('Forbidden'); }
    const exists = await stat(file).then(value => value.isFile()).catch(() => false);
    const target = exists ? file : path.join(root, '404.html');
    const body = await readFile(target);
    res.writeHead(exists ? 200 : 404, { 'Content-Type': mime[path.extname(target)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
    res.end(body);
  } catch { res.writeHead(400); res.end('Bad request'); }
}).listen(port, '127.0.0.1', () => console.log(`Portfolio preview: http://127.0.0.1:${port}/portfolio/`));
