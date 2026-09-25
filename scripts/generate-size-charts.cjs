const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Ensure output directory exists
const outDir = path.resolve('public/Assets/Images/SizeCharts');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function generateTeeSVG() {
  return `
<svg width="2000" height="2000" viewBox="0 0 2000 2000" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700&amp;family=Inter:wght@300;400;500;600;700&amp;display=swap');
      .brand-title { font-family: 'Cinzel', 'Times New Roman', serif; font-size: 56px; fill: #FFFFFF; letter-spacing: 0.35em; font-weight: 700; text-anchor: middle; }
      .brand-sub { font-family: 'Inter', sans-serif; font-size: 22px; fill: #888888; letter-spacing: 0.25em; text-transform: uppercase; text-anchor: middle; font-weight: 500; }
      .section-badge { font-family: 'Inter', sans-serif; font-size: 20px; fill: #D4AF37; letter-spacing: 0.2em; text-transform: uppercase; font-weight: 600; text-anchor: middle; }
      .table-header { font-family: 'Inter', sans-serif; font-size: 22px; fill: #FFFFFF; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; }
      .size-cell { font-family: 'Inter', sans-serif; font-size: 26px; fill: #FFFFFF; font-weight: 700; letter-spacing: 0.05em; }
      .data-cell { font-family: 'Inter', sans-serif; font-size: 22px; fill: #D1D5DB; font-weight: 500; }
      .data-unit { font-family: 'Inter', sans-serif; font-size: 16px; fill: #71717A; }
      .legend-title { font-family: 'Inter', sans-serif; font-size: 22px; fill: #FFFFFF; font-weight: 600; letter-spacing: 0.1em; }
      .legend-text { font-family: 'Inter', sans-serif; font-size: 19px; fill: #A1A1AA; line-height: 1.5; }
      .tagline { font-family: 'Inter', sans-serif; font-size: 18px; fill: #71717A; letter-spacing: 0.15em; text-transform: uppercase; text-anchor: middle; }
    </style>
  </defs>

  <!-- Background -->
  <rect width="2000" height="2000" fill="#080808" />
  
  <!-- Subtle border & inner frame -->
  <rect x="60" y="60" width="1880" height="1880" fill="none" stroke="#222222" stroke-width="2" />
  <rect x="76" y="76" width="1848" height="1848" fill="none" stroke="#161616" stroke-width="1" />

  <!-- Corner Accents -->
  <path d="M 60 120 L 60 60 L 120 60" fill="none" stroke="#FFFFFF" stroke-width="3" />
  <path d="M 1940 120 L 1940 60 L 1880 60" fill="none" stroke="#FFFFFF" stroke-width="3" />
  <path d="M 60 1880 L 60 1940 L 120 1940" fill="none" stroke="#FFFFFF" stroke-width="3" />
  <path d="M 1940 1880 L 1940 1940 L 1880 1940" fill="none" stroke="#FFFFFF" stroke-width="3" />

  <!-- BRAND HEADER -->
  <text x="1000" y="165" class="brand-title">HEAVENLYNOVA</text>
  <text x="1000" y="215" class="brand-sub">OFFICIAL SIZE &amp; FIT GUIDE — HEAVYWEIGHT TEE</text>
  <text x="1000" y="255" class="section-badge">7.5 OZ / 240–255 GSM · ARCHITECTURAL BOXY SILHOUETTE</text>

  <!-- DIVIDER -->
  <line x1="200" y1="285" x2="1800" y2="285" stroke="#262626" stroke-width="1.5" />

  <!-- TOP INFO BADGES -->
  <g transform="translate(150, 310)">
    <!-- Dual Hub Badge -->
    <rect x="0" y="0" width="820" height="75" fill="#121212" stroke="#262626" stroke-width="1" rx="4" />
    <text x="30" y="32" font-family="'Inter', sans-serif" font-size="16px" fill="#D4AF37" font-weight="700" letter-spacing="0.1em">DUAL-HUB PRODUCTION (ZERO CUSTOMS DELAY)</text>
    <text x="30" y="58" font-family="'Inter', sans-serif" font-size="18px" fill="#E4E4E7">EU: Build Your Brand BY102 (240 GSM) · US: Shaka Wear Max (255 GSM)</text>

    <!-- Fit Guide Badge -->
    <rect x="880" y="0" width="820" height="75" fill="#121212" stroke="#262626" stroke-width="1" rx="4" />
    <text x="910" y="32" font-family="'Inter', sans-serif" font-size="16px" fill="#FFFFFF" font-weight="700" letter-spacing="0.1em">RECOMMENDED FIT</text>
    <text x="910" y="58" font-family="'Inter', sans-serif" font-size="18px" fill="#A1A1AA">True to size for boxy oversized drape · Size down for regular classic fit</text>
  </g>

  <!-- MAIN MEASUREMENT TABLE -->
  <g transform="translate(150, 420)">
    <!-- Table Header Background -->
    <rect x="0" y="0" width="1700" height="70" fill="#1A1A1A" stroke="#333333" stroke-width="1" />
    
    <text x="60" y="44" class="table-header">SIZE</text>
    <text x="240" y="44" class="table-header">CHEST WIDTH (A)</text>
    <text x="640" y="44" class="table-header">TOTAL LENGTH (B)</text>
    <text x="1040" y="44" class="table-header">SLEEVE (C)</text>
    <text x="1400" y="44" class="table-header">BODY FIT</text>

    <!-- Sub-headers for Units -->
    <line x1="0" y1="70" x2="1700" y2="70" stroke="#333333" stroke-width="1" />

    <!-- ROW 1: S -->
    <rect x="0" y="70" width="1700" height="90" fill="#0D0D0D" stroke="#222222" stroke-width="1" />
    <text x="60" y="125" class="size-cell">S</text>
    <text x="240" y="125" class="data-cell">49 cm <tspan class="data-unit">/ 19.3 in</tspan></text>
    <text x="640" y="125" class="data-cell">73 cm <tspan class="data-unit">/ 28.7 in</tspan></text>
    <text x="1040" y="125" class="data-cell">21 cm <tspan class="data-unit">/ 8.3 in</tspan></text>
    <text x="1400" y="125" class="data-cell">Oversized (Chest 36–38")</text>

    <!-- ROW 2: M -->
    <rect x="0" y="160" width="1700" height="90" fill="#121212" stroke="#222222" stroke-width="1" />
    <text x="60" y="215" class="size-cell">M</text>
    <text x="240" y="215" class="data-cell">53 cm <tspan class="data-unit">/ 20.9 in</tspan></text>
    <text x="640" y="215" class="data-cell">76 cm <tspan class="data-unit">/ 29.9 in</tspan></text>
    <text x="1040" y="215" class="data-cell">22 cm <tspan class="data-unit">/ 8.7 in</tspan></text>
    <text x="1400" y="215" class="data-cell">Oversized (Chest 39–41")</text>

    <!-- ROW 3: L -->
    <rect x="0" y="250" width="1700" height="90" fill="#0D0D0D" stroke="#222222" stroke-width="1" />
    <text x="60" y="305" class="size-cell">L</text>
    <text x="240" y="305" class="data-cell">57 cm <tspan class="data-unit">/ 22.4 in</tspan></text>
    <text x="640" y="305" class="data-cell">78 cm <tspan class="data-unit">/ 30.7 in</tspan></text>
    <text x="1040" y="305" class="data-cell">23 cm <tspan class="data-unit">/ 9.1 in</tspan></text>
    <text x="1400" y="305" class="data-cell">Oversized (Chest 42–44")</text>

    <!-- ROW 4: XL -->
    <rect x="0" y="340" width="1700" height="90" fill="#121212" stroke="#222222" stroke-width="1" />
    <text x="60" y="395" class="size-cell">XL</text>
    <text x="240" y="395" class="data-cell">61 cm <tspan class="data-unit">/ 24.0 in</tspan></text>
    <text x="640" y="395" class="data-cell">81 cm <tspan class="data-unit">/ 31.9 in</tspan></text>
    <text x="1040" y="395" class="data-cell">24 cm <tspan class="data-unit">/ 9.5 in</tspan></text>
    <text x="1400" y="395" class="data-cell">Oversized (Chest 45–47")</text>

    <!-- ROW 5: 2XL -->
    <rect x="0" y="430" width="1700" height="90" fill="#0D0D0D" stroke="#222222" stroke-width="1" />
    <text x="60" y="485" class="size-cell">2XL</text>
    <text x="240" y="485" class="data-cell">65 cm <tspan class="data-unit">/ 25.6 in</tspan></text>
    <text x="640" y="485" class="data-cell">83 cm <tspan class="data-unit">/ 32.7 in</tspan></text>
    <text x="1040" y="485" class="data-cell">25 cm <tspan class="data-unit">/ 9.8 in</tspan></text>
    <text x="1400" y="485" class="data-cell">Oversized (Chest 48–51")</text>

    <!-- ROW 6: 3XL -->
    <rect x="0" y="520" width="1700" height="90" fill="#121212" stroke="#222222" stroke-width="1" />
    <text x="60" y="575" class="size-cell">3XL</text>
    <text x="240" y="575" class="data-cell">70 cm <tspan class="data-unit">/ 27.6 in</tspan></text>
    <text x="640" y="575" class="data-cell">86 cm <tspan class="data-unit">/ 33.9 in</tspan></text>
    <text x="1040" y="575" class="data-cell">26 cm <tspan class="data-unit">/ 10.2 in</tspan></text>
    <text x="1400" y="575" class="data-cell">Oversized (Chest 52–55")</text>
  </g>

  <!-- DIAGRAM & HOW TO MEASURE SECTION -->
  <g transform="translate(150, 1070)">
    <!-- Container Box -->
    <rect x="0" y="0" width="1700" height="660" fill="#0E0E0E" stroke="#222222" stroke-width="1.5" rx="8" />

    <!-- Left: T-Shirt Wireframe Vector Illustration -->
    <g transform="translate(120, 80)">
      <!-- Tee Outline -->
      <path d="M 180 50 
               C 210 80, 290 80, 320 50 
               L 430 90 
               L 480 230 
               L 400 260 
               L 370 200 
               L 370 480 
               L 130 480 
               L 130 200 
               L 100 260 
               L 20 230 
               L 70 90 Z" 
            fill="#181818" stroke="#FFFFFF" stroke-width="2.5" />

      <!-- Collar Line -->
      <path d="M 180 50 C 210 90, 290 90, 320 50" fill="none" stroke="#FFFFFF" stroke-width="2.5" />
      <path d="M 190 53 C 215 75, 285 75, 310 53" fill="none" stroke="#666666" stroke-width="1.5" />

      <!-- Measurement A: Chest Width Line -->
      <line x1="130" y1="230" x2="370" y2="230" stroke="#D4AF37" stroke-width="3" stroke-dasharray="6,4" />
      <circle cx="130" cy="230" r="5" fill="#D4AF37" />
      <circle cx="370" cy="230" r="5" fill="#D4AF37" />
      <!-- Label A -->
      <rect x="225" y="210" width="50" height="40" fill="#000000" stroke="#D4AF37" stroke-width="1.5" rx="4" />
      <text x="250" y="238" font-family="'Inter', sans-serif" font-size="22px" font-weight="700" fill="#D4AF37" text-anchor="middle">A</text>

      <!-- Measurement B: Length Line -->
      <line x1="250" y1="65" x2="250" y2="480" stroke="#FFFFFF" stroke-width="2.5" stroke-dasharray="6,4" />
      <circle cx="250" cy="65" r="4" fill="#FFFFFF" />
      <circle cx="250" cy="480" r="4" fill="#FFFFFF" />
      <!-- Label B -->
      <rect x="225" y="320" width="50" height="40" fill="#000000" stroke="#FFFFFF" stroke-width="1.5" rx="4" />
      <text x="250" y="348" font-family="'Inter', sans-serif" font-size="22px" font-weight="700" fill="#FFFFFF" text-anchor="middle">B</text>

      <!-- Measurement C: Sleeve Line -->
      <line x1="320" y1="50" x2="440" y2="245" stroke="#38BDF8" stroke-width="2.5" stroke-dasharray="6,4" />
      <circle cx="320" cy="50" r="4" fill="#38BDF8" />
      <circle cx="440" cy="245" r="4" fill="#38BDF8" />
      <!-- Label C -->
      <rect x="400" y="130" width="50" height="40" fill="#000000" stroke="#38BDF8" stroke-width="1.5" rx="4" />
      <text x="425" y="158" font-family="'Inter', sans-serif" font-size="22px" font-weight="700" fill="#38BDF8" text-anchor="middle">C</text>
    </g>

    <!-- Right: Explanations -->
    <g transform="translate(700, 70)">
      <text x="0" y="30" class="legend-title" font-size="26px">HOW TO FIND YOUR PERFECT FIT</text>
      
      <!-- Point A -->
      <circle cx="20" cy="85" r="16" fill="#1C1917" stroke="#D4AF37" stroke-width="2" />
      <text x="20" y="92" font-family="'Inter', sans-serif" font-size="16px" font-weight="700" fill="#D4AF37" text-anchor="middle">A</text>
      <text x="55" y="80" class="legend-title" fill="#FFFFFF">WIDTH / CHEST (SEAM TO SEAM, FLAT)</text>
      <text x="55" y="110" class="legend-text">Lay your favorite t-shirt flat on a table. Measure 1 inch below the armhole across the chest.</text>

      <!-- Point B -->
      <circle cx="20" cy="185" r="16" fill="#1C1917" stroke="#FFFFFF" stroke-width="2" />
      <text x="20" y="192" font-family="'Inter', sans-serif" font-size="16px" font-weight="700" fill="#FFFFFF" text-anchor="middle">B</text>
      <text x="55" y="180" class="legend-title" fill="#FFFFFF">LENGTH (SHOULDER TO BOTTOM HEM)</text>
      <text x="55" y="210" class="legend-text">Measure straight down from the highest point of the shoulder collar to the bottom hem.</text>

      <!-- Point C -->
      <circle cx="20" cy="285" r="16" fill="#1C1917" stroke="#38BDF8" stroke-width="2" />
      <text x="20" y="292" font-family="'Inter', sans-serif" font-size="16px" font-weight="700" fill="#38BDF8" text-anchor="middle">C</text>
      <text x="55" y="280" class="legend-title" fill="#FFFFFF">SLEEVE LENGTH (DROP SHOULDER)</text>
      <text x="55" y="310" class="legend-text">Measured from the collar/shoulder seam down to the outer sleeve cuff hem.</text>

      <!-- Box for Guarantee -->
      <rect x="0" y="370" width="940" height="120" fill="#141414" stroke="#262626" stroke-width="1" rx="6" />
      <text x="30" y="410" font-family="'Inter', sans-serif" font-size="18px" font-weight="700" fill="#FFFFFF">✦ FABRIC INTEGRITY &amp; TOLERANCE:</text>
      <text x="30" y="440" font-family="'Inter', sans-serif" font-size="17px" fill="#A1A1AA">Garment is pre-shrunk for zero structural shrinkage. Standard manufacturing tolerance: +/- 1.5 cm (0.6 in).</text>
      <text x="30" y="468" font-family="'Inter', sans-serif" font-size="16px" fill="#71717A">100% Combed Heavy Cotton (240–255 GSM) · Premium Ribbed Collar · Double-Needle Seams</text>
    </g>
  </g>

  <!-- FOOTER -->
  <text x="1000" y="1860" class="tagline">HEAVENLYNOVA · ARCHIVAL LUXURY STREETWEAR · GLOBAL DIRECT-TO-CONSUMER</text>
</svg>
`;
}

function generateHoodieSVG() {
  return `
<svg width="2000" height="2000" viewBox="0 0 2000 2000" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700&amp;family=Inter:wght@300;400;500;600;700&amp;display=swap');
      .brand-title { font-family: 'Cinzel', 'Times New Roman', serif; font-size: 56px; fill: #FFFFFF; letter-spacing: 0.35em; font-weight: 700; text-anchor: middle; }
      .brand-sub { font-family: 'Inter', sans-serif; font-size: 22px; fill: #888888; letter-spacing: 0.25em; text-transform: uppercase; text-anchor: middle; font-weight: 500; }
      .section-badge { font-family: 'Inter', sans-serif; font-size: 20px; fill: #D4AF37; letter-spacing: 0.2em; text-transform: uppercase; font-weight: 600; text-anchor: middle; }
      .table-header { font-family: 'Inter', sans-serif; font-size: 22px; fill: #FFFFFF; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; }
      .size-cell { font-family: 'Inter', sans-serif; font-size: 26px; fill: #FFFFFF; font-weight: 700; letter-spacing: 0.05em; }
      .data-cell { font-family: 'Inter', sans-serif; font-size: 22px; fill: #D1D5DB; font-weight: 500; }
      .data-unit { font-family: 'Inter', sans-serif; font-size: 16px; fill: #71717A; }
      .legend-title { font-family: 'Inter', sans-serif; font-size: 22px; fill: #FFFFFF; font-weight: 600; letter-spacing: 0.1em; }
      .legend-text { font-family: 'Inter', sans-serif; font-size: 19px; fill: #A1A1AA; line-height: 1.5; }
      .tagline { font-family: 'Inter', sans-serif; font-size: 18px; fill: #71717A; letter-spacing: 0.15em; text-transform: uppercase; text-anchor: middle; }
    </style>
  </defs>

  <!-- Background -->
  <rect width="2000" height="2000" fill="#080808" />
  
  <!-- Subtle border & inner frame -->
  <rect x="60" y="60" width="1880" height="1880" fill="none" stroke="#222222" stroke-width="2" />
  <rect x="76" y="76" width="1848" height="1848" fill="none" stroke="#161616" stroke-width="1" />

  <!-- Corner Accents -->
  <path d="M 60 120 L 60 60 L 120 60" fill="none" stroke="#FFFFFF" stroke-width="3" />
  <path d="M 1940 120 L 1940 60 L 1880 60" fill="none" stroke="#FFFFFF" stroke-width="3" />
  <path d="M 60 1880 L 60 1940 L 120 1940" fill="none" stroke="#FFFFFF" stroke-width="3" />
  <path d="M 1940 1880 L 1940 1940 L 1880 1940" fill="none" stroke="#FFFFFF" stroke-width="3" />

  <!-- BRAND HEADER -->
  <text x="1000" y="165" class="brand-title">HEAVENLYNOVA</text>
  <text x="1000" y="215" class="brand-sub">OFFICIAL SIZE &amp; FIT GUIDE — HEAVYWEIGHT HOODIE</text>
  <text x="1000" y="255" class="section-badge">10 OZ / 340–350 GSM · ARCHITECTURAL 3-END FLEECE</text>

  <!-- DIVIDER -->
  <line x1="200" y1="285" x2="1800" y2="285" stroke="#262626" stroke-width="1.5" />

  <!-- TOP INFO BADGES -->
  <g transform="translate(150, 310)">
    <!-- Dual Hub Badge -->
    <rect x="0" y="0" width="820" height="75" fill="#121212" stroke="#262626" stroke-width="1" rx="4" />
    <text x="30" y="32" font-family="'Inter', sans-serif" font-size="16px" fill="#D4AF37" font-weight="700" letter-spacing="0.1em">DUAL-HUB PRODUCTION (ZERO CUSTOMS DELAY)</text>
    <text x="30" y="58" font-family="'Inter', sans-serif" font-size="18px" fill="#E4E4E7">EU: Stanley Stella / BY102 (350 GSM) · US: Heavyweight 3-End Fleece (10 oz)</text>

    <!-- Fit Guide Badge -->
    <rect x="880" y="0" width="820" height="75" fill="#121212" stroke="#262626" stroke-width="1" rx="4" />
    <text x="910" y="32" font-family="'Inter', sans-serif" font-size="16px" fill="#FFFFFF" font-weight="700" letter-spacing="0.1em">HOODIE SILHOUETTE</text>
    <text x="910" y="58" font-family="'Inter', sans-serif" font-size="18px" fill="#A1A1AA">Structured boxy drape · 3-panel double-fleece hood · Pre-shrunk under 5%</text>
  </g>

  <!-- MAIN MEASUREMENT TABLE -->
  <g transform="translate(150, 420)">
    <!-- Table Header Background -->
    <rect x="0" y="0" width="1700" height="70" fill="#1A1A1A" stroke="#333333" stroke-width="1" />
    
    <text x="60" y="44" class="table-header">SIZE</text>
    <text x="240" y="44" class="table-header">CHEST WIDTH (A)</text>
    <text x="640" y="44" class="table-header">BODY LENGTH (B)</text>
    <text x="1040" y="44" class="table-header">SLEEVE LENGTH (C)</text>
    <text x="1400" y="44" class="table-header">CHEST FIT</text>

    <!-- Sub-headers for Units -->
    <line x1="0" y1="70" x2="1700" y2="70" stroke="#333333" stroke-width="1" />

    <!-- ROW 1: S -->
    <rect x="0" y="70" width="1700" height="90" fill="#0D0D0D" stroke="#222222" stroke-width="1" />
    <text x="60" y="125" class="size-cell">S</text>
    <text x="240" y="125" class="data-cell">53 cm <tspan class="data-unit">/ 21.0 in</tspan></text>
    <text x="640" y="125" class="data-cell">72 cm <tspan class="data-unit">/ 28.5 in</tspan></text>
    <text x="1040" y="125" class="data-cell">64 cm <tspan class="data-unit">/ 25.2 in</tspan></text>
    <text x="1400" y="125" class="data-cell">Relaxed (Chest 36–38")</text>

    <!-- ROW 2: M -->
    <rect x="0" y="160" width="1700" height="90" fill="#121212" stroke="#222222" stroke-width="1" />
    <text x="60" y="215" class="size-cell">M</text>
    <text x="240" y="215" class="data-cell">58 cm <tspan class="data-unit">/ 23.0 in</tspan></text>
    <text x="640" y="215" class="data-cell">75 cm <tspan class="data-unit">/ 29.5 in</tspan></text>
    <text x="1040" y="215" class="data-cell">66 cm <tspan class="data-unit">/ 26.0 in</tspan></text>
    <text x="1400" y="215" class="data-cell">Relaxed (Chest 39–41")</text>

    <!-- ROW 3: L -->
    <rect x="0" y="250" width="1700" height="90" fill="#0D0D0D" stroke="#222222" stroke-width="1" />
    <text x="60" y="305" class="size-cell">L</text>
    <text x="240" y="305" class="data-cell">62 cm <tspan class="data-unit">/ 24.5 in</tspan></text>
    <text x="640" y="305" class="data-cell">77 cm <tspan class="data-unit">/ 30.5 in</tspan></text>
    <text x="1040" y="305" class="data-cell">68 cm <tspan class="data-unit">/ 26.8 in</tspan></text>
    <text x="1400" y="305" class="data-cell">Relaxed (Chest 42–44")</text>

    <!-- ROW 4: XL -->
    <rect x="0" y="340" width="1700" height="90" fill="#121212" stroke="#222222" stroke-width="1" />
    <text x="60" y="395" class="size-cell">XL</text>
    <text x="240" y="395" class="data-cell">67 cm <tspan class="data-unit">/ 26.5 in</tspan></text>
    <text x="640" y="395" class="data-cell">80 cm <tspan class="data-unit">/ 31.5 in</tspan></text>
    <text x="1040" y="395" class="data-cell">70 cm <tspan class="data-unit">/ 27.5 in</tspan></text>
    <text x="1400" y="395" class="data-cell">Relaxed (Chest 45–47")</text>

    <!-- ROW 5: 2XL -->
    <rect x="0" y="430" width="1700" height="90" fill="#0D0D0D" stroke="#222222" stroke-width="1" />
    <text x="60" y="485" class="size-cell">2XL</text>
    <text x="240" y="485" class="data-cell">70 cm <tspan class="data-unit">/ 27.5 in</tspan></text>
    <text x="640" y="485" class="data-cell">83 cm <tspan class="data-unit">/ 32.5 in</tspan></text>
    <text x="1040" y="485" class="data-cell">72 cm <tspan class="data-unit">/ 28.3 in</tspan></text>
    <text x="1400" y="485" class="data-cell">Relaxed (Chest 48–51")</text>

    <!-- ROW 6: 3XL -->
    <rect x="0" y="520" width="1700" height="90" fill="#121212" stroke="#222222" stroke-width="1" />
    <text x="60" y="575" class="size-cell">3XL</text>
    <text x="240" y="575" class="data-cell">73 cm <tspan class="data-unit">/ 28.7 in</tspan></text>
    <text x="640" y="575" class="data-cell">85 cm <tspan class="data-unit">/ 33.5 in</tspan></text>
    <text x="1040" y="575" class="data-cell">74 cm <tspan class="data-unit">/ 29.1 in</tspan></text>
    <text x="1400" y="575" class="data-cell">Relaxed (Chest 52–55")</text>
  </g>

  <!-- DIAGRAM & HOW TO MEASURE SECTION -->
  <g transform="translate(150, 1070)">
    <!-- Container Box -->
    <rect x="0" y="0" width="1700" height="660" fill="#0E0E0E" stroke="#222222" stroke-width="1.5" rx="8" />

    <!-- Left: Hoodie Wireframe Vector Illustration -->
    <g transform="translate(110, 60)">
      <!-- Hood Outline -->
      <path d="M 200 110 
               C 170 30, 230 10, 260 10 
               C 290 10, 350 30, 320 110 Z" 
            fill="#222222" stroke="#FFFFFF" stroke-width="2.5" />
      
      <!-- Hoodie Body Outline -->
      <path d="M 190 110 
               L 110 160 
               L 40 370 
               L 100 390 
               L 145 220 
               L 145 500 
               L 375 500 
               L 375 220 
               L 420 390 
               L 480 370 
               L 410 160 
               L 330 110 Z" 
            fill="#181818" stroke="#FFFFFF" stroke-width="2.5" />

      <!-- Kangaroo Pocket -->
      <path d="M 195 380 L 325 380 L 345 470 L 175 470 Z" fill="#202020" stroke="#FFFFFF" stroke-width="2" />

      <!-- Measurement A: Chest Width Line -->
      <line x1="145" y1="240" x2="375" y2="240" stroke="#D4AF37" stroke-width="3" stroke-dasharray="6,4" />
      <circle cx="145" cy="240" r="5" fill="#D4AF37" />
      <circle cx="375" cy="240" r="5" fill="#D4AF37" />
      <!-- Label A -->
      <rect x="235" y="220" width="50" height="40" fill="#000000" stroke="#D4AF37" stroke-width="1.5" rx="4" />
      <text x="260" y="248" font-family="'Inter', sans-serif" font-size="22px" font-weight="700" fill="#D4AF37" text-anchor="middle">A</text>

      <!-- Measurement B: Length Line -->
      <line x1="260" y1="110" x2="260" y2="500" stroke="#FFFFFF" stroke-width="2.5" stroke-dasharray="6,4" />
      <circle cx="260" cy="110" r="4" fill="#FFFFFF" />
      <circle cx="260" cy="500" r="4" fill="#FFFFFF" />
      <!-- Label B -->
      <rect x="235" y="315" width="50" height="40" fill="#000000" stroke="#FFFFFF" stroke-width="1.5" rx="4" />
      <text x="260" y="343" font-family="'Inter', sans-serif" font-size="22px" font-weight="700" fill="#FFFFFF" text-anchor="middle">B</text>

      <!-- Measurement C: Sleeve Line -->
      <line x1="330" y1="110" x2="455" y2="385" stroke="#38BDF8" stroke-width="2.5" stroke-dasharray="6,4" />
      <circle cx="330" cy="110" r="4" fill="#38BDF8" />
      <circle cx="455" cy="385" r="4" fill="#38BDF8" />
      <!-- Label C -->
      <rect x="420" y="240" width="50" height="40" fill="#000000" stroke="#38BDF8" stroke-width="1.5" rx="4" />
      <text x="445" y="268" font-family="'Inter', sans-serif" font-size="22px" font-weight="700" fill="#38BDF8" text-anchor="middle">C</text>
    </g>

    <!-- Right: Explanations -->
    <g transform="translate(700, 70)">
      <text x="0" y="30" class="legend-title" font-size="26px">HOW TO FIND YOUR PERFECT HOODIE FIT</text>
      
      <!-- Point A -->
      <circle cx="20" cy="85" r="16" fill="#1C1917" stroke="#D4AF37" stroke-width="2" />
      <text x="20" y="92" font-family="'Inter', sans-serif" font-size="16px" font-weight="700" fill="#D4AF37" text-anchor="middle">A</text>
      <text x="55" y="80" class="legend-title" fill="#FFFFFF">WIDTH / PIT TO PIT (FLAT ACROSS)</text>
      <text x="55" y="110" class="legend-text">Lay your favorite hoodie flat. Measure across the chest from armpit seam to armpit seam.</text>

      <!-- Point B -->
      <circle cx="20" cy="185" r="16" fill="#1C1917" stroke="#FFFFFF" stroke-width="2" />
      <text x="20" y="192" font-family="'Inter', sans-serif" font-size="16px" font-weight="700" fill="#FFFFFF" text-anchor="middle">B</text>
      <text x="55" y="180" class="legend-title" fill="#FFFFFF">BODY LENGTH (SHOULDER TO WAISTBAND)</text>
      <text x="55" y="210" class="legend-text">Measure from the neckline/shoulder seam straight down to the bottom of the ribbed waistband.</text>

      <!-- Point C -->
      <circle cx="20" cy="285" r="16" fill="#1C1917" stroke="#38BDF8" stroke-width="2" />
      <text x="20" y="292" font-family="'Inter', sans-serif" font-size="16px" font-weight="700" fill="#38BDF8" text-anchor="middle">C</text>
      <text x="55" y="280" class="legend-title" fill="#FFFFFF">SLEEVE LENGTH (SHOULDER TO WRIST CUFF)</text>
      <text x="55" y="310" class="legend-text">Measure along the outer edge from the shoulder seam down to the end of the wrist cuff.</text>

      <!-- Box for Guarantee -->
      <rect x="0" y="370" width="940" height="120" fill="#141414" stroke="#262626" stroke-width="1" rx="6" />
      <text x="30" y="410" font-family="'Inter', sans-serif" font-size="18px" font-weight="700" fill="#FFFFFF">✦ ARCHITECTURAL FLEECE CONSTRUCTION:</text>
      <text x="30" y="440" font-family="'Inter', sans-serif" font-size="17px" fill="#A1A1AA">10 oz (340–350 GSM) 3-End Fleece · Solids: 70% Combed Cotton / 30% Recycled Poly · 100% Cotton Face</text>
      <text x="30" y="468" font-family="'Inter', sans-serif" font-size="16px" fill="#71717A">Three-Panel Structured Hood · Matching Drawcords &amp; Metal Eyelets · 1x1 Ribbed Cuffs</text>
    </g>
  </g>

  <!-- FOOTER -->
  <text x="1000" y="1860" class="tagline">HEAVENLYNOVA · ARCHIVAL LUXURY STREETWEAR · GLOBAL DIRECT-TO-CONSUMER</text>
</svg>
`;
}

async function renderCharts() {
  console.log('Rendering T-Shirt Size Chart...');
  const teeSvg = Buffer.from(generateTeeSVG());
  const teePngPath = path.join(outDir, 'heavenlynova_tshirt_size_chart.png');
  await sharp(teeSvg, { density: 150 })
    .resize(2000, 2000)
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(teePngPath);
  console.log('Saved T-Shirt Chart to:', teePngPath);

  console.log('Rendering Hoodie Size Chart...');
  const hoodieSvg = Buffer.from(generateHoodieSVG());
  const hoodiePngPath = path.join(outDir, 'heavenlynova_hoodie_size_chart.png');
  await sharp(hoodieSvg, { density: 150 })
    .resize(2000, 2000)
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(hoodiePngPath);
  console.log('Saved Hoodie Chart to:', hoodiePngPath);

  // Also copy to brain artifacts directory so user can preview or download directly
  const artifactDir = 'C:/Users/tudor/.gemini/antigravity/brain/ba7c2280-e6b2-4151-a1a5-8e317f716a28';
  if (fs.existsSync(artifactDir)) {
    fs.copyFileSync(teePngPath, path.join(artifactDir, 'heavenlynova_tshirt_size_chart.png'));
    fs.copyFileSync(hoodiePngPath, path.join(artifactDir, 'heavenlynova_hoodie_size_chart.png'));
    console.log('Copied to artifact directory for easy download/preview.');
  }
}

renderCharts().catch(console.error);
