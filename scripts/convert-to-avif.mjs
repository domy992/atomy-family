/**
 * Converts all JPG/JPEG/PNG images in public/images to AVIF using sharp.
 * - Creates .avif files next to originals
 * - Skips files that already have an .avif version
 * - Does NOT delete originals (manual cleanup after verification)
 */
import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import { join, extname, basename } from "node:path";

const PUBLIC_IMAGES = "public/images";
const EXTENSIONS = new Set([".jpg", ".jpeg", ".png"]);
const QUALITY = 65; // good balance of quality/size for product photos

async function* walkDir(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walkDir(fullPath);
    } else {
      yield fullPath;
    }
  }
}

async function convert() {
  let converted = 0;
  let skipped = 0;
  let errors = 0;

  for await (const filePath of walkDir(PUBLIC_IMAGES)) {
    const ext = extname(filePath).toLowerCase();
    if (!EXTENSIONS.has(ext)) continue;

    const avifPath = filePath.replace(/\.[^.]+$/, ".avif");

    try {
      await stat(avifPath);
      skipped++;
      continue;
    } catch {
      // avif doesn't exist, proceed
    }

    try {
      const info = await sharp(filePath)
        .avif({ quality: QUALITY })
        .toFile(avifPath);

      const origStat = await stat(filePath);
      const savings = ((1 - info.size / origStat.size) * 100).toFixed(0);
      console.log(`✓ ${basename(filePath)} → ${basename(avifPath)} (${savings}% smaller)`);
      converted++;
    } catch (err) {
      console.error(`✗ ${basename(filePath)}: ${err.message}`);
      errors++;
    }
  }

  console.log(`\nDone: ${converted} converted, ${skipped} skipped, ${errors} errors`);
}

convert();
