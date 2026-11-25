// Writes the one-word entry to the harness output directory.
import fs from "node:fs";
import path from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const entryPath = path.join(import.meta.dirname, "entry.txt");
const word = fs.readFileSync(entryPath, "utf8");
if (word.trim().length === 0) {
  throw new Error("entry.txt is empty");
}
fs.mkdirSync(outDir, { recursive: true });
fs.copyFileSync(entryPath, path.join(outDir, "entry.txt"));
console.log(`wrote a ${word.trim().length}-character word`);
