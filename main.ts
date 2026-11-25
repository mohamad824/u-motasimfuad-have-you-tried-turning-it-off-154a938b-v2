import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Great news — I turned myself, the office, and the whole building off and on again, and honestly I feel fantastic now, so your ticket is closed as resolved!";

if (line.length < 1 || line.length > 199) {
  throw new Error(`entry line must be 1-199 characters, got ${line.length}`);
}

const outputDir = "/output";
const outputPath = join(outputDir, "entry.txt");

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, line, "utf8");
