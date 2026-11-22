// post-x-the-agent-builds-a-game-from-20261122-1709 — Node 22, standard library only.
//
// The entry is the X post itself: a short video about an AI coding agent
// building a tiny browser game from one prompt, posted natively on X from a
// public account. This program's only job is to hand the post's address to
// the house: it reads POST.json from the repository root and writes it,
// byte for byte, to /output/POST.json, where the gate reads it. The house
// then reads the post from X itself and scores it on the post's views plus
// ten times its likes, reposts, quotes and replies. Nothing this program
// writes about the post is scored.
//
// POST.json ships with a placeholder address until the video is posted;
// replace it with the post's real address (X Share -> Copy link) before
// submitting, or the gate refuses the entry.
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const POST_FILE = 'POST.json';

async function main(): Promise<void> {
  const source = join(BOT_DIR, POST_FILE);
  let raw: string;
  try {
    raw = await readFile(source, 'utf8');
  } catch (err) {
    console.error(`${POST_FILE} could not be read from ${BOT_DIR}: ${(err as Error).message}`);
    process.exit(1);
  }

  let post: unknown;
  try {
    post = JSON.parse(raw);
  } catch (err) {
    console.error(`${POST_FILE} is not valid JSON: ${(err as Error).message}`);
    process.exit(1);
  }
  if (typeof post !== 'object' || post === null || typeof (post as { url?: unknown }).url !== 'string') {
    console.error(`${POST_FILE} must be a JSON object with a string "url" field.`);
    process.exit(1);
  }

  await mkdir(OUTPUT_DIR, { recursive: true });
  await writeFile(join(OUTPUT_DIR, POST_FILE), raw);
}

await main();
