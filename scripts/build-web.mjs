import { copyFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const webDirectory = resolve(projectRoot, 'www');

await mkdir(webDirectory, { recursive: true });
await copyFile(resolve(projectRoot, 'index.html'), resolve(webDirectory, 'index.html'));
await copyFile(resolve(projectRoot, 'manifest.webmanifest'), resolve(webDirectory, 'manifest.webmanifest'));
await copyFile(resolve(projectRoot, 'icon.svg'), resolve(webDirectory, 'icon.svg'));
await copyFile(resolve(projectRoot, 'sw.js'), resolve(webDirectory, 'sw.js'));
console.log('Prepared www/index.html for Capacitor.');
