import { mkdir, writeFile } from "node:fs/promises";

const siteUrl = "https://sketcha.day";
const styleVersion = "20260704-library-compact";
const brandWordmark = `sketch<span class="brand-accent">a</span><span class="brand-domain">.day</span>`;
const iconLinks = `  <link rel="icon" href="/favicon.ico">
  <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="48x48" href="/assets/favicon-48x48.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="512x512" href="/assets/site-icon.png">`;

const lessons = [
  {
    slug: "porch-swing-with-cushion",
    day: "060",
    date: "Wednesday, July 15",
    isoDate: "2026-07-15",
    updated: "2026-07-15",
    subject: "a porch swing with a cushion",
    headlineSubject: "a porch swing<br>with a cushion",
    shortSubject: "a porch swing",
    lessonTitle: "Let's draw a porch swing with a cushion",
    description: "Learn how to draw a porch swing by reserving the cushion space first, building only visible woodwork, connecting two vertical chains to armrest eye bolts, and adding a slatted back with restrained pencil color.",
    intro: "Reserve the cushion footprint before you commit to the woodwork, then draw only the rails, arms, and supports that will remain visible around it. This keeps the process honest: you will not spend time rendering seat boards that the cushion immediately covers. The centered view also makes a useful practice sketch for comparing matched spaces and repeated gaps.",
    time: 25,
    difficulty: "Medium",
    accent: "#6f9ea0",
    finished: "porch-swing-with-cushion-finished-v3.jpg",
    finishedAlt: "Handmade graphite and colored-pencil sketch of a near-front wooden porch swing with two vertical chains connected directly to armrest eye bolts, visible vertical back slats, a pale teal seat cushion, exposed warm wood rails, and a soft floor shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional pale teal and brown pencils"],
    materialNote: "Use graphite for the visible structure and chains. Add pale teal and brown pencil only after the cushion and the back slats that remain visible are established.",
    tipLabel: "Sketch tip",
    steps: [
      { name: "Reserve the cushion space", text: "Draw the light outer bench envelope and tall back guide, then reserve a rounded rectangle where the cushion will sit. Add a center axis and mark matching armrest heights, but leave the chains out.", tip: "Treat the cushion guide as a promise about visibility. Any finished line placed inside it now would be covered later, so keep that area empty apart from the pale guide." },
      { name: "Draw only visible woodwork", text: "Build the front apron below the cushion, the narrow rails at its outer edges, both front supports and armrests, then place one eye-bolt ring on each arm. Do not add seat slats or wood grain beneath the reserved cushion.", tip: "Before darkening a board, ask whether you can still see it in the finished swing. If the cushion will hide it, omit it or leave only the faint construction needed for alignment." },
      { name: "Add the hanging chains", text: "Drop one vertical chain from above into each established eye bolt, ending the final link at the ring with no chain continuing below the armrest.", tip: "Build both chains a few links at a time and alternate each link's direction. Comparing them in short matched sections helps the spacing stay even." },
      { name: "Add the cushion and back slats", text: "Commit the soft cushion over its reserved footprint, then build the tall back frame and divide only that visible area into vertical back slats.", tip: "Set the first and last back slat, then fit the others between them. These slats remain visible above the cushion; there is no need to invent a second set underneath it." },
      { name: "Shade the porch swing", text: "Add pale teal pencil to the established cushion, a restrained brown tint to the exposed wood, and a soft graphite shadow under the swing.", tip: "Pull color strokes along each visible form: lengthwise on the exposed boards and across the cushion's soft plane. Keep some paper showing so the sketch stays light." },
      { name: "Settle the swing sketch", text: "Strengthen the keeper contours and clarify the established vertical chains, armrest eye bolts, visible back slats, cushion color, exposed wood tone, and shadow.", tip: "Check that each chain stops cleanly at its ring and that no seat detail appears through the cushion. Then stop—the visible frame, slatted back, and one comfortable cushion already tell the whole story.", image: true }
    ]
  },
  {
    slug: "ceramic-mixing-bowl-and-whisk",
    day: "001",
    date: "Sunday, May 17",
    isoDate: "2026-05-17",
    subject: "a ceramic mixing bowl and whisk",
    headlineSubject: "a ceramic mixing<br>bowl and whisk",
    shortSubject: "a mixing bowl and whisk",
    lessonTitle: "Let's draw a ceramic mixing bowl and whisk",
    description: "Learn how to draw a ceramic mixing bowl and whisk with a wide elliptical rim, rounded bowl and foot, angled balloon whisk, visible batter surface, simple blue bands, restrained pencil color, and a soft graphite shadow.",
    intro: "Build the bowl from a few calm ellipses, then rest a whisk inside before adding the batter, ceramic bands, and quiet pencil color. This honest archive lesson is a fresh kitchen-sketch prompt, not a claim about past attention, comments, or popularity.",
    time: 20,
    difficulty: "Easy-medium",
    accent: "#7297b4",
    finished: "ceramic-mixing-bowl-and-whisk-finished-v1.jpg",
    finishedAlt: "Handmade graphite and colored-pencil sketch of a three-quarter ceramic mixing bowl with pale blue bands, warm batter, an angled metal balloon whisk, small foot ring, and soft ground shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional pale blue and ochre pencils"],
    materialNote: "Use graphite for the bowl structure, whisk, and shadow. Add pale blue and ochre pencil only after the rim, batter, whisk, and ceramic bands are established.",
    tipLabel: "Sketch tip",
    steps: [
      { name: "Place the bowl ellipses", text: "Draw a light wide ellipse for the rim, add a center axis, then curve the bowl body down to a small foot guide.", tip: "Ghost the rim several times before committing. Keep the back half of the ellipse a little lighter so the front edge reads clearly." },
      { name: "Shape the ceramic bowl", text: "Build the thick rim, rounded body, and small foot inside the guides, then add a faint grounding shadow beneath the bowl.", tip: "Compare the left and right curves against the center axis. They can stay handmade, but both should arrive at the foot without a sudden flat spot." },
      { name: "Rest the whisk inside", text: "Angle the whisk handle up to the right and fan several looped wires into the established bowl.", tip: "Place the handle first, then draw the outer whisk wires before fitting the inner loops between them. Keep every wire aimed toward the same handle joint." },
      { name: "Add batter and bands", text: "Draw the visible batter surface inside the rim and add two simple ceramic bands around the existing bowl.", tip: "Echo the rim ellipse for the batter and let the bands follow the bowl's curve. Straight horizontal stripes would flatten the rounded form." },
      { name: "Shade the kitchen tools", text: "Add pale blue to the bowl, warm ochre to the batter, subtle graphite on the whisk, and strengthen the established ground shadow.", tip: "Use curved color strokes that wrap around the ceramic body. Leave some paper showing so the bowl still feels like a quick sketch rather than a painted object." },
      { name: "Finish the mixing sketch", text: "Strengthen the keeper contours and clarify the established whisk wires, batter, ceramic bands, pale color, metal shading, and shadow.", tip: "Stop before adding flour bags, eggs, towels, or a countertop scene. The bowl, batter, and whisk already give you a complete kitchen study.", image: true }
    ]
  },
  {
    slug: "old-fashioned-pocket-watch",
    day: "059",
    date: "Tuesday, July 14",
    isoDate: "2026-07-14",
    subject: "an old-fashioned pocket watch",
    headlineSubject: "an old-fashioned<br>pocket watch",
    shortSubject: "a pocket watch",
    lessonTitle: "Let's draw an old-fashioned pocket watch",
    description: "Learn how to draw an old-fashioned pocket watch with a round metal case, inner dial, crown and bow loop, simple hour marks, two hands, a loose chain, warm brass pencil tint, and a soft graphite shadow.",
    intro: "Begin with two calm circles, then build the crown, dial, hands, and chain before adding a little graphite and warm color. The small looseness in a pencil circle can make an old watch feel more lived-in than a perfectly mechanical outline.",
    time: 25,
    difficulty: "Easy-medium",
    accent: "#b9934b",
    finished: "old-fashioned-pocket-watch-finished-v1.jpg",
    finishedAlt: "Handmade graphite and warm ochre pencil sketch of an old-fashioned round pocket watch with a crown loop, simple dial marks, two hands, loose chain, and soft ground shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional ochre or warm yellow pencil"],
    materialNote: "Use graphite for construction, the dial, chain, and shadow. Add a light ochre pencil only after the watch case is clearly established.",
    tipLabel: "Sketch tip",
    steps: [
      { name: "Place the watch circles", text: "Draw a light outer circle for the case and a smaller inner circle for the dial, then cross the dial with a faint vertical and horizontal guide.", tip: "Ghost each circle several times before committing. Let the loops stay gently handmade; a few pale adjustments are more useful than pressing hard." },
      { name: "Add the crown", text: "Build a small crown and rounded bow loop directly on the established top edge of the watch case.", tip: "Keep the crown short and centered on the vertical guide. Compare the open space inside the bow loop before darkening its edge." },
      { name: "Set the dial", text: "Add the inset dial ring and simple hour marks around the existing inner circle.", tip: "Place the top, bottom, left, and right marks first, then fit the other marks between them. That keeps the dial balanced without measuring every gap." },
      { name: "Draw hands and chain", text: "Place two hands inside the dial and attach a loose short chain to the right side of the case.", tip: "Use a few linked ovals for the chain rather than drawing a single dark rope. Let it relax into a small curve so it feels like metal with weight." },
      { name: "Shade the metal", text: "Add a pale ochre tint around the existing case and crown, then lay a soft graphite shadow under the watch and chain.", tip: "Keep the color light enough for the graphite lines to remain visible. Shade along the curve of the case instead of filling it like a flat disk." },
      { name: "Finish the watch sketch", text: "Strengthen the keeper contours, clarify the existing dial, hands, and chain links, and balance the established tint and shadow.", tip: "Stop before adding a table scene, numbers, or extra charms. The crown, dial, and loose chain already give the watch its old-fashioned character.", image: true }
    ]
  },
  {
    slug: "wooden-artist-easel",
    day: "002",
    date: "Monday, May 18",
    isoDate: "2026-05-18",
    subject: "a wooden artist easel",
    headlineSubject: "a wooden artist<br>easel",
    shortSubject: "an artist easel",
    lessonTitle: "Let's draw a wooden artist easel",
    description: "Learn how to draw a wooden artist easel with a tall A-frame, small blank canvas, shallow support shelf, rear support leg, simple crossbars, light wood grain, pale brown pencil tint, and a soft floor shadow.",
    intro: "Start with the tall A-frame, then nest a blank canvas into it before adding the shelf, support, and a little warm wood tone. This honest archive lesson is a fresh studio sketch prompt, not a claim about past activity or popularity.",
    time: 25,
    difficulty: "Easy-medium",
    accent: "#a87748",
    finished: "wooden-artist-easel-finished-v1.jpg",
    finishedAlt: "Handmade graphite and pale brown pencil sketch of a front-facing wooden artist easel with an A-frame, blank rectangular canvas, support shelf, rear leg, crossbars, wood grain, and soft floor shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional pale brown pencil"],
    materialNote: "Use graphite for the frame and blank canvas. Bring in pale brown pencil only after the wooden structure is clear.",
    tipLabel: "Sketch tip",
    steps: [
      { name: "Set the A-frame", text: "Draw two long front legs leaning toward a top point, then add a light center guide between them.", tip: "Place the top point first, then aim both feet outward from it. Check the triangle's empty space before you darken either leg." },
      { name: "Place the canvas", text: "Add a small blank rectangular canvas inside the established frame.", tip: "Keep the canvas edges parallel to each other, even if the easel legs lean. That quiet contrast helps the drawing feel stable." },
      { name: "Build the support", text: "Draw a shallow shelf under the canvas and a simple rear support leg behind the established frame.", tip: "Let the shelf extend just past each front leg. The small overhang makes the canvas look supported without adding much detail." },
      { name: "Add wooden details", text: "Connect the existing legs with simple crossbars and add a few light wood-grain marks.", tip: "Use only a handful of grain lines and let them follow the length of each wooden piece. Too many short marks can make the frame look furry instead of wooden." },
      { name: "Shade the timber", text: "Lay a pale brown tint on the existing wooden parts and add a soft graphite floor shadow beneath the easel.", tip: "Shade lightly along the length of each leg, keeping the blank canvas clean. A light shadow is enough to make the easel stand on the page." },
      { name: "Finish the studio sketch", text: "Strengthen the keeper edges, clarify the existing shelf, crossbars, and grain, and balance the established wood tint and floor shadow.", tip: "Stop before painting the canvas or adding brushes and palettes. The clean canvas and clear A-frame are the whole drawing exercise.", image: true }
    ]
  },
  {
    slug: "sparrow-on-a-branch",
    day: "058",
    date: "Monday, July 13",
    isoDate: "2026-07-13",
    subject: "a sparrow on a branch",
    headlineSubject: "a sparrow<br>on a branch",
    shortSubject: "a sparrow",
    lessonTitle: "Let's draw a sparrow on a branch",
    description: "Learn how to draw a sparrow on a branch with a curved perch, small berry twig, plump side-view body, beak, eye, layered wing, tapered tail, gripping feet, and gentle graphite feather shading.",
    intro: "Start with the curved perch, then build a soft round bird shape over it before layering in the beak, wing, feet, and quiet pencil texture. It is a friendly way to practice turning simple ovals into a lively perched pose.",
    time: 20,
    difficulty: "Easy-medium",
    accent: "#8c8377",
    finished: "sparrow-on-a-branch-finished-v1.jpg",
    finishedAlt: "Handmade graphite sketch of a plump side-view sparrow on a curved branch with a berry twig, layered wing, tapered tail, and gentle feather shading",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional pale blue pencil"],
    materialNote: "Keep the construction pass pale and light, then use a soft graphite pencil for the settled contours and feather texture.",
    tipLabel: "Sketch tip",
    steps: [
      { name: "Place the perch", text: "Draw a gently curved branch, a short berry twig, three small berry circles, and one light body axis above the branch.", tip: "Ghost the branch in one relaxed sweep before committing. A quiet curve gives the bird somewhere convincing to perch." },
      { name: "Build the bird", text: "Add one large oval for the body and a smaller overlapping oval for the head, keeping both centered over the established branch.", tip: "Compare the two ovals before refining. The head should feel clearly smaller, but not pinched against the body." },
      { name: "Refine the silhouette", text: "Turn the construction into a rounded back, soft belly, and a tapered tail that follows the same gentle diagonal.", tip: "Rotate the page for the long back curve. One deliberate pull reads more naturally than many scratchy corrections." },
      { name: "Add the landmarks", text: "Draw the small beak, round eye, layered wing, two feet, and tail divisions on the established sparrow shape.", tip: "Keep the wing edge lighter than the outside contour. That small line-weight difference helps it sit on the body instead of cutting through it." },
      { name: "Suggest the feathers", text: "Add short feather marks and light graphite shade to the existing wing, belly, branch, and berries.", tip: "Let each shading stroke follow the form: curve around the belly and pull along the branch. Directional texture makes simple shapes feel solid." },
      { name: "Settle the pencil finish", text: "Darken the keeper contours and clarify the existing beak, eye, wing, feet, branch, berries, and gentle graphite shading.", tip: "Stop before adding a nest, sky, or extra birds. The perch, berry twig, and one calm sparrow already make a complete little scene.", image: true }
    ]
  },
  {
    slug: "old-fashioned-desk-fan", day: "003", date: "Tuesday, May 19", isoDate: "2026-05-19", subject: "an old-fashioned desk fan", headlineSubject: "an old-fashioned<br>desk fan", shortSubject: "a desk fan", lessonTitle: "Let's draw an old-fashioned desk fan",
    description: "Learn how to draw an old-fashioned desk fan with an oval base, upright stand, round wire cage, center hub, four broad blades, wire spokes, trailing cord, and soft graphite metal shading.",
    intro: "Build the base and wire cage first, then use the hub to space the four blades before adding the spokes and quiet metal tone. This honest archive lesson is a fresh drawing exercise, not a claim about earlier activity.",
    time: 25, difficulty: "Easy-medium", accent: "#84817a", finished: "old-fashioned-desk-fan-finished-v1.jpg", finishedAlt: "Handmade graphite sketch of an old-fashioned desk fan with oval base, round wire cage, four broad blades, wire spokes, and trailing cord", materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional pale blue pencil"],
    steps: [
      { name: "Set the base", text: "Draw a light oval base, upright stand, round cage guide, and short trailing cord.", tip: "Ghost the large circle before committing so the cage has a calm, even rhythm." },
      { name: "Ring the cage", text: "Refine the guide into a double-line round wire cage attached to the established stand.", tip: "Keep the inner ring parallel to the outer ring instead of correcting one side at a time." },
      { name: "Center the hub", text: "Add a small round hub and collar where the established stand meets the cage.", tip: "Let the hub sit directly on the cage centerlines; that simple check keeps the blades balanced." },
      { name: "Sweep the blades", text: "Draw four broad rounded blades from the established hub.", tip: "Turn the paper rather than twisting your wrist. Each blade should begin at the same hub, then curve outward." },
      { name: "Cross the wires", text: "Add cage spokes and light graphite shade to the established base, stand, hub, and blades.", tip: "Shade with strokes that follow each metal curve. Directional tone feels more solid than rubbing everywhere." },
      { name: "Finish the vintage metal", text: "Darken the keeper contours and clarify the existing cage, spokes, hub, blades, cord, and metal shading.", tip: "Stop before adding a desk scene or labels. The cage, four blades, and oval base already make the object unmistakable.", image: true }
    ]
  },
  {
    slug: "vintage-typewriter",
    day: "004",
    date: "Wednesday, May 20",
    isoDate: "2026-05-20",
    subject: "a vintage typewriter",
    headlineSubject: "a vintage<br>typewriter",
    shortSubject: "a typewriter",
    lessonTitle: "Let's draw a vintage typewriter",
    description: "Learn how to draw a vintage typewriter with a compact rounded-front body, upright paper sheet, roller, staggered round key rows, long space bar, front lip, carriage lever, side knob, warm-gray tone, and a soft cast shadow.",
    intro: "Build the typewriter from one compact machine body, then add the paper, key bank, and small side hardware before deepening the graphite. This honest archive lesson is a focused drawing exercise, not a claim about an earlier launch day.",
    time: 25,
    difficulty: "Easy-medium",
    accent: "#817b70",
    finished: "vintage-typewriter-finished-v1.jpg",
    finishedAlt: "Graphite and colored-pencil sketch of a compact front three-quarter vintage typewriter with upright paper, roller, three staggered rows of round keys, space bar, carriage lever, side knob, warm-gray tone, and soft shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional warm-gray colored pencil"],
    steps: [
      { name: "Block the machine", text: "Draw a low baseline and a light compact typewriter body with a rounded front and a shallow lower base.", tip: "Keep the body guide light enough to adjust. Check that both side walls lean by a similar amount before darkening either edge." },
      { name: "Set the paper and roller", text: "Add a narrow roller bar along the back edge and slide one slightly tilted paper sheet behind the established body.", tip: "Let the paper lean with the same perspective as the roller. Matching those angles keeps the sheet from looking pasted on." },
      { name: "Lay in the key bank", text: "Place three staggered rows of small round key marks across the existing front plane.", tip: "Suggest a tidy rhythm instead of measuring every circle. The rows read best when their gaps stay open and roughly even." },
      { name: "Shape the front controls", text: "Draw a long space bar and narrow lower front lip beneath the existing keys.", tip: "Ghost the space bar once before drawing it. One relaxed horizontal pull looks more convincing than several short repairs." },
      { name: "Finish the side hardware", text: "Add a short bent carriage lever and side knob, then lay in a soft base shadow and quiet warm-gray tone on existing body planes.", tip: "Shade along the machine planes instead of rubbing in circles. Directional tone helps the boxy shape stay solid." },
      { name: "Focus the typewriter finish", text: "Darken the keeper contours and clarify the existing keys, paper edge, roller, lever, knob, warm-gray tone, and soft shadow.", tip: "Stop before adding a desk, hands, lettering, or coffee cup. The paper, roller, key rows, and lever already make the machine recognizable.", image: true }
    ]
  },
  {
    slug: "rocky-shore-lighthouse",
    day: "057",
    date: "Sunday, July 12",
    isoDate: "2026-07-12",
    subject: "a rocky-shore lighthouse",
    headlineSubject: "a rocky-shore<br>lighthouse",
    shortSubject: "a lighthouse",
    lessonTitle: "Let's draw a rocky-shore lighthouse",
    description: "Learn how to draw a rocky-shore lighthouse with a tapered tower, lantern room, shallow cap roof, layered rocky point, curving wave bands, tower stripes, window panes, a small cloud, and a warm guiding beam.",
    intro: "Start with a tall tapered tower and two sturdy rock ledges, then add the lantern room, water, and small sky cues. It is a calm way to practice stacking a clear landmark over a simple foreground.",
    time: 25,
    difficulty: "Easy-medium",
    accent: "#738fa1",
    finished: "rocky-shore-lighthouse-finished-v1.jpg",
    finishedAlt: "Graphite and colored-pencil sketch of a tall striped lighthouse on layered shore rocks with a small lantern room, shallow roof, curving foreground waves, tiny cloud, and a narrow warm beam",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional blue-gray and pale yellow colored pencils"],
    steps: [
      { name: "Block the tower and shore", text: "Draw one light center axis, taper a tall lighthouse tower around it, and set two broad rock ledges along the bottom.", tip: "Ghost the center axis first. A quiet vertical guide keeps the tower from leaning while the rocks can stay pleasantly uneven." },
      { name: "Build the lantern room", text: "Add a small boxy lantern room and shallow cap roof on top of the established tower.", tip: "Keep the roof a little wider than the lantern room. That tiny overhang makes the top read clearly without adding fussy detail." },
      { name: "Sweep in the water", text: "Draw three shallow curving wave bands across the foreground, letting them tuck behind the existing rocky point.", tip: "Ghost each long curve twice, then pull it in one relaxed stroke. Vary the gaps instead of making evenly spaced stripes." },
      { name: "Place the tower details", text: "Add two horizontal stripe bands on the tower and a few simple window dividers in the lantern room.", tip: "Wrap the stripe edges gently around the taper. If they stay perfectly flat, the tower can start to look like a paper cutout." },
      { name: "Add the sky cues", text: "Place one small cloud and a narrow light beam reaching from the already drawn lantern room toward the upper right.", tip: "Leave the beam light and open. Its direction matters more than filling the whole sky with pencil." },
      { name: "Settle the lighthouse sketch", text: "Darken the keeper contours and deepen the existing tower, rocks, waves, stripes, panes, cloud, and beam with restrained blue-gray and warm pencil accents.", tip: "Stop before adding boats, birds, or a giant sunset. The tower, rock point, and three wave bands already make the coastal scene feel complete.", image: true }
    ]
  },
  {
    slug: "sandcastle-by-the-shore",
    day: "056",
    date: "Saturday, July 11",
    isoDate: "2026-07-11",
    subject: "a sandcastle by the shore",
    headlineSubject: "a sandcastle<br>by the shore",
    shortSubject: "a sandcastle",
    lessonTitle: "Let's draw a sandcastle by the shore",
    description: "Learn how to draw a sandcastle by the shore with a central tower, round side turrets, crenellations, an arched doorway, sand-block seams, a shell flag, shoreline marks, pale sand tone, and blue water accents.",
    intro: "Start with a low shoreline and one boxy tower, then add the round turrets and tiny beach details. It is a friendly way to practice stacking simple forms while keeping a small scene clear.",
    time: 25,
    difficulty: "Easy-medium",
    accent: "#d6ad68",
    finished: "sandcastle-by-the-shore-finished-v1.jpg",
    finishedAlt: "Graphite and colored-pencil sketch of a small sandcastle by the shore with a central tower, two round turrets, crenellations, arched doorway, shell flag, pale sand, and blue water edge",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional pale blue and ochre colored pencils"],
    steps: [
      { name: "Place the shore and tower", text: "Draw a shallow curved shoreline, then place a light boxy central tower just above it.", tip: "Ghost the shoreline in one long sweep before committing. A gentle curve keeps the beach from feeling like a flat shelf." },
      { name: "Round the side turrets", text: "Add one rounded turret on each side of the central tower, keeping their tops a little lower than the middle tower.", tip: "Compare the empty spaces between the towers. Similar gaps make the castle feel built from one simple plan." },
      { name: "Notch the castle tops", text: "Cut small square crenellations into the top edges of all three towers.", tip: "Rotate the page if the little squares get stiff. Short, controlled strokes are easier when your wrist can pull downward." },
      { name: "Add the tiny details", text: "Draw the arched doorway, a few horizontal sand-block seams, a small shell flag, and scattered sand marks.", tip: "Keep the seams lighter than the outside contour. Those quiet interior lines suggest sand blocks without making the towers look like brick walls." },
      { name: "Shade the sand and water", text: "Add pale ochre tone across the existing sandcastle and beach, then touch in a few pale blue shoreline strokes.", tip: "Shade in the direction of each surface. Vertical strokes on the towers and horizontal strokes along the shore make the forms easier to read." },
      { name: "Settle the beach sketch", text: "Darken the keeper contours, clarify the existing crenellations, doorway, shell flag, sand texture, and pale color accents.", tip: "Stop before adding a giant sun, people, or extra beach gear. The little castle and water edge already tell the whole story.", image: true }
    ]
  },
  {
    slug: "vintage-camera-on-a-strap",
    day: "005",
    date: "Thursday, May 21",
    isoDate: "2026-05-21",
    subject: "a vintage camera on a strap",
    headlineSubject: "a vintage camera<br>on a strap",
    shortSubject: "a vintage camera",
    lessonTitle: "Let's draw a vintage camera on a strap",
    description: "Learn how to draw a vintage camera on a strap with a boxy body, loose strap loop, round lens barrel, viewfinder, shutter button, body seams, strap buckle, warm-gray tone, brown strap tint, and a soft shadow.",
    intro: "Build the camera from a box and one loose strap loop, then add the lens and tiny controls before shading. This honest archive lesson is a focused drawing exercise, not a made-up launch-day story.",
    time: 25,
    difficulty: "Easy-medium",
    accent: "#8f8170",
    finished: "vintage-camera-on-a-strap-finished-v1.jpg",
    finishedAlt: "Graphite and colored-pencil sketch of a compact vintage camera on a loose brown strap with a boxy body, round lens barrel, raised viewfinder, shutter button, body seams, buckle, warm-gray tone, and soft shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional warm gray and brown colored pencils"],
    steps: [
      { name: "Box in the camera", text: "Draw a light rectangular camera body with a shallow top plane, then loop a loose strap behind it.", tip: "Keep the body guide light enough to adjust. Check that the top and bottom edges lean by the same small angle before darkening either one." },
      { name: "Center the lens", text: "Add a round lens barrel and one outer ring to the front of the established camera body.", tip: "Use a loose circle first, then correct it with a second pass. A lens reads round when its outer rings share the same center." },
      { name: "Build the top controls", text: "Add a small raised viewfinder and a round shutter button on the existing top plane.", tip: "Compare the top controls against the lens center. Small details feel attached when they follow the camera's perspective lines." },
      { name: "Trace seams and buckle", text: "Add a few simple body seams and a small buckle on the already drawn strap.", tip: "Let the strap curve gradually around the camera. A sudden sharp bend makes it feel like wire instead of leather." },
      { name: "Add quiet camera tone", text: "Lay in a light warm-gray body tone, brown strap tint, and a soft cast shadow under the existing camera.", tip: "Pull shading strokes along each surface rather than rubbing everywhere. Directional tone helps the box stay solid." },
      { name: "Focus the vintage finish", text: "Reinforce the keeper contours, lens rings, controls, seams, buckle, and the existing warm-gray and brown tones.", tip: "Stop before adding logos, a table scene, or extra film rolls. The lens, strap, and tiny controls already make the camera recognizable.", image: true }
    ]
  },
  {
    slug: "garden-hand-trowel",
    day: "006",
    date: "Friday, May 22",
    isoDate: "2026-05-22",
    subject: "a garden hand trowel",
    headlineSubject: "a garden<br>hand<br>trowel",
    shortSubject: "a hand trowel",
    lessonTitle: "Let's draw a garden hand trowel",
    description: "Learn how to draw a garden hand trowel with a teardrop metal blade, rounded wooden handle, ferrule band, hanging hole, blade edge, wood grain, soil crumbs, gray metal shading, warm brown handle tone, and a soft cast shadow.",
    intro: "Build the trowel along one diagonal guide, then shape the blade and handle before adding the ferrule, hole, grain, soil, and restrained shading. This honest archive lesson is about turning one simple tool into a clear sketch, not about pretending it had a live launch day.",
    time: 20,
    difficulty: "Easy",
    accent: "#9a7445",
    finished: "garden-hand-trowel-finished-v1.jpg",
    finishedAlt: "Graphite and colored-pencil sketch of a diagonal garden hand trowel with teardrop gray metal blade, rounded wooden handle, ferrule band, hanging hole, blade edge, wood grain, soil crumbs, warm brown handle shading, and soft cast shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional warm brown and gray colored pencils"],
    steps: [
      {
        name: "Place the diagonal guide",
        text: "Draw a long diagonal center guide, then add a light blade mass at one end and a handle guide at the other.",
        tip: "Ghost the diagonal before drawing. One clear axis keeps the blade and handle from drifting apart."
      },
      {
        name: "Shape the blade and handle",
        text: "Turn the guide shapes into a teardrop blade and a rounded wooden handle.",
        tip: "Keep the blade point on the center guide. That small alignment check makes the tool feel balanced."
      },
      {
        name: "Add the ferrule",
        text: "Draw the blade shoulder and a small ferrule band where the metal blade meets the handle.",
        tip: "Use a short curved band instead of a flat stripe. It should wrap around the handle, not sit on top of it."
      },
      {
        name: "Draw the small details",
        text: "Add the hanging hole, inner blade edge, and a few wood-grain lines along the handle.",
        tip: "Pull the grain lines with the handle, not across it. Directional texture makes the wood feel solid."
      },
      {
        name: "Add soil and tone",
        text: "Add a few soil crumbs near the blade, soft cast shadow, gray blade shading, and warm brown handle tone.",
        tip: "Place crumbs unevenly and leave open paper between them. A scattered cluster reads more naturally than a dotted border."
      },
      {
        name: "Finish the garden trowel sketch",
        text: "Darken the keeper contours, clarify the existing blade, handle, ferrule, hole, blade edge, grain, soil crumbs, tone, and shadow.",
        tip: "Stop before adding flowers, hands, or extra tools. The blade, handle, ferrule, and soil crumbs already tell the story.",
        image: true
      }
    ]
  },
  {
    slug: "folded-paper-airplane",
    day: "007",
    date: "Saturday, May 23",
    isoDate: "2026-05-23",
    subject: "a folded paper airplane",
    headlineSubject: "a folded<br>paper<br>airplane",
    shortSubject: "a paper airplane",
    lessonTitle: "Let's draw a folded paper airplane",
    description: "Learn how to draw a folded paper airplane with a long center spine, triangular wings, pointed nose, rear wing edges, crease lines, paper thickness, and a soft graphite shadow.",
    intro: "Start with the spine and big wing triangles, then sharpen the nose, trim the back edges, and add fold details before shading. This backfilled archive lesson stays focused on a simple paper form, not a pretend event or launch story.",
    time: 20,
    difficulty: "Easy",
    accent: "#8a8d7a",
    finished: "folded-paper-airplane-finished-v1.jpg",
    finishedAlt: "Graphite sketch of a folded paper airplane with long center spine, triangular wings, pointed nose, rear wing edges, crease lines, paper thickness, and soft shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional blending stump"],
    steps: [
      {
        name: "Set the spine and wings",
        text: "Draw a long diagonal spine, then add two light triangular wing guides that meet along it.",
        tip: "Ghost the long spine before drawing it. A straight center fold makes every later wing edge easier to judge."
      },
      {
        name: "Point the nose",
        text: "Connect the front wing edges into a sharp folded nose while keeping the spine visible.",
        tip: "Compare the two front triangles. They do not need to match perfectly, but both should aim toward the same nose."
      },
      {
        name: "Shape the back edges",
        text: "Trim the rear wing edges and close the outside silhouette into a clear paper-airplane shape.",
        tip: "Use light pressure on the back edge until the angle feels right. It is easier to darken a good line than erase a heavy one."
      },
      {
        name: "Draw the creases",
        text: "Add light interior crease lines across the wings, following the folded paper planes you already built.",
        tip: "Keep these creases lighter than the outside edges. They should explain the fold without flattening the airplane."
      },
      {
        name: "Add paper thickness",
        text: "Add small edge overlaps, a few folded tabs, and a soft shadow underneath the plane.",
        tip: "Put the shadow under the broad wing side, not evenly around the whole shape. That keeps the airplane feeling lifted."
      },
      {
        name: "Finish the paper airplane sketch",
        text: "Darken the keeper contours, clarify the existing creases, folded edges, paper thickness, and soft graphite shadow.",
        tip: "Stop before adding clouds, motion lines, or lettering. The folds and shadow are enough to make the paper form read.",
        image: true
      }
    ]
  },
  {
    slug: "wooden-clothespin",
    day: "008",
    date: "Sunday, May 24",
    isoDate: "2026-05-24",
    subject: "a wooden clothespin",
    headlineSubject: "a wooden<br>clothespin",
    shortSubject: "a clothespin",
    lessonTitle: "Let's draw a wooden clothespin",
    description: "Learn how to draw a wooden clothespin with two long wooden halves, pinched jaws, a center spring coil, wire arms, side notches, wood grain, warm pencil tone, and a soft cast shadow.",
    intro: "Start with one long diagonal guide, split it into the two wooden halves, then place the spring before adding grain and tone. This is a small object, so the lesson is really about keeping parallel edges and tiny hardware readable.",
    time: 20,
    difficulty: "Easy-medium",
    accent: "#c49a5f",
    finished: "wooden-clothespin-finished-v1.jpg",
    finishedAlt: "Graphite and colored-pencil sketch of a diagonal wooden clothespin with two wooden halves, pinched jaws, center metal spring, wire arms, wood grain, warm tan shading, and soft shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional tan colored pencil"],
    steps: [
      {
        name: "Lay in the long guide",
        text: "Draw one long, light diagonal guide for the clothespin body, tapering it slightly toward the jaw end.",
        tip: "Ghost the long edge before touching the pencil down. One relaxed stroke keeps this simple object from looking kinked."
      },
      {
        name: "Split the wooden halves",
        text: "Add a narrow gap down the middle, then shape the two wooden halves and the pinched jaw tips.",
        tip: "Compare the negative space between the halves. If the gap widens too much, the spring will feel off-center later."
      },
      {
        name: "Set the spring",
        text: "Place a small coil near the middle and draw the curved wire arms crossing into the wooden halves.",
        tip: "Draw the coil as a few nested curves, not a perfect machine part. The readable position matters more than exact metal loops."
      },
      {
        name: "Carve the notches",
        text: "Add the small side notches around the spring area and clean up the jaw tips.",
        tip: "Use light pressure while cutting the notches. They should interrupt the long sides without breaking the whole silhouette."
      },
      {
        name: "Add grain and tone",
        text: "Run a few grain lines along the wooden halves, add warm tan pencil tone, and place a soft shadow under the diagonal pin.",
        tip: "Pull the grain lines in the same direction as the wood. Parallel texture makes the clothespin feel solid."
      },
      {
        name: "Finish the clothespin sketch",
        text: "Darken the keeper contours, clarify the spring and wire arms, deepen the existing grain, warm tone, and soft shadow.",
        tip: "Stop before adding a clothesline or extra laundry. The two jaws, spring, and grain are enough to make the object clear.",
        image: true
      }
    ]
  },
  {
    slug: "old-fashioned-bicycle-basket",
    day: "009",
    date: "Monday, May 25",
    isoDate: "2026-05-25",
    subject: "an old-fashioned bicycle with a basket",
    headlineSubject: "an old-fashioned<br>bicycle with a basket",
    shortSubject: "a bicycle with a basket",
    lessonTitle: "Let's draw an old-fashioned bicycle with a basket",
    description: "Learn how to draw an old-fashioned bicycle with a basket using two round wheels, a simple frame triangle, seat, curved handlebar, front basket, spokes, chain, basket weave, and soft graphite shadows.",
    intro: "Start with the two wheels, connect the frame, then add the seat, handlebar, basket, spokes, chain, and soft shadows. Your bicycle can lean more casually later; keep the wheel spacing and basket placement clear first.",
    time: 30,
    difficulty: "Medium",
    accent: "#b88d55",
    finished: "old-fashioned-bicycle-basket-finished-v1.jpg",
    finishedAlt: "Graphite and colored-pencil sketch of an old-fashioned side-view bicycle with two round wheels, thin frame, curved handlebar, small seat, front woven basket, spokes, chain, and soft tire shadows",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional warm brown colored pencil"],
    steps: [
      {
        name: "Set the wheels",
        text: "Draw two light wheel circles on the same ground line, leaving a comfortable gap between them.",
        tip: "Spend an extra moment matching the wheel size. Even old bicycles look better when the wheels agree."
      },
      {
        name: "Connect the frame",
        text: "Add the simple frame triangle between the wheels, using straight lines that meet near the wheel hubs.",
        tip: "Keep the frame open and simple. The triangle matters more than tiny metal parts."
      },
      {
        name: "Add seat and handlebar",
        text: "Place a small seat above the back wheel and a curved handlebar above the front fork.",
        tip: "Let the handlebar curl just a little. That old-fashioned curve gives the bike personality."
      },
      {
        name: "Hang the basket",
        text: "Draw a small basket above the front wheel, attached to the handlebar area.",
        tip: "Use a simple trapezoid basket shape first. The weave lines can wait until the structure is clear."
      },
      {
        name: "Add spokes and shade",
        text: "Add light spokes, a simple chain line, a few basket weave marks, warm basket tint, and soft shadows under the tires.",
        tip: "Suggest the spokes instead of drawing every one perfectly. Light repeated lines are enough."
      },
      {
        name: "Finish the bicycle sketch",
        text: "Darken the keeper contours, clarify the spokes, chain, handlebar, seat, and basket weave, and deepen the existing tint and tire shadows.",
        tip: "Stop before adding a street scene or flowers. The basket, wheels, frame, and handlebar already make the bicycle readable.",
        image: true
      }
    ]
  },
  {
    slug: "record-player-with-vinyl",
    day: "052",
    date: "Tuesday, July 7",
    isoDate: "2026-07-07",
    subject: "a record player with vinyl",
    headlineSubject: "a record player<br>with vinyl",
    shortSubject: "a record player",
    lessonTitle: "Let's draw a record player with vinyl",
    description: "Learn how to draw a record player with vinyl using a shallow turntable base, round record, center label, angled tonearm, needle head, raised lid, small controls, record grooves, and soft graphite shading.",
    intro: "Start with the turntable as a simple box and circle, then place the label, tonearm, lid, controls, and grooves before deepening the graphite. Your player can have different knobs later; keep the record, arm, and open lid readable first.",
    time: 25,
    difficulty: "Easy-medium",
    accent: "#6f6b5f",
    finished: "record-player-with-vinyl-finished-v1.jpg",
    finishedAlt: "Graphite sketch of a record player with open lid, round vinyl record, center label, angled tonearm, needle head, small base controls, record grooves, and soft shadows",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional blending stump"],
    steps: [
      {
        name: "Place the base and record",
        text: "Draw a shallow rectangular base in perspective, then add the large record circle or ellipse on top.",
        tip: "Keep the record centered on the base. A small tilt is fine, but the disc should not slide off the player."
      },
      {
        name: "Center the label",
        text: "Add the small center label and refine the record edge so it sits cleanly inside the base.",
        tip: "Leave a calm circle in the middle. That empty label helps the darker vinyl grooves read later."
      },
      {
        name: "Angle the tonearm",
        text: "Draw a slim angled tonearm from the back corner toward the record, then add the small needle head.",
        tip: "Aim the needle toward the outer half of the record. That angle makes the player look ready to play."
      },
      {
        name: "Set the back hinge",
        text: "Add the open lid and hinge along the back edge without changing the turntable's angle.",
        tip: "Let the lid follow the same perspective as the base. Matching angles keep the sketch believable."
      },
      {
        name: "Add grooves and controls",
        text: "Draw light circular grooves on the vinyl, add a couple of small controls, and shade under the record and arm.",
        tip: "Use light pressure for the grooves. Too many dark rings can flatten the record."
      },
      {
        name: "Finish the record player sketch",
        text: "Darken the keeper contours, clarify the grooves, needle head, hinge, and controls, and balance the existing graphite shadows.",
        tip: "Stop before adding music notes, lettering, or extra records. The open lid, disc, and tonearm already tell the story.",
        image: true
      }
    ]
  },
  {
    slug: "cozy-reading-lamp",
    day: "053",
    date: "Wednesday, July 8",
    isoDate: "2026-07-08",
    subject: "a cozy reading lamp",
    headlineSubject: "a cozy<br>reading lamp",
    shortSubject: "a reading lamp",
    lessonTitle: "Let's draw a cozy reading lamp",
    description: "Learn how to draw a cozy reading lamp with a tilted shade, curved neck, round base, desk edge, open book, pull chain, warm shade tint, and soft graphite shadow.",
    intro: "Build the lamp from ellipses and a simple stem, then set it on the desk, tuck in the open book, and finish with warm shade color. Your lamp can lean differently later; keep the shade, base, and chain clear first.",
    time: 25,
    difficulty: "Easy-medium",
    accent: "#d9a744",
    finished: "cozy-reading-lamp-finished-v1.jpg",
    finishedAlt: "Graphite and colored-pencil sketch of a cozy desk reading lamp with tilted warm shade, curved neck, round base, pull chain, open book, desk edge, and soft shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional warm yellow colored pencil"],
    steps: [
      {
        name: "Block the lamp shapes",
        text: "Draw a light tilted shade ellipse, then drop in the curved neck, slim stem, and oval base.",
        tip: "Ghost the shade ellipse a few times before committing. A calm opening makes the whole lamp feel solid."
      },
      {
        name: "Set the desk",
        text: "Refine the outside shade and base contours, then add the desk edge and a first soft shadow under the base.",
        tip: "Keep the desk line behind the lamp light. It should ground the sketch without slicing through the base."
      },
      {
        name: "Refine the shade",
        text: "Clarify the shade rim, underside ellipse, neck connection, stem, and base ellipse.",
        tip: "Compare the empty space under the shade with the space above the base. That negative-space check keeps the neck from stretching."
      },
      {
        name: "Add the open book",
        text: "Place a small open book beside the base, using two simple page shapes and a light center fold.",
        tip: "Rotate the page if the book edges feel awkward. Short straight strokes are easier when your wrist has room."
      },
      {
        name: "Add chain and warmth",
        text: "Hang a short pull chain under the shade, add a little warm shade tint, and deepen the existing cast shadow.",
        tip: "Use light pressure for the yellow tint. The warmth should suggest lamplight, not cover the pencil drawing."
      },
      {
        name: "Finish the cozy lamp sketch",
        text: "Darken the keeper contours, clarify the shade, base, pull chain, book, warm tint, and desk shadow.",
        tip: "Stop before adding wall art, lettering, or extra desk clutter. The lamp, book, and glow already make the scene cozy.",
        image: true
      }
    ]
  },
  {
    slug: "sugar-cookie-on-a-napkin",
    day: "054",
    date: "Thursday, July 9",
    isoDate: "2026-07-09",
    subject: "a sugar cookie on a napkin",
    headlineSubject: "a sugar<br>cookie<br>on a napkin",
    shortSubject: "a sugar cookie",
    lessonTitle: "Let's draw a sugar cookie on a napkin",
    description: "Learn how to draw a sugar cookie on a napkin with a round cookie body, folded napkin base, scalloped edge, icing patch, crumbs, sugar dots, warm cookie tone, and soft graphite shadow.",
    intro: "Build the cookie as a simple circle on a folded napkin, then make the edge uneven before adding icing, crumbs, and a little warm color. This is a good practice sketch for turning a plain shape into something specific.",
    time: 20,
    difficulty: "Easy",
    accent: "#d6a447",
    finished: "sugar-cookie-on-a-napkin-finished-v1.jpg",
    finishedAlt: "Graphite and colored-pencil sketch of a round sugar cookie on a folded napkin with scalloped edge, irregular icing patch, tiny crumbs, sugar dots, warm golden tone, and soft shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional golden colored pencil"],
    steps: [
      {
        name: "Place the cookie and napkin",
        text: "Draw a light round cookie guide on top of a simple diamond-shaped folded napkin.",
        tip: "Keep both shapes loose. The circle can wobble a little because a real cookie is not perfectly machined."
      },
      {
        name: "Bump the cookie edge",
        text: "Turn the smooth cookie guide into a small scalloped edge with gentle uneven bumps.",
        tip: "Rotate the page as you work around the edge. Short curves are easier when your wrist can pull comfortably."
      },
      {
        name: "Fold the napkin",
        text: "Add napkin fold lines and a first soft shadow under the cookie.",
        tip: "Use the cookie edge to decide where the shadow is darkest. The napkin folds should stay lighter than the cookie outline."
      },
      {
        name: "Add the icing shape",
        text: "Draw an irregular icing patch on top of the cookie, leaving the scalloped cookie edge visible.",
        tip: "Make the icing shape simpler than the cookie edge. One loose blob reads better than many tiny frosting wiggles."
      },
      {
        name: "Sprinkle crumbs and tone",
        text: "Add a few crumbs, tiny sugar dots, warm golden pencil tone, and a little more shadow under the napkin.",
        tip: "Place crumbs unevenly instead of making a pattern. A few varied dots feel more natural than a perfect ring."
      },
      {
        name: "Finish the sugar cookie sketch",
        text: "Darken the keeper contours, clarify the existing icing, crumbs, sugar dots, napkin folds, warm tone, and cast shadow.",
        tip: "Stop before adding a plate or extra snacks. The cookie, icing, crumbs, and folded napkin already give the drawing a clear story.",
        image: true
      }
    ]
  },
  {
    slug: "classic-pickup-truck",
    day: "055",
    date: "Friday, July 10",
    isoDate: "2026-07-10",
    subject: "a classic pickup truck",
    headlineSubject: "a classic<br>pickup<br>truck",
    shortSubject: "a pickup truck",
    lessonTitle: "Let's draw a classic pickup truck",
    description: "Learn how to draw a classic pickup truck with two round tires, a boxy cab, hood, pickup bed, rounded fenders, tailgate, window, door seam, grille, headlights, bumpers, wheel hubs, blue-gray pencil shading, and soft tire shadows.",
    intro: "Start with the wheel spacing and long body guides, then build the cab, hood, bed, fenders, and small front details before adding restrained color. This lesson is really about keeping a side-view vehicle aligned without making it stiff.",
    time: 30,
    difficulty: "Medium",
    accent: "#7f9aaa",
    finished: "classic-pickup-truck-finished-v1.jpg",
    finishedAlt: "Graphite and colored-pencil sketch of a side-view classic blue-gray pickup truck with round tires, boxy cab, hood, pickup bed, rounded fenders, tailgate, window, grille, headlights, bumpers, wheel hubs, and soft tire shadows",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional blue-gray colored pencil"],
    steps: [
      {
        name: "Set the wheels and stance",
        text: "Draw a long light baseline, then place two wheel circles on it with a simple cab, hood, and bed guide above them.",
        tip: "Ghost the baseline first. If the wheels sit on the same line, the truck will feel parked instead of tilted."
      },
      {
        name: "Block in the truck body",
        text: "Connect the guide boxes into one rough side-view truck silhouette with a hood, cab, and pickup bed.",
        tip: "Keep the body light and boxy for now. You can round the corners after the proportions feel right."
      },
      {
        name: "Round the fenders",
        text: "Refine the roof curve, draw rounded fenders over both wheels, and add the bed rail and tailgate edge.",
        tip: "Compare the empty space above each tire. Matching those arcs helps the fenders look like they belong to the same truck."
      },
      {
        name: "Add the cab details",
        text: "Add the cab window, door seam, front grille, headlights, and simple bumpers.",
        tip: "Use short straight strokes for the grille and bumper. Small vehicle details read best when they stay simple."
      },
      {
        name: "Add wheels and tone",
        text: "Draw the wheel hubs, add soft tire shadows, and lay in restrained blue-gray pencil shading on the body panels.",
        tip: "Shade along the truck's length instead of scrubbing in circles. Directional strokes make the panels feel broad and solid."
      },
      {
        name: "Finish the pickup truck sketch",
        text: "Darken the keeper contours, clarify the existing cab, bed, fenders, wheels, grille, window, blue-gray shading, and tire shadows.",
        tip: "Stop before adding a street scene, logo, or driver. The side-view truck shape is enough to carry the lesson.",
        image: true
      }
    ]
  },
  {
    slug: "vintage-key-on-a-tag",
    day: "010",
    date: "Tuesday, May 26",
    isoDate: "2026-05-26",
    subject: "a vintage key on a tag",
    headlineSubject: "a vintage key<br>on a tag",
    shortSubject: "a vintage key",
    lessonTitle: "Let's draw a vintage key on a tag",
    description: "Learn how to draw a vintage key on a tag with a long shaft, round bow, inner opening, stepped teeth, blank paper tag, string loop, warm brass shading, and soft graphite shadow.",
    intro: "Start with the key as a long simple shape, then cut the teeth, open the bow, tie on the blank tag, and finish with brass shading. Your tag can hang at a different angle, as long as the key stays easy to read.",
    time: 25,
    difficulty: "Easy-medium",
    accent: "#b28b42",
    finished: "vintage-key-on-a-tag-finished-v1.jpg",
    finishedAlt: "Graphite and colored-pencil sketch of a vintage brass key with long shaft, round bow, inner opening, stepped teeth, blank paper tag, string loop, and soft surface shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional warm ochre colored pencil"],
    steps: [
      {
        name: "Lay in the key",
        text: "Draw a long light shaft, then add a round bow at one end to set the key's diagonal pose.",
        tip: "Keep the shaft straight before adding details. A clean center line makes the old key feel solid."
      },
      {
        name: "Cut the teeth",
        text: "Add small stepped teeth at the end of the shaft, keeping them simple and square.",
        tip: "Use two or three tooth cuts. Too many notches can make this quick sketch feel fussy."
      },
      {
        name: "Open the bow",
        text: "Draw a smaller opening inside the round bow, then clean the main key silhouette.",
        tip: "Leave an even ring of metal around the hole. That ring is what makes the bow read clearly."
      },
      {
        name: "Tie on the tag",
        text: "Attach a blank paper tag near the bow with a short string loop.",
        tip: "Keep the tag free of writing. The lesson is about shape and texture, not tiny lettering."
      },
      {
        name: "Shade the brass",
        text: "Add warm brass shading to the existing key, light tone on the tag, and a soft shadow underneath.",
        tip: "Shade along the shaft instead of filling it flat. Long strokes make the key feel metallic but still sketchy."
      },
      {
        name: "Finish the vintage key sketch",
        text: "Darken the keeper contours, clarify the bow, teeth, tag, and string loop, and deepen the existing brass shading and shadow.",
        tip: "Stop before adding extra keys or written labels. The blank tag and old brass shape are enough.",
        image: true
      }
    ]
  },
  {
    slug: "airport-control-tower",
    day: "051",
    date: "Monday, July 6",
    isoDate: "2026-07-06",
    subject: "an airport control tower",
    headlineSubject: "an airport<br>control tower",
    shortSubject: "an airport control tower",
    lessonTitle: "Let's draw an airport control tower",
    description: "Learn how to draw an airport control tower with a tapered shaft, wide glass cab, roof antenna, angled window panels, runway perspective marks, and restrained blue-gray pencil shading.",
    intro: "Build the tower from simple stacked shapes, then wrap the glass cab, place the runway context, and finish with soft sky color. Your airport can be busier later; keep the tower, windows, and runway readable first.",
    time: 25,
    difficulty: "Easy-medium",
    accent: "#6f8faa",
    finished: "airport-control-tower-finished-v1.jpg",
    finishedAlt: "Graphite and colored-pencil sketch of an airport control tower with tapered shaft, wide glass cab, roof antenna, angled window panels, base platform, runway perspective marks, blue-gray sky, and soft shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional blue-gray colored pencil"],
    steps: [
      {
        name: "Stack the main forms",
        text: "Draw a tall tapered shaft, then set a wider glass control cab on top with light construction lines.",
        tip: "Keep the cab centered over the shaft. A tiny lean will make the whole tower feel unstable."
      },
      {
        name: "Wrap the windows",
        text: "Add the slanted window band across the cab while keeping the same tower shaft underneath.",
        tip: "Use a few large panes instead of many tiny ones. They will stay readable after shading."
      },
      {
        name: "Cap the tower",
        text: "Add the cab roof, small antenna, and simple base platform without changing the main tower pose.",
        tip: "Let the cap follow the cab's top edge. That small angle helps the tower feel three-dimensional."
      },
      {
        name: "Set the runway",
        text: "Place light runway perspective marks behind the base so the tower feels grounded at the airport.",
        tip: "Keep the runway marks simple. They should support the tower instead of becoming a detailed landscape."
      },
      {
        name: "Shade windows and sky",
        text: "Add light blue-gray sky tint, soft graphite shadow on the shaft, and darker tones in the window panes.",
        tip: "Shade around the window panes, not over all of them. Leaving pale glass makes the cab easier to read."
      },
      {
        name: "Finish the control tower sketch",
        text: "Darken the keeper contours, clarify the panes, antenna, and runway marks, and deepen the existing blue-gray shading.",
        tip: "Stop before adding lettering, signs, or extra vehicles. The tower shape and runway already carry the drawing.",
        image: true
      }
    ]
  },
  {
    slug: "folded-camp-map",
    day: "011",
    date: "Wednesday, May 27",
    isoDate: "2026-05-27",
    subject: "a folded camp map",
    headlineSubject: "a folded<br>camp map",
    shortSubject: "a folded camp map",
    lessonTitle: "Let's draw a folded camp map",
    description: "Learn how to draw a folded camp map with uneven paper edges, crease panels, a winding trail line, small lake, mountain icons, compass arrow, and restrained green and blue pencil color.",
    intro: "Start with the paper shape and folds, then let the trail, lake, mountains, compass arrow, and soft color sit on top of those panels. Your route can bend differently, as long as the folds and landmarks stay clear.",
    time: 25,
    difficulty: "Easy-medium",
    accent: "#6f8f59",
    finished: "folded-camp-map-finished-v1.jpg",
    finishedAlt: "Graphite and colored-pencil sketch of a folded camp map with uneven paper edges, crease panels, winding trail line, blue lake, small mountain icons, compass arrow, green shading, and darkened fold contours",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional green and blue colored pencils"],
    steps: [
      {
        name: "Block the map sheet",
        text: "Draw a wide paper outline with slightly uneven edges, then mark the top and bottom fold peaks lightly.",
        tip: "Keep the outside shape simple. A readable folded map starts with a strong paper silhouette."
      },
      {
        name: "Score the folds",
        text: "Add vertical and diagonal crease lines that divide the paper into folded panels.",
        tip: "Let every crease connect to the outer edge. Floating fold lines make the paper look flat."
      },
      {
        name: "Draw the trail",
        text: "Sketch a winding trail line across several panels, letting it bend over the creases.",
        tip: "Curve the route gently. A trail that snakes too tightly can crowd the small map."
      },
      {
        name: "Add land marks",
        text: "Place a small lake on one panel and a few tiny mountain icons away from the trail.",
        tip: "Use simple landmark shapes. The lesson is about a map, not detailed landscape drawing."
      },
      {
        name: "Tint the map",
        text: "Add a small compass arrow without letters, then shade the existing land and lake with restrained green and blue.",
        tip: "Keep the color light enough that the trail and fold lines remain easy to see."
      },
      {
        name: "Finish the folded camp map",
        text: "Darken the keeper contours, clarify the folds, route, lake, mountains, and compass arrow, and deepen the existing color.",
        tip: "Stop before adding place names or extra symbols. A text-free map stays cleaner for a quick sketch lesson.",
        image: true
      }
    ]
  },
  {
    slug: "apple-turnover-on-a-plate",
    day: "050",
    date: "Sunday, July 5",
    isoDate: "2026-07-05",
    subject: "an apple turnover on a plate",
    headlineSubject: "an apple turnover<br>on a plate",
    shortSubject: "an apple turnover",
    lessonTitle: "Let's draw an apple turnover on a plate",
    description: "Learn how to draw an apple turnover on a plate with a shallow plate ellipse, folded triangular pastry, crimped edge, apple filling slit, fork, crumbs, warm pastry color, and soft graphite shading.",
    intro: "Start with the plate and folded pastry as simple shapes, then press in the edge, add the filling slit and fork, and finish with crumbs and warm color. Your pastry can be a little uneven; the crimped edge and plate are what make it readable.",
    time: 25,
    difficulty: "Easy-medium",
    accent: "#c98737",
    finished: "apple-turnover-on-a-plate-finished-v1.jpg",
    finishedAlt: "Graphite and colored-pencil sketch of a golden triangular apple turnover on a round plate with crimped edge, apple filling slit, fork, crumbs, and soft shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional golden-brown colored pencil"],
    steps: [
      {
        name: "Place the plate and pastry",
        text: "Draw a shallow oval for the plate, then place a light triangular turnover body inside it.",
        tip: "Keep the triangle low and wide. A flatter pastry feels more believable on the plate."
      },
      {
        name: "Fold the pastry form",
        text: "Round the pastry corners and draw the folded seam over the construction lines.",
        tip: "Let the seam follow the outside edge. That makes the turnover look folded instead of like a plain triangle."
      },
      {
        name: "Press the edge",
        text: "Add small crimp marks along the folded edge, then clean up the plate rim around the pastry.",
        tip: "Use short repeated marks for the crimping. They do not need to be perfectly even."
      },
      {
        name: "Add filling and fork",
        text: "Cut a short slit near the top of the turnover, show a peek of apple filling, and angle a simple fork beside the plate.",
        tip: "Make the fork narrow and simple. Four readable tines are enough for this sketch."
      },
      {
        name: "Scatter crumbs and shade",
        text: "Add a few crumbs on the plate, then shade the pastry with light golden pencil and soft graphite under the rim.",
        tip: "Leave pale paper showing through the color. Broken shading keeps the pastry sketchy and warm."
      },
      {
        name: "Finish the apple turnover sketch",
        text: "Darken the keeper contours, sharpen the crimp marks, warm the existing pastry shading, and clarify the fork and crumbs.",
        tip: "Stop before adding a table setting or extra fruit. The plate, fork, crimping, and filling slit already carry the subject.",
        image: true
      }
    ]
  },
  {
    slug: "strawberry-basket",
    day: "012",
    date: "Thursday, May 28",
    isoDate: "2026-05-28",
    subject: "a strawberry basket",
    headlineSubject: "a strawberry<br>basket",
    shortSubject: "a strawberry basket",
    lessonTitle: "Let's draw a strawberry basket",
    description: "Learn how to draw a strawberry basket with a shallow woven body, thick rim, arched handle, rounded berries, leafy caps, seed dots, restrained red and green color, and a soft ground shadow.",
    intro: "Start with the basket as a low oval, then build the handle and tuck the berries inside before adding caps, weave, seeds, and gentle color. Your berries can overlap in different ways, as long as the basket stays readable.",
    time: 25,
    difficulty: "Easy-medium",
    accent: "#cf4f43",
    finished: "strawberry-basket-finished-v1.jpg",
    finishedAlt: "Graphite and colored-pencil sketch of a shallow woven basket filled with red strawberries, green leafy caps, arched handle, seed dots, and soft ground shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional red and green colored pencils"],
    steps: [
      {
        name: "Block the basket",
        text: "Draw a wide shallow oval for the basket opening, then add curved sides and a light base guide underneath.",
        tip: "Keep the basket low and wide. That leaves room for the strawberries to sit above the rim."
      },
      {
        name: "Add rim and handle",
        text: "Thicken the rim around the opening, then draw an arched handle that connects to both sides.",
        tip: "Let the handle follow the basket's center line. A centered handle keeps the basket from feeling tipped over."
      },
      {
        name: "Tuck in berries",
        text: "Fill the basket with several rounded strawberry shapes, letting a few overlap the rim and each other.",
        tip: "Use simple heart-like berry shapes. Perfect symmetry matters less than a clear pile of fruit."
      },
      {
        name: "Add caps and weave",
        text: "Place small leafy caps on the berries, then sketch light crisscross weave marks across the basket body.",
        tip: "Curve the weave with the basket. Straight rows can make the rounded basket look flat."
      },
      {
        name: "Color the berries",
        text: "Add tiny seed dots, soft red pencil on the berries, green on the caps, and a light shadow under the basket.",
        tip: "Leave little pale gaps in the red color so the berries keep their sketchbook texture."
      },
      {
        name: "Finish the fruit basket",
        text: "Darken the keeper contours, clarify the weave and seed dots, and deepen the existing color and ground shadow.",
        tip: "Stop before adding a table, napkin, or extra fruit. The basket, handle, and berries already give the lesson enough to draw.",
        image: true
      }
    ]
  },
  {
    slug: "garden-gnome",
    day: "013",
    date: "Friday, May 29",
    isoDate: "2026-05-29",
    subject: "a garden gnome",
    headlineSubject: "a garden<br>gnome",
    shortSubject: "a garden gnome",
    lessonTitle: "Let's draw a garden gnome",
    description: "Learn how to draw a garden gnome with a tall pointed hat, round nose, soft beard, small boots, mitten hands, garden grass, restrained red and blue color, and a gentle ground shadow.",
    intro: "Build the gnome from one tall hat shape and a small rounded body, then tuck in the beard, nose, hands, boots, and garden texture. Your gnome can lean a little or wear different colors, as long as the hat and beard stay readable.",
    time: 25,
    difficulty: "Easy-medium",
    accent: "#c65f52",
    finished: "garden-gnome-finished-v1.jpg",
    finishedAlt: "Graphite and colored-pencil sketch of a garden gnome with a tall red hat, round nose, long white beard, blue coat, small boots, mitten hands, grass tufts, and soft ground shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional red and blue-gray colored pencils"],
    steps: [
      {
        name: "Block the hat",
        text: "Draw a tall leaning pointed hat guide, then place a small rounded body underneath it with a light center line.",
        tip: "The hat is the whole silhouette. Keep it big enough that the beard and body can tuck underneath."
      },
      {
        name: "Tuck in nose and beard",
        text: "Add a soft hat brim, place a round nose under the brim, and sketch a large tapered beard down the center.",
        tip: "Let the beard overlap the body guide. That overlap makes the gnome feel cozy instead of stacked."
      },
      {
        name: "Set the small stance",
        text: "Clarify the coat sides and add two rounded boots below the beard.",
        tip: "Keep the boots simple and low. Oversized boots can steal attention from the hat and beard."
      },
      {
        name: "Add brim and sleeves",
        text: "Darken the hat brim a little, then add small mitten hands and sleeve shapes on both sides of the beard.",
        tip: "Place the hands at about the same height, but do not make them identical. A little unevenness feels handmade."
      },
      {
        name: "Texture the garden",
        text: "Add soft beard lines, grass tufts near the feet, light red on the hat, and blue-gray on the coat.",
        tip: "Use broken texture lines in the beard. Too many dark lines can make the white beard look heavy."
      },
      {
        name: "Finish the little gnome",
        text: "Darken the keeper contours, clarify the beard and hands, and deepen the existing color and ground shadow.",
        tip: "Stop before adding eyes or a busy background. The hidden face and big hat are what make this gnome work.",
        image: true
      }
    ]
  },
  {
    slug: "mason-jar-sparklers",
    day: "014",
    date: "Saturday, May 30",
    isoDate: "2026-05-30",
    subject: "a mason jar with sparklers",
    headlineSubject: "a mason jar<br>with sparklers",
    shortSubject: "a sparkler jar",
    lessonTitle: "Let's draw a mason jar with sparklers",
    description: "Learn how to draw a mason jar with sparklers using a rounded glass jar, threaded rim, crossed sparkler stems, starburst tips, glass highlights, warm yellow sparks, and a soft cast shadow.",
    intro: "Start with the glass jar, then build the sparklers as simple sticks before adding the bright bursts. The glow can be loose, but keep the stems and jar rim clear so the drawing still reads as a real object.",
    time: 25,
    difficulty: "Easy-medium",
    accent: "#d9a22f",
    finished: "mason-jar-sparklers-finished-v1.jpg",
    finishedAlt: "Graphite and colored-pencil sketch of a mason jar holding crossed sparklers with threaded glass rim, bright yellow spark bursts, glass highlights, and soft cast shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional yellow-orange colored pencil"],
    steps: [
      {
        name: "Place the jar guides",
        text: "Draw a rounded jar body with a top ellipse, a bottom ellipse, soft shoulders, and a pale center guide.",
        tip: "Keep the jar symmetrical before adding the sparklers. The straight guide helps the glass feel steady."
      },
      {
        name: "Shape the glass",
        text: "Clarify the jar sides and base, then add stacked ellipses and bands for the threaded mouth.",
        tip: "Use lighter inner lines than outer lines. That difference is what makes the jar read as transparent glass."
      },
      {
        name: "Set the sparkler stems",
        text: "Draw several long thin stems crossing inside the jar and fanning out above the rim.",
        tip: "Let a few stems overlap. Crossed lines inside the glass make the jar feel full without adding extra props."
      },
      {
        name: "Add the spark tips",
        text: "Place small starburst marks at the top of each stem, keeping the sparks attached to the sticks you already drew.",
        tip: "Vary the spark sizes slightly. Matching every burst makes the drawing feel stiff."
      },
      {
        name: "Glint the glass",
        text: "Add vertical glass highlights, warm yellow-orange spark marks, rim detail, and a soft shadow under the jar.",
        tip: "Leave white paper inside the highlights. It is easier than trying to erase bright glass back in later."
      },
      {
        name: "Finish the glowing jar",
        text: "Darken the keeper contours, strengthen the existing spark color, clarify the glass highlights, and deepen the shadow.",
        tip: "Stop before filling the whole page with sparks. A few bright bursts make the jar feel lively and still drawable.",
        image: true
      }
    ]
  },
  {
    slug: "parade-drum-with-sticks",
    day: "048",
    date: "Friday, July 3",
    isoDate: "2026-07-03",
    subject: "a parade drum with sticks",
    headlineSubject: "a parade drum<br>with sticks",
    shortSubject: "a parade drum",
    lessonTitle: "Let's draw a parade drum with sticks",
    description: "Learn how to draw a parade drum with a tilted cylinder body, top and bottom rims, crossed drumsticks, side straps, lacing, restrained red and blue accents, and a soft shadow.",
    intro: "Build the drum from one tilted cylinder, then cross the sticks, lace the shell, and add a little parade color. Use the red and blue as accents, not a full paint job, so the sketch still feels light and handmade.",
    time: 25,
    difficulty: "Easy-medium",
    accent: "#c54d49",
    finished: "parade-drum-with-sticks-finished-v1.jpg",
    finishedAlt: "Graphite and colored-pencil sketch of a parade drum with crossed drumsticks, side lacing, red and blue rim accents, and a soft ground shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional red and blue colored pencils"],
    steps: [
      {
        name: "Place the drum guides",
        text: "Draw a tilted oval for the top of the drum, a matching lower curve, and a light center guide through the shell.",
        tip: "Keep these marks pale. The two curves should feel like they belong to the same squat cylinder."
      },
      {
        name: "Wrap the drum shell",
        text: "Turn the guides into clean top and bottom rims, then connect them with slightly angled side edges.",
        tip: "Let the lower rim echo the top ellipse. Matching curves make the drum feel round instead of flat."
      },
      {
        name: "Cross the sticks",
        text: "Place two slim drumsticks across the top rim, crossing them near the middle and adding small rounded tips.",
        tip: "Draw the sticks after the rim so you can tuck them convincingly on top of the drum."
      },
      {
        name: "Add straps and lacing",
        text: "Sketch small side straps, then zigzag simple lacing marks between the top and bottom rims.",
        tip: "Space the lacing lightly. A few clear V shapes read better than a crowded row of tiny strings."
      },
      {
        name: "Shade the parade colors",
        text: "Add restrained red and blue accents to the drum bands, shade the shell and sticks, and place a soft shadow underneath.",
        tip: "Keep the color inside shapes you already drew. The graphite should still do most of the form work."
      },
      {
        name: "Finish the parade drum",
        text: "Darken the keeper contours, clarify the sticks and lacing, and deepen the existing color and shadow.",
        tip: "Stop before adding flags or lettering. The crossed sticks, lacing, and bright rims already say parade drum.",
        image: true
      }
    ]
  },
  {
    slug: "waving-flag-on-a-porch",
    day: "049",
    date: "Saturday, July 4",
    isoDate: "2026-07-04",
    subject: "a waving flag on a porch",
    headlineSubject: "a waving flag<br>on a porch",
    shortSubject: "a porch flag",
    lessonTitle: "Let's draw a waving flag on a porch",
    description: "Learn how to draw a waving flag on a porch with an angled pole, soft flag wave, curved stripes, small star field, porch rail, restrained red and blue pencil color, and light graphite shading.",
    intro: "Build the flag from the pole first, then let the cloth wave away from it before adding stripes, the star field, porch rail, and small color accents. Keep the flag simple and sketchy; this is a drawing lesson, not a perfect diagram.",
    time: 25,
    difficulty: "Easy-medium",
    accent: "#2f6fae",
    finished: "waving-flag-on-a-porch-finished-v1.jpg",
    finishedAlt: "Graphite and colored-pencil sketch of a small waving American flag on an angled porch pole with curved red stripes, blue star field, porch rail, and soft shading",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional red and blue colored pencils"],
    steps: [
      {
        name: "Place the pole",
        text: "Draw a long angled pole with a small round knob at the top, then add a simple porch mount and rail guide near the base.",
        tip: "Set the pole angle first. The flag will feel more natural if it grows from a confident diagonal."
      },
      {
        name: "Shape the waving flag",
        text: "Attach a soft wavy rectangle to the pole, letting the top and bottom edges ripple in the same direction.",
        tip: "Keep the far edge simple. One gentle wave is easier to stripe than a complicated zigzag."
      },
      {
        name: "Divide the flag",
        text: "Add curved stripe bands across the flag and block in a small star field near the pole.",
        tip: "Let every stripe follow the cloth's wave. Matching curves make the flag look flexible."
      },
      {
        name: "Add rail and star marks",
        text: "Clarify the porch rail behind the pole, then add small star-like dots inside the field.",
        tip: "Use dots or tiny stars instead of exact tiny shapes. The goal is a readable sketch, not a formal flag chart."
      },
      {
        name: "Add soft flag color",
        text: "Shade the existing stripe bands with red, fill the field with blue, and add light graphite to the pole and rail.",
        tip: "Keep the color broken and pencil-like. White paper between the stripes helps the flag stay bright."
      },
      {
        name: "Finish the porch flag",
        text: "Darken the keeper contours, strengthen the existing red and blue accents, and deepen the pole, rail, and soft shadows.",
        tip: "Stop before adding a whole house or landscape. The angled pole, porch rail, and waving cloth already tell the scene.",
        image: true
      }
    ]
  },
  {
    slug: "mason-jar-with-fireflies",
    day: "015",
    date: "Sunday, May 31",
    isoDate: "2026-05-31",
    subject: "a mason jar with fireflies",
    headlineSubject: "a mason jar<br>with fireflies",
    shortSubject: "a firefly jar",
    lessonTitle: "Let's draw a mason jar with fireflies",
    description: "Learn how to draw a mason jar with a rounded glass body, ribbed lid, inner glass lines, tiny fireflies, grass sprigs, soft yellow glow, and gentle graphite shading.",
    intro: "Start with the glass jar shape, add the lid and inner contour lines, then place tiny fireflies before adding the glow. Your fireflies can drift to different spots as long as they stay inside the jar.",
    time: 25,
    difficulty: "Easy-medium",
    accent: "#d8b247",
    finished: "mason-jar-with-fireflies-finished-v1.jpg",
    finishedAlt: "Graphite and colored-pencil sketch of a mason jar with ribbed lid, transparent glass lines, tiny fireflies, soft yellow glow, grass sprigs, and light shading",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional yellow colored pencil"],
    steps: [
      {
        name: "Block the jar",
        text: "Draw a rounded jar body with soft shoulders, straight sides, and a curved base ellipse.",
        tip: "Use a light center guide if the jar starts leaning. Symmetry helps the glass feel believable."
      },
      {
        name: "Cap the lid",
        text: "Add a narrow lid band across the top, then sketch short rib marks along the band.",
        tip: "Keep the ribs simple and vertical. They should suggest a metal lid, not become the whole drawing."
      },
      {
        name: "Show the glass",
        text: "Draw inner contour lines along the sides and add a curved base line inside the jar.",
        tip: "Make the inside lines lighter than the outside edge. That keeps the glass transparent."
      },
      {
        name: "Place the fireflies",
        text: "Add several tiny fireflies inside the jar with small bodies, little wings, and dot-like glow centers.",
        tip: "Vary their heights so the jar feels lively. Leave enough space around each bug for the glow."
      },
      {
        name: "Add grass and glow",
        text: "Sketch grass and leaf sprigs around the base, then add soft yellow halos around the fireflies.",
        tip: "Use yellow gently. A pale glow works better than filling the whole jar with color."
      },
      {
        name: "Finish the firefly jar",
        text: "Darken the keeper contours, clarify the lid ribs and glass lines, and deepen the existing firefly glow and grass texture.",
        tip: "Let some construction softness remain. A firefly jar feels best when the light is a little loose.",
        image: true
      }
    ]
  },
  {
    slug: "summer-sun-hat-ribbon",
    day: "016",
    date: "Monday, June 1",
    isoDate: "2026-06-01",
    subject: "a summer sun hat with a ribbon",
    headlineSubject: "a summer sun hat<br>with a ribbon",
    shortSubject: "a sun hat with a ribbon",
    lessonTitle: "Let's draw a summer sun hat with a ribbon",
    description: "Learn how to draw a summer sun hat with a floppy brim, rounded crown, ribbon band, side bow, straw texture, restrained color, and a soft cast shadow.",
    intro: "Start with two loose hat guides, then let the brim sag, wrap the ribbon, tie the bow, and add straw texture. Your ribbon can land on either side; the useful part is keeping the brim and crown lined up.",
    time: 25,
    difficulty: "Easy-medium",
    accent: "#d08c6f",
    finished: "summer-sun-hat-ribbon-finished-v1.jpg",
    finishedAlt: "Graphite and colored-pencil sketch of a summer straw sun hat with a floppy brim, rounded crown, peach ribbon bow, woven texture, and soft cast shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional tan and peach colored pencils"],
    steps: [
      {
        name: "Place the hat guides",
        text: "Draw a wide tilted oval for the brim, then add a rounded crown guide rising from the middle.",
        tip: "Keep the crown centered on the brim. A light vertical guide helps the hat feel balanced."
      },
      {
        name: "Loosen the brim",
        text: "Turn the guide oval into a floppy brim by dipping the front edge and showing a curved underside on both sides.",
        tip: "Let the brim wobble a little. A sun hat looks better when the edge is relaxed instead of perfectly mechanical."
      },
      {
        name: "Wrap the ribbon band",
        text: "Clean up the crown shape and draw a ribbon band around its base, following the curve of the hat.",
        tip: "The band should bend with the crown. If it is too straight, the hat will look flat."
      },
      {
        name: "Tie the side bow",
        text: "Add a small bow on one side of the band, then let two ribbon tails hang down over the brim.",
        tip: "Build the bow from soft loops first, then add the tail points. They do not need to match exactly."
      },
      {
        name: "Sketch straw and shade",
        text: "Add loose woven marks across the crown and brim, tint the straw and ribbon lightly, and place a soft shadow under the brim.",
        tip: "Use broken texture lines rather than a full grid. The gaps keep the hat from becoming too busy."
      },
      {
        name: "Finish the sunny hat",
        text: "Darken the keeper contours, clarify the bow and weave marks, and deepen the color and shadow that are already on the page.",
        tip: "Stop while the paper still shows through. A little uneven graphite makes the hat feel drawn by hand.",
        image: true
      }
    ]
  },
  {
    slug: "backyard-pinwheel",
    day: "047",
    date: "Thursday, July 2",
    isoDate: "2026-07-02",
    subject: "a backyard pinwheel",
    headlineSubject: "a backyard<br>pinwheel",
    shortSubject: "a backyard pinwheel",
    lessonTitle: "Let's draw a backyard pinwheel",
    description: "Learn how to draw a backyard pinwheel with a center hub, four folded paper blades, a slender stick, simple dot patterns, light red and blue color, and a soft shadow.",
    intro: "Build the pinwheel from the middle outward, then add folded paper blades, a stick, pattern dots, and light color. You can change the colors or dot pattern later; keep the hub and blade directions clear.",
    time: 20,
    difficulty: "Easy",
    accent: "#d85f63",
    finished: "backyard-pinwheel-finished-v1.jpg",
    finishedAlt: "Graphite and colored-pencil sketch of a backyard pinwheel with four folded red and blue dotted blades, center hub, slender stick, and soft ground shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional red and blue colored pencils"],
    steps: [
      {
        name: "Place the hub",
        text: "Draw a small circle for the hub, then sketch two light diagonal guide lines through it.",
        tip: "Keep the guides pale. They only help you aim the blade points in four directions."
      },
      {
        name: "Swing out the blades",
        text: "Wrap four curved triangle blades around the hub, letting each blade bend slightly like folded paper.",
        tip: "Each blade should start near the center and sweep outward. Uneven curves make the pinwheel feel handmade."
      },
      {
        name: "Add the stick",
        text: "Refine the blade outside edges, then draw a slender stick dropping down from behind the hub.",
        tip: "Let the stick tuck behind the pinwheel. That overlap keeps the center from getting too busy."
      },
      {
        name: "Fold the paper",
        text: "Add short interior fold lines on the blades so each paper flap looks curled.",
        tip: "Follow the blade curve instead of drawing straight stripes. The fold lines should support the spin shape."
      },
      {
        name: "Pattern the breeze",
        text: "Add small dot patterns, tint alternating blades red and blue, and sketch a soft shadow near the stick.",
        tip: "Color lightly so the pencil texture still shows. The pinwheel should feel bright, not filled in solid."
      },
      {
        name: "Finish the pinwheel",
        text: "Darken the keeper contours, clarify the folds, and deepen the color and shadow already on the page.",
        tip: "Stop before adding extra ribbons or background details. The folded blades and simple stick are enough.",
        image: true
      }
    ]
  },
  {
    slug: "mailbox-with-flag",
    day: "017",
    date: "Tuesday, June 2",
    isoDate: "2026-06-02",
    subject: "a mailbox with a flag",
    headlineSubject: "a mailbox<br>with a flag",
    shortSubject: "a mailbox",
    lessonTitle: "Let's draw a mailbox with a flag",
    description: "Learn how to draw a mailbox with a rounded body, front door curve, support post, raised flag, tiny handle, grass tufts, blue-gray shading, and a red flag.",
    intro: "Start with the rounded box, then add the post, raised flag, little hardware, grass, and soft color. This route keeps the mailbox simple enough to draw while still giving it a place to stand.",
    time: 25,
    difficulty: "Easy-medium",
    accent: "#7898ad",
    finished: "mailbox-with-flag-finished-v1.jpg",
    finishedAlt: "Graphite and colored-pencil sketch of a blue-gray rural mailbox on a wooden post with a raised red flag, small handle, side seams, grass tufts, and soft shading",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional blue-gray and red colored pencils"],
    steps: [
      {
        name: "Block the box",
        text: "Draw a long rounded-top box, keeping the front curve slightly taller than the back edge.",
        tip: "Think of a rectangle with a half circle roof. Light construction lines make the curve easier to adjust."
      },
      {
        name: "Set door and post",
        text: "Add the curved front door line, then place a vertical support post under the mailbox.",
        tip: "Center the post under the box so the mailbox feels balanced before details go on."
      },
      {
        name: "Raise the flag",
        text: "Draw the side flag standing up from the mailbox and refine the outside body edges.",
        tip: "Keep the flag simple: one narrow arm and one small rectangle are enough to read clearly."
      },
      {
        name: "Mark the hardware",
        text: "Add a tiny front handle, a side seam, and a few small edge marks to show the mailbox panels.",
        tip: "Small details work best when they follow the main curve. Do not crowd the door."
      },
      {
        name: "Ground the post",
        text: "Sketch grass tufts around the post, shade the mailbox blue-gray, and color the raised flag red.",
        tip: "Let the grass overlap the post a little. That helps the mailbox sit in the scene instead of floating."
      },
      {
        name: "Finish the mailbox",
        text: "Darken the keeper lines, clarify the flag and hardware, and deepen the shading and grass already in place.",
        tip: "Avoid adding letters or numbers. The raised flag, rounded box, and post tell the story clearly.",
        image: true
      }
    ]
  },
  {
    slug: "waffle-ice-cream-cone",
    day: "046",
    date: "Wednesday, July 1",
    isoDate: "2026-07-01",
    subject: "a waffle ice cream cone",
    headlineSubject: "a waffle ice<br>cream cone",
    shortSubject: "a waffle ice cream cone",
    lessonTitle: "Let's draw a waffle ice cream cone",
    description: "Learn how to draw a waffle ice cream cone with a round scoop, wavy scoop edge, cone rim, crossed waffle lines, sprinkles, restrained color, and a soft shadow.",
    intro: "Start with a scoop and cone, then add the wavy edge, waffle grid, sprinkles, and a little summer color. Change the flavor or sprinkle pattern if you want; keep the simple structure underneath.",
    time: 20,
    difficulty: "Easy",
    accent: "#d28b67",
    finished: "waffle-ice-cream-cone-finished-v1.jpg",
    finishedAlt: "Graphite and colored-pencil sketch of a waffle ice cream cone with a pink scoop, sprinkles, crossed waffle lines, tan cone shading, and a soft cast shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional tan and pink colored pencils"],
    steps: [
      {
        name: "Stack the simple shapes",
        text: "Draw a round scoop guide first, then tuck a tapered cone triangle underneath it.",
        tip: "Keep the cone centered under the scoop. A straight middle guide helps the treat stand upright."
      },
      {
        name: "Wave the scoop edge",
        text: "Add a wavy lower edge to the scoop, then draw an oval rim where the ice cream sits on the cone.",
        tip: "Let the waves be uneven. Ice cream looks friendlier when the edge is not too perfect."
      },
      {
        name: "Clean the cone contour",
        text: "Darken the outside scoop curve, clarify the rim, and refine the two cone sides down to the point.",
        tip: "Do not erase every guide yet. The center line can help when you add the waffle pattern."
      },
      {
        name: "Cross the waffle lines",
        text: "Draw diagonal lines one way across the cone, cross them the other way, and scatter small sprinkles across the scoop.",
        tip: "Follow the cone's taper. The diamonds should feel a little narrower near the bottom."
      },
      {
        name: "Tint the cone and scoop",
        text: "Add light tan color to the cone, a pale pink tint to the scoop, and a soft shadow off to one side.",
        tip: "Color lightly enough that the graphite still shows through. The texture helps the cone feel sketchy instead of flat."
      },
      {
        name: "Finish the summer treat",
        text: "Darken the keeper contours, clarify the sprinkles and waffle grid, and deepen the color and shadow that are already in place.",
        tip: "Stop before the color becomes solid. A few white gaps make the scoop and cone feel hand drawn.",
        image: true
      }
    ]
  },
  {
    slug: "rain-boot-with-puddle",
    day: "018",
    date: "Wednesday, June 3",
    isoDate: "2026-06-03",
    subject: "a rain boot with a puddle",
    headlineSubject: "a rain boot<br>with a puddle",
    shortSubject: "a rain boot",
    lessonTitle: "Let's draw a rain boot with a puddle",
    description: "Learn how to draw a rain boot with a tall shaft, rounded foot, cuff, heel, thick sole, simple stripe, puddle reflection, and restrained blue-gray shading.",
    intro: "Build one boot from a tall shaft and rounded foot, then add the cuff, tread, stripe, puddle, and soft rainy shading. You can change the stripe color later as long as the boot shape stays clear.",
    time: 25,
    difficulty: "Easy-medium",
    accent: "#6f93b8",
    finished: "rain-boot-with-puddle-finished-v1.jpg",
    finishedAlt: "Graphite and blue-gray colored-pencil sketch of a single rain boot standing in a puddle with a cuff, stripe band, thick sole, reflection marks, and soft shading",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional blue-gray colored pencil"],
    steps: [
      {
        name: "Block in the boot",
        text: "Draw a tall rounded shaft, then attach a rounded foot shape that points gently to one side.",
        tip: "Use light lines here. The boot should feel sturdy, but the first shapes can stay loose."
      },
      {
        name: "Curve the cuff and heel",
        text: "Add an oval top opening, a curved cuff band, and a small heel shape at the back of the foot.",
        tip: "The top oval shows that the boot has thickness. Keep it tucked inside the shaft edges."
      },
      {
        name: "Shape the sole",
        text: "Refine the rounded toe and draw a thicker sole along the bottom of the foot.",
        tip: "A rain boot needs a chunky base. Make the sole a little heavier than the shaft lines."
      },
      {
        name: "Add stripe and puddle",
        text: "Place a simple stripe band around the shaft, then draw a shallow puddle oval spreading under the boot.",
        tip: "Let the puddle sit wider than the sole so the boot feels planted in wet ground."
      },
      {
        name: "Shade the wet edges",
        text: "Add a few reflection marks in the puddle and shade the boot lightly with blue-gray pencil.",
        tip: "Keep the reflection broken into short strokes. A puddle looks more believable when it is not one flat mirror."
      },
      {
        name: "Finish the rainy sketch",
        text: "Darken the keeper contours, clarify the stripe and sole, and deepen the boot and puddle shading already on the page.",
        tip: "Do not add new decorations at the end. This final pass should make the simple boot cleaner and wetter.",
        image: true
      }
    ]
  },
  {
    slug: "backyard-telescope",
    day: "045",
    date: "Tuesday, June 30",
    isoDate: "2026-06-30",
    subject: "a backyard telescope",
    headlineSubject: "a backyard<br>telescope",
    shortSubject: "a telescope",
    lessonTitle: "Let's draw a backyard telescope",
    description: "Learn how to draw a backyard telescope with a tilted tube, front lens rim, eyepiece, finder scope, tripod legs, folded star chart, and soft graphite shading.",
    intro: "Use one tilted tube to aim the telescope, then build the lens, eyepiece, finder scope, tripod, and a small star chart. Treat the details as suggestions you can simplify or personalize.",
    time: 25,
    difficulty: "Easy-medium",
    accent: "#536fa8",
    finished: "backyard-telescope-finished-v1.jpg",
    finishedAlt: "Graphite and blue-gray colored-pencil sketch of a backyard telescope angled upward on a tripod with finder scope, lens rim, folded star chart, and soft shading",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional blue-gray colored pencil"],
    steps: [
      {
        name: "Angle the main tube",
        text: "Draw a long tilted tube pointing up toward the right, then add a light center guide and a small mount circle underneath it.",
        tip: "Keep the first tube pale and simple. The angle matters more than perfect straight edges."
      },
      {
        name: "Cap the lens and eyepiece",
        text: "Add a round rim at the sky-facing end, then place a small angled eyepiece at the lower end of the tube.",
        tip: "Make the front rim wider than the eyepiece so the telescope reads quickly."
      },
      {
        name: "Set the finder scope",
        text: "Refine the tube contour and draw a tiny finder scope resting on top of the main telescope.",
        tip: "Let the finder scope follow the same tilt as the big tube. Parallel angles keep the drawing tidy."
      },
      {
        name: "Build the tripod",
        text: "Draw the central mount, then pull three tripod legs down to the ground and place a folded star chart near the feet.",
        tip: "Spread the legs wider than the tube. A stable base makes the whole sketch feel believable."
      },
      {
        name: "Shade the chart and lens",
        text: "Add tripod braces, a few chart marks, a soft ground shadow, and pale blue-gray accents on the lens rims and folded paper.",
        tip: "Keep the chart marks tiny and simple, or invent a different little note on the paper. The prop should support the telescope, not become a map lesson."
      },
      {
        name: "Finish the stargazing sketch",
        text: "Darken the keeper contours, clarify the lens rings and tripod joints, and deepen the graphite shading already placed on the tube, mount, shadow, and star chart.",
        tip: "Stop while some construction texture still shows. A telescope sketch feels more alive when the graphite is not over-polished.",
        image: true
      }
    ]
  },
  {
    slug: "honeybee-on-a-flower",
    day: "019",
    date: "Thursday, June 4",
    isoDate: "2026-06-04",
    subject: "a honeybee on a flower",
    headlineSubject: "a honeybee<br>on a flower",
    shortSubject: "a honeybee",
    lessonTitle: "Let's draw a honeybee on a flower",
    description: "Learn how to draw a honeybee on a flower with an oval bee body, transparent wings, stripes, antennae, petals, stem, leaves, and restrained yellow pencil color.",
    intro: "Build the bee and flower from simple ovals first, then add stripes, petals, legs, and a little yellow warmth. Your flower shape and bee markings can vary; the goal is a believable garden sketch.",
    time: 25,
    difficulty: "Easy-medium",
    accent: "#d5a927",
    finished: "honeybee-on-a-flower-finished-v1.jpg",
    finishedAlt: "Graphite and yellow colored-pencil sketch of a honeybee with wings and stripes resting on a flower with petals, stem, leaves, and soft shading",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Yellow colored pencil"],
    steps: [
      {
        name: "Place bee and flower guides",
        text: "Draw a small oval for the bee body and a round flower center below it, letting the two guides touch lightly.",
        tip: "Keep these guides loose. The bee will tilt across the flower, so the body does not need to sit perfectly flat."
      },
      {
        name: "Add head and wings",
        text: "Attach a small head circle to the front of the bee, then draw two long wing shapes above the body.",
        tip: "Let the wings overlap the body a bit. Transparent-looking wings feel lighter when they are drawn with pale lines."
      },
      {
        name: "Shape petals and stripes",
        text: "Add rounded petals around the flower center and curve several stripe bands across the bee's body.",
        tip: "Curve the stripes around the oval instead of drawing straight bars. That gives the tiny body volume."
      },
      {
        name: "Add legs, antennae, and stem",
        text: "Sketch tiny antennae, small bent legs touching the flower, a short stem, and two simple leaves.",
        tip: "Use fewer leg lines than you think you need. Clear placement beats a tangle of tiny marks."
      },
      {
        name: "Texture the wings and petals",
        text: "Add light wing veins, petal contour lines, soft graphite shading, and a gentle yellow tint on the bee and flower center.",
        tip: "Keep the yellow restrained so the graphite drawing still does most of the work."
      },
      {
        name: "Finish the garden sketch",
        text: "Darken the keeper contours, clarify the bee stripes and wing veins, and deepen the yellow and graphite shading that is already in place.",
        tip: "Leave the flower petals mostly pale, but do not worry if your petal count or curve is different. That variation is part of making the sketch yours.",
        image: true
      }
    ]
  },
  {
    slug: "curious-fox",
    day: "030",
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
    day: "044",
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
    day: "043",
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
    day: "042",
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
    day: "041",
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
    day: "040",
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
    day: "039",
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
    day: "038",
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
    day: "037",
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
    day: "036",
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
    day: "035",
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
    day: "034",
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
    day: "033",
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
    day: "032",
    date: "Wednesday, June 17",
    isoDate: "2026-06-17",
    subject: "a cozy teacup",
    headlineSubject: "a cozy<br>teacup",
    shortSubject: "a cozy teacup",
    lessonTitle: "Let's draw a cozy teacup",
    description: "Learn how to draw a cozy teacup with an oval rim, curved handle, saucer, steam, warm tea, and a red heart on the cup.",
    intro: "Start with two light ovals, build the cup and saucer in layers, then finish with steam, warm tea, and a small decoration. The heart is a prompt, not a rule.",
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
        tip: "Center the heart, star, flower, or other tiny mark on the cup face, not on the whole page. This is a good place to make the sketch personal."
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
    day: "031",
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
    day: "029",
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
    day: "028",
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
    day: "027",
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
    day: "026",
    date: "Thursday, June 11",
    isoDate: "2026-06-11",
    subject: "a rainy-day frog",
    shortSubject: "a rainy-day frog",
    lessonTitle: "Let's draw a rainy-day frog",
    description: "Learn how to draw a cartoon frog in rain boots holding an umbrella with five friendly sketching steps.",
    intro: "Build a cheerful frog from rounded shapes, then give it boots, an umbrella, and a splash of rainy-day color. Follow the pose, then feel free to change the pattern or mood.",
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
        tip: "Leave white paper in the belly, umbrella, and boots so the drawing still feels quick and sketchy. Your umbrella pattern can be stripes, dots, or nothing at all.",
        image: true
      }
    ]
  },
  {
    slug: "lemonade-glass",
    day: "025",
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
    day: "022",
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
    day: "020",
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
    day: "021",
    date: "Saturday, June 6",
    isoDate: "2026-06-06",
    subject: "a stack of books",
    headlineSubject: "a stack<br>of books",
    shortSubject: "a stack of books",
    lessonTitle: "Let's draw a stack of books",
    description: "Learn how to draw a stack of books with three offset book blocks, page edges, a ribbon bookmark, worn cover bands, and soft graphite shading.",
    intro: "Build this book pile from simple rectangles, then add page lines, a hanging bookmark, and just enough shading to make the stack feel cozy. Change the bookmark, book count, or cover details if another story fits your sketch.",
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
        tip: "A bookmark works best when it crosses an existing edge. Swap it for a ribbon, sticky note, or plain cover if that feels more like your stack."
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
    day: "023",
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
    day: "024",
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
  }
];

const archiveLessons = [...lessons]
  .sort((first, second) => new Date(second.isoDate) - new Date(first.isoDate));
const latestLesson = archiveLessons[0];

const relatedCards = (currentSlug) => lessons
  .filter(({ slug }) => slug !== currentSlug)
  .slice(0, 3)
  .map((lesson) => `
    <a class="sketch-card" href="${lesson.slug}.html">
      <div class="card-art"><img src="../assets/${webpName(lesson.finished)}" alt="${lesson.finishedAlt}" width="1254" height="1254" loading="lazy"></div>
      <p>${lesson.time} min · ${lesson.difficulty}</p>
      <h3>How to draw ${lesson.shortSubject}</h3>
    </a>`)
  .join("");

// Previous/next daily-lesson links (by publish date) for crawl depth and
// session length. archiveLessons is newest-first, so index-1 is the newer
// lesson and index+1 is the older one.
const lessonPagination = (lesson) => {
  const index = archiveLessons.findIndex(({ slug }) => slug === lesson.slug);
  if (index === -1) return "";
  const newer = index > 0 ? archiveLessons[index - 1] : null;
  const older = index < archiveLessons.length - 1 ? archiveLessons[index + 1] : null;
  if (!newer && !older) return "";
  const link = (item, rel, label) => (item
    ? `<a class="pagination-link pagination-${rel}" rel="${rel}" href="${item.slug}.html">
          <span class="pagination-label">${label}</span>
          <span class="pagination-title">${rel === "prev" ? '<span aria-hidden="true">&larr;</span> ' : ""}How to draw ${escapeHtml(item.shortSubject)}${rel === "next" ? ' <span aria-hidden="true">&rarr;</span>' : ""}</span>
        </a>`
    : '<span class="pagination-link pagination-empty" aria-hidden="true"></span>');
  return `
    <nav class="lesson-pagination" aria-label="Nearby daily lessons">
        ${link(older, "prev", "Previous sketch")}
        ${link(newer, "next", "Next sketch")}
    </nav>`;
};

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
// Pages serve WebP derivatives (built by scripts/build-image-derivatives.py);
// the JPGs stay in assets/ as the reviewed masters and feed og/RSS/social cards.
const webpName = (file) => file.replace(/\.jpe?g$/i, ".webp");
// 1200x630 landscape Open Graph card, built by scripts/make-social-cards.py.
const socialCardUrl = (lesson) => `${siteUrl}/assets/social/${lesson.slug}-og.jpg`;
// Raster step frames follow the step's 1-based position in lesson.steps.
const stepImageUrls = (lesson) => lesson.steps
  .map((step, index) => (step.svg || step.image
    ? null
    : `${siteUrl}/assets/${lesson.slug}-step-${index + 1}.webp`))
  .filter(Boolean);
const rssPubDate = (isoDate) => new Date(`${isoDate}T12:00:00-07:00`).toUTCString();

// Shared entity nodes referenced by @id across every page's JSON-LD graph.
const orgNode = {
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "sketcha.day",
  url: `${siteUrl}/`,
  logo: `${siteUrl}/assets/site-icon.png`
};
const siteNode = {
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "sketcha.day",
  url: `${siteUrl}/`,
  description: "Daily sketch lessons that build drawing confidence through small, repeatable pencil practice.",
  publisher: { "@id": `${siteUrl}/#organization` }
};

const page = (lesson) => {
  const bareShortSubject = lesson.shortSubject.replace(/^(a|an) /, "");
  const titleArticle = /^[aeiou]/i.test(bareShortSubject) ? "an" : "a";
  const titleSubject = titleCase(bareShortSubject);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      orgNode,
      siteNode,
      {
        "@type": "HowTo",
        "@id": `${lessonUrl(lesson)}#howto`,
        name: `How to Draw ${titleArticle} ${titleSubject}`,
        description: lesson.description,
        image: [`${siteUrl}/assets/${lesson.finished}`, socialCardUrl(lesson)],
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
                ? `<img src="../assets/${webpName(lesson.finished)}" alt="${lesson.finishedAlt}" width="1254" height="1254" loading="lazy">`
                : step.svg
                ? step.svg
                : `<img src="../assets/${lesson.slug}-step-${index + 1}.webp" alt="${step.name} stage for how to draw ${lesson.shortSubject}" width="627" height="627" loading="lazy">`}
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
  <title>How to Draw ${titleArticle} ${titleSubject} Step by Step | sketcha.day</title>
  <meta name="description" content="${lesson.description}">
  <link rel="canonical" href="https://sketcha.day/tutorials/${lesson.slug}.html">
  <meta property="og:type" content="article">
  <meta property="og:title" content="How to Draw ${titleArticle} ${titleSubject}, Step by Step">
  <meta property="og:description" content="${lesson.description}">
  <meta property="og:url" content="https://sketcha.day/tutorials/${lesson.slug}.html">
  <meta property="og:image" content="${socialCardUrl(lesson)}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="${lesson.finishedAlt}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="theme-color" content="${lesson.accent}">
${iconLinks}
  <link rel="alternate" type="application/rss+xml" title="sketcha.day daily sketch feed" href="${siteUrl}/feed.xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preload" as="image" href="../assets/${webpName(lesson.finished)}" fetchpriority="high">
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
      <a class="brand-wordmark" href="../" aria-label="sketcha.day home"><span class="brand-name">${brandWordmark}</span></a>
    </div>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav"><span></span><span></span><span></span><span class="sr-only">Open menu</span></button>
    <nav class="site-nav" id="site-nav" aria-label="Main navigation">
      <a href="../">Today's sketch</a>
      <a href="../library.html">Sketch library</a>
      <a href="../about.html">About</a>
      <a href="https://doodlea.day/">doodlea.day</a>
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
        <img src="../assets/${webpName(lesson.finished)}" alt="${lesson.finishedAlt}" width="1254" height="1254" fetchpriority="high">
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
    </article>${lessonPagination(lesson)}
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
      <nav aria-label="Footer navigation"><a href="../">Today</a><a href="../library.html">Library</a><a href="../about.html">About</a><a href="https://doodlea.day/">doodlea.day</a><a href="mailto:hello@sketcha.day">Say hello</a></nav>
    </div>
    <small class="footer-copyright">© 2026 sketcha.day</small>
  </footer>
  <script src="../script.js"></script>
</body>
</html>`;
};

const aboutPage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      orgNode,
      siteNode,
      {
        "@type": "AboutPage",
        "@id": `${siteUrl}/about.html#aboutpage`,
        name: "About sketcha.day",
        description: "Learn how sketcha.day turns short pencil studies into a steady drawing habit for noticing shapes, proportions, texture, and light.",
        url: `${siteUrl}/about.html`,
        image: `${siteUrl}/assets/sketcha-family-sketch-v2.webp`,
        isPartOf: { "@id": `${siteUrl}/#website` },
        publisher: { "@id": `${siteUrl}/#organization` }
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/about.html#robby`,
        name: "Robby McCullough",
        description: "A lifelong drawer, designer, and web builder who makes pencil-first drawing lessons for steady sketchbook practice."
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/about.html#tracie`,
        name: "Tracie",
        description: "A mom and early childhood educator whose perspective helps keep the lessons patient, clear, and friendly for growing artists."
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
          { "@type": "ListItem", position: 2, name: "About", item: `${siteUrl}/about.html` }
        ]
      }
    ]
  };

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>About sketcha.day | Daily Drawing Practice for Curious Hands</title>
  <meta name="description" content="Meet the family behind sketcha.day and learn why the site focuses on short pencil studies, clear steps, and steady daily drawing practice.">
  <link rel="canonical" href="${siteUrl}/about.html">
  <meta property="og:type" content="website">
  <meta property="og:title" content="About sketcha.day">
  <meta property="og:description" content="A family-made sketchbook project for building drawing confidence through short, repeatable pencil practice.">
  <meta property="og:url" content="${siteUrl}/about.html">
  <meta property="og:image" content="${siteUrl}/assets/sketcha-family-sketch-v2.webp">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="theme-color" content="#f3b63c">
${iconLinks}
  <link rel="alternate" type="application/rss+xml" title="sketcha.day daily sketch feed" href="${siteUrl}/feed.xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Caveat+Brush&family=DM+Sans:opsz,wght@9..40,400;9..40,600;9..40,700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css?v=${styleVersion}">
  <script type="application/ld+json">${JSON.stringify(schema, null, 2)}</script>
  <script defer data-domain="sketcha.day" src="https://analytics.robbymccullough.com/js/script.js"></script>
</head>
<body class="about-page">
  <a class="skip-link" href="#about-main">Skip to about sketcha.day</a>
  <header class="site-header">
    <div class="brand">
      <img class="brand-mark" src="assets/logo-pencil-raster-v1.png" alt="" width="72" height="72">
      <a class="brand-wordmark" href="/" aria-label="sketcha.day home"><span class="brand-name">${brandWordmark}</span></a>
    </div>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav"><span></span><span></span><span></span><span class="sr-only">Open menu</span></button>
    <nav class="site-nav" id="site-nav" aria-label="Main navigation">
      <a href="/">Today's sketch</a>
      <a href="library.html">Sketch library</a>
      <a href="about.html" aria-current="page">About</a>
      <a href="https://doodlea.day/">doodlea.day</a>
      <a class="nav-button" href="/#lesson">Start drawing</a>
    </nav>
  </header>
  <main id="about-main" class="about-page-main">
    <section class="about-page-hero" aria-labelledby="about-title">
      <figure class="about-portrait">
        <img src="assets/sketcha-family-sketch-v2.webp" alt="Pencil sketch portrait of Robby, Tracie, and their baby in a home kitchen" width="1024" height="1536">
      </figure>
      <div class="about-story">
        <p class="kicker">A family sketchbook project</p>
        <h1 id="about-title">Draw a little. Notice a lot.</h1>
        <p>sketcha.day is made by Robby McCullough, a lifelong drawer, designer, and web guy. This site started as an experiment after he used an AI-generated drawing tutorial of a cowboy hat to make his partner, Tracie, a homemade birthday card.</p>
        <p>The lessons focus on small subjects you can study without needing a studio, a class, or a perfect block of time. Our sister site doodlea.day is for more playful and marker-focused doodles.</p>
        <p>Robby brings a love of drawing and web craft to the pages. Tracie, a mom and early childhood educator, helps keep the pacing patient and the tone encouraging for beginners, kids, and grown-ups drawing alongside them.</p>
        <p>We hope taking a little break each day to create artwork brings your family as much joy as it's brought ours. See you tomorrow!</p>
      </div>
    </section>
    <section class="about-credentials" aria-labelledby="about-credentials-title">
      <h2 id="about-credentials-title">Why these lessons are built this way</h2>
      <div class="about-credential-grid">
        <article><strong>Observation first</strong><span>Each lesson nudges you to compare shapes, angles, edges, and values before worrying about polish.</span></article>
        <article><strong>Designed to be readable</strong><span>The pages are structured to be clear, scannable, accessible, and useful without needing a video or app.</span></article>
        <article><strong>Learning-paced</strong><span>Tracie's background helps us value clear steps, patient sequencing, and encouragement over perfect results.</span></article>
        <article><strong>Quiet daily rhythm</strong><span>The lessons are meant to fit into ordinary days, usually with a pencil, paper, and a few focused minutes.</span></article>
      </div>
    </section>
  </main>
  <footer class="site-footer">
    <div class="footer-bar">
      <div class="footer-identity">
        <a class="brand footer-brand" href="/"><span class="brand-name">${brandWordmark}</span></a>
        <p class="footer-tagline">Soft pencil practice, one daily sketch at a time.</p>
      </div>
      <nav aria-label="Footer navigation"><a href="/">Today</a><a href="library.html">Library</a><a href="about.html" aria-current="page">About</a><a href="https://doodlea.day/">doodlea.day</a><a href="mailto:hello@sketcha.day">Say hello</a></nav>
    </div>
    <small class="footer-copyright">© 2026 sketcha.day</small>
  </footer>
  <script src="script.js"></script>
</body>
</html>`;
};

const homePage = (lesson) => {
  const homeOnlySections = `
    <section class="newsletter" id="newsletter" aria-labelledby="newsletter-title">
      <div class="newsletter-pencil" aria-hidden="true"></div>
      <p class="hand-note">A tiny creative nudge</p>
      <h2 id="newsletter-title">A fresh sketch in your inbox.</h2>
      <p>Coming soon: one prompt, one practical tutorial, and a gentle reason to draw again tomorrow. Want it first? <a href="mailto:hello@sketcha.day?subject=sketcha.day%20daily%20email%20interest">Email us to say you're interested</a>.</p>
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
    .replaceAll("../about.html", "about.html")
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
            <img src="assets/${webpName(lesson.finished)}" alt="${lesson.finishedAlt}" width="1254" height="1254" loading="${index === 0 ? "eager" : "lazy"}">
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
        name: "sketcha.day Drawing Tutorial Library",
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
  <title>Drawing Tutorial Library | Easy Sketch Lessons | sketcha.day</title>
  <meta name="description" content="Browse easy step-by-step drawing tutorials from sketcha.day, with daily pencil sketch lessons for animals, objects, scenes, shapes, proportion, and shading.">
  <link rel="canonical" href="https://sketcha.day/library.html">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Drawing Tutorial Library | sketcha.day">
  <meta property="og:description" content="Browse daily pencil sketch lessons and easy step-by-step drawing tutorials.">
  <meta property="og:url" content="https://sketcha.day/library.html">
  <meta property="og:image" content="https://sketcha.day/assets/fox-finished-v2.jpg">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="theme-color" content="#f3b63c">
${iconLinks}
  <link rel="alternate" type="application/rss+xml" title="sketcha.day daily sketch feed" href="${siteUrl}/feed.xml">
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
      <a class="brand-wordmark" href="/" aria-label="sketcha.day home"><span class="brand-name">${brandWordmark}</span></a>
    </div>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav"><span></span><span></span><span></span><span class="sr-only">Open menu</span></button>
    <nav class="site-nav" id="site-nav" aria-label="Main navigation">
      <a href="/">Today's sketch</a>
      <a href="library.html" aria-current="page">Sketch library</a>
      <a href="about.html">About</a>
      <a href="https://doodlea.day/">doodlea.day</a>
      <a class="nav-button" href="/#lesson">Start drawing</a>
    </nav>
  </header>
  <main>
    <section class="archive-hero" aria-labelledby="archive-title">
      <div class="archive-intro">
        <p class="eyebrow"><span>${archiveLessons.length} step-by-step lessons</span> New pencil sketches added daily</p>
        <h1 id="archive-title">Drawing tutorial library</h1>
        <p>Browse easy step-by-step drawing tutorials for quick pencil practice. Each sketcha.day lesson breaks animals, cozy objects, seasonal sketches, small scenes, and beginner-friendly drawing ideas into approachable frames for construction shapes, proportion, line confidence, light shading, and a finished drawing.</p>
      </div>
    </section>
    <section class="library archive-library" id="tutorial-library" aria-labelledby="tutorial-library-title">
      <header class="section-heading library-heading">
        <div>
          <p class="kicker">All tutorials</p>
          <h2 id="tutorial-library-title">Step-by-step sketch lessons</h2>
        </div>
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
      <nav aria-label="Footer navigation"><a href="/">Today</a><a href="library.html" aria-current="page">Library</a><a href="about.html">About</a><a href="https://doodlea.day/">doodlea.day</a><a href="mailto:hello@sketcha.day">Say hello</a></nav>
    </div>
    <small class="footer-copyright">© 2026 sketcha.day</small>
  </footer>
  <script src="script.js"></script>
</body>
</html>`;
};

const feed = () => `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>sketcha.day Daily Sketches</title>
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
  { loc: `${siteUrl}/about.html`, lastmod: latestLesson.isoDate, changefreq: "monthly", priority: "0.7" },
  { loc: `${siteUrl}/library.html`, lastmod: latestLesson.isoDate, changefreq: "daily", priority: "0.8" },
  ...archiveLessons.map((lesson) => ({
    loc: lessonUrl(lesson),
    lastmod: lesson.updated || lesson.isoDate,
    changefreq: "monthly",
    priority: "0.7",
    // Image-sitemap entries for Google Images: the finished art plus each
    // raster step frame, exactly as served on the page.
    images: [`${siteUrl}/assets/${webpName(lesson.finished)}`, ...stepImageUrls(lesson)]
  }))
];

const sitemapImages = (images = []) => images
  .map((image) => `    <image:image>
      <image:loc>${escapeXml(image)}</image:loc>
    </image:image>`)
  .join("\n");

const sitemap = () => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${sitemapUrls.map((url) => `  <url>
    <loc>${escapeXml(url.loc)}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>${url.images?.length ? `\n${sitemapImages(url.images)}` : ""}
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
await writeFile(new URL("../about.html", import.meta.url), aboutPage());
await writeFile(new URL("../library.html", import.meta.url), archivePage());
await writeFile(new URL("../feed.xml", import.meta.url), feed());
await writeFile(new URL("../sitemap.xml", import.meta.url), sitemap());
await writeFile(new URL("../robots.txt", import.meta.url), robots());

console.log(`Built ${lessons.length} tutorial pages, the homepage, the tutorial library, feed.xml, sitemap.xml, and robots.txt.`);
