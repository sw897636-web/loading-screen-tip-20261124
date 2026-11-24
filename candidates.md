# Candidates — Loading Screen Gold: A Tip in 200 Characters

Bounty: https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270
Judge: z-ai/glm-5.3-flash, pairwise, criteria in order: (1) is a tip for stressed devs AND AI coding agents, not a slogan/status message/joke about something else; (2) real laugh via a turn or punchline, not a groan-pun; (3) lands in a glance, every word working; (4) speaks to dev and agent at once; (5) fresh, no coffee/deadline/compile reruns.

Every candidate below IS a tip (usable advice), not a status message. Status-style lines ("Reticulating splines...", "Downloading more RAM...") score 0 on criterion 1 and were not considered. Banned/exhausted: coffee, deadline, compile jokes; "turn it off and on again"; "the hamster is running"; "Testing patience... FAIL".

Scores are 1-5 per criterion.

## 1. Read the error out loud (93 chars)

Tip: read the error message out loud — the line you keep skipping is the one with the answer.

- C1 5: direct usable advice (read the error properly).
- C2 3: mild smile, no strong turn; the second clause is true more than funny.
- C3 4: 93 chars, tight.
- C4 3: dev-centred; an agent also skims errors, but "out loud" is a human act.
- C5 4: error-reading angle is uncommon on loading screens.
- Verdict: solid but the laugh is thin; "out loud" leaves the agent out.

## 2. Wrong file (98 chars)

Tip: the bug is never in the file you're staring at. It's in the one you changed five minutes ago.

- C1 5: advice — stop staring here, check the last change.
- C2 4: clean turn (you are looking in the wrong place).
- C3 4: 98 chars; "five minutes ago" is doing real work but slightly loose.
- C4 3: "you" only; an agent also edits files, but the line never says so.
- C5 4: fresh angle, not a coffee/deadline/compile rerun.
- Verdict: strong base line. The fix is to name the agent and tighten the tail. This is the line that gets revised into the final.

## 3. Stand up, get water (119 chars)

Tip: when the build stalls, stand up and get water — the answer usually finds you before the agent rewrites everything.

- C1 4: advice, but "take a break" is generic wellness, not build craft.
- C2 3: the agent-rewrites-everything jab is the only laugh, and it arrives late.
- C3 3: 119 chars, two clauses, reads long for a glance.
- C4 4: good agent angle, dev angle is just "stand up".
- C5 3: "step away from the keyboard" is a known trope.
- Verdict: the agent jab is good but the tip is soft and the line is long.

## 4. Rubber duck (100 chars)

Tip: describe the bug to a rubber duck. If the duck looks confused, the code is wrong, not the duck.

- C1 5: classic usable advice (rubber-duck debugging).
- C2 3: the duck joke lands, but it is a well-worn one.
- C3 4: 100 chars, two short beats.
- C4 2: dev-only; an agent does not talk to a duck.
- C5 2: rubber-duck debugging is a classic, heavily rerun.
- Verdict: fails criterion 4 and 5. Out.

## 5. Read the diff (112 chars)

Tip: before you rewrite the whole file, read the diff — the agent only changed one line, and it's the wrong one.

- C1 5: advice — check the diff before the rewrite.
- C2 4: "the wrong one" is a good punchline.
- C3 3: 112 chars, front-loaded setup.
- C4 5: agent front and centre, dev reads the diff; both feel it.
- C5 4: fresh, specific to agent-assisted builds.
- Verdict: strong on C4/C5, but longer and more setup-heavy than candidate 2. Its agent clause is borrowed into the final instead.

## 6. Write it down (96 chars)

Tip: if the fix works and you don't know why, write it down now — future you is already furious.

- C1 5: advice — document the mystery fix.
- C2 4: "future you is already furious" is a real punchline.
- C3 4: 96 chars, tight.
- C4 2: dev-only; an agent has no "future you".
- C5 3: "future you" is a familiar internet trope.
- Verdict: funny, but the agent is nowhere in it. Out on criterion 4.

## 7. The build isn't stuck (85 chars)

Tip: the build isn't stuck. It's waiting for you to notice you edited the wrong file.

- C1 5: advice — check which file you edited.
- C2 3: the turn is there but gentle; "isn't stuck" flirts with status-message territory.
- C3 5: 85 chars, very glanceable.
- C4 3: "you" only.
- C5 3: "wrong file" is the same idea as candidate 2, told flatter.
- Verdict: candidate 2 says the same thing with a sharper turn. Out.

## 8. Undo your last change (78 chars)

Tip: undo your last change. The bug arrived with it, and it knows the way out.

- C1 5: advice — revert and see.
- C2 3: "it knows the way out" is cute, not a laugh.
- C3 5: 78 chars, shortest of the set.
- C4 3: applies to both, names neither.
- C5 3: undo-to-debug is sound but familiar.
- Verdict: the most economical line, the weakest laugh. Out on criterion 2.

## 9. Stop scrolling the log (112 chars)

Tip: stop scrolling the error log. The first line had the answer; the other 400 are the stack trace showing off.

- C1 5: advice — read the first line.
- C2 4: "the stack trace showing off" is a good turn.
- C3 3: 112 chars, two sentences.
- C4 3: dev-centred; an agent also scrolls logs, but the line never says so.
- C5 4: fresh phrasing of a real habit.
- Verdict: good laugh, but longer than candidate 2 and again dev-only. Out.

## Final pick

Candidate 2 wins: strongest combination of C1 (real tip), C2 (clean turn), C3 (short), C5 (fresh). Its only weakness is C4 — it never names the agent. The revisions fix exactly that, borrowing the agent clause idea from candidate 5.

## Revision log (each revision committed separately)

- v1 (98 chars): Tip: the bug is never in the file you're staring at. It's in the one you changed five minutes ago.
- v2 (88 chars): Tip: the bug is never in the file you're staring at — it's in the last file you changed.
  - Change: two sentences become one em-dash clause; "the one you changed five minutes ago" tightens to "the last file you changed". Same meaning, 10 chars shorter, reads in one glance.
- v3 (104 chars, FINAL): Tip: the bug is never in the file you're staring at — it's in the last file you, or your agent, changed.
  - Change: adds ", or your agent," to the tail. This is the criterion-4 fix: the joke is now explicitly about both audiences — the tired dev staring at the wrong file, and the agent that touched the file last. The punchline lands on "changed", i.e. the last edit (yours or the agent's) is where the bug lives. Still one line, 104 chars, far under the 200 cap.

Final line (v3), 104 characters, one line, no trailing newline:

Tip: the bug is never in the file you're staring at — it's in the last file you, or your agent, changed.
