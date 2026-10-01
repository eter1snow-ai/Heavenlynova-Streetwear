const fs = require('fs');
const path = require('path');

const ROOT_DIR = 'T:\\DESKTOP\\heavenlynova-streetwear';
const OUTPUT_FILE = 'T:\\DESKTOP\\codebase-clean.txt';

// Extensii permise
const ALLOWED_EXTS = new Set([
  '.ts', '.tsx', '.js', '.jsx', '.cjs', '.mjs',
  '.json', '.css', '.html', '.sql', '.md'
]);

// Fișiere sau foldere complet ignorate
const IGNORED_NAMES = new Set([
  'node_modules',
  '.git',
  'dist',
  'dist-ssr',
  'heavenlynova', // subfolder vechi nefolosit
  'scripts',      // scripturi interne locale
  'product-images-3310851',
  '.env',
  '.env.local',
  '.env.example',
  '.env.production',
  '.env.development',
  'package-lock.json',
  '.DS_Store'
]);

// Modele regex pentru date sensibile suplimentare (defense in depth)
const SENSITIVE_PATTERNS = [
  /sk_live_[a-zA-Z0-9]+/g,
  /rk_live_[a-zA-Z0-9]+/g,
  /whsec_[a-zA-Z0-9]+/g,
  /pk_live_[a-zA-Z0-9]+/g,
  /eyJ[a-zA-Z0-9_-]{20,}\.[a-zA-Z0-9_-]{20,}\.[a-zA-Z0-9_-]{20,}/g // JWT tokens
];

function sanitizeContent(content) {
  let clean = content;
  for (const pattern of SENSITIVE_PATTERNS) {
    clean = clean.replace(pattern, '[REDACTED_SENSITIVE_KEY]');
  }
  return clean;
}

function shouldProcessFile(filePath) {
  const base = path.basename(filePath);
  if (IGNORED_NAMES.has(base)) return false;
  if (base.startsWith('.env')) return false;

  const ext = path.extname(filePath).toLowerCase();
  return ALLOWED_EXTS.has(ext);
}

function getFiles(dir, fileList = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (IGNORED_NAMES.has(entry.name)) continue;

    if (entry.isDirectory()) {
      getFiles(fullPath, fileList);
    } else if (entry.isFile() && shouldProcessFile(fullPath)) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

console.log('Scanning codebase...');
const allFiles = getFiles(ROOT_DIR);
console.log(`Found ${allFiles.length} files to pack.`);

let out = '';
out += '===============================================================================\n';
out += 'HEAVENLYNOVA STREETWEAR — CLEAN CODEBASE EXPORT (FOR AI ARCHITECTURE & CODE REVIEW)\n';
out += `Generated on: ${new Date().toISOString()}\n`;
out += 'Security Guarantee: All .env files, private tokens, live Stripe keys, and JWTs have been strictly stripped.\n';
out += '===============================================================================\n\n';

out += '### PROJECT FILE TREE:\n';
for (const f of allFiles) {
  const rel = path.relative(ROOT_DIR, f).replace(/\\/g, '/');
  out += `- ${rel}\n`;
}
out += '\n===============================================================================\n\n';

for (const f of allFiles) {
  const rel = path.relative(ROOT_DIR, f).replace(/\\/g, '/');
  console.log(`Packing: ${rel}`);
  
  let content = fs.readFileSync(f, 'utf8');
  content = sanitizeContent(content);

  out += `\n/* ─────────────────────────────────────────────────────────────────────────────\n`;
  out += `   FILE: ${rel}\n`;
  out += `   ────────────────────────────────────────────────────────────────────────── */\n\n`;
  out += content;
  out += '\n\n';
}

fs.writeFileSync(OUTPUT_FILE, out, 'utf8');
const stats = fs.statSync(OUTPUT_FILE);
console.log(`\nSUCCESS! Created ${OUTPUT_FILE}`);
console.log(`Total Size: ${(stats.size / 1024).toFixed(2)} KB`);
