# HeavenlyNova — Product Listing Playbook
> **Versiune:** 1.0 · **Data:** 2026-09-29  
> Acest document este sursa unică de adevăr pentru toate listingurile de produse noi — atât pe headless (`heavenlynova.com`) cât și pe Etsy. Orice dev sau copywriter care adaugă un produs NOU trebuie să citească și să respecte toate regulile de mai jos.

---

## 1. Vocabularul de Brand — Ce SE FOLOSEȘTE și ce NU

### ✅ Termeni APROBAȚI
| Termen | Utilizare |
|--------|-----------|
| `STATEMENT SERIES` | Seria de produs (înlocuiește orice termen de colecție generic) |
| `STATEMENT 00X` | Numerotarea piesei (ex: STATEMENT 001, 002, 003) |
| `CELESTIAL ARCHITECTURE` | Referință la designul grafic / geometrie astronomică |
| `HIGH-DENSITY MONOCHROME` | Descrierea tehnicii de print |
| `ARCHITECTURAL BOXY SILHOUETTE` | Descrierea croielii |
| `MONUMENTAL CALM` | Tonul emoțional al piesei |
| `STATEMENT SERIES // PIECE 00X` | Sub-header pe PDP (Product Detail Page) |
| `Deep Black` / `Chalk White` | Denumirile de culori (nu "black" sau "white" generic) |
| `245–255 GSM` | Specificația greutății textilei |

### ❌ Termeni INTERZISI — Nu se folosesc niciodată
| Termen interzis | Motivul |
|-----------------|---------|
| `Artifact` | Sună a relicvă arheologică sau fierărie, nu modă celestă |
| `Archival` (ca substantiv principal) | Clișeu de modă suprasaturat |
| `Introspection` | Prea vag, adolescentin |
| `Heritage Collection` (ca unic tag) | Înlocuit cu `Statement Series` |
| Citate cu "connections", "universe", "feel" | Ton adolescentin — rupt de direcția brutalist-monumentală |
| Orice citat generic motivațional | Brand-ul nu predică, brand-ul construiește |

---

## 2. Structura Obligatorie a Descrierii PDP

Orice produs nou TREBUIE să urmeze exact această structură:

```
✦ HEAVENLYNOVA // STATEMENT SERIES: [NUMELE PRODUSULUI]
· ARCHITECTURAL BOXY SILHOUETTE
· DESIGNED FOR MONUMENTAL CALM, NOT ATTENTION

STATEMENT SERIES // PIECE 00X

"[Citatul oficial aprobat de brand — max 10 cuvinte, neutru și monumental]"

[Body text editorial — 2-4 fraze per culoare, specifice culorii, nu generice]
[Nu se repetă același text pentru Black și White — fiecare culoare are editorial propriu]

• 245–255 GSM (7.5 oz/yd²) Heavyweight Streetwear Jersey
• 100% Combed Ring-Spun USA Cotton (Rigid structural hand-feel)
• Architectural boxy fit with authentic dropped shoulders
• High-density tactile print — subtle chest insignia & full-scale orbital back piece
• Reinforced 1" double-needle collar with shoulder-to-shoulder interior taping
• Part of the Statement Series — engineered for daily rituals
```

### Tagline (text sub titlu în catalog grid):
```
Statement 00X — [Culoare]. [O frază scurtă, neutră, descriptivă — max 12 cuvinte]
```

**Exemple aprobate:**
- `Statement 003 — Deep Black. An expansive orbital dialogue rendered in high-density stark ink.`
- `Statement 003 — Chalk White. Celestial geometry and calm monumental presence.`

---

## 3. Regulile de Imagine — Structura Obligatorie

Fiecare produs nou TREBUIE să aibă **exact 3 imagini per culoare**, în această ordine în `drops.ts`:

| Poziția | Tipul imaginii | Filename keyword OBLIGATORIU |
|---------|---------------|------------------------------|
| `images[0]` | **Back design** (spatele tricuoului cu designul complet) | trebuie să conțină `back` sau `design` sau `shadow` în filename |
| `images[1]` | **Front** (fața tricuoului, plain sau cu logo chest) | poate conține `front`, `original`, etc. |
| `images[2]` | **Neck label** (detaliu etichetă interior) | trebuie să conțină `neck` sau `label` sau `close-up` sau `detailed` |

> **De ce contează ordinea și keyword-ul?**  
> `ProductDetail.tsx` detectează automat imaginile prin regex pe filename:
> - `isNeck = /neck|close-up|detailed/i` → secțiunea zoom cu eticheta
> - `Design Focus Section = /back|mid|design|shadow/i` → preview-ul mare de jos al paginii
>
> Dacă `images[0]` NU conține `back|design|shadow`, secțiunea **Design Focus (preview mare)** nu va apărea pe PDP.

### Reguli de denumire a fișierelor
- **ZERO spații** în folder names și filenames — folosește cratimă `-`
- Format recomandat: `PRODUCT-NAME-Back-Color.webp`
- Exemple corecte: `INTERGALACTIC-LOVE-Back-Black.webp`, `Soulfull-Back-White.webp`
- Exemple greșite: `INTERGALACTIC LOVE On Black.webp` ❌

### Structura de foldere
```
public/
  Assets/
    Images/
      Preview/
        [PRODUCT-NAME-CU-CRATIME]/
          [PRODUCT-NAME]-[COLOR]/
            [PRODUCT-NAME]-Back-[Color].webp   ← images[0] — back design
            [Something]-Front-[Color].webp     ← images[1] — front
            Neck-Label-[Color].webp            ← images[2] — neck detail
```

---

## 4. Checklist Complet — Adăugare Produs Nou

Înainte de orice commit, bifează TOATE punctele:

### 📁 Imagini
- [ ] Folder creat cu cratime (zero spații)
- [ ] `images[0]` = back design, filename conține `back` sau `design`
- [ ] `images[1]` = front sau unghi de prezentare
- [ ] `images[2]` = neck label, filename conține `neck` sau `label`
- [ ] Toate filenames fără spații

### 📝 Copy
- [ ] Tagline respectă formatul `Statement 00X — [Culoare]. [Frază scurtă]`
- [ ] Descrierea începe cu `✦ HEAVENLYNOVA // STATEMENT SERIES:`
- [ ] Sub-header `STATEMENT SERIES // PIECE 00X` prezent
- [ ] Citatul oficial aprobat (max 10 cuvinte, nu clichee)
- [ ] Body text diferențiat per culoare (Black ≠ White ca editorial)
- [ ] Spec bullets complete (6 puncte standard de mai sus)
- [ ] Zero termeni interziși (Artifact, Archival ca substantiv, Introspection, citate generice)

### 🔧 Backend / Cod
- [ ] Produs adăugat în `src/data/drops.ts` (id, category, productType, name, tagline, description, price, priceUsd, images)
- [ ] `category: 'individuals'` pentru Heritage, `'flagship'` pentru Drops principale
- [ ] SKU-uri US adăugate în `api/stripe-webhook.js` → `PRINTIFY_PRODUCT_MAP`
- [ ] `product_id` Printify completat (din URL-ul produsului în Printify Dashboard)
- [ ] EU edition marcat `TODO` dacă nu e creat încă
- [ ] Intrare adăugată în `SPREADCONNECT_VARIANTS` din `drops.ts`
- [ ] SEO override adăugat în `PRODUCT_SEO_OVERRIDES` din `ProductDetail.tsx`
- [ ] `npm run build` — zero erori TypeScript

### 🚀 Deploy
- [ ] `git add -A` + `git commit` cu mesaj descriptiv
- [ ] `git push origin main`
- [ ] Verificat live pe `heavenlynova.com` după deploy Vercel (~2 min)
- [ ] Confirmat că Design Focus (back preview mare) apare pe PDP
- [ ] Confirmat că neck label zoom apare corect

---

## 5. Tonul Editorial — Referințe de Brand

HeavenlyNova se poziționează alături de:
- **Represent** — heavyweight fabrication, editorial restraint
- **Cole Buxton** — monumental simplicity, no excess
- **Fear of God** — architectural silhouette, sacred minimalism

### Principii de scris
1. **Nu predica** — brand-ul construiește, nu motivează
2. **Neutru și monumental** — fraze scurte, declarative, fără superlative
3. **Specific materialului** — GSM, construcție, print — nu emoții vagi
4. **Per culoare** — fiecare colorway are editorial propriu, nu copy-paste
5. **Fără "you"** — evită adresarea directă — piesa există independent

---

## 6. Produse Existente — Status SKU

| Produs | ID | US SKUs | EU SKUs |
|--------|----|---------|---------|
| Essential Black | `essentials-black` | ✅ | ✅ |
| Essential White | `essentials-white` | ✅ | ✅ |
| Core Hoodie | `core-hoodie-white` | ✅ | ✅ |
| Soulfull Black | `soulfull-black` | ✅ | ✅ |
| Soulfull White | `soulfull-white` | ✅ | ✅ |
| Soulfull Hoodie | `soulfull-hoodie` | ✅ | ✅ |
| The Origin | `the-origin` | ✅ | ✅ |
| Broken 001 | `broken-001` | ✅ | ✅ |
| Broken Hoodie | `broken-hoodie` | ✅ | ✅ |
| Embrace Your Shadow | `embrace-your-shadow` | ✅ | ✅ |
| Intergalactic Love Black | `intergalactic-love-black` | ✅ | ✅ |
| Intergalactic Love White | `intergalactic-love-white` | ✅ | ✅ |
| Transcend Ego Black | `transcend-ego-black` | ✅ | ✅ |
| Infinity Love Dragon | `infinity-love-dragon` | ✅ | ✅ |
