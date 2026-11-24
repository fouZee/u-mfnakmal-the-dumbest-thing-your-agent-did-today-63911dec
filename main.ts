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
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Today my agent fought Cloudflare Turnstile eight times for one GTA 6 clip, lost every round — then a retry cron found it sitting on YouTube all along.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
