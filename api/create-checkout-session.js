/**
 * api/create-checkout-session.js
 *
 * Vercel Serverless Function — Stripe Checkout Session (ES Module)
 *
 * Primeşte datele coşului de la frontend şi creează o sesiune de checkout Stripe.
 * Returnează sessionUrl către care frontend-ul redirectează utilizatorul.
 */

import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder')

// ─── Catalogul de prețuri autorizate (server-side truth) ─────────────────────
const AUTHORIZED_PRICES = {
  'essentials-black':     4499,   // $44.99 în cenți
  'essentials-white':     4499,   // $44.99
  'essentials-skye-blue': 4499,   // $44.99
  'core-hoodie-white':    7999,   // $79.99 (Core Hoodie — Black US)
  'core-hoodie':          7999,   // $79.99
  'soulfull-black':       5999,   // $59.99
  'soulfull-white':       5999,   // $59.99
  'soulfull-skye-blue':   5999,   // $59.99
  'soulfull-hoodie':      9499,   // $94.99
  'the-origin':           5999,   // $59.99
  'broken-001':           5999,   // $59.99
  'broken-hoodie':        9499,   // $94.99
  'embrace-your-shadow':  5999,   // $59.99
}

// ─── Piețe Tier 1 (US, CA, UK + Europa majoră & România) ──────────────────────
// Asigură livrare rapidă (3–7 zile), producție locală și marjă protejată cu Free Shipping
const TIER1_SHIPPING_COUNTRIES = [
  'US', 'CA',                         // America de Nord (Fulfillment SUA)
  'GB',                               // Marea Britanie
  'RO',                               // România
  'DE', 'FR', 'IT', 'ES', 'NL', 'BE', // Europa de Vest
  'AT', 'CH', 'IE', 'LU', 'PT',       // Europa Centrală / Vest
  'SE', 'DK', 'NO', 'FI',             // Scandinavia
  'PL', 'CZ', 'GR',                   // Europa Centrală / Sud
]

export default async function handler(req, res) {
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
    let body = req.body
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body)
      } catch {
        body = {}
      }
    }

    const { cartLines, currency } = body || {}
    const requestedCurrency = (typeof currency === 'string' && currency.toLowerCase() === 'eur') ? 'eur' : 'usd'

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
        return res.status(400).json({ error: 'Invalid cart item: missing required fields.' })
      }

      // Validare preț autorizat (anti-tamper)
      const authorizedPriceUsdCents = AUTHORIZED_PRICES[productId]
      if (!authorizedPriceUsdCents) {
        return res.status(400).json({ error: `Unknown product: ${productId}` })
      }

      // Stripe necesită URL-uri absolute valide pentru imagini
      let validImageUrl = null
      if (imageUrl && typeof imageUrl === 'string') {
        const fullUrl = imageUrl.startsWith('http')
          ? imageUrl
          : `https://heavenlynova.com${imageUrl.startsWith('/') ? '' : '/'}${imageUrl}`
        try {
          validImageUrl = encodeURI(fullUrl)
        } catch {
          validImageUrl = null
        }
      }

      // Construim item-ul Stripe
      const stripeItem = {
        price_data: {
          currency: requestedCurrency,
          product_data: {
            name: `${productTitle} — ${size}`,
            description: `Size: ${size}`,
            ...(validImageUrl ? { images: [validImageUrl] } : {}),
          },
          unit_amount: authorizedPriceUsdCents,
        },
        quantity: parseInt(quantity, 10),
      }

      lineItems.push(stripeItem)
    }

    // ─── Construire metadata pentru webhook ────────────────────────────────────
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

      // Colectare adresă de livrare de la client (Piețe Tier 1)
      shipping_address_collection: {
        allowed_countries: TIER1_SHIPPING_COUNTRIES,
      },

      // Opțiuni livrare afișate clientului (livrare gratuită conform politicii)
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: { amount: 0, currency: requestedCurrency },
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

    return res.status(200).json({ sessionUrl: session.url })

  } catch (err) {
    console.error('[create-checkout-session] Error:', err)
    return res.status(500).json({
      error: err.message || 'Internal server error. Please try again.',
    })
  }
}
