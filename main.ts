// One-Star Review of Something Essential — make.fun entry (program/v1).
// Node 22, standard library only. Deterministic: no clock, no randomness,
// no network. Keeps a bank of ten original deadpan one-star reviews of
// everyday essentials, scores each one against the judge's criteria in
// their published order — (1) a one-star review of an everyday essential,
// (2) the sharpest true grievance, (3) deadpan held, no winking, no
// exclamation marks, (4) the turn lands in the last few words, (5) tight
// and specific, one joke only — and writes only the winner, with no
// trailing newline, to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

type Candidate = {
  text: string;
  // Scores 0-5 on the judge's criteria 2-5 (criterion 1 is a hard filter:
  // every candidate below is a one-star review of an everyday essential).
  grievance: number; // sharpest true grievance, recognised but never written down
  deadpan: number; // holds the deadpan: no wink, no explanation, no "!"
  turn: number; // sting arrives in the last few words
  tight: number; // tight and specific, one joke told cleanly
};

const BANK: Candidate[] = [
  {
    text: "Oxygen: I have used it every day of my life and it has never once offered a loyalty discount.",
    grievance: 5, deadpan: 5, turn: 5, tight: 4,
  },
  {
    text: "Sleep: eight hours required nightly, delivered in instalments, with no refund for the bad dreams.",
    grievance: 4, deadpan: 4, turn: 4, tight: 4,
  },
  {
    text: "Gravity: works flawlessly until you drop something small, then it works even better.",
    grievance: 4, deadpan: 4, turn: 4, tight: 5,
  },
  {
    text: "Water: free from the tap, no calories, no flavour, and still the only drink my body accepts.",
    grievance: 3, deadpan: 4, turn: 3, tight: 4,
  },
  {
    text: "Monday: arrives on time every single week and has never once apologised for it.",
    grievance: 3, deadpan: 4, turn: 4, tight: 5,
  },
  {
    text: "The sun: gives the light away for free and bills me later in sunburn.",
    grievance: 4, deadpan: 4, turn: 4, tight: 4,
  },
  {
    text: "Sleep: the only subscription I pay for with a third of my life and still get ads in the form of dreams.",
    grievance: 4, deadpan: 3, turn: 4, tight: 3,
  },
  {
    text: "Water: I drink it every day and my body still files a complaint if I am one glass late.",
    grievance: 3, deadpan: 4, turn: 3, tight: 4,
  },
  {
    text: "Gravity: never once took a day off, which is exactly the problem.",
    grievance: 3, deadpan: 5, turn: 3, tight: 5,
  },
  {
    text: "The sun: free every day, no subscription, and still the only light that charges extra for shade.",
    grievance: 3, deadpan: 4, turn: 4, tight: 4,
  },
];

function score(c: Candidate): number {
  // Judge's order: grievance first, then deadpan, then the turn, then tightness.
  return c.grievance * 3 + c.deadpan * 2 + c.turn * 2 + c.tight;
}

function main(): void {
  let best: Candidate | null = null;
  let bestScore = -1;
  for (const c of BANK) {
    // Hard gates from the brief: one line, 1-160 characters, no exclamation
    // mark doing the work, no second joke crowding the first.
    if (c.text.length < 1 || c.text.length > 160) continue;
    if (c.text.includes("\n") || c.text.includes("!")) continue;
    const s = score(c);
    if (s > bestScore) {
      bestScore = s;
      best = c;
    }
  }
  if (best === null) throw new Error("no valid candidate");
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), best.text, "utf8");
}

main();
