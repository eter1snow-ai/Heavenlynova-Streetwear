/**
 * api/create-checkout-session.js
 *
 * Vercel Serverless Function — Stripe Checkout Session
 *
 * Primeşte datele coşului de la frontend şi creează o sesiune de checkout Stripe.
 * Returnează sessionUrl către care frontend-ul redirectează utilizatorul.
 *
 * Flux:
 *   Frontend POST { cartLines } → această funcție → Stripe API → { sessionUrl } → redirect
 *
 * Securitate:
 *   - STRIPE_SECRET_KEY este pe server (nu în frontend)
 *   - Prețurile sunt validate server-side din catalogul local (nu preluate din request)
 *   - Nu există posibilitate de price manipulation de către client
 */

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder')

// ─── Catalogul de prețuri autorizate (server-side truth) ─────────────────────
// IMPORTANT: Prețurile NU se iau din request! Se validează față de acest catalog.
// Dacă un productId nu e în catalog → request-ul e respins cu 400.

const AUTHORIZED_PRICES = {
  'essentials-black':  4499,   // $44.99 în cenți
  'essentials-white':  4499,
  'core-hoodie-white': 8999,   // $89.99
  'soulfull-black':    5999,   // $59.99
  'soulfull-hoodie':   8999,
  'the-origin':        5999,
  'broken-001':        5999,
}

module.exports = async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { cartLines } = req.body

    // ─── Validare input ────────────────────────────────────────────────────────
    if (!cartLines || !Array.isArray(cartLines) || cartLines.length === 0) {
      return res.status(400).json({ error: 'Invalid cart: cartLines must be a non-empty array.' })
    }

    // ─── Construire line_items cu prețuri validate server-side ─────────────────
    const lineItems = []

    for (const item of cartLines) {
      const { productId, size, productTitle, quantity, imageUrl } = item

      // Validare câmpuri obligatorii
      if (!productId || !size || !productTitle || !quantity) {
        return res.status(400).json({ error: `Invalid cart item: missing required fields.` })
      }

      // Validare preț autorizat (anti-tamper)
      const authorizedPriceUsdCents = AUTHORIZED_PRICES[productId]
      if (!authorizedPriceUsdCents) {
        return res.status(400).json({ error: `Unknown product: ${productId}` })
      }

      // Construim item-ul Stripe
      const stripeItem = {
        price_data: {
          currency: 'usd',
          product_data: {
            name: `${productTitle} — ${size}`,
            description: `Size: ${size}`,
            ...(imageUrl ? { images: [imageUrl] } : {}),
          },
          unit_amount: authorizedPriceUsdCents,
        },
        quantity: parseInt(quantity, 10),
      }

      lineItems.push(stripeItem)
    }

    // ─── Construire metadata pentru webhook ────────────────────────────────────
    // Trimitem date structurate în metadata pentru ca webhook-ul să poată
    // plasa comanda la Spreadconnect fără un alt DB lookup.
    const orderItemsMetadata = JSON.stringify(
      cartLines.map((item) => ({
        productId: item.productId,
        size: item.size,
        productTitle: item.productTitle,
        quantity: item.quantity,
      }))
    )

    // ─── Creare sesiune Stripe Checkout ────────────────────────────────────────
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: lineItems,

      // Colectare adresă de livrare de la client
      shipping_address_collection: {
        allowed_countries: ['US', 'CA'],
      },

      // Opțiuni livrare afișate clientului (livrare gratuită conform politicii)
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: { amount: 0, currency: 'usd' },
            display_name: 'Free Standard Shipping',
            delivery_estimate: {
              minimum: { unit: 'business_day', value: 3 },
              maximum: { unit: 'business_day', value: 7 },
            },
          },
        },
      ],

      // Colectare email client
      customer_creation: 'always',

      // Metadata — trimise webhook-ului stripe-webhook.js
      metadata: {
        hvn_order_items: orderItemsMetadata,
        hvn_source: 'heavenlynova.com',
      },

      // URL-uri redirect post-checkout
      success_url: `${process.env.SITE_URL || 'https://heavenlynova.com'}/order-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.SITE_URL || 'https://heavenlynova.com'}/`,
    })

    // Returnăm URL-ul sesiunii Stripe
    return res.status(200).json({ sessionUrl: session.url })

  } catch (err) {
    console.error('[create-checkout-session] Error:', err)
    return res.status(500).json({
      error: err.message || 'Internal server error. Please try again.',
    })
  }
}
