# Agent Instructions

## Project

Sketcha.day is a daily drawing prompt and step-by-step tutorial site for curious
artists of all ages. The design should feel like a working artist's sketchbook:
playful and handmade, but clear and useful enough for adults.

## Local Development

This prototype is dependency-free.

```sh
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

Archive tutorial pages are generated from `scripts/build-tutorials.mjs`:

```sh
node scripts/build-tutorials.mjs
```

## Conventions

- Read `DAILY-PUBLISHING.md` before creating or changing a daily lesson.
- Rebuild generated archive pages after changing their lesson data.
- Keep daily tutorial pages useful without JavaScript.
- Treat accessibility, responsive layout, and semantic HTML as requirements.
- Use descriptive tutorial titles and copy suitable for search results.
- Include `HowTo` structured data on tutorial pages.
- Prefer hand-drawn SVG/CSS details and project-owned artwork over generic icons.
- Do not add affiliate links until the project is ready for them.

## Content Model

Each daily lesson should eventually include:

- SEO title, description, canonical URL, and publish date
- A specific subject and finished reference drawing
- 5-8 practical drawing steps
- Materials list with no affiliate links at launch
- Difficulty, estimated time, and useful drawing tips
- Links to related lessons and the archive
