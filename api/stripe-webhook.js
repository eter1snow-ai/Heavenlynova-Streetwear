/**
 * api/stripe-webhook.js
 *
 * Vercel Serverless Function — Stripe Webhook Handler
 *
 * Flux complet:
 *   Stripe checkout.session.completed
 *     → Verificare semnătură
 *     → Extrage date comandă din metadata
 *     → Rutare geografică: US → Shaka Wear | EU/RO → Stanley/Stella
 *     → POST /v1/shops/{shop_id}/orders.json (Printify API)
 *     → INSERT în Supabase orders (istoric comenzi)
 *
 * Variabile de mediu necesare (Vercel → Settings → Environment Variables):
 *   STRIPE_SECRET_KEY        — sk_live_...
 *   STRIPE_WEBHOOK_SECRET    — whsec_...
 *   PRINTIFY_API_TOKEN       — eyJ... (JWT token din Printify Dashboard)
 *   PRINTIFY_SHOP_ID         — ID-ul shop-ului din Printify Dashboard → My Stores
 *   SUPABASE_URL             — https://xxxxx.supabase.co
 *   SUPABASE_SERVICE_ROLE_KEY — eyJ... (service role key, NU anon)
 *   SITE_URL                 — https://heavenlynova.com
 */

import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder')

// ─── Supabase client (server-side exclusiv) ───────────────────────────────────
const supabase = createClient(
  process.env.SUPABASE_URL || 'https://placeholder.supabase.co',
  process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder_key'
)

// ─── Printify config ──────────────────────────────────────────────────────────
const PRINTIFY_API_BASE = 'https://api.printify.com/v1'
const PRINTIFY_API_TOKEN = process.env.PRINTIFY_API_TOKEN || 'placeholder_token'
const PRINTIFY_SHOP_ID = process.env.PRINTIFY_SHOP_ID || 'placeholder_shop_id'

// ─── Mapare produse: HVN productId → Printify IDs ────────────────────────────
//
// Structura:
//   productId (din drops.ts) → {
//     us: { product_id, variants: { SIZE: variant_id } },  ← Shaka Wear (US)
//     eu: { product_id, variants: { SIZE: variant_id } },  ← Stanley/Stella (EU/RO)
//   }
//
// De completat din Printify Dashboard:
//   1. Intră în Printify → My Products → (selectează produsul)
//   2. URL-ul conține product_id: printify.com/app/shop/.../products/{product_id}
//   3. Fiecare variantă (mărime) are un variant_id numeric în catalogul produsului
//
// TODO: Completează aceste ID-uri după ce creezi produsele în Printify

const PRINTIFY_PRODUCT_MAP = {
  'essentials-black': {
    us: {
      product_id: '6aae1606905b342a3c0d43c5',
      skus: {
        S:   '93498971001141875352',
        M:   '23940223616866547957',
        L:   '19487763733185097336',
        XL:  '30825576690655714896',
        XXL: '21708063790087979334',
      },
      variants: { XS: 0, S: 0, M: 0, L: 0, XL: 0, XXL: 0 },
    },
    eu: {
      product_id: '6aae1606905b342a3c0d43c5',
      skus: {
        S:   '93498971001141875352',
        M:   '23940223616866547957',
        L:   '19487763733185097336',
        XL:  '30825576690655714896',
        XXL: '21708063790087979334',
      },
      variants: { XS: 0, S: 0, M: 0, L: 0, XL: 0, XXL: 0 },
    },
  },

  'essentials-white': {
    us: {
      product_id: 'PRINTIFY_PRODUCT_ID_SHAKA_WHITE',
      variants: { XS: 0, S: 0, M: 0, L: 0, XL: 0, XXL: 0 },
    },
    eu: {
      product_id: 'PRINTIFY_PRODUCT_ID_SS_WHITE',
      variants: { XS: 0, S: 0, M: 0, L: 0, XL: 0, XXL: 0 },
    },
  },

  'core-hoodie-white': {
    us: {
      product_id: 'PRINTIFY_PRODUCT_ID_SHAKA_HOODIE_WHITE',
      variants: { XS: 0, S: 0, M: 0, L: 0, XL: 0, XXL: 0 },
    },
    eu: {
      product_id: 'PRINTIFY_PRODUCT_ID_SS_HOODIE_WHITE',
      variants: { XS: 0, S: 0, M: 0, L: 0, XL: 0, XXL: 0 },
    },
  },

  'soulfull-black': {
    us: {
      product_id: '6aae1606905b342a3c0d43c5',
      skus: {
        S:   '93498971001141875352',
        M:   '23940223616866547957',
        L:   '19487763733185097336',
        XL:  '30825576690655714896',
        XXL: '21708063790087979334',
      },
      variants: { XS: 0, S: 0, M: 0, L: 0, XL: 0, XXL: 0 },
    },
    eu: {
      product_id: '6aae1606905b342a3c0d43c5',
      skus: {
        S:   '93498971001141875352',
        M:   '23940223616866547957',
        L:   '19487763733185097336',
        XL:  '30825576690655714896',
        XXL: '21708063790087979334',
      },
      variants: { XS: 0, S: 0, M: 0, L: 0, XL: 0, XXL: 0 },
    },
  },

  'soulfull-hoodie': {
    us: {
      product_id: 'PRINTIFY_PRODUCT_ID_SHAKA_SOULFULL_HOODIE',
      variants: { XS: 0, S: 0, M: 0, L: 0, XL: 0, XXL: 0 },
    },
    eu: {
      product_id: 'PRINTIFY_PRODUCT_ID_SS_SOULFULL_HOODIE',
      variants: { XS: 0, S: 0, M: 0, L: 0, XL: 0, XXL: 0 },
    },
  },

  'the-origin': {
    us: {
      product_id: 'PRINTIFY_PRODUCT_ID_SHAKA_ORIGIN',
      variants: { XS: 0, S: 0, M: 0, L: 0, XL: 0, XXL: 0 },
    },
    eu: {
      product_id: 'PRINTIFY_PRODUCT_ID_SS_ORIGIN',
      variants: { XS: 0, S: 0, M: 0, L: 0, XL: 0, XXL: 0 },
    },
  },

  'broken-001': {
    us: {
      product_id: 'PRINTIFY_PRODUCT_ID_SHAKA_BROKEN',
      variants: { XS: 0, S: 0, M: 0, L: 0, XL: 0, XXL: 0 },
    },
    eu: {
      product_id: 'PRINTIFY_PRODUCT_ID_SS_BROKEN',
      variants: { XS: 0, S: 0, M: 0, L: 0, XL: 0, XXL: 0 },
    },
  },
}

// ─── Țări UE (non-US routing) ─────────────────────────────────────────────────
// Orice țară care NU e 'US' → Stanley/Stella (fulfillment Europa)
const EU_COUNTRIES = [
  'RO', 'DE', 'FR', 'IT', 'ES', 'NL', 'BE', 'AT', 'PL', 'CZ',
  'SK', 'HU', 'HR', 'BG', 'GR', 'PT', 'FI', 'SE', 'DK', 'IE',
  'LU', 'SI', 'EE', 'LV', 'LT', 'MT', 'CY', 'GB', 'CH', 'NO',
]

// ─── Helper: determină furnizorul pe baza țării ────────────────────────────────
function getRegion(country) {
  if (country === 'US' || country === 'CA') return 'us'
  return 'eu'
}

// ─── Helper: plasare comandă la Printify ──────────────────────────────────────
async function placePrintifyOrder(session, orderItems) {
  const shippingDetails = session.shipping_details
  const customerDetails = session.customer_details

  if (!shippingDetails || !shippingDetails.address) {
    throw new Error('[printify] Missing shipping_details in Stripe session')
  }

  const country = shippingDetails.address.country || 'US'
  const region = getRegion(country)

  // Parsare nume
  const fullName = shippingDetails.name || customerDetails?.name || 'Unknown Customer'
  const nameParts = fullName.trim().split(' ')
  const firstName = nameParts[0] || 'Unknown'
  const lastName = nameParts.slice(1).join(' ') || '.'

  // ─── Construire line_items ──────────────────────────────────────────────────
  const lineItems = []
  const skippedItems = []

  for (const item of orderItems) {
    const productMap = PRINTIFY_PRODUCT_MAP[item.productId]

    if (!productMap) {
      console.warn(`[printify] ⚠️  No product map for productId: ${item.productId}`)
      skippedItems.push({ ...item, reason: 'NO_PRODUCT_MAP' })
      continue
    }

    const regionMap = productMap[region]

    if (!regionMap) {
      console.warn(`[printify] ⚠️  No ${region} variant for productId: ${item.productId}`)
      skippedItems.push({ ...item, reason: `NO_REGION_MAP_${region.toUpperCase()}` })
      continue
    }

    const sku = regionMap.skus?.[item.size]
    const variantId = regionMap.variants?.[item.size]

    if (sku) {
      lineItems.push({
        sku: sku,
        quantity: parseInt(item.quantity, 10),
      })
    } else if (variantId && variantId !== 0) {
      lineItems.push({
        product_id: regionMap.product_id,
        variant_id: variantId,
        quantity: parseInt(item.quantity, 10),
      })
    } else {
      console.warn(
        `[printify] ⚠️  variant/sku not configured for ${item.productId} / ${item.size} / ${region}. ` +
        `Update PRINTIFY_PRODUCT_MAP in api/stripe-webhook.js`
      )
      skippedItems.push({ ...item, reason: 'VARIANT_OR_SKU_PLACEHOLDER', region })
      continue
    }
  }

  if (lineItems.length === 0) {
    const reason = skippedItems.map((s) => `${s.productId}/${s.size}: ${s.reason}`).join(', ')
    throw new Error(`[printify] All items skipped — no valid Printify mappings. Details: ${reason}`)
  }

  // ─── Payload Printify ───────────────────────────────────────────────────────
  const printifyPayload = {
    external_id: session.id,              // Stripe session ID — deduplicare
    line_items: lineItems,
    shipping_method: 1,                   // 1 = Standard
    send_shipping_notification: false,    // Nu trimitem email din Printify (Stripe a trimis deja)
    address_to: {
      first_name: firstName,
      last_name: lastName,
      email: customerDetails?.email || '',
      country: country,
      region: shippingDetails.address.state || '',
      address1: shippingDetails.address.line1 || '',
      address2: shippingDetails.address.line2 || '',
      city: shippingDetails.address.city || '',
      zip: shippingDetails.address.postal_code || '',
    },
  }

  console.log(
    `[printify] Placing order for ${country} (${region} → ` +
    `${region === 'us' ? 'Shaka Wear' : 'Stanley/Stella'}):`,
    JSON.stringify(printifyPayload, null, 2)
  )

  // ─── Request Printify API ──────────────────────────────────────────────────
  const response = await fetch(
    `${PRINTIFY_API_BASE}/shops/${PRINTIFY_SHOP_ID}/orders.json`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${PRINTIFY_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(printifyPayload),
    }
  )

  const responseText = await response.text()
  let responseData

  try {
    responseData = JSON.parse(responseText)
  } catch {
    responseData = { raw: responseText }
  }

  if (!response.ok) {
    throw new Error(
      `[printify] API error ${response.status}: ${JSON.stringify(responseData)}`
    )
  }

  console.log(`[printify] ✅ Order placed successfully. Printify Order ID: ${responseData.id}`)

  return {
    ...responseData,
    _skippedItems: skippedItems.length > 0 ? skippedItems : undefined,
    _region: region,
  }
}

// ─── Helper: salvare în Supabase ──────────────────────────────────────────────
async function saveOrderToSupabase(session, orderItems, printifyResult, fulfillmentError) {
  const shipping = session.shipping_details
  const customer = session.customer_details

  const record = {
    stripe_session_id: session.id,
    stripe_payment_intent: session.payment_intent || null,
    printify_order_id: printifyResult?.id?.toString() || null,
    customer_name: shipping?.name || customer?.name || null,
    customer_email: customer?.email || null,
    shipping_country: shipping?.address?.country || null,
    shipping_address: shipping?.address || null,
    items: orderItems,
    total_amount: session.amount_total || 0,          // en cenți
    currency: session.currency || 'usd',
    fulfillment_region: printifyResult?._region || null,
    status: fulfillmentError ? 'fulfillment_error' : 'fulfilled',
    printify_raw_response: printifyResult || null,
    fulfillment_error: fulfillmentError || null,
  }

  const { data, error } = await supabase
    .from('orders')
    .insert(record)
    .select('id')
    .single()

  if (error) {
    // Nu oprim procesul — plata e confirmată
    console.error('[supabase] ❌ Insert failed:', error.message)
    return null
  }

  console.log('[supabase] ✅ Order saved, id:', data?.id)
  return data?.id
}

// ─── Handler principal ────────────────────────────────────────────────────────
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // ─── Verificare semnătură Stripe ───────────────────────────────────────────
  const signature = req.headers['stripe-signature']
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || 'whsec_placeholder'

  let event

  try {
    const rawBody = req.rawBody || JSON.stringify(req.body)
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret)
  } catch (err) {
    console.error('[stripe-webhook] ❌ Signature verification failed:', err.message)
    return res.status(400).json({ error: `Webhook Error: ${err.message}` })
  }

  console.log(`[stripe-webhook] Event: ${event.type}`)

  // ─── checkout.session.completed ────────────────────────────────────────────
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object

    // Verificare plată confirmată
    if (session.payment_status !== 'paid') {
      console.log('[stripe-webhook] Session not paid, skipping:', session.id)
      return res.status(200).json({ received: true, action: 'skipped_unpaid' })
    }

    // Extragere date comandă din metadata Stripe
    let orderItems = []
    try {
      orderItems = JSON.parse(session.metadata?.hvn_order_items || '[]')
    } catch {
      console.error('[stripe-webhook] ❌ Could not parse hvn_order_items metadata')
    }

    if (orderItems.length === 0) {
      console.error('[stripe-webhook] ❌ No order items in metadata. Session:', session.id)
      await saveOrderToSupabase(session, [], null, 'MISSING_METADATA')
      return res.status(200).json({ received: true, action: 'error_no_items' })
    }

    // ─── Plasare comandă Printify ─────────────────────────────────────────────
    let printifyResult = null
    let fulfillmentError = null

    try {
      printifyResult = await placePrintifyOrder(session, orderItems)
    } catch (err) {
      console.error('[stripe-webhook] ❌ Printify order failed:', err.message)
      fulfillmentError = err.message

      // 🚨 ALERTĂ: Plată confirmată, fulfillment eșuat — necesită acțiune manuală
      console.error(
        `\n🚨 MANUAL FULFILLMENT REQUIRED\n` +
        `Session:  ${session.id}\n` +
        `Customer: ${session.customer_details?.email}\n` +
        `Country:  ${session.shipping_details?.address?.country}\n` +
        `Amount:   $${(session.amount_total / 100).toFixed(2)}\n` +
        `Error:    ${err.message}\n`
      )
    }

    // ─── Salvare în Supabase (indiferent de rezultatul Printify) ──────────────
    await saveOrderToSupabase(session, orderItems, printifyResult, fulfillmentError)

    return res.status(200).json({
      received: true,
      sessionId: session.id,
      fulfillment: fulfillmentError ? 'error' : 'success',
      printifyOrderId: printifyResult?.id || null,
    })
  }

  // Alte events Stripe — ignorăm
  return res.status(200).json({ received: true, action: 'ignored' })
}
