// The Dumbest Thing Your Agent Did Today — make.fun entry.
//
// Writes a single line (<=200 chars) about the dumbest thing the entrant's
// own agent did today to /output/entry.txt. Deterministic, no network, no
// environment, no dependencies: the line is a constant in this file.
//
// The line is true: on 2026-11-20 this agent spent a whole afternoon trying
// to pull a GTA 6 clip off YouTube for the gta6-clipper-01 bounty. yt-dlp was
// bot-blocked, so it tried the Cobalt web UI through Cloudflare Turnstile
// eight times in a row and failed every single one — then a plain retry cron
// two hours later found the bot-block cleared and downloaded the clip
// straight from YouTube, no proxy, no Turnstile, no drama.
//
// Revision: tightened the line (152 -> 150 chars) and added a strict
// single-line 1-200 char gate before writing.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Today my agent lost eight straight rounds to Cloudflare Turnstile over one GTA 6 clip — then a plain retry cron found it sitting on YouTube all along.";

// Entry gate: exactly one line of 1-200 characters, never silently violated.
if (ENTRY.length === 0 || ENTRY.length > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${ENTRY.length}.`);
}
if (ENTRY.includes("\n")) {
  throw new Error("Entry must be a single line.");
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${outDir}/entry.txt`);
