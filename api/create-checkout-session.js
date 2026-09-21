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
  'essentials-black':  4499,   // $44.99 în cenți
  'essentials-white':  4499,
  'core-hoodie-white': 8999,   // $89.99
  'soulfull-black':    5999,   // $59.99
  'soulfull-hoodie':   8999,
  'the-origin':        5999,
  'broken-001':        5999,
}

// ─── Livrare globală: 235 de țări acceptate de Stripe și Printify ────────────
const GLOBAL_SHIPPING_COUNTRIES = [
  'AC', 'AD', 'AE', 'AF', 'AG', 'AI', 'AL', 'AM', 'AO', 'AQ', 'AR', 'AT', 'AU', 'AW', 'AX', 'AZ',
  'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BL', 'BM', 'BN', 'BO', 'BQ', 'BR', 'BS',
  'BT', 'BV', 'BW', 'BY', 'BZ', 'CA', 'CD', 'CF', 'CG', 'CH', 'CI', 'CK', 'CL', 'CM', 'CN', 'CO',
  'CR', 'CV', 'CW', 'CY', 'CZ', 'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EC', 'EE', 'EG', 'EH', 'ER',
  'ES', 'ET', 'FI', 'FJ', 'FK', 'FO', 'FR', 'GA', 'GB', 'GD', 'GE', 'GF', 'GG', 'GH', 'GI', 'GL',
  'GM', 'GN', 'GP', 'GQ', 'GR', 'GS', 'GT', 'GU', 'GW', 'GY', 'HK', 'HN', 'HR', 'HT', 'HU', 'ID',
  'IE', 'IL', 'IM', 'IN', 'IO', 'IQ', 'IS', 'IT', 'JE', 'JM', 'JO', 'JP', 'KE', 'KG', 'KH', 'KI',
  'KM', 'KN', 'KR', 'KW', 'KY', 'KZ', 'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV',
  'LY', 'MA', 'MC', 'MD', 'ME', 'MF', 'MG', 'MK', 'ML', 'MM', 'MN', 'MO', 'MQ', 'MR', 'MS', 'MT',
  'MU', 'MV', 'MW', 'MX', 'MY', 'MZ', 'NA', 'NC', 'NE', 'NG', 'NI', 'NL', 'NO', 'NP', 'NR', 'NU',
  'NZ', 'OM', 'PA', 'PE', 'PF', 'PG', 'PH', 'PK', 'PL', 'PM', 'PN', 'PR', 'PS', 'PT', 'PY', 'QA',
  'RE', 'RO', 'RS', 'RW', 'SA', 'SB', 'SC', 'SE', 'SG', 'SH', 'SI', 'SJ', 'SK', 'SL', 'SM', 'SN',
  'SO', 'SR', 'SS', 'ST', 'SV', 'SX', 'SZ', 'TA', 'TC', 'TD', 'TF', 'TG', 'TH', 'TJ', 'TK', 'TL',
  'TM', 'TN', 'TO', 'TR', 'TT', 'TV', 'TW', 'TZ', 'UA', 'UG', 'US', 'UY', 'UZ', 'VA', 'VC', 'VE',
  'VG', 'VN', 'VU', 'WF', 'WS', 'XK', 'YE', 'YT', 'ZA', 'ZM', 'ZW'
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

    const { cartLines } = body || {}

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
          currency: 'usd',
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

      // Colectare adresă de livrare de la client (livrare globală)
      shipping_address_collection: {
        allowed_countries: GLOBAL_SHIPPING_COUNTRIES,
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

    return res.status(200).json({ sessionUrl: session.url })

  } catch (err) {
    console.error('[create-checkout-session] Error:', err)
    return res.status(500).json({
      error: err.message || 'Internal server error. Please try again.',
    })
  }
}
