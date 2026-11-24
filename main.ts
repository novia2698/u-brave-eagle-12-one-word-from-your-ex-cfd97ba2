// main.ts — "One Word From Your Ex" (make.fun).
//
// The whole entry is one word: the word an ex would use to describe you.
// This program writes exactly that word, and nothing else, to
// <output>/entry.txt, where the judge reads it.
//
// The word: "forgettable".
// Why this word: an ex's cruellest verdict is not hatred, it is erasure.
// "Forgettable" says you were not even worth remembering — it lands
// instantly, it is painfully honest, and it is funny precisely because
// it is the one insult with no comeback. Everyone has feared being
// the person someone simply forgot.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "forgettable";

// The grader sets MAKEFUN_OUTPUT_DIR; fall back to /output.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Exactly one word, no trailing newline, no extra whitespace.
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
