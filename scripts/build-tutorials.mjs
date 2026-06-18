import { mkdir, writeFile } from "node:fs/promises";

const lessons = [
  {
    slug: "patchwork-kite",
    day: "008",
    date: "Thursday, June 18",
    isoDate: "2026-06-18",
    subject: "a patchwork kite in the wind",
    headlineSubject: "a patchwork kite<br>in the wind",
    shortSubject: "a patchwork kite",
    lessonTitle: "Let's draw a patchwork kite",
    description: "Learn how to draw a patchwork kite in the wind with a diamond body, fabric panels, a curving string, tail bows, clouds, and breeze lines.",
    intro: "Build a bright kite from one diamond, divide it into fabric patches, then add a loose string, bow ties, clouds, and windy motion.",
    time: 25,
    difficulty: "Easy-medium",
    accent: "#d8a33f",
    finished: "patchwork-kite-finished-v1.jpg",
    finishedAlt: "Graphite and colored-pencil sketch of a patchwork diamond kite with red, teal, blue, and yellow panels, a curving string, three tail bows, clouds, and wind swirls",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional red, teal, blue, and yellow pencils"],
    steps: [
      {
        name: "Place the diamond and spars",
        text: "Draw a tall diamond for the kite body, then add one vertical line from top point to bottom point and one gentle cross line from side point to side point.",
        tip: "Keep the top half a little taller than the bottom half. That makes the kite feel like it is lifting upward."
      },
      {
        name: "Divide the patchwork panels",
        text: "Add a few short seam lines inside the diamond: one angled seam near the top, a smaller rectangle-like patch in the middle, and two lower triangle seams.",
        tip: "Let the seams follow the kite's tilt. Straight ruler-perfect lines will make the handmade fabric feel stiff."
      },
      {
        name: "Add the string and bows",
        text: "Pull a loose S-curve string from the bottom point, then place three bow ties along the string with tiny knots and triangle wings.",
        tip: "Draw the string first, then center each bow on it. The bows should get smaller as they travel down the tail."
      },
      {
        name: "Sketch the breeze",
        text: "Add two light wind swirls around the kite and a couple of small puffy clouds, keeping them softer than the kite outline.",
        tip: "Use very light pressure for the wind. These marks show motion, but they should not compete with the kite."
      },
      {
        name: "Color the kite and tail",
        text: "Shade each fabric panel with loose colored-pencil strokes, then add red, blue, and yellow to the bow ties on the string.",
        tip: "Change stroke direction from panel to panel, and keep the bow color lighter than the kite body so the tail decorates the drawing."
      },
      {
        name: "Finish the keeper lines",
        text: "Choose the strongest kite edges, seam lines, bow knots, wind swirls, and cloud curves, then add a final pass of pencil texture.",
        tip: "The last pass should clarify what is already there. Avoid adding new panels or changing the tail curve.",
        image: true
      }
    ]
  },
  {
    slug: "cozy-teacup",
    day: "007",
    date: "Wednesday, June 17",
    isoDate: "2026-06-17",
    subject: "a cozy teacup",
    headlineSubject: "a cozy<br>teacup",
    shortSubject: "a cozy teacup",
    lessonTitle: "Let's draw a cozy teacup",
    description: "Learn how to draw a cozy teacup with an oval rim, curved handle, saucer, steam, warm tea, and a red heart on the cup.",
    intro: "Start with two light ovals, build the cup and saucer in layers, then finish with steam, warm tea, a red heart, and soft blue-gray shading.",
    time: 25,
    difficulty: "Easy",
    accent: "#c7775d",
    finished: "cozy-teacup-finished-v2.jpg",
    finishedAlt: "Graphite and colored-pencil sketch of a cozy teacup on a saucer with warm tea, steam, and a red heart on the cup",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional red, tan, and blue-gray pencils"],
    steps: [
      {
        name: "Place the guide ovals",
        text: "Draw a wide saucer oval near the bottom, then place a smaller cup-rim oval above it. Add a faint center line and light slanted cup sides.",
        tip: "Keep every guide pale. These first lines are only there to keep the cup level."
      },
      {
        name: "Shape the cup and handle",
        text: "Darken the front and back curves of the rim, pull the cup sides down toward a small base, then add a C-shaped handle on the right.",
        tip: "Check both cup sides before you press harder. The handle should touch near the rim and near the lower cup."
      },
      {
        name: "Build the saucer",
        text: "Darken the outside saucer oval, then add a smaller inner curve under the cup to show where the cup sits.",
        tip: "Let the saucer stay flatter than the cup rim. A round saucer makes the cup look tilted."
      },
      {
        name: "Add tea and steam",
        text: "Fill the inside of the rim with a warm tea oval, then sketch three loose steam wisps rising above the cup.",
        tip: "Steam should be lighter and softer than the cup outline, almost like a line you might erase."
      },
      {
        name: "Draw the heart and rim stripe",
        text: "Place a small red heart on the front of the cup, then add a thin warm stripe following the front rim curve.",
        tip: "Center the heart on the cup face, not on the whole page. It should sit below the rim and above the foot."
      },
      {
        name: "Shade the cup and saucer",
        text: "Add pale graphite on the cup sides, blue-gray shadow across the saucer, and a soft cast shadow below the plate.",
        tip: "Stop before the paper turns gray everywhere. The light spaces keep the sketch friendly."
      },
      {
        name: "Finish the keeper lines",
        text: "Choose the strongest rim, handle, saucer, steam, and heart lines, then add a few short colored-pencil strokes to tie the drawing together.",
        tip: "The final pass should clarify the drawing, not redraw every line.",
        image: true
      }
    ]
  },
  {
    slug: "garden-snail",
    day: "006",
    date: "Tuesday, June 16",
    isoDate: "2026-06-16",
    subject: "a garden snail on a leaf",
    headlineSubject: "a garden snail<br>on a leaf",
    shortSubject: "a garden snail",
    lessonTitle: "Let's draw a garden snail",
    description: "Learn how to draw a garden snail on a leaf with five cumulative sketching steps.",
    intro: "Build a low crawling body, a tilted spiral shell, and a simple leaf so the snail feels small and garden-ready.",
    time: 25,
    difficulty: "Easy-medium",
    accent: "#7d9460",
    finished: "garden-snail-finished-v2.jpg",
    finishedAlt: "Loose graphite and colored-pencil sketch of a friendly garden snail with a tan spiral shell crawling on a green leaf",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional green and brown pencils"],
    steps: [
      {
        name: "Place the big guide shapes",
        text: "Draw a tilted circle for the shell, a low curved belly line underneath, and a small oval where the head will sit.",
        tip: "Keep the shell sitting slightly left of center. The head needs room to stretch forward."
      },
      {
        name: "Turn the circle into a shell",
        text: "Darken the outside of the shell, then start a spiral near the center and wind it outward without touching the edge.",
        tip: "Leave breathing room between spiral rings. Crowded rings make the shell harder to read."
      },
      {
        name: "Stretch the soft body",
        text: "Draw the top of the body under the shell, round the head, and pull a flat foot line back under the whole snail.",
        tip: "The body should stay lower than the shell. That contrast is what makes the shell feel heavy."
      },
      {
        name: "Add eyes and the leaf",
        text: "Lift two curved eyestalks from the head, add tiny eye ovals, then draw the pointed leaf underneath the foot.",
        tip: "Aim the eyestalks in different directions so the snail feels curious instead of stiff."
      },
      {
        name: "Shade the shell and leaf",
        text: "Choose the contours you want to keep, add loose tan strokes to the shell, then shade the body and leaf with green pencil.",
        tip: "Stop before the color becomes solid. The paper gaps help the sketch feel quick and handmade.",
        image: true
      }
    ]
  },
  {
    slug: "sleepy-cat",
    day: "004",
    date: "Sunday, June 14",
    isoDate: "2026-06-14",
    subject: "a sleepy cat",
    shortSubject: "a sleepy cat",
    lessonTitle: "Let's draw a sleepy cat",
    description: "Learn how to draw a sleepy curled-up cat in five simple, cumulative sketching steps.",
    intro: "Tuck a round cat into one cozy shape, then wrap its tail around the whole sleepy bundle.",
    time: 20,
    difficulty: "Easy",
    accent: "#43899a",
    finished: "sleepy-cat-finished-v2.jpg",
    finishedAlt: "Loose graphite and blue-pencil sketch of a sleepy cat curled around its tail",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional blue pencil"],
    steps: [
      {
        name: "Place two soft shapes",
        text: "Draw a wide oval for the curled body and overlap it with a smaller circle for the head.",
        tip: "Keep the head low. A sleepy pose feels heavier when the chin sits close to the body.",
        art: `<g class="construction"><ellipse cx="370" cy="430" rx="220" ry="132"/><circle cx="255" cy="305" r="103"/><path d="M255 202v206M152 305h206"/></g>`
      },
      {
        name: "Add the ears and face",
        text: "Set two triangles on the head circle. Use two shallow curves for closed eyes and a tiny center line for the nose.",
        tip: "Closed eyes curve upward only slightly. Too much curve can turn the nap into a grin.",
        art: `<g class="construction"><ellipse cx="370" cy="430" rx="220" ry="132"/><circle cx="255" cy="305" r="103"/></g><g class="drawing"><path d="m190 230 20-74 55 65m48 0 69-50-10 86"/><path d="M200 300c19-12 39-11 58 2m63-2c18-11 38-10 55 3m-95 22v24"/><path d="M231 348c13 11 28 16 44 16 17 0 31-5 44-16"/></g>`
      },
      {
        name: "Find the curled outline",
        text: "Follow the oval around the back and belly. Join it to the cheeks, leaving a small tucked-paw bump underneath.",
        tip: "Use one slow line across the back. Small wobbles are fine, but avoid lots of short furry marks.",
        art: `<g class="construction faint-construction"><ellipse cx="370" cy="430" rx="220" ry="132"/><circle cx="255" cy="305" r="103"/></g><g class="drawing"><path d="M158 311c-16-63 7-119 62-144l20-74 55 65c38 3 71 20 93 48l69-50-10 86c13 28 17 60 8 91-18 65-85 106-168 97-69-7-117-47-129-119Z"/><path d="M197 293c19-12 39-11 58 2m63-2c18-11 38-10 55 3M224 325c13 16 29 24 49 24 19 0 35-8 48-23M274 314v25"/></g>`
      },
      {
        name: "Wrap the tail around",
        text: "Start behind the body, loop the tail around the front, and let its top edge cross the tucked paws.",
        tip: "Make the tail widest near the body and narrower at the tip so the curve stays readable.",
        art: `<g class="construction faint-construction"><ellipse cx="370" cy="430" rx="220" ry="132"/><circle cx="255" cy="305" r="103"/></g><g class="drawing"><path d="M158 311c-16-63 7-119 62-144l20-74 55 65c38 3 71 20 93 48l69-50-10 86c13 28 17 60 8 91-18 65-85 106-168 97-69-7-117-47-129-119Z"/><path d="M174 419c-63 14-102 45-111 91 92 35 249 42 381 16 93-18 143-59 134-116-7-42-44-66-91-57-48 9-67 52-44 87M171 492c87 13 183 10 272-18"/><path d="M197 293c19-12 39-11 58 2m63-2c18-11 38-10 55 3M224 325c13 16 29 24 49 24 19 0 35-8 48-23M274 314v25"/></g>`
      },
      {
        name: "Darken and add blue",
        text: "Choose the contours you want to keep, then shade a few cool blue strokes along the body and tail.",
        tip: "Leave most of the paper untouched. A small patch of color is enough to finish this sketch.",
        image: true
      }
    ]
  },
  {
    slug: "sprouting-seed",
    day: "003",
    date: "Saturday, June 13",
    isoDate: "2026-06-13",
    subject: "a sprouting seed",
    shortSubject: "a sprouting seed",
    lessonTitle: "Let's draw a sprouting seed",
    description: "Learn how to draw a young sprout with four simple leaves in five easy sketching steps.",
    intro: "Practice gentle curves and leaf shapes with a tiny plant pushing up toward the light.",
    time: 15,
    difficulty: "Easy",
    accent: "#6d8763",
    finished: "sprouting-seed-finished-v2.jpg",
    finishedAlt: "Loose graphite and green-pencil sketch of a four-leaf sprout",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional green pencil"],
    steps: [
      {
        name: "Draw the stem's path",
        text: "Make one light vertical curve from the soil upward. Add a shallow arc underneath for the ground.",
        tip: "A stem rarely grows ruler-straight. Give yours one small lean or bend.",
        art: `<g class="construction"><path d="M356 605c-14-177-6-329 24-456"/><path d="M279 654c55-39 143-40 202-1"/></g>`
      },
      {
        name: "Open the top bud",
        text: "At the top of the stem, draw two curved sides that meet in a point, like a narrow almond.",
        tip: "Keep the bud centered over the stem so the plant feels balanced before adding side leaves.",
        art: `<g class="construction"><path d="M356 605c-14-177-6-329 24-456"/><path d="M279 654c55-39 143-40 202-1"/></g><g class="drawing"><path d="M379 248c-58-51-57-121-2-181 66 53 68 124 4 184"/></g>`
      },
      {
        name: "Grow the left leaf",
        text: "Branch left from the stem and build a pointed leaf with two broad curves. Bring its center vein back to the stem.",
        tip: "Let the bottom curve sag a little more than the top curve. That gives the leaf weight.",
        art: `<g class="construction"><path d="M356 605c-14-177-6-329 24-456"/></g><g class="drawing"><path d="M379 248c-58-51-57-121-2-181 66 53 68 124 4 184"/><path d="M373 323c-104 2-174-50-186-144 98-15 174 25 194 125-4 8-6 14-8 19Z"/><path d="M278 189c26 35 56 65 93 91"/></g>`
      },
      {
        name: "Balance it with a right leaf",
        text: "Repeat the leaf shape on the right, placing it slightly higher and turning its point upward.",
        tip: "The leaves should feel related, not mirrored. Small differences make the plant feel alive.",
        art: `<g class="construction faint-construction"><path d="M356 605c-14-177-6-329 24-456"/></g><g class="drawing"><path d="M354 601c-10-128-4-246 20-354"/><path d="M379 248c-58-51-57-121-2-181 66 53 68 124 4 184"/><path d="M373 323c-104 2-174-50-186-144 98-15 174 25 194 125-4 8-6 14-8 19Z"/><path d="M381 310c105-8 173-66 177-162-103-8-174 39-185 145 2 6 5 12 8 17Z"/><path d="M278 189c26 35 56 65 93 91m95-105c-26 39-55 73-88 103M279 654c55-39 143-40 202-1"/></g>`
      },
      {
        name: "Add roots and green",
        text: "Sketch two tiny roots below the soil line, then loosely shade the leaves with green pencil.",
        tip: "Follow each leaf's direction with your color strokes instead of coloring straight across it.",
        image: true
      }
    ]
  },
  {
    slug: "cozy-mushroom",
    day: "002",
    date: "Friday, June 12",
    isoDate: "2026-06-12",
    subject: "a cozy mushroom",
    shortSubject: "a cozy mushroom",
    lessonTitle: "Let's draw a cozy mushroom",
    description: "Learn how to draw a rounded mushroom with a sturdy stem in five approachable sketching steps.",
    intro: "Build a friendly mushroom from a dome, an ellipse, and one sturdy stem, then add a little rosy color.",
    time: 25,
    difficulty: "Medium",
    accent: "#d88c91",
    finished: "cozy-mushroom-finished-v2.jpg",
    finishedAlt: "Loose graphite and pink-pencil sketch of a rounded mushroom",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional pink pencil"],
    steps: [
      {
        name: "Set the cap and stem",
        text: "Draw a wide oval for the cap and a tall rounded rectangle underneath for the stem.",
        tip: "Overlap the stem with the cap. You will erase the hidden line after the proportions feel right.",
        art: `<g class="construction"><ellipse cx="360" cy="317" rx="238" ry="142"/><rect x="282" y="324" width="156" height="246" rx="66"/><path d="M360 161v407M122 317h476"/></g>`
      },
      {
        name: "Shape the cap",
        text: "Use the top half of the oval to draw a broad dome. Add a shallow curve across the bottom edge.",
        tip: "Keep the cap's lowest curve flatter than its top. That makes the mushroom feel grounded.",
        art: `<g class="construction"><ellipse cx="360" cy="317" rx="238" ry="142"/><rect x="282" y="324" width="156" height="246" rx="66"/></g><g class="drawing"><path d="M101 343c28-132 129-224 261-224 133 0 236 91 260 224-74 37-442 39-521 0Z"/><path d="M107 344c91 63 418 65 509 1"/></g>`
      },
      {
        name: "Flare the stem",
        text: "Curve both sides of the stem outward near the bottom, then add a low mound where it meets the ground.",
        tip: "The stem is narrower just below the cap and widest at the base.",
        art: `<g class="construction faint-construction"><ellipse cx="360" cy="317" rx="238" ry="142"/></g><g class="drawing"><path d="M101 343c28-132 129-224 261-224 133 0 236 91 260 224-74 37-442 39-521 0Z"/><path d="M107 344c91 63 418 65 509 1"/><path d="M290 397c-7 53-7 105-2 157-34 17-51 40-54 69 76 23 185 23 257-2-5-28-23-50-57-66 7-51 7-104-1-158M290 397c38 14 105 14 143 0"/></g>`
      },
      {
        name: "Add spots and folds",
        text: "Scatter three small cap spots, then draw a few short folds beneath the cap and across the stem.",
        tip: "Use an odd number of spots and vary their size. Even spacing can look mechanical.",
        art: `<g class="construction faint-construction"><ellipse cx="360" cy="317" rx="238" ry="142"/></g><g class="drawing"><path d="M101 343c28-132 129-224 261-224 133 0 236 91 260 224-74 37-442 39-521 0Z"/><path d="M107 344c91 63 418 65 509 1"/><path d="M290 397c-7 53-7 105-2 157-34 17-51 40-54 69 76 23 185 23 257-2-5-28-23-50-57-66 7-51 7-104-1-158M290 397c38 14 105 14 143 0"/><path d="M203 268c18-24 39-24 62 0m70-61c18-24 39-24 62 0m69 61c18-24 39-24 62 0m-313 57 17-13m90 24 19-15m99 10 17-13M298 493c40 13 88 13 129 0"/></g>`
      },
      {
        name: "Shade the rosy cap",
        text: "Darken the useful contour and add loose pink pencil across the cap, leaving uneven white gaps.",
        tip: "Put more color near the lower edge and spots. The lighter top will make the cap feel round.",
        image: true
      }
    ]
  },
  {
    slug: "rainy-day-frog",
    day: "001",
    date: "Thursday, June 11",
    isoDate: "2026-06-11",
    subject: "a rainy-day frog",
    shortSubject: "a rainy-day frog",
    lessonTitle: "Let's draw a rainy-day frog",
    description: "Learn how to draw a cartoon frog in rain boots holding an umbrella with five friendly sketching steps.",
    intro: "Build a cheerful frog from rounded shapes, then give it boots, an umbrella, and a splash of rainy-day color.",
    time: 25,
    difficulty: "Easy-medium",
    accent: "#6d8763",
    finished: "rainy-day-frog-finished-v1.jpg",
    finishedAlt: "Loose graphite and colored-pencil sketch of a cartoon frog in yellow rain boots holding a blue umbrella",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional colored pencils"],
    steps: [
      {
        name: "Block in the big shapes",
        text: "Use light circles for the eyes, a wide rounded head, an oval body, two boot blocks, and a broad umbrella arc above.",
        tip: "Make the umbrella wider than the frog. That big curve is what sells the rainy-day pose."
      },
      {
        name: "Draw the face and umbrella",
        text: "Round out the frog's head, add the eye rings, a simple smile, cheek spots, and the umbrella ribs.",
        tip: "Keep the face low and wide. A tiny smile under big eyes makes the character feel playful."
      },
      {
        name: "Add arms and the handle",
        text: "Sketch the body, then wrap two simple arms and little hands around the umbrella handle.",
        tip: "Let the handle tilt through the frog's body. The hands only need a few curved fingers."
      },
      {
        name: "Finish the boots",
        text: "Turn the boot blocks into oversized rain boots with soft openings, rounded toes, and dark sole lines.",
        tip: "Big boots make the cartoon work. Keep them wider than the frog's legs."
      },
      {
        name: "Color the rainy details",
        text: "Darken the useful contours, then add loose green, yellow, and blue colored-pencil strokes.",
        tip: "Leave white paper in the belly, umbrella, and boots so the drawing still feels quick and sketchy.",
        image: true
      }
    ]
  }
];

const currentLesson = {
  slug: "curious-fox",
  day: "005",
  date: "Monday, June 15",
  isoDate: "2026-06-15",
  subject: "a curious fox",
  time: 25,
  difficulty: "Easy",
  finished: "fox-finished-v2.jpg",
  finishedAlt: "Loose graphite and orange-pencil sketch of a seated fox"
};

const archiveLessons = [...lessons, currentLesson]
  .sort((first, second) => new Date(second.isoDate) - new Date(first.isoDate));
const latestLesson = archiveLessons[0];

const relatedCards = (currentSlug) => lessons
  .filter(({ slug }) => slug !== currentSlug)
  .slice(0, 2)
  .map((lesson) => `
    <a class="sketch-card" href="${lesson.slug}.html">
      <div class="card-art"><img src="../assets/${lesson.finished}" alt=""></div>
      <p><span>Day ${lesson.day}</span> ${lesson.time} min · ${lesson.difficulty}</p>
      <h3>How to draw ${lesson.shortSubject}</h3>
    </a>`)
  .join("");

const materialIcon = (index) => ["pencil-icon", "paper-icon", "eraser-icon", "colors-icon"][index];
const titleCase = (value) => value.replace(/\b\w/g, (character) => character.toUpperCase());
const headlineHtml = (value) => String(value)
  .split(/<br\s*\/?>/i)
  .map((line) => `<span>${line.trim()}</span>`)
  .join(" ");

const page = (lesson) => {
  const titleSubject = titleCase(lesson.shortSubject.replace(/^a /, ""));
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to Draw a ${titleSubject}`,
    description: lesson.description,
    image: `https://sketcha.day/assets/${lesson.finished}`,
    datePublished: lesson.isoDate,
    totalTime: `PT${lesson.time}M`,
    supply: lesson.materials.map((name) => ({ "@type": "HowToSupply", name })),
    step: lesson.steps.map(({ name, text }) => ({ "@type": "HowToStep", name, text }))
  };

  const steps = lesson.steps.map((step, index) => `
          <li class="step-card${step.image ? " final-step" : ""}">
            <button class="step-check" type="button" aria-label="Mark step ${index + 1} complete"><span></span></button>
            <div class="step-number">${String(index + 1).padStart(2, "0")}</div>
            <div class="step-art${step.image ? " finished-mini" : ""}">
              ${step.image
                ? `<img src="../assets/${lesson.finished}" alt="${lesson.finishedAlt}" width="1254" height="1254" loading="lazy">`
                : `<img src="../assets/${lesson.slug}-step-${index + 1}.jpg" alt="${step.name} stage for how to draw ${lesson.shortSubject}" width="627" height="627" loading="lazy">`}
            </div>
            <div class="step-copy">
              <h3>${step.name}</h3>
              <p>${step.text}</p>
              <p class="artist-tip"><strong>Sketch tip:</strong> ${step.tip}</p>
            </div>
          </li>`).join("");

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>How to Draw a ${titleSubject} Step by Step | Sketcha.day</title>
  <meta name="description" content="${lesson.description}">
  <link rel="canonical" href="https://sketcha.day/tutorials/${lesson.slug}.html">
  <meta property="og:type" content="article">
  <meta property="og:title" content="How to Draw a ${titleSubject}, Step by Step">
  <meta property="og:description" content="${lesson.description}">
  <meta property="og:url" content="https://sketcha.day/tutorials/${lesson.slug}.html">
  <meta property="og:image" content="https://sketcha.day/assets/${lesson.finished}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="theme-color" content="${lesson.accent}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Caveat+Brush&family=DM+Sans:opsz,wght@9..40,400;9..40,600;9..40,700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../styles.css">
  <script type="application/ld+json">${JSON.stringify(schema, null, 2)}</script>
</head>
<body class="archive-tutorial" style="--lesson-accent: ${lesson.accent}">
  <a class="skip-link" href="#lesson">Skip to the lesson</a>
  <header class="site-header">
    <div class="brand">
      <img class="brand-mark" src="../assets/logo-pencil.svg" alt="" width="72" height="72">
      <a class="brand-wordmark" href="../index.html" aria-label="Sketcha.day home"><span class="brand-name">sketcha<span>.day</span></span></a>
    </div>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav"><span></span><span></span><span></span><span class="sr-only">Open menu</span></button>
    <nav class="site-nav" id="site-nav" aria-label="Main navigation">
      <a href="../index.html">Today's sketch</a>
      <a href="../library.html">Sketch library</a>
      <a href="../index.html#about">How it works</a>
      <a class="nav-button" href="#lesson">Start drawing</a>
    </nav>
  </header>
  <main>
    <section class="hero" aria-labelledby="hero-title">
      <div class="doodle doodle-star" aria-hidden="true">✦</div>
      <div class="hero-copy">
        <p class="eyebrow"><span>Day ${lesson.day}</span> ${lesson.date}</p>
        <h1 id="hero-title" aria-label="How to draw ${lesson.subject}"><span class="headline-lead">How to draw</span> <em aria-hidden="true">${headlineHtml(lesson.headlineSubject ?? lesson.subject)}</em></h1>
        <p class="hero-intro">${lesson.intro}</p>
        <div class="hero-meta" aria-label="Lesson details"><span><strong>${lesson.time}</strong> min</span><span><strong>${lesson.difficulty}</strong></span><span><strong>${lesson.steps.length}</strong> steps</span></div>
        <a class="nav-button hero-button" href="#lesson">Start drawing <svg viewBox="0 0 30 15" aria-hidden="true"><path d="M1 7.5h26M20 1l7 6.5-7 6.5"/></svg></a>
      </div>
      <figure class="hero-art">
        <div class="tape tape-top" aria-hidden="true"></div>
        <img src="../assets/${lesson.finished}" alt="${lesson.finishedAlt}" width="1254" height="1254">
        <figcaption>Finished sketch <span>About ${lesson.time} minutes</span></figcaption>
      </figure>
    </section>
    <article class="lesson" id="lesson">
      <header class="section-heading">
        <p class="kicker">From the archive</p>
        <h2>${lesson.lessonTitle}</h2>
        <p>Work lightly through the construction, then darken only the lines that help the finished sketch.</p>
      </header>
      <div class="lesson-layout">
        <aside class="materials paper-panel" aria-labelledby="materials-title">
          <div class="pushpin" aria-hidden="true"></div>
          <p class="hand-note">Grab your stuff</p>
          <h3 id="materials-title">Materials</h3>
          <ul>${lesson.materials.map((material, index) => `<li><span class="material-icon ${materialIcon(index)}" aria-hidden="true"></span><div><strong>${material}</strong><small>${index === 3 ? "Completely optional" : "Whatever you already have"}</small></div></li>`).join("")}</ul>
          <p class="materials-note">No colored pencil? Graphite alone makes a complete sketch.</p>
        </aside>
        <ol class="steps">${steps}
        </ol>
      </div>
    </article>
    <section class="library related-library" id="related" aria-labelledby="related-title">
      <header class="section-heading library-heading"><div><p class="kicker">Keep the page moving</p><h2 id="related-title">More daily sketches</h2></div><a href="../library.html">Browse the full library <span aria-hidden="true">→</span></a></header>
      <div class="library-grid">${relatedCards(lesson.slug)}
        <a class="sketch-card" href="curious-fox.html">
          <div class="card-art"><img src="../assets/fox-finished-v2.jpg" alt="" loading="lazy"></div>
          <p><span>Day ${currentLesson.day}</span> ${currentLesson.time} min · ${currentLesson.difficulty}</p>
          <h3>How to draw a curious fox</h3>
        </a>
      </div>
    </section>
  </main>
  <footer class="site-footer">
    <a class="brand footer-brand" href="../index.html"><span class="brand-name">sketcha<span>.day</span></span></a>
    <p>Make a mark. See what happens.</p>
    <nav aria-label="Footer navigation"><a href="../index.html">Today</a><a href="../library.html">Library</a><a href="../index.html#about">About</a><a href="mailto:hello@sketcha.day">Say hello</a></nav>
    <small>© 2026 Sketcha.day</small>
  </footer>
  <script src="../script.js"></script>
</body>
</html>`;
};

const homePage = (lesson) => {
  const homeOnlySections = `
    <section class="about" id="about">
      <div class="about-drawing">
        <img src="assets/daily-sketchbook.svg" alt="An open sketchbook filled with four simple daily drawing studies" width="560" height="430">
      </div>
      <div class="about-copy">
        <p class="kicker">One small drawing, every day</p>
        <h2>A daily practice for curious hands.</h2>
        <p>Sketcha.day turns a blank page into an approachable ritual. Every lesson starts with simple shapes, explains the useful bits, and leaves room for your own style.</p>
        <div class="about-points">
          <p><strong>Made for real life</strong><span>Most lessons take 15-30 minutes.</span></p>
          <p><strong>Useful at any age</strong><span>Friendly enough for kids, substantial enough for grown-ups.</span></p>
          <p><strong>A growing library</strong><span>Miss a day? Every sketch stays available.</span></p>
        </div>
      </div>
    </section>

    <section class="newsletter" id="newsletter" aria-labelledby="newsletter-title">
      <div class="newsletter-pencil" aria-hidden="true"></div>
      <p class="hand-note">A tiny creative nudge</p>
      <h2 id="newsletter-title">A fresh sketch in your inbox.</h2>
      <p>One prompt. One practical tutorial. Zero pressure.</p>
      <form class="signup-form">
        <label class="sr-only" for="email">Email address</label>
        <input id="email" name="email" type="email" autocomplete="email" placeholder="you@example.com" required>
        <button type="submit">Send me tomorrow's sketch</button>
      </form>
      <small>Free forever. Unsubscribe whenever your sketchbook is full.</small>
      <p class="form-message" role="status" aria-live="polite"></p>
    </section>
`;

  let html = page(lesson)
    .replace('<body class="archive-tutorial"', '<body class="home-page archive-tutorial"')
    .replaceAll(`https://sketcha.day/tutorials/${lesson.slug}.html`, "https://sketcha.day/")
    .replaceAll('href="../styles.css"', 'href="styles.css"')
    .replaceAll('src="../script.js"', 'src="script.js"')
    .replaceAll("../assets/", "assets/")
    .replaceAll("../library.html", "library.html")
    .replaceAll("../index.html#about", "#about")
    .replaceAll("../index.html", "index.html")
    .replaceAll("Skip to the lesson", "Skip to today's lesson")
    .replaceAll("Finished sketch <span>", "Today's finished sketch <span>")
    .replaceAll("From the archive", "Pencil ready?")
    .replace("  </main>", `${homeOnlySections}  </main>`);

  for (const item of archiveLessons) {
    if (item.slug) {
      html = html.replaceAll(`href="${item.slug}.html"`, `href="tutorials/${item.slug}.html"`);
    }
  }

  return html;
};

const archiveCard = (lesson, index) => {
  const cardColors = ["card-orange", "card-blue", "card-yellow", "card-red"];
  const href = lesson.slug ? `tutorials/${lesson.slug}.html` : "index.html";

  return `
        <a class="sketch-card ${cardColors[index % cardColors.length]}" href="${href}">
          <div class="card-art">
            <img src="assets/${lesson.finished}" alt="${lesson.finishedAlt}" loading="${index === 0 ? "eager" : "lazy"}">
          </div>
          <p><span>Day ${lesson.day}</span> <time datetime="${lesson.isoDate}">${lesson.date.replace(/^[^,]+, /, "")}</time> · ${lesson.time} min · ${lesson.difficulty}</p>
          <h2>How to draw ${lesson.subject}</h2>
          <span class="card-link">Open tutorial <span aria-hidden="true">→</span></span>
        </a>`;
};

const archivePage = () => {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Sketcha.day Drawing Tutorial Library",
    numberOfItems: archiveLessons.length,
    itemListElement: archiveLessons.map((lesson, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `How to draw ${lesson.subject}`,
      url: lesson.slug
        ? `https://sketcha.day/tutorials/${lesson.slug}.html`
        : "https://sketcha.day/"
    }))
  };

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Drawing Tutorial Library | Easy Step-by-Step Sketches | Sketcha.day</title>
  <meta name="description" content="Browse every Sketcha.day drawing tutorial. Find approachable step-by-step lessons for sketching animals, plants, mushrooms, and more.">
  <link rel="canonical" href="https://sketcha.day/library.html">
  <meta property="og:type" content="website">
  <meta property="og:title" content="The Sketcha.day Drawing Tutorial Library">
  <meta property="og:description" content="A growing collection of practical, playful step-by-step drawing lessons.">
  <meta property="og:url" content="https://sketcha.day/library.html">
  <meta property="og:image" content="https://sketcha.day/assets/fox-finished-v2.jpg">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="theme-color" content="#f3b63c">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Caveat+Brush&family=DM+Sans:opsz,wght@9..40,400;9..40,600;9..40,700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
  <script type="application/ld+json">${JSON.stringify(itemList, null, 2)}</script>
</head>
<body class="library-page">
  <a class="skip-link" href="#tutorial-library">Skip to the tutorial library</a>
  <header class="site-header">
    <div class="brand">
      <img class="brand-mark" src="assets/logo-pencil.svg" alt="" width="72" height="72">
      <a class="brand-wordmark" href="index.html" aria-label="Sketcha.day home"><span class="brand-name">sketcha<span>.day</span></span></a>
    </div>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav"><span></span><span></span><span></span><span class="sr-only">Open menu</span></button>
    <nav class="site-nav" id="site-nav" aria-label="Main navigation">
      <a href="index.html">Today's sketch</a>
      <a href="library.html" aria-current="page">Sketch library</a>
      <a href="index.html#about">How it works</a>
      <a class="nav-button" href="index.html#lesson">Start drawing</a>
    </nav>
  </header>
  <main>
    <section class="archive-hero" aria-labelledby="archive-title">
      <div class="archive-intro">
        <p class="eyebrow"><span>${archiveLessons.length} tutorials</span> One new page every day</p>
        <h1 id="archive-title" aria-label="The sketch library"><span class="headline-lead">The sketch</span> <em aria-hidden="true"><span>library</span></em></h1>
        <p>Missed a day? Start anywhere. Every lesson uses a short materials list, cumulative steps, and a finished drawing you can reasonably make in one sitting.</p>
        <a class="nav-button hero-button" href="#tutorial-library">Choose a tutorial <span aria-hidden="true">↓</span></a>
      </div>
      <div class="archive-stack" aria-hidden="true">
        ${archiveLessons.slice(0, 3).map((lesson) => `<div class="archive-sheet"><img src="assets/${lesson.finished}" alt=""></div>`).join("")}
      </div>
    </section>
    <section class="library archive-library" id="tutorial-library" aria-labelledby="tutorial-library-title">
      <header class="section-heading library-heading">
        <div>
          <p class="kicker">Pick a page</p>
          <h2 id="tutorial-library-title">Draw your way through the days</h2>
        </div>
        <p class="archive-count">Newest first · ${archiveLessons.length} lessons</p>
      </header>
      <div class="library-grid archive-grid">
        ${archiveLessons.map(archiveCard).join("")}
      </div>
    </section>
  </main>
  <footer class="site-footer">
    <a class="brand footer-brand" href="index.html"><span class="brand-name">sketcha<span>.day</span></span></a>
    <p>Make a mark. See what happens.</p>
    <nav aria-label="Footer navigation"><a href="index.html">Today</a><a href="library.html" aria-current="page">Library</a><a href="index.html#about">About</a><a href="mailto:hello@sketcha.day">Say hello</a></nav>
    <small>© 2026 Sketcha.day</small>
  </footer>
  <script src="script.js"></script>
</body>
</html>`;
};

await mkdir(new URL("../tutorials/", import.meta.url), { recursive: true });
for (const lesson of lessons) {
  await writeFile(new URL(`../tutorials/${lesson.slug}.html`, import.meta.url), page(lesson));
}
await writeFile(new URL("../index.html", import.meta.url), homePage(latestLesson));
await writeFile(new URL("../library.html", import.meta.url), archivePage());

console.log(`Built ${lessons.length} tutorial pages, the homepage, and the tutorial library.`);
