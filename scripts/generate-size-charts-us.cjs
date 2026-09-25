const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const outDir = path.resolve('public/Assets/Images/SizeCharts');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// ─── US INCHES T-SHIRT CHART (ULTRA VISIBILITY) ──────────────────────────────
function generateTeeUSInchesSVG() {
  return `
<svg width="2000" height="2000" viewBox="0 0 2000 2000" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800&amp;family=Inter:wght@400;500;600;700;800;900&amp;display=swap');
      .brand-title { font-family: 'Cinzel', 'Times New Roman', serif; font-size: 64px; fill: #FFFFFF; letter-spacing: 0.35em; font-weight: 800; text-anchor: middle; }
      .brand-sub { font-family: 'Inter', sans-serif; font-size: 26px; fill: #F4F4F5; letter-spacing: 0.25em; text-transform: uppercase; text-anchor: middle; font-weight: 700; }
      .section-badge { font-family: 'Inter', sans-serif; font-size: 24px; fill: #EAB308; letter-spacing: 0.2em; text-transform: uppercase; font-weight: 800; text-anchor: middle; }
      
      .table-header { font-family: 'Inter', sans-serif; font-size: 26px; fill: #FFFFFF; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; }
      .size-cell { font-family: 'Inter', sans-serif; font-size: 38px; fill: #FFFFFF; font-weight: 900; letter-spacing: 0.05em; }
      .data-cell-bold { font-family: 'Inter', sans-serif; font-size: 32px; fill: #FFFFFF; font-weight: 700; }
      .data-cell-accent { font-family: 'Inter', sans-serif; font-size: 32px; fill: #FDE047; font-weight: 800; }
      .data-cell-sub { font-family: 'Inter', sans-serif; font-size: 24px; fill: #A1A1AA; font-weight: 500; }

      .legend-title { font-family: 'Inter', sans-serif; font-size: 26px; fill: #FFFFFF; font-weight: 800; letter-spacing: 0.05em; }
      .legend-text { font-family: 'Inter', sans-serif; font-size: 22px; fill: #D4D4D8; line-height: 1.5; font-weight: 500; }
      .tagline { font-family: 'Inter', sans-serif; font-size: 20px; fill: #A1A1AA; letter-spacing: 0.18em; text-transform: uppercase; text-anchor: middle; font-weight: 600; }
    </style>
  </defs>

  <!-- Deep Black Matte Background -->
  <rect width="2000" height="2000" fill="#0A0A0A" />
  
  <!-- Outer Frames & Borders -->
  <rect x="50" y="50" width="1900" height="1900" fill="none" stroke="#27272A" stroke-width="3" />
  <rect x="66" y="66" width="1868" height="1868" fill="none" stroke="#18181B" stroke-width="1.5" />

  <!-- High-contrast Corner Accents -->
  <path d="M 50 140 L 50 50 L 140 50" fill="none" stroke="#FFFFFF" stroke-width="5" />
  <path d="M 1950 140 L 1950 50 L 1860 50" fill="none" stroke="#FFFFFF" stroke-width="5" />
  <path d="M 50 1860 L 50 1950 L 140 1950" fill="none" stroke="#FFFFFF" stroke-width="5" />
  <path d="M 1950 1860 L 1950 1950 L 1860 1950" fill="none" stroke="#FFFFFF" stroke-width="5" />

  <!-- BRAND HEADER -->
  <text x="1000" y="160" class="brand-title">HEAVENLYNOVA</text>
  <text x="1000" y="215" class="brand-sub">SIZE &amp; MEASUREMENT GUIDE (INCHES)</text>
  <text x="1000" y="260" class="section-badge">US STREETWEAR EDITION · 7.5 OZ / 255 GSM HEAVYWEIGHT COTTON</text>

  <!-- DIVIDER -->
  <line x1="150" y1="290" x2="1850" y2="290" stroke="#3F3F46" stroke-width="2" />

  <!-- TOP CALLOUT BAR (MOBILE OPTIMIZED) -->
  <g transform="translate(120, 315)">
    <rect x="0" y="0" width="1760" height="85" fill="#18181B" stroke="#3F3F46" stroke-width="2" rx="8" />
    <circle cx="50" cy="42" r="16" fill="#EAB308" />
    <text x="50" y="50" font-family="'Inter', sans-serif" font-size="20px" font-weight="900" fill="#000000" text-anchor="middle">★</text>
    <text x="85" y="38" font-family="'Inter', sans-serif" font-size="22px" font-weight="800" fill="#FFFFFF" letter-spacing="0.05em">SHAKA WEAR 7.5 OZ MAX HEAVYWEIGHT · ARCHITECTURAL BOXY FIT</text>
    <text x="85" y="68" font-family="'Inter', sans-serif" font-size="19px" font-weight="500" fill="#A1A1AA">All measurements in INCHES. True to size for signature oversized drape · Size down for standard fit.</text>
  </g>

  <!-- MAIN HIGH-VISIBILITY TABLE -->
  <g transform="translate(120, 435)">
    <!-- Table Header Background -->
    <rect x="0" y="0" width="1760" height="80" fill="#27272A" stroke="#52525B" stroke-width="2" rx="6" />
    
    <text x="60" y="50" class="table-header">SIZE</text>
    <text x="250" y="50" class="table-header">CHEST WIDTH (A)</text>
    <text x="680" y="50" class="table-header">BODY LENGTH (B)</text>
    <text x="1100" y="50" class="table-header">SLEEVE (C)</text>
    <text x="1440" y="50" class="table-header">CHEST TO FIT</text>

    <!-- ROW 1: S -->
    <rect x="0" y="80" width="1760" height="95" fill="#121214" stroke="#27272A" stroke-width="1.5" />
    <text x="60" y="142" class="size-cell">S</text>
    <text x="250" y="140" class="data-cell-accent">19.3 in <tspan class="data-cell-sub">(49 cm)</tspan></text>
    <text x="680" y="140" class="data-cell-bold">28.7 in <tspan class="data-cell-sub">(73 cm)</tspan></text>
    <text x="1100" y="140" class="data-cell-bold">8.3 in <tspan class="data-cell-sub">(21 cm)</tspan></text>
    <text x="1440" y="140" class="data-cell-bold">36" – 38"</text>

    <!-- ROW 2: M -->
    <rect x="0" y="175" width="1760" height="95" fill="#18181B" stroke="#27272A" stroke-width="1.5" />
    <text x="60" y="237" class="size-cell">M</text>
    <text x="250" y="235" class="data-cell-accent">20.9 in <tspan class="data-cell-sub">(53 cm)</tspan></text>
    <text x="680" y="235" class="data-cell-bold">29.9 in <tspan class="data-cell-sub">(76 cm)</tspan></text>
    <text x="1100" y="235" class="data-cell-bold">8.7 in <tspan class="data-cell-sub">(22 cm)</tspan></text>
    <text x="1440" y="235" class="data-cell-bold">39" – 41"</text>

    <!-- ROW 3: L -->
    <rect x="0" y="270" width="1760" height="95" fill="#121214" stroke="#27272A" stroke-width="1.5" />
    <text x="60" y="332" class="size-cell">L</text>
    <text x="250" y="330" class="data-cell-accent">22.4 in <tspan class="data-cell-sub">(57 cm)</tspan></text>
    <text x="680" y="330" class="data-cell-bold">30.7 in <tspan class="data-cell-sub">(78 cm)</tspan></text>
    <text x="1100" y="330" class="data-cell-bold">9.1 in <tspan class="data-cell-sub">(23 cm)</tspan></text>
    <text x="1440" y="330" class="data-cell-bold">42" – 44"</text>

    <!-- ROW 4: XL -->
    <rect x="0" y="365" width="1760" height="95" fill="#18181B" stroke="#27272A" stroke-width="1.5" />
    <text x="60" y="427" class="size-cell">XL</text>
    <text x="250" y="425" class="data-cell-accent">24.0 in <tspan class="data-cell-sub">(61 cm)</tspan></text>
    <text x="680" y="425" class="data-cell-bold">31.9 in <tspan class="data-cell-sub">(81 cm)</tspan></text>
    <text x="1100" y="425" class="data-cell-bold">9.5 in <tspan class="data-cell-sub">(24 cm)</tspan></text>
    <text x="1440" y="425" class="data-cell-bold">45" – 47"</text>

    <!-- ROW 5: 2XL -->
    <rect x="0" y="460" width="1760" height="95" fill="#121214" stroke="#27272A" stroke-width="1.5" />
    <text x="60" y="522" class="size-cell">2XL</text>
    <text x="250" y="520" class="data-cell-accent">25.6 in <tspan class="data-cell-sub">(65 cm)</tspan></text>
    <text x="680" y="520" class="data-cell-bold">32.7 in <tspan class="data-cell-sub">(83 cm)</tspan></text>
    <text x="1100" y="520" class="data-cell-bold">9.8 in <tspan class="data-cell-sub">(25 cm)</tspan></text>
    <text x="1440" y="520" class="data-cell-bold">48" – 51"</text>

    <!-- ROW 6: 3XL -->
    <rect x="0" y="555" width="1760" height="95" fill="#18181B" stroke="#27272A" stroke-width="1.5" />
    <text x="60" y="617" class="size-cell">3XL</text>
    <text x="250" y="615" class="data-cell-accent">27.6 in <tspan class="data-cell-sub">(70 cm)</tspan></text>
    <text x="680" y="615" class="data-cell-bold">33.9 in <tspan class="data-cell-sub">(86 cm)</tspan></text>
    <text x="1100" y="615" class="data-cell-bold">10.2 in <tspan class="data-cell-sub">(26 cm)</tspan></text>
    <text x="1440" y="615" class="data-cell-bold">52" – 55"</text>
  </g>

  <!-- DIAGRAM & HOW TO MEASURE SECTION (BOLD & HIGH CONTRAST) -->
  <g transform="translate(120, 1120)">
    <rect x="0" y="0" width="1760" height="640" fill="#121214" stroke="#3F3F46" stroke-width="2" rx="10" />

    <!-- Left: T-Shirt Wireframe Vector Illustration -->
    <g transform="translate(130, 70)">
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
            fill="#1E1E22" stroke="#FFFFFF" stroke-width="3.5" />

      <!-- Collar Line -->
      <path d="M 180 50 C 210 90, 290 90, 320 50" fill="none" stroke="#FFFFFF" stroke-width="3" />

      <!-- Measurement A Line -->
      <line x1="130" y1="230" x2="370" y2="230" stroke="#FACC15" stroke-width="4.5" stroke-dasharray="8,5" />
      <circle cx="130" cy="230" r="7" fill="#FACC15" />
      <circle cx="370" cy="230" r="7" fill="#FACC15" />
      <rect x="220" y="200" width="60" height="50" fill="#000000" stroke="#FACC15" stroke-width="2.5" rx="6" />
      <text x="250" y="235" font-family="'Inter', sans-serif" font-size="28px" font-weight="900" fill="#FACC15" text-anchor="middle">A</text>

      <!-- Measurement B Line -->
      <line x1="250" y1="65" x2="250" y2="480" stroke="#FFFFFF" stroke-width="4" stroke-dasharray="8,5" />
      <circle cx="250" cy="65" r="6" fill="#FFFFFF" />
      <circle cx="250" cy="480" r="6" fill="#FFFFFF" />
      <rect x="220" y="320" width="60" height="50" fill="#000000" stroke="#FFFFFF" stroke-width="2.5" rx="6" />
      <text x="250" y="355" font-family="'Inter', sans-serif" font-size="28px" font-weight="900" fill="#FFFFFF" text-anchor="middle">B</text>

      <!-- Measurement C Line -->
      <line x1="320" y1="50" x2="440" y2="245" stroke="#38BDF8" stroke-width="4" stroke-dasharray="8,5" />
      <circle cx="320" cy="50" r="6" fill="#38BDF8" />
      <circle cx="440" cy="245" r="6" fill="#38BDF8" />
      <rect x="400" y="130" width="60" height="50" fill="#000000" stroke="#38BDF8" stroke-width="2.5" rx="6" />
      <text x="430" y="165" font-family="'Inter', sans-serif" font-size="28px" font-weight="900" fill="#38BDF8" text-anchor="middle">C</text>
    </g>

    <!-- Right: Explanations -->
    <g transform="translate(730, 60)">
      <text x="0" y="32" class="legend-title" font-size="30px">HOW TO MEASURE (INCHES):</text>
      
      <!-- Point A -->
      <circle cx="25" cy="90" r="20" fill="#1C1917" stroke="#FACC15" stroke-width="2.5" />
      <text x="25" y="99" font-family="'Inter', sans-serif" font-size="20px" font-weight="900" fill="#FACC15" text-anchor="middle">A</text>
      <text x="65" y="86" class="legend-title" fill="#FACC15">CHEST WIDTH (PIT TO PIT, FLAT)</text>
      <text x="65" y="118" class="legend-text">Lay your favorite tee flat. Measure 1" below the armhole across the chest from seam to seam.</text>

      <!-- Point B -->
      <circle cx="25" cy="195" r="20" fill="#1C1917" stroke="#FFFFFF" stroke-width="2.5" />
      <text x="25" y="204" font-family="'Inter', sans-serif" font-size="20px" font-weight="900" fill="#FFFFFF" text-anchor="middle">B</text>
      <text x="65" y="191" class="legend-title" fill="#FFFFFF">BODY LENGTH (TOP SHOULDER TO HEM)</text>
      <text x="65" y="223" class="legend-text">Measure from the highest point of the shoulder down to the bottom edge of the hem.</text>

      <!-- Point C -->
      <circle cx="25" cy="300" r="20" fill="#1C1917" stroke="#38BDF8" stroke-width="2.5" />
      <text x="25" y="309" font-family="'Inter', sans-serif" font-size="20px" font-weight="900" fill="#38BDF8" text-anchor="middle">C</text>
      <text x="65" y="296" class="legend-title" fill="#38BDF8">SLEEVE LENGTH (DROP SHOULDER)</text>
      <text x="65" y="328" class="legend-text">Measured from the shoulder seam along the outer edge to the sleeve cuff.</text>

      <!-- Pro Tip Box -->
      <rect x="0" y="375" width="960" height="135" fill="#1E1E22" stroke="#3F3F46" stroke-width="2" rx="8" />
      <text x="35" y="415" font-family="'Inter', sans-serif" font-size="22px" font-weight="800" fill="#FFFFFF">✦ STREETWEAR FIT RECOMMENDATION:</text>
      <text x="35" y="448" font-family="'Inter', sans-serif" font-size="20px" fill="#E4E4E7">Order your normal US size for an authentic dropped-shoulder oversized boxy silhouette.</text>
      <text x="35" y="480" font-family="'Inter', sans-serif" font-size="19px" fill="#A1A1AA">If you prefer a classic or tailored slim fit, choose one size smaller.</text>
    </g>
  </g>

  <!-- FOOTER -->
  <text x="1000" y="1860" class="tagline">HEAVENLYNOVA · US STUDIO DIRECT FULFILLMENT · PRINTED IN THE USA</text>
</svg>
`;
}

// ─── US INCHES HOODIE CHART (ULTRA VISIBILITY) ──────────────────────────────
function generateHoodieUSInchesSVG() {
  return `
<svg width="2000" height="2000" viewBox="0 0 2000 2000" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800&amp;family=Inter:wght@400;500;600;700;800;900&amp;display=swap');
      .brand-title { font-family: 'Cinzel', 'Times New Roman', serif; font-size: 64px; fill: #FFFFFF; letter-spacing: 0.35em; font-weight: 800; text-anchor: middle; }
      .brand-sub { font-family: 'Inter', sans-serif; font-size: 26px; fill: #F4F4F5; letter-spacing: 0.25em; text-transform: uppercase; text-anchor: middle; font-weight: 700; }
      .section-badge { font-family: 'Inter', sans-serif; font-size: 24px; fill: #EAB308; letter-spacing: 0.2em; text-transform: uppercase; font-weight: 800; text-anchor: middle; }
      
      .table-header { font-family: 'Inter', sans-serif; font-size: 26px; fill: #FFFFFF; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; }
      .size-cell { font-family: 'Inter', sans-serif; font-size: 38px; fill: #FFFFFF; font-weight: 900; letter-spacing: 0.05em; }
      .data-cell-bold { font-family: 'Inter', sans-serif; font-size: 32px; fill: #FFFFFF; font-weight: 700; }
      .data-cell-accent { font-family: 'Inter', sans-serif; font-size: 32px; fill: #FDE047; font-weight: 800; }
      .data-cell-sub { font-family: 'Inter', sans-serif; font-size: 24px; fill: #A1A1AA; font-weight: 500; }

      .legend-title { font-family: 'Inter', sans-serif; font-size: 26px; fill: #FFFFFF; font-weight: 800; letter-spacing: 0.05em; }
      .legend-text { font-family: 'Inter', sans-serif; font-size: 22px; fill: #D4D4D8; line-height: 1.5; font-weight: 500; }
      .tagline { font-family: 'Inter', sans-serif; font-size: 20px; fill: #A1A1AA; letter-spacing: 0.18em; text-transform: uppercase; text-anchor: middle; font-weight: 600; }
    </style>
  </defs>

  <!-- Deep Black Matte Background -->
  <rect width="2000" height="2000" fill="#0A0A0A" />
  
  <!-- Outer Frames & Borders -->
  <rect x="50" y="50" width="1900" height="1900" fill="none" stroke="#27272A" stroke-width="3" />
  <rect x="66" y="66" width="1868" height="1868" fill="none" stroke="#18181B" stroke-width="1.5" />

  <!-- High-contrast Corner Accents -->
  <path d="M 50 140 L 50 50 L 140 50" fill="none" stroke="#FFFFFF" stroke-width="5" />
  <path d="M 1950 140 L 1950 50 L 1860 50" fill="none" stroke="#FFFFFF" stroke-width="5" />
  <path d="M 50 1860 L 50 1950 L 140 1950" fill="none" stroke="#FFFFFF" stroke-width="5" />
  <path d="M 1950 1860 L 1950 1950 L 1860 1950" fill="none" stroke="#FFFFFF" stroke-width="5" />

  <!-- BRAND HEADER -->
  <text x="1000" y="160" class="brand-title">HEAVENLYNOVA</text>
  <text x="1000" y="215" class="brand-sub">SIZE &amp; MEASUREMENT GUIDE (INCHES)</text>
  <text x="1000" y="260" class="section-badge">US STREETWEAR EDITION · 10 OZ / 340 GSM HEAVYWEIGHT 3-END FLEECE</text>

  <!-- DIVIDER -->
  <line x1="150" y1="290" x2="1850" y2="290" stroke="#3F3F46" stroke-width="2" />

  <!-- TOP CALLOUT BAR (MOBILE OPTIMIZED) -->
  <g transform="translate(120, 315)">
    <rect x="0" y="0" width="1760" height="85" fill="#18181B" stroke="#3F3F46" stroke-width="2" rx="8" />
    <circle cx="50" cy="42" r="16" fill="#EAB308" />
    <text x="50" y="50" font-family="'Inter', sans-serif" font-size="20px" font-weight="900" fill="#000000" text-anchor="middle">★</text>
    <text x="85" y="38" font-family="'Inter', sans-serif" font-size="22px" font-weight="800" fill="#FFFFFF" letter-spacing="0.05em">HEAVYWEIGHT 10 OZ 3-END FLEECE · 3-PANEL STRUCTURED HOOD</text>
    <text x="85" y="68" font-family="'Inter', sans-serif" font-size="19px" font-weight="500" fill="#A1A1AA">All measurements in INCHES. Pre-shrunk under 5%. Generous streetwear drape with rib-knit cuffs &amp; waistband.</text>
  </g>

  <!-- MAIN HIGH-VISIBILITY TABLE -->
  <g transform="translate(120, 435)">
    <!-- Table Header Background -->
    <rect x="0" y="0" width="1760" height="80" fill="#27272A" stroke="#52525B" stroke-width="2" rx="6" />
    
    <text x="60" y="50" class="table-header">SIZE</text>
    <text x="250" y="50" class="table-header">CHEST WIDTH (A)</text>
    <text x="680" y="50" class="table-header">BODY LENGTH (B)</text>
    <text x="1100" y="50" class="table-header">SLEEVE (C)</text>
    <text x="1440" y="50" class="table-header">CHEST TO FIT</text>

    <!-- ROW 1: S -->
    <rect x="0" y="80" width="1760" height="95" fill="#121214" stroke="#27272A" stroke-width="1.5" />
    <text x="60" y="142" class="size-cell">S</text>
    <text x="250" y="140" class="data-cell-accent">21.0 in <tspan class="data-cell-sub">(53 cm)</tspan></text>
    <text x="680" y="140" class="data-cell-bold">28.5 in <tspan class="data-cell-sub">(72 cm)</tspan></text>
    <text x="1100" y="140" class="data-cell-bold">25.2 in <tspan class="data-cell-sub">(64 cm)</tspan></text>
    <text x="1440" y="140" class="data-cell-bold">36" – 38"</text>

    <!-- ROW 2: M -->
    <rect x="0" y="175" width="1760" height="95" fill="#18181B" stroke="#27272A" stroke-width="1.5" />
    <text x="60" y="237" class="size-cell">M</text>
    <text x="250" y="235" class="data-cell-accent">23.0 in <tspan class="data-cell-sub">(58 cm)</tspan></text>
    <text x="680" y="235" class="data-cell-bold">29.5 in <tspan class="data-cell-sub">(75 cm)</tspan></text>
    <text x="1100" y="235" class="data-cell-bold">26.0 in <tspan class="data-cell-sub">(66 cm)</tspan></text>
    <text x="1440" y="235" class="data-cell-bold">39" – 41"</text>

    <!-- ROW 3: L -->
    <rect x="0" y="270" width="1760" height="95" fill="#121214" stroke="#27272A" stroke-width="1.5" />
    <text x="60" y="332" class="size-cell">L</text>
    <text x="250" y="330" class="data-cell-accent">24.5 in <tspan class="data-cell-sub">(62 cm)</tspan></text>
    <text x="680" y="330" class="data-cell-bold">30.5 in <tspan class="data-cell-sub">(77 cm)</tspan></text>
    <text x="1100" y="330" class="data-cell-bold">26.8 in <tspan class="data-cell-sub">(68 cm)</tspan></text>
    <text x="1440" y="330" class="data-cell-bold">42" – 44"</text>

    <!-- ROW 4: XL -->
    <rect x="0" y="365" width="1760" height="95" fill="#18181B" stroke="#27272A" stroke-width="1.5" />
    <text x="60" y="427" class="size-cell">XL</text>
    <text x="250" y="425" class="data-cell-accent">26.5 in <tspan class="data-cell-sub">(67 cm)</tspan></text>
    <text x="680" y="425" class="data-cell-bold">31.5 in <tspan class="data-cell-sub">(80 cm)</tspan></text>
    <text x="1100" y="425" class="data-cell-bold">27.5 in <tspan class="data-cell-sub">(70 cm)</tspan></text>
    <text x="1440" y="425" class="data-cell-bold">45" – 47"</text>

    <!-- ROW 5: 2XL -->
    <rect x="0" y="460" width="1760" height="95" fill="#121214" stroke="#27272A" stroke-width="1.5" />
    <text x="60" y="522" class="size-cell">2XL</text>
    <text x="250" y="520" class="data-cell-accent">27.5 in <tspan class="data-cell-sub">(70 cm)</tspan></text>
    <text x="680" y="520" class="data-cell-bold">32.5 in <tspan class="data-cell-sub">(83 cm)</tspan></text>
    <text x="1100" y="520" class="data-cell-bold">28.3 in <tspan class="data-cell-sub">(72 cm)</tspan></text>
    <text x="1440" y="520" class="data-cell-bold">48" – 51"</text>

    <!-- ROW 6: 3XL -->
    <rect x="0" y="555" width="1760" height="95" fill="#18181B" stroke="#27272A" stroke-width="1.5" />
    <text x="60" y="617" class="size-cell">3XL</text>
    <text x="250" y="615" class="data-cell-accent">28.7 in <tspan class="data-cell-sub">(73 cm)</tspan></text>
    <text x="680" y="615" class="data-cell-bold">33.5 in <tspan class="data-cell-sub">(85 cm)</tspan></text>
    <text x="1100" y="615" class="data-cell-bold">29.1 in <tspan class="data-cell-sub">(74 cm)</tspan></text>
    <text x="1440" y="615" class="data-cell-bold">52" – 55"</text>
  </g>

  <!-- DIAGRAM & HOW TO MEASURE SECTION (BOLD & HIGH CONTRAST) -->
  <g transform="translate(120, 1120)">
    <rect x="0" y="0" width="1760" height="640" fill="#121214" stroke="#3F3F46" stroke-width="2" rx="10" />

    <!-- Left: Hoodie Wireframe Vector Illustration -->
    <g transform="translate(120, 60)">
      <!-- Hood Outline -->
      <path d="M 200 110 
               C 170 30, 230 10, 260 10 
               C 290 10, 350 30, 320 110 Z" 
            fill="#27272A" stroke="#FFFFFF" stroke-width="3.5" />
      
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
            fill="#1E1E22" stroke="#FFFFFF" stroke-width="3.5" />

      <!-- Kangaroo Pocket -->
      <path d="M 195 380 L 325 380 L 345 470 L 175 470 Z" fill="#27272A" stroke="#FFFFFF" stroke-width="2.5" />

      <!-- Measurement A Line -->
      <line x1="145" y1="240" x2="375" y2="240" stroke="#FACC15" stroke-width="4.5" stroke-dasharray="8,5" />
      <circle cx="145" cy="240" r="7" fill="#FACC15" />
      <circle cx="375" cy="240" r="7" fill="#FACC15" />
      <rect x="230" y="210" width="60" height="50" fill="#000000" stroke="#FACC15" stroke-width="2.5" rx="6" />
      <text x="260" y="245" font-family="'Inter', sans-serif" font-size="28px" font-weight="900" fill="#FACC15" text-anchor="middle">A</text>

      <!-- Measurement B Line -->
      <line x1="260" y1="110" x2="260" y2="500" stroke="#FFFFFF" stroke-width="4" stroke-dasharray="8,5" />
      <circle cx="260" cy="110" r="6" fill="#FFFFFF" />
      <circle cx="260" cy="500" r="6" fill="#FFFFFF" />
      <rect x="230" y="315" width="60" height="50" fill="#000000" stroke="#FFFFFF" stroke-width="2.5" rx="6" />
      <text x="260" y="350" font-family="'Inter', sans-serif" font-size="28px" font-weight="900" fill="#FFFFFF" text-anchor="middle">B</text>

      <!-- Measurement C Line -->
      <line x1="330" y1="110" x2="455" y2="385" stroke="#38BDF8" stroke-width="4" stroke-dasharray="8,5" />
      <circle cx="330" cy="110" r="6" fill="#38BDF8" />
      <circle cx="455" cy="385" r="6" fill="#38BDF8" />
      <rect x="420" y="240" width="60" height="50" fill="#000000" stroke="#38BDF8" stroke-width="2.5" rx="6" />
      <text x="450" y="275" font-family="'Inter', sans-serif" font-size="28px" font-weight="900" fill="#38BDF8" text-anchor="middle">C</text>
    </g>

    <!-- Right: Explanations -->
    <g transform="translate(730, 60)">
      <text x="0" y="32" class="legend-title" font-size="30px">HOW TO MEASURE (INCHES):</text>
      
      <!-- Point A -->
      <circle cx="25" cy="90" r="20" fill="#1C1917" stroke="#FACC15" stroke-width="2.5" />
      <text x="25" y="99" font-family="'Inter', sans-serif" font-size="20px" font-weight="900" fill="#FACC15" text-anchor="middle">A</text>
      <text x="65" y="86" class="legend-title" fill="#FACC15">WIDTH / PIT TO PIT (FLAT ACROSS)</text>
      <text x="65" y="118" class="legend-text">Lay your hoodie flat. Measure across the chest from armpit seam to armpit seam.</text>

      <!-- Point B -->
      <circle cx="25" cy="195" r="20" fill="#1C1917" stroke="#FFFFFF" stroke-width="2.5" />
      <text x="25" y="204" font-family="'Inter', sans-serif" font-size="20px" font-weight="900" fill="#FFFFFF" text-anchor="middle">B</text>
      <text x="65" y="191" class="legend-title" fill="#FFFFFF">BODY LENGTH (SHOULDER TO WAISTBAND)</text>
      <text x="65" y="223" class="legend-text">Measure from the top neck seam straight down to the bottom edge of the ribbed hem.</text>

      <!-- Point C -->
      <circle cx="25" cy="300" r="20" fill="#1C1917" stroke="#38BDF8" stroke-width="2.5" />
      <text x="25" y="309" font-family="'Inter', sans-serif" font-size="20px" font-weight="900" fill="#38BDF8" text-anchor="middle">C</text>
      <text x="65" y="296" class="legend-title" fill="#38BDF8">SLEEVE LENGTH (SHOULDER TO CUFF)</text>
      <text x="65" y="328" class="legend-text">Measure along the outer arm from the shoulder seam down to the end of the wrist cuff.</text>

      <!-- Pro Tip Box -->
      <rect x="0" y="375" width="960" height="135" fill="#1E1E22" stroke="#3F3F46" stroke-width="2" rx="8" />
      <text x="35" y="415" font-family="'Inter', sans-serif" font-size="22px" font-weight="800" fill="#FFFFFF">✦ FLEECE FIT RECOMMENDATION:</text>
      <text x="35" y="448" font-family="'Inter', sans-serif" font-size="20px" fill="#E4E4E7">Designed with a modern structural boxy drape that holds silhouette perfectly.</text>
      <text x="35" y="480" font-family="'Inter', sans-serif" font-size="19px" fill="#A1A1AA">True to size for relaxed streetwear styling · Size up for extreme oversized look.</text>
    </g>
  </g>

  <!-- FOOTER -->
  <text x="1000" y="1860" class="tagline">HEAVENLYNOVA · US STUDIO DIRECT FULFILLMENT · PRINTED IN THE USA</text>
</svg>
`;
}

async function renderAll() {
  console.log('Rendering US Inches T-Shirt Size Chart...');
  const teeSvg = Buffer.from(generateTeeUSInchesSVG());
  const teePngPath = path.join(outDir, 'heavenlynova_tshirt_size_chart_US_INCHES.png');
  await sharp(teeSvg, { density: 150 })
    .resize(2000, 2000)
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(teePngPath);

  console.log('Rendering US Inches Hoodie Size Chart...');
  const hoodieSvg = Buffer.from(generateHoodieUSInchesSVG());
  const hoodiePngPath = path.join(outDir, 'heavenlynova_hoodie_size_chart_US_INCHES.png');
  await sharp(hoodieSvg, { density: 150 })
    .resize(2000, 2000)
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(hoodiePngPath);

  // Copy directly to user's Desktop
  const destPaths = ['T:\\DESKTOP', 'C:\\Users\\tudor\\Desktop'];
  for (const p of destPaths) {
    if (fs.existsSync(p)) {
      fs.copyFileSync(teePngPath, path.join(p, 'heavenlynova_tshirt_size_chart_US_INCHES.png'));
      fs.copyFileSync(hoodiePngPath, path.join(p, 'heavenlynova_hoodie_size_chart_US_INCHES.png'));
      console.log(`Copied US INCHES charts to: ${p}`);
    }
  }
}

renderAll().catch(console.error);
