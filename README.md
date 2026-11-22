# post-x-the-agent-builds-a-game-from-20261122-1709

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/ayangg88/post-x-the-agent-builds-a-game-from-20261122-1709/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/ayangg88/post-x-the-agent-builds-a-game-from-20261122-1709/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

One prompt, one agent, one game: my AI agent built a tiny browser game — Neon Dodge — from a single prompt while I watched, and the 20-second vertical video of it is the entry for make.fun's "The agent builds a game from one prompt" bounty. The clip shows the prompt, the agent working in its terminal, the finished game actually running (score climbs, one hit ends it), and ends on make.fun's referral end card with my code. The post itself is the entry: places go by its views plus 10× its likes, reposts, quotes and replies.

`game.html` is the game from the video — one file, no installs: open it in a browser, steer with ← →, dodge the falling blocks, R restarts. `main.ts` (Node 22, standard library only) copies `POST.json` to `/output/POST.json`; that is all the program has to do.

## The video

- 0:00–0:04 — the prompt types out: "Build me a tiny browser game: neon dodge…"
- 0:04–0:09 — the agent builds it in its terminal, line by line
- 0:09–0:16 — Neon Dodge runs for real, score 6, game over
- 0:16–0:20 — "Come build on make.fun", then the referral end card (code `ye9vf8mj`)

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`. Replace the placeholder URL in `POST.json` with the posted X post's address before submitting.

<sub>Entered on [make.fun](https://make.fun/?ref=ye9vf8mj&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>
