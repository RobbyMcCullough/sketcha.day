# Agent Instructions

## Project

Sketcha.day is a daily drawing prompt and step-by-step tutorial site for curious
artists of all ages. The design should feel like a working artist's sketchbook:
playful and handmade, but clear and useful enough for adults.

## Local Development

This prototype is dependency-free. The local site is normally served by Cove at:

```text
https://sketcha.localhost/
```

Use that URL for browser QA when it is available. Do not start a separate server
unless `https://sketcha.localhost/` is unreachable.

```sh
python3 -m http.server 4173
```

Then open `http://localhost:4173` as the fallback preview URL.

The homepage, archive tutorial pages, and `library.html` are generated from
`scripts/build-tutorials.mjs`:

```sh
node scripts/build-tutorials.mjs
```

## Daily Automation Entry Point

For daily lesson work, read these files in order:

1. `AGENTS.md`
2. `HUMANS.md`
3. `DAILY-PUBLISHING.md`

Then update the lesson data in `scripts/build-tutorials.mjs`, create any new
assets under `assets/`, run the generator, QA the homepage plus changed pages,
and commit the work only after the lesson passes the quality gates in
`DAILY-PUBLISHING.md`. Daily lesson automation may publish without a separate
editorial review once those gates pass.

## Conventions

- Read `DAILY-PUBLISHING.md` before creating or changing a daily lesson.
- Rebuild generated archive pages after changing their lesson data.
- Keep daily tutorial pages useful without JavaScript.
- Treat accessibility, responsive layout, and semantic HTML as requirements.
- Use descriptive tutorial titles and copy suitable for search results.
- Emit JSON-LD as a single `@graph` per page (see "Build Internals & SEO").
  Tutorials carry `HowTo` + `BreadcrumbList`; never put `HowTo` on the homepage.
- Prefer generated or human-made raster sketches for finished lesson art.
- Reserve hand-drawn SVG/CSS for construction guides, annotations, and UI
  details unless a vector finish is an intentional art direction. In the
  generator, supply step construction guides via a step's `svg` field (not the
  legacy, unrendered `art` field).
- Do not add affiliate links until the project is ready for them.
- Keep `lab.html` unlinked from public navigation and marked `noindex` unless
  the project owner explicitly changes that strategy.
- Keep the launch archive honest on the page itself: backdated tutorials are
  allowed, but do not invent fake user activity, comments, popularity, or
  unsupported claims.
- Use the same labels consistently across the site: difficulty, estimated time,
  and practical category tags such as cartoon-like, detailed study, scene, and
  place.

## Content Model

Each daily lesson should eventually include:

- SEO title, description, canonical URL, and publish date
- A specific subject and finished reference drawing
- 5-8 practical drawing steps
- Materials list with no affiliate links at launch
- Difficulty, estimated time, and useful drawing tips
- Links to related lessons and the archive

## Build Internals & SEO (handoff, June 2026)

`scripts/build-tutorials.mjs` is the single source of truth. Each run regenerates
every tutorial page, `index.html`, `library.html`, `feed.xml`, `sitemap.xml`, and
`robots.txt`. Rebuild and commit these together; never hand-edit generated files.

### Lessons data
- The `lessons` array owns ALL tutorial pages (currently 14). The old separate
  `currentLesson` stub was removed — it excluded `curious-fox` from the build and
  let that page drift out of sync (the old "built 12, but 13 exist" mismatch). Add
  new lessons to `lessons`; do not reintroduce one-off pages outside the array.
- `archiveLessons` is `[...lessons]` sorted newest-first. `latestLesson` (newest
  by `isoDate`) drives the homepage.

### Step art: `svg` vs legacy `art`
- A step renders in this priority: `step.image` (finished image) → `step.svg`
  (inline hand-drawn SVG construction guide) → raster photo at
  `assets/<slug>-step-<n>.jpg`.
- Use `step.svg` for SVG construction guides (see `curious-fox`).
- `curious-fox` is now a generated lesson but remains an intentional entry in
  `lesson-plans/exceptions.json` (SVG guides, no raster step frames, no
  lesson-plan). Keep that exception until/unless it gets a raster process plan;
  removing it will fail the readiness checks.
- Every other lesson still carries an `art:` field the template does NOT render —
  dead data from an earlier SVG-based version. Don't rely on it; safe to delete in
  a future cleanup.

### Structured data (JSON-LD)
- Each page emits ONE `<script type="application/ld+json">` containing an `@graph`.
  Shared `orgNode` (Organization) and `siteNode` (WebSite) are referenced by `@id`.
- Tutorials: Organization + WebSite + HowTo + BreadcrumbList. HowTo carries
  `author`/`publisher` (the Sketcha.day Organization — do NOT invent a person),
  `datePublished`, and `dateModified` (`lesson.updated || lesson.isoDate`; set
  `updated` only when a lesson is materially revised).
- Library: Organization + WebSite + ItemList + BreadcrumbList. Homepage:
  Organization + WebSite only.
- Google deprecated `HowTo` rich results (2023); kept for semantics, but it no
  longer earns a SERP feature.

### Homepage canonical (Approach B)
- The homepage reuses today's full lesson, but its `canonical`/`og:url` point to
  the tutorial URL (NOT `/`) and its HowTo graph is swapped for WebSite +
  Organization. This makes the tutorial the indexed copy and stops the homepage
  cannibalizing the newest lesson. Preserve this in `homePage()`.

### Known follow-ups (not yet done)
- Finished images are hard-coded `1254×1254` in the template; some assets differ
  (e.g. `fox-finished-v2.jpg` is 1100×1100). Square→square, so no distortion, but
  parameterize the dimensions when convenient.
- Step-image `loading`/dimension attributes are inconsistent. The hero/finished
  image should be eager + high `fetchpriority`; below-fold images lazy.
- Add a visible breadcrumb trail to match the BreadcrumbList schema.

### Deploy gotcha
- `main` auto-deploys: a push triggers a server `git pull` into
  `/var/www/sketcha.day` (see `.github/workflows/deploy.yml`). There is no
  staging — anything on `main` goes live. For daily lesson automation, pushing
  to `main` is allowed after `DAILY-PUBLISHING.md` automated QA passes; no
  separate editorial review is required. For broader design, SEO, or structural
  changes, work on a feature branch and QA locally first. After deploy, submit
  `https://sketcha.day/sitemap.xml` in Google Search Console when sitemap
  changes need indexing.
