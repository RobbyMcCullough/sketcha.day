import { mkdir, writeFile } from "node:fs/promises";

const siteUrl = "https://sketcha.day";
const styleVersion = "20260627-heading-fit";
const brandWordmark = `sketch<span class="brand-accent">a</span><span class="brand-domain">.day</span>`;
const iconLinks = `  <link rel="icon" href="/favicon.ico">
  <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="48x48" href="/assets/favicon-48x48.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="512x512" href="/assets/site-icon.png">`;

const lessons = [
  {
    slug: "curious-fox",
    day: "011",
    date: "Monday, June 15",
    isoDate: "2026-06-15",
    subject: "a curious fox",
    headlineSubject: "a curious fox",
    shortSubject: "a fox",
    lessonTitle: "Let's draw a fox",
    description: "Learn how to draw a curious fox with a seated pose, alert ears, fluffy tail, and simple pencil-and-color details.",
    intro: "Build this woodland friend from a few loose shapes, then bring it to life with warm, scribbly color.",
    time: 25,
    difficulty: "Easy",
    accent: "#f3b63c",
    finished: "fox-finished-v2.jpg",
    finishedAlt: "Loose graphite and orange-pencil sketch of a seated fox",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Orange, cream, and dark brown colored pencils"],
    steps: [
      {
        name: "Place the head and body",
        text: "Draw a head circle, then tuck a tilted egg shape behind it for the seated body. Let the shapes overlap.",
        tip: "Keep it light: These are measuring lines. Draw through the shapes instead of trying to make them perfect.",
        svg: `<svg viewBox="0 0 720 720" role="img" aria-label="A circle for the fox head and a tilted egg shape for its seated body">
                <g class="construction">
                  <circle cx="389" cy="251" r="117"/>
                  <ellipse cx="438" cy="434" rx="126" ry="160" transform="rotate(-12 438 434)"/>
                  <path d="M389 134v233M272 251h234"/>
                </g>
              </svg>`
      },
      {
        name: "Build the fox face",
        text: "Add two tall ear triangles. From the lower-left side of the circle, pull out a long wedge for the muzzle.",
        tip: "Check the angle: The nose lands slightly below the center of the head circle.",
        svg: `<svg viewBox="0 0 720 720" role="img" aria-label="The same fox construction shapes with triangular ears and a long wedge-shaped muzzle">
                <g class="construction">
                  <circle cx="389" cy="251" r="117"/>
                  <ellipse cx="438" cy="434" rx="126" ry="160" transform="rotate(-12 438 434)"/>
                  <path d="M389 134v233M272 251h234"/>
                </g>
                <g class="drawing">
                  <path d="M283 172 300 78l70 76M452 162l64-75-7 111"/>
                  <path d="M288 342 191 346l79-74"/>
                  <circle cx="198" cy="345" r="11" fill="currentColor"/>
                </g>
              </svg>`
      },
      {
        name: "Connect the body",
        text: "Curve the chest down from the jaw, add two straight front legs, then use the egg shape to guide the rounded back.",
        tip: "Find the floor: End both front legs at the same height before adding the paws.",
        svg: `<svg viewBox="0 0 720 720" role="img" aria-label="The same fox pose with a curved chest, two straight front legs, and a rounded back">
                <g class="construction">
                  <circle cx="389" cy="251" r="117"/>
                  <ellipse cx="438" cy="434" rx="126" ry="160" transform="rotate(-12 438 434)"/>
                  <path d="M389 134v233M272 251h234"/>
                </g>
                <g class="drawing">
                  <path d="M283 172 300 78l70 76M452 162l64-75-7 111"/>
                  <path d="M288 342 191 346l79-74"/>
                  <circle cx="198" cy="345" r="11" fill="currentColor"/>
                  <path d="M290 342c8 46 36 67 70 90 26 18 36 59 40 130"/>
                  <path d="M433 373c-13 75-5 134 8 189M486 384c-10 70-2 126 13 178"/>
                  <path d="M509 198c26 31 31 74 14 110-10 22-28 38-50 47"/>
                  <path d="M511 344c69 19 113 69 111 124"/>
                  <path d="M400 566h53M479 565h50"/>
                </g>
              </svg>`
      },
      {
        name: "Wrap the tail forward",
        text: "Start at the upper back, swing the line around the haunch, and bring the fluffy tail across both paws.",
        tip: "Draw both edges: The second curve gives the tail its weight. Keep the tip broad rather than pointy.",
        svg: `<svg viewBox="0 0 720 720" role="img" aria-label="The same seated fox with one large tail wrapped forward across its paws">
                <g class="construction faint-construction">
                  <circle cx="389" cy="251" r="117"/>
                  <ellipse cx="438" cy="434" rx="126" ry="160" transform="rotate(-12 438 434)"/>
                </g>
                <g class="drawing">
                  <path d="M283 172 300 78l70 76c28-8 56-5 82 8l64-75-7 111c26 31 31 74 14 110-19 40-61 59-105 53-45 1-93-3-130-19l-97 4 79-74c-4-38 1-70 13-100Z"/>
                  <path d="M290 342c8 46 36 67 70 90 26 18 36 59 40 130"/>
                  <path d="M433 373c-13 75-5 134 8 189M486 384c-10 70-2 126 13 178"/>
                  <path class="bold-line" d="M511 344c104 27 144 139 69 194-70 52-255 47-362-6 67-10 154-29 209-59 34-19 31-85 84-129Z"/>
                  <path d="M245 527c72 3 151-12 185-48M400 566h53M479 565h50"/>
                  <circle cx="198" cy="345" r="11" fill="currentColor"/>
                </g>
              </svg>`
      },
      {
        name: "Choose the lines to keep",
        text: "Darken the useful contours, then add two simple eyes, the nose, and the white chest shape. Leave some pale guides behind.",
        tip: "Don't trace everything: A broken, doubled line feels more like a sketch than one perfect outline.",
        svg: `<svg viewBox="0 0 720 720" role="img" aria-label="The same fox with selected contours darkened and simple facial and chest details added">
                <g class="construction faint-construction">
                  <circle cx="389" cy="251" r="117"/>
                  <ellipse cx="438" cy="434" rx="126" ry="160" transform="rotate(-12 438 434)"/>
                  <path d="M389 134v233M272 251h234"/>
                </g>
                <g class="drawing refined">
                  <path d="M283 172 300 78l70 76c28-8 56-5 82 8l64-75-7 111c26 31 31 74 14 110-19 40-61 59-105 53-45 1-93-3-130-19l-97 4 79-74c-4-38 1-70 13-100Z"/>
                  <path d="M290 342c8 46 36 67 70 90 26 18 36 59 40 130M433 373c-13 75-5 134 8 189M486 384c-10 70-2 126 13 178"/>
                  <path d="M511 344c104 27 144 139 69 194-70 52-255 47-362-6 67-10 154-29 209-59 34-19 31-85 84-129Z"/>
                  <path d="M245 527c72 3 151-12 185-48M400 566h53M479 565h50"/>
                  <path d="M405 352c9 17 22 29 43 38M308 262c22-10 43-9 63 2M414 258c21-9 40-6 55 7"/>
                  <circle cx="337" cy="272" r="8" fill="currentColor"/><circle cx="441" cy="270" r="8" fill="currentColor"/>
                  <circle cx="198" cy="345" r="11" fill="currentColor"/>
                  <path class="fur" d="m300 78 18 37m17-20 20 41m99-10 28-35m-12 55 31-33M296 356l-17 16m34-4-13 18m110 18-13 20m118 48 22 8m-51 31 21 11m-91 18 13 18"/>
                </g>
              </svg>`
      },
      {
        name: "Scribble in a little color",
        text: "Loosely hatch orange over the ears, back, and tail. Leave the face, chest, and tail tip mostly paper-white.",
        tip: "Stop early: White gaps and visible graphite are part of the finished sketch, not mistakes to cover.",
        image: true
      }
    ]
  },
  {
    slug: "tennis-racket-and-ball",
    day: "025",
    date: "Monday, June 29",
    isoDate: "2026-06-29",
    subject: "a tennis racket and ball",
    headlineSubject: "a tennis racket<br>and ball",
    shortSubject: "a tennis racket",
    lessonTitle: "Let's draw a tennis racket and ball",
    description: "Learn how to draw a tennis racket and ball with a tilted racket head, handle wrap, string grid, tennis ball seam, soft shadow, and restrained colored-pencil detail.",
    intro: "Use one tilted oval to build a racket, then add strings, a wrapped handle, and a tennis ball that keeps the sketch timely without getting too complex.",
    time: 25,
    difficulty: "Easy-medium",
    accent: "#c9b947",
    finished: "tennis-racket-and-ball-finished-v1.jpg",
    finishedAlt: "Graphite and light yellow colored-pencil sketch of a tennis racket with strings, wrapped handle, tennis ball, seam, and soft shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional yellow colored pencil"],
    steps: [
      {
        name: "Place the racket oval",
        text: "Draw a large tilted oval for the racket head, then add one light guide line through the middle.",
        tip: "Make the oval taller than it is wide. A slightly imperfect shape feels more natural than a perfect template."
      },
      {
        name: "Add throat and handle",
        text: "Pull two narrow lines down from the oval to form the throat, then extend a long handle from that opening.",
        tip: "Let the handle follow the same tilt as the oval. That keeps the racket from looking bent."
      },
      {
        name: "String the racket",
        text: "Draw a smaller oval just inside the head, then cross it with light vertical and horizontal string lines.",
        tip: "Keep the strings pale at first. You can choose the cleanest ones when you darken the final sketch."
      },
      {
        name: "Set the ball beside it",
        text: "Add a round tennis ball beside the lower racket head, then curve one seam across the ball.",
        tip: "Leave a little space between the ball and racket so both shapes stay readable."
      },
      {
        name: "Add wrap and shadow",
        text: "Band the handle with short wrap lines, shade a soft cast shadow, and lightly tint the ball yellow.",
        tip: "Use the yellow gently. The graphite strings and handle should still do most of the drawing work."
      },
      {
        name: "Finish the court sketch",
        text: "Darken the keeper contours, clarify the string grid, deepen the grip wraps, and add restrained shading to the racket, ball, and shadow.",
        tip: "Stop while the strings are still light. Too many dark lines can make the racket head look heavy.",
        image: true
      }
    ]
  },
  {
    slug: "vintage-roller-skate",
    day: "024",
    date: "Sunday, June 28",
    isoDate: "2026-06-28",
    subject: "a vintage roller skate",
    headlineSubject: "a vintage<br>roller skate",
    shortSubject: "a roller skate",
    lessonTitle: "Let's draw a vintage roller skate",
    description: "Learn how to draw a vintage roller skate with a high-top boot, sole plate, four wheels, front toe stop, laces, cuff seams, and soft graphite shading.",
    intro: "Use one high-top boot shape, then build the wheels, laces, and cuff details underneath it so the skate stays sturdy and easy to follow.",
    time: 25,
    difficulty: "Easy-medium",
    accent: "#ca7c57",
    finished: "vintage-roller-skate-finished-v1.jpg",
    finishedAlt: "Graphite sketch of a vintage high-top roller skate with laces, four wheels, a toe stop, cuff seams, and soft shading",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional blending stump or tissue"],
    steps: [
      {
        name: "Block in the boot",
        text: "Sketch a long boot sole line, then raise a high ankle shape above it with a soft opening at the top.",
        tip: "Keep the first boot light. The toe, heel, and ankle can wobble a little before you choose the final contour."
      },
      {
        name: "Add the sole plate",
        text: "Draw a narrow plate under the boot and refine the top opening so the skate has a clear shoe shape.",
        tip: "Let the plate follow the same curve as the boot sole. A parallel line keeps the hardware from looking crooked."
      },
      {
        name: "Place wheels and toe stop",
        text: "Add two pairs of round wheels below the plate, then place the small toe stop under the front.",
        tip: "Check the wheel baseline before darkening anything. All four wheels should feel like they touch the same floor."
      },
      {
        name: "Thread the laces",
        text: "Mark small eyelets up the front of the boot and connect them with loose crossing lace lines.",
        tip: "Draw the laces after the wheels so your hand does not crowd the small details too early."
      },
      {
        name: "Add cuff and seams",
        text: "Add the padded ankle cuff, heel seam, stitch marks, and a pale shadow under the wheels.",
        tip: "Use short broken strokes for the stitches. They should decorate the boot, not overpower the outline."
      },
      {
        name: "Polish the skate sketch",
        text: "Darken the keeper contours, strengthen the laces and seams, and add restrained shading to the boot, wheels, toe stop, and shadow.",
        tip: "Leave some construction texture showing. A roller skate feels more handmade when the graphite is not polished flat.",
        image: true
      }
    ]
  },
  {
    slug: "sunglasses-on-a-towel",
    day: "023",
    date: "Saturday, June 27",
    isoDate: "2026-06-27",
    subject: "a pair of sunglasses on a towel",
    headlineSubject: "sunglasses<br>on a towel",
    shortSubject: "sunglasses on a towel",
    lessonTitle: "Let's draw sunglasses on a towel",
    description: "Learn how to draw a pair of sunglasses on a beach towel with rounded lenses, folded arms, towel stripes, fringe, dark lens shading, and soft pencil texture.",
    intro: "Use two simple lens circles and one tilted towel rectangle to build a sunny sketch that still feels light and handmade.",
    time: 25,
    difficulty: "Easy-medium",
    accent: "#d9a93f",
    finished: "sunglasses-on-a-towel-finished-v1.jpg",
    finishedAlt: "Graphite sketch of round sunglasses resting on a striped beach towel with fringe and dark shaded lenses",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional blending stump or tissue"],
    steps: [
      {
        name: "Place the towel and lenses",
        text: "Draw a tilted rectangle for the towel, then place two light rounded lens guides across the middle.",
        tip: "Let the towel angle first. The sunglasses will feel more relaxed if they follow that slant."
      },
      {
        name: "Connect the sunglass frame",
        text: "Wrap a rim around each lens and connect them with a short bridge between the circles.",
        tip: "Keep both rims the same thickness. A second light pass around each lens is enough."
      },
      {
        name: "Fold back the arms",
        text: "Add the folded side arms peeking from behind the lenses, following the towel's angle.",
        tip: "Tuck the arms under the frame edges so they look folded back, not sticking straight out."
      },
      {
        name: "Add towel details",
        text: "Refine the towel edges, sketch a few long stripes, and add little fringe marks along the ends.",
        tip: "Do not make every fringe identical. Small differences keep the cloth feeling hand drawn."
      },
      {
        name: "Shade the lenses",
        text: "Fill both lenses with soft dark graphite and leave a small pale highlight near the top of each lens.",
        tip: "Shade around the highlights instead of drawing white shapes on top. Untouched paper stays brightest."
      },
      {
        name: "Finish the sunny sketch",
        text: "Darken the keeper contours, strengthen the towel texture, and add restrained shadows under the frame and fringe.",
        tip: "Stop before the towel gets too busy. The dark lenses should remain the strongest value.",
        image: true
      }
    ]
  },
  {
    slug: "desk-dog",
    day: "022",
    date: "Friday, June 26",
    isoDate: "2026-06-26",
    subject: "a dog at a desk",
    headlineSubject: "a dog<br>at a desk",
    shortSubject: "a desk dog",
    lessonTitle: "Let's draw a desk dog",
    description: "Learn how to draw a dog at a desk with a round head, floppy ears, simple face, front paws, pencil cup, pencils, and restrained warm pencil shading.",
    intro: "Use a simple head circle and desk line to build a friendly dog who looks ready to keep you company while you draw.",
    time: 25,
    difficulty: "Easy",
    accent: "#c9955f",
    finished: "desk-dog-finished-v1.jpg",
    finishedAlt: "Graphite and warm colored-pencil sketch of a floppy-eared dog peeking over a desk beside a pencil cup",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional tan, brown, and yellow pencils"],
    steps: [
      {
        name: "Block the head and desk",
        text: "Draw a round head guide, then run a straight desk edge across the lower part of the page.",
        tip: "Let the head float above the line for now. The paws will connect the dog to the desk later."
      },
      {
        name: "Drop in the ears",
        text: "Add two soft floppy ears on the sides of the head, keeping them about the same length.",
        tip: "Round the ear tips instead of pointing them. Soft ears make the little dog feel friendly."
      },
      {
        name: "Build the face",
        text: "Place two eyes, a rounded muzzle, a dark nose, and a small curved mouth inside the head.",
        tip: "Keep the eyes level with each other. That simple check makes the face read clearly at thumbnail size."
      },
      {
        name: "Set the paws on the desk",
        text: "Draw two small paws overlapping the desk edge, then add short toe curves inside each paw.",
        tip: "The paws should sit in front of the desk line. Erase or soften the line where the paws cover it."
      },
      {
        name: "Add the pencil cup",
        text: "Sketch a small cup on one side of the desk, add two pencils inside it, and touch in warm color on the ears and pencils.",
        tip: "Keep the cup smaller than the dog's head. It should support the scene, not steal the focus."
      },
      {
        name: "Finish the desk dog",
        text: "Darken the dog, desk, paws, pencil cup, pencils, and warm shading without adding screens, lettering, or extra office clutter.",
        tip: "Stop while the fur marks still feel light. A few soft pencil strokes are enough to give the dog texture.",
        image: true
      }
    ]
  },
  {
    slug: "little-tugboat",
    day: "021",
    date: "Thursday, June 25",
    isoDate: "2026-06-25",
    subject: "a little tugboat",
    headlineSubject: "a little<br>tugboat",
    shortSubject: "a little tugboat",
    lessonTitle: "Let's draw a tugboat",
    description: "Learn how to draw a little tugboat with a rounded hull, boxy cabin, short smokestack, round portholes, cabin windows, deck rail, water ripples, and restrained blue colored-pencil accents.",
    intro: "Build the boat from one long hull curve, then stack the cabin, windows, rails, and water marks before darkening the keeper lines.",
    time: 25,
    difficulty: "Easy-medium",
    accent: "#4f86a4",
    finished: "little-tugboat-finished-v1.jpg",
    finishedAlt: "Graphite and blue colored-pencil sketch of a little tugboat with a rounded hull, cabin, smokestack, portholes, rail, and water ripples",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional blue and gray pencils"],
    steps: [
      {
        name: "Block in the hull",
        text: "Draw a long shallow boat curve, then add a second lower curve to make the rounded hull. Place a light box guide where the cabin will sit.",
        tip: "Keep the bow and stern tips level. A calm, even hull makes the rest of the tugboat easier to stack."
      },
      {
        name: "Stack the cabin",
        text: "Set a boxy cabin on the deck line and cap it with a soft rounded roof. Let the roof overhang the cabin just a little.",
        tip: "Use vertical cabin sides. If they lean too much, the tugboat starts to look like it is tipping."
      },
      {
        name: "Refine the boat outline",
        text: "Darken the bow, stern, deck edge, cabin sides, and roof, then add a short smokestack behind the cabin.",
        tip: "The smokestack should be shorter than the cabin. That keeps the drawing friendly instead of top-heavy."
      },
      {
        name: "Add the windows",
        text: "Draw small round portholes along the hull and simple rectangular windows on the cabin.",
        tip: "Space the portholes like beads on the hull curve. They do not need to be perfectly identical."
      },
      {
        name: "Place rails, ripples, and color",
        text: "Add a short deck rail, a dark bumper stripe, loose water ripples, and a few light blue pencil touches in the windows and waves.",
        tip: "Save the darkest stripe for the bumper line. It helps the pale boat read clearly at card size."
      },
      {
        name: "Finish the keeper lines",
        text: "Deepen the hull, cabin, roof, stack, windows, portholes, rail, bumper stripe, ripples, and blue accents without adding a harbor or extra boats.",
        tip: "Stop while the graphite still feels sketchy. A few broken water marks are more useful than a fully rendered sea.",
        image: true
      }
    ]
  },
  {
    slug: "garden-watering-can",
    day: "020",
    date: "Wednesday, June 24",
    isoDate: "2026-06-24",
    subject: "a garden watering can",
    headlineSubject: "a garden<br>watering can",
    shortSubject: "a garden watering can",
    lessonTitle: "Let's draw a watering can",
    description: "Learn how to draw a garden watering can with a rounded can body, oval top rim, curved handle, long spout, sprinkler rose, water drops, flower decal, and teal colored-pencil shading.",
    intro: "Build the can from one rounded body, then attach the handle and spout before adding the rose, drops, flower decal, and soft teal color.",
    time: 25,
    difficulty: "Easy-medium",
    accent: "#6fa7a3",
    finished: "garden-watering-can-finished-v1.jpg",
    finishedAlt: "Graphite and teal colored-pencil sketch of a garden watering can with a rounded body, curved handle, long spout, sprinkler rose, falling water drops, flower decal, and soft shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional teal and pale blue pencils"],
    steps: [
      {
        name: "Block in the can body",
        text: "Draw a light squat oval for the watering can body, then add two soft side guides and a faint center line to keep the can balanced.",
        tip: "Keep the body wider than it is tall. That rounded base gives the can its friendly, sturdy shape."
      },
      {
        name: "Shape the rim and base",
        text: "Darken the rounded body, add an oval opening and short neck on top, then place a shallow base curve along the bottom.",
        tip: "Match the top and bottom curves. If the rim tilts too much, the can will look like it is spilling."
      },
      {
        name: "Add the handle and spout",
        text: "Attach a large C-shaped handle on the right, then taper a long spout from the left side of the can.",
        tip: "Sketch both handle edges before pressing harder. The handle should feel hollow, not like one thick loop."
      },
      {
        name: "Place the rose and drops",
        text: "Cap the spout with a rounded sprinkler rose, dot in the small holes, and draw a few falling drops below it.",
        tip: "Keep the rose angled with the spout. The drops can stagger downward instead of forming a straight line."
      },
      {
        name: "Add the decal and color",
        text: "Draw a simple flower on the front of the can, shade the metal lightly with teal pencil, and add a pale cast shadow underneath.",
        tip: "Leave open paper inside the teal color. A watering can should feel sketched, not painted solid."
      },
      {
        name: "Finish the keeper lines",
        text: "Deepen the strongest body, rim, handle, spout, rose, drops, flower decal, color, and shadow marks without adding new garden props.",
        tip: "Stop before the texture gets heavy. A few confident dark edges make the loose color look intentional.",
        image: true
      }
    ]
  },
  {
    slug: "paint-palette-and-brush",
    day: "019",
    date: "Tuesday, June 23",
    isoDate: "2026-06-23",
    subject: "a paint palette and brush",
    headlineSubject: "a paint palette<br>and brush",
    shortSubject: "a paint palette and brush",
    lessonTitle: "Let's draw a paint palette",
    description: "Learn how to draw a paint palette and brush with a tilted palette shape, thumb hole, diagonal brush, paint dabs, soft color, and sketchy shadow.",
    intro: "Build the palette from one tilted oval, lay a brush across it, then add uneven paint dabs and a few restrained colored-pencil accents.",
    time: 25,
    difficulty: "Easy-medium",
    accent: "#d8944c",
    finished: "paint-palette-and-brush-finished-v1.jpg",
    finishedAlt: "Graphite and colored-pencil sketch of a tilted paint palette with a thumb hole, colorful paint dabs, a diagonal brush, and a soft shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional yellow, orange, green, blue, red, and brown pencils"],
    steps: [
      {
        name: "Place the big guides",
        text: "Draw a light tilted oval for the palette, then pull one diagonal guide line across it where the brush will sit.",
        tip: "Keep the oval roomy. The paint dabs and thumb hole need space around the brush."
      },
      {
        name: "Shape the palette",
        text: "Turn the oval into a handmade palette outline with a small inward bite on one side, then add a rounded thumb hole near the upper area.",
        tip: "Draw the thumb hole as its own little oval before darkening it. That keeps it from becoming a random dent."
      },
      {
        name: "Lay in the brush",
        text: "Build the brush along the diagonal guide with a narrow handle, a short metal ferrule, and a pointed bristle shape at the lower end.",
        tip: "Let the brush overlap the palette cleanly. One confident diagonal makes the still life feel organized."
      },
      {
        name: "Add the paint dabs",
        text: "Place several uneven paint blobs around the palette, keeping them clear of the thumb hole and leaving the brush on top.",
        tip: "Make the dabs different sizes and shapes. Matching circles look more like buttons than paint."
      },
      {
        name: "Add color and shadow",
        text: "Shade the paint dabs with loose colored pencil, warm the brush tip, and add a pale graphite shadow under the palette.",
        tip: "Use light pressure so the pencil texture stays visible. The colors should decorate the sketch, not cover it."
      },
      {
        name: "Finish the keeper lines",
        text: "Deepen the strongest palette edge, thumb hole, brush, paint dab outlines, color texture, and cast shadow without adding new tools or props.",
        tip: "Stop while the palette still has open paper. A few lively paint spots are clearer than filling every blank space.",
        image: true
      }
    ]
  },
  {
    slug: "stack-of-pancakes",
    day: "018",
    date: "Monday, June 22",
    isoDate: "2026-06-22",
    subject: "a stack of pancakes",
    headlineSubject: "a stack<br>of pancakes",
    shortSubject: "a pancake stack",
    lessonTitle: "Let's draw pancakes",
    description: "Learn how to draw a stack of pancakes with three soft layers, a plate, butter, syrup drips, berries, crumb texture, and warm colored-pencil shading.",
    intro: "Build the pancakes from simple ellipses, then layer in the plate, butter, syrup, berries, and a few warm breakfast details.",
    time: 25,
    difficulty: "Easy-medium",
    accent: "#c98135",
    finished: "stack-of-pancakes-finished-v1.jpg",
    finishedAlt: "Graphite and colored-pencil sketch of a stack of three pancakes on a plate with butter, golden syrup drips, blueberries, crumb texture, and a soft shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional tan, golden yellow, brown, and blue-purple pencils"],
    steps: [
      {
        name: "Place the pancake guides",
        text: "Draw three light horizontal ellipses stacked close together, then add a faint center line to keep the pancakes lined up.",
        tip: "Let the ellipses get only a little wider toward the bottom. Too much change can make the stack look like a cone."
      },
      {
        name: "Shape the cakes and plate",
        text: "Turn each guide into an uneven pancake edge, then add a shallow plate oval underneath the bottom layer.",
        tip: "Keep the pancake edges a little wobbly. Pancakes look friendlier when they are not perfect cylinders."
      },
      {
        name: "Add butter and syrup",
        text: "Set a small tilted square on the top pancake, draw a loose syrup puddle around it, then pull two drips down the front.",
        tip: "Make the syrup cross over the pancake edges. That overlap is what sells the sticky topping."
      },
      {
        name: "Scatter a few berries",
        text: "Place a small group of round berries on each side of the plate, keeping them tucked low so the pancake stack stays dominant.",
        tip: "Vary the berry sizes and overlap one or two circles. A row of identical dots will look flat."
      },
      {
        name: "Add spots, color, and shadow",
        text: "Dot the pancakes with freckles and crumb marks, add warm tan and golden pencil, color the berries, and shade lightly under the plate.",
        tip: "Leave gaps in the color. The paper showing through keeps the pancakes soft instead of heavy."
      },
      {
        name: "Finish the keeper lines",
        text: "Deepen the strongest pancake edges, plate rim, butter, syrup drips, berries, texture marks, and cast shadow without adding new toppings.",
        tip: "Stop before every crumb is dark. A few confident marks read better than covering the pancakes with dots.",
        image: true
      }
    ]
  },
  {
    slug: "birdhouse-on-a-post",
    day: "017",
    date: "Sunday, June 21",
    isoDate: "2026-06-21",
    subject: "a birdhouse on a post",
    headlineSubject: "a birdhouse<br>on a post",
    shortSubject: "a birdhouse on a post",
    lessonTitle: "Let's draw a birdhouse",
    description: "Learn how to draw a birdhouse on a post with a simple house body, pitched roof, round doorway, perch, wood planks, leaves, and colored-pencil shading.",
    intro: "Build a friendly birdhouse from a rectangle, roof, and post, then add the doorway, perch, plank seams, wood grain, and a little garden color.",
    time: 25,
    difficulty: "Easy-medium",
    accent: "#6f9fba",
    finished: "birdhouse-on-a-post-finished-v1.jpg",
    finishedAlt: "Graphite and colored-pencil sketch of a blue wooden birdhouse on a brown post with a pitched roof, round doorway, perch, leaf sprigs, and soft shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional blue, brown, and green pencils"],
    steps: [
      {
        name: "Block in the post and house",
        text: "Draw a light vertical guide, place a narrow post on it, then set a simple upright rectangle on top for the birdhouse front.",
        tip: "Keep the post centered under the house. If the post leans, the whole birdhouse will feel like it is tipping."
      },
      {
        name: "Add the pitched roof",
        text: "Cap the rectangle with a triangle, then draw a thick horizontal roof lip where the roof meets the house front.",
        tip: "Let the roof overhang just a little on both sides. That small overhang makes the box feel sheltered."
      },
      {
        name: "Place the doorway and perch",
        text: "Add a round entrance near the upper center of the front, then draw a short peg directly below it.",
        tip: "Draw the doorway lightly as a circle before darkening the inside. A centered door keeps the simple design readable."
      },
      {
        name: "Divide the front planks",
        text: "Pull a few subtle vertical seams down the birdhouse front and into the roof triangle, stopping at the roof lip and bottom edge.",
        tip: "Do not make every plank the same width. Slightly uneven boards feel more hand-built."
      },
      {
        name: "Add grain, leaves, and color",
        text: "Mark small nail dots and wood-grain strokes, grow a few leaf sprigs near the post, then add light blue, brown, and green pencil.",
        tip: "Use color like a sketch, not paint. Leave paper gaps so the plank seams and pencil texture stay visible."
      },
      {
        name: "Finish the keeper lines",
        text: "Deepen the roof, doorway, perch, post, plank seams, leaves, and cast shadow, clarifying only the shapes already in place.",
        tip: "Avoid adding birds, flowers, or extra trim at the end. The last pass should make the existing birdhouse confident.",
        image: true
      }
    ]
  },
  {
    slug: "potted-cactus-flowers",
    day: "016",
    date: "Saturday, June 20",
    isoDate: "2026-06-20",
    subject: "a potted cactus with flowers",
    headlineSubject: "a potted cactus<br>with flowers",
    shortSubject: "a flowering cactus",
    lessonTitle: "Let's draw a potted cactus",
    description: "Learn how to draw a potted cactus with a rounded clay pot, gravel, a ribbed cactus body, side arms, pink flowers, spines, and colored-pencil shading.",
    intro: "Build a sturdy clay pot first, grow the cactus from simple rounded shapes, then finish with flowers, spine marks, and restrained colored pencil.",
    time: 30,
    difficulty: "Easy-medium",
    accent: "#c97950",
    finished: "potted-cactus-flowers-finished-v2.jpg",
    finishedAlt: "Graphite and colored-pencil sketch of a ribbed green cactus with side arms, pink flowers, gravel, and a rounded terracotta pot",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional green, terracotta, pink, and yellow pencils"],
    steps: [
      {
        name: "Block in the clay pot",
        text: "Draw a wide U-shaped pot wall, then add a thick oval rim across the top and a shallow curve along the bottom edge.",
        tip: "Keep the pot wider than the cactus will be. That stable base makes the tall plant feel balanced."
      },
      {
        name: "Add the soil and gravel",
        text: "Place a smaller oval inside the rim, then scatter uneven pebble shapes along that soil line.",
        tip: "Vary the pebble sizes and leave gaps. A few dark stones read better than a row of identical circles."
      },
      {
        name: "Grow the main cactus",
        text: "Rise from the center of the pot with a tall rounded cactus body, then curve several vertical rib lines from top to bottom.",
        tip: "Let the ribs follow the cactus sides. Straight stripes can flatten the rounded form."
      },
      {
        name: "Attach the cactus arms",
        text: "Add one shorter arm on each side, curving them upward from behind the main body and giving each arm its own rib lines.",
        tip: "Start the arms low and keep them smaller than the center cactus so the silhouette stays clear."
      },
      {
        name: "Place flowers, spines, and color",
        text: "Set an open flower on top, add two small side buds, mark tiny star spines along the ribs, then shade the cactus green and the pot terracotta.",
        tip: "Use light colored-pencil pressure first. The spines should stay sharp, so do not bury them under heavy color."
      },
      {
        name: "Finish the keeper lines",
        text: "Deepen the pot rim, cactus edges, flower petals, gravel, and cast shadow, clarifying only the shapes already in place.",
        tip: "Stop before every rib is equally dark. A few strong lines and a few soft lines make the cactus feel handmade.",
        image: true
      }
    ]
  },
  {
    slug: "camping-lantern",
    day: "015",
    date: "Friday, June 19",
    isoDate: "2026-06-19",
    subject: "a camping lantern",
    headlineSubject: "a camping<br>lantern",
    shortSubject: "a camping lantern",
    lessonTitle: "Let's draw a camping lantern",
    description: "Learn how to draw a camping lantern with a rounded base, glass globe, crossed wire guard, vent cap, side supports, handle, and warm glow.",
    intro: "Build the lantern from a sturdy base, a rounded glass globe, and a simple frame, then add a cozy colored-pencil glow.",
    time: 30,
    difficulty: "Easy-medium",
    accent: "#d7a94b",
    finished: "camping-lantern-finished-v2.jpg",
    finishedAlt: "Graphite and colored-pencil sketch of an old-fashioned teal camping lantern with a glass globe, crossed wire guard, arched handle, and warm yellow glow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional teal, gray, and yellow pencils"],
    steps: [
      {
        name: "Block in the base",
        text: "Draw a wide rounded cylinder near the bottom, then add a small shelf on top, one round control knob in front, and a smaller cap on the right.",
        tip: "Keep the base wider than the glass will be. That heavy bottom is what makes the lantern feel stable."
      },
      {
        name: "Add the globe and wire guard",
        text: "Place a tall rounded globe above the base, set a small candle cup inside it, then cross two gentle diagonal guard wires in front.",
        tip: "Let the glass sides bow outward slightly. The crossed wires should meet below the center, not exactly in the middle."
      },
      {
        name: "Build the vent cap",
        text: "Stack a shallow band and a domed cap above the globe, then add a row of small vent holes and a tiny knob on top.",
        tip: "Use the globe as your width guide. The cap can overhang a little, but it should not become wider than the base."
      },
      {
        name: "Raise the side supports",
        text: "Draw dark side rails from the base up toward the cap, adding small ring joints where the rails connect.",
        tip: "Sketch both rails lightly before darkening either one. They should lean outward in a matching pair."
      },
      {
        name: "Curve the handle and add color",
        text: "Loop a tall carrying handle over the lantern, add tiny spark marks, then shade the metal with teal and the glass with pale yellow.",
        tip: "Color with light pressure. The glow should feel warm, but the pencil lines still need to show through."
      },
      {
        name: "Finish the keeper lines",
        text: "Choose the strongest edges on the base, cap, rails, handle, and wire guard, then deepen only the shadows already in place.",
        tip: "Do not add new parts in the final pass. Clarify the lantern you already built.",
        image: true
      }
    ]
  },
  {
    slug: "patchwork-kite",
    day: "014",
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
    finished: "patchwork-kite-finished-v2.jpg",
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
    day: "013",
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
    finished: "cozy-teacup-finished-v3.jpg",
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
    day: "012",
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
    day: "010",
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
    day: "009",
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
    day: "008",
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
    day: "007",
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
  },
  {
    slug: "lemonade-glass",
    day: "006",
    date: "Wednesday, June 10",
    isoDate: "2026-06-10",
    subject: "a glass of lemonade",
    headlineSubject: "a glass of<br>lemonade",
    shortSubject: "a glass of lemonade",
    lessonTitle: "Let's draw lemonade",
    description: "Learn how to draw a glass of lemonade with a tapered clear glass, curved liquid line, bendy straw, lemon wheel, ice cubes, condensation dots, and soft yellow colored-pencil shading.",
    intro: "Build a summer drink from ellipses and light transparent layers, then add the straw, lemon, ice, and just enough yellow pencil to make it refreshing.",
    time: 25,
    difficulty: "Easy-medium",
    accent: "#d4a72f",
    finished: "lemonade-glass-finished-v1.jpg",
    finishedAlt: "Graphite and yellow colored-pencil sketch of a clear glass of lemonade with a bendy straw, lemon wheel, ice cubes, condensation dots, and table shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional yellow colored pencil"],
    steps: [
      {
        name: "Place the glass shape",
        text: "Draw a wide rim ellipse, two slightly tapered side lines, and a smaller base ellipse. Add a light center guide through the glass.",
        tip: "Make the top ellipse wider than the bottom one. That taper is what makes the glass feel tall."
      },
      {
        name: "Set the lemonade level",
        text: "Add a curved liquid line across the glass, then reinforce the lower rim and base so the glass still feels transparent.",
        tip: "Let the liquid curve echo the rim ellipse. Matching those curves keeps the lemonade from looking flat."
      },
      {
        name: "Add the straw",
        text: "Draw a diagonal straw from the bottom of the glass up through the rim, then bend the top section outward.",
        tip: "Keep both straw edges parallel. A narrow tube reads better than a single heavy line."
      },
      {
        name: "Draw lemon and ice",
        text: "Clip a lemon wheel onto the rim, divide it into wedge segments, and sketch a few tilted ice cubes inside the drink.",
        tip: "Let the ice overlap the straw and liquid line lightly. Those overlaps sell the clear-glass effect."
      },
      {
        name: "Add droplets and color",
        text: "Scatter tiny condensation dots on the glass, shade a soft table shadow, and add light yellow pencil to the lemonade and lemon slice.",
        tip: "Leave white gaps around the ice and rim. Transparent drawings need untouched paper as much as color."
      },
      {
        name: "Finish the lemonade sketch",
        text: "Darken the keeper contours, clarify the straw and lemon overlaps, and strengthen only the yellow shading and soft table shadow already in place.",
        tip: "Do not outline every droplet equally. A few dark marks plus many pale ones feel more natural.",
        image: true
      }
    ]
  },
  {
    slug: "picnic-basket",
    day: "003",
    date: "Sunday, June 7",
    isoDate: "2026-06-07",
    subject: "a picnic basket",
    headlineSubject: "a picnic<br>basket",
    shortSubject: "a picnic basket",
    lessonTitle: "Let's draw a picnic basket",
    description: "Learn how to draw a picnic basket with a rounded woven body, arched handle, folded cloth, small apple, and soft graphite shadow.",
    intro: "Build the basket from one rounded box, then layer in the handle, cloth, apple, and weave without letting the details take over.",
    time: 30,
    difficulty: "Easy-medium",
    accent: "#b67848",
    finished: "picnic-basket-finished-v1.jpg",
    finishedAlt: "Graphite sketch of a picnic basket with woven body, arched handle, folded cloth, small apple, and soft shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional red colored pencil"],
    steps: [
      {
        name: "Block in the basket",
        text: "Draw a squat rounded box for the basket body, then add a light oval rim across the top.",
        tip: "Keep the sides slightly curved. A perfectly straight box will not feel woven or handmade."
      },
      {
        name: "Raise the handle",
        text: "Draw a broad arch from one side of the basket to the other, then add a second line inside it for thickness.",
        tip: "Attach the handle low enough that it feels connected to the basket, not floating above it."
      },
      {
        name: "Tuck in the cloth",
        text: "Drape a folded cloth over the front rim and let the side corners hang over the basket edges.",
        tip: "Use a few angled fold lines, but keep the cloth simple so the basket shape stays readable."
      },
      {
        name: "Add the apple",
        text: "Place one small apple behind the cloth and tuck its bottom edge behind the basket rim.",
        tip: "Only a partial apple is needed. The overlap makes the basket feel full without adding clutter."
      },
      {
        name: "Weave the basket",
        text: "Add horizontal basket bands, break them with short vertical weave marks, and sketch a soft shadow underneath.",
        tip: "Stagger the vertical marks instead of lining them up. That is the shortcut to a woven look."
      },
      {
        name: "Finish the picnic sketch",
        text: "Darken keeper lines, shade the handle and basket, clarify the cloth folds, and lightly tint the apple if you want color.",
        tip: "Let some construction lines remain pale. They help the basket feel like a sketch, not a polished still life.",
        image: true
      }
    ]
  },
  {
    slug: "pocket-compass",
    day: "001",
    date: "Friday, June 5",
    isoDate: "2026-06-05",
    subject: "a pocket compass",
    headlineSubject: "a pocket<br>compass",
    shortSubject: "a pocket compass",
    lessonTitle: "Let's draw a pocket compass",
    description: "Learn how to draw a pocket compass with a round case, inner face, diamond needle, top loop, small tick marks, and soft graphite shading.",
    intro: "Build this small explorer's tool from two circles, then add the needle, top loop, and simple face marks without turning it into a technical diagram.",
    time: 20,
    difficulty: "Easy",
    accent: "#8a9b6b",
    finished: "pocket-compass-finished-v1.jpg",
    finishedAlt: "Graphite sketch of a round pocket compass with inner face, diamond needle, top loop, tick marks, case shading, and cast shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional blending stump or tissue"],
    steps: [
      {
        name: "Start the round case",
        text: "Draw a loose circle for the compass case, then echo it with a second light circle just inside the edge.",
        tip: "Turn the paper as you draw. Small sketchy passes make a round object easier than one hard outline."
      },
      {
        name: "Add the face circle",
        text: "Place a smaller circle inside the case and mark a tiny center point for the needle.",
        tip: "Keep the face circle centered. The compass will feel sturdy even if the outer case is a little wobbly."
      },
      {
        name: "Set the needle",
        text: "Draw a long diamond needle through the center, with one point reaching up and one point reaching down.",
        tip: "Use the center point as a hinge. Both needle halves should feel connected, not like two separate triangles."
      },
      {
        name: "Attach the top loop",
        text: "Add a small hinge cap and round hanging loop at the top of the case.",
        tip: "Let the loop overlap the case slightly. That overlap makes it look attached instead of floating."
      },
      {
        name: "Mark ticks and shadow",
        text: "Add short tick marks around the face, then shade the case edge and the cast shadow lightly.",
        tip: "Skip letters and numbers. A few ticks are enough to make the object read as a compass."
      },
      {
        name: "Finish the compass",
        text: "Darken the keeper contours, clarify the needle and tick marks, and strengthen the graphite shadow under the case.",
        tip: "Save your darkest pencil pressure for the case rim and needle. The face should stay clean and readable.",
        image: true
      }
    ]
  },
  {
    slug: "stack-of-books",
    day: "002",
    date: "Saturday, June 6",
    isoDate: "2026-06-06",
    subject: "a stack of books",
    headlineSubject: "a stack<br>of books",
    shortSubject: "a stack of books",
    lessonTitle: "Let's draw a stack of books",
    description: "Learn how to draw a stack of books with three offset book blocks, page edges, a ribbon bookmark, worn cover bands, and soft graphite shading.",
    intro: "Build this book pile from simple rectangles, then add page lines, a hanging bookmark, and just enough shading to make the stack feel cozy.",
    time: 20,
    difficulty: "Easy",
    accent: "#8aa15f",
    finished: "stack-of-books-finished-v1.jpg",
    finishedAlt: "Graphite sketch of three stacked books with page edges, a ribbon bookmark, worn cover bands, and soft shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional blending stump or tissue"],
    steps: [
      {
        name: "Stack two rectangles",
        text: "Draw a wide bottom book, then place a second rectangle on top with a small sideways offset.",
        tip: "Keep the book corners lightly squared. Tiny angle differences make the stack feel natural."
      },
      {
        name: "Place the top book",
        text: "Add a smaller top book and line up its side edges with the perspective of the books below.",
        tip: "Use the lower books as rulers. The top book should sit on the stack, not float above it."
      },
      {
        name: "Mark the pages",
        text: "Add thin page-edge lines along the visible sides of each book.",
        tip: "Draw fewer page lines than you think you need. A few clear strokes read better than a gray block."
      },
      {
        name: "Drop in the bookmark",
        text: "Hang a narrow ribbon bookmark from the top book and let it overlap the book below.",
        tip: "A bookmark works best when it crosses an existing edge. That overlap makes the stack feel layered."
      },
      {
        name: "Add worn cover details",
        text: "Sketch simple cover bands, corner wear, and a soft shadow under the bottom book.",
        tip: "Keep the wear marks short and uneven. The books should look used, not dirty."
      },
      {
        name: "Finish the book stack",
        text: "Darken the keeper lines, clarify the page edges and bookmark, and add restrained graphite shading to the books and shadow.",
        tip: "Save the darkest value for the gaps between books. Those small shadows do most of the stacking work.",
        image: true
      }
    ]
  },
  {
    slug: "seashell-on-sand",
    day: "004",
    date: "Monday, June 8",
    isoDate: "2026-06-08",
    subject: "a seashell on sand",
    headlineSubject: "a seashell<br>on sand",
    shortSubject: "a seashell",
    lessonTitle: "Let's draw a seashell",
    description: "Learn how to draw a seashell on sand with a fan-shaped outline, scalloped outer edge, radiating ridges, small hinge, lower folds, pebbles, shadow, and restrained peach pencil shading.",
    intro: "Start with one fan shape, then add scallops, ridges, hinge folds, and a few sandy marks to make the shell feel grounded.",
    time: 25,
    difficulty: "Easy-medium",
    accent: "#c89272",
    finished: "seashell-on-sand-finished-v1.jpg",
    finishedAlt: "Graphite and peach colored-pencil sketch of a fan-shaped seashell on sand with scalloped edge, radiating ridges, hinge folds, pebbles, and cast shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional peach and tan pencils"],
    steps: [
      {
        name: "Block the shell fan",
        text: "Draw a small hinge circle near the bottom, then open a wide fan shape above it with a light center guide.",
        tip: "Make the shell wider than it is tall. That broad fan shape is the main read."
      },
      {
        name: "Scallop the edge",
        text: "Turn the outer arc into rounded bumps, keeping the left and right sides angled back toward the hinge.",
        tip: "The scallops do not need to match perfectly. Slightly uneven bumps feel more natural."
      },
      {
        name: "Pull the ridges",
        text: "Draw curved ridge lines from the hinge toward the scalloped edge, spacing them wider as they fan outward.",
        tip: "Aim each ridge at a scallop valley or bump. That makes the shell structure easier to follow."
      },
      {
        name: "Define the hinge",
        text: "Darken the small hinge area and add short lower fold marks where the ridges gather near the base.",
        tip: "Keep this area compact. Too many dark folds at the bottom can make the shell look heavy."
      },
      {
        name: "Set it in sand",
        text: "Add a soft cast shadow, a few small pebbles, scattered sand dots, and light peach-tan shading across the shell.",
        tip: "Put more shadow on one side. That simple choice helps the pale shell lift off the sand."
      },
      {
        name: "Finish the shell sketch",
        text: "Strengthen the shell outline, scallops, ridges, hinge, sand marks, shadow, and peach shading without adding waves or extra shells.",
        tip: "Leave plenty of white paper on the ridges. The shell should feel sketched, not fully colored.",
        image: true
      }
    ]
  },
  {
    slug: "soccer-ball-on-grass",
    day: "005",
    date: "Tuesday, June 9",
    isoDate: "2026-06-09",
    subject: "a soccer ball on grass",
    headlineSubject: "a soccer<br>ball",
    shortSubject: "a soccer ball",
    lessonTitle: "Let's draw a soccer ball",
    description: "Learn how to draw a soccer ball on grass with a round outline, center pentagon, curved panel seams, dark patches, grass tufts, and simple pencil shading.",
    intro: "Start with a clean circle, then use one center pentagon to organize the panels before adding grass and sketchy shadow.",
    time: 25,
    difficulty: "Easy-medium",
    accent: "#4f6f51",
    finished: "soccer-ball-on-grass-finished-v1.jpg",
    finishedAlt: "Graphite sketch of a soccer ball with pentagon panels resting in short grass",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional blending stump or tissue"],
    steps: [
      {
        name: "Start the ball circle",
        text: "Draw a large light circle, then add a soft ground line where the ball will touch the grass.",
        tip: "Turn the paper while drawing the circle. Several light passes are better than one heavy outline."
      },
      {
        name: "Place the center pentagon",
        text: "Put a five-sided patch just below the middle of the circle and angle its bottom point downward.",
        tip: "This patch is the anchor. If it feels centered and upright, the rest of the seams are easier to place."
      },
      {
        name: "Pull out the seams",
        text: "Draw short seam lines from each corner of the pentagon, bending them slightly as they travel around the ball.",
        tip: "Curve the seams with the round form. Straight ruler lines will flatten the ball."
      },
      {
        name: "Complete the panels",
        text: "Connect the seam lines into larger patch shapes around the circle and choose a few dark panels near the edge.",
        tip: "The edge panels can be partial. Let them disappear behind the round outline instead of forcing full shapes."
      },
      {
        name: "Add grass and shadow",
        text: "Sketch tufts of grass around the lower edge, then add a soft cast shadow under the ball.",
        tip: "Use short, uneven grass strokes. A little messiness makes the ball feel like it is sitting outside."
      },
      {
        name: "Finish the match ball",
        text: "Darken the keeper seams and black patches, then add gentle shading to the white panels so the ball stays round.",
        tip: "Leave highlights on the upper panels. Too much shading everywhere will make the ball look muddy.",
        image: true
      }
    ]
  },
];

const archiveLessons = [...lessons]
  .sort((first, second) => new Date(second.isoDate) - new Date(first.isoDate));
const latestLesson = archiveLessons[0];

const relatedCards = (currentSlug) => lessons
  .filter(({ slug }) => slug !== currentSlug)
  .slice(0, 3)
  .map((lesson) => `
    <a class="sketch-card" href="${lesson.slug}.html">
      <div class="card-art"><img src="../assets/${lesson.finished}" alt=""></div>
      <p>${lesson.time} min · ${lesson.difficulty}</p>
      <h3>How to draw ${lesson.shortSubject}</h3>
    </a>`)
  .join("");

const materialIcon = (material) => {
  const normalized = material.toLowerCase();
  if (normalized.includes("paper")) return "paper-icon";
  if (normalized.includes("eraser")) return "eraser-icon";
  if (normalized.includes("colored") || normalized.includes("pencil")) {
    return normalized.includes("graphite") ? "pencil-icon" : "colored-pencils-icon";
  }
  return "pencil-icon";
};
const titleCase = (value) => value.replace(/\b\w/g, (character) => character.toUpperCase());
const escapeHtml = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#39;");
const headlineHtml = (value) => String(value)
  .split(/<br\s*\/?>/i)
  .map((line, lineIndex, lines) => {
    const words = line.trim().split(/\s+/).filter(Boolean);
    const letterCount = words.join("").length;
    const sizeClass = letterCount >= 14 ? " headline-line-compact" : letterCount >= 11 ? " headline-line-tight" : "";
    const wordHtml = words
      .map((word, wordIndex) => {
        const isUnderlineWord = lineIndex === lines.length - 1 && wordIndex === words.length - 1;
        return `<span class="headline-word${isUnderlineWord ? " headline-underline" : ""}">${escapeHtml(word)}</span>`;
      })
      .join(" ");
    return `<span class="headline-line${sizeClass}">${wordHtml}</span>`;
  })
  .join(" ");
const escapeXml = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&apos;");
const lessonUrl = (lesson) => `${siteUrl}/tutorials/${lesson.slug}.html`;
const lessonImageUrl = (lesson) => `${siteUrl}/assets/${lesson.finished}`;
const rssPubDate = (isoDate) => new Date(`${isoDate}T12:00:00-07:00`).toUTCString();

// Shared entity nodes referenced by @id across every page's JSON-LD graph.
const orgNode = {
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "Sketcha.day",
  url: `${siteUrl}/`,
  logo: `${siteUrl}/assets/site-icon.png`
};
const siteNode = {
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "Sketcha.day",
  url: `${siteUrl}/`,
  description: "Daily sketch lessons that build drawing confidence through small, repeatable pencil practice.",
  publisher: { "@id": `${siteUrl}/#organization` }
};

const page = (lesson) => {
  const titleSubject = titleCase(lesson.shortSubject.replace(/^a /, ""));
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      orgNode,
      siteNode,
      {
        "@type": "HowTo",
        "@id": `${lessonUrl(lesson)}#howto`,
        name: `How to Draw a ${titleSubject}`,
        description: lesson.description,
        image: `${siteUrl}/assets/${lesson.finished}`,
        datePublished: lesson.isoDate,
        dateModified: lesson.updated || lesson.isoDate,
        author: { "@id": `${siteUrl}/#organization` },
        publisher: { "@id": `${siteUrl}/#organization` },
        totalTime: `PT${lesson.time}M`,
        supply: lesson.materials.map((name) => ({ "@type": "HowToSupply", name })),
        step: lesson.steps.map(({ name, text }) => ({ "@type": "HowToStep", name, text }))
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
          { "@type": "ListItem", position: 2, name: "Sketch library", item: `${siteUrl}/library.html` },
          { "@type": "ListItem", position: 3, name: `How to draw ${lesson.subject}`, item: lessonUrl(lesson) }
        ]
      }
    ]
  };

  const steps = lesson.steps.map((step, index) => `
          <li class="step-card${step.image ? " final-step" : ""}">
            <button class="step-check" type="button" aria-label="Mark step ${index + 1} complete"><span></span></button>
            <div class="step-number">${String(index + 1).padStart(2, "0")}</div>
            <div class="step-art${step.image ? " finished-mini" : ""}">
              ${step.image
                ? `<img src="../assets/${lesson.finished}" alt="${lesson.finishedAlt}" width="1254" height="1254" loading="lazy">`
                : step.svg
                ? step.svg
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
${iconLinks}
  <link rel="alternate" type="application/rss+xml" title="Sketcha.day daily sketch feed" href="${siteUrl}/feed.xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Caveat+Brush&family=DM+Sans:opsz,wght@9..40,400;9..40,600;9..40,700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../styles.css?v=${styleVersion}">
  <script type="application/ld+json">${JSON.stringify(schema, null, 2)}</script>
  <script defer data-domain="sketcha.day" src="https://analytics.robbymccullough.com/js/script.js"></script>
</head>
<body class="archive-tutorial" style="--lesson-accent: ${lesson.accent}">
  <a class="skip-link" href="#lesson">Skip to the lesson</a>
  <header class="site-header">
    <div class="brand">
      <img class="brand-mark" src="../assets/logo-pencil-raster-v1.png" alt="" width="72" height="72">
      <a class="brand-wordmark" href="../" aria-label="Sketcha.day home"><span class="brand-name">${brandWordmark}</span></a>
    </div>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav"><span></span><span></span><span></span><span class="sr-only">Open menu</span></button>
    <nav class="site-nav" id="site-nav" aria-label="Main navigation">
      <a href="../">Today's sketch</a>
      <a href="../library.html">Sketch library</a>
      <a href="../#about">How it works</a>
      <a href="https://doodlea.day/">Doodlea.day</a>
      <a class="nav-button" href="#lesson">Start drawing</a>
    </nav>
  </header>
  <main>
    <section class="hero" aria-labelledby="hero-title">
      <div class="doodle doodle-star" aria-hidden="true">✦</div>
      <div class="hero-copy">
        <p class="eyebrow">${lesson.date}</p>
        <h1 id="hero-title" aria-label="How to draw ${lesson.subject}"><span class="headline-lead">How to draw...</span> <em aria-hidden="true">${headlineHtml(lesson.headlineSubject ?? lesson.subject)}</em></h1>
        <p class="hero-intro">${lesson.intro}</p>
        <div class="hero-meta" aria-label="Lesson details"><span><strong>${lesson.time}</strong> min</span><span><strong>${lesson.difficulty}</strong></span></div>
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
        <p>Treat this as one small practice round: build the subject lightly, notice the shapes, then darken only the lines that help the finished sketch.</p>
      </header>
      <div class="lesson-layout">
        <aside class="materials paper-panel" aria-labelledby="materials-title">
          <div class="pushpin" aria-hidden="true"></div>
          <p class="hand-note">Grab your stuff</p>
          <h3 id="materials-title">Materials</h3>
          <ul>${lesson.materials.map((material, index) => `<li><span class="material-icon ${materialIcon(material)}" aria-hidden="true"></span><div><strong>${material}</strong><small>${index === 3 ? "Completely optional" : "Whatever you already have"}</small></div></li>`).join("")}</ul>
          <p class="materials-note">No colored pencil? Graphite alone makes a complete sketch.</p>
        </aside>
        <ol class="steps">${steps}
        </ol>
      </div>
    </article>
    <section class="library related-library" id="related" aria-labelledby="related-title">
      <header class="section-heading library-heading"><div><p class="kicker">Another page of practice</p><h2 id="related-title">More daily sketches</h2></div><a href="../library.html">Browse the full library <span aria-hidden="true">→</span></a></header>
      <div class="library-grid">${relatedCards(lesson.slug)}
      </div>
    </section>
  </main>
  <footer class="site-footer">
    <div class="footer-bar">
      <div class="footer-identity">
        <a class="brand footer-brand" href="../"><span class="brand-name">${brandWordmark}</span></a>
        <p class="footer-tagline">Soft pencil practice, one daily sketch at a time.</p>
      </div>
      <nav aria-label="Footer navigation"><a href="../">Today</a><a href="../library.html">Library</a><a href="../#about">About</a><a href="https://doodlea.day/">Doodlea.day</a><a href="mailto:hello@sketcha.day">Say hello</a></nav>
    </div>
    <small class="footer-copyright">© 2026 Sketcha.day</small>
  </footer>
  <script src="../script.js"></script>
</body>
</html>`;
};

const homePage = (lesson) => {
  const homeOnlySections = `
    <section class="about" id="about">
      <div class="about-drawing">
        <img src="assets/daily-drawing-sketchbook-spread.webp" alt="A wide open sketchbook spread filled with daily sketches of a frog, mushroom, sprout, sleepy cat, pancakes, and a paint palette" width="780" height="295">
      </div>
      <div class="about-copy">
        <p class="kicker">A pencil page for today</p>
        <h2>Build a calmer drawing habit, one sketch at a time.</h2>
        <p>Sketcha.day is for the kind of practice that makes you slow down and really look. Each lesson gives you a small subject to measure, block in, adjust, and shade, so your eye and hand get a little more fluent with every finished page.</p>
        <p class="sister-note">Want the louder marker version? Visit <a href="https://doodlea.day/">Doodlea.day</a> for bright comic-style doodles.</p>
        <div class="about-points">
          <p><strong>Notebook-sized sessions</strong><span>Most lessons take 15-30 minutes and leave you with a complete sketch.</span></p>
          <p><strong>Look, place, refine</strong><span>Practice proportions, edges, negative space, texture, and soft value changes.</span></p>
          <p><strong>Subjects worth revisiting</strong><span>Animals, food, objects, and simple scenes give you practical drawing problems to solve.</span></p>
        </div>
      </div>
    </section>

    <section class="newsletter" id="newsletter" aria-labelledby="newsletter-title">
      <div class="newsletter-pencil" aria-hidden="true"></div>
      <p class="hand-note">A tiny creative nudge</p>
      <h2 id="newsletter-title">A fresh sketch in your inbox.</h2>
      <p>Coming soon: one prompt, one practical tutorial, and a gentle reason to draw again tomorrow. Want it first? <a href="mailto:hello@sketcha.day?subject=Sketcha.day%20daily%20email%20interest">Email us to say you're interested</a>.</p>
      <form class="signup-form">
        <label class="sr-only" for="email">Email address</label>
        <input id="email" name="email" type="email" autocomplete="email" placeholder="Newsletter coming soon" disabled>
        <button type="submit" disabled>Coming soon</button>
      </form>
      <small>The daily email list is not open yet. A quick note helps us decide when to build it.</small>
      <p class="form-message" role="status" aria-live="polite"></p>
    </section>
`;

  // Approach B: the homepage keeps today's full lesson, but its canonical/og:url stay
  // pointed at the tutorial URL (set in page()) so the tutorial is the indexed copy.
  // We deliberately do NOT rewrite those absolute tutorial URLs to "/" here.
  let html = page(lesson)
    .replace('<body class="archive-tutorial"', '<body class="home-page archive-tutorial"')
    .replaceAll(`href="../styles.css?v=${styleVersion}"`, `href="styles.css?v=${styleVersion}"`)
    .replaceAll('src="../script.js"', 'src="script.js"')
    .replaceAll("../assets/", "assets/")
    .replaceAll("../library.html", "library.html")
    .replaceAll("../#about", "#about")
    .replaceAll('href="../"', 'href="/"')
    .replaceAll("Skip to the lesson", "Skip to today's lesson")
    .replaceAll("Finished sketch <span>", "Today's finished sketch <span>")
    .replaceAll("From the archive", "Pencil ready?")
    .replace("  </main>", `${homeOnlySections}  </main>`);

  for (const item of archiveLessons) {
    if (item.slug) {
      html = html.replaceAll(`href="${item.slug}.html"`, `href="tutorials/${item.slug}.html"`);
    }
  }

  // Swap the inherited HowTo graph for a homepage WebSite + Organization graph.
  // The HowTo lives on the canonical tutorial page, not the duplicated homepage.
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [orgNode, siteNode]
  };
  html = html.replace(
    /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
    `<script type="application/ld+json">${JSON.stringify(homeSchema, null, 2)}</script>`
  );

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
          <p><time datetime="${lesson.isoDate}">${lesson.date.replace(/^[^,]+, /, "")}</time> · ${lesson.time} min · ${lesson.difficulty}</p>
          <h2>How to draw ${lesson.subject}</h2>
          <span class="card-link">Open tutorial <span aria-hidden="true">→</span></span>
        </a>`;
};

const archivePage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      orgNode,
      siteNode,
      {
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
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
          { "@type": "ListItem", position: 2, name: "Sketch library", item: `${siteUrl}/library.html` }
        ]
      }
    ]
  };

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Drawing Tutorial Library | Easy Step-by-Step Sketches | Sketcha.day</title>
  <meta name="description" content="Browse every Sketcha.day drawing tutorial. Find approachable daily sketch lessons that help you practice shapes, proportion, line confidence, and shading.">
  <link rel="canonical" href="https://sketcha.day/library.html">
  <meta property="og:type" content="website">
  <meta property="og:title" content="The Sketcha.day Drawing Tutorial Library">
  <meta property="og:description" content="A growing library of daily sketch lessons for building drawing confidence one page at a time.">
  <meta property="og:url" content="https://sketcha.day/library.html">
  <meta property="og:image" content="https://sketcha.day/assets/fox-finished-v2.jpg">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="theme-color" content="#f3b63c">
${iconLinks}
  <link rel="alternate" type="application/rss+xml" title="Sketcha.day daily sketch feed" href="${siteUrl}/feed.xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Caveat+Brush&family=DM+Sans:opsz,wght@9..40,400;9..40,600;9..40,700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css?v=${styleVersion}">
  <script type="application/ld+json">${JSON.stringify(schema, null, 2)}</script>
  <script defer data-domain="sketcha.day" src="https://analytics.robbymccullough.com/js/script.js"></script>
</head>
<body class="library-page">
  <a class="skip-link" href="#tutorial-library">Skip to the tutorial library</a>
  <header class="site-header">
    <div class="brand">
      <img class="brand-mark" src="assets/logo-pencil-raster-v1.png" alt="" width="72" height="72">
      <a class="brand-wordmark" href="/" aria-label="Sketcha.day home"><span class="brand-name">${brandWordmark}</span></a>
    </div>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav"><span></span><span></span><span></span><span class="sr-only">Open menu</span></button>
    <nav class="site-nav" id="site-nav" aria-label="Main navigation">
      <a href="/">Today's sketch</a>
      <a href="library.html" aria-current="page">Sketch library</a>
      <a href="/#about">How it works</a>
      <a href="https://doodlea.day/">Doodlea.day</a>
      <a class="nav-button" href="/#lesson">Start drawing</a>
    </nav>
  </header>
  <main>
    <section class="archive-hero" aria-labelledby="archive-title">
      <div class="archive-intro">
        <p class="eyebrow"><span>${archiveLessons.length} tutorials</span> One new page every day</p>
        <h1 id="archive-title" aria-label="The sketch library"><span class="headline-lead">The sketch</span> <em aria-hidden="true"><span>library</span></em></h1>
        <p>Missed a day? Start anywhere. Every lesson gives you a small, finishable practice round so daily practice can build into steadier lines, sharper observation, and more confident sketches.</p>
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
          <h2 id="tutorial-library-title">Practice your way through the days</h2>
        </div>
        <p class="archive-count">Newest first · ${archiveLessons.length} lessons</p>
      </header>
      <div class="library-grid archive-grid">
        ${archiveLessons.map(archiveCard).join("")}
      </div>
    </section>
  </main>
  <footer class="site-footer">
    <div class="footer-bar">
      <div class="footer-identity">
        <a class="brand footer-brand" href="/"><span class="brand-name">${brandWordmark}</span></a>
        <p class="footer-tagline">Soft pencil practice, one daily sketch at a time.</p>
      </div>
      <nav aria-label="Footer navigation"><a href="/">Today</a><a href="library.html" aria-current="page">Library</a><a href="/#about">About</a><a href="https://doodlea.day/">Doodlea.day</a><a href="mailto:hello@sketcha.day">Say hello</a></nav>
    </div>
    <small class="footer-copyright">© 2026 Sketcha.day</small>
  </footer>
  <script src="script.js"></script>
</body>
</html>`;
};

const feed = () => `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>Sketcha.day Daily Sketches</title>
    <link>${siteUrl}/</link>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Daily sketch lessons that build drawing confidence through small, repeatable pencil practice.</description>
    <language>en-us</language>
    <lastBuildDate>${rssPubDate(latestLesson.isoDate)}</lastBuildDate>
${archiveLessons.map((lesson) => `    <item>
      <title>${escapeXml(`How to draw ${lesson.subject}`)}</title>
      <link>${lessonUrl(lesson)}</link>
      <guid isPermaLink="true">${lessonUrl(lesson)}</guid>
      <pubDate>${rssPubDate(lesson.isoDate)}</pubDate>
      <description>${escapeXml(lesson.description)}</description>
      <media:content url="${lessonImageUrl(lesson)}" medium="image" />
    </item>`).join("\n")}
  </channel>
</rss>
`;

const sitemapUrls = [
  { loc: `${siteUrl}/`, lastmod: latestLesson.isoDate, changefreq: "daily", priority: "1.0" },
  { loc: `${siteUrl}/library.html`, lastmod: latestLesson.isoDate, changefreq: "daily", priority: "0.8" },
  ...archiveLessons.map((lesson) => ({
    loc: lessonUrl(lesson),
    lastmod: lesson.isoDate,
    changefreq: "monthly",
    priority: "0.7"
  }))
];

const sitemap = () => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map((url) => `  <url>
    <loc>${escapeXml(url.loc)}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join("\n")}
</urlset>
`;

// lab.html stays crawlable so its noindex meta is honored; /drafts/ is unlinked scratch.
const robots = () => `User-agent: *
Allow: /
Disallow: /drafts/

Sitemap: ${siteUrl}/sitemap.xml
`;

await mkdir(new URL("../tutorials/", import.meta.url), { recursive: true });
for (const lesson of lessons) {
  await writeFile(new URL(`../tutorials/${lesson.slug}.html`, import.meta.url), page(lesson));
}
await writeFile(new URL("../index.html", import.meta.url), homePage(latestLesson));
await writeFile(new URL("../library.html", import.meta.url), archivePage());
await writeFile(new URL("../feed.xml", import.meta.url), feed());
await writeFile(new URL("../sitemap.xml", import.meta.url), sitemap());
await writeFile(new URL("../robots.txt", import.meta.url), robots());

console.log(`Built ${lessons.length} tutorial pages, the homepage, the tutorial library, feed.xml, sitemap.xml, and robots.txt.`);
