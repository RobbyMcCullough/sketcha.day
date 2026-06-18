# Daily Publishing Guide

This document is the quality contract for any automation that creates or
publishes a Sketcha.day lesson.

## Non-Negotiable Principle

The tutorial must convincingly produce the finished drawing.

Treat the finished drawing and the instructional steps as one artifact, not as
separate images about the same subject. Every important contour, proportion,
pose, marking, and color choice in the finish must appear in a prior step.

## Required Workflow

1. Choose one clear pose and make a simple master construction drawing.
2. Back-check the candidate against the existing archive before making art.
   Reject near-duplicates in subject, silhouette, and drawing problem, even when
   the wording is technically different. For example, a flower bud is too close
   to the existing sprouting seed lesson unless the new lesson teaches a clearly
   different form, pose, or skill.
3. Build each tutorial frame by progressively revealing that same drawing.
4. Create the finished sketch from the master construction, preserving its pose
   and proportions.
5. Perform a draw-through test: follow only the written steps and confirm that a
   person could reasonably arrive at the published finish.
6. Reject and regenerate any finish that upgrades the anatomy, detail, pose, or
   rendering beyond what the tutorial teaches.

## Daily Automation Routine

When this guide is used by a scheduled Codex automation, the job should:

1. Read `AGENTS.md`, `HUMANS.md`, and this file before editing.
2. Pick one specific lesson subject with a clear search phrase, such as
   "how to draw a rainy-day frog" or "how to draw a cozy mushroom."
3. Compare the candidate with existing lessons in `scripts/build-tutorials.mjs`
   and `library.html`; choose a different subject if it repeats a recent lesson's
   core shape, category, or drawing skill.
4. Create or update generated raster art for the finished sketch and tutorial
   steps. Prefer one master reference and derived step frames over unrelated
   one-off images.
5. Run the step-delta gate for the lesson slug and inspect the contact sheet so
   repeated or barely changed frames are caught before page QA.
6. Rate the final image using the 10-point gate below. Regenerate until the
   finished image is at least 8/10.
7. Add the lesson data to `scripts/build-tutorials.mjs` using the next day
   number and the intended publish date.
8. Run `node scripts/build-tutorials.mjs`.
9. QA the homepage, `library.html`, and the new tutorial page at desktop and
   mobile widths.
10. Commit the work with a concise message only when the page passes the
   anti-slop review and validation checks.

For pre-launch backfilling, backdated tutorial pages are acceptable. Keep that
implementation detail out of public copy: do not imply real historical traffic,
community participation, comments, or popularity.

## Finished Art Direction

- Aim for a believable 15-30 minute sketch, not a polished illustration.
- Keep visible graphite, imperfect joins, doubled lines, erasures, and paper.
- Use color sparingly. Do not fill every area or render every strand of fur.
- Avoid photographic anatomy, glossy eyes, digital airbrushing, smooth
  gradients, cinematic lighting, and generic beige AI-image grading.
- The finished drawing should feel attainable immediately after step five.
- Use the rainy-day frog lesson as the current quality benchmark: playful,
  readable at thumbnail size, detailed enough to have character, but still
  attainable for a casual sketcher.
- Process alignment is not enough by itself. The published finish must still
  look like the reviewed artwork at hero size and card size: confident contours,
  visible restrained color when color is promised, and enough rendering to feel
  complete.
- Reject placeholder-looking finals even when their steps line up. A rough local
  construction sketch, jagged tracing, or barely colored process frame is not a
  substitute for a finished raster sketch.

## Final Image Rating Gate

Before a lesson can be committed or published, rate the finished image on a
10-point scale. The image must score at least 8/10. If it scores below 8,
regenerate or redesign the finish before continuing.

Score the image against these criteria:

- Subject readability: the subject is immediately recognizable, even at card
  size.
- Character and appeal: the drawing has a clear pose, mood, and visual charm.
- Sketch quality: lines look intentionally handmade, not scratchy, noisy,
  traced, or mechanically jittered.
- Tutorial fit: the finish looks achievable from the visible steps and written
  instructions.
- Composition: props, ground shapes, leaves, backgrounds, and supporting
  elements help the subject instead of adding clutter.
- Difficulty balance: the result feels fun and substantial, not too empty and
  not so detailed that the lesson becomes discouraging.

Reject images with unclear silhouettes, chicken-scratch texture, warped anatomy,
weak supporting objects, muddy color, fake paper texture pasted over digital
line art, or any finish that looks worse than the rainy-day frog benchmark.
Do not rationalize a 6/10 or 7/10 image because the page is otherwise useful.

## Artwork Pipeline

- Use image generation or image editing for the finished raster sketch unless a
  human artist supplies the final drawing.
- A `.jpg` or `.png` file is not enough by itself. Do not create "raster"
  lesson art by drawing clean SVG, canvas, or other programmatic vector shapes
  and exporting them as image files.
- Treat generated art as a directed master reference, not as an independent
  decorative image. Regenerate it until the pose, materials, detail level, and
  looseness match the lesson.
- Derive every tutorial frame from that same master drawing. Prefer image
  editing, layer removal, or traced construction overlays over separately
  prompting each step, which causes pose and proportion drift.
- If image generation or image editing is unavailable during an automation run,
  stop and report that blocker instead of substituting synthetic vector art.
- If the image tool produces only an inline preview and no image file can be
  moved or copied into `assets/`, treat image generation as unavailable. Do not
  recreate the preview manually with PIL, canvas, SVG, or other programmatic
  drawing just to finish the run.
- The file committed under `assets/` must be the reviewed master artwork or a
  faithful edited derivative. Score the actual saved asset, not a nicer preview
  that is not in the repository.
- SVG is appropriate for construction guides, arrows, annotations, UI marks,
  and simple overlays. Do not use clean SVG line art as the default finished
  sketch unless that vector look is the deliberate subject of the lesson.
- Export visible tutorial frames as textured raster images when bare vector
  geometry makes the lesson feel diagrammatic or sterile.
- Store lesson art in `assets/` with predictable names:
  `{slug}-finished-v{n}.jpg` and `{slug}-step-1.jpg`,
  `{slug}-step-2.jpg`, and so on.
- Do not publish a step frame that contradicts the final sketch's pose,
  silhouette, props, or major proportions.

## Tutorial Standards

- Use the number of cumulative steps the subject needs. Five to eight is a
  normal range, but fewer stronger frames are better than over-splitting a
  simple drawing into nearly identical images.
- Keep the subject in the same position and scale in every frame.
- Each step must make one visible, describable change.
- Do not publish adjacent frames where the only difference is a faint line,
  tiny handle, or low-contrast texture that a visitor will miss at card size.
  Combine small actions into one clearer step when needed.
- Write specific spatial instructions: where a line starts, where it ends, and
  what existing shape guides it.
- Include practical checks for proportion, alignment, pressure, or stopping.
- Do not hide a major difficulty inside phrases such as "add details" or
  "refine the drawing."

## Step-Delta Gate

Every published lesson with step images must pass a visible-progress check:

```sh
python3 scripts/check-step-deltas.py {slug} --contact-sheet /tmp/{slug}-steps.jpg
```

Review the generated contact sheet at the same time. The script fails exact or
near-duplicate frames by measuring adjacent image differences, but it is only a
guardrail. A passing number does not override visual judgment: reject any frame
that reads unchanged, jumps too far ahead, or shows a detail before the written
step introduces it.

## Anti-Slop Review

Before publishing, check:

- Is this subject meaningfully different from recent archive lessons in shape,
  category, and drawing problem?
- Does the page contain real instruction rather than encouragement alone?
- Does the finish visibly match the steps?
- Does each adjacent step frame visibly change at thumbnail size?
- Does the actual saved finish match the approved/reference preview in quality,
  line confidence, color, and completeness?
- Is the copy specific to this subject and pose?
- Does the finish visibly contain the color, props, markings, and mood promised
  by the title, alt text, materials, and step copy?
- Are visual imperfections varied and purposeful rather than decorative effects
  repeated by formula?
- Is there any invented archive depth, fake activity, or unsupported claim?
- Does the page show enough process that a visitor can trust how it was made?
- Would the lesson still be useful if the generated finish were removed?

If any answer is no, the lesson is not ready.

## Page Requirements

- Descriptive page title, meta description, canonical URL, and publish date
- One H1 containing the subject's primary "how to draw" search phrase
- Valid `HowTo` structured data matching the visible instructions
- Honest difficulty and time estimate
- Materials without affiliate links until the business chooses to add them
- Useful alt text that describes the actual drawing
- Related lessons only when those pages really exist
- Add interactions only when they help someone complete or understand the
  lesson. Avoid confetti, completion celebrations, or other novelty effects
  that do not add instructional value.
- Keep `lab.html` private for experiments: no public nav links, no library
  cards, and a `noindex, nofollow` robots meta tag.

## Automation QA

The automation must render desktop and mobile screenshots before publishing.
Check the hero, every tutorial frame, the finish, materials, navigation, and
structured data. Do not publish when assets are missing, text overflows, links
are placeholders, or the finished image fails the draw-through test.

Minimum validation commands:

```sh
node scripts/build-tutorials.mjs
python3 scripts/check-step-deltas.py {slug} --contact-sheet /tmp/{slug}-steps.jpg
```

Then inspect the Cove-served local site:

- `https://sketcha.localhost/`
- `https://sketcha.localhost/library.html`
- `https://sketcha.localhost/tutorials/{slug}.html`

If Cove is not running or `https://sketcha.localhost/` is unreachable, use this
fallback:

```sh
python3 -m http.server 4173
```

Then inspect:

- `http://localhost:4173/`
- `http://localhost:4173/library.html`
- `http://localhost:4173/tutorials/{slug}.html`

Also run:

```sh
git diff --check
```
