const deptPath = 'SCP DEPTS';
const colorPath = 'SCP BACKS';

let titleField, accessField, magstripeField, colorField, departmentField, badgeField;
let base_logo, icx_logo, barcodeCanvas;
let colorBacks = {};
let deptLogos = {};
let deptLogosInv = {};
let ocrFont, impactFont;

function preload() {
  ocrFont = loadFont('ocraI.ttf');
  impactFont = loadFont('impact.ttf');
  base_logo = loadImage(deptPath + '/SCP_LOGO_Departmentless.png');
  icx_logo = loadImage('ICX-Small.png');

  // Add all your color and dept names here
  let colors = [
    "Black",
    "Blue",
    "Brown",
    "Cyan",
    "D-Blue",
    "D-Green",
    "Grape",
    "Green",
    "Indigo",
    "L-Blue",
    "Lime",
    "L-Orange",
    "Orange",
    "P-Blue",
    "P-Green",
    "Pink",
    "P-Pink",
    "P-Purple",
    "P-Red",
    "Purple",
    "P-Yellow",
    "Red",
    "Violet",
    "Yellow"
  ];
  let depts = [
    "Administration",
    "Engineering",
    "Ethics",
    "ExternalAffairs",
    "Intelligence",
    "InternalSecurity",
    "Logistics",
    "Manufacturing",
    "Medical",
    "MobileTaskForce",
    "Regular",
    "Science",
    "Security",
    "Tribunal"
  ];


  colors.forEach(c => colorBacks[c] = loadImage(`${colorPath}/${c}.png`));
  depts.forEach(d => deptLogos[d] = loadImage(`${deptPath}/${d}.svg`));
}

function setup() {
  let holder = select('#canvas-holder');
  let cnv = createCanvas(holder.width, holder.height);
  cnv.parent('canvas-holder');
  pixelDensity(displayDensity());

  barcodeCanvas = document.createElement('canvas');

  // Input listeners - Use input() for live updates, changed() for dropdowns
  titleField = select('#fname'); titleField.input(updateAndRedraw);
  accessField = select('#clearance'); accessField.changed(updateAndRedraw);
  departmentField = select('#department'); departmentField.changed(updateAndRedraw);
  colorField = select('#card-color'); colorField.changed(updateAndRedraw);
  badgeField = select('#badge'); badgeField.input(updateAndRedraw);
  magstripeField = select('#magstripe'); magstripeField.input(updateAndRedraw);

  select("#mag-rand").mousePressed(() => {
    badgeField.value(Math.floor(random(100000000, 999999999)));
    updateAndRedraw();
  });

  select("#copy-card-data").mousePressed(() => {
    let data = {
      title: titleField.value(),
      clearance: accessField.value(),
      dept: departmentField.value(),
      color: colorField.value(),
      badge: badgeField.value(),
      magstripe: magstripeField.value()
    }
    let json = JSON.stringify(data)
    copyToClipboard(json)
  });

  // Initial Pre-Inversion  
  base_logo_inv = makeInverted(base_logo);
  for (let key in deptLogos) {
    deptLogosInv[key] = makeInverted(deptLogos[key]);
  }

  updateAndRedraw();
}

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Text copied to clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}

function updateAndRedraw() {
  updateBarcode();
  redraw();
}

function updateBarcode() {
  const val = badgeField.value() || '000000000';
  try {
    bwipjs.toCanvas(barcodeCanvas, {
      bcid: 'japanpost',
      text: val,
      scale: 2
    });
  } catch (e) { console.log(e); }
}

function makeInverted(img) {
  let g = createGraphics(img.width, img.height);
  g.image(img, 0, 0);
  g.filter(INVERT);
  return g;
}

function calcCardSize() {
  let isMobile = width < height;
  // 1. Determine available space
  let availableW = width * 0.9;
  let availableH = isMobile ? height * 0.45 : height * 0.9; // Front takes roughly half height on mobile

  // 2. Calculate the size based on the most restrictive dimension
  // We want to maintain the 1.625 aspect ratio (w/h)
  let w = min(isMobile ? availableW : availableW / 2, availableH * 1.625);
  if (!isMobile) w = min(w, 500); // Cap desktop size

  let h = w * 0.615;
  return { width: w, height: h }
}

function windowResized() {

  let holder = select('#canvas-holder');
  let cardSize = calcCardSize();
  // If we are on mobile, the canvas needs to be at least 2 cards tall
  let minHeight = (windowWidth < 800) ? (cardSize.height * 2 + 100) : holder.height;
  resizeCanvas(holder.width, minHeight);
  redraw();
}

function draw() {
  background(25);

  let isMobile = width < height; // Match our CSS breakpoint
  let cardSize = calcCardSize();
  let w = cardSize.width
  let h = cardSize.height

  push();
  if (isMobile) {
    // Center vertically and horizontally
    let totalStackHeight = (h * 2) + 20;
    translate(width / 2 - w / 2, height / 2 - totalStackHeight / 2);

    renderFront(w, h);
    translate(0, h + 20);
    renderBack(w, h);
  } else {
    // Desktop: Side-by-side
    translate(width / 2 - w - 10, height / 2 - h / 2);
    renderFront(w, h);
    translate(w + 20, 0);
    renderBack(w, h);
  }
  pop();

  noLoop();
}

function renderFront(w, h) {
  let should_invert = colorField.elt.selectedOptions[0].dataset.invert === "true";

  // Background
  push()
  clip(() => {
    rect(0, 0, w, h, 10);
  })
  let bg = colorBacks[colorField.value()] || colorBacks["Red"];
  image(bg, 0, 0, w, h);
  pop()

  // Logos
  let logo = should_invert ? base_logo_inv : base_logo;
  let dLogo = should_invert ? deptLogosInv[departmentField.value()] : deptLogos[departmentField.value()];

  image(logo, w * 0.02, 0, w * 0.6, h * 0.45);
  if (dLogo) image(dLogo, w * 0.4, h * 0.03, w * 0.2, w * 0.2);

  // Text
  fill(0);
  textAlign(LEFT);
  textFont(impactFont);
  textSize(h * 0.12);
  text(titleField.value().toUpperCase(), w * 0.025, h * 0.65);
  textSize(h * 0.12);
  text("ACCESS CARD", w * 0.025, h * 0.85);

  fill(should_invert ? 255 : 0)
  textFont(ocrFont);
  textSize(h * 0.25);
  textAlign(CENTER);
  text(accessField.value(), w * 0.9, h * 0.38);
}

function renderBack(w, h) {
  fill(255);
  rect(0, 0, w, h, 10);

  // Magstripe
  fill(0);
  rect(0, h * 0.1, w, h * 0.25);

  // Barcode
  if (barcodeCanvas) {
    imageMode(CENTER);
    drawingContext.drawImage(barcodeCanvas, w * 0.05, h * 0.8, w * 0.9, h * 0.1);
  }

  // Footer
  fill(0);
  textAlign(CENTER);
  push();
  textSize(h * 0.035);
  textFont(ocrFont);
  text(magstripeField.value().toUpperCase(), w / 2, h * 0.075);
  pop();
  textSize(h * 0.02);
  text("Property of the SCP Foundation", w / 2, h * 0.95);
  textAlign(RIGHT);

  const formattedDate = new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(new Date()).toUpperCase();
  text(formattedDate, w * 0.94, h * 0.95)

  image(icx_logo, w * 0.1, h * 0.95, w * 0.1, h * 0.055)
  imageMode(CENTER)
  image(deptLogos['Regular'], w / 2, h * 0.55, w * 0.25, w * 0.25)
}
