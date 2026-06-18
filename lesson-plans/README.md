# Lesson Process Plans

Each published daily tutorial should have a process plan before it is treated as
ready. The plan is the bridge between the finished raster sketch, the tutorial
frames, and the written steps.

Use `lesson-plans/{slug}.json` for the active lesson. Keep it short and
concrete:

- `slug`: lesson slug from `scripts/build-tutorials.mjs`
- `finished`: saved finished raster asset in `assets/`
- `source`: how the master raster was obtained
- `process_strategy`: how the frames were derived from the same drawing
- `final_elements`: the major visible contours, props, markings, and color
  decisions in the finished sketch, each with the non-final step where it first
  appears
- `frames`: the non-final tutorial frames, in order, with each frame's image
  asset, visible job, written step name, and `introduces` list
- `final_step`: the final published image step and its visible job
- `rejection_checks`: lesson-specific failure modes to check during review

The plan should describe visible drawing decisions, not vague encouragement.
For example, "adds the C-shaped handle and rim keeper lines" is useful;
"improves the drawing" is not.

Use `lesson-plans/TEMPLATE.json` when starting a new lesson. Fill
`final_elements` before generating or editing the finished sketch. The final
frame should not introduce new structure; use `final_step.allowed_changes` only
for keeper-line darkening, restrained shading, texture, or color that clarifies
elements already visible in earlier frames.

Validate a plan with:

```sh
python3 scripts/check-process-plan.py {slug}
```

For full pre-publish QA, run:

```sh
python3 scripts/check-tutorial-readiness.py {slug}
```

The readiness command runs the process-plan check, writes the step-delta contact
sheet, verifies generated HTML, probes local links/assets, and runs the
whitespace diff check. The plan proves the sequence is intentional; the
step-delta check proves adjacent frames are not near-duplicates.

Every public tutorial should either have a matching `lesson-plans/{slug}.json`
or be listed in `lesson-plans/exceptions.json` with a concrete reason. New daily
lessons should not use exceptions; an exception is only for preserving a legacy
prototype page until it can be rebuilt with raster process frames.
