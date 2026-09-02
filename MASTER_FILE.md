# MASTER FILE — HeavenlyNova Streetwear (HVN)
> **Sursa Unică de Adevăr** pentru sesiuni viitoare de dezvoltare.
> Actualizat: **2 septembrie 2026**

---

## 1. Ce Este Acest Proiect

HeavenlyNova (HVN) este un brand de streetwear heavyweight independent.
Site-ul este un e-commerce SPA complet, cu integrare Shopify (sau mock data).

**URL Live:** (Vercel — deploy din main)
**Repo:** `eter1snow-ai/heavenlynova-streetwear`
**Deployment:** Vercel (auto-deploy din GitHub `main`)

---

## 2. Tech Stack

`
React 19 + Vite 7 + TypeScript 5.9
Tailwind CSS 4 (@tailwindcss/postcss)
React Router DOM 7
Framer Motion 12 (animații page transitions + UI)
Nodemailer 8 (contact form, returns — API functions)
Sharp 0.34 (procesare imagini server-side)
`

**Build command:** `tsc -b && vite build`
**Dev:** `npm run dev` → `localhost:5173`

---

## 3. Arhitectura & Rute

Router: `BrowserRouter` cu `AnimatePresence` (Framer Motion) pentru page transitions.
Fiecare pagina este înfășurată în `<MotionPage>` cu fade-in/out 0.4s.

### Rute Definite (src/App.tsx)

| Rută | Componenta | Notă |
|------|-----------|------|
| / | Home.tsx | Landing principal |
| /drops | Drops.tsx | Toate produsele |
| /story | Story.tsx | Chapter 000 — The First Signal |
| /heritage | Heritage.tsx | Colecția Heritage |
| /essentials | Essentials.tsx | Colecția Essentials |
| /seraphim | Seraphim.tsx | Chapter 001 — noindex! |
| /join | Join.tsx | Email capture / waitlist |
| /contact | Contact.tsx | Formular contact |
| /track-order | TrackOrder.tsx | Tracking comandă |
| /product/:productId | ProductDetail.tsx | Pagina produs (SEO intern) |
| /privacy-policy | PrivacyPolicy.tsx | — |
| /terms-of-service | TermsOfService.tsx | — |
| /shipping-policy | ShippingPolicy.tsx | — |
| /refund-policy | RefundPolicy.tsx | — |

### Layout Global (src/App.tsx)

`Navbar` + `AnimatedRoutes` + `Footer` înfășurate în:
- `CartProvider` (context global coș)
- `EmailCapture` (popup/banner email)
- `CookieBanner`
- `CartDrawer` (side drawer coș)
- `bg-black text-white` pe tot site-ul

---

## 4. Produse & Date

### src/data/drops.ts

Fișierul principal de date produse. Structura unui produs:

`	ypescript
type Product = {
  id: string              // ex: 'broken-001', 'soulfull-black'
  category: Category      // 'flagship' | 'individuals' | 'essentials' | 'origin'
  productType: ProductType // 'tee' | 'hoodie'
  name: string
  tagline: string
  description: string
  price: string           // ex: '59.99€'
  images: string[]        // căi relative la /public/Assets/Images/Preview/
}
`

### Produse Actuale

| ID | Nume | Tip | Categorie | Preț |
|----|------|-----|-----------|------|
| broken-001 | BROKEN // 001 | tee | flagship | 59.99€ |
| soulfull-black | SOULFULL — BLACK | tee | individuals | 59.99€ |
| core-hoodie-white | (Core Hoodie White) | hoodie | essentials | — |
| ... | ... | ... | ... | ... |

### Mod Date (Feature Flag)

`VITE_USE_MOCK_DATA=true` → folosește `src/data/drops.ts` (offline, fara Shopify)
`VITE_USE_MOCK_DATA=false` → folosește Shopify Storefront API live

---

## 5. Integrare Shopify (când e activă)

| Variabilă ENV | Valoare |
|--------------|---------|
| VITE_SHOPIFY_STORE_DOMAIN | your-store.myshopify.com |
| VITE_SHOPIFY_STOREFRONT_TOKEN | (Storefront Access Token public) |
| VITE_USE_MOCK_DATA | true (mock) / false (live Shopify) |

---

## 6. API Functions (Vercel Serverless — /api/)

| Endpoint | Fișier | Rol |
|----------|--------|-----|
| POST /api/contact | api/contact.js | Trimite e-mail contact via Nodemailer |
| POST /api/returns | api/returns.js | Procesare cereri retur |
| POST /api/subscribe | api/subscribe.js | Abonare email/newsletter |

Toate folosesc Nodemailer pentru trimitere e-mail.

---

## 7. Structura Componentelor

`
src/
├── App.tsx                     # Router + layout global + SEO per rută
├── data/drops.ts               # Date produse (mock)
├── pages/
│   ├── Home.tsx                # Landing (9434 bytes)
│   ├── ProductDetail.tsx       # Pagina produs + SEO intern (21424 bytes)
│   ├── Drops.tsx               # Grid produse
│   ├── Story.tsx               # Poveste brand (12431 bytes)
│   ├── Heritage.tsx / Essentials.tsx / Seraphim.tsx
│   ├── Contact.tsx             # Formular contact
│   ├── Join.tsx                # Email waitlist
│   ├── TrackOrder.tsx          # Tracking
│   └── [Policy pages...]
├── components/
│   ├── cart/
│   │   ├── CartContext.tsx     # Context global coș (React Context API)
│   │   └── CartDrawer.tsx     # Side drawer animat
│   ├── layout/
│   │   ├── Navbar.tsx         # Navigare + cart icon
│   │   └── Footer.tsx         # Footer global
│   ├── home/                  # Componente specifice Home
│   └── shared/
│       ├── EmailCapture.tsx   # Popup/banner captare email
│       └── CookieBanner.tsx   # GDPR cookie consent
├── hooks/
│   └── useSEO.ts              # applySEO() — injecție canonical + meta dinamică
└── lib/                       # Utilitare
`

---

## 8. Design System & Identitate Brand

### Principii Vizuale

- Fundal: **negru pur** (`bg-black`) pe tot site-ul
- Text: **alb** (`text-white`) ca bază
- Tipografie: uppercase, spațiere largă (`letter-spacing`)
- Estetică: minimalistă, heavy, dark — fără culori stridente
- Animații: fade page transitions 0.4s via Framer Motion

### Tailwind Config

Fișier: `tailwind.config.ts` — customizat cu clase HVN-specifice (`hn-radius-0` etc.)

### Clase CSS Personalizate

`hn-radius-0` — pe containerul principal (border-radius 0 peste tot)

---

## 9. SEO

- SEO per rută: `applySEO()` din `src/hooks/useSEO.ts`
- Canonical tags dinamic injectate per path
- `/seraphim` are `noindex: true` (pagina secretă/teaser)
- Paginile de produs (`/product/:id`) gestionează SEO intern în `ProductDetail.tsx`

---

## 10. Backlog / TODO Curent

Din TODO.md:
- [ ] Hero.tsx: Add mobile pt-[80px] md:pt-0, object-contain image
- [ ] Footer.tsx: Remove 'The Origin' link
- [ ] Verificare deploy Vercel pe iPhone (mobile-first)

---

## 11. Reguli Critice pentru Sesiunile Viitoare AI

1. Site-ul este complet negru (bg-black). Nu adăuga culori de fundal deschise fără aprobare.
2. VITE_USE_MOCK_DATA controlează sursa produselor. Când e true, nu se face niciun call Shopify.
3. CartContext este global — nu instanția CartProvider în componente individuale.
4. /seraphim este o pagina NOINDEX — nu o adăuga în sitemap dacă generezi unul.
5. ProductDetail.tsx gestionează SEO propriu (useSEO hook intern) — nu suprascrie din App.tsx.
6. Framer Motion AnimatePresence — key-ul pe Routes este location.pathname. Nu schimba asta.
7. Page transitions sunt 0.4s fade. Nu elimina AnimatePresence sau MotionPage.
8. Imaginile sunt în /public/Assets/Images/Preview/ — căi relative, nu absolute cu domeniu.
9. Build: tsc -b && vite build. Spre deosebire de landing-ui, NU există prerender script.
