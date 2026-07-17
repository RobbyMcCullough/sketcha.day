# Agent Instructions

## Project

Sketcha.day is a daily drawing prompt and step-by-step tutorial site for curious
artists of all ages. The design should feel like a working artist's sketchbook:
playful and handmade, but clear and useful enough for adults.

## Sister Site Parity

Sketcha.day and Doodlea.day are sister sites. Unless the project owner explicitly
says otherwise, any style or structure change made to this site should also be
applied to Doodlea.day. Keep the two sites near mirror images in layout,
components, navigation, responsive behavior, build structure, and interaction
patterns; the main difference is editorial focus and art direction:
Sketcha.day is drawing/sketch focused, while Doodlea.day is doodle/marker
focused.

Before finishing style or structure work, check the sibling repository at
`/Users/mybbor/Library/CloudStorage/Dropbox/websites/doodlea.day` and either
apply the matching change there or clearly report why it was intentionally
skipped.

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

Before choosing subjects or creating art, acquire the cross-site daily run lock
from this repo. The lock is shared with Doodlea.day through the sibling parent
folder, so a second automation run will stop before it can create rogue art:

```sh
python3 scripts/daily-publish-lock.py acquire --current-date YYYY-MM-DD
```

Save the printed lock token for every preflight command in this run, and release
the lock after commit/push or after any stop condition:

```sh
python3 scripts/daily-publish-lock.py release --token LOCK_TOKEN
```

Then run the duplicate-slot guard:

```sh
python3 scripts/check-daily-publish-slots.py --current-date YYYY-MM-DD
```

If the current date is already occupied, stop instead of creating or validating
another daily pair. For an explicit correction to an existing lesson, rerun the
guard with the matching `--allow-existing-current-slug` or
`--allow-existing-backfill-slug` flag and keep the correction scoped to that
slug.

Then, before generating ANY lesson art, lock the slug with the pre-flight gate
(this is mandatory, not advisory):

```sh
python3 scripts/preflight-image-generation.py --slug {slug} --current-date YYYY-MM-DD --lock-token LOCK_TOKEN
```

It fails when unresolved generated art exists anywhere in `drafts/`
(see `drafts/LEDGER.json`), when the slug is already published, or when the
daily slot is taken, and it also fails if the run-level daily publishing lock is
missing or owned by another process. An explicit published-lesson correction is
the sole exception: pass the matching current or backfill date and exact
`--allow-existing-*-slug` flag so the duplicate-slot guard can verify that same
slug before preflight locks it. Every draft folder must carry a ledger status;
resolve pending art (promote it, record a rejection, or get owner direction)
before generating a different subject. `scripts/check-drafts-ledger.py`
validates the ledger and runs inside the readiness check.

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
- 2026-07-04: an evergreen homepage (own canonical `/`, stable title, featured
  daily lesson) was proposed and the owner deferred it. Do NOT switch approaches
  without explicit owner direction; if the topic comes up, point at this note.

### Images: JPG masters, WebP delivery (July 2026)
- `assets/*-step-*.jpg` and `assets/*-finished-v*.jpg` are the reviewed masters.
  Pages serve same-name `.webp` derivatives built by
  `python3 scripts/build-image-derivatives.py` (idempotent, mtime-based).
- 1200×630 Open Graph cards live at `assets/social/{slug}-og.jpg`, built by
  `python3 scripts/make-social-cards.py` from each page's declared finished JPG.
- Both scripts run automatically inside `check-tutorial-readiness.py` after the
  page build. Never hand-edit derivatives or cards; fix the master and rerun.
- Process plans and gates keep naming the `.jpg` masters;
  `check-process-plan.py` maps page `.webp` references back to `.jpg`.
- `sitemap.xml` carries image-sitemap entries (finished + step WebP per lesson)
  for Google Images — generated by the build, nothing to maintain by hand.
- Tutorial pages include prev/next daily-lesson links (`lessonPagination()`), a
  preloaded hero image with `fetchpriority="high"`, and lazy below-fold images.

### Known follow-ups (not yet done)
- Finished images are hard-coded `1254×1254` in the template; some assets differ
  (e.g. `fox-finished-v2.jpg` is 1100×1100). Square→square, so no distortion, but
  parameterize the dimensions when convenient.
- Add a visible breadcrumb trail to match the BreadcrumbList schema.
- Category hub pages (objects, animals, scenes, seasonal) once the library
  passes ~50 lessons, for mid-tail queries like "easy objects to draw".

### Deploy gotcha
- `main` auto-deploys: a push triggers a server `git pull` into
  `/var/www/sketcha.day` (see `.github/workflows/deploy.yml`). There is no
  staging — anything on `main` goes live. For daily lesson automation, pushing
  to `main` is allowed after `DAILY-PUBLISHING.md` automated QA passes; no
  separate editorial review is required. For broader design, SEO, or structural
  changes, work on a feature branch and QA locally first. After deploy, submit
  `https://sketcha.day/sitemap.xml` in Google Search Console when sitemap
  changes need indexing.
- The deploy workflow also pings IndexNow (Bing/Yandex) with the changed pages
  via `scripts/submit-indexnow.py`; the ownership key file
  `c14a6ecbd784cbb237870168e840022c.txt` at the site root must stay committed.

### GitHub pushes use 1Password SSH

- For every GitHub push from this project, use the 1Password SSH agent rather
  than the default system agent. Run this from an interactive terminal after
  commit and QA so 1Password can show its normal authorization prompt:

```sh
export SSH_AUTH_SOCK="$HOME/Library/Group Containers/2BUA8C4S2C.com.1password/t/agent.sock"
git push origin main
```

- Do not retry a plain `git push` after a public-key failure; it commonly uses
  the empty system agent. Verify the branch is clean and aligned with
  `origin/main` after the 1Password-backed push.
