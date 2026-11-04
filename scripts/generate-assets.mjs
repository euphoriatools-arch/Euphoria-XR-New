import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import sharp from 'sharp';

const root = resolve(import.meta.dirname, '..');
const publicDir = resolve(root, 'public');

const og = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#10151c"/>
  <rect x="80" y="230" width="72" height="6" fill="#ff253d"/>
  <text x="80" y="330" fill="#ffffff" font-family="Helvetica, Arial, sans-serif" font-size="84" font-weight="500">Euphoria<tspan fill="#ff253d">XR</tspan></text>
  <text x="80" y="400" fill="#d5dde4" font-family="Helvetica, Arial, sans-serif" font-size="32">Immersive AR, VR, and AI experiences</text>
</svg>`;

await sharp(Buffer.from(og)).jpeg({ quality: 82 }).toFile(resolve(publicDir, 'og-default.jpg'));
await sharp(resolve(publicDir, 'brand/logo.svg')).resize(336, 56).png().toFile(resolve(publicDir, 'brand/logo.png'));

const icon32 = await sharp(resolve(publicDir, 'favicon.svg')).resize(32, 32).png().toBuffer();
const icon16 = await sharp(resolve(publicDir, 'favicon.svg')).resize(16, 16).png().toBuffer();
await sharp(resolve(publicDir, 'favicon.svg')).resize(180, 180).png().toFile(resolve(publicDir, 'apple-touch-icon.png'));

function icoEntry(png, size, offset) {
	const entry = Buffer.alloc(16);
	entry.writeUInt8(size === 256 ? 0 : size, 0);
	entry.writeUInt8(size === 256 ? 0 : size, 1);
	entry.writeUInt16LE(1, 4);
	entry.writeUInt16LE(32, 6);
	entry.writeUInt32LE(png.length, 8);
	entry.writeUInt32LE(offset, 12);
	return entry;
}

const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(2, 4);
const offset1 = 6 + 32;
const offset2 = offset1 + icon16.length;
const ico = Buffer.concat([
	header,
	icoEntry(icon16, 16, offset1),
	icoEntry(icon32, 32, offset2),
	icon16,
	icon32,
]);
writeFileSync(resolve(publicDir, 'favicon.ico'), ico);
console.log('Wrote og-default.jpg, logo.png, apple-touch-icon.png, and favicon.ico');
