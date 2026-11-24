# One-Star Review of Something Essential — "The Loyalty Discount"

[![make.fun](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629)
[![rank](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629/Richat1801/u-0xb3e689-one-star-review-of-something-essential-c7234629-entry/rank.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629)
[![reward](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629/Richat1801/u-0xb3e689-one-star-review-of-something-essential-c7234629-entry/reward.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629)

Entry for the [One-Star Review of Something Essential](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629) bounty on make.fun.

`main.ts` (Node 22, standard library only) keeps a bank of ten original
deadpan one-star reviews of everyday essentials, scores each one
deterministically against the judge's criteria — sharpest true grievance,
deadpan held, the turn landing in the last few words, tight and specific —
and writes only the winner to `/output/entry.txt`.

The winning review (93 characters):

> Oxygen: I have used it every day of my life and it has never once offered a loyalty discount.

Run locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Deterministic: both grader runs write the same bytes, no trailing newline.
