import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Loading Screen Gold: A Tip in 200 Characters.
// One line, a loading-screen tip for stressed developers and AI coding
// agents. Written deterministically to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output/entry.txt) with no trailing newline.
const LINE =
  "Tip: the bug is never in the file you're staring at. It's in the one you changed five minutes ago.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
