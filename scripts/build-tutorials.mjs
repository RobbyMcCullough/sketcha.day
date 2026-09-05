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
  {slug:"seahorse-curled-around-eelgrass",day:"126",date:"Saturday, September 5",isoDate:"2026-09-05",subject:"a seahorse",headlineSubject:"a seahorse",shortSubject:"a seahorse",seoTitlePhrase:"a Seahorse",lessonTitle:"Let's draw a seahorse",description:"Learn how to draw a seahorse with a horse-like head, curled tail around eelgrass, three fins, seven body plates, graphite texture, and restrained colored pencil.",intro:"Build one left-facing seahorse from a head circle and long S-curve, then curl its tail around one eelgrass stem before adding the crown, three fins, seven body plates, and five narrow leaves. This attainable 25-minute sketch practices flowing animal anatomy, a fixed wrap-around overlap, repeated texture, and restrained sea color without polishing away the graphite grain.",time:25,difficulty:"Easy-medium",accent:"#b48a43",finished:"seahorse-curled-around-eelgrass-finished-v1.jpg",finishedAlt:"Handmade graphite and restrained colored-pencil sketch of one left-facing muted-ochre seahorse with one horse-like head and long snout, one three-point crown ridge, one visible eye, one arched neck and rounded belly, one tapering clockwise-curled tail wrapped exactly once around one teal-green eelgrass stem, one ribbed dorsal fin, exactly two small side fins, exactly seven curved torso plates, exactly five narrow eelgrass leaves, exactly two pale-blue bubbles, exactly two open-paper highlights, visible paper tooth, and one broken cool-gray ground shadow",materials:["HB pencil","2B pencil","Drawing paper","Kneaded eraser","Muted-ochre, teal-green, pale-blue, and cool-gray colored pencils"],materialNote:"Use pale HB for the head circle, S-curve spine, belly arc, tail coil, eelgrass route, three fin ticks, and shadow. Strengthen established forms with 2B, then layer ochre, teal green, pale blue, and cool gray lightly enough that the paper tooth and two highlights remain visible.",tipLabel:"Sketchbook tip",steps:[
    {name:"Map the seahorse and grass",text:"Place one head circle, a long S-curve spine, a short belly arc, one clockwise tail route crossing one eelgrass stem route, three tiny fin ticks, and a broken shadow route.",tip:"Keep these marks pale and separate. The S-curve sets the pose; it is not the finished outer edge."},
    {name:"Shape the head and body",text:"Wrap the guides into one horse-like head with a long snout, an arched neck, rounded belly, and tapered torso while leaving the tail as an open route.",tip:"Check that the snout faces left and the belly stays on the right side of the same center curve."},
    {name:"Curl the tail around eelgrass",text:"Taper the tail into one clockwise coil around the same eelgrass stem, stopping the plant line behind the tail at the crossing.",tip:"Draw the tail edge first, then restart the stem below the coil so no keeper line needs erasing."},
    {name:"Add the crown eye and fins",text:"Add one three-point crown ridge, one visible eye, one ribbed dorsal fin, and exactly two small side fins at their fixed attachment ticks.",tip:"Keep the dorsal fin broad and the two side fins smaller so the silhouette stays easy to read."},
    {name:"Place plates grass and bubbles",text:"Add exactly seven curved torso plates, exactly five narrow eelgrass leaves, exactly two small bubbles, and clarify the broken shadow.",tip:"Count each repeated group before shading; let the plates follow the bend of the body."},
    {name:"Layer sea colors and graphite",text:"Map graphite value, muted ochre on the seahorse, teal green on the eelgrass, pale blue in the bubbles, and cool gray inside the existing shadow.",tip:"Pull pencil strokes with each form and leave the lightest paper areas untouched."},
    {name:"Build plate and fin texture",text:"Clarify the established fin ribs, plate shadows, tail depth, eelgrass veins, two open-paper highlights, and visible graphite grain.",tip:"Use short curved strokes across the plates and long strokes along the leaves."},
    {name:"Finish the seahorse",text:"Strengthen selected keeper contours and deepen only the established graphite, restrained color, plates, fins, eelgrass, bubbles, highlights, and shadow.",tip:"Count seven plates, five leaves, three fins, and two bubbles, then stop before adding extra sea life or scenery.",image:true}
  ]},
  {slug:"rolling-pin-with-pastry-dough",day:"125",date:"Friday, September 4",isoDate:"2026-09-04",subject:"a rolling pin",headlineSubject:"a rolling pin",shortSubject:"a rolling pin",seoTitlePhrase:"a Rolling Pin",lessonTitle:"Let's draw a rolling pin",description:"Learn how to draw a rolling pin with a cylindrical wooden barrel, two attached handles, rolled pastry dough, graphite texture, and restrained colored pencil.",intro:"Build one diagonal rolling pin from a center axis and two ellipses, then attach exactly two handles before adding the wood grain, flour marks, and rolled dough beneath it. This attainable 20-minute sketch practices cylinders, anchored parts, clean overlap, and warm colored-pencil texture without polishing away the graphite grain.",time:20,difficulty:"Easy-medium",accent:"#b77a3e",finished:"rolling-pin-with-pastry-dough-finished-v1.jpg",finishedAlt:"Handmade graphite and restrained colored-pencil sketch of one face-free honey-brown wooden rolling pin angled from upper left to lower right across one warm-cream sheet of pastry dough, with one cylindrical barrel, exactly two tapered attached handles, two narrow collars, two barrel-end rings, exactly three curved wood-grain marks, exactly two open-paper wood highlights, exactly four small flour dashes, exactly two shallow dough folds, visible paper tooth, and one broken cool-gray ground shadow",materials:["HB pencil","2B pencil","Drawing paper","Kneaded eraser","Honey-brown, warm-cream, and cool-gray colored pencils"],materialNote:"Use pale HB for the diagonal axis, two barrel ellipses, two handle routes, dough corners, four flour placements, and shadow. Strengthen established forms with 2B, then layer honey brown, warm cream, and cool gray lightly enough that the paper tooth and two wood highlights remain visible.",tipLabel:"Sketchbook tip",steps:[
    {name:"Map the rolling pin and dough",text:"Use pale HB to place one long diagonal axis, two barrel-end ellipses, exactly two open handle routes, four corner ticks for the pastry sheet, exactly four flour ticks, and one broken shadow route.",tip:"Keep the first map sparse. The ellipses should sit perpendicular to one axis, and the four dough corners should stay disconnected until the next step."},
    {name:"Shape the barrel and pastry",text:"Wrap the two ellipses with one cylindrical barrel, then connect one irregular pastry-sheet contour only around the reserved barrel footprint.",tip:"Let the dough appear above and below the barrel, but stop its keeper edge at the overlap. Leave both handles as single pale routes for now."},
    {name:"Attach both handles",text:"Wrap exactly two tapered handles and exactly two narrow collars onto the reserved barrel ends along the original diagonal axis.",tip:"Center each handle on its route and attach it firmly through a collar. Compare their angles before adding any surface detail."},
    {name:"Add rings grain and dough edge",text:"Clarify two barrel-end rings, one short dough-thickness edge, and exactly three curved wood-grain marks on the established forms.",tip:"Curve each grain line with the barrel instead of drawing flat stripes. Keep the marks short enough that the cylinder remains readable."},
    {name:"Reserve highlights flour and shadow",text:"Add exactly two open-paper wood highlights, turn the four placement ticks into exactly four small flour dashes, and establish the broken ground shadow.",tip:"Keep one highlight on the barrel and one on a handle. Scatter the four flour dashes around the dough without letting them merge into the shadow."},
    {name:"Layer wood dough and shadow",text:"Map directional graphite, honey-brown wood, warm-cream dough, pale flour, and cool gray inside the established shadow.",tip:"Pull pencil strokes along the barrel axis and around the dough edges. Work around both highlights and keep the flour marks light."},
    {name:"Build cylindrical depth",text:"Clarify established barrel shadows, collar accents, exactly two shallow dough folds, flour texture, graphite grain, and open-paper highlights without adding forms.",tip:"Use the darkest value beneath the barrel and at both collars. Keep the two dough folds shallow so the pastry still reads as a flat rolled sheet."},
    {name:"Finish the rolling pin",text:"Strengthen selected keeper contours and deepen only the same wood, dough, flour, folds, highlights, and broken shadow.",tip:"Count one barrel, two handles, two collars, three grain marks, two highlights, four flour dashes, and two folds, then stop while the sketch still feels handmade.",image:true}
  ]},
  {slug:"clawfoot-bathtub",day:"124",date:"Thursday, September 3",isoDate:"2026-09-03",subject:"a clawfoot bathtub",headlineSubject:"a clawfoot<br>bathtub",shortSubject:"a clawfoot bathtub",seoTitlePhrase:"a Clawfoot Bathtub",lessonTitle:"Let's draw a clawfoot bathtub",description:"Learn how to draw a clawfoot bathtub with a three-quarter oval rim, three visible feet, vintage faucet hardware, graphite texture, and restrained colored pencil.",intro:"Build one vintage bathtub from a tilted ellipse and shallow perspective box, then attach exactly three visible claw feet before fitting an arched faucet, two cross handles, and a small drain. This attainable 25-minute sketch practices nested ellipses, anchored hardware, and enamel shading with enough paper tooth to keep the drawing handmade.",time:25,difficulty:"Easy-medium",accent:"#6f9998",finished:"clawfoot-bathtub-finished-v1.jpg",finishedAlt:"Handmade graphite and restrained colored-pencil sketch of one face-free three-quarter-view pale-seafoam clawfoot bathtub with one long doubled oval rim, one cool-gray inner basin, exactly three visible curved warm-brass claw feet, one arched warm-brass faucet centered between exactly two cross handles on the far-right rim deck, one small drain ellipse, exactly two open-paper enamel highlights, visible pencil tooth, and one broken cool-gray ground shadow",materials:["HB pencil","2B pencil","Drawing paper","Kneaded eraser","Pale-seafoam, warm-brass, and cool-gray colored pencils"],materialNote:"Use pale HB for the tilted rim ellipse, shallow tub box, three foot ticks, fixture route, two handle ticks, and shadow. Strengthen established contours with 2B, then layer seafoam, warm brass, and cool gray lightly enough that the paper tooth and two enamel highlights stay visible.",tipLabel:"Sketchbook tip",steps:[
    {name:"Map the tub in perspective",text:"Use pale HB to place one tilted rim ellipse, a shallow three-quarter tub box with a center axis, exactly three foot ticks, one curved faucet route with two handle ticks, and one broken shadow route.",tip:"Keep this first map under two minutes. Make the left end slightly narrower and the right end broader, then preserve that same ellipse angle through every step."},
    {name:"Shape the rim basin and body",text:"Wrap the guides with one doubled oval rim, one nested inner basin, and one tapered outer tub wall, leaving gaps at all three foot ticks and around the far-right fixture anchors.",tip:"Draw the outer and inner rim as a matched pair. Stop the lower wall at each foot tick so no finished keeper line must be erased later."},
    {name:"Add the three claw feet",text:"Wrap exactly three curved claw feet into the reserved lower-wall gaps while keeping the tub rim, basin, and body unchanged.",tip:"Place two feet along the nearer edge and one toward the far-left end. Check that all three connect to the same body and touch the ground before adding hardware."},
    {name:"Fit the faucet and handles",text:"Shape one arched faucet and exactly two cross handles on the reserved far-right rim deck, then add one small drain ellipse inside the basin.",tip:"Keep the faucet centered between the two handles and seated on the rim deck. The drain belongs inside the basin, not on the outer enamel wall."},
    {name:"Reserve shine and ground",text:"Add exactly two open-paper enamel highlight shapes, small joints on the same three feet, and the established broken ground shadow.",tip:"Keep both highlights simple and angular so they survive the color pass. Let the broken shadow touch all three foot contacts without becoming a solid gray slab."},
    {name:"Layer enamel and metal color",text:"Map directional graphite, pale seafoam over the established enamel, restrained warm brass on the faucet, two handles, and three feet, and cool gray inside the basin and shadow.",tip:"Follow the long tub curve with light colored-pencil strokes. Leave the rim pale and work around both highlights so the enamel still looks reflective."},
    {name:"Build enamel and metal depth",text:"Deepen only the established rim shadows, foot contacts, fixture accents, graphite grain, and open-paper highlights.",tip:"Keep the basin darker than the outer wall and use the deepest accents where metal meets enamel. Avoid polishing away the visible pencil texture."},
    {name:"Finish the clawfoot bathtub",text:"Strengthen selected keeper contours and gently deepen the same graphite, restrained color, fixtures, feet, highlights, basin, and broken shadow.",tip:"Count one tub, three visible feet, one faucet, two handles, one drain, and two highlights, then stop while the drawing still feels attainable and hand sketched.",image:true}
  ]},
  {slug:"hedgehog-with-a-fallen-leaf",day:"123",date:"Wednesday, September 2",isoDate:"2026-09-02",subject:"a hedgehog with a fallen leaf",headlineSubject:"a hedgehog with<br>a fallen leaf",shortSubject:"an autumn hedgehog",seoTitlePhrase:"a Hedgehog with a Fallen Leaf",lessonTitle:"Let's draw a hedgehog with a fallen leaf",description:"Learn how to draw a hedgehog with a low body, three visible feet, grouped spines, a five-lobed fallen leaf, graphite texture, and restrained colored pencil.",intro:"Build one low hedgehog from a body bean and pointed face wedge, then attach exactly three visible feet before you shape a five-lobed fallen leaf and layer grouped spines. This attainable 20-minute sketch practices a clear animal silhouette, repeated texture, and restrained autumn color without polishing away the graphite grain.",time:20,difficulty:"Easy-medium",accent:"#a5663f",finished:"hedgehog-with-a-fallen-leaf-finished-v1.jpg",finishedAlt:"Handmade graphite and restrained colored-pencil sketch of one right-facing low hedgehog with one rounded warm-brown spiny back, one pale-tan pointed face, exactly three short visible feet with the far rear foot hidden, one rounded ear, one bright eye, one dark nose, grouped backward-pointing spines, one muted-orange fallen maple leaf with exactly five broad lobes and one short stem, visible paper tooth, and one broken cool-gray ground shadow",materials:["HB pencil","2B pencil","Drawing paper","Kneaded eraser","Warm-brown, pale-tan, muted-orange, and cool-gray colored pencils"],materialNote:"Use pale HB for the body bean, face wedge, coat boundary, three foot ticks, leaf envelope, stem, and shadow. Strengthen established contours with 2B, then layer warm brown, pale tan, muted orange, and cool gray lightly enough that the paper tooth stays visible.",tipLabel:"Sketchbook tip",steps:[
    {name:"Map the hedgehog and leaf",text:"Draw one low body bean, a pointed face wedge, a curved coat boundary, exactly three tiny foot ticks, one simple leaf envelope with a stem route, and one broken shadow route in pale HB.",tip:"Keep this first frame under two minutes. The leaf is only a broad envelope here, and the three foot ticks reserve the visible feet without closing them."},
    {name:"Shape the low silhouette",text:"Wrap the guides with one rounded back, a small pointed muzzle, and a low belly that stops at all three reserved foot gaps.",tip:"Pull the back in one relaxed arc, then compare the nose height with the belly. Leave each foot gap open so no keeper line must be erased later."},
    {name:"Add three feet and the face",text:"Wrap exactly three short visible feet into the reserved gaps, then add one rounded ear, one bright eye, and one dark nose.",tip:"Keep one rear foot and two forward feet on the same baseline. The far rear foot is hidden by the side-view body, so do not squeeze in a fourth visible foot."},
    {name:"Shape the leaf and coat",text:"Turn the leaf envelope into exactly five broad lobes with one short stem, then add the curved boundary between the soft face and spiny coat.",tip:"Aim the leaf stem toward the hedgehog's nose and keep the nearest lobe clear of the front foot. Count five broad lobes before adding texture."},
    {name:"Map spines veins and ground",text:"Add grouped backward-pointing spine strokes, exactly five main leaf veins, two small face hatches, and the established broken ground shadow.",tip:"Work in loose spine clusters that follow the back arc instead of filling every gap. Stop leaf veins at the edge and keep the shadow broken beneath both forms."},
    {name:"Layer graphite and autumn color",text:"Add directional graphite, warm-brown pencil to the spines, pale tan to the face and feet, muted orange to the leaf, and cool gray to the existing shadow.",tip:"Build two dry pencil layers and leave open paper between strokes. Keep the eye and nose darkest so the small face reads at card size."},
    {name:"Clarify spine and leaf depth",text:"Deepen only the established spine shadows, leaf edges, foot contacts, graphite grain, and open-paper highlights.",tip:"Darken a few overlapping spine bases instead of every tip. Check that all three feet still touch the baseline and the leaf retains five readable lobes."},
    {name:"Finish the autumn hedgehog",text:"Strengthen selected keeper contours and gently deepen the same graphite, restrained color, spines, leaf, highlights, and broken shadow.",tip:"Count one hedgehog, three visible feet, one leaf, and five leaf lobes, then stop while construction traces and paper tooth still make the drawing feel handmade.",image:true}
  ]},
  {slug:"erupting-volcano-landscape",day:"122",date:"Tuesday, September 1",isoDate:"2026-09-01",subject:"a volcano",headlineSubject:"a volcano",shortSubject:"a volcano",seoTitlePhrase:"a Volcano",lessonTitle:"Let's draw a volcano",description:"Learn how to draw a volcano with a broad rocky cone, open crater, stacked eruption plume, two lava streams, five flying rocks, graphite texture, and restrained colored pencil.",intro:"Build one volcanic landscape from a broad cone, centered crater, and rising plume route, then add two narrow lava streams and exactly five flying rocks before layering graphite and restrained fiery color. This 25-minute sketch practices large silhouette planning, stacked smoke shapes, and directional texture while keeping the eruption attainable on a single sketchbook page.",time:25,difficulty:"Easy-medium",accent:"#c65e35",finished:"erupting-volcano-landscape-finished-v1.jpg",finishedAlt:"Handmade graphite and restrained colored-pencil sketch of one broad erupting volcano with an open centered crater, one three-tier warm-gray ash plume, exactly two orange-yellow lava streams, exactly five small flying rocks, two low background ridges, angular rock hatching, visible paper tooth, and one broken cool-gray foreground shadow",materials:["HB pencil","2B pencil","Drawing paper","Kneaded eraser","Warm-gray, rust-red, orange-yellow, and cool-gray colored pencils"],materialNote:"Use pale HB for the cone envelope, crater ellipse, plume guides, two lava routes, and ground arcs. Strengthen established contours with 2B, then layer warm gray, rust red, orange yellow, and cool gray lightly enough that the paper tooth stays visible.",tipLabel:"Sketchbook tip",steps:[
    {name:"Map the cone and eruption",text:"Use pale HB to place one wide mountain envelope, a shallow centered crater ellipse, one vertical plume spine with three widening oval guides, exactly two lava routes, and two low ground arcs.",tip:"Ghost both mountain slopes before touching down. Keep the crater centered over the cone and trace each lava route from inside the rim to its fixed lower-cone anchor."},
    {name:"Shape the cone and reserve the vent",text:"Wrap the envelope with two broken rocky mountain shoulders, then add only two short crater side-rim arcs and leave the central plume footprint open.",tip:"Rotate the page for each long slope. Stop both crater arcs before the plume spine; the smoke will fill that reserved gap in the next step without hiding finished crater work."},
    {name:"Build the plume and landscape",text:"Turn the plume guides into three stacked cloud tiers attached to the crater, then clarify the two low ground ridges behind the cone.",tip:"Overlap rounded smoke lobes around the same center spine. Stop each ground-ridge line at the cone silhouette instead of drawing through the volcano."},
    {name:"Add lava and flying rocks",text:"Give the two planned lava routes narrow banks and place exactly five small ejected rocks in two arcs beside the plume.",tip:"Keep both lava streams narrower near the crater and wider near the base. Count two rocks on the left and three on the right before moving on."},
    {name:"Map rock and smoke texture",text:"Add sparse angular rock planes, inner plume curls, crater-lip hatching, and the established broken foreground shadow without filling them solid.",tip:"Aim rock hatching down the cone rather than across it. Leave open paper between groups so the mountain does not become one gray triangle."},
    {name:"Layer value and lava color",text:"Map directional graphite, warm-gray ash, muted rust-red lava banks, orange-yellow lava cores, and cool-gray shadow over only the established forms.",tip:"Build color with two light layers that follow each lava stream. Keep the hottest center strip brightest and let graphite carry most of the mountain texture."},
    {name:"Clarify ash and rock depth",text:"Deepen the established ash shadows, lava edges, rock hatching, graphite grain, and open-paper highlights without adding forms.",tip:"Squint at the page before darkening. The bright twin lava routes and open crater should read first, with the plume remaining lighter than the cone."},
    {name:"Finish the volcanic landscape",text:"Strengthen selected keeper contours, deepen the same mapped graphite and restrained colors, and clarify only the existing plume, lava, rocks, highlights, and shadow.",tip:"Count one crater, three plume tiers, two lava streams, five flying rocks, and two ground ridges, then stop while the paper tooth still breaks through the shading.",image:true}
  ]},
  {slug:"pomegranate-cut-open",day:"121",date:"Monday, August 31",isoDate:"2026-08-31",subject:"a pomegranate cut open",headlineSubject:"a pomegranate<br>cut open",shortSubject:"a cut-open pomegranate",seoTitlePhrase:"a Pomegranate Cut Open",lessonTitle:"Let's draw a pomegranate cut open",description:"Learn how to draw a pomegranate cut open with one whole fruit, one overlapping half, two crowns, six membrane wedges, twelve seeds, graphite texture, and restrained colored pencil.",intro:"Arrange one whole pomegranate behind a round cut half, then divide the open fruit into six membrane wedges and place exactly twelve jewel-like seeds before adding peel texture and restrained crimson color. This 25-minute sketch practices clean overlap, radial spacing, and how to keep a detailed cut surface readable without polishing away the pencil grain.",time:25,difficulty:"Intermediate",accent:"#a7464d",finished:"pomegranate-cut-open-finished-v1.jpg",finishedAlt:"Handmade graphite and restrained colored-pencil sketch of one upright muted-crimson whole pomegranate partly behind one round cut pomegranate half with two five-point crowns, one thick warm-cream rind ring, exactly six pale membrane wedges, exactly twelve ruby seed ovals arranged two per wedge, two open-paper peel highlights, visible pencil texture, and one broken cool-gray ground shadow",materials:["HB pencil","2B pencil","Drawing paper","Kneaded eraser","Muted-crimson, ruby-red, warm-cream, and cool-gray colored pencils"],materialNote:"Use pale HB for the whole-fruit envelope, cut-half circles, crown axes, six membrane routes, twelve seed placements, and shadow. Strengthen established contours with 2B, then layer muted crimson, ruby red, warm cream, and cool gray lightly enough that the paper tooth remains visible.",tipLabel:"Sketchbook tip",steps:[
    {name:"Arrange the two fruit forms",text:"Use pale HB to place one upright whole-fruit envelope, one overlapping cut-half circle and rind ring, two crown axes, six open membrane routes, exactly twelve seed ticks, and one broken shadow footprint.",tip:"Fix the overlap now: the cut half should cover only the lower-right edge of the whole fruit. Aim every membrane route from the same center and place two seed ticks in each wedge."},
    {name:"Shape the whole and half",text:"Wrap the guides with one whole pomegranate and one round foreground half, then clarify the thick inner rind ring without moving the overlap.",tip:"Rotate the page for each long fruit curve. Stop the rear fruit contour at the cut half instead of drawing a keeper line through the foreground form."},
    {name:"Build crowns and membranes",text:"Turn both crown axes into five-point crowns and divide the cut face into exactly six pale membrane wedges around the established center.",tip:"Treat the membranes like uneven pie divisions rather than perfect geometry. Count six wedges and check that every line meets the same center before darkening."},
    {name:"Place twelve seeds",text:"Turn the twelve placement ticks into exactly twelve plump seed ovals, with two seeds inside each of the six membrane wedges.",tip:"Vary the seed tilt while keeping every pair inside its own wedge. Count by pairs around the fruit so no section quietly gains or loses a seed."},
    {name:"Map texture and highlights",text:"Add sparse curved peel hatching, two open-paper peel highlights, tiny seed glints, crown creases, and the established broken shadow.",tip:"Curve the hatch marks around the whole fruit and keep the cut face quieter. Leave the highlight shapes open instead of trying to erase them after shading."},
    {name:"Layer the pomegranate color",text:"Map graphite value, muted crimson peel, ruby seeds, warm-cream membranes, and cool-gray shadow over only the established forms.",tip:"Build two light colored-pencil layers that follow each fruit curve. Keep paper showing between strokes so the pomegranate stays sketchy rather than glossy."},
    {name:"Clarify seed depth and rind",text:"Deepen the established seed pockets, rind-edge hatching, crown creases, graphite grain, and paper highlights without adding forms.",tip:"Use the darkest graphite sparingly where seeds meet pale membrane. The cut surface should read clearly before you strengthen the outside peel."},
    {name:"Finish the jewel-toned fruit",text:"Strengthen selected keeper contours, deepen the same mapped graphite and colors, and clarify only the existing seeds, membranes, crowns, highlights, texture, and shadow.",tip:"Count two fruits, two five-point crowns, six membrane wedges, and twelve seeds, then stop while the paper tooth still breaks through the color.",image:true}
  ]},
  {slug:"monarch-butterfly-on-goldenrod",day:"120",date:"Sunday, August 30",isoDate:"2026-08-30",subject:"a monarch butterfly on goldenrod",headlineSubject:"a monarch butterfly<br>on goldenrod",shortSubject:"a monarch butterfly",seoTitlePhrase:"a Monarch Butterfly on Goldenrod",lessonTitle:"Let's draw a monarch butterfly on goldenrod",description:"Learn how to draw a monarch butterfly on goldenrod with four open wings, classic orange-and-black markings, three flower clusters, graphite texture, and restrained colored pencil.",intro:"Begin with one body axis, four open wing gestures, and a diagonal flower route, then connect the monarch before you map its veins and familiar border pattern. Grow exactly three goldenrod clusters beneath the same butterfly and layer late-summer orange, yellow, and green without hiding the graphite grain. This 25-minute sketch practices bilateral symmetry, repeating wing cells, and keeping a delicate insect readable over clustered flowers.",time:25,difficulty:"Intermediate",accent:"#d8842f",finished:"monarch-butterfly-on-goldenrod-finished-v1.jpg",finishedAlt:"Handmade graphite and restrained colored-pencil sketch of one top-view monarch butterfly with exactly two broad orange forewings, two rounded orange hindwings, black-brown borders, pale edge spots, one centered dark body, two antennae, and one muted-green goldenrod spray with exactly three golden-yellow flower clusters and two narrow leaves",materials:["HB pencil","2B pencil","Drawing paper","Kneaded eraser","Orange, golden-yellow, muted-green, and dark-brown colored pencils"],materialNote:"Use pale HB for the body axis, four wing gestures, stem route, and three flower placements. Strengthen established anatomy with 2B, then layer orange, golden yellow, muted green, and dark brown lightly enough that the paper tooth and graphite construction remain visible.",tipLabel:"Sketchbook tip",steps:[
    {name:"Set the flight symmetry",text:"Use pale HB to place one vertical body axis, one small thorax oval, four open wing gestures, one diagonal stem route, and exactly three flower placement circles.",tip:"Ghost each wing arc from the thorax before touching down. Compare the empty spaces on the left and right instead of trying to make the wings mechanically identical."},
    {name:"Shape all four wings",text:"Connect the four gestures into exactly two broad forewings and two rounded hindwings without moving their attachment points.",tip:"Rotate the page as you draw the outer curves. Check that both forewings reach higher than the hindwings and that all four still meet at the thorax."},
    {name:"Build the body and veins",text:"Add one small head, the textured thorax, a tapered abdomen, exactly two antennae, and the main vein routes inside all four wings.",tip:"Start every main vein at the body and let it fan outward. Keep the abdomen centered between the lower wings so the symmetry still reads at thumbnail size."},
    {name:"Map the monarch pattern",text:"Divide the wings into broad monarch cells, dark border bands, and small pale edge-spot reserves.",tip:"Treat the pattern as a map, not decoration. Leave the edge spots as open paper now so they stay crisp after the darker pencil layers arrive."},
    {name:"Grow the goldenrod spray",text:"Turn the diagonal route and three placement circles into one branching stem with exactly three clustered flower heads and two narrow leaves.",tip:"Build each flower cluster from a few grouped dots and tiny petal shapes. Stop the center cluster cleanly beneath the butterfly instead of drawing through its body."},
    {name:"Layer migration color",text:"Add directional graphite and map orange and black-brown across the monarch, golden yellow across all three flower clusters, and muted green across the stem and two leaves.",tip:"Pull colored-pencil strokes along each wing cell and leaf. Use lighter pressure near the paper highlights so the handmade texture stays visible."},
    {name:"Clarify flowers and texture",text:"Clarify the established bloom dots, two leaf veins, wing texture, and the faint broken graphite suggestion beneath the spray without adding new forms.",tip:"Squint at the drawing before darkening. The butterfly should remain the first shape you notice, with the goldenrod supporting rather than competing with it."},
    {name:"Finish the migrating monarch",text:"Strengthen selected keeper contours, deepen the same mapped colors, and clarify only the existing edge spots, bloom dots, and highlights.",tip:"Count four wings, two antennae, three flower clusters, and two leaves, then stop while the paper tooth still breaks through the color.",image:true}
  ]},
  {slug:"ceramic-teapot-with-lid",day:"119",date:"Saturday, August 29",isoDate:"2026-08-29",subject:"a ceramic teapot with a lid",headlineSubject:"a ceramic teapot<br>with a lid",shortSubject:"a ceramic teapot",seoTitlePhrase:"a Ceramic Teapot with a Lid",lessonTitle:"Let's draw a ceramic teapot with a lid",description:"Learn how to draw a ceramic teapot with a rounded body, tapered spout, loop handle, fitted lid, graphite texture, and restrained blue-green color.",intro:"Start with one broad ellipse and open attachment routes, then shape the ceramic body before you wrap a tapered spout and loop handle around the same guides. Add the fitted lid, knob, and two highlight reserves before building graphite value and muted blue-green glaze. This 20-minute sketch practices attached curves, overlapping forms, and how to make a simple ceramic object feel solid without smoothing away the pencil texture.",time:20,difficulty:"Easy-medium",accent:"#477982",finished:"ceramic-teapot-with-lid-finished-v1.jpg",finishedAlt:"Handmade graphite and muted blue-green colored-pencil sketch of one rounded three-quarter-view ceramic teapot with one tapered spout pointing up-left, one loop handle attached behind the right side, one shallow oval foot, one fitted oval lid, one round knob, exactly two open-paper highlights, visible pencil texture, and one short broken graphite ground shadow",materials:["HB pencil","2B pencil","Drawing paper","Kneaded eraser","Muted blue-green and warm-gray colored pencils"],materialNote:"Use pale HB for the body ellipse, axes, attachment routes, and base ticks. Strengthen established contours with 2B, then layer blue-green and warm gray lightly enough that the graphite grain and two paper highlights remain visible.",tipLabel:"Sketchbook tip",steps:[
    {name:"Map the pot attachments",text:"Use pale HB to place one broad body ellipse, a vertical center axis, a short lid axis, one rising spout route, one C-shaped handle route, and two small base ticks.",tip:"Keep the spout and handle as open routes. Check that both attachments meet the same upper half of the body before you build any finished contour."},
    {name:"Shape the ceramic body",text:"Connect the rounded pot body, oval top opening, and shallow foot over the established ellipse and base ticks.",tip:"Ghost the top opening before drawing it. Keep its far edge slightly flatter than the near edge so the rim tilts with the pot instead of facing straight forward."},
    {name:"Attach spout and handle",text:"Wrap the left route with one tapered spout and the right route with one loop handle, keeping both ends anchored to the established body.",tip:"Taper the spout as it rises and stop the handle's inner edges cleanly at the body. Trace both attachment points with your finger before darkening them."},
    {name:"Fit the lid and highlights",text:"Nest one oval lid insert inside the top rim, add one small round knob, reserve exactly two paper highlights, and place a few restrained ceramic contour marks.",tip:"Echo the rim ellipse in the lid. Keep the knob centered over the body axis and leave both highlight shapes open from the start."},
    {name:"Build ceramic value",text:"Add directional graphite, muted blue-green glaze, warm-gray shadow planes, and the short broken ground shadow only over the established teapot forms.",tip:"Pull pencil strokes around the body curve and along the spout. Leave the handle interior and two highlights light so the silhouette stays readable."},
    {name:"Finish the quiet glaze",text:"Strengthen selected keeper contours, deepen the same graphite and blue-green glaze, and clarify only the two established highlights and short shadow.",tip:"Count one spout, one handle, one lid, one knob, and two highlights, then stop while the paper tooth still shows.",image:true}
  ]},
  {slug:"harvest-mouse-holding-wheat",day:"118",date:"Wednesday, August 26",isoDate:"2026-08-26",subject:"a harvest mouse holding wheat",headlineSubject:"a harvest mouse<br>holding wheat",shortSubject:"a harvest mouse",seoTitlePhrase:"a Harvest Mouse Holding Wheat",lessonTitle:"Let's draw a harvest mouse holding wheat",description:"Learn how to draw a harvest mouse holding wheat with a soft pencil silhouette, two tiny paws, one curved tail, a simple wheat stalk, graphite texture, and restrained color.",intro:"Start with a round head, pear-shaped body, two foot ovals, a tail gesture, and one diagonal wheat route. Then connect the tiny mouse, add exactly two ears and two holding paws, and build the wheat head before you add gentle graphite texture and a small wash of color. This 20-minute sketch practices small-scale proportions, clean overlap, and how to make a quiet animal feel lively without overworking the fur.",time:20,difficulty:"Easy-medium",accent:"#ae8654",finished:"harvest-mouse-holding-wheat-finished-v1.jpg",finishedAlt:"Handmade graphite and restrained colored-pencil sketch of one right-facing warm-brown harvest mouse with exactly two rounded ears, one bright eye, two small paws, and one long curling tail, holding one curved golden wheat stalk with a narrow grain head above a short cool-gray ground shadow",materials:["HB pencil","2B pencil","Drawing paper","Kneaded eraser","Warm brown, ochre, and cool-gray colored pencils"],materialNote:"Map the head circle, body envelope, feet, paws, tail route, wheat route, and shadow in pale HB. Build the established contours with 2B, then use warm brown, ochre, and cool gray lightly enough that the graphite grain stays visible.",tipLabel:"Sketchbook tip",steps:[
    {name:"Map the mouse and wheat route",text:"Use pale HB to place a head circle, pear-shaped body envelope, two foot ovals, two paw ovals, one curved tail gesture, one diagonal wheat route, and a short shadow footprint.",tip:"Keep the first frame open and simple. Reserve the two paw ovals around the stalk route now, so the stem will not need to be erased out of the hands later."},
    {name:"Connect the soft silhouette",text:"Connect only the right-facing head and body into one soft mouse silhouette, then draw the long thin tail while preserving the pale paw, wheat, face, and shadow guides.",tip:"Use one fuller curve over the back and a smaller inward curve beneath the chin. Let the tail start thick at the body and taper smoothly as it curls away."},
    {name:"Add ears paws and face",text:"Draw exactly two rounded ears, two small paws around the established stalk route, one eye, one tiny nose, and a few short whiskers.",tip:"Keep the two ears close but not perfectly matched. Place the eye a little higher than the nose so the small head still has room to point forward."},
    {name:"Build the wheat head",text:"Turn the upper stalk route into one narrow wheat head with paired grains, then add the existing short broken shadow beneath the feet.",tip:"Start each grain at the center stem and angle it outward. Keep the wheat narrow enough that the mouse remains the main shape."},
    {name:"Set gentle pencil value",text:"Add soft graphite fur hatching, warm brown mouse tint, ochre wheat tint, and cool-gray shadow only to the established mouse, stalk, wheat head, and ground.",tip:"Follow the mouse body curve with short pencil strokes. Leave the belly and ear interiors lighter so the tiny animal does not turn into one dark mass."},
    {name:"Finish the little harvester",text:"Clarify only the established keeper contours, fur texture, restrained color, wheat grains, and short shadow.",tip:"Count one mouse, two ears, two paws, one tail, one stalk, and one wheat head before stopping. A few clean dark marks will read better than extra background details.",image:true}
  ]},
  {slug:"garden-spider-on-a-web",day:"117",date:"Wednesday, August 19",isoDate:"2026-08-19",subject:"a garden spider on a web",headlineSubject:"a garden spider<br>on a web",shortSubject:"a garden spider",seoTitlePhrase:"a Garden Spider on a Web",lessonTitle:"Let's draw a garden spider on a web",description:"Learn how to draw a garden spider on a web with eight simple legs, a loose radial web, one leaf anchor, graphite texture, and restrained color.",intro:"Start by mapping an oval web and the spider reserve, then spin a loose spiral before you build the body, exactly eight legs, and a simple abdomen marking. This attainable 20-minute sketch practices repeated bent lines, clean overlap, and how to use delicate graphite without losing the tiny subject.",time:20,difficulty:"Easy",accent:"#9b674b",finished:"garden-spider-on-a-web-finished-v1.jpg",finishedAlt:"Handmade graphite and restrained colored-pencil sketch of one centered rust garden spider with a small head, oval abdomen, exactly eight bent legs, one pale abdomen cross, on one oval radial web with eight spoke routes and a loose spiral, plus one muted gray-green leaf and soft graphite shadow",materials:["HB pencil","2B pencil","Drawing paper","Kneaded eraser","Muted rust and gray-green colored pencils"],materialNote:"Use pale HB to place the web envelope, eight spoke routes, spider reserve, leaf footprint, and shadow. Add 2B only after the limbs are spaced, then lightly glaze rust and gray-green over the same established forms.",tipLabel:"Sketchbook tip",steps:[
    {name:"Map the web and body",text:"Use pale HB to place one oval web envelope, exactly eight spoke routes, a central spider-body reserve, one leaf reserve, and a soft shadow footprint.",tip:"Count the eight spokes before you connect them. Leave the body oval open so web lines will not run through the spider later."},
    {name:"Spin the web",text:"Connect the established spokes with one loose outer spiral, then draw the one small leaf at the lower web edge.",tip:"Keep the spiral uneven and light like real thread. Stop it cleanly at the reserved body and leaf footprints."},
    {name:"Build the spider",text:"Draw the same small head and oval abdomen on the central reserve.",tip:"Keep the head smaller than the abdomen and center both shapes over the web intersection."},
    {name:"Bend eight legs",text:"Add exactly eight bent legs and the established pale cross marking on the abdomen.",tip:"Work around the body in pairs. Each leg only needs two or three relaxed graphite bends to read clearly."},
    {name:"Set pencil value",text:"Add graphite texture, muted rust body color, gray-green leaf tint, and the soft shadow over only the forms already in place.",tip:"Use light strokes that follow the abdomen curve. Let the web stay paler than the spider so the tiny body remains readable."},
    {name:"Finish the tiny weaver",text:"Clarify only the established keeper contours, web threads, spider texture, restrained color, and shadow.",tip:"Count one spider, eight legs, eight spokes, and one leaf before stopping. Do not add a second bug or background scene the earlier steps did not build.",image:true}
  ]},
  {slug:"sailboat-in-a-bottle",day:"113",date:"Saturday, August 15",isoDate:"2026-08-15",subject:"a sailboat in a bottle",headlineSubject:"a sailboat<br>in a bottle",shortSubject:"a sailboat in a bottle",seoTitlePhrase:"a Sailboat in a Bottle",lessonTitle:"Let's draw a sailboat in a bottle",description:"Learn how to draw a sailboat in a bottle with a rounded glass silhouette, tiny hull, two masts, two sails, reflections, and restrained colored-pencil tint.",intro:"Start with one long bottle box and a tiny boat wedge, then build the glass, cork, hull, two masts, and two sails before adding a pale waterline and restrained color. This 25-minute sketch is a practical lesson in nesting small shapes inside a transparent container while preserving clean overlaps and open-paper highlights.",time:25,difficulty:"Medium",accent:"#557e9e",finished:"sailboat-in-a-bottle-finished-v1.jpg",finishedAlt:"Handmade graphite and restrained colored-pencil sketch of one horizontal clear glass bottle with a short neck and warm cork, containing one small dark sailboat hull, exactly two thin masts, exactly two cream triangular sails, a pale blue waterline, two open-paper reflections, and a soft gray shadow",materials:["HB pencil","2B pencil","Drawing paper","Kneaded eraser","Pale blue, warm gray, and ochre colored pencils"],materialNote:"Use pale HB to map the bottle box, neck axis, boat wedge, two mast routes, waterline, reflections, and shadow. Strengthen the established forms with 2B, then glaze blue and ochre lightly so paper highlights still describe the glass.",tipLabel:"Sketchbook tip",steps:[
    {name:"Map the bottle and boat",text:"Use pale HB to place one long bottle box, a short neck axis, a small hull wedge, exactly two mast routes, a waterline, two reflection shapes, and a soft shadow footprint.",tip:"Keep the boat much smaller than the bottle. Reserve its hull and mast routes now so later glass marks never have to be erased."},
    {name:"Shape the glass bottle",text:"Connect the guide into one rounded bottle with a short neck, rim ellipse, thick base, and a small cork while preserving the tiny boat reserve.",tip:"Ghost the long top curve once, then draw it in a relaxed pass. Echo the rim ellipse in the base so the bottle feels like one object."},
    {name:"Set the little boat",text:"Draw the small dark hull and exactly two thin masts inside the established glass outline.",tip:"Check the space above and below the hull before darkening it. The masts should rise from the hull, not touch the bottle edge."},
    {name:"Raise the two sails",text:"Add exactly two simple triangular sails and the pale waterline, stopping the water marks cleanly at the hull.",tip:"Use the mast routes as one edge of each sail. Leave a thin open strip around the boat so it reads inside the glass rather than on its surface."},
    {name:"Tint the glass",text:"Add the two established reflection gaps, pale blue glass and water tint, warm cork, and soft gray shadow over only the forms already in place.",tip:"Layer the blue in one direction and leave the reflection shapes as paper. A transparent object needs fewer pencil marks than a solid one."},
    {name:"Finish the tiny voyage",text:"Strengthen only the established keeper contours, bottle rim, cork grain, hull, masts, sails, waterline, color, reflections, and shadow.",tip:"Compare the two sail angles one last time, then stop. Extra waves, birds, or lettering would make the small scene harder to read.",image:true}
  ]},
  { slug:"sleepy-red-panda-curled-on-branch",day:"112",date:"Friday, August 14",isoDate:"2026-08-14",subject:"a sleepy red panda curled on a branch",headlineSubject:"a sleepy red panda<br>curled on a branch",shortSubject:"a sleepy red panda",seoTitlePhrase:"a Sleepy Red Panda Curled on a Branch",lessonTitle:"Let's draw a sleepy red panda curled on a branch",description:"Learn how to draw a sleepy red panda curled on a branch with simple body masses, a wrapping striped tail, pencil texture, and restrained colored-pencil shading.",intro:"Build one sleepy red panda from a round head, curled body bean, and broad tail arc on a diagonal branch, then add the tucked paws, quiet face, four tail stripes, graphite texture, and restrained color. This 25-minute sketch turns a charming animal into a practical lesson in nested curves, overlap, and keeping soft fur readable without overworking every line.",time:25,difficulty:"Medium",accent:"#b55e3b",finished:"sleepy-red-panda-curled-on-branch-finished-v1.jpg",finishedAlt:"Handmade graphite and restrained colored-pencil sketch of one left-facing sleepy red panda curled on one diagonal brown branch with one short fork, exactly two rounded ears, two closed curved eyes, one small dark nose, pale cream cheek masks, two tucked paws, one broad wrapping tail with exactly four pale stripe bands, rust and warm-brown pencil texture, open-paper highlights, and one broken cool-gray ground shadow",materials:["HB pencil","2B pencil","Drawing paper","Kneaded eraser","Rust, cream, warm-brown, and cool-gray colored pencils"],materialNote:"Map the branch, head circle, body bean, tail route, tucked paws, face, four tail stripes, and shadow in pale HB. Strengthen only the established shapes with 2B, then glaze color in the direction of the fur and around the paper highlights so the graphite tooth stays visible.",tipLabel:"Sketchbook tip",steps:[
    {name:"Map the branch and curl",text:"Use pale HB to place one diagonal branch with a short fork, a round head circle, a curled body bean, one broad tail arc, two tucked-paw ovals, four pale tail-stripe guides, and a broken shadow footprint.",tip:"Keep this first drawing loose. Reserve the body and tail footprints over the branch now so bark lines never need to be erased later."},
    {name:"Wrap the sleeping body",text:"Connect the head and body into one compact left-facing curled panda silhouette while preserving the branch, paw, tail, stripe, and shadow guides.",tip:"Pull the back in one long relaxed curve, then let the belly tuck inward above the tail. Compare the empty paper inside the curl before darkening anything."},
    {name:"Lay in the tail and paws",text:"Draw one broad tail wrapping beneath the body, exactly four pale stripe bands, and the same two tucked paws on their established guides.",tip:"Space the four stripes across the tail curve rather than as straight bars. Stop the branch texture beneath the tail route so the overlap stays clean."},
    {name:"Settle the sleepy face",text:"Add exactly two rounded ears, two closed eye curves, one small nose, two pale cheek-mask shapes, small paw toes, and a few light bark seams.",tip:"Keep the facial marks tiny and low on the head. Let the ear shapes differ slightly like real pencil marks, but keep both ears clearly visible."},
    {name:"Glaze the quiet color",text:"Strengthen the established graphite fur and bark texture, then layer rust, cream, warm brown, and cool gray over the same panda, branch, stripes, and broken shadow.",tip:"Use short pencil strokes that follow the body curve and tail. Build two light color passes instead of pressing hard enough to hide the paper tooth."},
    {name:"Finish the resting panda",text:"Clarify only the established keeper contours, fur texture, tail stripes, restrained color, and broken shadow.",tip:"Count one panda, two ears, two closed eyes, two paws, one tail, four stripes, one branch fork, and one shadow before stopping. Try another branch angle in your own version, but keep the curl simple and restful.",image:true}
  ]},
  { slug:"campfire-mug-with-marshmallows",day:"111",date:"Thursday, August 13",isoDate:"2026-08-13",subject:"a campfire mug with marshmallows",headlineSubject:"a campfire mug<br>with marshmallows",shortSubject:"a campfire mug",seoTitlePhrase:"a Campfire Mug with Marshmallows",lessonTitle:"Let's draw a campfire mug with marshmallows",description:"Learn how to draw a campfire mug with marshmallows using a simple mug, five-stone fire ring, two roasting sticks, graphite texture, and restrained colored pencil.",intro:"Build one enamel mug behind a small five-stone campfire, then cross two roasting sticks with three cube marshmallows before adding graphite warmth and restrained firelight color. This 25-minute sketch teaches clear construction, controlled overlap, counting repeated elements, and how to preserve paper highlights around dark pencil value.",time:25,difficulty:"Medium",accent:"#b66b4a",finished:"campfire-mug-with-marshmallows-finished-v1.jpg",finishedAlt:"Handmade graphite and restrained colored-pencil sketch of one navy enamel camping mug with a cream rim and right C-handle behind one small campfire with exactly five rounded gray stones, one coral outer flame, one gold inner flame, exactly two crossed brown roasting sticks, exactly three cream cube marshmallows, one paper mug highlight, visible pencil tooth, and a short broken graphite ground shadow",materials:["HB pencil","2B pencil","Drawing paper","Kneaded eraser","Navy, coral, gold, brown, cream, and cool-gray colored pencils"],materialNote:"Map the mug, five stones, two stick routes, three marshmallow boxes, highlight, and shadow in pale HB first. Use 2B for the established graphite value, then glaze restrained color around the paper highlight so the pencil tooth and firelight remain visible.",tipLabel:"Sketchbook tip",steps:[
    {name:"Map the campfire setup",text:"Use pale graphite for the mug ellipse and mass, handle gesture, flame triangle, exactly five stone circles, two crossed stick axes, exactly three marshmallow boxes, one highlight gap, and a broken shadow footprint.",tip:"Count five circles, two diagonals, and three boxes before closing any line. This frame should look like construction, not a faint finished campfire."},
    {name:"Wrap the cozy mug",text:"Connect the mug and right-side handle while preserving every pale fire, stone, stick, marshmallow, highlight, and shadow guide.",tip:"Pull the mug sides in two slow tapered strokes and rotate the page for the handle. Leave the campfire pieces pale so the next steps have clear jobs."},
    {name:"Build the fire ring",text:"Add exactly five rounded stones and one outer flame plus one inner flame on their established guides.",tip:"Space the five stones with small gaps and keep the flame centered behind them. Stop the flame where the future stick routes cross so you never need to erase keeper lines."},
    {name:"Cross the roasting sticks",text:"Add exactly two crossed sticks and exactly three cube marshmallows on the reserved routes.",tip:"Draw the far stick first, then let the near stick cover it at one crossing. Keep two marshmallows on one stick and one on the other."},
    {name:"Set the quiet details",text:"Add the mug rim, simple stone facets, the existing paper highlight, and the broken ground shadow.",tip:"Use fewer stone facets than you think and keep the highlight open from the start. Break the shadow so the fire still feels light and airy."},
    {name:"Build graphite warmth",text:"Layer graphite value over established forms while preserving the highlight, five stones, two sticks, and three marshmallows.",tip:"Hatch with the curve of the mug and around the rounded stones. Use the side of the 2B pencil for broad value, then return to the point for the sticks and cubes."},
    {name:"Layer the firelight color",text:"Glaze navy on the mug, coral and gold on the flame, brown on the sticks, cream on rim and marshmallows, and cool gray on stones.",tip:"Build two light passes rather than a waxy coat. Color around the highlight and let graphite remain visible in the darkest areas."},
    {name:"Settle the campfire glow",text:"Strengthen only established contour, graphite, color, highlight, and shadow.",tip:"Count one mug, five stones, two sticks, and three marshmallows before stopping. Try a different mug color later, but keep the same overlap plan.",image:true}
  ]},
  {
    slug: "elephant-calf-with-raised-trunk",
    day: "110",
    date: "Wednesday, August 12",
    isoDate: "2026-08-12",
    subject: "an elephant calf with a raised trunk",
    headlineSubject: "an elephant calf<br>with a raised trunk",
    shortSubject: "an elephant calf",
    seoTitlePhrase: "an Elephant Calf with a Raised Trunk",
    lessonTitle: "Let's draw an elephant calf with a raised trunk",
    description: "Learn how to draw an elephant calf with a raised trunk using a simple side-view pose, four sturdy legs, one large ear, graphite texture, and restrained colored pencil.",
    intro: "Build one young elephant around a rounded head, broad body, and upward-curled trunk, then settle four sturdy legs beneath the pose before adding the gentle eye, one small tusk, sparse skin folds, graphite volume, and restrained color. The 25-minute sketch turns a trending animal subject into a practical lesson in large masses, leg overlap, directional hatching, and keeping textured surfaces readable without chasing photorealism.",
    time: 25,
    difficulty: "Medium",
    accent: "#667d91",
    finished: "elephant-calf-with-raised-trunk-finished-v1.jpg",
    finishedAlt: "Handmade graphite and restrained colored-pencil sketch of one young left-facing elephant calf with one upward-curled trunk, exactly one visible large near ear with a dusty-rose interior, exactly four sturdy legs with rounded feet and simple toenail marks, one gentle visible eye, one small visible tusk, one trunk opening, one slim tufted tail, sparse skin folds, layered blue-gray pencil and graphite texture, open-paper highlights, and one broken graphite ground shadow",
    materials: ["HB pencil", "2B pencil", "Drawing paper", "Kneaded eraser", "Blue-gray and dusty-rose colored pencils"],
    materialNote: "Use pale HB graphite to place the complete calf, upward trunk, one visible ear, four leg routes, tail, eye, tusk, trunk opening, toenail marks, folds, highlights, and broken shadow before strengthening any contour. Build the 2B hatching in the direction of each form, then glaze blue gray over the body and dusty rose inside the ear lightly enough to keep the graphite grain and warm paper visible.",
    tipLabel: "Sketchbook tip",
    steps: [
      { name: "Map the calf gesture", text: "Use pale graphite to place the head and body masses, upward trunk route, one visible ear, exactly four leg axes, the tail route, eye and tusk anchors, toenail routes, open-paper highlights, and one broken ground-shadow footprint.", tip: "Ghost the trunk curve and body arc two or three times before touching down, then compare the four leg gaps under the belly. Mark the ear, tusk, eye, feet, and shadow now so later contours and value can stop around them." },
      { name: "Wrap the head trunk and ear", text: "Build one loose calf silhouette with a rounded head, broad body, upward-curled trunk, and one large visible near ear while preserving every pale leg, tail, face, highlight, and shadow reserve.", tip: "Simplify the outside edge into a few long arcs instead of tracing wrinkles. Rotate the page for the trunk, hide the far ear completely behind the head, and stop the belly contour at all four reserved leg attachments." },
      { name: "Stand the calf on four legs", text: "Add exactly four sturdy legs with rounded feet plus one slim tufted tail on their reserved routes, keeping the two smaller far legs visibly behind the near pair.", tip: "Block each leg as a soft taper before drawing toes. Compare the negative spaces between the four legs, and let the far pair disappear only where the near legs physically overlap them." },
      { name: "Place the gentle face and feet", text: "Add one calm visible eye, one small tusk, the trunk opening, simple rounded toenail marks, and a few broad ear folds without changing the pose.", tip: "Place the eye below the forehead arc and aim the small tusk from the reserved mouth corner. Keep the toenail shapes simple and uneven, then pull each ear fold from its attachment toward the outer edge." },
      { name: "Add the skin rhythm and shadow", text: "Add sparse wrinkles along the established trunk, joints, belly, and ear, then place directional hatching and the reserved broken ground shadow.", tip: "Curve each wrinkle around the form and leave quiet paper between groups. Break the shadow at every planted foot so the calf feels grounded without sitting on a heavy dark oval." },
      { name: "Build the graphite volume", text: "Layer broad graphite values over the established calf and shadow while preserving the eye, tusk, folds, toenail marks, and open-paper highlights.", tip: "Use the side of the 2B pencil on the body and ear, then turn to the point around the eye, trunk, and feet. Change hatch direction between the head, legs, and belly so the large masses keep their volume." },
      { name: "Layer the quiet elephant color", text: "Glaze restrained blue-gray pencil over the established body and dusty rose inside the established near ear while preserving graphite grain, highlights, and anatomy landmarks.", tip: "Build two light color passes instead of one waxy coat, following the trunk and body curves. Keep the eye, tusk, toenails, and paper highlights clean, and let graphite remain the darkest material." },
      { name: "Settle the raised-trunk finish", text: "Strengthen selected established contours, deepen the same graphite and colored-pencil values, clarify existing paper highlights, and soften only pale guides that distract.", tip: "Count one visible ear, four legs, one eye, one tusk, one trunk opening, and one tail before stopping. Try a different ear tint or trunk curl in your own sketch if you like, but keep the leg order and handmade pencil tooth readable.", image: true }
    ]
  },
  {
    slug: "shooting-star-over-pine-hills",
    day: "109",
    date: "Tuesday, August 11",
    isoDate: "2026-08-11",
    subject: "a shooting star over pine hills",
    headlineSubject: "a shooting star<br>over pine hills",
    shortSubject: "a shooting star",
    seoTitlePhrase: "a Shooting Star over Pine Hills",
    lessonTitle: "Let's draw a shooting star over pine hills",
    description: "Learn how to draw a shooting star over pine hills with a diagonal meteor, two glowing wakes, layered ridges, five pines, graphite texture, and restrained colored pencil.",
    intro: "Sweep one shooting star across a quiet night sky, stack two pine-covered hill ridges beneath it, and preserve the pale meteor glow before building graphite and restrained indigo pencil around the scene. The 20-minute sketch turns a timely summer-sky subject into a practical lesson in diagonal movement, negative-space highlights, value grouping, and varied tree rhythm.",
    time: 20,
    difficulty: "Medium",
    accent: "#52668f",
    finished: "shooting-star-over-pine-hills-finished-v1.jpg",
    finishedAlt: "Handmade graphite and restrained colored-pencil sketch of one diagonal shooting star with a small warm-yellow round head on the page right and exactly two tapered yellow wake bands trailing toward the upper left, exactly three small open-paper sky stars, two layered indigo-blue hill ridges, exactly five dark foreground pine trees in varied heights, dense directional graphite night-sky hatching, open warm-paper glow around the meteor and stars, broken rock-and-grass foreground texture, and visible pencil tooth",
    materials: ["HB pencil", "2B pencil", "Drawing paper", "Kneaded eraser", "Indigo-blue and warm-yellow colored pencils"],
    materialNote: "Use pale HB graphite to place the complete meteor route, round head, two wake bands, two hill ridges, five pine footprints, three star gaps, and broken foreground edge before strengthening any contour. Build darker 2B value around those reserves, then glaze indigo blue and warm yellow lightly enough to keep the paper glow and graphite grain visible.",
    tipLabel: "Sketchbook tip",
    steps: [
      { name: "Map the night-sky diagonal", text: "Use pale graphite to place one diagonal meteor route, its round head, exactly two wake bands, two hill ridges, exactly five pine footprints, three star centers, and the broken rock-and-grass foreground edge.", tip: "Ghost the meteor diagonal two or three times before touching down, then place the head on the page right and pull both wake routes toward the upper left. Mark all five tree axes and three star gaps now so later shading can stop around them." },
      { name: "Shape the meteor and hills", text: "Build the small meteor head, two tapered wake bands, and two loose overlapping hill silhouettes while preserving every pale pine, star, glow, and foreground reserve.", tip: "Start both wake bands at the same head and let them narrow together toward the upper left. Pull each ridge in one relaxed uneven pass, then compare the open sky above the nearer and farther hills before adding any trees." },
      { name: "Plant the five pines", text: "Refine both hill ridges and build exactly five foreground pine silhouettes of varied heights inside their reserved footprints.", tip: "Draw each trunk axis first, then stack short branch groups from the top down while rotating the page for comfortable strokes. Vary the five heights, but keep the branch masses clear of the meteor glow and stop ridge hatching at every trunk." },
      { name: "Add the quiet sky detail", text: "Add exactly three small background stars, readable branch rhythm to all five pines, sparse hatching on the distant ridge, and the broken rock-and-grass foreground texture.", tip: "Keep each star small and leave warm paper around it. Use fewer marks on the distant hill than the foreground, then group the rocks and grass into broken clusters instead of outlining every blade." },
      { name: "Layer the night values", text: "Build directional graphite and restrained indigo-blue pencil over the established hills and sky pockets, then warm only the existing meteor head and two wakes with light yellow pencil.", tip: "Hatch around the meteor and three stars instead of shading through them, and change stroke direction slightly between sky and hills. Build two light color passes rather than one waxy coat so the paper tooth keeps the night luminous." },
      { name: "Let the shooting star glow", text: "Strengthen selected established contours, deepen the same graphite and colored-pencil values, clarify the reserved meteor and star paper glow, and soften only pale guides that distract.", tip: "Count one meteor head, two wakes, two hill ridges, five pines, and three stars before stopping. Try a different hill profile in your own version if you like, but preserve the large diagonal and the open glow that make the shooting star readable.", image: true }
    ]
  },
  {
    slug: "school-bus-three-quarter-view",
    day: "108",
    date: "Monday, August 10",
    isoDate: "2026-08-10",
    subject: "a school bus",
    headlineSubject: "a school bus",
    shortSubject: "a school bus",
    seoTitlePhrase: "a School Bus",
    lessonTitle: "Let's draw a school bus in three-quarter view",
    description: "Learn how to draw a school bus in three-quarter view with a perspective box, four side windows, two wheels, front hardware, graphite hatching, and restrained colored pencil.",
    intro: "Turn one simple perspective box into a front-left three-quarter school bus, then fit the windshield, entry door, four receding side windows, two wheels, and familiar front hardware before adding graphite value and restrained yellow pencil. The 30-minute challenge uses a back-to-school subject to teach long perspective lines, repeated spacing, ellipse control, and material contrast without becoming a technical rendering.",
    time: 30,
    difficulty: "Challenge",
    accent: "#c99524",
    finished: "school-bus-three-quarter-view-finished-v1.jpg",
    finishedAlt: "Handmade graphite and restrained colored-pencil sketch of one generic face-free school bus in a front-left three-quarter view with one broad dark windshield, one folding entry-door window, exactly four receding side passenger windows, exactly two visible wheels, two headlights, exactly three muted-red roof marker lamps, one side mirror, two dark horizontal safety bands, one simple front grille and bumper, several small panel seams, tactile directional hatching, school-bus-yellow body color, cool-gray glass and wheel values, open paper highlights, and one broken graphite ground shadow",
    materials: ["HB pencil", "2B pencil", "Drawing paper", "Kneaded eraser", "School-bus-yellow, muted-red, and cool-gray colored pencils"],
    materialNote: "Use pale HB graphite to place the complete perspective box, roof and belt lines, two wheel ellipses, windshield, door, four side windows, two headlights, three roof lamps, mirror, two safety bands, grille, bumper, seams, highlights, and shadow before building darker linework. Add 2B value only after the viewpoint holds, then glaze yellow, red, and gray lightly enough to preserve graphite grain and warm paper.",
    tipLabel: "Sketchbook tip",
    steps: [
      { name: "Map the bus perspective", text: "Use pale graphite to place one front-left three-quarter body box, the roof and belt lines, two wheel ellipses, one windshield reserve, one door-window reserve, exactly four side-window reserves, two headlight centers, three roof-lamp centers, one mirror axis, two safety-band routes, a ground line, and a broken shadow footprint.", tip: "Ghost the long roof and lower body edges from the shoulder, then aim both toward the same shallow vanishing direction. Compare the two wheel ellipses and the empty spaces around all four side windows before darkening anything." },
      { name: "Wrap the bus shell", text: "Build one loose bus silhouette with the short hood, raised roof, long passenger side, two wheel wells, and two visible wheel rings while preserving every pale glazing, hardware, and shadow reserve.", tip: "Draw the roof and lower side in long relaxed passes, then rotate the page for the wheel arches. Keep the front box wider than the receding rear so the three-quarter view reads without extreme distortion." },
      { name: "Refine the body planes", text: "Clarify the broad front face, long side panel, roof edge, bumper and grille footprint, both wheel wells, and lower body edge without adding glass, hardware detail, value, or color.", tip: "Use the hood corners and front wheel as anchors, then check the narrow side plane above the rear wheel. Simplify the body into a few large arcs and straight runs instead of tracing every small wobble." },
      { name: "Fit the glass and front hardware", text: "Add one broad front windshield, one folding entry-door window, exactly four receding side passenger windows, two headlights, three roof lamps, the front grille, bumper, and two horizontal safety bands on the reserved routes.", tip: "Place the windshield first, then step the four side windows smaller as they recede. Keep each dark frame aimed with the roof line, and stop both safety bands cleanly at the wheel wells instead of drawing through them." },
      { name: "Finish the rolling hardware", text: "Add simple hubs and tread accents to both wheels, one side mirror, the door and panel seams, and the reserved broken shadow without changing the glass or front hardware.", tip: "Build each hub from the same ellipse center used in the wheel guide. Trace the mirror arm back to the windshield edge, then break the shadow at both tire contact patches so the bus feels planted rather than pasted onto a dark oval." },
      { name: "Build the graphite value", text: "Layer directional graphite over the established body planes, glass, tires, grille, hardware, and shadow while preserving every window, lamp, mirror, band, and open-paper highlight.", tip: "Use the side of the 2B pencil for broad glass and shadow value, then switch to the point for the grille and tread. Pull hatching along each body plane and keep the windshield darker than the yellow-painted panels." },
      { name: "Layer the bus color", text: "Glaze school-bus yellow over the established body, muted red over the three roof lamps, and cool gray over the glass, grille, wheels, and shadow without hiding the graphite grain.", tip: "Build two light colored-pencil passes that follow the bus length instead of one waxy coat. Leave narrow paper gaps along the roof and hood, and let the graphite remain the darkest material in the windows, tires, and grille." },
      { name: "Send the school bus rolling", text: "Strengthen selected established contours, deepen the same graphite and colored-pencil values, clarify existing paper highlights, and soften only the pale construction guides that distract.", tip: "Count one windshield, one door window, four side windows, two wheels, two headlights, three roof lamps, one mirror, and two safety bands, then stop while the paper tooth still shows. Change the bus color in your own version if you like, but keep the same perspective and spacing method.", image: true }
    ]
  },
  {
    slug: "pouty-lips-front-view",
    day: "107",
    date: "Sunday, August 9",
    isoDate: "2026-08-09",
    subject: "pouty lips",
    headlineSubject: "pouty lips",
    shortSubject: "pouty lips",
    seoTitlePhrase: "Pouty Lips",
    lessonTitle: "Let's draw pouty lips",
    description: "Learn how to draw pouty lips in front view with a soft cupid's bow, a narrow mouth opening, lip-plane creases, graphite hatching, paper highlights, and restrained colored pencil.",
    intro: "Build one front-view mouth around a light axis, a soft cupid's bow, two corners, and a fuller lower lip, then separate the planes with a narrow opening, directional graphite, and restrained dusty-rose color. The 20-minute study makes a subtle expression approachable by focusing on proportion, negative space, pressure control, and highlights instead of glossy beauty rendering.",
    time: 20,
    difficulty: "Easy-medium",
    accent: "#b76e79",
    finished: "pouty-lips-front-view-finished-v1.jpg",
    finishedAlt: "Handmade graphite and restrained colored-pencil study of one centered front-view pair of full pouty lips with one soft cupid's bow, one continuous mouth seam, one narrow shaded opening with no teeth, restrained upper- and lower-lip crease groups, tactile directional graphite hatching, dusty-rose color, muted-plum depth at the opening and corners, two oval open-paper highlights plus one broken center paper glow, two light philtrum accents, visible construction traces, and warm paper tooth",
    materials: ["HB pencil", "2B pencil", "Drawing paper", "Kneaded eraser", "Dusty-rose and muted-plum colored pencils"],
    materialNote: "Use pale HB graphite to place the complete mouth axis, both corners, upper and lower lip envelopes, opening, crease routes, highlights, and philtrum accents before strengthening any contour. Build darker 2B value only after the proportions hold, then glaze dusty rose and muted plum lightly enough to keep graphite grain and open paper visible.",
    tipLabel: "Sketchbook tip",
    steps: [
      { name: "Map the pouty proportions", text: "Use pale graphite to place one horizontal mouth axis, two corners, the upper- and lower-lip envelopes, the cupid's-bow center, one narrow opening route, two oval highlight reserves, one broken center glow, and two light philtrum anchors.", tip: "Ghost the mouth width and lower-lip arc before touching down, then compare the empty paper above and below the axis. Reserve the opening and highlights now so later graphite can stop around them instead of becoming marks you must erase." },
      { name: "Wrap the lip silhouette", text: "Add a loose upper- and lower-lip contour plus one continuous mouth seam while preserving the corners, opening, highlight, crease, and philtrum routes.", tip: "Simplify each lip into two or three long arcs rather than tracing many tiny bumps. Rotate the page for the lower curve and keep your pressure light enough that the first contour still feels adjustable." },
      { name: "Shape the cupid's bow", text: "Clarify the soft cupid's bow, both mouth corners, and the rounded lower-lip edge without adding shading or color.", tip: "Compare the two peaks against the center dip instead of forcing perfect symmetry. Use the corners as fixed endpoints, then pull each upper-lip arc inward in one relaxed pass." },
      { name: "Open the mouth seam", text: "Add one narrow inner opening and simple upper- and lower-lip plane breaks inside the established silhouette while keeping both corners and the mouth width fixed.", tip: "Squint at the negative opening before darkening it: it should stay thinner than the lower lip. Work from each corner toward the center and leave teeth and tongue out so the lesson stays about lip form." },
      { name: "Place creases and highlights", text: "Add restrained crease groups that follow both lip planes, keep two oval highlights and one broken center paper glow open, and reinforce the two light philtrum accents without changing the silhouette or opening.", tip: "Pull the crease marks away from the mouth seam and taper your pressure before each line reaches the lip edge. Group the marks with quiet paper between them so the surface reads as soft rather than scratched." },
      { name: "Build the graphite volume", text: "Layer directional graphite hatching over the established lip planes, deepen the same opening and corners, and preserve every crease route, both oval highlights, and the broken center glow.", tip: "Use the side of the 2B pencil for broad value and the point only near the seam and corners. Follow the lip curve with each stroke, then stop while the center of the lower lip remains visibly lighter." },
      { name: "Layer the soft lip color", text: "Glaze dusty rose over the established lips and muted plum into the existing opening and corners while preserving graphite grain, the crease routes, two oval highlights, and broken center glow.", tip: "Build two light colored-pencil passes that wrap with the lip planes instead of one waxy coat. Let the graphite stay darkest at the seam and keep the open paper doing most of the highlight work." },
      { name: "Settle the pouty finish", text: "Strengthen selected established contours, deepen the same graphite and colored-pencil values, clarify the two oval highlights and broken center glow, and soften only pale guides that distract.", tip: "Trace one continuous mouth seam, check that the narrow opening and both corners still align, then stop before the color becomes glossy or the paper tooth disappears. Change the lip width or color in your own study once the same axis-and-plane method feels clear.", image: true }
    ]
  },
  {
    slug: "kitten-batting-a-ball-of-yarn",
    day: "106",
    date: "Saturday, August 8",
    isoDate: "2026-08-08",
    subject: "a kitten batting a ball of yarn",
    headlineSubject: "a kitten<br>batting a ball of yarn",
    shortSubject: "a playful kitten",
    lessonTitle: "Let's draw a kitten batting a ball of yarn",
    description: "Learn how to draw a kitten batting a ball of yarn with a seated pose, one raised paw, wide focused eyes, a curled tail, tabby markings, graphite texture, and restrained colored pencil.",
    intro: "Seat one playful kitten around a tilted head, rounded chest, two folded haunches, and a tail that curls along the ground, then lift one paw toward a loose strand from the yarn ball. The 25-minute sketch turns a lively animal pose into a sequence of clear masses, overlaps, focused features, soft fur texture, and restrained color without polishing away the graphite or paper.",
    time: 25,
    difficulty: "Medium",
    accent: "#c97845",
    finished: "kitten-batting-a-ball-of-yarn-finished-v1.jpg",
    finishedAlt: "Handmade graphite and restrained colored-pencil sketch of one warm-ginger kitten seated in a three-quarter pose facing page left with exactly two triangular ears, two wide eyes focused on one dusty-teal yarn ball, one front paw raised over one loose strand, one front paw planted, two folded hind haunches, one curled tail with three broad tabby bands and a darker tip, three forehead stripes, sparse whiskers, tactile directional fur hatching, rose ear interiors and nose, open paper highlights, and one broken warm-gray ground shadow",
    materials: ["HB pencil", "2B pencil", "Drawing paper", "Eraser", "Warm-ginger, dusty-teal, rose, and warm-gray colored pencils"],
    materialNote: "Use light HB graphite to place the complete kitten, both ears, raised and planted paws, two haunches, curled tail, yarn ball, single strand, face, stripes, fur routes, highlights, and shadow. Build darker 2B texture only after the anatomy is stable, then add restrained colored pencil while keeping open paper and graphite grain visible.",
    tipLabel: "Sketchbook tip",
    steps: [
      { name: "Map the playful pose", text: "Use pale graphite to place the tilted head, seated body, exactly two ears, one raised paw, one planted paw, two folded haunches, one curled tail, one yarn-ball circle, the single loose strand, face axes, stripe routes, open highlights, and a broken shadow footprint.", tip: "Ghost the head and body ovals before touching down, then compare the empty triangle between the raised paw, chest, and yarn. Reserve both paws and the full tail curl now so later body lines stop around them instead of becoming marks you must erase." },
      { name: "Wrap the seated kitten", text: "Add a loose contour for the tilted head, two ears, rounded chest, two folded haunches, raised paw, planted paw, and curled tail while preserving every yarn, face, marking, highlight, and shadow route.", tip: "Simplify the outer contour into a few long arcs instead of drawing fur zigzags immediately. Trace from ear to chest and from haunch to tail with your finger first so the seated weight stays balanced." },
      { name: "Fit the paws and yarn", text: "Clarify the cheeks, chest, shoulder, haunches, lifted and planted paws, then shape exactly one yarn ball and one loose strand on the reserved routes.", tip: "Build each paw as one soft mitten before adding toes. Stop the chest contour at both front paws, let the strand pass behind only the raised paw, and keep the yarn ball far enough left that the kitten still has breathing room." },
      { name: "Aim the curious face", text: "Add two wide eyes focused on the yarn, one small nose, a short curious mouth, whisker routes, exactly three forehead stripes, and exactly three unfilled tail-band guides.", tip: "Place both pupils before darkening either one and check their aim against the yarn ball. Keep the nose close to the eye line and use three broad stripe shapes instead of many tiny marks so the expression remains readable." },
      { name: "Add fur and yarn texture", text: "Place sparse fur groups along the cheeks, chest, haunches, and tail, curve yarn loops around the established ball, add small paw creases, preserve open paper highlights, and establish the broken ground shadow.", tip: "Pull fur marks in the direction each form grows and leave quiet paper between clusters. Wrap the yarn lines around the ball like latitude curves; avoid crossing the outer edge or filling every gap." },
      { name: "Build the soft graphite values", text: "Layer directional graphite hatching over the established kitten, paws, tail, yarn, and shadow while keeping the eyes, tabby routes, yarn loops, and paper highlights clear.", tip: "Use the side of the 2B pencil for the broad chest and haunch values, then turn to the point for short fur accents. Save the darkest graphite for the pupils, paw overlap, tail bands, and the small contact shadows under the body." },
      { name: "Layer the playful color", text: "Add restrained warm ginger to the kitten, dusty teal to the yarn, rose to both ear interiors and the nose, and warm gray to the established shadow while preserving graphite texture and open paper highlights.", tip: "Pull the ginger pencil with the fur direction and the teal around the yarn loops. Build two light layers instead of one waxy pass, and leave the muzzle, chest, paws, and eye highlights mostly open paper." },
      { name: "Settle the playful kitten finish", text: "Strengthen selected established contours, deepen the same graphite and colored-pencil texture, clarify the eyes and paper highlights, and soften only the pale guides that distract.", tip: "Count two ears, one raised paw, one planted paw, two haunches, one curled tail, one yarn ball, one strand, three forehead stripes, and three tail bands, then stop. Change the kitten or yarn colors in your own sketch, but keep the pose and overlap order useful.", image: true }
    ]
  },
  {
    slug: "lemon-with-slice-and-leaves",
    day: "105",
    date: "Friday, August 7",
    isoDate: "2026-08-07",
    subject: "a lemon with a slice and leaves",
    headlineSubject: "a lemon<br>with a slice and leaves",
    shortSubject: "a lemon with a slice",
    lessonTitle: "Let's draw a lemon with a slice and leaves",
    description: "Learn how to draw a lemon with one cut slice, two leaves, eight citrus segments, rind texture, graphite hatching, a broken shadow, and restrained colored pencil.",
    intro: "Set one whole lemon behind a cut slice, tuck two leaves around a short stem, and divide the slice into eight juicy segments before adding peel texture and restrained yellow-green color. The 20-minute still life turns a simple fruit into a useful study of overlaps, radial spacing, and curved pencil strokes without polishing away the graphite or paper.",
    time: 20,
    difficulty: "Medium",
    accent: "#d4a62a",
    finished: "lemon-with-slice-and-leaves-finished-v1.jpg",
    finishedAlt: "Handmade graphite and restrained colored-pencil sketch of one whole golden-yellow lemon resting on a shallow diagonal with exactly one cut slice leaning against its lower-left side, one short warm-brown stem, exactly two olive-green leaves with simple veins, exactly eight yellow citrus segments inside a doubled rind, sparse peel dimples, curved graphite hatching, open paper highlights, and one broken warm-gray graphite ground shadow",
    materials: ["Graphite pencil", "Drawing paper", "Kneaded eraser", "Optional lemon-yellow, leaf-green, and warm-ochre colored pencils"],
    materialNote: "Use graphite for the whole lemon, foreground slice, stem, both leaves, eight segment routes, rind, dimples, hatching, highlights, and shadow. Add the restrained yellow, green, and ochre only after every overlap and segment boundary is established.",
    tipLabel: "Sketch tip",
    steps: [
      { name: "Map the citrus arrangement", text: "Use pale graphite to place one angled lemon envelope, the full foreground slice circle, one short stem, exactly two leaf footprints, eight radial slice divisions, open highlights, and a broken shadow footprint.", tip: "Ghost the lemon oval and slice circle two or three times before touching down. Reserve the entire slice in front of the fruit now, and aim the eight segment guides from one shared center so no keeper line needs erasing later." },
      { name: "Shape the lemon and slice", text: "Wrap the guides with one tapered whole lemon, one short stem, exactly two leaves, and one circular slice leaning in front while preserving every segment, highlight, and shadow route.", tip: "Rotate the page for the long fruit contour and stop it cleanly behind the slice. Compare the negative spaces above and below each leaf so the pair feels attached to the same stem instead of floating." },
      { name: "Divide the citrus and leaves", text: "Clarify the doubled rind, exactly eight citrus segments, simple veins in both leaves, and clean overlap breaks on their reserved guides.", tip: "Divide the slice into quarters first, then split each quarter once to get eight wedges. Keep a narrow strip of paper between the segment tips and center so the juicy pulp stays readable at thumbnail size." },
      { name: "Build the peel texture", text: "Add sparse rind dimples, curved graphite hatching, open paper highlights, and the established broken shadow without changing the fruit, leaf, or segment counts.", tip: "Wrap short hatching around the lemon instead of shading straight across it, and vary the dimple spacing rather than covering every patch. Let the shadow break beneath the slice and fruit so the paper can breathe." },
      { name: "Layer the sunny citrus color", text: "Glaze lemon yellow over the established fruit and slice, leaf green over both leaves, and warm ochre near the rind and shadow while preserving graphite texture and eight segment boundaries.", tip: "Build two light pencil layers that follow the fruit curve and segment wedges. Leave the upper fruit, rind edge, and leaf midribs lighter so the color stays fresh instead of waxy or flat." },
      { name: "Brighten the lemon finish", text: "Strengthen selected keeper contours, deepen the existing rind texture and shadow, balance the established yellow, green, and ochre, clarify the same highlights, and soften only pale guides that distract.", tip: "Count one whole lemon, one slice, two leaves, and eight segments before stopping. You can change the leaf tilt or color temperature in your own version, but keep the slice overlap and radial spacing clear.", image: true }
    ]
  },
  {
    slug: "cowboy-boot-with-stitching",
    day: "104",
    date: "Thursday, August 6",
    isoDate: "2026-08-06",
    subject: "a cowboy boot with decorative stitching",
    headlineSubject: "a cowboy boot<br>with decorative stitching",
    shortSubject: "a cowboy boot",
    lessonTitle: "Let's draw a cowboy boot with decorative stitching",
    description: "Learn how to draw a cowboy boot in side view with a pointed toe, tall shaft, two pull loops, layered sole, stacked heel, vamp seam, mirrored stitching, leather texture, and restrained colored pencil.",
    intro: "Build one right-facing cowboy boot from a tall shaft and pointed toe, fit the layered sole, stacked heel, pull loops, vamp seam, and decorative stitching onto that same silhouette, then add worn leather texture and restrained western color. The 25-minute side-view study keeps a characterful subject approachable by solving its proportions before the details.",
    time: 25,
    difficulty: "Medium",
    accent: "#3f5b78",
    finished: "cowboy-boot-with-stitching-finished-v1.jpg",
    finishedAlt: "Handmade graphite and restrained colored-pencil sketch of one right-facing cowboy boot in side view with one pointed muted-ochre toe, one tall dusty-indigo shaft, one shallow V-cut opening, exactly two pull loops, one curved vamp seam, three stacked mirrored decorative stitch bands, one layered warm-brown sole, one stacked block heel, short welt marks, directional leather grain, open paper highlights, and one broken graphite ground shadow",
    materials: ["Graphite pencil", "Drawing paper", "Kneaded eraser", "Optional dusty-indigo, muted-ochre, and warm-brown colored pencils"],
    materialNote: "Use graphite for the complete boot, both pull loops, sole, heel, vamp seam, decorative stitch bands, leather grain, welt marks, highlights, and shadow. Add the restrained indigo, ochre, and brown pencil only after every route is established.",
    tipLabel: "Sketch tip",
    steps: [
      { name: "Map the western boot", text: "Use pale graphite to place the complete right-facing boot envelope, shallow V-cut opening, pointed toe, two pull-loop routes, layered sole, stacked heel, curved vamp seam, three mirrored stitch-band routes, open highlights, and a broken shadow footprint.", tip: "Ghost the tall shaft and long toe envelope before touching down, then compare their heights. Reserve the loops behind the shaft rim and the sole beneath the upper now so no finished line needs erasing later." },
      { name: "Shape the boot and heel", text: "Wrap the guides with one gently tapered boot upper, angled ankle, pointed toe, layered sole, and blocky stacked heel while preserving every opening, loop, seam, stitch, highlight, and shadow route.", tip: "Rotate the page for the long toe and sole curves, and watch the open wedge below the ankle. Let the heel lean beneath the back of the shaft instead of drifting under the center of the boot." },
      { name: "Fit the western details", text: "Clarify the shallow V-cut opening, exactly two pull loops, one curved vamp seam, and three stacked mirrored decorative stitch bands on their reserved routes.", tip: "Draw the two sides of each stitch band as a mirrored pair, but keep small handmade differences. Trace the shaft rim with your finger before darkening it so both loops remain visibly tucked behind the opening." },
      { name: "Build the leather texture", text: "Add sparse directional leather grain, short welt marks, stacked heel layers, open paper highlights, and the established broken graphite shadow without changing the boot silhouette or counts.", tip: "Curve short texture strokes around the shaft and vamp instead of shading straight across them. Keep the welt marks irregular and stop the ground shadow at the toe, sole, and heel." },
      { name: "Layer the worn leather color", text: "Glaze dusty indigo over the established shaft, muted ochre over the vamp, and warm brown over the sole and heel while preserving graphite texture and open paper highlights.", tip: "Build two light pencil layers in the direction of each leather form. Leave the shaft edge, toe crown, vamp seam, and sole rim lighter so the dark boot stays readable at thumbnail size." },
      { name: "Set the boot in its tracks", text: "Strengthen selected keeper contours, deepen the existing leather grain and shadow, balance the established indigo, ochre, and brown, clarify the same highlights, and soften only pale guides that distract.", tip: "Count one pointed toe, one shaft, two pull loops, three stitch bands, one sole, one heel, and one shadow before stopping. Change the leather colors if you like, but preserve the side-view structure and overlap order.", image: true }
    ]
  },
  {
    slug: "vintage-binoculars-with-strap",
    day: "001",
    date: "Saturday, April 25",
    isoDate: "2026-04-25",
    subject: "vintage binoculars with a leather strap",
    headlineSubject: "vintage binoculars<br>with a leather strap",
    shortSubject: "vintage binoculars",
    lessonTitle: "Let's draw vintage binoculars with a leather strap",
    description: "Learn how to draw vintage binoculars with two tapered barrels, objective lenses, eyepieces, a central hinge and focus wheel, one leather strap and buckle, grip texture, glass highlights, graphite shading, and restrained color.",
    intro: "Build one pair of field binoculars from two matching tapered barrels, connect their lenses, eyepieces, hinge, and focus wheel, then route one broad leather strap around the instrument before adding grip texture and muted expedition color. This honest archive lesson is a newly made 30-minute study in paired perspective, ellipses, material contrast, and overlapping straps—not a claim about earlier visitors, comments, activity, or popularity.",
    time: 30,
    difficulty: "Challenge",
    accent: "#556346",
    finished: "vintage-binoculars-with-strap-finished-v1.jpg",
    finishedAlt: "Handmade graphite and restrained colored-pencil sketch of one pair of vintage binoculars in a three-quarter view with exactly two forest-green tapered barrels, exactly two large blue-gray objective lenses, exactly two charcoal eyepieces, one central hinge, one ridged focus wheel, simple grip ribs, small brass hardware, one continuous warm-brown leather strap forming a broad loop beneath the binoculars, exactly one brass buckle, one visible brass side ring, open paper highlights, and one broken graphite tabletop shadow",
    materials: ["Graphite pencil", "Drawing paper", "Kneaded eraser", "Optional forest-green, charcoal, brass, blue-gray, and warm-brown colored pencils"],
    materialNote: "Use graphite for both barrels, all four lens and eyepiece ellipses, bridge, focus wheel, glass, strap, attachment points, buckle, grip ribs, leather grain, and shadow. Add the limited expedition colors only after every optical and strap overlap is established.",
    tipLabel: "Sketch tip",
    steps: [
      { name: "Map the paired barrels", text: "Use pale graphite to place two barrel axes and tapered boxes, two large objective ellipses, two smaller eyepiece ellipses, the central bridge, focus wheel, one broad strap loop, two attachment points, one buckle, and a broken shadow footprint.", tip: "Ghost each paired ellipse before touching down and compare its tilt with the matching lens on the other barrel. Reserve the strap behind the binoculars now, so its long loop stops cleanly at the barrels and bridge without asking you to erase keeper lines later." },
      { name: "Shape the optical body", text: "Wrap the guides with exactly two tapered barrels, two objective rims, two smaller eyepieces, and one central hinge bridge while preserving every strap and hardware route.", tip: "Draw the nearer barrel first, then use its long edges to aim the farther barrel. Compare the wedge of paper between them and keep the far objective rim slightly narrower so the three-quarter view reads without a ruler." },
      { name: "Connect the glass and strap", text: "Clarify one ridged focus wheel, two objective glass planes, two strap attachment points including one visible side ring and one tucked connection, exactly one buckle, and one continuous leather loop on their reserved guides.", tip: "Trace the strap with your finger from one attachment, through the buckle, and around to the other before darkening it. Let the strap disappear only behind the barrel shapes you reserved, and keep both glass highlights inside their established rims." },
      { name: "Build the field textures", text: "Add simple grip ribs to both barrels, rim seams, hinge hardware, sparse leather grain, glass highlights, and the established broken tabletop shadow without changing the optics or strap route.", tip: "Pull the grip ribs along each barrel's taper and leave small irregular gaps so they feel drawn rather than stamped. Curve the leather grain around the broad loop, and keep the brightest lens highlights as untouched paper." },
      { name: "Layer the expedition color", text: "Glaze forest green and charcoal over the established barrels, brass over the small hardware, blue gray into both lenses, and warm brown over the continuous leather strap while preserving graphite texture and open paper highlights.", tip: "Build color with two light passes in the direction of each form. Keep the barrel crowns, glass streaks, buckle edges, and strap rim lighter so the dark materials stay separated at thumbnail size." },
      { name: "Bring the binoculars into focus", text: "Strengthen selected keeper contours, deepen the existing grip, glass, leather, and shadow values, balance the established colors, clarify small highlights, and soften only pale guides that distract.", tip: "Count two barrels, two objective lenses, two eyepieces, one bridge, one focus wheel, one continuous strap, and one buckle before stopping. Change the body or strap colors if you like, but preserve the paired perspective and the same readable loop.", image: true }
    ]
  },
  {
    slug: "classic-motorcycle-side-view",
    day: "103",
    date: "Wednesday, August 5",
    isoDate: "2026-08-05",
    subject: "a classic motorcycle",
    headlineSubject: "a classic<br>motorcycle",
    shortSubject: "a classic motorcycle",
    lessonTitle: "Let's draw a classic motorcycle",
    description: "Learn how to draw a classic motorcycle in side view with two wheels, a fuel tank, stepped seat, triangular frame, single-cylinder engine, headlamp, fenders, exhaust, chain, spokes, graphite texture, and restrained color.",
    intro: "Set two equal wheels on one ground line, bridge them with a classic frame, and fit the tank, seat, engine, fork, headlamp, exhaust, and chain before building the spoke rhythm and road-worn color. The 30-minute side-view study turns a complicated machine into a sequence of clear overlapping shapes without polishing away the graphite or paper.",
    time: 30,
    difficulty: "Challenge",
    accent: "#31536f",
    finished: "classic-motorcycle-side-view-finished-v1.jpg",
    finishedAlt: "Handmade graphite and restrained colored-pencil sketch of one left-facing classic motorcycle in side view with exactly two equal spoked wheels, one navy rounded fuel tank, one rust-brown stepped seat, one triangular metal frame, one silver-gray single-cylinder engine, one slanted front fork, one compact handlebar, one round navy headlamp, exactly two navy fenders, one low silver exhaust pipe, one visible chain route, warm-brown tire accents, open paper highlights, and one broken graphite ground shadow",
    materials: ["Graphite pencil", "Drawing paper", "Kneaded eraser", "Optional navy, rust, silver-gray, and warm-brown colored pencils"],
    materialNote: "Use graphite for the complete motorcycle, both wheels, frame, tank, seat, engine, fork, headlamp, fenders, exhaust, chain, spokes, tread, cables, and shadow. Add navy, rust, silver-gray, and warm brown only after every mechanical route is established.",
    tipLabel: "Sketch tip",
    steps: [
      { name: "Map the wheels and machine", text: "Use pale graphite to place exactly two equal wheel ellipses on one ground line, then map the frame triangle, fuel tank, stepped seat, engine block, front fork, headlamp, both fenders, exhaust, chain, cables, and broken shadow.", tip: "Ghost both wheel circles before touching down and compare the long negative space between them. Reserve the engine inside the frame triangle now, and stop the chain, fork, and spokes at their hub and engine footprints so no keeper line needs erasing later." },
      { name: "Shape the rolling chassis", text: "Wrap the guides with exactly two wheels, one triangular frame, the slanted front fork, rounded fuel tank, stepped seat, and exactly two close-fitting fenders while preserving every hardware route.", tip: "Rotate the page for the longest tank and seat curves, then compare the open triangles below them. Keep both wheels the same diameter and let each fender follow its tire with a steady strip of paper between the arcs." },
      { name: "Fit the engine and controls", text: "Clarify one single-cylinder engine, one round headlamp, one compact handlebar, the low exhaust pipe, the chain route, both hubs, and simple foot controls on their reserved guides.", tip: "Work from the large engine case outward and trace each connection with your finger before darkening it. Let frame tubes stop at the engine case, the fork stop at the front hub, and the chain disappear naturally behind both hubs." },
      { name: "Build the mechanical rhythm", text: "Add simplified spokes to both wheels, modest tire tread, engine fins, two cable curves, chain links, and the established broken graphite shadow without changing the side-view proportions.", tip: "Place a few evenly spaced spoke directions first, then fill the gaps instead of trying to count around the wheel in one pass. Keep the tread and engine fins irregular enough to feel handmade, but organized enough to read at thumbnail size." },
      { name: "Layer the road-worn color", text: "Glaze navy over the established tank and fenders, rust over the seat, cool silver gray over the engine and exhaust, and warm brown over the tire sidewalls while preserving graphite texture and open paper highlights.", tip: "Pull two light pencil layers along each form rather than pressing hard at once. Leave narrow paper gaps on the tank crown, headlamp rim, seat edge, engine case, and exhaust so the dark machine keeps its volume." },
      { name: "Tune the classic finish", text: "Strengthen selected keeper contours, deepen the existing mechanical hatching and shadow, balance the established colors, clarify small highlights, and soften only pale guides that distract.", tip: "Count two wheels, two fenders, one tank, one seat, one engine, one headlamp, one exhaust, and one chain before stopping. Change the colors if you like, but preserve the same wheel spacing, frame connections, and readable side-view silhouette.", image: true }
    ]
  },
  {
    slug: "vintage-wingback-chair",
    day: "002",
    date: "Sunday, April 26",
    isoDate: "2026-04-26",
    subject: "a vintage wingback chair",
    headlineSubject: "a vintage<br>wingback chair",
    shortSubject: "a vintage wingback chair",
    lessonTitle: "Let's draw a vintage wingback chair",
    description: "Learn how to draw a vintage wingback chair with a tall back, two wings, two rolled arms, one cushion, three visible legs, two tuft buttons, upholstery piping, graphite texture, and restrained color.",
    intro: "Build one vintage wingback chair from a tall back envelope and shallow seat box, then fit its two wings, two rolled arms, cushion, three visible legs, and two tuft buttons before layering fabric texture and quiet color. This honest archive lesson is a newly made 30-minute study in furniture proportion, overlap, and upholstery volume—not a claim about earlier visitors, comments, activity, or popularity.",
    time: 30,
    difficulty: "Challenge",
    accent: "#54767a",
    finished: "vintage-wingback-chair-finished-v1.jpg",
    finishedAlt: "Handmade graphite and restrained colored-pencil sketch of one vintage wingback chair in a three-quarter view with one tall dusty-teal back, exactly two side wings, exactly two rolled arms, one loose seat cushion, one front apron, exactly three visible warm-brown tapered legs, exactly two tuft buttons, ochre piping, directional fabric hatching, open paper highlights, and one broken graphite floor shadow",
    materials: ["Graphite pencil", "Drawing paper", "Kneaded eraser", "Optional dusty-teal, ochre, and warm-brown colored pencils"],
    materialNote: "Use graphite for the complete chair, both wings and arms, cushion, apron, three visible legs, two buttons, piping, fabric texture, and shadow. Add dusty teal, ochre, and warm brown only after every overlap and count is established.",
    tipLabel: "Sketch tip",
    steps: [
      { name: "Block the chair proportions", text: "Use pale graphite to place the tall back envelope, two side wings, shallow seat box, two arm routes, one cushion, front apron, exactly three visible leg routes, two button centers, piping paths, and one broken shadow footprint.", tip: "Compare the back height with the full seat width before adding detail. Reserve the arms and cushion inside the envelope now, and stop the apron behind the front legs so no keeper line needs erasing later." },
      { name: "Shape the winged frame", text: "Wrap the guides with one tall upholstered back, exactly two side wings, the shallow seat box, and one visible front apron while preserving every arm, cushion, leg, button, piping, and shadow route.", tip: "Curve each wing gently toward the viewer and compare the open wedges beside the back. Keep the far wing a little narrower so the chair reads in three-quarter view without rigid perspective lines." },
      { name: "Fit the arms cushion and legs", text: "Add exactly two rolled arms, one removable seat cushion, and exactly three visible tapered wooden legs on the reserved routes.", tip: "Build each rolled arm from a cylinder-like front and a long upholstered rail. Let the cushion overlap the seat box, and keep the far rear leg partly tucked behind the chair side instead of inventing a fourth visible leg." },
      { name: "Stitch the upholstery details", text: "Place exactly two tuft buttons, simple piping, short directional fabric hatching, sparse wood grain on the three legs, and the established broken graphite shadow.", tip: "Curve the hatching around the back, arms, and cushion rather than shading straight across them. Keep the two buttons modest and the piping continuous enough to describe the form without turning decorative." },
      { name: "Layer the vintage color", text: "Glaze dusty teal across the established upholstery, add restrained ochre to the piping, warm brown to the three legs, and preserve graphite texture and open paper highlights.", tip: "Build two light pencil layers in the direction of the fabric hatching. Leave the cushion crown, arm rolls, and wing edges lighter so the chair keeps volume without becoming polished illustration." },
      { name: "Settle the chair finish", text: "Strengthen selected keeper contours, deepen the existing fabric values and shadow, balance the established colors, clarify highlights, and soften only pale construction that distracts.", tip: "Count two wings, two arms, one cushion, three visible legs, and two tuft buttons before stopping. Change the upholstery color if you like, but preserve the same furniture overlaps and three-quarter stance.", image: true }
    ]
  },
  {
    slug: "dragonfly-on-a-cattail",
    day: "102",
    date: "Tuesday, August 4",
    isoDate: "2026-08-04",
    subject: "a dragonfly on a cattail",
    headlineSubject: "a dragonfly<br>on a cattail",
    shortSubject: "a dragonfly on a cattail",
    lessonTitle: "Let's draw a dragonfly on a cattail",
    description: "Learn how to draw a dragonfly on a cattail with four transparent wings, six bent legs, a segmented abdomen, simple wing veins, graphite texture, and restrained summer color.",
    intro: "Balance one right-facing dragonfly against a vertical cattail, spread four transparent wings into a readable open fan, and route six bent legs before adding delicate vein cells and a little summer color. The 25-minute study turns light construction into a detailed insect sketch without polishing away the graphite or paper.",
    time: 25,
    difficulty: "Medium",
    accent: "#2f7880",
    finished: "dragonfly-on-a-cattail-finished-v1.jpg",
    finishedAlt: "Handmade graphite and restrained colored-pencil sketch of one right-facing dragonfly perched on one vertical cattail stem, with exactly four separately visible transparent wings, exactly six bent legs including four touching the stem and two balancing below the thorax, one rounded head, one teal thorax, one tapered teal segmented abdomen, simplified wing-cell veins, one rust-brown cattail seed head, one olive stem, open paper highlights, and one broken graphite shadow",
    materials: ["Graphite pencil", "Drawing paper", "Kneaded eraser", "Optional teal, rust-brown, and olive colored pencils"],
    materialNote: "Use graphite for the complete cattail, body, four wings, six legs, veins, bands, texture, and shadow. Add the restrained teal, rust, and olive only after every wing and leg route is established.",
    tipLabel: "Sketch tip",
    steps: [
      { name: "Map the perch and wing span", text: "Use pale graphite to place the vertical cattail and seed head, the dragonfly's head-thorax-abdomen axis, exactly four separate wing envelopes, exactly six bent leg routes, and a broken shadow footprint.", tip: "Ghost the four wing arcs before touching down and leave clear paper gaps between them. Reserve the stem gaps behind the thorax and four contacting legs now so no later keeper line needs erasing." },
      { name: "Shape the body and cattail", text: "Wrap the guides with one cattail stem and seed head plus the rounded head, compact thorax, and tapered segmented abdomen, preserving all four wing envelopes and six leg routes.", tip: "Simplify the insect into three body masses first, then compare the long empty wedge between the lower wing and abdomen. Keep the seed head tall enough to balance the dragonfly without crowding it." },
      { name: "Set four wings and six legs", text: "Clarify exactly four transparent wing contours and six bent legs: four touch the stem while two balance below the thorax on their reserved routes.", tip: "Count the wings and legs before darkening. Rotate the page for the longest wing pulls, and stop the stem behind each contacting leg so the grip reads through overlap rather than cleanup." },
      { name: "Build the light wing texture", text: "Add a simplified wing-cell vein rhythm, abdomen bands, short graphite hatching on the cattail seed head, and the established broken shadow without changing any counts.", tip: "Draw a few long support veins first, then bridge them with sparse shorter cells. Let some cells stay larger than others so the wings feel observed and handmade instead of mechanically netted." },
      { name: "Glaze the summer color", text: "Layer restrained teal over the established body, rust brown over the seed head, and olive over the stem while leaving the four wings mostly open paper.", tip: "Pull color along the body segments and stem, using two light layers instead of one hard pass. Keep the wing membranes nearly white so the graphite veins remain airy at thumbnail size." },
      { name: "Let the dragonfly shimmer", text: "Strengthen selected keeper contours, deepen the existing vein and body hatching, balance the established colors and shadow, clarify highlights, and soften only pale guides that distract.", tip: "Count four wings, six legs, one seed head, and one segmented abdomen before stopping. Change the accent colors if you like, but keep the open wing gaps and the same stable perch easy to read.", image: true }
    ]
  },
  {
    slug: "vintage-sewing-machine",
    day: "003",
    date: "Monday, April 27",
    isoDate: "2026-04-27",
    subject: "a vintage sewing machine",
    headlineSubject: "a vintage<br>sewing machine",
    shortSubject: "a vintage sewing machine",
    lessonTitle: "Let's draw a vintage sewing machine",
    description: "Learn how to draw a vintage sewing machine with an arched cast-iron body, handwheel, spool and thread path, needle, presser foot, folded fabric, wooden base, graphite texture, and restrained colored pencil.",
    intro: "Build one old cast-iron sewing machine around a simple base box and arched body, then connect its handwheel, top spool, thread path, needle, and fabric before layering heirloom color. This honest archive lesson is a newly made 30-minute study in mechanical overlap, surface texture, and three-quarter perspective—not a claim about earlier visitors, comments, activity, or popularity.",
    time: 30,
    difficulty: "Challenge",
    accent: "#6a363f",
    finished: "vintage-sewing-machine-finished-v1.jpg",
    finishedAlt: "Handmade graphite and restrained colored-pencil sketch of one unbranded vintage sewing machine in a three-quarter side view with one charcoal-and-burgundy arched cast-iron body, one large right handwheel, one top spool, a visible thread path, one brass needle and presser foot, one folded muted-blue fabric rectangle, one wordless brass ornamental panel, one warm-brown wooden platform, open paper highlights, and one broken graphite tabletop shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional charcoal, burgundy, brass, muted-blue, and warm-brown colored pencils"],
    materialNote: "Use graphite for the complete machine, wheel, spool, thread path, needle, presser foot, fabric, platform, ornament, and shadow. Add the limited heirloom colors only after every mechanical overlap is established.",
    tipLabel: "Sketch tip",
    steps: [
      { name: "Block the machine footprint", text: "Use pale boxes and curves to place the wooden platform, arched body, needle column, right handwheel, top spool, thread route, needle, presser foot, folded fabric, ornament panel, and broken shadow.", tip: "Ghost the platform diagonals first and reserve the handwheel and fabric footprints before shaping the machine. Body edges should stop behind the wheel, while platform lines stop beneath the fabric instead of being erased later." },
      { name: "Shape the iron silhouette", text: "Wrap the guides with the high arched cast-iron body, vertical needle column, visible side thickness, and shallow wooden platform while preserving every mechanical and fabric reservation.", tip: "Compare the open arch beneath the arm with the negative space around the needle column. Keep the broad body slightly asymmetrical so it feels observed and hand drawn rather than mechanically mirrored." },
      { name: "Connect wheel thread and needle", text: "Clarify one large right handwheel, one top spool, one continuous thread path, the needle and presser foot, and the folded fabric passing under the foot.", tip: "Follow the thread route with your finger from spool to needle and check that the wheel stays behind the body edge. Let the fabric cover only the platform gap you reserved in the first frame." },
      { name: "Hatch the workshop details", text: "Add a simple wordless ornamental panel, short curved graphite hatching on the metal, wood-grain marks on the base, two modest fabric folds, and the established broken shadow.", tip: "Curve the body hatches around the iron arch and pull the wood grain along the platform planes. Keep the ornament broad and sparse so it suggests an heirloom finish without becoming lettering." },
      { name: "Layer the heirloom color", text: "Add charcoal and burgundy to the iron, tiny brass accents to established hardware, muted blue to the fabric, and warm brown to the wooden platform while preserving graphite and paper highlights.", tip: "Build two dry pencil layers instead of pressing hard at once. Keep the brightest paper gaps along the metal crown, wheel rim, fabric fold, and upper platform edge so the dark machine remains readable." },
      { name: "Set the heirloom finish", text: "Strengthen selected keeper contours, deepen the existing graphite values and shadow, balance the established colors, clarify highlights, and soften only pale guides that distract.", tip: "Count one machine, one handwheel, one spool, one thread path, one needle and foot, one fabric piece, and one wooden base. Change the fabric or metal colors if you like, but preserve the same mechanical connections.", image: true }
    ]
  },
  {
    slug: "chain-links-in-perspective",
    day: "101",
    date: "Monday, August 3",
    isoDate: "2026-08-03",
    subject: "five chain links in perspective",
    headlineSubject: "five chain links<br>in perspective",
    shortSubject: "a five-link chain",
    lessonTitle: "Let's draw five chain links in perspective",
    description: "Learn how to draw a chain in perspective using five interlocking oval links, four over-under connections, graphite hatching, restrained colored pencil, and a broken cast shadow.",
    intro: "Lay five link envelopes along one rising diagonal, alternate face-on and edge-on turns, and reserve every over-under break before the contours darken. The repeated ellipses make a useful 25-minute study of perspective, overlap, and cool metal texture without demanding perfect geometry.",
    time: 25,
    difficulty: "Medium",
    accent: "#5b7084",
    finished: "chain-links-in-perspective-finished-v1.jpg",
    finishedAlt: "Handmade graphite and restrained colored-pencil sketch of exactly five heavy oval chain links rising diagonally, with three face-on rings, two edge-on rings, four clear over-under interlocks, five visible openings, short curved graphite hatching, cool blue-gray metal, warm-ochre reflected accents, open paper highlights, and one broken cast shadow",
    materials: ["Graphite pencil", "Drawing paper", "Kneaded eraser", "Optional blue-gray and warm-ochre colored pencils"],
    materialNote: "Use graphite for all five link envelopes, four interlocks, metal thickness, hatching, and shadow. Add blue-gray and warm ochre only after the five openings and every over-under break read clearly.",
    tipLabel: "Sketch tip",
    steps: [
      { name: "Map five link envelopes", text: "Draw one rising diagonal, then place exactly five pale oval envelopes along it: three broader face-on links alternating with two narrow edge-on links. Add five inner openings, four overlap windows, and a broken shadow footprint.", tip: "Ghost each oval before touching down and count the five openings, not just the outside shapes. Keep the two edge-on envelopes narrow enough to turn in space while leaving room for visible metal thickness." },
      { name: "Shape the alternating links", text: "Wrap each guide with a thick outer and inner ring, preserving all five openings and the alternating face-on, edge-on rhythm from lower left to upper right.", tip: "Rotate the page for the long ellipse pulls and compare opposite sides of each ring. Small asymmetries help the chain feel hand drawn, but each inner opening should echo its outside contour." },
      { name: "Lock the interlinks", text: "Clarify all four over-under connections by stopping rear contours at the reserved overlap windows, then add visible inner-rim bands without changing the five-link layout.", tip: "Trace the chain path with one finger from the large lower-left ring to the small upper-right ring. At every junction, one edge must pass cleanly in front while the other disappears behind." },
      { name: "Hatch the metal weight", text: "Add short curved graphite hatching to the established link surfaces, deepen the interior occlusion shadows, and strengthen the broken cast shadow beneath the chain.", tip: "Curve each hatch around the local ring rather than shading straight across it. Keep the darkest graphite beside the four overlaps and under the lower edges so the links retain open paper highlights." },
      { name: "Glaze the cool metal", text: "Layer restrained blue-gray colored pencil over the existing metal planes, add a few warm-ochre reflected accents, and preserve the brightest paper gaps along the upper edges.", tip: "Pull color in the same direction as the curved graphite hatching and build two light layers. The warm accent should stay secondary to the cool gray so the chain still reads as one material." },
      { name: "Set the chain finish", text: "Strengthen selected keeper contours, deepen the existing graphite values and broken shadow, clarify highlights inside the established color areas, and soften only pale construction that distracts.", tip: "Count exactly five links, five openings, and four interlocks before stopping. You can change the metal colors or the chain's tilt, but keep the alternating turns and over-under logic easy to follow.", image: true }
    ]
  },
  {
    slug: "brass-candlestick-with-candle",
    day: "004",
    date: "Tuesday, April 28",
    isoDate: "2026-04-28",
    subject: "a brass candlestick with a candle",
    headlineSubject: "a brass candlestick<br>with a candle",
    shortSubject: "a brass candlestick",
    lessonTitle: "Let's draw a brass candlestick with a candle",
    description: "Learn how to draw a brass candlestick with a candle using a vertical axis, stacked ellipses, a turned stem, short candle, two wax drips, graphite reflections, and restrained ochre pencil.",
    intro: "Stack pale ellipses along one vertical axis, connect them into a turned brass candlestick, and seat a short candle in the cup before adding two wax drips, reflected values, and a small warm flame. This honest archive lesson is a newly made study in ellipse alignment, metal value bands, and controlled symmetry—not a claim about earlier visitors, comments, activity, or popularity.",
    time: 20,
    difficulty: "Easy-medium",
    accent: "#9b7637",
    finished: "brass-candlestick-with-candle-finished-v1.jpg",
    finishedAlt: "Handmade graphite and restrained colored-pencil sketch of one centered brass candlestick with a broad oval foot, stepped base, narrow turned stem, shallow candle cup, one short warm-cream candle, exactly two wax drips, one dark wick, one small amber flame, ochre-brass hatching, open paper highlights, and one broken graphite tabletop shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional ochre, warm-cream, and amber colored pencils"],
    materialNote: "Use graphite for the full axis, ellipse stack, brass silhouette, candle, wick, flame, two drips, turning bands, reflected values, and shadow. Add ochre, warm cream, and amber only after every contour is established.",
    tipLabel: "Sketch tip",
    steps: [
      { name: "Stack the ellipse guides", text: "Draw one pale vertical axis, then align ellipse and box guides for the wide foot, stepped base, narrow stem, shallow candle cup, and short candle.", tip: "Ghost each ellipse two or three times before touching down and keep the axis visible through every center. Reserve the candle footprint inside the cup so you do not finish a rim line that will be hidden." },
      { name: "Turn the brass silhouette", text: "Connect the guides into one broad oval foot, stepped base, narrow turned stem, and shallow candle cup while preserving the pale candle guide.", tip: "Compare the left and right negative spaces around the stem instead of measuring every curve. Let small asymmetries remain so the metal feels drawn by hand rather than mechanically mirrored." },
      { name: "Seat the candle and flame", text: "Place one slightly irregular short candle inside the established cup, then add one dark wick and one small flame leaning gently to one side.", tip: "Stop the cup rim at the candle edges and do not draw the hidden arc through the wax. Use one simple outer flame shape first; its inner value can wait for the color pass." },
      { name: "Add wax and turning bands", text: "Refine the established contours, add exactly two modest wax drips, a few simple turning bands, and one broken graphite shadow beneath the foot.", tip: "Wrap each brass band around the same ellipse family and curve the drips down the candle cylinder. Keep band spacing varied so the stem reads as turned metal, not a stack of identical rings." },
      { name: "Shade brass and candle", text: "Layer graphite reflected values and restrained ochre across the candlestick, warm the existing candle and flame, preserve paper highlights, and deepen the established shadow.", tip: "Shade vertical stem planes with lengthwise strokes and ellipse planes with curved strokes. Leave narrow paper gaps beside the darkest graphite bands to suggest brass shine without glossy rendering." },
      { name: "Polish the brass glow", text: "Strengthen selected keeper edges, deepen the existing brass values and shadow, clarify highlights inside established forms, and soften only the pale guides that distract.", tip: "Count one candlestick, one candle, two wax drips, one wick, and one flame, then check that every ellipse still shares the central axis. Your brass tone can be warmer or cooler while the same stacked construction stays useful.", image: true }
    ]
  },
  {
    slug: "school-lunchbox-with-apple",
    day: "100",
    date: "Sunday, August 2",
    isoDate: "2026-08-02",
    subject: "a school lunchbox with an apple",
    headlineSubject: "a school lunchbox<br>with an apple",
    shortSubject: "a school lunchbox",
    lessonTitle: "Let's draw a school lunchbox with an apple",
    description: "Learn how to draw a school lunchbox with an apple using a stable three-quarter box, open lid, three compartments, sandwich triangles, plain drink carton, hardware, graphite texture, and restrained colored pencil.",
    intro: "Open one school lunchbox toward the viewer, reserve three food compartments, and pack them with sandwich triangles, a crisp apple, and a plain drink carton before layering dusty blue, muted red, and warm ochre pencil. The box is a useful perspective exercise, but the familiar lunch inside keeps the 25-minute study playful and easy to read.",
    time: 25,
    difficulty: "Medium",
    accent: "#52718b",
    finished: "school-lunchbox-with-apple-finished-v1.jpg",
    finishedAlt: "Handmade graphite and restrained colored-pencil sketch of one open dusty-blue school lunchbox in a three-quarter view with an upright rounded lid, centered handle, exactly two front latches, three interior compartments, exactly two stacked sandwich triangles, one muted-red apple with one stem and leaf, one plain folded-top drink carton, paper highlights, and a broken graphite cast shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional dusty-blue, muted-red, warm-ochre, and pale-neutral colored pencils"],
    materialNote: "Use graphite to solve the open box, compartments, handle, two latches, sandwich, apple, carton, seams, and shadow first. Add restrained colored pencil only after every food silhouette and overlap is established.",
    tipLabel: "Sketch tip",
    steps: [
      { name: "Block the open box", text: "Use pale boxes and diagonals to place the shallow lunchbox base, upright lid, and interior rim, then immediately map exactly two sandwich triangles, one apple with its stem and leaf, and one folded carton before stopping the three compartment boundaries at those food silhouettes.", tip: "Ghost the two long perspective edges before touching down, then keep every food footprint pale but complete. A compartment divider may stop behind the sandwich, apple, or carton; it should never cross a food shape and become a line you must erase later." },
      { name: "Shape the shell and hardware", text: "Wrap the guides with the loose lunchbox contour, preserve all three pale food silhouettes, stop each compartment keeper line before the food, and add one centered lid handle plus exactly two front latches.", tip: "Rotate the page so each long box edge comes from one relaxed pull. Before darkening a divider, trace it with your finger and make sure it ends at the reserved sandwich, apple, or carton edge." },
      { name: "Pack the lunch", text: "Strengthen the two already mapped sandwich triangles, apple, and folded carton, then add their visible overlap edges without changing the footprints or erasing any compartment keeper line.", tip: "Work from front to back: apple and sandwich edges first, then the carton planes that remain visible. Squint at the negative spaces between the three foods so none merges with the rim." },
      { name: "Clarify edges and textures", text: "Refine only the established contours, add box corner seams, sandwich filling edges, apple dimples, carton fold planes, and the broken cast shadow beneath the lunchbox.", tip: "Curve short apple strokes around the fruit and stop every sandwich line at an overlap. Keep the carton plain and use just enough fold detail to explain its top without turning it into packaging design." },
      { name: "Layer restrained color", text: "Add dusty blue to the lunchbox, muted red to the apple, warm ochre to the sandwich, and pale neutral pencil to the carton while preserving white paper highlights.", tip: "Pull colored-pencil strokes along each surface plane: long strokes across the lid, shorter curved strokes around the apple, and diagonal strokes across the bread. Build two light layers instead of one waxy pass." },
      { name: "Set the lunchbox finish", text: "Strengthen selected keeper contours, deepen the existing graphite shadows, clarify highlights inside the established color areas, and soften only the pale construction that distracts.", tip: "Count one box, one handle, two latches, three compartments, two sandwich triangles, one apple, and one carton. Change the lunch colors or fillings if you like, but keep the overlap plan clear enough to draw through.", image: true }
    ]
  },
  {
    slug: "acorn-with-oak-leaves",
    day: "005",
    date: "Wednesday, April 29",
    isoDate: "2026-04-29",
    subject: "an acorn with oak leaves",
    headlineSubject: "an acorn with<br>oak leaves",
    shortSubject: "an acorn sprig",
    lessonTitle: "Let's draw an acorn with oak leaves",
    description: "Learn how to draw an acorn with oak leaves using an egg-shaped nut, overlapping cup cap, short twig, two lobed leaf silhouettes, scale rows, branching veins, graphite texture, and restrained colored pencil.",
    intro: "Build one plump acorn around an egg shape, overlap it with a broad scaled cap, and tuck exactly two oak leaves behind the nut before adding veins, woodland texture, and restrained autumn color. This honest archive lesson is a newly made study in botanical silhouettes, staggered texture, and clean overlap—not a claim about earlier visitors, comments, activity, or popularity.",
    time: 20,
    difficulty: "Easy-medium",
    accent: "#7c7640",
    finished: "acorn-with-oak-leaves-finished-v1.jpg",
    finishedAlt: "Handmade graphite and restrained colored-pencil sketch of one plump acorn tilted toward the lower left with one warm-umber scaled cup cap, one short twig, exactly two lobed muted-olive oak leaves, branching veins, ochre shell hatching, open paper highlights, and one broken graphite cast shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional warm-umber, ochre, and muted-olive colored pencils"],
    materialNote: "Use graphite for the complete acorn, cap, twig, two leaves, veins, texture, values, and shadow. Add warm umber, ochre, and muted olive only after every contour and overlap is established.",
    tipLabel: "Sketch tip",
    steps: [
      { name: "Place the acorn sprig", text: "Draw one pale tilted acorn egg, add the cap ellipse and overlap, then map one short twig, exactly two leaf envelopes with central vein axes, and one broken shadow footprint.", tip: "Compare the acorn width with the cap width before darkening anything. Reserve the cap footprint over the nut and the nut footprint over the rear leaf so you do not finish detail that will be hidden." },
      { name: "Shape the nut and leaves", text: "Wrap the guides with the complete acorn body, the overlapping cup cap, the short twig, and two clearly different lobed oak-leaf silhouettes.", tip: "Simplify each leaf edge into five or six broad lobes instead of many tiny waves. Trace the outside contour and make sure the rear leaf stops cleanly at the acorn rather than showing through it." },
      { name: "Build scales and veins", text: "Add staggered rows of broad cup-cap scales, the small acorn tip, both leaf midribs and branching side veins, and the visible joints where the stems meet the twig.", tip: "Start the cap pattern with one curved row, then offset the next row like shingles. Pull every side vein from the midrib toward a lobe so the interior structure explains the leaf edge." },
      { name: "Map the woodland texture", text: "Add a few leaf-edge creases, curved hatching on the acorn, short twig-grain marks, and the established broken cast shadow.", tip: "Curve the nut hatching around its round body and vary the gaps instead of filling the whole surface. Stop twig and vein lines whenever the cap or acorn overlaps them." },
      { name: "Shade the autumn forms", text: "Layer graphite into the established forms, add warm umber and ochre to the acorn and cap, muted olive to both leaves, preserve paper highlights, and deepen the broken shadow.", tip: "Pull colored-pencil strokes along the nut and outward from each leaf midrib. Leave small open-paper gaps between layers so the colors keep their dry sketchbook texture." },
      { name: "Settle the oak-sprig finish", text: "Strengthen selected keeper contours, deepen the established graphite and colored-pencil values, clarify paper highlights, and soften only the pale construction guides that distract.", tip: "Count one acorn, one cap, one twig, and two oak leaves, then check that every vein still meets a visible lobe. Your scale shapes and autumn colors can vary while the same overlap plan stays useful.", image: true }
    ]
  },
  {
    slug: "lobster-with-raised-claw",
    day: "099",
    date: "Saturday, August 1",
    isoDate: "2026-08-01",
    subject: "a lobster with one raised claw",
    headlineSubject: "a lobster with<br>one raised claw",
    shortSubject: "a raised-claw lobster",
    lessonTitle: "Let's draw a lobster with one raised claw",
    description: "Learn how to draw a lobster with one raised claw using a diagonal body axis, two asymmetrical claws, seven visible walking legs, two antennae, a segmented abdomen, tail fan, shell texture, graphite, and restrained colored pencil.",
    intro: "Set one lobster on a lively diagonal, lift its larger claw, and build the hard shell from broad construction shapes before adding jointed legs, long antennae, texture, and restrained coral pencil. The useful challenge is keeping seven visible walking legs clear while the raised claw naturally hides the eighth, so the anatomy feels believable without crowding the sketch.",
    time: 25,
    difficulty: "Medium",
    accent: "#c45f49",
    finished: "lobster-with-raised-claw-finished-v1.jpg",
    finishedAlt: "Handmade graphite and restrained colored-pencil sketch of one lobster in a diagonal top view with one large raised claw, one smaller lower claw, exactly seven visible walking legs with one front leg hidden behind the raised claw, two long antennae, two dark eyes, one segmented coral-red abdomen, one five-part muted-orange tail fan, sparse shell spots, cream paper highlights, and one broken graphite shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional coral-red, muted-orange, and cream colored pencils"],
    materialNote: "Use graphite for the complete lobster, claws, seven visible legs, antennae, shell bands, texture, values, and shadow. Add coral red, muted orange, and cream only after every visible contour, joint, and overlap is established.",
    tipLabel: "Sketch tip",
    steps: [
      { name: "Set the lobster gesture", text: "Draw a pale diagonal center axis, place a long carapace oval and abdomen blocks on it, then map one raised and one lower claw, exactly seven visible leg routes, two antennae, a five-part tail-fan envelope, and one broken shadow footprint.", tip: "Ghost the diagonal before touching down, then compare the empty paper between each claw and the body. Reserve the raised claw's overlap so one hidden front leg does not need to be drawn and erased later." },
      { name: "Shape the shell and claws", text: "Wrap the guides with the complete carapace, two distinct claw silhouettes, the segmented abdomen edge, and all five tail-fan lobes while keeping the leg and antenna routes visible.", tip: "Build each claw from two large opposing wedges instead of drawing every tooth at once. Trace the body silhouette from claw to tail and make sure the abdomen narrows steadily before it opens into the fan." },
      { name: "Add legs and shell joints", text: "Place two eyes, trace both long antennae, draw exactly seven visible walking legs around the reserved raised-claw overlap, and add the abdomen bands and joints inside both claws.", tip: "Draw each leg from the body outward in two or three angled segments, then turn the page to pull the antenna curves from base to tip. Count three legs below the raised claw and four on the opposite side." },
      { name: "Map the shell texture", text: "Add a few shell spots, joint creases, tail-fan veins, short contour hatching, and the established broken cast shadow beneath the body.", tip: "Follow the shell curve with short grouped marks and leave larger quiet patches between them. Stop every hatch at an existing joint or edge so the hard plates remain readable." },
      { name: "Shade the coral shell", text: "Layer graphite into the established shell planes, add coral red and muted orange to the carapace, claws, abdomen, legs, and tail fan, preserve cream paper highlights, and deepen the broken shadow.", tip: "Pull colored-pencil strokes along each shell plate instead of across the joints. Keep the eyes and deepest overlaps darkest, then leave narrow paper gaps on the claws and abdomen for a dry, tactile shine." },
      { name: "Settle the raised-claw finish", text: "Strengthen selected keeper contours, deepen the established graphite and colored-pencil values, clarify cream highlights, and soften only the pale construction guides that distract.", tip: "Count one lobster, two claws, seven visible legs, two antennae, and five tail-fan lobes, then trace the silhouette without finding a jump. Your shell spots and coral tones can vary while the same diagonal construction stays useful.", image: true }
    ]
  },
  {
    slug: "barn-owl-on-a-fence-post",
    day: "006",
    date: "Thursday, April 30",
    isoDate: "2026-04-30",
    subject: "a barn owl on a fence post",
    headlineSubject: "a barn owl<br>on a fence post",
    shortSubject: "a perched barn owl",
    lessonTitle: "Let's draw a barn owl on a fence post",
    description: "Learn how to draw a barn owl on a fence post using a tilted head oval, body egg, heart-shaped facial disk, folded wings, eyes, beak, talons, feather groups, wood grain, graphite, and restrained colored pencil.",
    intro: "Balance one quiet barn owl over a square fence post, then build its heart-shaped face, folded wings, talons, broad feather rhythms, and weathered perch before adding restrained color. This honest archive lesson is a newly made study in animal symmetry, soft texture, and believable gripping feet—not a claim about earlier visitors, comments, activity, or popularity.",
    time: 25,
    difficulty: "Medium",
    accent: "#9a6b48",
    finished: "barn-owl-on-a-fence-post-finished-v1.jpg",
    finishedAlt: "Handmade graphite and restrained colored-pencil sketch of one front-facing barn owl with a gently tilted head, one cream heart-shaped facial disk, two dark eyes, one small hooked beak, two folded warm-tan and muted-rust wings, two taloned feet gripping a weathered square fence post, sparse grass, paper highlights, and one broken graphite shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional warm-tan, muted-rust, and cream colored pencils"],
    materialNote: "Use graphite for the complete owl, facial disk, wings, eyes, beak, talons, post, grass, feather marks, values, and shadow. Add warm tan, muted rust, and cream only after every contour and overlap is established.",
    tipLabel: "Sketch tip",
    steps: [
      { name: "Balance the owl and post", text: "Draw a pale tilted head oval over a centered body egg, add a face axis and two folded-wing routes, then mark both feet, the square post top and sides, a low grass line, and one broken shadow footprint.", tip: "Measure the head against the body with your pencil and compare the empty paper on both sides. Keep the foot marks directly over the post top so the owl's weight feels supported from the first pass." },
      { name: "Shape the owl silhouette", text: "Wrap the guides with the complete owl contour, one heart-shaped facial disk, two folded wings, and the visible top and sides of the weathered fence post.", tip: "Simplify each wing into one long outer arc and one tucked inner edge. Reserve the post top beneath the feet instead of drawing finished wood grain where the talons will cover it." },
      { name: "Place the face and talons", text: "Add two eyes on the tilted face axis, one small hooked beak, simple brow planes, and two taloned feet curling over the established post top.", tip: "Place the eyes by comparing the paper gaps inside the heart shape, then draw each toe from ankle to claw in one curve. The feet should overlap the post edge rather than sit as flat symbols on top." },
      { name: "Map feathers and weathered wood", text: "Add broad facial feather rays, grouped wing and chest markings, a few post-grain cracks, sparse grass tufts, and the broken cast shadow.", tip: "Follow the feather direction with short grouped strokes and leave larger quiet areas between them. On the post, pull grain vertically and stop each line when it reaches a talon or the top plane." },
      { name: "Shade the quiet plumage", text: "Layer graphite into the established plumage, add warm tan and muted rust to the wings and wood, preserve cream paper in the facial disk, and deepen the grass and broken shadow.", tip: "Shade outward from the face and downward along the wings so the strokes describe form. Keep the eyes darkest, then stop before the chest and facial disk lose their pale paper glow." },
      { name: "Settle the watchful owl", text: "Strengthen selected keeper contours, deepen the established graphite and colored-pencil values, clarify cream highlights, and soften only the construction guides that distract.", tip: "Count one owl, two eyes, two folded wings, and two gripping feet, then trace the silhouette without finding a jump in the pose. Your feather spots and warm colors can vary while the same egg-and-heart construction stays useful.", image: true }
    ]
  },
  {
    slug: "suspension-bridge-in-perspective",
    day: "098",
    date: "Friday, July 31",
    isoDate: "2026-07-31",
    subject: "a suspension bridge in perspective",
    headlineSubject: "a suspension bridge<br>in perspective",
    shortSubject: "a suspension bridge",
    lessonTitle: "Let's draw a suspension bridge in perspective",
    description: "Learn how to draw a suspension bridge in perspective using a horizon, vanishing point, two portal towers, a receding deck, curved main cables, vertical suspenders, shoreline, water, reflection, graphite, and restrained colored pencil.",
    intro: "Build one suspension bridge from a horizon and receding deck wedge, then connect two portal towers with smooth cables and a steady rhythm of suspenders. The useful challenge is keeping every structural line aimed at the same depth while the graphite, rust-red pencil, and blue-gray water stay loose enough to feel like a sketch rather than a technical rendering.",
    time: 25,
    difficulty: "Medium",
    accent: "#9b5a49",
    finished: "suspension-bridge-in-perspective-finished-v1.jpg",
    finishedAlt: "Handmade graphite and restrained colored-pencil sketch of a generic suspension bridge in a low three-quarter perspective with two rust-red rectangular portal towers, one deck narrowing toward the right, two curved main suspension cables, a consistent rhythm of vertical suspenders, two anchor points, a low graphite shoreline, calm blue-gray water bands, paper highlights, and broken bridge reflections",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional rust-red and blue-gray colored pencils"],
    materialNote: "Use graphite for the perspective guides, towers, deck, cables, suspenders, shoreline, water, values, and reflection. Add rust red and blue gray only after every structural contour and overlap is established.",
    tipLabel: "Sketch tip",
    steps: [
      { name: "Set the bridge perspective", text: "Draw a pale horizon and mark a vanishing point on the right. Aim a deck wedge toward it, place two tower boxes across that wedge, then map two cable arcs, both anchors, the distant shoreline, broad water guides, and a broken reflection footprint.", tip: "Ghost the deck edges from left to right before touching down, then compare the empty wedges above and below the deck. Keep every long receding line aimed at the same point even if the final stroke stays pleasantly imperfect." },
      { name: "Build towers and deck", text: "Wrap the guides with two complete rectangular portal towers, the receding deck, both rail edges, and the two cable anchor points while leaving the cable arcs pale.", tip: "Draw the near tower first, then use its top and crossbar angles to size the far tower. Squint at the negative spaces inside both portals; they should feel related even though perspective makes the far one smaller." },
      { name: "Hang the cables", text: "Pull two smooth main cable arcs through the tower tops and anchors, then add a clear rhythm of vertical suspender lines from the established cables down to the deck.", tip: "Ghost each main cable from the shoulder and draw it in one relaxed pass. For the suspenders, start at the deck and stop exactly at the cable so the repeated lines feel attached instead of floating." },
      { name: "Add structure and water", text: "Add tower crossbars, a few deck seams, the low shoreline shapes, broad calm water bands, and one broken reflection beneath the bridge.", tip: "Rotate the page for the short crossbars, then keep shoreline and water marks broken where the solid towers and deck cover them. Wider gaps in the reflection will make the water read better than a dark mirrored copy." },
      { name: "Shade the span", text: "Layer graphite along the established bridge structure, add restrained rust-red pencil to the towers, deck, and cables, blue-gray pencil to the water, and preserve open paper highlights on cables and ripples.", tip: "Pull shading strokes along each structural member and follow the water horizontally. Leave narrow paper gaps between passes so the colored pencil keeps the tooth and does not turn into a smooth digital fill." },
      { name: "Finish the suspended span", text: "Strengthen selected keeper lines, deepen the established graphite and colored-pencil values, clarify the open-paper highlights, and soften only the perspective guides that distract.", tip: "Trace both cable routes from anchor to anchor, then check that every suspender reaches the deck and both towers still share the same perspective. Stop while pale construction and paper grain remain visible; your cable spacing and colors can vary without changing the bridge logic.", image: true }
    ]
  },
  {
    slug: "cast-iron-skillet-with-egg",
    day: "007",
    date: "Friday, May 1",
    isoDate: "2026-05-01",
    subject: "a cast-iron skillet with an egg",
    headlineSubject: "a cast-iron skillet<br>with an egg",
    shortSubject: "a skillet with an egg",
    lessonTitle: "Let's draw a cast-iron skillet with an egg",
    description: "Learn how to draw a cast-iron skillet with a fried egg using a three-quarter pan ellipse, wall depth, long handle, hanging hole, two rivets, egg white, yolk, graphite values, and restrained colored pencil.",
    intro: "Build one heavy skillet around a broad ellipse and long handle axis, reserve the egg's footprint before drawing the pan interior, then add the hardware, iron values, and pale-gold yolk. This honest archive lesson is a newly made study in ellipses, overlap, and material contrast—not a claim about earlier visitors, comments, activity, or popularity.",
    time: 20,
    difficulty: "Medium",
    accent: "#9d7840",
    finished: "cast-iron-skillet-with-egg-finished-v1.jpg",
    finishedAlt: "Handmade graphite and restrained colored-pencil sketch of one three-quarter cast-iron skillet viewed slightly from above with a broad oval bowl, visible wall depth, long handle angled to the upper right, one hanging hole, exactly two round handle rivets, one irregular fried egg with one pale-gold round yolk, a few pan wear marks, paper highlights, and one broken graphite cast shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional pale-gold colored pencil"],
    materialNote: "Use graphite for the complete pan, handle, egg, hardware, wear, values, and shadow. Add pale gold only after the egg white, yolk, rim, handle, hanging hole, and both rivets are established.",
    tipLabel: "Sketch tip",
    steps: [
      { name: "Set the skillet ellipse", text: "Draw one pale pan ellipse with a second curve for wall depth, then add the long handle axis and width, an irregular egg reserve with a round yolk guide, and a broken shadow footprint.", tip: "Ghost the ellipse several times from the shoulder before touching down. Compare the empty wedges on either side of the yolk reserve so the egg feels nested in the pan rather than pasted on later." },
      { name: "Build the heavy pan", text: "Wrap the guides with the complete skillet bowl, inner rim, visible wall depth, long handle, narrow neck, and hanging-hole contour while keeping the egg footprint open.", tip: "Rotate the page for the rim curves and pull each in one relaxed pass. Stop the inner-pan lines at the egg reserve instead of drawing detail that the egg would immediately cover." },
      { name: "Nest the fried egg", text: "Add one irregular fried-egg white contour and one round raised yolk inside the reserved pan area, preserving the existing skillet perspective.", tip: "Vary the white edge with a few large slow waves rather than many tiny bumps. Keep the yolk slightly above center so the surrounding negative spaces feel natural." },
      { name: "Add iron and egg details", text: "Place exactly two round rivets at the handle neck, add small rim accents, a few egg-white folds, and only a handful of restrained pan wear marks.", tip: "Count both rivets before moving on, then use short broken marks for the wear. Let the rim and handle carry the structure; too many scratches will flatten the dark iron." },
      { name: "Shade the iron and yolk", text: "Layer directional graphite into the established cast iron, add pale-gold pencil to the yolk, place soft graphite beneath the egg edges, preserve paper highlights, and deepen the broken cast shadow.", tip: "Curve graphite strokes with the pan wall and handle, then shade around the egg instead of across it. Leave open paper in the egg white so it stays visibly lighter than the iron." },
      { name: "Settle the breakfast sketch", text: "Strengthen the keeper contours and clarify the established pan, handle, hanging hole, two rivets, egg, wear marks, graphite values, pale-gold yolk, highlights, and broken shadow.", tip: "Trace the rim once, count one egg and two rivets, and check that the handle still meets the pan cleanly, then stop while the paper tooth shows. A utensil, bacon, toast, or countertop would turn this focused study into a different lesson.", image: true }
    ]
  },
  {
    slug: "anime-eyes-four-styles",
    day: "097",
    date: "Thursday, July 30",
    isoDate: "2026-07-30",
    subject: "anime eyes in four styles",
    headlineSubject: "anime eyes<br>in four styles",
    shortSubject: "a set of four anime eye pairs",
    lessonTitle: "Let's draw anime eyes four ways",
    description: "Learn how to draw anime eyes in four styles: soft rounded, sharp action, sleepy half-lidded, and surprised chibi, using lid shapes, iris placement, pupils, highlights, brows, lashes, and graphite shading.",
    intro: "Build four matched eye pairs on one practice page, then change the lid angle, iris size, brow shape, and line weight to create soft, focused, sleepy, and surprised expressions. Instead of treating anime eyes as one fixed formula, this lesson shows which small structural choices do the most work—and how to keep all eight eyes aligned without polishing away the pencil texture.",
    time: 25,
    difficulty: "Easy",
    accent: "#62627c",
    finished: "anime-eyes-four-styles-finished-v1.jpg",
    finishedAlt: "Handmade graphite pencil study of four matched pairs of anime eyes arranged in a two-by-two practice sheet: soft rounded eyes with gentle brows, sharp focused action eyes with angled brows, sleepy half-lidded eyes, and wide surprised chibi eyes, all with coordinated rightward pupils, open paper highlights, varied lash weight, iris hatching, visible construction traces, paper tooth, and soft broken graphite shadows",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional blending stump or folded tissue"],
    materialNote: "Use one graphite pencil for the guides, all eight lids and irises, expression details, values, and shadows. Keep the early layout pale, leave highlights as open paper, and use a stump or tissue only after every eye shape and iris pattern is established.",
    tipLabel: "Sketch tip",
    steps: [
      { name: "Map four eye pairs", text: "Arrange four pale horizontal baselines in a two-by-two practice layout. On each line, mark two eye centers, a shared lid height, and one light iris-placement circle for each eye.", tip: "Measure with your pencil rather than a ruler: compare the gap between each pair with one iris width, then check the empty paper around all four studies. Keep these marks light enough to erase later." },
      { name: "Shape four lid styles", text: "Wrap the guides with all eight upper and lower lids: a soft rounded pair, a sharper angled pair, a sleepy half-lidded pair, and a wide surprised pair.", tip: "Ghost each upper lid two or three times before drawing it in one relaxed arc. Let the upper lid carry most of the expression, and keep each lower lid lighter so the eyes do not become stiff outlines." },
      { name: "Fit the irises", text: "Add all eight iris circles, making the soft pair large, the sharp pair slightly cropped by the upper lids, the sleepy pair more deeply covered, and the surprised pair tall and open.", tip: "Turn the page for easier circles, then compare how much iris disappears under each upper lid. Matching the visible iris crop inside each pair matters more than making every circle perfect." },
      { name: "Aim pupils and highlights", text: "Place all eight pupils slightly toward the right side of the page, then reserve one simple open-paper highlight shape inside every established iris.", tip: "Set the pupil in one eye, slide your pencil horizontally to find its partner, and repeat for each pair. Keep the highlights on the same side so the gaze and light source do not wobble." },
      { name: "Set lashes and expressions", text: "Vary the existing upper-lid weight, add restrained lash groups and folds, then place gentle, angled, low, and lifted eyebrow pairs above the four studies.", tip: "Use pressure rather than repeated scratching to thicken a lid. Squint at the page: the four moods should read from lid and brow angles before you notice the iris detail." },
      { name: "Design the iris patterns", text: "Add simple inner iris rings, short radial hatch maps, and restrained lower-lid accents to the established eye shapes, giving each style a slightly different texture rhythm.", tip: "Pull the hatch marks outward from each pupil like short sun rays, leaving open gaps around the highlights. Rotate the page as you work so the marks follow the round iris instead of becoming vertical stripes." },
      { name: "Shade without flattening", text: "Layer graphite into the established irises and small lid shadows, keep the paper highlights bright, and add a very soft broken shadow beneath each eye study.", tip: "Darken the pupil first, then fade pressure outward through the iris. Stop before the whites turn gray; the contrast between clean paper and graphite is what keeps anime eyes lively." },
      { name: "Finish the four-eye study", text: "Strengthen selected keeper lines, deepen the established iris values and lid shadows, clarify the open-paper highlights, and lightly erase only the construction marks that distract.", tip: "Count four matched pairs and trace every gaze toward the page's right, then stop while pale guides and paper grain still show. You can combine the lid, brow, and iris choices differently in your own characters once the pair alignment stays convincing.", image: true }
    ]
  },
  {
    slug: "farm-windmill",
    day: "008",
    date: "Saturday, May 2",
    isoDate: "2026-05-02",
    updated: "2026-07-29",
    subject: "a farm windmill",
    headlineSubject: "a farm windmill",
    shortSubject: "an old farm windmill",
    lessonTitle: "Let's draw a farm windmill",
    description: "Learn how to draw a farm windmill using a circular twelve-blade rotor, center hub, tail vane, tapered four-legged lattice tower, cross bracing, small hardware, graphite values, and restrained colored pencil.",
    intro: "Build one old farm windmill around a pale rotor guide and a tapered tower, then map twelve light spokes before widening them into separate blades and bracing the four legs. This honest archive lesson is a newly made study in repeated angles and open spaces, not a claim about earlier visitors, comments, activity, or popularity.",
    time: 25,
    difficulty: "Medium",
    accent: "#5f7f8c",
    finished: "farm-windmill-finished-v1.jpg",
    finishedAlt: "Handmade graphite and restrained colored-pencil sketch of one tall American farm windmill in a slight three-quarter view with one circular steel-blue rotor containing exactly twelve broad blades, one centered hub with a rust-red cap, one rear tail arm and rust-red tail vane, one narrow gearbox, one tapered four-legged steel-blue lattice tower with clear X-bracing and four foot plates, several warm-ochre grass tufts, visible paper tooth, and one broken graphite cast shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional steel-blue, rust-red, and warm-ochre colored pencils"],
    materialNote: "Use graphite for the complete rotor, twelve blades, hub, tail, gearbox, tower, braces, hardware, grass, values, and shadow. Add steel blue, rust red, and warm ochre only after every contour and overlap is established.",
    tipLabel: "Sketch tip",
    steps: [
      { name: "Set the windmill geometry", text: "Draw a pale tapered tower trapezoid with four leg axes, then place one large rotor circle, a centered hub, the tail-arm axis and vane reserve, a low ground line, grass-cluster reserves, and a broken shadow footprint.", tip: "Ghost the rotor circle from the shoulder, then compare its center with the tower's top. Keep the leg axes light and check the two empty wedges beside the tower so the structure does not lean by accident." },
      { name: "Build the tower and divide the wheel", text: "Darken the center hub, rear tail arm and vane, narrow top gearbox, and four tapered tower legs, but leave the outer rotor circle pale. From the hub, map exactly twelve faint radial divisions to that guide.", tip: "Quarter the pale circle first, then split each quarter into three light spokes. Count twelve before moving on, and keep these lines soft because they guide the blades rather than becoming a hard finished rim." },
      { name: "Shape the blades and braces", text: "Widen each faint rotor division into one broad blade wedge, closing it with a short outer edge instead of tracing the whole circle. Then place clear X-braces between the established tower legs.", tip: "Work around the wheel one wedge at a time and count all twelve. Let the pale circle disappear between the short blade edges, then compare the open paper shapes between the braces instead of forcing machine-perfect symmetry." },
      { name: "Add the farm hardware", text: "Add one hub cap, short gearbox seams, tail-arm joints, tower foot plates, a low uneven grass line, several small grass tufts, and one broken cast shadow.", tip: "Keep the hardware marks shorter and darker than the structural lines. Build the shadow outward from the four foot plates, letting it break before it becomes a smooth digital-looking block." },
      { name: "Shade the weathered materials", text: "Model the established structure with graphite, add steel-blue pencil to the rotor and tower, rust red to the tail vane and hub cap, warm ochre to the grass, and preserve paper highlights.", tip: "Pull color along each metal member rather than scribbling across the lattice. Leave pale channels between the blade spokes and lift the pencil before the paper tooth disappears." },
      { name: "Settle the prairie windmill", text: "Strengthen the keeper contours and clarify the established twelve-blade rotor, hub, gearbox, tail vane, four-legged tower, braces, hardware, grass, restrained color, highlights, and broken shadow.", tip: "Count twelve blades and trace all four tower legs to their foot plates, then stop while the graphite grain remains visible. Your metal colors and grass rhythm can vary while the same circle-and-tower construction stays useful.", image: true }
    ]
  },
  {
    slug: "vintage-rotary-telephone",
    day: "096",
    date: "Wednesday, July 29",
    isoDate: "2026-07-29",
    subject: "a vintage rotary telephone",
    headlineSubject: "a vintage rotary<br>telephone",
    shortSubject: "a vintage rotary telephone",
    lessonTitle: "Let's draw a vintage rotary telephone",
    description: "Learn how to draw a vintage rotary telephone using a curved handset, sloped desk base, two cradle forks, ten-hole dial, finger stop, coiled cord, small hardware, graphite values, and restrained colored pencil.",
    intro: "Build one charming old desk telephone around a broad handset and sloped base, then place all ten dial holes and the coiled cord before adding value and restrained color. The useful challenge is keeping repeated circles evenly spaced while the handset, brass dial, and loose cord give the finished sketch plenty of personality.",
    time: 25,
    difficulty: "Medium",
    accent: "#79525a",
    finished: "vintage-rotary-telephone-finished-v1.jpg",
    finishedAlt: "Handmade graphite and restrained colored-pencil sketch of one three-quarter vintage rotary desk telephone with a curved muted-burgundy handset, two rounded end caps, two cradle forks, a sloped burgundy base, one muted-brass rotary dial with exactly ten charcoal finger holes, one blank center plate, one small finger stop, a charcoal cord with exactly two clear coils and one loose lower connecting curve, two brass screws, paper highlights, and one broken graphite cast shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional muted-burgundy, brass, and charcoal colored pencils"],
    materialNote: "Use graphite for the complete handset, base, ten-hole dial, cradle, cord, hardware, values, and shadow. Add muted burgundy, brass, and charcoal only after every contour and overlap is established.",
    tipLabel: "Sketch tip",
    steps: [
      { name: "Block the telephone geometry", text: "Map a pale sloped three-quarter base box, curved handset envelope with two end-cap ellipses, two cradle positions, one centered dial circle, a cord route with two loop reserves and one loose lower curve, and a broken shadow footprint.", tip: "Ghost the handset arc and the base's two long edges before touching down. Keep the dial centered on the sloped top and reserve the cord now so it has room to coil beside the phone." },
      { name: "Shape the handset and base", text: "Wrap the guides with the curved handset and two end caps, two cradle forks, sloped desk base, raised dial housing, rear ledge, and one cord following the reserved route.", tip: "Rotate the page for the handset curve and pull each base edge in one relaxed pass. Stop hidden lines where the handset meets the cradle and where the dial housing overlaps the top plane." },
      { name: "Build the rotary dial", text: "Add exactly ten evenly spaced finger holes, an inner ring, one blank center plate, and one small finger stop inside the established dial housing.", tip: "Mark the top, bottom, left, and right holes first, then fit the remaining six into the gaps. Count all ten before shading and leave the center plate completely blank." },
      { name: "Connect the telephone hardware", text: "Add mouthpiece and earpiece seam rings, cradle joints, base-panel seams, two small screws, exactly two clear cord loops with one loose lower connecting curve, and one broken graphite cast shadow.", tip: "Trace the cord once from handset to base and keep paper gaps inside both coils. Use short, darker marks for the screws and joints so they do not compete with the large silhouette." },
      { name: "Shade the bakelite and brass", text: "Model the established form with graphite, add muted burgundy to the handset and base, muted brass to the dial ring and small hardware, charcoal to the cord and deep accents, and preserve paper highlights.", tip: "Curve colored-pencil strokes around the handset and pull them with the base planes. Leave pale paper channels on the glossy edges instead of polishing the telephone into a smooth digital surface." },
      { name: "Settle the vintage telephone", text: "Strengthen the keeper contours and clarify the established handset, end caps, cradle, base, ten-hole dial, blank center plate, finger stop, two cord loops and lower curve, hardware, restrained colors, paper highlights, and broken shadow.", tip: "Count ten dial holes, two cradle forks, two cord coils, and two screws, then stop while the pencil grain remains visible. Numbers, a logo, desk props, or room scenery would turn this focused telephone study into a different lesson.", image: true }
    ]
  },
  {
    slug: "seated-mermaid-on-a-rock",
    day: "095",
    date: "Tuesday, July 28",
    isoDate: "2026-07-28",
    subject: "a mermaid",
    headlineSubject: "a mermaid",
    shortSubject: "a mermaid seated on a rock",
    lessonTitle: "Let's draw a mermaid seated on a rock",
    description: "Learn how to draw a mermaid seated on a rock using a full-body gesture, profile face, flowing hair, shell top, long S-curved tail, overlapping scales, two-lobed fin, graphite shading, and restrained colored pencil.",
    intro: "Build one seated mermaid around a simple full-body gesture, then keep both arms, the flowing hair, long tail, two-lobed fin, and low rock attached to those first guides. The useful challenge is balancing a readable character pose with a large scale rhythm, so the finished fantasy figure still feels attainable in one relaxed drawing session.",
    time: 25,
    difficulty: "Medium",
    accent: "#4d8f86",
    finished: "seated-mermaid-on-a-rock-finished-v1.jpg",
    finishedAlt: "Handmade graphite and restrained colored-pencil sketch of one left-facing mermaid seated sideways on a low blue-gray rock with a profile face, two visible arms and simplified hands, three broad waves of warm-brown hair, a coral two-shell top, one long sea-green S-curved tail covered in a large overlapping scale pattern, a two-lobed fin with directional rays, restrained rock cracks, paper highlights, and one broken graphite shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional sea-green, coral, warm-brown, and blue-gray colored pencils"],
    materialNote: "Use graphite for the complete mermaid, rock, scale pattern, fin rays, value, and shadow. Add sea green, coral, warm brown, and blue gray only after every silhouette, overlap, and surface detail is established.",
    tipLabel: "Sketch tip",
    steps: [
      { name: "Place the mermaid gesture", text: "Draw a pale left-facing head oval and face axis, ribcage and hip masses, upright spine, two arm routes with hand reserves, one long S-curved tail route ending in a two-lobed fin envelope, a broad hair reserve, and a low rock footprint.", tip: "Ghost the tail's long S-curve two or three times before touching down. Reserve the rock and hair at the same time so the pose fills the page without crowding the fin." },
      { name: "Shape the seated silhouette", text: "Wrap the guides with the profile head, neck, torso, two visible arms and simplified hands, hips flowing into the long tail, two-lobed fin, broad hair mass, and low rounded rock.", tip: "Rotate the page for the back, belly, and tail contours, then pull each in one relaxed pass. Break hidden body lines cleanly where the seated figure overlaps the rock." },
      { name: "Set the face and flowing hair", text: "Add one visible eye and eyebrow, the profile nose and closed smile, one ear, three broad flowing wave contours through the hair, and a simple top made from two shell-shaped cups.", tip: "Keep the eye close to the face axis and use the brow to carry the expression. Divide the hair into three large waves before considering any smaller strands." },
      { name: "Pattern the tail and rock", text: "Add a large overlapping scale pattern across the established tail, directional rays inside both fin lobes, restrained short cracks on the rock, and one broken graphite shadow beneath it.", tip: "Start the scales at the hip with a staggered row, then follow the tail's curve and let the pattern narrow naturally. Leave open paper between the rock cracks so the surface stays quiet." },
      { name: "Add sea color and soft value", text: "Model the established figure with graphite, add sea-green pencil to the tail and fin, muted coral to the shell top, blue gray to the rock, warm brown to the hair, and preserve paper highlights.", tip: "Pull colored-pencil strokes with each form instead of filling flat areas. Keep the tail darker along its lower edge and leave pale channels through the hair and fin." },
      { name: "Settle the mermaid finish", text: "Strengthen the keeper contours and clarify the established profile, two arms and hands, three broad hair waves, shell top, tail, overlapping scale pattern, two-lobed fin, rock cracks, restrained colors, highlights, and broken shadow.", tip: "Trace the tail from hip to both fin lobes, check that both hands still read, then stop while the pencil grain remains visible. Your hair, colors, and scale rhythm can vary while the same seated construction stays useful.", image: true }
    ]
  },
  {
    slug: "vintage-desk-globe",
    day: "009",
    date: "Sunday, May 3",
    isoDate: "2026-05-03",
    subject: "a vintage desk globe",
    headlineSubject: "a vintage<br>desk globe",
    shortSubject: "a vintage desk globe",
    lessonTitle: "Let's draw a vintage desk globe",
    description: "Learn how to draw a vintage desk globe using a tilted sphere, diagonal polar axis, curved meridian support, pivot knobs, pedestal and round base, simplified continents, coordinate curves, graphite values, and restrained vintage color.",
    intro: "Build one old-fashioned desk globe around a tilted circle and diagonal polar axis, then attach the meridian support, pivot hardware, pedestal, and base before mapping the curved surface. This honest archive lesson is a newly made sphere-and-stand study, not a claim about earlier visitors, comments, activity, or popularity.",
    time: 25,
    difficulty: "Medium",
    accent: "#5d7e82",
    finished: "vintage-desk-globe-finished-v1.jpg",
    finishedAlt: "Handmade graphite and restrained colored-pencil sketch of one three-quarter vintage desk globe with a dusty-teal sphere on a diagonal polar axis, simplified warm-ochre landmass silhouettes without labels, curved coordinate lines, a muted-brass meridian support with top and lower pivot knobs, short pedestal, stepped collar, low round base with concentric rings, paper highlights, and one broken graphite cast shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional dusty-teal, warm-ochre, muted-brass, and charcoal colored pencils"],
    materialNote: "Use graphite for the complete globe, stand, map shapes, coordinate curves, hardware, values, and shadow. Add dusty teal, warm ochre, muted brass, and charcoal only after every contour and overlap is established.",
    tipLabel: "Sketch tip",
    steps: [
      { name: "Set the globe's tilt", text: "Draw one pale globe circle with a diagonal polar axis, then place the outer meridian arc, two pivot reserves, one short centered pedestal, a round base footprint, and a broken shadow footprint.", tip: "Ghost the circle several times from the shoulder, then turn the page to draw the axis in one relaxed pass. Keep the support arc just outside the sphere so a clear paper channel remains between them." },
      { name: "Build the globe and stand", text: "Wrap the guides with the globe edge, complete meridian support, top and lower pivot knobs, short pedestal stem, stepped collar, and low round base.", tip: "Rotate the page for the support arc and base ellipses. Compare the two visible base edges as a pair, and stop hidden pedestal lines where the globe overlaps them." },
      { name: "Map the curved surface", text: "Add a small group of simplified continent silhouettes without text or borders, then bend a few latitude and longitude lines around the established sphere.", tip: "Treat each landmass as a simple torn-paper shape rather than a geography test. Curve every coordinate line toward the globe edge so the circle reads as a volume." },
      { name: "Add the vintage hardware", text: "Add small pivot caps, meridian edge bands, pedestal seams, concentric base rings, restrained hatching along a few map edges, and one broken graphite cast shadow.", tip: "Keep the hardware marks shorter and darker than the map lines. Follow the base ellipses when adding rings, and let the shadow break apart before it becomes a smooth digital-looking oval." },
      { name: "Shade the old-world materials", text: "Model the established form with graphite, add dusty teal to the ocean, warm ochre to the land, muted brass to the support and base, charcoal accents, and preserved paper highlights.", tip: "Pull colored-pencil strokes around the sphere instead of straight across it. Leave pale islands of paper in the ocean, metal, and base so the drawing keeps its handmade tooth." },
      { name: "Settle the vintage globe finish", text: "Strengthen the keeper contours and clarify the established globe, meridian support, pivot knobs, pedestal, base, continent shapes, coordinate curves, vintage color, paper highlights, and broken shadow.", tip: "Trace the diagonal axis from top pivot to lower pivot, check that no label has slipped into the map, then stop before the whole sphere becomes equally dark. Your land shapes and colors can vary while the sphere-and-stand construction stays useful.", image: true }
    ]
  },
  {
    slug: "horse-head-with-flowing-mane",
    day: "094",
    date: "Monday, July 27",
    isoDate: "2026-07-27",
    subject: "a horse head with a flowing mane",
    headlineSubject: "a horse head<br>with a flowing mane",
    shortSubject: "a horse head with a flowing mane",
    lessonTitle: "Let's draw a horse head with a flowing mane",
    description: "Learn how to draw a horse head with a flowing mane using a center axis, cranium oval, tapered muzzle, paired facial landmarks, four broad mane groups, graphite values, and restrained chestnut pencil.",
    intro: "Build one calm horse head around a simple center axis and tapered muzzle, then keep both ears, both eyes, both nostrils, and the swept mane attached to those first guides. Grouping the mane into four broad locks makes the result feel lively without turning the lesson into a strand-by-strand rendering exercise.",
    time: 30,
    difficulty: "Medium",
    accent: "#a56f4e",
    finished: "horse-head-with-flowing-mane-finished-v1.jpg",
    finishedAlt: "Handmade graphite and restrained chestnut colored-pencil sketch of one calm near-front horse head with a long tapered muzzle, two upright ears, two almond eyes, two nostrils, one mouth seam, a small forelock, four broad dark mane locks swept to the viewer's left, cropped neck, paper highlights, and one broken blue-gray graphite shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional chestnut and blue-gray colored pencils"],
    materialNote: "Use graphite for the complete horse, facial landmarks, mane groups, values, and shadow. Add chestnut and blue gray only after the head, muzzle, two ears, two eyes, two nostrils, forelock, and four mane groups are established.",
    tipLabel: "Sketch tip",
    steps: [
      { name: "Set the head axis", text: "Draw a pale center axis, cranium oval, and tapered muzzle wedge, then place two neck curves, exactly two ear guides, and a large left-side reserve for the flowing mane.", tip: "Ghost the center axis and muzzle taper before touching down. Compare the two empty cheek wedges on either side of the muzzle; keeping them close in size will steady the near-front view." },
      { name: "Wrap the horse silhouette", text: "Wrap the guides with the forehead, cheeks, long muzzle, exactly two ears, neck, forelock area, and the full left-swept mane boundary.", tip: "Rotate the page for the long cheek curves and break the neck edge where it passes behind the reserved mane. Keep the muzzle narrower than the cranium instead of drawing two stacked rectangles." },
      { name: "Place the horse's features", text: "Add exactly two almond eyes, two nostrils, one mouth seam, the jaw planes, and both ear interiors to the existing head.", tip: "Use the center axis to compare eye height and nostril spacing. Darken the upper eyelids more than the eyeballs so the gaze stays calm rather than glossy." },
      { name: "Sweep the mane into groups", text: "Divide the reserved mane into one forelock and exactly four broad flowing locks, keeping every lock attached to the same outer boundary.", tip: "Ghost each S-curve two or three times, then draw it in one relaxed pass. Vary the widths and leave slim paper channels between locks so the mane reads at thumbnail size." },
      { name: "Model the planes and color", text: "Shade the established face planes and mane with graphite, add restrained chestnut pencil to the head and neck, preserve paper highlights, and place one broken blue-gray shadow below.", tip: "Pull pencil strokes with the muzzle and neck instead of scribbling across them. Keep the mane darker than the face, then lift the pencil before the paper tooth disappears." },
      { name: "Settle the flowing finish", text: "Strengthen the keeper contours and clarify the established two ears, two eyes, two nostrils, mouth seam, forelock, four mane groups, graphite planes, restrained color, highlights, and shadow.", tip: "Count two ears, two eyes, two nostrils, one forelock, and four broad mane locks, then stop. Your mane rhythm and horse color can change while the same simple head construction stays useful.", image: true }
    ]
  },
  {
    slug: "graduation-cap",
    day: "010",
    date: "Monday, May 4",
    isoDate: "2026-05-04",
    subject: "a graduation cap",
    headlineSubject: "a graduation<br>cap",
    shortSubject: "a graduation cap",
    lessonTitle: "Let's draw a graduation cap",
    description: "Learn how to draw a graduation cap using one perspective diamond board, a soft fabric crown, center button, draped cord, five-part tassel, fabric folds, graphite values, and restrained navy and ochre colored pencil.",
    intro: "Build one graduation cap around a simple perspective diamond and soft crown, then reserve the tassel route before closing the board edges so every overlap stays believable. This honest archive lesson is a newly made perspective-and-fabric study, not a claim about earlier visitors, comments, activity, or popularity.",
    time: 20,
    difficulty: "Medium",
    accent: "#4f688a",
    finished: "graduation-cap-finished-v1.jpg",
    finishedAlt: "Handmade graphite and colored-pencil sketch of one three-quarter graduation cap with a deep-navy perspective diamond board, visible front and right thickness edges, soft navy fabric crown and curved lower band, one small warm-ochre center button, one ochre cord crossing the board and bending over the front-right corner, one hanging tassel with exactly five broad fringe groups, three crown folds, paper highlights, and one broken graphite cast shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional deep-navy and warm-ochre colored pencils"],
    materialNote: "Use graphite for the complete cap, perspective edges, crown, button, cord, tassel, fabric folds, and shadow. Add deep navy and warm ochre only after every contour and overlap is established.",
    tipLabel: "Sketch tip",
    steps: [
      { name: "Set the cap's perspective", text: "Draw one pale perspective diamond with a center cross, then place the crown block and curved lower band beneath it, reserve one cord route to the front-right corner, and mark the tassel and shadow footprints.", tip: "Ghost the diamond's four edges before touching down and compare opposite sides as pairs. Keep the cord route pale from center to corner so you will not finish board detail beneath it." },
      { name: "Build the board and crown", text: "Wrap the guides with one thin diamond board, showing its front and right thickness edges, then shape the soft crown and curved lower band beneath it.", tip: "Rotate the page for each long board edge and pull it in one relaxed pass. Stop the crown contours at the board instead of drawing fabric that the top permanently covers." },
      { name: "Drape the tassel", text: "Add one round center button, one cord following the reserved route over the front-right corner, one compact knot, and one hanging tassel with exactly five broad fringe groups.", tip: "Break the board edge cleanly where the cord crosses it, then draw the tassel first as one tapered envelope. Divide that envelope into five broad groups rather than dozens of hair-thin strands." },
      { name: "Fold the fabric", text: "Add exactly three soft fold lines to the existing crown, one lower band seam, clean overlap breaks around the cord, and a few light strand lines inside the established tassel.", tip: "Aim each fold from the board toward the lower band, using lighter pressure than the outer contour. The folds should describe fabric tension without slicing the crown into equal panels." },
      { name: "Shade the graduation cap", text: "Add graphite values to the established planes, deep-navy pencil to the board and crown, warm ochre to the button, cord, knot, and tassel, paper highlights, and one broken cast shadow.", tip: "Pull navy strokes with each board plane and curve them around the crown. Leave small paper gaps instead of filling to a smooth digital-looking surface, then build the shadow outward from the cap's contact points." },
      { name: "Set the cap's final contrast", text: "Strengthen the keeper contours and clarify the established diamond board, crown, button, cord, five-part tassel, seams, folds, restrained color, highlights, and broken shadow.", tip: "Trace the cord once from button to tassel, count five broad fringe groups, and stop while the pencil grain still shows. Your cap colors and tassel length can change while the same perspective construction stays useful.", image: true }
    ]
  },
  {
    slug: "folding-hand-fan",
    day: "011",
    date: "Tuesday, May 5",
    isoDate: "2026-05-05",
    subject: "a folding hand fan",
    headlineSubject: "a folding<br>hand fan",
    shortSubject: "a folding hand fan",
    lessonTitle: "Let's draw a folding hand fan",
    description: "Learn how to draw a folding hand fan using one low pivot, exactly seven radial ribs, six broad leaf panels, scalloped folds, two guard handles, a cord and tassel, graphite values, and restrained colored pencil.",
    intro: "Open the fan around one low pivot, keep exactly seven ribs radiating through six broad leaf panels, then add the guard handles, cord, tassel, fold values, and alternating color without losing that simple geometry. This honest archive lesson is a newly made object study, not a claim about earlier visitors, comments, activity, or popularity.",
    time: 20,
    difficulty: "Easy-medium",
    accent: "#6f7893",
    finished: "folding-hand-fan-finished-v1.jpg",
    finishedAlt: "Handmade graphite and colored-pencil sketch of one open folding hand fan with one low brass pivot, exactly seven warm wooden ribs forming six broad scalloped leaf panels, alternating dusty-indigo and muted-terracotta color, two sturdy guard handles, one rust-colored cord loop, one tapered tassel, paper highlights, and one broken graphite cast shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional dusty-indigo, muted-terracotta, and warm-brown colored pencils"],
    materialNote: "Use graphite for the complete fan, seven-rib geometry, six leaf panels, cord, tassel, fold values, and shadow. Add dusty indigo, muted terracotta, and warm brown only after every rib, edge, and overlap is established.",
    tipLabel: "Sketch tip",
    steps: [
      { name: "Open the fan geometry", text: "Place one low pivot and a shallow top arc, then draw exactly seven radial guides: two outside guard rays with five evenly spaced inner ribs between them.", tip: "Ghost the outside rays first, then use the negative spaces between them to place five inner ribs. Count seven total lines before moving on; the six broad wedges should feel similar without becoming mechanically perfect." },
      { name: "Wrap the leaf and handles", text: "Wrap the guides with the complete scalloped leaf, two sturdy wooden guard handles, five inner ribs, and one round pivot cap.", tip: "Rotate the page for the long rib strokes and let the top edge make one soft scallop over each of the six panels. Keep both guard handles a little heavier than the inner ribs." },
      { name: "Fold the fan panels", text: "Clarify the six broad fold channels, lower leaf edge, and simple rib joints while keeping all seven ribs attached to the same pivot.", tip: "Trace outward from the pivot rather than guessing from the top edge. Squint at the fan and compare the six empty wedges; one very narrow wedge will make the color rhythm feel accidental." },
      { name: "Hang the tassel", text: "Add one cord loop from the viewer-right side of the pivot and finish it with one compact tapered tassel beside the right guard handle.", tip: "Reserve a little paper between cord and handle so both stay readable. Draw the tassel as one simple wedge first, then add only a few directional strands." },
      { name: "Shade the folds and color", text: "Add graphite value along the existing folds, warm brown to the ribs and handles, alternating dusty indigo and muted terracotta to the six leaf panels, paper highlights, and one broken shadow.", tip: "Pull colored-pencil strokes from pivot toward the scalloped edge so they follow the fan's spread. Leave pale channels at the ribs and stop before the paper grain fills in." },
      { name: "Set the fan's final rhythm", text: "Strengthen the keeper contours and clarify the established seven ribs, six panels, pivot, cord, tassel, restrained colors, highlights, and broken shadow.", tip: "Count seven ribs, six broad color wedges, one cord, and one tassel, then stop. Your color rhythm and scallop shapes can vary while the pivot-and-rib construction stays the same.", image: true }
    ]
  },
  {
    slug: "woolly-sheep-with-bell",
    day: "093",
    date: "Sunday, July 26",
    isoDate: "2026-07-26",
    subject: "a woolly sheep with a bell",
    headlineSubject: "a woolly sheep<br>with a bell",
    shortSubject: "a woolly sheep with a bell",
    lessonTitle: "Let's draw a woolly sheep with a bell",
    description: "Learn how to draw a woolly sheep with a bell using a body oval, lowered head wedge, scalloped fleece silhouette, four separated legs, facial landmarks, collar and bell, grouped wool texture, graphite values, and restrained pencil color.",
    intro: "Build one calm right-facing sheep around a big fleece envelope and a smaller lowered head, then keep all four legs, the collar, and the bell attached to those first guides. The useful challenge is grouping the wool into a few clear rhythms instead of drawing hundreds of equal curls, so the finish stays soft, readable, and attainable.",
    time: 20,
    difficulty: "Easy-medium",
    accent: "#9b7a4a",
    finished: "woolly-sheep-with-bell-finished-v1.jpg",
    finishedAlt: "Handmade graphite and restrained colored-pencil sketch of one calm right-facing woolly sheep with a rounded scalloped fleece body, dark lowered face, two pointed ears, one visible eye, exactly four separated dark legs and hooves, one small tail, a plain collar with buckle, one muted-brass bell and clapper, three dusty-green grass tufts, warm-gray wool shading, paper highlights, and one broken graphite ground shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional warm-gray, brass, and dusty-green colored pencils"],
    materialNote: "Use graphite for the complete sheep, fleece rhythm, face, legs, collar, bell, grass, and shadow. Add warm gray, brass, and dusty green only after every silhouette and overlap is established.",
    tipLabel: "Sketch tip",
    steps: [
      { name: "Place the sheep's woolly frame", text: "Draw a pale body oval and scalloped fleece envelope, add a smaller lowered head wedge, then place two ear routes, exactly four leg axes, the tail, collar line, bell footprint, and a short ground line.", tip: "Ghost the body oval twice before touching down, then compare the empty spaces between the four leg axes. Uneven gaps will make the stance feel natural; merged axes will make a leg disappear later." },
      { name: "Shape the sheep silhouette", text: "Wrap the guides with the woolly body, dark face, two ears, exactly four separated legs and hooves, one small tail, the collar, and one bell.", tip: "Rotate the page for the long face edge and each leg. Keep the fleece edge in a few large scallops rather than a chain of identical little bumps, and break hidden neck lines beneath the collar." },
      { name: "Set the face and hooves", text: "Add one calm eye, the nostril, short mouth line, four hoof splits, and the bell clapper, then clarify the established leg overlaps.", tip: "Squint at the legs and count four dark vertical rhythms before adding hoof splits. Use one firm mark for the eye and nostril so the face stays quiet instead of scratchy." },
      { name: "Build the fleece rhythm", text: "Group loose curls across the established fleece, add inner-ear folds, one collar buckle, and exactly three small grass tufts around the ground line.", tip: "Draw the wool in overlapping clusters that change size and direction. Leave open paper between clusters; filling every gap with a curl will flatten the body." },
      { name: "Add soft value and color", text: "Shade the existing face and legs with graphite, add warm-gray value to the fleece, muted brass to the bell, dusty green to the grass, and one broken cast shadow.", tip: "Use lighter pressure over the wool than the face and legs. Pull the colored pencil with each form, then lift it before the paper loses its grain." },
      { name: "Soften the woolly finish", text: "Strengthen the keeper contours and clarify the established fleece, face, two ears, four legs and hooves, tail, collar, bell, restrained color, paper highlights, grass, and broken shadow.", tip: "Count four legs, two ears, one tail, and one bell, then stop while the fleece still breathes. Your wool rhythm and colors can change while keeping the same simple construction.", image: true }
    ]
  },
  {
    slug: "vintage-microscope",
    day: "012",
    date: "Wednesday, May 6",
    isoDate: "2026-05-06",
    subject: "a vintage microscope",
    headlineSubject: "a vintage<br>microscope",
    shortSubject: "a vintage microscope",
    lessonTitle: "Let's draw a vintage microscope",
    description: "Learn how to draw a vintage microscope using a tilted optical axis, eyepiece and barrel, two objective lenses, stage, curved arm, focus knob, mirror, hinge support, horseshoe base, hardware, graphite values, and restrained brass and steel pencil color.",
    intro: "Build one old laboratory microscope around a tilted optical axis, a sturdy stage, and a broad horseshoe base, then connect the arm, mirror, focus hardware, and two objective lenses without losing the first perspective. This honest archive lesson is a newly made instrument study, not a claim about earlier visitors, comments, activity, or popularity.",
    time: 25,
    difficulty: "Medium",
    accent: "#817a55",
    finished: "vintage-microscope-finished-v1.jpg",
    finishedAlt: "Handmade graphite and restrained colored-pencil sketch of one left-facing three-quarter vintage microscope with a long muted-brass optical barrel and eyepiece, a revolving nosepiece with exactly two objective lenses, one blue-gray rectangular stage with two curved clips, one large ribbed brass focus knob, a dark curved support arm, one round tilting blue-gray mirror, an upright hinge support, a broad charcoal-green horseshoe base, small screws and bands, paper highlights, and one broken graphite cast shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional muted-brass, blue-gray, and charcoal-green colored pencils"],
    materialNote: "Use graphite for the complete instrument, hardware, seams, values, and shadow. Add muted brass, blue gray, and charcoal green only after the optical tube, stage, mirror, arm, and base are fully established.",
    tipLabel: "Sketch tip",
    steps: [
      { name: "Set the microscope's lean", text: "Draw a pale tilted optical axis and barrel envelope, then place the stage rectangle, curved arm route, mirror circle, upright support, and horseshoe base footprint.", tip: "Ghost the tube axis and the stage's two long edges before touching down. Compare their angles rather than making the stage perfectly horizontal; the slight tilt carries the whole three-quarter view." },
      { name: "Build the instrument silhouette", text: "Wrap the guides with one eyepiece, the angled barrel, revolving nosepiece, exactly two objective lenses, stage, curved arm, mirror support, hinge upright, and broad horseshoe base.", tip: "Rotate the page for the tube and arm curves, then break hidden edges where the stage crosses the support. Count two objectives before darkening either collar." },
      { name: "Attach the working hardware", text: "Add one large ribbed focus knob, two stage clips, the round mirror rim, pivot joints, and the inner opening of the horseshoe base.", tip: "Use the negative space inside the horseshoe to check the base perspective. Keep the mirror slightly off-round so it follows the established tilt instead of facing the viewer flat." },
      { name: "Separate the metal parts", text: "Add barrel bands, collars on both objective lenses, a few attachment screws, stage thickness, and broad material seam lines.", tip: "Vary pencil pressure by material: firmer on the dark arm and base seams, lighter on the brass tube. A few clear screws are more convincing than a field of tiny hardware." },
      { name: "Show brass, steel, and weight", text: "Shade the existing structure with graphite, add muted brass to the tube and knobs, blue gray to the stage and mirror, charcoal green to the base, paper highlights, and one broken cast shadow.", tip: "Pull color along each metal form and leave long paper highlights on the tube. Build the floor shadow outward from the base contact points so the instrument feels heavy without a smooth digital gradient." },
      { name: "Focus the vintage finish", text: "Strengthen the keeper contours and clarify the established optical tube, two objectives, stage, arm, focus knob, mirror, hinge, horseshoe base, hardware, restrained colors, highlights, and shadow.", tip: "Trace the optical path from eyepiece to both objectives, check that the mirror still sits below the stage, then stop before every surface becomes equally dark. Your hardware and colors can vary while the structure stays the same.", image: true }
    ]
  },
  {
    slug: "side-profile-with-braid",
    day: "092",
    date: "Saturday, July 25",
    isoDate: "2026-07-25",
    subject: "a side profile with a braid",
    headlineSubject: "a side profile<br>with a braid",
    shortSubject: "a side-profile portrait with a braid",
    lessonTitle: "Let's draw a side profile with a braid",
    description: "Learn how to draw a side profile with a braid using a cranium guide, face plane, forehead-nose-lips-chin contour, neck and shoulders, swept hair, interlocking braid sections, facial landmarks, graphite values, and restrained auburn pencil.",
    intro: "Build one calm left-facing portrait around a cranium oval and face plane, then keep the nose, lips, chin, ear, neck, and long braid attached to those first guides. The useful skill is comparing the open wedges around the profile and braid instead of chasing individual features, so the likeness feels balanced without becoming stiff.",
    time: 25,
    difficulty: "Medium",
    accent: "#a66f4c",
    finished: "side-profile-with-braid-finished-v1.jpg",
    finishedAlt: "Handmade graphite and muted-auburn colored-pencil sketch of one generic young adult in left-facing side profile with a clear forehead, nose, lips, and chin silhouette, one visible eye and eyebrow, one visible ear, swept-back hair tied into one long interlocking braid below the shoulder, relaxed neck and shoulder lines, directional hair texture, paper highlights, restrained facial shading, and one broken graphite shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional muted-auburn colored pencil"],
    materialNote: "Use graphite for the full head, profile, neck, shoulders, ear, facial landmarks, hair mass, braid, values, and shadow. Add muted auburn only after the hair and every braid overlap are established.",
    tipLabel: "Sketch tip",
    steps: [
      { name: "Place the profile and braid gesture", text: "Draw a pale cranium oval and face plane, mark the brow, nose, mouth, and chin levels, then add the ear position, two neck lines, one shoulder line, and a curved braid route.", tip: "Ghost the front edge of the face twice before touching down, then compare the empty wedge in front of the nose with the space behind the skull. Keep the braid route pale so its taper can be adjusted." },
      { name: "Shape the profile and hair mass", text: "Wrap the guides with the forehead, nose, lips, chin, jaw, skull, neck, shoulder, and swept-back outer hair contour while preserving the braid route.", tip: "Rotate the page for the forehead-to-nose and jaw-to-neck contours, then pull each in one relaxed pass. Let tiny asymmetries remain instead of sanding the profile into a digital curve." },
      { name: "Weave the braid structure", text: "Add the visible ear, ponytail base, narrow hair tie, a continuous chain of overlapping braid sections, one tapered tip, and light placements for the eye, nostril, lips, and ear folds.", tip: "Build the braid from alternating leaf-like overlaps along the existing route. Break the hidden edge of each section beneath the one above it, and check that the whole chain narrows toward the tip." },
      { name: "Set the facial landmarks", text: "Clarify the existing eye, nostril, lip split, and ear folds, then add one eyebrow, the hairline, and a few large directional hair groups.", tip: "Use the brow and nose guides from step one instead of placing the eye by feel. Squint at the profile after each dark mark; one strong feature is more useful than many scratchy corrections." },
      { name: "Add hair texture and quiet value", text: "Pull directional strands through the established hair and braid, shade the face and neck lightly with graphite, add muted auburn pencil, and place one broken shadow behind the shoulder.", tip: "Follow each hair mass with the pencil rather than scribbling across it. Leave long paper highlights through the braid, and build skin value with two light passes instead of one heavy fill." },
      { name: "Refine the braided portrait", text: "Strengthen the keeper contours and clarify the established profile, facial landmarks, ear, swept hair, braid overlaps, graphite values, auburn texture, paper highlights, and broken shadow.", tip: "Trace the braid from tie to tip and check that every overlap still reads, then stop before the face becomes overworked. Your hairline, nose, lips, and braid rhythm can change while keeping the same construction method.", image: true }
    ]
  },
  {
    slug: "hiking-backpack-with-rolled-blanket",
    day: "013",
    date: "Thursday, May 7",
    isoDate: "2026-05-07",
    subject: "a hiking backpack with a rolled blanket",
    headlineSubject: "a hiking backpack<br>with a rolled blanket",
    shortSubject: "a hiking backpack and rolled blanket",
    lessonTitle: "Let's draw a hiking backpack with a rolled blanket",
    description: "Learn how to draw a hiking backpack with a rolled blanket using a soft three-quarter box, rounded flap, front and side pockets, shoulder strap, buckles, zipper pulls, a strapped blanket cylinder, canvas creases, and restrained pencil color.",
    intro: "Build one trail pack around a soft upright box and a reserved blanket cylinder, then attach the pockets, visible shoulder strap, retaining bands, hardware, and material texture without losing the first perspective. This honest archive lesson is a newly made gear study, not a claim about earlier visitors, comments, activity, or popularity.",
    time: 25,
    difficulty: "Medium",
    accent: "#7f8257",
    finished: "hiking-backpack-with-rolled-blanket-finished-v1.jpg",
    finishedAlt: "Handmade graphite and colored-pencil sketch of one muted-olive hiking backpack in a gentle three-quarter view with a rounded top flap, one top handle, two square flap buckles, one large front zipper pocket with two pulls, two asymmetric side pockets, one broad shoulder strap visible behind the bag, one rust-and-ochre rolled blanket secured across the lower front by exactly two retaining straps, a visible spiral blanket end, canvas creases, paper highlights, and one broken graphite cast shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional muted-olive, rust, and ochre colored pencils"],
    materialNote: "Use graphite for the complete bag, pockets, strap, blanket, hardware, fabric creases, and shadow. Add olive, rust, and ochre only after every silhouette and overlap is established.",
    tipLabel: "Sketch tip",
    steps: [
      { name: "Block the pack and blanket", text: "Draw a pale upright soft box in three-quarter view, add the rounded top and flap line, ghost the visible shoulder strap, then reserve one full horizontal blanket cylinder across the lower front.", tip: "Ghost the two long side edges before touching down and compare their slight convergence. Keep the blanket footprint pale and blank so you do not finish bag detail that it will cover." },
      { name: "Shape the pack silhouette", text: "Wrap the guides with the rounded bag body, top flap, lower base, and one rolled blanket cylinder with a visible end ellipse.", tip: "Rotate the page for the long bag edges and pull them in relaxed passes. Check the cylinder end against the pack side plane so the blanket feels strapped on, not pasted flat." },
      { name: "Attach pockets and straps", text: "Add one large front pocket, two asymmetric side pockets, one broad shoulder strap behind the bag, and exactly two narrow retaining bands over the established blanket.", tip: "Draw the pocket openings before their outer edges, then break hidden bag lines cleanly behind them. Place both blanket bands around the same cylinder before darkening either one." },
      { name: "Add the trail hardware", text: "Draw one top handle, two flap buckles, pocket seams, two small zipper pulls, and the spiral on the existing blanket end.", tip: "Set the two buckle rectangles on the same flap arc, but let their tiny differences stay handmade. Wind the blanket spiral inward gradually and stop before the rings become crowded." },
      { name: "Show canvas, wool, and weight", text: "Add restrained fabric creases, muted olive pencil to the pack, rust and ochre pencil to the blanket, paper highlights, and one broken graphite shadow.", tip: "Pull color strokes with each material: broad broken strokes across canvas and curved strokes around the blanket cylinder. Build the ground shadow lightly from the contact points outward." },
      { name: "Tighten the trail-ready finish", text: "Strengthen the keeper contours and clarify the established pack, pockets, visible shoulder strap, handle, buckles, zipper pulls, rolled blanket, two retaining bands, material textures, restrained colors, highlights, and shadow.", tip: "Count two flap buckles and two blanket bands, trace the spiral end, and stop while the bag still feels sketched. Your pockets and colors can change, but extra gear or a whole trail scene would turn this into a different lesson.", image: true }
    ]
  },
  {
    slug: "ballet-slippers-with-ribbons",
    day: "091",
    date: "Friday, July 24",
    isoDate: "2026-07-24",
    subject: "ballet slippers with ribbons",
    headlineSubject: "ballet slippers<br>with ribbons",
    shortSubject: "a pair of ballet slippers with ribbons",
    lessonTitle: "Let's draw ballet slippers with ribbons",
    description: "Learn how to draw ballet slippers with ribbons using two tapered pointe-shoe silhouettes, squared toe boxes, oval openings, crossed ribbon bands, fabric seams, soft folds, a graphite shadow, and restrained blush-pink pencil.",
    intro: "Build this graceful pair from two simple tapered footprints, then keep the openings, toe seams, folds, and two crossing ribbons attached to those first guides. The useful skill is comparing the wedge of empty paper between the shoes with the single ribbon crossing above them, so the pair stays balanced without becoming mechanically symmetrical.",
    time: 25,
    difficulty: "Medium",
    accent: "#b97982",
    finished: "ballet-slippers-with-ribbons-finished-v1.jpg",
    finishedAlt: "Handmade graphite and dusty-rose colored-pencil sketch of exactly two ballet pointe shoes leaning apart with gently squared toe boxes, oval openings, rounded heels, one toe seam and three short fabric folds per shoe, exactly two wide ribbons attached at the inner sides and crossing once above the pair, warm paper highlights, and one broken graphite ground shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional dusty-rose colored pencil"],
    materialNote: "Use graphite for both complete shoe silhouettes, openings, seams, soles, folds, ribbons, and shadow. Add dusty rose only after every major contour and both ribbon paths are established.",
    tipLabel: "Sketch tip",
    steps: [
      { name: "Map the paired slippers and ribbons", text: "Place two pale tapered shoe footprints on separate center axes, reserve their small heel overlap, and ghost exactly two ribbon paths that cross once above them.", tip: "Ghost both long axes before touching down, then compare the wedge of empty paper between them. Keep the ribbon routes pale so their crossing can be adjusted without building dark detail underneath it." },
      { name: "Shape the pointe-shoe silhouettes", text: "Wrap each guide with a tapered outer contour, gently squared toe box, narrow waist, and rounded heel while keeping the original angles and overlap.", tip: "Rotate the page for each long outside edge and pull it in one relaxed pass. Compare the two toe widths, but let small differences keep the pair handmade." },
      { name: "Open the shoes and attach the ribbons", text: "Add one oval opening and heel edge to each shoe, then turn the two pale ribbon routes into paired fabric edges attached at the inner sides.", tip: "Squint at the negative space inside each opening before darkening it. At the ribbon crossing, stop the hidden edges cleanly instead of drawing through the top band." },
      { name: "Add seams and soft fabric folds", text: "Draw one curved toe seam and a visible sole edge on each shoe, then add exactly three short fold lines near each established toe box.", tip: "Use lighter pressure for the folds than for the seams. Aim every fold toward the center of its toe box so the fabric feels soft rather than cracked." },
      { name: "Lay in blush fabric and shadow", text: "Pull dusty-rose pencil strokes along the existing shoe and ribbon forms, leave warm paper highlights, and add one broken graphite shadow beneath the pair.", tip: "Follow the length of each ribbon with your color strokes, then curve them around the toe boxes. Leave a thin strip of paper uncolored instead of reaching for a white highlight." },
      { name: "Refine the graceful finish", text: "Strengthen the keeper contours and clarify the established two shoes, two ribbon bands, openings, toe seams, sole edges, folds, blush texture, highlights, overlap, and ground shadow.", tip: "Count two shoes, trace each ribbon from its attachment through the single crossing, and stop while the paper still glows. Your ribbon curves can be looser or tighter, but adding a bow, extra ribbons, legs, or a dancer would turn this into a different lesson.", image: true }
    ]
  },
  {
    slug: "garden-wheelbarrow",
    day: "014",
    date: "Friday, May 8",
    isoDate: "2026-05-08",
    subject: "a garden wheelbarrow",
    headlineSubject: "a garden<br>wheelbarrow",
    shortSubject: "a garden wheelbarrow",
    lessonTitle: "Let's draw a garden wheelbarrow",
    description: "Learn how to draw a garden wheelbarrow in three-quarter view with a tilted empty tray, one treaded wheel, six spokes, two handles, two support legs, frame braces, mounting bolts, restrained pencil color, and a broken cast shadow.",
    intro: "Build one practical garden tool around a tilted tray box, a single wheel circle, and two long handle axes, then connect the support frame before adding hardware and material texture. This honest archive lesson is a newly made wheelbarrow study, not a claim about earlier visitors, comments, activity, or popularity.",
    time: 25,
    difficulty: "Medium",
    accent: "#748264",
    finished: "garden-wheelbarrow-finished-v1.jpg",
    finishedAlt: "Handmade graphite and colored-pencil sketch of one empty garden wheelbarrow in three-quarter view with a sage-green tilted tray and doubled rim, exactly one dark treaded tire, a centered hub with exactly six spokes, exactly two long warm-ochre wooden handles, exactly two planted support legs, two visible cross braces, four small mounting bolts, warm paper highlights, and one broken graphite cast shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional sage-green and warm-ochre colored pencils"],
    materialNote: "Use graphite for the complete tray, wheel, hub, six spokes, handles, support frame, bolts, tread, and shadow. Add sage green and warm ochre only after all structure is established.",
    tipLabel: "Sketch tip",
    steps: [
      { name: "Set the tray, wheel, and handles", text: "Build one pale tilted tray box, place one front wheel circle on its axle line, and ghost exactly two long handle axes extending behind the tray.", tip: "Ghost the tray's long rim edges before touching down and compare how they converge. Reserve the opaque tray footprint instead of drawing finished frame detail through it." },
      { name: "Shape the working silhouette", text: "Wrap the construction with the empty tray contour, thick single tire, and exactly two separated wooden handles while preserving the original three-quarter perspective.", tip: "Rotate the page to pull each handle in one relaxed stroke. Squint at the open wedge between the handles; that negative space is an easier alignment check than measuring both rails." },
      { name: "Build the support frame", text: "Add the axle frame beneath the established tray, exactly two planted support legs, two visible cross braces, and four small attachment bolts.", tip: "Start each support line where it meets an existing tray or handle rail, then stop at the wheel or opaque tray edge. Avoid drawing hidden lines only to erase them later." },
      { name: "Add the rim and wheel hardware", text: "Clarify the doubled tray rim, add one centered wheel hub with exactly six spokes, and mark restrained tread across the established tire.", tip: "Place six light spoke endpoints around the rim before connecting them to the hub. Compare the empty wedges between spokes so the wheel reads evenly without looking machine-perfect." },
      { name: "Show metal, wood, rubber, and ground", text: "Add sage-green pencil to the existing tray, warm ochre to both handles, graphite tire texture, and one broken cast shadow beneath the wheel and two legs.", tip: "Pull color strokes along each material: broad strokes around the tray planes, long strokes down the handles, and short curved marks across the tire. Leave paper flecks visible." },
      { name: "Tune the garden-tool finish", text: "Strengthen the keeper contours and clarify the established tray, single wheel, six spokes, two handles, two legs, braces, bolts, tread, restrained color, paper highlights, and cast shadow.", tip: "Count one wheel, six spokes, two handles, and two planted legs, then stop while the structure stays clear. Soil, flowers, extra tools, or a garden scene would turn this compact tool study into a different lesson.", image: true }
    ]
  },
  {
    slug: "ant-carrying-a-leaf",
    day: "090",
    date: "Thursday, July 23",
    isoDate: "2026-07-23",
    subject: "an ant carrying a leaf",
    headlineSubject: "an ant carrying<br>a leaf",
    shortSubject: "an ant carrying a leaf",
    lessonTitle: "Let's draw an ant carrying a leaf",
    description: "Learn how to draw an ant carrying a leaf with three body segments, six bent walking legs, antennae, mandibles gripping a stem, a large veined leaf, grass marks, shadows, and restrained pencil color.",
    intro: "Build one tiny traveler from three simple body beads, give all six legs a clear walking rhythm, then balance one oversized leaf above its back. The useful skill is comparing the alternating leg angles while keeping the leaf stem connected to the ant's mouth, so the pose feels determined instead of diagrammed.",
    time: 20,
    difficulty: "Medium",
    accent: "#6f8f4e",
    finished: "ant-carrying-a-leaf-finished-v1.jpg",
    finishedAlt: "Handmade graphite and colored-pencil sketch of one small right-facing ant walking beneath one oversized moss-green leaf with a clear stem gripped in its mandibles, three warm-brown body segments, exactly six bent legs in alternating steps, two curved antennae, one tiny eye, a central leaf vein with five restrained side-vein pairs, one bite notch, a short broken ground line, three grass ticks, and small graphite contact shadows",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional moss-green and warm-brown colored pencils"],
    materialNote: "Use graphite for the complete ant, all six legs, antennae, mandibles, leaf structure, ground, and shadows. Add moss green and warm brown only after every major contour is established.",
    tipLabel: "Sketch tip",
    steps: [
      { name: "Map the ant and its leaf", text: "Place three pale body beads on one right-facing walking axis, then sketch the oversized leaf footprint and a light stem route aimed toward the ant's mouth.", tip: "Ghost the body axis first and keep the leaf footprint pale. Reserve the space between leaf and ant instead of filling it with detail that the stem or antennae will later cross." },
      { name: "Set the six-leg walking rhythm", text: "Wrap the three body guides with a simple ant silhouette, then add exactly six bent legs in three alternating pairs beneath the load.", tip: "Mark all six attachment points before drawing the feet. Compare the triangular gaps between neighboring legs; varied gaps make the ant look like it is walking rather than standing on a comb." },
      { name: "Give the ant a determined face", text: "Add one small eye, exactly two curved antennae, and simple mandibles that visibly grip the established leaf stem.", tip: "Rotate the page for the antenna curves and pull each in one relaxed pass. Trace the stem into the mandibles with your finger so the leaf never appears to float." },
      { name: "Shape and vein the carried leaf", text: "Clarify the reserved leaf contour, center vein, five restrained side-vein pairs, one small bite notch, and the existing stem connection.", tip: "Draw the center vein first, then angle each side-vein pair toward the edge. Your leaf can be rounder or narrower, but keep one clear stem connecting it to the ant." },
      { name: "Ground and color the tiny traveler", text: "Add a short broken ground line, exactly three grass ticks, small contact shadows, moss-green leaf texture, and warm-brown pencil on the established ant body.", tip: "Use the side of the graphite lightly beneath planted feet, then pull green strokes along the leaf veins. Leave warm paper showing through both colors so the sketch stays lively." },
      { name: "Strengthen the determined finish", text: "Darken the keeper contours and clarify the established three-part body, six legs, two antennae, face, leaf, veins, bite notch, ground marks, restrained colors, and shadows.", tip: "Count six legs, trace the stem from leaf to mouth, and stop while the pose still feels light. Extra ants, a nest, or a full garden would turn this tiny journey into a different lesson.", image: true }
    ]
  },
  {
    slug: "wooden-hand-plane-and-shaving",
    day: "015",
    date: "Saturday, May 9",
    isoDate: "2026-05-09",
    subject: "a wooden hand plane and curled shaving",
    headlineSubject: "a wooden hand plane<br>and curled shaving",
    shortSubject: "a hand plane and shaving",
    lessonTitle: "Let's draw a wooden hand plane and curled shaving",
    description: "Learn how to draw a wooden hand plane and curled shaving with a foreshortened body, rear tote, front knob, angled iron, wooden wedge, plane mouth, warm grain, workbench edges, and a soft shadow.",
    intro: "Build one traditional hand plane around a long wooden box and a pale tote gesture, then fit the front knob, cutting iron, wedge, mouth, single shaving, grain, bench, and restrained color onto that same perspective. This honest archive lesson is a fresh wood-and-steel study, not a claim about earlier visitors, comments, activity, or popularity.",
    time: 25,
    difficulty: "Medium",
    accent: "#a87948",
    finished: "wooden-hand-plane-and-shaving-finished-v1.jpg",
    finishedAlt: "Handmade graphite and colored-pencil sketch of one traditional wooden hand plane in three-quarter view with a long warm-ochre body, curved rear tote handle, rounded front knob, slanted cool-gray cutting iron, wooden wedge, narrow mouth, exactly one broad curled wood shaving, restrained grain, cropped workbench edges, paper highlights, and a soft graphite cast shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional warm-ochre and cool-gray colored pencils"],
    materialNote: "Use graphite for the complete plane, grips, iron, wedge, mouth, single shaving, grain, bench, and shadow. Add warm ochre and cool gray only after every major form is established.",
    tipLabel: "Sketch tip",
    steps: [
      { name: "Block the body and tote gesture", text: "Draw a pale foreshortened box for the long body and sole, add the curved rear-tote construction, and reserve blank areas for the front knob and cutting assembly.", tip: "Ghost the two long body edges before touching down and compare their convergence. Keep the tote pale and leave its footprint free of finished grain so the later grip can sit cleanly on the body." },
      { name: "Shape the tote and front knob", text: "Clarify the established curved rear tote, then add one small rounded front knob inside its reserved area near the opposite end.", tip: "Rotate the page to pull each S-like tote edge in one relaxed pass. Compare the empty paper around both grips so they feel connected to the same long body without becoming symmetrical." },
      { name: "Fit the iron and wedge", text: "Add one slanted cutting iron, one wooden wedge holding it, and the narrow plane mouth between the two established grips.", tip: "Compare the iron angle with the rear tote instead of guessing it alone. Darken only the edges that remain visible around the wedge and mouth." },
      { name: "Curl one shaving from the mouth", text: "Draw exactly one broad ribbon shaving emerging from the established mouth and curling forward beside the plane body.", tip: "Ghost the whole curl once, then draw its two edges as one flowing band. Trace the route from the mouth to the tip and make sure it never splits into extra shavings." },
      { name: "Show wood, steel, and the bench", text: "Add restrained grain to exposed wood, two cropped workbench-edge strokes, one soft cast shadow, warm-ochre pencil on the wood, and cool gray on the existing iron.", tip: "Pull the grain along each wooden form and stop it at attached hardware. Use two light color passes and leave paper flecks showing so the materials feel sketched rather than filled flat." },
      { name: "Tune the carpenter's finish", text: "Strengthen the keeper contours and clarify the established body, tote, knob, iron, wedge, mouth, single shaving, grain, bench edges, restrained color, highlights, and shadow.", tip: "Trace the single shaving from mouth to tip and check that the iron still meets the body, then stop. Hands, clamps, extra tools, extra curls, a logo, or a workshop scene would turn this compact material study into a different lesson.", image: true }
    ]
  },
  {
    slug: "graceful-swan-on-water",
    day: "089",
    date: "Wednesday, July 22",
    isoDate: "2026-07-22",
    subject: "a graceful swan on water",
    headlineSubject: "a graceful swan<br>on water",
    shortSubject: "a swan on water",
    lessonTitle: "Let's draw a graceful swan on water",
    description: "Learn how to draw a graceful swan on water with an S-curved neck, rounded body, folded wing, layered feathers, calm ripples, trailing wake, soft reflection, restrained blue-gray pencil, and a pale peach beak.",
    intro: "Build the whole bird around one long S curve and a simple body oval, then add the wing, face, water, reflection, and restrained color without losing that first gesture. The useful skill is comparing the negative space inside the neck curve with the space above the folded wing so the pose stays calm and balanced.",
    time: 25,
    difficulty: "Medium",
    accent: "#668da5",
    finished: "graceful-swan-on-water-finished-v1.jpg",
    finishedAlt: "Handmade graphite and colored-pencil sketch of one left-facing swan gliding on calm water with a long S-curved neck, small black eye, pale peach divided beak, rounded white body, folded wing with three broad layered feather groups, pointed tail, three blue-gray ripples, narrow trailing wake, soft broken reflection, paper highlights, and shallow contact shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional blue-gray and pale peach colored pencils"],
    materialNote: "Use graphite for the full swan, feather structure, water, wake, reflection, and shadow. Add blue-gray and pale peach pencil only after every major shape and water mark is established.",
    tipLabel: "Sketch tip",
    steps: [
      { name: "Set the swan gesture", text: "Draw a light body oval and long S-curved neck gesture, then place the head, beak wedge, folded-wing footprint, tail point, waterline, and pale reflection zone.", tip: "Ghost the neck curve two or three times before touching down. Compare the open paper inside the S with the space above the wing, and reserve the wing footprint instead of finishing body texture beneath it." },
      { name: "Shape the gliding swan", text: "Wrap the guides with the long neck, rounded body, small head, tapered beak, folded wing, and pointed tail while preserving the same left-facing side view.", tip: "Rotate the page so you can pull each long neck edge in one relaxed pass. Keep the two sides of the neck related without forcing them into parallel mechanical lines." },
      { name: "Build the face and wing", text: "Add the small eye, beak division, cheek line, exactly three broad layered feather groups, and the soft underside feather edge inside the completed silhouette.", tip: "Draw the three feather groups as overlapping leaf-like masses, not rows of individual feathers. Squint once to make sure the wing still reads as one folded form." },
      { name: "Add the calm water", text: "Draw exactly three horizontal ripples, a narrow trailing wake, a soft broken reflection, and a shallow contact shadow beneath the established bird.", tip: "Turn the page slightly and pull the ripples from the shoulder. Break the reflected marks into short horizontal strokes so they echo the swan without becoming a second solid shape." },
      { name: "Shade the feathers and water", text: "Layer soft graphite into the established neck, body, wing, tail, reflection, and shadow, then add broken blue-gray pencil to the water and pale peach to the beak.", tip: "Use the side of the graphite lightly along the neck and feather overlaps. Leave broad paper areas white, and pull the blue-gray strokes horizontally so the water stays calm." },
      { name: "Finish the quiet glide", text: "Strengthen the keeper contours and clarify the established face, three feather groups, three ripples, wake, reflection, restrained color, highlights, and shadow.", tip: "Trace the S curve from crown to breast and count the three feather groups and three ripples, then stop. Reeds, flowers, another bird, or a full background would turn this focused gesture study into a different lesson.", image: true }
    ]
  },
  {
    slug: "climbing-carabiner-and-rope",
    day: "016",
    date: "Sunday, May 10",
    isoDate: "2026-05-10",
    subject: "a climbing carabiner and rope",
    headlineSubject: "a climbing carabiner<br>and rope",
    shortSubject: "a carabiner and rope",
    lessonTitle: "Let's draw a climbing carabiner and rope",
    description: "Learn how to draw a climbing carabiner and rope with a pear-shaped locking frame, straight gate, hooked nose, ribbed screw-lock sleeve, continuous twisted rope, two loose coils, metal reflections, restrained pencil color, and a soft graphite shadow.",
    intro: "Build one tilted locking carabiner around a clear inner opening, thread a single rope through its lower basket, then turn the metal and fibers with restrained pencil color. This honest archive lesson is a fresh gear-and-material study, not a claim about earlier visitors, comments, activity, or popularity.",
    time: 25,
    difficulty: "Medium",
    accent: "#496f91",
    finished: "climbing-carabiner-and-rope-finished-v1.jpg",
    finishedAlt: "Handmade graphite and colored-pencil sketch of one pear-shaped locking climbing carabiner tilted slightly right with a cool-gray metal frame, straight gate, hooked nose, ribbed muted-brass screw-lock sleeve, one continuous blue rope threaded through the lower basket into exactly two loose coils, directional twist ridges, paper highlights, and a soft graphite cast shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional blue, cool-gray, and muted-ochre colored pencils"],
    materialNote: "Use graphite for the complete carabiner, gate hardware, rope structure, ridges, reflections, and shadow. Add blue, cool gray, and muted ochre only after the full gear arrangement is established.",
    tipLabel: "Sketch tip",
    steps: [
      { name: "Map the clip and rope", text: "Draw a light pear-shaped frame and inner opening, place the gate axis, hinge, nose and screw-sleeve reserves, then route one continuous rope through the lower basket into exactly two loose coils and mark a shallow shadow zone.", tip: "Ghost the carabiner tilt first, then trace the rope route with your finger from the left edge through the basket and around both coils. Keep the crossing and sleeve footprints pale instead of finishing lines beneath them." },
      { name: "Shape the carabiner", text: "Wrap the guides with a thick pear-shaped frame, open center, straight gate, rounded basket, and narrow spine while preserving the same rightward tilt.", tip: "Rotate the page for the long outside curve and pull it in one relaxed pass. Compare the frame thickness along the spine and basket without forcing perfectly mechanical edges." },
      { name: "Build the lock and rope", text: "Add the gate hinge, hooked nose, ribbed screw-lock sleeve and grooves, then give the reserved rope path one consistent thickness, directional twist ridges, and exactly two loose coils.", tip: "Keep every rope ridge leaning in the same direction as it turns around the coils. Count two open coil centers and confirm the rope remains one continuous strand." },
      { name: "Turn the metal forms", text: "Draw exactly three long metal reflection lines, layer soft graphite around the established frame and sleeve, and deepen the single shallow cast shadow.", tip: "Curve each reflection with the carabiner instead of drawing white ruler-straight stripes. Darken the underside of the basket a little more than the open upper frame." },
      { name: "Shade the climbing gear", text: "Add graphite depth, restrained blue pencil to the established rope, cool gray to the frame and gate, and muted ochre to the screw-lock sleeve.", tip: "Pull blue strokes along the rope twist and leave scattered paper tooth visible. Build the metal color lightly so the graphite reflections stay readable." },
      { name: "Finish the gear study", text: "Strengthen the keeper contours and clarify the established frame, gate hardware, continuous two-coil rope, twist ridges, reflections, sleeve grooves, restrained color, paper highlights, and shadow.", tip: "Trace the rope route once and count two coils and three main metal reflections, then stop. A hand, climber, cliff, harness, knot, logo, extra carabiner, or extra coil would turn this focused gear study into a different lesson.", image: true }
    ]
  },
  {
    slug: "denim-jacket",
    day: "088",
    date: "Tuesday, July 21",
    isoDate: "2026-07-21",
    subject: "a denim jacket",
    headlineSubject: "a denim jacket",
    shortSubject: "a denim jacket",
    lessonTitle: "Let's draw a denim jacket",
    description: "Learn how to draw a denim jacket with a relaxed front-facing silhouette, pointed collar, plackets, cuffs, yoke seam, two flap pockets, six buttons, double stitching, natural folds, indigo pencil color, and soft graphite shadow.",
    intro: "Build the jacket around one shoulder line and a simple torso block, then fit the sleeves, collar, pockets, buttons, seams, folds, and denim color onto that same structure. The useful skill is comparing the negative spaces beneath the sleeves so both sides feel relaxed without forcing perfect symmetry.",
    time: 25,
    difficulty: "Medium",
    accent: "#527ba8",
    finished: "denim-jacket-finished-v1.jpg",
    finishedAlt: "Handmade graphite and indigo colored-pencil sketch of a front-facing denim jacket with slightly dropped shoulders, relaxed sleeves, pointed collar, two front plackets, two flap chest pockets, back-yoke seam, cuffs, straight hem, exactly six round buttons, double stitching, restrained folds, paper highlights, and soft ground shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional indigo-blue colored pencil"],
    materialNote: "Use graphite for the jacket construction, panels, pockets, buttons, seams, folds, and shadow. Add indigo pencil only after the complete garment structure is established.",
    tipLabel: "Sketch tip",
    steps: [
      { name: "Block in the jacket", text: "Draw a light shoulder line and torso block, add the center opening and collar reserve, then place two relaxed sleeve gestures, cuff positions, and two chest-pocket footprints.", tip: "Ghost the shoulder line before touching down, then compare the paper spaces beneath both sleeves. Keep the collar and pocket footprints pale so you do not finish seams that those forms will cover." },
      { name: "Shape the jacket silhouette", text: "Wrap the guides with the pointed collar, two front plackets, relaxed sleeves, cuffs, and straight hem while preserving the same front view.", tip: "Rotate the page for each long sleeve edge and pull it in one relaxed pass. Let the shoulders differ slightly so the jacket feels worn rather than mechanically mirrored." },
      { name: "Build the denim panels", text: "Add the back-yoke seam, two chest pockets with flaps, cuff seams, hem band, and exactly six front buttons inside the established silhouette.", tip: "Use the yoke as a level reference for the pocket tops, then count all six buttons before darkening them. Keep the pocket flaps wide enough to read at thumbnail size." },
      { name: "Add seams and folds", text: "Draw double-stitch lines along the established panels, add a few sleeve and torso folds, small buttonholes, and one shallow ground shadow.", tip: "Keep parallel stitch lines close together and break them cleanly at the pockets and buttons. Aim each fold toward a nearby seam or bend instead of scattering wrinkles evenly." },
      { name: "Shade the denim", text: "Layer soft graphite and restrained indigo-blue pencil over the established jacket panels, pockets, cuffs, folds, hardware, and shadow.", tip: "Pull the blue strokes in the direction of each sleeve or torso panel and leave narrow paper gaps as worn highlights. Build two light passes instead of filling the denim flat." },
      { name: "Finish the denim study", text: "Strengthen the keeper contours and clarify the established collar, plackets, sleeves, pockets, six buttons, seams, folds, restrained color, highlights, and shadow.", tip: "Trace both sleeve openings and the center plackets with your eyes, then stop. A person, hanger, logo, patch, pin, or room scene would turn this focused garment study into a different lesson.", image: true }
    ]
  },
  {
    slug: "hanging-wind-chimes",
    day: "017",
    date: "Monday, May 11",
    isoDate: "2026-05-11",
    subject: "a set of hanging wind chimes",
    headlineSubject: "a set of hanging<br>wind chimes",
    shortSubject: "a set of wind chimes",
    lessonTitle: "Let's draw a set of hanging wind chimes",
    description: "Learn how to draw hanging wind chimes with a round wooden cap, four staggered metal tubes, suspension strings, a central clapper, diamond-shaped sail, reflections, breeze lines, restrained pencil color, and soft graphite shadow.",
    intro: "Arrange four separated tube axes beneath one round cap, connect the clapper and sail through the center, then add reflective metal, wood grain, breeze marks, and restrained color. This honest archive lesson is a fresh hanging-object study, not a claim about earlier visitors, comments, activity, or popularity.",
    time: 20,
    difficulty: "Easy-medium",
    accent: "#5d8e96",
    finished: "hanging-wind-chimes-finished-v1.jpg",
    finishedAlt: "Handmade graphite and colored-pencil sketch of hanging wind chimes with a round warm-ochre wooden cap, top loop, exactly four separated silver-gray metal tubes at staggered lengths, four suspension strings, central round clapper, muted-teal diamond wind sail, four dark tube openings, three breeze arcs, paper highlights, and soft cast shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional cool-gray, ochre, and muted-teal colored pencils"],
    materialNote: "Use graphite for the hanging construction, cap, four tubes, strings, clapper, sail, reflections, breeze marks, and shadow. Add cool gray, ochre, and muted teal only after every chime part is established.",
    tipLabel: "Sketch tip",
    steps: [
      { name: "Hang the chime guides", text: "Draw a small hanging loop and cap ellipse, drop one center cord, place exactly four separated tube axes at alternating lengths, then mark the clapper and diamond-sail positions.", tip: "Ghost the four tube axes before touching down and compare the three paper gaps between them. Keep the cap, clapper, and sail footprints pale instead of finishing cord lines those forms will cover." },
      { name: "Shape the cap and tubes", text: "Build the round wooden cap, attach four thin strings, and wrap the four axes with exactly four hollow metal tubes while preserving their staggered lengths.", tip: "Rotate the page for each tube edge and draw it in one relaxed pass. Count four separate bodies and keep visible paper between neighbors so none disappear behind another." },
      { name: "Build the clapper and sail", text: "Add the round clapper disk between the inner tubes, connect the diamond-shaped wind sail below it, then draw all four lower tube openings and the small hanging knots.", tip: "Use the center cord to align the clapper and sail, but let the four tube lengths alternate around them. Flatten each lower opening into a small related ellipse rather than four unrelated circles." },
      { name: "Suggest metal and motion", text: "Draw one long reflection line on each of the four tubes, add restrained grain to the cap, exactly three breeze arcs, and one faint cast shadow.", tip: "Curve the three breeze arcs as a loose family instead of copying one shape. Keep the metal reflections narrow and broken so the tubes still feel sketched rather than polished." },
      { name: "Shade the wind chimes", text: "Layer cool-gray pencil over the tubes and clapper, warm ochre over the cap, muted teal over the sail, and soft graphite into the strings and established shadow.", tip: "Pull the gray strokes along each tube and leave a stripe of paper as reflected light. Use lighter pressure on the inner tubes so their overlaps stay easy to read." },
      { name: "Finish the breezy study", text: "Strengthen the keeper contours and clarify the established loop, cap, four strings and tubes, clapper, sail, knots, reflections, three breeze arcs, restrained color, and shadow.", tip: "Count all four tube openings and trace the center cord once, then stop. A porch, tree, bird, bell, extra ornament, or outdoor scene would distract from the hanging mechanism.", image: true }
    ]
  },
  {
    slug: "astronaut-helmet",
    day: "087",
    date: "Monday, July 20",
    isoDate: "2026-07-20",
    subject: "an astronaut helmet",
    headlineSubject: "an astronaut<br>helmet",
    shortSubject: "an astronaut helmet",
    lessonTitle: "Let's draw an astronaut helmet",
    description: "Learn how to draw an astronaut helmet with a rounded shell, broad reflective visor, layered neck collar, side housings, functional vents and connector, cool blue-gray pencil color, warm visor tint, and soft graphite shadow.",
    intro: "Build the helmet around one rounded shell and a reserved visor opening, then fit the collar, side hardware, reflections, and restrained space-age color onto that same structure. The useful skill is treating the visor as a large curved form: its rim, highlights, and value changes all need to follow one shared surface.",
    time: 25,
    difficulty: "Medium",
    accent: "#6e8fa8",
    finished: "astronaut-helmet-finished-v1.jpg",
    finishedAlt: "Handmade graphite and colored-pencil sketch of an empty three-quarter astronaut helmet with rounded pale blue-gray shell, broad dark amber visor, two white reflection bands, layered neck collar, round side housing, small connector, two vents, panel seams, and soft cast shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional blue-gray and ochre colored pencils"],
    materialNote: "Use graphite for the shell construction, visor, collar, hardware, seams, reflections, and shadow. Add blue-gray and ochre pencil only after every helmet form is established.",
    tipLabel: "Sketch tip",
    steps: [
      { name: "Block in the helmet", text: "Draw a light rounded shell, reserve a broad visor opening, add a vertical center axis and side planes, then place the lower neck-ring footprint.", tip: "Ghost the shell curve before touching down and compare the paper spaces on both sides of the visor reserve. Keep the visor footprint blank instead of finishing shell detail that it will cover." },
      { name: "Shape the outer shell", text: "Wrap the guides with the rounded helmet shell, visor brow, side housings, and layered neck ring while preserving the same three-quarter turn.", tip: "Rotate the page for the long shell arc and draw it in one relaxed pass. Check that the neck ring stays centered beneath the visor rather than drifting toward the larger side housing." },
      { name: "Build the visor and collar", text: "Add the broad dark visor opening, raised rim, lower seal, and layered neck collar inside the reserved construction footprints.", tip: "Pull the visor curve parallel to the outer brow, then squint at the opening to check that its left and right corners feel related. Leave the helmet empty—no face is needed." },
      { name: "Add the helmet hardware", text: "Place the panel seams, one side connector, exactly two small vents, two broad visor highlight bands, a light amber visor tint, and a shallow ground shadow.", tip: "Draw the two highlight bands as curved strips that follow the visor rather than straight white bars. Keep the connector and vents small so the shell remains the dominant form." },
      { name: "Shade the space helmet", text: "Add pale blue-gray pencil to the established shell, deepen the visor and collar with soft graphite, and blend the existing visor tint and ground shadow.", tip: "Use the side of the pencil for the broad shell planes and leave scattered paper tooth showing. Build the visor value in two light passes so the white reflections stay crisp." },
      { name: "Finish the helmet study", text: "Strengthen the keeper contours and clarify the established shell, visor, collar, hardware, reflections, restrained color, and shadow.", tip: "Trace the visor rim with your eyes once to make sure its thickness stays even, then stop. A face, suit, flag, stars, planet, or spacecraft would turn this focused object study into a different lesson.", image: true }
    ]
  },
  {
    slug: "manual-coffee-grinder",
    day: "018",
    date: "Tuesday, May 12",
    isoDate: "2026-05-12",
    subject: "a manual coffee grinder",
    headlineSubject: "a manual<br>coffee grinder",
    shortSubject: "a coffee grinder",
    lessonTitle: "Let's draw a manual coffee grinder",
    description: "Learn how to draw an old-fashioned manual coffee grinder with a three-quarter wooden cabinet, domed metal hopper, raised crank and wooden knob, front drawer, short feet, hardware, warm wood grain, and soft graphite shadow.",
    intro: "Construct a shallow three-quarter box, reserve the hopper and drawer footprints, then add the hand crank, hardware, wood grain, and restrained material color without hiding the perspective. This honest archive lesson is a fresh object study, not a claim about earlier visitors, comments, activity, or popularity.",
    time: 25,
    difficulty: "Medium",
    accent: "#9b6a3c",
    finished: "manual-coffee-grinder-finished-v1.jpg",
    finishedAlt: "Handmade graphite and colored-pencil sketch of an old-fashioned manual coffee grinder with warm walnut box cabinet, visible front and right side planes, three visible short feet, domed gray metal hopper with collar bolts, long raised crank, rounded wooden knob, centered front drawer and pull, two front-corner screws, wood grain, and soft cast shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional brown, ochre, and cool gray colored pencils"],
    materialNote: "Use graphite for the perspective construction, hopper, crank, drawer, hardware, grain, and shadow. Add brown, ochre, and cool gray pencil only after the complete grinder structure is established.",
    tipLabel: "Sketch tip",
    steps: [
      { name: "Block the grinder cabinet", text: "Draw a light box with visible front, right side, and top planes, then reserve the hopper circle, centered drawer, raised crank path, three visible feet, and ground axis.", tip: "Compare the two receding top edges before adding anything mechanical. Keep the hopper and drawer footprints blank instead of finishing wood grain that those forms would cover." },
      { name: "Shape the wooden cabinet", text: "Wrap the guides with clean cabinet edges, a shallow top rim, front and side planes, lower rails, and three visible short feet.", tip: "Use the same pair of vanishing directions for the top, drawer, and base edges. Squint at the feet to make sure the cabinet sits level rather than tipping forward." },
      { name: "Add the hopper and crank", text: "Build the domed metal hopper and collar, follow the raised crank path to its rounded wooden knob, then draw the centered drawer front and small pull.", tip: "Ghost the hopper ellipses before touching down and keep their tilt related to the top plane. Trace the crank once with your eyes so it passes above the hopper without crossing through it." },
      { name: "Describe the grinder materials", text: "Add cabinet seams, exactly two front-corner screws, the small hopper-collar bolts, restrained directional wood grain, a few metal hatch marks, and one cast shadow.", tip: "Pull the grain along each cabinet plane and stop it at the drawer, hopper, and trim edges. A handful of changing lines suggests wood better than covering every surface evenly." },
      { name: "Shade the wood and metal", text: "Layer warm walnut and ochre pencil over the cabinet and knob, cool gray over the hopper and crank, graphite depth around the drawer and hardware, and soft tone into the shadow.", tip: "Build the wood in two light passes and leave narrow paper highlights on the front edges. Keep the metal cooler and smoother so the material change reads before the details." },
      { name: "Finish the grinder study", text: "Strengthen the keeper contours and clarify the established cabinet, hopper, crank, drawer, hardware, textures, restrained color, and cast shadow.", tip: "Check that the drawer and top rim still follow the same perspective, then stop. Beans, a cup, spoon, hands, lettering, or a table scene would distract from the compact mechanism.", image: true }
    ]
  },
  {
    slug: "acoustic-guitar",
    day: "086",
    date: "Sunday, July 19",
    isoDate: "2026-07-19",
    subject: "an acoustic guitar",
    headlineSubject: "an acoustic<br>guitar",
    shortSubject: "an acoustic guitar",
    lessonTitle: "Let's draw an acoustic guitar",
    description: "Learn how to draw an acoustic guitar with a diagonal center axis, rounded upper and lower bouts, narrow waist, long neck, headstock, sound hole, bridge, strings, tuning pegs, pickguard, warm wood color, and soft pencil shadow.",
    intro: "Build the guitar around one long center axis, connect two body masses through the waist, then fit the sound hole, neck, bridge, strings, tuners, and warm wood color onto that same structure. The useful skill is comparing the two body curves while keeping the neck and bridge aimed along one shared line.",
    time: 25,
    difficulty: "Medium",
    accent: "#c88a3f",
    finished: "acoustic-guitar-finished-v1.jpg",
    finishedAlt: "Handmade graphite and warm ochre colored-pencil sketch of a diagonal acoustic guitar with rounded wooden body, narrow waist, long dark fingerboard, six strings, six tuning pegs, centered sound hole, bridge, black pickguard, light wood grain, and soft cast shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional warm ochre colored pencil"],
    materialNote: "Use graphite for the construction, body, neck, sound hole, hardware, strings, grain, and shadow. Add warm ochre pencil only after the complete guitar structure is established.",
    tipLabel: "Sketch tip",
    steps: [
      { name: "Set the guitar proportions", text: "Draw one light diagonal center axis, place overlapping upper and lower body ovals around it, pinch in two waist guides, then extend a long neck and small headstock block.", tip: "Ghost the full center axis before touching down. Compare the empty spaces on both sides of it so the body stays balanced without becoming mechanically symmetrical." },
      { name: "Shape the guitar body", text: "Wrap the guides with the rounded upper and lower bouts, narrow waist, long neck, and headstock, keeping the same diagonal pose.", tip: "Rotate the page for each long outside curve and draw from one bout toward the waist. Reserve the narrow fingerboard footprint instead of finishing body detail beneath it." },
      { name: "Build the playing surface", text: "Add the centered sound hole, fingerboard, bridge, saddle, simple pickguard, restrained fret marks, and six light strings to the established guitar.", tip: "Use the center axis to line up the sound hole and bridge, then keep the strings parallel as they cross them. Draw the set lightly enough that you can correct spacing before darkening." },
      { name: "Finish the guitar hardware", text: "Add exactly six tuning pegs, clarify the string paths from bridge to headstock, and trace the visible outer body seam.", tip: "Count three tuners on each side before strengthening them. Squint at the neck once to make sure the strings still aim toward the center of the bridge." },
      { name: "Shade the warm wood", text: "Add restrained ochre pencil to the established body, soft graphite depth to the fingerboard and hardware, a few directional grain marks, and one cast shadow.", tip: "Pull the ochre strokes along the body length and leave narrow paper highlights near the curved edge. Two light passes feel more like wood than one solid fill." },
      { name: "Finish the guitar sketch", text: "Strengthen the keeper contours and clarify the established body, neck, hardware, strings, warm wood color, grain, and cast shadow.", tip: "Check that the sound hole, bridge, and neck still share one axis, then stop. A player, case, amplifier, room, or second instrument is not needed.", image: true }
    ]
  },
  {
    slug: "spool-of-thread-and-needle",
    day: "019",
    date: "Wednesday, May 13",
    isoDate: "2026-05-13",
    subject: "a spool of thread and needle",
    headlineSubject: "a spool of thread<br>and needle",
    shortSubject: "a spool and needle",
    lessonTitle: "Let's draw a spool of thread and needle",
    description: "Learn how to draw a wooden spool of thread and sewing needle with stacked ellipses, wrapped blue thread, one continuous loose strand, a visible needle eye, warm wood color, silver-gray metal, and soft graphite shadow.",
    intro: "Stack a few light ellipses into one wooden spool, place the needle on a diagonal, then connect them with a single thread path before adding texture and restrained color. This honest archive lesson is a fresh sewing still life, not a claim about earlier visitors, comments, activity, or popularity.",
    time: 20,
    difficulty: "Easy-medium",
    accent: "#356f9f",
    finished: "spool-of-thread-and-needle-finished-v1.jpg",
    finishedAlt: "Handmade graphite and colored-pencil sketch of a three-quarter wooden spool wrapped in blue thread beside one diagonal silver sewing needle, with one continuous blue strand passing through the needle eye, warm ochre flanges, curved thread ridges, and soft cast shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional blue and ochre colored pencils"],
    materialNote: "Use graphite for the spool construction, needle, thread ridges, eye, edge rings, and shadow. Add blue and ochre pencil only after the single thread path and full spool are established.",
    tipLabel: "Sketch tip",
    steps: [
      { name: "Block the spool and needle", text: "Draw a light vertical spool axis, two wide flange ellipses, a central barrel, one diagonal needle guide, and one loose thread path connecting the two.", tip: "Ghost both flange ellipses before touching down and keep their tilt related. Mark the needle-eye location early so the thread path has a clear destination." },
      { name: "Shape the wooden spool", text: "Wrap the ellipses into the top and bottom wooden flanges and central barrel without changing the shallow three-quarter view.", tip: "Compare the visible thickness of both flanges and keep their center holes aligned to the same axis. Slight doubled lines make the ellipses feel drawn, not stamped." },
      { name: "Wrap the thread and place the needle", text: "Build the wrapped thread cylinder, draw the full sewing needle along its guide, and carry one continuous loose strand through the planned eye location.", tip: "Curve the thread ridges with the spool instead of stacking flat lines. Trace the loose strand with your eyes once to make sure it never breaks or multiplies." },
      { name: "Add the sewing details", text: "Clarify the needle eye, flange center hole, wooden edge rings, and a few stronger curved thread ridges on the established forms.", tip: "Darken only a handful of thread turns and let the others stay soft. The variation suggests many wraps without asking you to draw every strand." },
      { name: "Shade the sewing colors", text: "Add blue pencil to the thread, warm ochre to the wooden flanges, silver-gray graphite to the needle, and one soft cast shadow.", tip: "Pull the blue strokes around the spool's curve and leave scattered paper gaps. Keep the thread strand and needle lighter than the dense wrapped cylinder so they remain distinct." },
      { name: "Finish the sewing sketch", text: "Strengthen the keeper contours and clarify the established spool, thread, needle, continuous strand, material colors, texture, and shadow.", tip: "Follow the blue strand from spool to needle eye one final time, then stop. Fabric, scissors, buttons, a machine, or extra notions would crowd the compact still life.", image: true }
    ]
  },
  {
    slug: "leaping-bottlenose-dolphin",
    day: "085",
    date: "Saturday, July 18",
    isoDate: "2026-07-18",
    subject: "a leaping bottlenose dolphin",
    headlineSubject: "a leaping<br>bottlenose dolphin",
    shortSubject: "a leaping dolphin",
    lessonTitle: "Let's draw a leaping bottlenose dolphin",
    description: "Learn how to draw a leaping bottlenose dolphin with a sweeping body gesture, rounded forehead, short beak, dorsal fin, two pectoral flippers, paired tail flukes, facial landmarks, a small splash, and restrained blue-gray pencil color.",
    intro: "Start with one long rising gesture, wrap a simple dolphin body around it, then add the fins, tail, landmarks, splash, and ocean color without changing the pose. The useful skill is keeping every piece of anatomy aimed along the same flowing centerline so the leap feels lively instead of assembled from separate parts.",
    time: 25,
    difficulty: "Medium",
    accent: "#6287a8",
    finished: "leaping-bottlenose-dolphin-finished-v1.jpg",
    finishedAlt: "Handmade graphite and blue-gray colored-pencil sketch of a bottlenose dolphin leaping upward with a rounded forehead, short beak, dorsal fin, two pectoral flippers, paired tail flukes, pale belly, small water splash, and soft watery shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional blue-gray colored pencil"],
    materialNote: "Use graphite for the gesture, anatomy, facial landmarks, splash, and shadow. Add blue-gray pencil only after the body, fins, flippers, and tail flukes are established.",
    tipLabel: "Sketch tip",
    steps: [
      { name: "Sweep the dolphin gesture", text: "Draw one light rising C-curve, place overlapping head and torso masses along it, then add a short beak guide, belly axis, and tapering tail axis.", tip: "Ghost the full arc two or three times before touching down. A single relaxed sweep is easier to build on than several unrelated body ovals." },
      { name: "Shape the leaping body", text: "Wrap the guides with a rounded forehead, short beak, arched back, pale belly edge, and tapered tail stock.", tip: "Rotate the page for the long back and belly curves. Compare the empty wedge between them near the tail so the body narrows smoothly instead of pinching suddenly." },
      { name: "Add fins and flukes", text: "Attach the curved dorsal fin, one full near flipper, the visible part of the far flipper, and two paired tail flukes to the established body.", tip: "Aim every fin away from the same body centerline. Draw only the far flipper edge you can actually see rather than finishing anatomy hidden behind the belly." },
      { name: "Place the dolphin landmarks", text: "Add the small eye, gentle mouth line, blowhole, belly division, and a few water-splash arcs beneath the leap.", tip: "Use the beak base to align the eye and mouth, then keep the blowhole on the crown center. Feel free to vary the splash rhythm while leaving the dolphin pose unchanged." },
      { name: "Shade the ocean colors", text: "Add restrained blue-gray pencil to the established back and fins, keep the belly pale, then place soft graphite depth and a watery shadow below.", tip: "Pull the color strokes along the dolphin's arc and leave narrow paper highlights on the forehead and back. Two light passes preserve more life than one heavy fill." },
      { name: "Finish the dolphin sketch", text: "Strengthen the keeper contours and clarify the established facial landmarks, fin overlaps, restrained color, splash, and watery shadow.", tip: "Squint once to check that the rising body reads before the details. Stop before adding fish, waves, a horizon, or a second dolphin—the single leap already carries the drawing.", image: true }
    ]
  },
  {
    slug: "vintage-travel-suitcase",
    day: "020",
    date: "Thursday, May 14",
    isoDate: "2026-05-14",
    subject: "a vintage travel suitcase",
    headlineSubject: "a vintage travel<br>suitcase",
    shortSubject: "a vintage suitcase",
    lessonTitle: "Let's draw a vintage travel suitcase",
    description: "Learn how to draw a vintage travel suitcase with a shallow three-quarter box, rounded leather shell, lid seam, reinforced corner caps, arched handle, two straps and latch assemblies, a blank luggage tag, stitching, warm pencil color, and soft shadow.",
    intro: "Build a shallow box in three-quarter view, soften it into an old leather case, then fit the handle, straps, hardware, blank tag, and warm pencil texture onto those same planes. This honest archive lesson is a fresh travel-object study, not a claim about earlier visitors, comments, activity, or popularity.",
    time: 25,
    difficulty: "Medium",
    accent: "#9b6d43",
    finished: "vintage-travel-suitcase-finished-v1.jpg",
    finishedAlt: "Handmade graphite and warm brown colored-pencil sketch of a three-quarter vintage leather travel suitcase with rounded shell, lid seam, six visible reinforced corner caps, arched handle, two vertical straps and latch assemblies, a blank hanging luggage tag, stitching, worn creases, ochre hardware, and soft ground shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional warm brown and ochre colored pencils"],
    materialNote: "Use graphite for the case planes, seam, straps, hardware, blank tag, stitching, wear, and shadow. Add warm brown and ochre pencil only after every visible part is established.",
    tipLabel: "Sketch tip",
    steps: [
      { name: "Block the travel case", text: "Draw a light shallow three-quarter box with visible front, top, and right-side planes, then add center guides and two small handle anchors.", tip: "Compare the three receding top edges before darkening anything. They do not need perfect perspective, but they should all aim toward the same quiet direction." },
      { name: "Round the leather shell", text: "Soften the box into a rounded case, draw the lid seam, and add six visible reinforced corner caps without changing the perspective.", tip: "Round each corner inside the original box instead of expanding the case. Use the lid seam to check that the front and side planes still agree." },
      { name: "Fit the handle and straps", text: "Add the centered arched handle, two vertical leather straps, and two aligned latch assemblies to the established case planes.", tip: "Mark both strap paths lightly before drawing either buckle. Compare their spacing from the center so the hardware feels attached to one case, not floating on top." },
      { name: "Add the travel details", text: "Hang one small blank luggage tag from the handle, then add simple buckle details, short stitch marks, and a few leather creases.", tip: "Keep the tag completely text-free and break any rear line where the tag or strap overlaps it. You can vary the crease rhythm while leaving the hardware clear." },
      { name: "Shade the worn leather", text: "Add warm brown pencil to the established leather, pale ochre to the hardware, restrained graphite wear along existing edges, and one soft ground shadow.", tip: "Pull the brown strokes along each case plane and leave narrow paper highlights near the rounded edges. Build the worn look with two light passes instead of pressing hard." },
      { name: "Finish the suitcase sketch", text: "Strengthen the keeper contours and clarify the established shell, seam, handle, straps, hardware, blank tag, stitching, leather color, wear, and shadow.", tip: "Check that both straps remain aligned and the tag stays blank, then stop. Passports, maps, destination labels, clothing, and a station scene are not needed.", image: true }
    ]
  },
  {
    slug: "garden-rose-in-bloom",
    day: "084",
    date: "Friday, July 17",
    isoDate: "2026-07-17",
    subject: "a garden rose in bloom",
    headlineSubject: "a garden rose<br>in bloom",
    shortSubject: "a garden rose",
    lessonTitle: "Let's draw a garden rose in bloom",
    description: "Learn how to draw a garden rose in bloom with a tilted cup, broad outer petals, a curled layered center, front overlap folds, pointed sepals, two serrated leaves, tiny thorns, and restrained pencil color.",
    intro: "Start with one tilted bloom cup and a diagonal stem, then open the broad petals around a reserved center before layering the tighter curls, sepals, and two leaves. The overlap order is the real lesson: draw only the petal edges that stay visible instead of finishing shapes that the front folds immediately cover.",
    time: 25,
    difficulty: "Medium",
    accent: "#c95e72",
    finished: "garden-rose-in-bloom-finished-v1.jpg",
    finishedAlt: "Handmade graphite and colored-pencil sketch of a three-quarter pink garden rose with layered overlapping petals, pointed green sepals, a diagonal thorned stem, two serrated leaves, and a soft gray cast shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional rose-pink and green colored pencils"],
    materialNote: "Use graphite for the construction, petal overlaps, leaf veins, thorns, and shadow. Add rose-pink and green pencil only after every bloom, stem, sepal, and leaf shape is established.",
    tipLabel: "Sketch tip",
    steps: [
      { name: "Set the bloom angle", text: "Draw a light diagonal stem gesture, place a tilted oval cup at the top, then add a small center spiral and a broad petal envelope.", tip: "Ghost the stem and cup angle before touching down. Keeping those two guides related will stop the bloom from looking pasted onto the stem." },
      { name: "Open the outer petals", text: "Build five broad outer petal contours around the reserved center and clarify the rose silhouette.", tip: "Place the petal tips first, then connect them with relaxed curves. Compare the uneven paper gaps between petals instead of chasing perfect symmetry." },
      { name: "Layer the petal center", text: "Add curled inner petals around the spiral and three front overlap folds, drawing only the petal edges that remain visible.", tip: "Work from the center outward and break a rear line whenever a front fold crosses it. Those clean interruptions make the rose feel layered without extra shading." },
      { name: "Grow the stem and leaves", text: "Add the pointed sepals, curved stem, two differently angled serrated leaves, and two tiny thorns.", tip: "Mark both leaf tips before drawing their edges, then pull each center vein toward the stem. Feel free to vary the serration rhythm while keeping the two leaf shapes clear." },
      { name: "Shade the rose color", text: "Add restrained rose-pink pencil to the petals, leafy green to the sepals, leaves, and stem, then place soft graphite in the petal pockets and beneath the flower.", tip: "Follow each petal curve with light pencil strokes and leave small paper highlights along the turned edges. Build color in two pale passes instead of pressing hard at once." },
      { name: "Finish the rose sketch", text: "Strengthen the keeper contours and clarify the established petal overlaps, stem, leaves, thorns, restrained colors, and cast shadow.", tip: "Squint once to check that the bloom reads first and both leaves remain visible. Stop before adding a vase, extra blossom, insect, or decorative border.", image: true }
    ]
  },
  {
    slug: "wooden-rocking-horse",
    day: "021",
    date: "Friday, May 15",
    isoDate: "2026-05-15",
    subject: "a wooden rocking horse",
    headlineSubject: "a wooden<br>rocking horse",
    shortSubject: "a rocking horse",
    lessonTitle: "Let's draw a wooden rocking horse",
    description: "Learn how to draw a wooden rocking horse with a side-view body, four attached legs, two curved rocker rails, two support braces, carved mane and tail, saddle, bridle, handle peg, wood grain, and restrained pencil color.",
    intro: "Place the two long rockers first, then build the horse above them before adding the supports, carved details, tack, and warm wood color. This honest archive lesson is a fresh toy-sketch prompt, not a claim about earlier visitors, comments, or popularity.",
    time: 25,
    difficulty: "Medium",
    accent: "#a56f3e",
    finished: "wooden-rocking-horse-finished-v1.jpg",
    finishedAlt: "Handmade graphite and colored-pencil sketch of a side-view wooden rocking horse with four legs, two curved rocker rails, two support braces, a muted red saddle, dark bridle, handle peg, ochre mane and tail, wood grain, and a soft gray cast shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional brown, muted red, and ochre colored pencils"],
    materialNote: "Use graphite for construction, joints, tack, seams, and shadow. Add warm brown, muted red, and ochre pencil only after the horse, four legs, rockers, supports, saddle, and bridle are established.",
    tipLabel: "Sketch tip",
    steps: [
      { name: "Set the horse and rockers", text: "Place two long shallow rocker arcs, then add an oval body, a rising neck line, a small head block, and four angled leg guides at one fixed scale.", tip: "Ghost both rocker curves before touching down and keep them parallel. Reserve a clear saddle footprint on top of the body so later details have room." },
      { name: "Build the wooden silhouette", text: "Wrap the body, neck, head, and muzzle around the guides, then shape exactly four attached legs and connect them toward the established rocker rails.", tip: "Keep the two far legs subtly behind the near pair. Compare the gaps between the legs so all four remain readable instead of merging into one wooden block." },
      { name: "Carve the horse details", text: "Add two ears, one visible eye, the short notched mane, simple tail, four hoof ends, and two structural braces to the existing toy.", tip: "Follow the neck curve with the mane and point both braces toward the rocker assembly. Count four hoof ends before darkening any joint." },
      { name: "Fit the saddle and tack", text: "Place a simple saddle over the reserved back area, then add bridle straps, one horizontal handle peg, and a few carved wooden seams.", tip: "Keep the saddle inside the footprint you saved in step one. Let the bridle wrap the established head rather than changing the muzzle or neck shape." },
      { name: "Layer the toy colors", text: "Add warm brown to the wood and rockers, muted red to the saddle, ochre to the mane and tail, dark brown to the bridle, and soft graphite depth underneath.", tip: "Pull colored-pencil strokes along each wooden form and leave small paper highlights. A restrained first pass keeps the construction and grain visible." },
      { name: "Finish the rocking horse", text: "Strengthen the keeper contours and clarify the established joints, tack, wood seams, restrained colors, and cast shadow.", tip: "Check for exactly four legs, two rocker rails, two supports, one saddle, and one handle peg, then stop. A rider, room, floorboards, or extra toy is not needed.", image: true }
    ]
  },
  {
    slug: "ear-of-corn-with-husks",
    day: "083",
    date: "Thursday, July 16",
    isoDate: "2026-07-16",
    subject: "an ear of corn with peeled husks",
    headlineSubject: "an ear of corn<br>with peeled husks",
    shortSubject: "an ear of corn",
    lessonTitle: "Let's draw an ear of corn with peeled husks",
    description: "Learn how to draw an ear of corn with a tapered cob, two peeled husks, curved kernel guides, staggered kernel rows, silk, leafy veins, restrained colored pencil, and a soft graphite shadow.",
    intro: "Start with one long cob axis, then peel two husks around the reserved opening before fitting in the kernel rows and summer color. The curved grid is useful practice for making repeated details wrap around a rounded form instead of sitting on it like a flat checkerboard.",
    time: 25,
    difficulty: "Medium",
    accent: "#c89f32",
    finished: "ear-of-corn-with-husks-finished-v1.jpg",
    finishedAlt: "Handmade graphite and colored-pencil sketch of a diagonal golden ear of corn with two peeled green husks, curved staggered kernel rows, a tan silk tuft, and a soft gray ground shadow",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional yellow, green, and tan pencils"],
    materialNote: "Use graphite for the construction, kernel rows, veins, and shadow. Add yellow, green, and tan pencil only after every cob and husk shape is established.",
    tipLabel: "Sketch tip",
    steps: [
      { name: "Block the cob angle", text: "Draw a light diagonal axis, wrap a tapered oval around it for the cob, and place a wider leaf envelope around the lower half.", tip: "Ghost the long axis two or three times before touching down. A relaxed diagonal gives the cob energy and keeps the husks from feeling stiff." },
      { name: "Peel back the husks", text: "Build two overlapping pointed husks around the reserved cob opening, then add a short stem nub at the base and a small silk tuft at the tip.", tip: "Compare the two empty wedges between the cob and the husks. They can differ, but both should stay open enough for the corn silhouette to read." },
      { name: "Shape the exposed cob", text: "Clarify the rounded cob taper inside the husks, then draw gently curved horizontal and lengthwise guides that wrap around its volume.", tip: "Rotate the page for the long guide curves. Let the cross-guides bow more near the middle and flatten toward the tapered ends." },
      { name: "Set the kernel rows", text: "Fill the existing guide grid with staggered rounded kernels, then add a few long veins inside the established husks.", tip: "Work one short row at a time and offset each kernel from the row beside it. Keep the lower kernels hidden where the opaque husks overlap the cob." },
      { name: "Layer the harvest colors", text: "Add golden yellow to the drawn kernels, leafy green to the husks, pale tan to the silk, and a soft graphite shadow below.", tip: "Pull colored-pencil strokes in the direction of each form and leave small paper highlights on the kernels. A light first pass keeps the graphite readable." },
      { name: "Finish the corn sketch", text: "Strengthen the keeper contours and clarify the established kernels, husk veins, silk, restrained color, and ground shadow.", tip: "Squint at the drawing once: the yellow cob should read first, with the two green husks supporting it. Stop before adding a plate, basket, or extra produce—the single ear is already complete.", image: true }
    ]
  },
  {
    slug: "fountain-pen-and-ink-bottle",
    day: "022",
    date: "Saturday, May 16",
    isoDate: "2026-05-16",
    subject: "a fountain pen and ink bottle",
    headlineSubject: "a fountain pen<br>and ink bottle",
    shortSubject: "a fountain pen and ink bottle",
    lessonTitle: "Let's draw a fountain pen and ink bottle",
    description: "Learn how to draw a fountain pen and ink bottle with a faceted glass body, threaded neck, blank inset panel, curved ink level, tapered brown barrel, metal nib, restrained pencil color, and soft shadows.",
    intro: "Place the squat bottle and long pen together, then build their glass and metal landmarks before adding the dark ink and warm barrel color. This honest archive lesson is a fresh still-life prompt, not a claim about earlier visitors, comments, or popularity.",
    time: 25,
    difficulty: "Medium",
    accent: "#586879",
    finished: "fountain-pen-and-ink-bottle-finished-v1.jpg",
    finishedAlt: "Handmade graphite and colored-pencil still life of a squat faceted glass ink bottle with a blank front panel and blue-black ink beside an uncapped brown fountain pen with a warm metal nib and soft gray shadows",
    materials: ["Graphite pencil", "Drawing paper", "Eraser", "Optional blue-black, brown, and ochre pencils"],
    materialNote: "Use graphite to construct the glass, barrel, nib, and shadows. Add colored pencil only after the ink level, bottle planes, nib landmarks, and reserved highlights are visible.",
    tipLabel: "Sketch tip",
    steps: [
      { name: "Place the bottle and pen", text: "Block a squat bottle with a centered neck ellipse, then set one long diagonal centerline and two light parallel guides for the pen beside it.", tip: "Ghost the pen angle first and compare its length with the bottle height. Keeping a clear wedge of paper between the two objects will stop the pen from hiding the glass." },
      { name: "Shape the glass and pen", text: "Build the bottle's sloped shoulders, short threaded neck, beveled base, tapered pen barrel, narrow grip, and exposed nib around the guides.", tip: "Compare the shoulder angles and bottom bevels instead of measuring them. Small asymmetry feels handmade, but each plane should still turn toward the same bottle front." },
      { name: "Add the ink and nib landmarks", text: "Draw a blank inset front panel and curved ink-level line inside the bottle, then add the grip band, nib slit, and small breathing hole.", tip: "Echo the neck ellipse when you curve the ink level. On the nib, place the slit before the breathing hole so both stay centered along the pen axis." },
      { name: "Describe the glass planes", text: "Add a few inner glass edges and reserve pale reflection shapes on the established bottle, leaving the front panel completely blank.", tip: "Use fewer marks than you think you need. Two or three clear edge changes and untouched paper highlights can describe glass better than even shading everywhere." },
      { name: "Tint the writing tools", text: "Add blue-black pencil below the existing ink line, warm brown to the barrel, pale ochre-gray to the nib, and one soft shadow beneath both objects.", tip: "Pull the brown strokes along the barrel and keep the blue-black ink darker at the bottom. Work around the reserved glass highlights instead of trying to erase them later." },
      { name: "Finish the writing still life", text: "Strengthen the keeper contours and clarify the established glass planes, nib details, ink, barrel color, highlights, and shadows.", tip: "Check that the bottle front remains text-free and the pen still sits beside it rather than through it. Stop before adding a cap, paper, handwriting, or desk clutter.", image: true }
    ]
  },
  {
    slug: "porch-swing-with-cushion",
    day: "082",
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
    day: "023",
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
    day: "081",
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
    day: "024",
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
    day: "080",
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
    slug: "old-fashioned-desk-fan", day: "025", date: "Tuesday, May 19", isoDate: "2026-05-19", subject: "an old-fashioned desk fan", headlineSubject: "an old-fashioned<br>desk fan", shortSubject: "a desk fan", lessonTitle: "Let's draw an old-fashioned desk fan",
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
    day: "026",
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
    day: "079",
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
    day: "078",
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
    day: "027",
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
    day: "028",
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
    day: "029",
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
    day: "030",
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
    day: "031",
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
    day: "074",
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
    day: "075",
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
    day: "076",
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
    day: "077",
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
    day: "032",
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
    day: "073",
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
    day: "033",
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
    day: "072",
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
    day: "034",
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
    day: "035",
    date: "Friday, May 29",
    isoDate: "2026-05-29",
    subject: "a garden gnome",
    headlineSubject: "a garden gnome",
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
    day: "036",
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
    day: "070",
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
    day: "071",
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
    day: "037",
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
    day: "038",
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
    day: "069",
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
    day: "039",
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
    day: "068",
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
    day: "040",
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
    day: "067",
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
    day: "041",
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
    day: "052",
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
    day: "066",
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
    day: "065",
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
    day: "064",
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
    day: "063",
    date: "Friday, June 26",
    isoDate: "2026-06-26",
    subject: "a dog at a desk",
    headlineSubject: "a dog at a desk",
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
    day: "062",
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
    day: "061",
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
    day: "060",
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
    day: "059",
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
    day: "058",
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
    day: "057",
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
    day: "056",
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
    day: "055",
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
    day: "054",
    date: "Wednesday, June 17",
    isoDate: "2026-06-17",
    subject: "a cozy teacup",
    headlineSubject: "a cozy teacup",
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
    day: "053",
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
    day: "051",
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
    day: "050",
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
    day: "049",
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
    day: "048",
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
    day: "047",
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
    day: "044",
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
    day: "042",
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
    day: "043",
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
    day: "045",
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
    day: "046",
    date: "Tuesday, June 9",
    isoDate: "2026-06-09",
    subject: "a soccer ball on grass",
    headlineSubject: "a soccer ball",
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
const headlineLines = (value, slug) => {
  const manualLines = String(value)
    .split(/<br\s*\/?>/i)
    .map((line) => line.trim())
    .filter(Boolean);

  if (!manualLines.length) {
    throw new Error(`${slug}: headlineSubject cannot be empty.`);
  }

  const strandedLine = manualLines.find((line) =>
    line.length === 1 || /^(?:a|an|the)$/i.test(line));
  if (strandedLine) {
    throw new Error(`${slug}: headlineSubject strands "${strandedLine}" on its own line; keep articles with their noun phrase.`);
  }

  const compactLength = manualLines.join(" ").replace(/\s+/g, "").length;
  return compactLength <= 12 ? [manualLines.join(" ")] : manualLines;
};
const headlineHtml = (value, slug) => headlineLines(value, slug)
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
  const seoTitlePhrase = lesson.seoTitlePhrase || `${titleArticle} ${titleSubject}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      orgNode,
      siteNode,
      {
        "@type": "HowTo",
        "@id": `${lessonUrl(lesson)}#howto`,
        name: `How to Draw ${seoTitlePhrase}`,
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
  <title>How to Draw ${seoTitlePhrase} Step by Step | sketcha.day</title>
  <meta name="description" content="${lesson.description}">
  <link rel="canonical" href="https://sketcha.day/tutorials/${lesson.slug}.html">
  <meta property="og:type" content="article">
  <meta property="og:title" content="How to Draw ${seoTitlePhrase}, Step by Step">
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
        <h1 id="hero-title" aria-label="How to draw ${lesson.subject}"><span class="headline-lead">How to draw...</span> <em aria-hidden="true">${headlineHtml(lesson.headlineSubject ?? lesson.subject, lesson.slug)}</em></h1>
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
        <p class="kicker">${lesson.slug === latestLesson.slug ? "Pencil ready?" : "From the archive"}</p>
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
