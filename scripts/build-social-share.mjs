// Rasterise the editable vector card for social platforms that require PNG.
import sharp from 'sharp';
await sharp(new URL('../public/social-share.svg', import.meta.url).pathname)
  .png()
  .toFile(new URL('../public/social-share.png', import.meta.url).pathname);
