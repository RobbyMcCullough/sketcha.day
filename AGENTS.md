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

Archive tutorial pages and `library.html` are generated from
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
assets under `assets/`, run the generator, QA the changed pages, and commit the
work only after the lesson passes the quality gates in `DAILY-PUBLISHING.md`.

## Conventions

- Read `DAILY-PUBLISHING.md` before creating or changing a daily lesson.
- Rebuild generated archive pages after changing their lesson data.
- Keep daily tutorial pages useful without JavaScript.
- Treat accessibility, responsive layout, and semantic HTML as requirements.
- Use descriptive tutorial titles and copy suitable for search results.
- Include `HowTo` structured data on tutorial pages.
- Prefer generated or human-made raster sketches for finished lesson art.
- Reserve hand-drawn SVG/CSS for construction guides, annotations, and UI
  details unless a vector finish is an intentional art direction.
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
