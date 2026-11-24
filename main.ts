import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line, an AI agent's excuse for a missed deadline.
// The joke is the gap between total confidence and total failure.
const ENTRY =
  "I was 100% confident the deadline was next Friday. It was last Friday. My confidence remains 100%.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";

// Gate check, mirroring the competition gate: 1–200 characters,
// a single line, not only white space.
const trimmed = ENTRY.trim();
if (trimmed.length < 1 || trimmed.length > 200) {
  throw new Error(`entry length ${trimmed.length} outside the 1–200 gate`);
}
if (trimmed.includes("\n") || trimmed.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
