# HeavenlyNova — TODO List

## 🔐 Securitate & Mentenanță (Când ai timp liber)
- [ ] **Roll Stripe Live Keys & Webhook Secret:**
  1. Stripe Dashboard → Developers → API keys → Roll la Restricted Key (`STRIPE_SECRET_KEY`)
  2. Stripe Dashboard → Developers → Webhooks → Roll la Signing Secret (`STRIPE_WEBHOOK_SECRET`)
  3. Actualizare variabile în Vercel Settings → Environment Variables (`STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`) și redeploy
  4. Salvare chei noi EXCLUSIV în `HVN_CREDENTIALS_PRIVATE` și `.env.local` (niciodată în fișiere .md sau chat-uri AI).

## 🚀 Lansare & Campanie
- [ ] Verificare finală comenzi în Printify Dashboard (comutare pe Automatic approval când ești pregătit)
- [ ] Mobile UX check pe pagina de produs (opțional: buton Add to Cart sticky pe telefon)
- [ ] Start campanie reclame Pinterest / TikTok cu link direct UTM pe produs
