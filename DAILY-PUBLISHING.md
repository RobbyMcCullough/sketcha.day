# Daily Publishing Guide

This document is the quality contract for any automation that creates or
publishes a Sketcha.day lesson.

## Non-Negotiable Principle

The tutorial must convincingly produce the finished drawing.

Treat the finished drawing and the instructional steps as one artifact, not as
separate images about the same subject. Every important contour, proportion,
pose, marking, and color choice in the finish must appear in a prior step.

Late-stage actions must work only on elements that are already present. A frame
that darkens, inks, shades, colors, fills, cleans, or clarifies a shape may not
be the first frame where that shape appears. If a later step says to darken an
outline, every major contour being darkened must already be visible in an
earlier process frame.

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
2. Until the owner says otherwise, create two Sketcha.day tutorials per run:
   one new current daily tutorial and one honest backdated archive tutorial.
   Coordinate with the Doodlea.day sister track, which should also create one
   current daily tutorial and one backdated tutorial in the same run. Keep
   backdated lessons honest in public copy: no invented traffic, comments,
   popularity, or fake community activity.
3. Before choosing subjects or making art, run the duplicate-slot guard:

```sh
python3 scripts/check-daily-publish-slots.py --current-date YYYY-MM-DD
```

   If the current date is already occupied, stop. Do not validate, replace, or
   add another same-day pair unless the owner explicitly asked for a correction.
   For a correction, rerun the guard with the matching
   `--allow-existing-current-slug` or `--allow-existing-backfill-slug` flag and
   keep the work scoped to that existing slug.
4. Do a quick source check for timely hooks before choosing the subject:
   current news, major sports, holidays, seasons, cultural moments, and daily
   observances. Use a timely subject only when it naturally fits Sketcha.day,
   can be taught as an attainable sketch, and does not duplicate the sister
   Doodlea.day subject for the same run. Do not force a weak trend.
5. Pick one specific lesson subject with a clear search phrase, such as
   "how to draw a rainy-day frog" or "how to draw a cozy mushroom."
6. Compare the candidate with existing lessons in `scripts/build-tutorials.mjs`
   and `library.html`; choose a different subject if it repeats a recent lesson's
   core shape, category, or drawing skill.
7. Lock the exact publish slugs before generating any image by running the
   mandatory pre-flight gate for each approved slug:

```sh
python3 scripts/preflight-image-generation.py --slug {slug} --current-date YYYY-MM-DD
```

   The gate fails when unresolved generated art exists in `drafts/`
   (`drafts/LEDGER.json`), when the slug is already published, or when the
   daily slot is taken, and it records the slug lock in the ledger. A normal
   run generates art only for the locked current slug and locked backfill slug.
   Do not create speculative contact sheets, backup subjects, or alternate
   directions. If generated art ends up unused, resolve its ledger entry
   before any new generation: promote it into a validated tutorial, set a
   `rejected-quality`/`rejected-duplicate` status with a note (and mirror the
   reasoning in `HUMANS.md`), set a `scheduled` status with a `release_date`,
   or get owner direction. Prefer repairing a failed panel (see
   `PROCESS-IMAGE-WORKFLOW.md`) over replacing the whole subject; a subject
   swap after failed art is itself a rejection that must be recorded.
8. Write or update `lesson-plans/{slug}.json` before creating final page data.
   Start from `lesson-plans/TEMPLATE.json`. The plan must name the finished
   asset, each major finished element, the non-final frame where that element
   first appears, each process frame's visible job, and the final step's allowed
   finishing-only changes.
   Any frame that darkens, inks, fills, colors, shades, cleans, or clarifies
   existing parts must list those parts in `requires_prior_elements`, and each
   listed part must have an earlier `introduced_by_step`.
9. Create or update generated raster art for the finished sketch and tutorial
   steps. Prefer one master reference and derived step frames over unrelated
   one-off images.
10. Run the process-plan and step-delta gates for the lesson slug, then inspect
   the contact sheet so repeated or barely changed frames are caught before page
   QA.
11. Rate the final image using the 10-point gate below. Regenerate until the
   finished image is at least 8/10.
12. Add the lesson data to `scripts/build-tutorials.mjs` using the next day
   number and the intended publish date.
13. Run `node scripts/build-tutorials.mjs`, then build the delivery images:
   `python3 scripts/build-image-derivatives.py` (WebP served by pages; the
   JPGs stay as reviewed masters) and `python3 scripts/make-social-cards.py`
   (1200x630 Open Graph cards). Both are idempotent and also run inside the
   readiness check. Commit the derivatives and card together with the lesson.
14. QA the homepage, `library.html`, and the new tutorial page at desktop and
   mobile widths.
15. Rate the rendered page layout using the 10-point gate below. Do not publish
    unless the layout scores at least 8/10.
16. Commit the work with a concise message only when the page passes the
   anti-slop review and validation checks.
17. For scheduled daily lesson automation, push the passing commit to `main` so
    it publishes. No separate editorial review is required after the automated
    quality gates pass.

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

## Page Layout Rating Gate

Before a lesson can be committed or published, rate the rendered homepage and
tutorial page layout on a 10-point scale at desktop and mobile widths. The page
layout must score at least 8/10. If it scores below 8, fix the layout or
headline data before continuing.

Score the layout against these criteria:

- The hero heading is readable and intentional at both breakpoints.
- No line breaks after a single letter or stranded article such as "a".
- Manual headline lines do not wrap internally; reduce the headline line size
  or choose a better `headlineSubject` break instead.
- The marker underline lands under a real word, not under whitespace,
  punctuation, or a weak connector such as "on", "in", "of", or "a".
- The hero art, CTA, date, time, difficulty, and intro sit in a balanced
  composition without overlap or awkward empty space.
- The page has no horizontal overflow, clipped headline text, broken navigation,
  missing images, or obvious mobile crowding.

Reject pages with broken display type, lonely one-character lines, underlines
that miss the intended word, image/card collisions, clipped hero art, or any
layout that makes the lesson feel less polished than the current site standard.

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
- If the image tool produces only an inline preview and no file appears under
  `~/.codex/generated_images`, first try to extract the same built-in image
  output from the Codex session transcript:
  `python3 scripts/extract-codex-imagegen.py --list`, then
  `python3 scripts/extract-codex-imagegen.py --prompt-contains "{subject phrase}" --out assets/{slug}-finished-v{n}.png`.
  This is still the generated raster output from the built-in tool. If session
  extraction fails too, treat image generation as unavailable. Do not recreate
  the preview manually with PIL, canvas, SVG, or other programmatic drawing just
  to finish the run.
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
- Treat each tutorial as a helpful route, not the only correct route. The page
  should teach structure clearly while still inviting artists to change small
  details, proportions, colors, textures, expressions, settings, and line
  choices when those changes keep the subject readable.
- Include creative-permission language naturally in some lesson intros, tips, or
  closing steps. Avoid sounding apologetic or vague: make it clear that the
  steps are recommendations for learning the form, and that personal variation
  is part of drawing.
- Include practical art technique in the written steps and tips, not only
  object assembly. Each new lesson should teach at least one transferable skill
  that helps the reader draw better next time: ghosting a long curve or straight
  line before touching the pencil down, using light construction passes before
  keeper lines, rotating the page for a cleaner stroke, checking negative
  spaces, comparing angles, varying pressure, simplifying a contour into
  larger arcs, or stopping before shading muddies the form.
- Technique advice must be actionable and tied to the current step. Prefer
  specific coaching such as "ghost the handle curve two or three times, then
  draw it in one relaxed pass" or "squint and compare the empty space between
  the wheels" over generic encouragement like "take your time" or "add
  details."
- Keep the subject in the same position and scale in every frame.
- Each step must make one visible, describable change.
- A refinement step cannot introduce the feature it refines. Do not let a
  darkening, inking, fill, color, shading, cleanup, or clarification step be
  the first appearance of a major contour, prop, marking, or color area.
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
python3 scripts/check-process-plan.py {slug}
python3 scripts/check-step-deltas.py {slug} --contact-sheet /tmp/{slug}-steps.jpg
```

The process-plan check verifies that `lesson-plans/{slug}.json`, generated page
step names, step image files, and the finished asset agree. It catches a common
failure mode where the text says one thing, the image sequence does another, and
the final drawing comes from a third source.

It also checks element coverage: every major visible finished element listed in
`final_elements` must first appear in a non-final frame's `introduces` list. The
final image step must be limited to `final_step.allowed_changes`, such as
keeper-line darkening or restrained shading. If the final step introduces a new
prop, contour, marking, setting detail, or core color decision, the lesson is
not ready.

Missing plans or missing step frames are failures unless the tutorial is a
documented legacy exception in `lesson-plans/exceptions.json`. Do not add new
daily lessons to that exception file; rebuild the lesson instead.

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
structured data. Rate the rendered layout and keep the score at 8/10 or higher.
Do not publish when assets are missing, text overflows, links are placeholders,
headlines break after a single character, marker underlines miss the target
word, or the finished image fails the draw-through test.

Daily lesson publishing is approval-free once this QA passes. The automation
should still stop instead of publishing when image generation is unavailable, the
contact sheet fails process review, the finished image scores below 8/10, or any
validation command fails.

Minimum validation commands:

```sh
python3 scripts/check-tutorial-readiness.py {slug}
```

That command rebuilds generated pages, refreshes WebP derivatives and social
cards, validates the drafts ledger, checks the process plan, writes a
step-frame contact sheet, checks adjacent step deltas, validates JSON-LD and lab
privacy, probes local internal links/assets, and runs `git diff --check`.

After a lesson publishes, its `drafts/LEDGER.json` entry must read
`published`. The next run's pre-flight heals this automatically when the
tutorial page exists, but do not rely on that to skip the ledger update when
closing out a run.

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
