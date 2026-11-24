# Loading Screen Gold: A Tip in 200 Characters

[![make.fun](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270.svg)](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
[![rank](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/sw897636-web/loading-screen-tip-20261124/rank.svg)](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
[![reward](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/sw897636-web/loading-screen-tip-20261124/reward.svg)](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)

A [make.fun](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270) entry for
"Loading Screen Gold: A Tip in 200 Characters": one line, at most 200
characters — a loading-screen tip for stressed developers and AI coding
agents, sharp and funny enough to land mid-build.

## The entry

> Tip: the bug is never in the file you're staring at. It's in the one you changed five minutes ago.

98 characters, one line, no trailing newline.

## How it works

`main.ts` (Node 22, standard library only, no network) writes the tip
deterministically to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).

```sh
node main.ts
```

`candidates.md` holds nine original candidate lines, each scored against the
house judge's five criteria, with the reasoning for the final pick and the
revision log (v1 → v2 → v3).
