import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const out = process.env.MAKEFUN_OUTPUT_DIR;
if (!out) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}
const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.txt");
const text = readFileSync(src, "utf8");
if (!text.trim()) {
  console.error("entry.txt is empty");
  process.exit(1);
}
console.log(`entry: ${[...text].length} characters`);
mkdirSync(out, { recursive: true });
copyFileSync(src, join(out, "entry.txt"));
