# HEAVENLYNOVA // New Product Listing Playbook
> Standard Operating Procedure (SOP) pentru adăugarea oricărui produs nou (Tee / Hoodie / Artifact) în arhitectura Headless HeavenlyNova.

---

## 1. Structura Fișierelor & Ghidul de Imagini

### 1.1 Folderul de Asset-uri
Toate imaginile se plasează în:
```text
public/Assets/Images/Preview/<NUME_FOLDER_PRODUS>/
```
*Exemplu:* `public/Assets/Images/Preview/INTERGALACTIC HOODIE/`

### 1.2 Nomenclatură & Roluri de Imagine (Standard 4 Imagini)
| Rol | Format Fișier Recomandat | Comportament în UI |
|---|---|---|
| **1. Reverse / Spate (Grafică Principală)** | `<PRODUS>.webp` | Prima imagine pe care o vede cumpărătorul (showcase-ul artistic). |
| **2. Front / Față (Branding Piept)** | `Hoodie On black Original Front.webp` sau `Original Esentials Black Front.webp` | Imagine secundară pentru vederea din față. |
| **3. Lookbook Editorial (Model / Diptic)** | `<PRODUS> Lookbook.webp` | **CRITIC:** Trebuie să conțină cuvântul `Lookbook` sau `Lookbok` în nume. Codul o detectează automat și o randează **pe 2 coloane întregi (`md:col-span-2`)**, `aspect-auto`, `object-contain`, fără crop! |
| **4. Detaliu Țesătură / Macro Zoom** | `Detailed black hoodie close-up.webp` sau `Neck Label Black.webp` | Permite hover cu efectul de zoom optic 2.8x. |

### 1.3 Reguli de Optimizare
* **FĂRĂ PNG-uri grele (>1MB) în Git:** Convertiți întotdeauna PNG-urile în WebP la calitate 85–90%.
* Script rapid de conversie Node.js (dacă aveți un PNG în folder):
  ```bash
  node -e "const sharp = require('sharp'); sharp('cale/poza.png').webp({quality: 85}).toFile('cale/poza.webp');"
  ```
* Ștergeți capturile de ecran sau fișierele temporare înainte de git commit.

---

## 2. Înregistrarea în Catalog (`src/data/drops.ts`)

Adăugați obiectul de produs în array-ul `products`:

```typescript
{
  id: 'nume-produs-kebab-case', // ex: 'intergalactic-hoodie'
  category: 'individuals' as Category, // 'individuals' (Heritage/Statement), 'essentials', 'flagship', 'origin'
  productType: 'hoodie' as ProductType, // 'hoodie' sau 'tee'
  name: 'INTERGALACTIC HOODIE', // Numele afișat cu majuscule
  tagline: '10 oz / 340 GSM Heavyweight 3-End Fleece // Statement 003',
  description: `✦ HEAVENLYNOVA // STATEMENT SERIES: ...`,
  price: '$94.99', // Prețul formatat
  priceUsd: 94.99, // Prețul numeric pentru Stripe & Pixel
  images: [
    '/Assets/Images/Preview/<FOLDER>/Spate.webp',
    '/Assets/Images/Preview/<FOLDER>/Fata.webp',
    '/Assets/Images/Preview/<FOLDER>/Lookbook.webp',
    '/Assets/Images/Preview/<FOLDER>/Detaliu.webp',
  ],
}
```

---

## 3. SEO & Experiența Paginii de Produs (`src/pages/ProductDetail.tsx`)

1. **SEO Overrides (`PRODUCT_SEO_OVERRIDES`):**
   Adăugați meta title și meta description unice:
   ```typescript
   'intergalactic-hoodie': {
     title: 'INTERGALACTIC Hoodie — Heavyweight Streetwear (10 oz) | HeavenlyNova',
     description: 'Statement 003 — An expansive orbital dialogue rendered in heavyweight 340 GSM 3-end fleece by HeavenlyNova.',
   },
   ```
2. **Filtru imagini de variantă (`filteredVariantImages`):**
   Dacă ID-ul are un prefix nou, includeți-l în whitelist pentru a ignora eticheta de gât ca variantă separată:
   ```typescript
   product?.id?.startsWith('intergalactic') ||
   ```
3. **Ghid de Mărimi:**
   Se selectează automat: dacă `product.id.includes('hoodie')` se deschide ghidul de hanorac, altfel ghidul de tricou.

---

## 4. Rute, Filtre & Navigare

* **`/drops` (`src/pages/Drops.tsx`):**
  * Produsul intră automat în catalogul principal.
  * Răspunde automat la filtrul `ALL | TEES | HOODIES` și la filtrul de colecție (`All | Essentials | Heritage / Statement | Seraphim`).
* **`/heritage` (`src/pages/Heritage.tsx`):**
  * Dacă produsul are `category: 'individuals'`, este afișat automat pe pagina de Heritage.
  * Respectă selectorul de categorii `ALL | TEES | HOODIES`.
* **Homepage (`src/pages/Home.tsx`):**
  * Pentru a include piesa în grila de produse de pe prima pagină, adăugați ID-ul în array-ul `showcaseIds`:
  ```typescript
  const showcaseIds = [
    'broken-hoodie',
    'broken-001',
    'infinity-love-dragon',
    'transcend-ego-black',
    'transcend-hoodie',
    'dragon-hoodie',
    'intergalactic-hoodie', // <--- adăugat aici
    ...
  ]
  ```

---

## 5. Automatizare Printify Webhook (`api/stripe-webhook.js`)

În obiectul `PRINTIFY_EDITIONS`, adăugați routing-ul separat pentru **US** și **EU**:

```javascript
'intergalactic-hoodie': {
  us: {
    product_id: '<PRINTIFY_US_PRODUCT_ID>',
    skus: {
      S:     '<SKU_S>',
      M:     '<SKU_M>',
      L:     '<SKU_L>',
      XL:    '<SKU_XL>',
      XXL:   '<SKU_2XL>',
      '2XL': '<SKU_2XL>', // IMPORTANT: Definiți ambele (2XL și XXL)
      '3XL': '<SKU_3XL>',
    },
    variants: { S: 0, M: 0, L: 0, XL: 0, '2XL': 0, '3XL': 0 },
  },
  eu: {
    product_id: '<PRINTIFY_EU_PRODUCT_ID>',
    skus: {
      S:     '<SKU_S>',
      M:     '<SKU_M>',
      L:     '<SKU_L>',
      XL:    '<SKU_XL>',
      XXL:   '<SKU_2XL>',
      '2XL': '<SKU_2XL>',
      '3XL': '<SKU_3XL>',
    },
    variants: { S: 0, M: 0, L: 0, XL: 0, '2XL': 0, '3XL': 0 },
  },
},
```

> **Regulă de aur:** Dacă listingul pentru US nu este încă creat pe Printify, setați temporar `product_id` și `skus` din blocul `us` identice cu `eu` (fallback direct) până când listingul US este gata, astfel încât nicio comandă să nu eșueze.

---

## 6. Checklist de Verificare & Lansare Live

- [ ] Toate imaginile sunt `.webp` și lookbook-ul are cuvântul `Lookbook` în nume.
- [ ] Produsul este definit în `src/data/drops.ts` cu preț și descriere.
- [ ] `ProductDetail.tsx` conține SEO override.
- [ ] ID-ul produsului este adăugat în `showcaseIds` din `src/pages/Home.tsx`.
- [ ] Webhook-ul `api/stripe-webhook.js` conține SKU-urile pentru ambele regiuni (US & EU).
- [ ] Compilare locală fără erori:
  ```bash
  npm run build
  ```
- [ ] Commit și push pe GitHub:
  ```bash
  git add .
  git commit -m "feat: add <Product Name> to catalog, routes and webhook"
  git push origin main
  ```
- [ ] Deploy forțat pe Vercel Production:
  ```bash
  npx vercel --prod --yes
  ```
- [ ] Test vizual pe `https://heavenlynova.com/product/<id>` cu Hard Refresh (`Ctrl + F5`).
