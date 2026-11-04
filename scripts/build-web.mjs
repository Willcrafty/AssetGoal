import { copyFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const webDirectory = resolve(projectRoot, 'www');

await mkdir(webDirectory, { recursive: true });
await copyFile(resolve(projectRoot, 'index.html'), resolve(webDirectory, 'index.html'));
console.log('Prepared www/index.html for Capacitor.');
