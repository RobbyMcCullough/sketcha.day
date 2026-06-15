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
2. Build each tutorial frame by progressively revealing that same drawing.
3. Create the finished sketch from the master construction, preserving its pose
   and proportions.
4. Perform a draw-through test: follow only the written steps and confirm that a
   person could reasonably arrive at the published finish.
5. Reject and regenerate any finish that upgrades the anatomy, detail, pose, or
   rendering beyond what the tutorial teaches.

## Daily Automation Routine

When this guide is used by a scheduled Codex automation, the job should:

1. Read `AGENTS.md`, `HUMANS.md`, and this file before editing.
2. Pick one specific lesson subject with a clear search phrase, such as
   "how to draw a rainy-day frog" or "how to draw a cozy mushroom."
3. Create or update generated raster art for the finished sketch and tutorial
   steps. Prefer one master reference and derived step frames over unrelated
   one-off images.
4. Add the lesson data to `scripts/build-tutorials.mjs` using the next day
   number and the intended publish date.
5. Run `node scripts/build-tutorials.mjs`.
6. QA the homepage, `library.html`, and the new tutorial page at desktop and
   mobile widths.
7. Commit the work with a concise message only when the page passes the
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

## Artwork Pipeline

- Use image generation or image editing for the finished raster sketch unless a
  human artist supplies the final drawing.
- Treat generated art as a directed master reference, not as an independent
  decorative image. Regenerate it until the pose, materials, detail level, and
  looseness match the lesson.
- Derive every tutorial frame from that same master drawing. Prefer image
  editing, layer removal, or traced construction overlays over separately
  prompting each step, which causes pose and proportion drift.
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

- Use 5-8 cumulative steps.
- Keep the subject in the same position and scale in every frame.
- Each step must make one visible, describable change.
- Write specific spatial instructions: where a line starts, where it ends, and
  what existing shape guides it.
- Include practical checks for proportion, alignment, pressure, or stopping.
- Do not hide a major difficulty inside phrases such as "add details" or
  "refine the drawing."

## Anti-Slop Review

Before publishing, check:

- Does the page contain real instruction rather than encouragement alone?
- Does the finish visibly match the steps?
- Is the copy specific to this subject and pose?
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
