#!/usr/bin/env bash
# Generates PWA icons from favicon.svg using Node.js + sharp.
# Usage: ./build-icons.sh   (requires: npm install sharp)
set -euo pipefail

cd "$(dirname "$0")"
mkdir -p icons

node -e "
const sharp = require('sharp');
const fs = require('fs');

const svg = fs.readFileSync('favicon.svg');

async function generate() {
  // Standard icons — full bleed
  await sharp(svg, { density: 300 })
    .resize(192, 192)
    .png()
    .toFile('icons/icon-192.png');
  console.log('  icon-192.png');

  await sharp(svg, { density: 300 })
    .resize(512, 512)
    .png()
    .toFile('icons/icon-512.png');
  console.log('  icon-512.png');

  // Apple touch icon — full bleed
  await sharp(svg, { density: 300 })
    .resize(180, 180)
    .png()
    .toFile('icons/apple-touch-icon.png');
  console.log('  apple-touch-icon.png');

  // Maskable icons — 20% safe-zone padding (icon fills 60% center)
  // The icon content goes in the center 60%, the rest is background.
  for (const size of [192, 512]) {
    const innerSize = Math.round(size * 0.6);
    const padding = Math.round((size - innerSize) / 2);

    const inner = await sharp(svg, { density: 300 })
      .resize(innerSize, innerSize)
      .png()
      .toBuffer();

    await sharp({
      create: {
        width: size,
        height: size,
        channels: 4,
        background: '#1a1a1a'
      }
    })
      .composite([{ input: inner, left: padding, top: padding }])
      .png()
      .toFile('icons/icon-maskable-' + size + '.png');

    console.log('  icon-maskable-' + size + '.png');
  }

  console.log();
  console.log('Done. 5 icons generated in icons/');
}

generate().catch(err => { console.error(err); process.exit(1); });
"
