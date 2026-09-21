# 📌 Protocol de Lucru Local & Conservare Resurse Vercel
## Proiect: heavenlynova-streetwear

Pentru a nu depăși limita gratuită de stocare Vercel (10 GB) și a evita blocarea contului, toate sesiunile de lucru și asistenții AI trebuie să respecte cu strictețe următorul protocol:

---

### 1. Dezvoltare și testare 100% LOCALĂ (`npm run dev`)
- Toate ajustările de design, CSS, texte, butoane, pagini și componente se fac și se testează exclusiv pe mașina locală (`http://localhost:3000` / `http://localhost:5173`).
- **INTERZIS** folosirea Vercel ca mediu de previzualizare rapidă la fiecare linie de cod modificată.

---

### 2. Verificare locală a build-ului (`npm run build`)
- Înainte de a da vreun `git push`, se rulează obligatoriu în terminal:
  ```bash
  npm run build
  ```
- Dacă build-ul trece local fără erori de TypeScript / Vite / ESLint, abia atunci codul este considerat gata de livrare.

---

### 3. Gruparea modificărilor în Milestone-uri (Fără push-uri din 5 în 5 minute)
- **NU** se face push după fiecare mic fix izolat.
- Se adună toate modificările logice dintr-o sesiune într-un singur commit stabil și se face un singur push când sarcina/modulul este complet funcțional și verificat.

---

### 4. Folosirea obligatorie a tag-ului `[skip ci]` pentru modificări non-executabile
- Dacă se face commit doar pe fișiere Markdown (`.md`), documentație, specificații, checklist-uri sau fișiere ce nu cer deploy imediat, se include obligatoriu în mesajul de commit:
  ```bash
  git commit -m "docs: actualizare specificatii [skip ci]"
  ```
- Vercel va detecta `[skip ci]` și nu va declanșa build, economisind spațiu și resurse de deployment.

---

### 5. Mentenanță Vercel Storage
- În **Settings -> Git -> Ignored Build Step**, se poate seta comanda de ignorare pentru branch-urile secundare.
- Periodic, se șterg deployment-urile vechi din Vercel Dashboard (*Deployments -> Delete*) pentru a menține stocarea mult sub limita de 10 GB.
