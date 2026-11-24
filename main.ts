process.umask(0o022);

// Loading Screen Gold — make.fun
// Writes one loading-screen tip (200 characters max, one line) to
// /output/entry.txt. Node 22+, no dependencies, no network, same
// line every run.

import { mkdirSync, writeFileSync } from "node:fs";

const TIP =
  "Tip: the progress bar is lying to both of us, so use this time to drink some water and pretend you weren't about to rerun the exact same command that just failed.";

const chars = [...TIP].length;
if (chars < 1 || chars > 200 || TIP.trim().length === 0) {
  throw new Error(`tip is ${chars} characters, outside the 1-200 gate`);
}
if (TIP.includes("\n")) {
  throw new Error("tip must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TIP + "\n", "utf8");
console.log(`wrote ${chars} characters to /output/entry.txt`);
