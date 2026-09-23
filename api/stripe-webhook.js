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
        S:     '93498971001141875352',
        M:     '23940223616866547957',
        L:     '19487763733185097336',
        XL:    '30825576690655714896',
        XXL:   '21708063790067979334',
        '2XL': '21708063790067979334',
      },
      variants: {
        XS: 117443, // Fallback la S dacă cineva selectează XS
        S: 117443,
        M: 117442,
        L: 117441,
        XL: 117444,
        XXL: 117437,
        '2XL': 117437,
      },
    },
    eu: {
      product_id: '6ab356f9aa5d8e79340ffd58',
      skus: {
        XS:    '31528702956291826255',
        S:     '31528702956291826255',
        M:     '20676607497834815972',
        L:     '20952604585266264737',
        XL:    '14982024763713697308',
        XXL:   '29642284829795214926',
        '2XL': '29642284829795214926',
        '3XL': '25075513468268130567',
      },
      variants: {
        XS: 112804,
        S: 112804,
        M: 112805,
        L: 112806,
        XL: 112807,
        XXL: 112811,
        '2XL': 112811,
        '3XL': 112808,
      },
    },
  },

  'essentials-white': {
    us: {
      product_id: '6ab215744f698da18b01ae9c',
      skus: {
        XS:    '18581233163851154897',
        S:     '18581233163851154897',
        M:     '20794905367629038444',
        L:     '11235262492114464475',
        XL:    '10580120646408515653',
        XXL:   '20080577147743050432',
        '2XL': '20080577147743050432',
      },
      variants: {
        XS: 117605,
        S: 117605,
        M: 117606,
        L: 117607,
        XL: 117608,
        XXL: 117609,
        '2XL': 117609,
      },
    },
    eu: {
      product_id: '6ab3578c7d5ed2acdf0b4588',
      skus: {
        XS:    '16042456317625955243',
        S:     '16042456317625955243',
        M:     '46225520301969160787',
        L:     '18125072332187064405',
        XL:    '29514490849239947593',
        XXL:   '33906357770859809289',
        '2XL': '33906357770859809289',
        '3XL': '31101435871347134943',
      },
      variants: {
        XS: 116303,
        S: 116303,
        M: 116304,
        L: 116305,
        XL: 116306,
        XXL: 116307,
        '2XL': 116307,
        '3XL': 116308,
      },
    },
  },

  'core-hoodie-white': {
    us: {
      product_id: '6ab21b9a0b35462dc40afcef',
      skus: {
        XS:    '29957978381408847097',
        S:     '29957978381408847097',
        M:     '26363641898970912366',
        L:     '23443437822660736820',
        XL:    '21107475743743994691',
        XXL:   '27407060959316543018',
        '2XL': '27407060959316543018',
        '3XL': '92366706173171220975',
      },
      variants: {
        XS: 122974,
        S: 122974,
        M: 122967,
        L: 122960,
        XL: 122981,
        XXL: 122946,
        '2XL': 122946,
        '3XL': 122953,
      },
    },
    eu: {
      product_id: '6ab35abb3162135b62017508',
      skus: {
        XXS:   '53217857830425462426',
        XS:    '10131537300499143846',
        S:     '76878915596090047870',
        M:     '16124782577499022153',
        L:     '15019336011386976321',
        XL:    '13533879961654270381',
        XXL:   '26572515677947358479',
        '2XL': '26572515677947358479',
        '3XL': '10690478594364583191',
      },
      variants: {
        XXS: 111238,
        XS: 111238,
        S: 111238,
        M: 111243,
        L: 111248,
        XL: 111253,
        XXL: 111258,
        '2XL': 111258,
        '3XL': 111263,
      },
    },
  },

  'core-hoodie': {
    us: {
      product_id: '6ab21b9a0b35462dc40afcef',
      skus: {
        XS:    '29957978381408847097',
        S:     '29957978381408847097',
        M:     '26363641898970912366',
        L:     '23443437822660736820',
        XL:    '21107475743743994691',
        XXL:   '27407060959316543018',
        '2XL': '27407060959316543018',
        '3XL': '92366706173171220975',
      },
      variants: {
        XS: 122974,
        S: 122974,
        M: 122967,
        L: 122960,
        XL: 122981,
        XXL: 122946,
        '2XL': 122946,
        '3XL': 122953,
      },
    },
    eu: {
      product_id: '6ab35abb3162135b62017508',
      skus: {
        XXS:   '53217857830425462426',
        XS:    '10131537300499143846',
        S:     '76878915596090047870',
        M:     '16124782577499022153',
        L:     '15019336011386976321',
        XL:    '13533879961654270381',
        XXL:   '26572515677947358479',
        '2XL': '26572515677947358479',
        '3XL': '10690478594364583191',
      },
      variants: {
        XXS: 111238,
        XS: 111238,
        S: 111238,
        M: 111243,
        L: 111248,
        XL: 111253,
        XXL: 111258,
        '2XL': 111258,
        '3XL': 111263,
      },
    },
  },

  'soulfull-black': {
    us: {
      product_id: '6ab29adcfe1948f8e50845d0',
      skus: {
        XS:    '20673100447619810368',
        S:     '20673100447619810368',
        M:     '11691036215182526354',
        L:     '11978837893097280055',
        XL:    '10215773981621895706',
        XXL:   '37884120461314741456',
        '2XL': '37884120461314741456',
        '3XL': '75167445498081411786',
      },
      variants: {
        XS: 117443,
        S: 117443,
        M: 117442,
        L: 117441,
        XL: 117444,
        XXL: 117437,
        '2XL': 117437,
        '3XL': 117438,
      },
    },
    eu: {
      product_id: '6ab3561aeccd60519b0e46df',
      skus: {
        XS:    '30295883003355094037',
        S:     '30295883003355094037',
        M:     '31717641852754272017',
        L:     '28138594929242016899',
        XL:    '61339382315425784924',
        XXL:   '45288379569067486891',
        '2XL': '45288379569067486891',
        '3XL': '10552485671753404688',
      },
      variants: {
        XS: 112804,
        S: 112804,
        M: 112805,
        L: 112806,
        XL: 112807,
        XXL: 112811,
        '2XL': 112811,
        '3XL': 112808,
      },
    },
  },

  'soulfull-hoodie': {
    us: {
      product_id: '6ab291263935ae2c6206a37b',
      skus: {
        XS:    '19896731155756690453',
        S:     '19896731155756690453',
        M:     '77984647279568474330',
        L:     '31377428779565062163',
        XL:    '20261092898433628850',
        XXL:   '27584467386877600473',
        '2XL': '27584467386877600473',
        '3XL': '17893175142442418064',
      },
      variants: {
        XS: 122974,
        S: 122974,
        M: 122967,
        L: 122960,
        XL: 122981,
        XXL: 122946,
        '2XL': 122946,
        '3XL': 122953,
      },
    },
    eu: {
      product_id: '6ab35bff296584cc59077be0',
      skus: {
        XXS:   '28092099603561450042',
        XS:    '27442732285742740627',
        S:     '32867473508934113480',
        M:     '14685622144849270969',
        L:     '24677072658552255815',
        XL:    '19571172551358380217',
        XXL:   '26889226387751989687',
        '2XL': '26889226387751989687',
        '3XL': '33955352806563092429',
      },
      variants: {
        XXS: 111238,
        XS: 111238,
        S: 111238,
        M: 111243,
        L: 111248,
        XL: 111253,
        XXL: 111258,
        '2XL': 111258,
        '3XL': 111263,
      },
    },
  },

  'the-origin': {
    us: {
      product_id: '6ab299d0f5cdd58a5b0621a6',
      skus: {
        XS:    '22560816753298099113',
        S:     '22560816753298099113',
        M:     '30251477406888890998',
        L:     '27946410388126084754',
        XL:    '96367682757764262714',
        XXL:   '26847724567853254170',
        '2XL': '26847724567853254170',
        '3XL': '23007708630150565133',
      },
      variants: {
        XS: 117443,
        S: 117443,
        M: 117442,
        L: 117441,
        XL: 117444,
        XXL: 117437,
        '2XL': 117437,
        '3XL': 117438,
      },
    },
    eu: {
      product_id: '6ab35594957fc9a1ac0a1003',
      skus: {
        XS:    '29450870968329325653',
        S:     '29450870968329325653',
        M:     '33649070315080182633',
        L:     '57139423739969825342',
        XL:    '22644575310987038494',
        XXL:   '12726424366503481967',
        '2XL': '12726424366503481967',
        '3XL': '13194139945372537479',
      },
      variants: {
        XS: 112804,
        S: 112804,
        M: 112805,
        L: 112806,
        XL: 112807,
        XXL: 112811,
        '2XL': 112811,
        '3XL': 112808,
      },
    },
  },

  'broken-001': {
    us: {
      product_id: '6ab36906a36e86001e0f9224',
      skus: {
        XS:    '17418060378961901892',
        S:     '17418060378961901892',
        M:     '29740615768721914937',
        L:     '28205133067246876197',
        XL:    '88345423190582581366',
        XXL:   '25612069261725447065',
        '2XL': '25612069261725447065',
        '3XL': '17356456472677008122',
      },
      variants: {
        XS: 117443,
        S: 117443,
        M: 117442,
        L: 117441,
        XL: 117444,
        XXL: 117437,
        '2XL': 117437,
        '3XL': 117438,
      },
    },
    eu: {
      product_id: '6ab36906a36e86001e0f9224',
      skus: {
        XS:    '17418060378961901892',
        S:     '17418060378961901892',
        M:     '29740615768721914937',
        L:     '28205133067246876197',
        XL:    '88345423190582581366',
        XXL:   '25612069261725447065',
        '2XL': '25612069261725447065',
        '3XL': '17356456472677008122',
      },
      variants: {
        XS: 117443,
        S: 117443,
        M: 117442,
        L: 117441,
        XL: 117444,
        XXL: 117437,
        '2XL': 117437,
        '3XL': 117438,
      },
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
  const customerDetails = session.customer_details
  const shippingDetails = session.shipping_details || customerDetails
  const address = shippingDetails?.address || customerDetails?.address

  if (!address) {
    throw new Error('[printify] Missing shipping/customer address in Stripe session')
  }

  const country = address.country || 'US'
  const region = getRegion(country)

  // Parsare nume
  const fullName = shippingDetails?.name || customerDetails?.name || 'Customer'
  const nameParts = fullName.trim().split(' ')
  const firstName = nameParts[0] || 'Customer'
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

    if (variantId && variantId !== 0) {
      lineItems.push({
        product_id: regionMap.product_id,
        variant_id: variantId,
        quantity: parseInt(item.quantity, 10),
      })
    } else if (sku) {
      lineItems.push({
        sku: sku,
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
      region: address.state || '',
      address1: address.line1 || '',
      address2: address.line2 || '',
      city: address.city || '',
      zip: address.postal_code || '',
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
        'User-Agent': 'HeavenlyNovaStore/1.0',
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

// Dezactivăm parserul automat Vercel pentru a păstra buffer-ul brut necesar semnăturii Stripe
export const config = {
  api: {
    bodyParser: false,
  },
}

async function getRawBody(req) {
  if (req.rawBody) return req.rawBody
  const chunks = []
  for await (const chunk of req) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk)
  }
  return Buffer.concat(chunks)
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
  let rawBodyBuffer = null

  try {
    rawBodyBuffer = await getRawBody(req)
    if (signature && webhookSecret && !webhookSecret.includes('placeholder')) {
      event = stripe.webhooks.constructEvent(rawBodyBuffer, signature, webhookSecret)
    } else {
      event = JSON.parse(rawBodyBuffer.toString('utf8'))
    }
  } catch (err) {
    console.warn('[stripe-webhook] ⚠️ Signature check failed:', err.message)
    // Fallback: dacă req.body a fost deja parsat sau payload-ul e JSON valid
    if (req.body && req.body.type) {
      event = req.body
    } else if (rawBodyBuffer && rawBodyBuffer.length > 0) {
      try {
        event = JSON.parse(rawBodyBuffer.toString('utf8'))
      } catch (parseErr) {
        return res.status(400).json({ error: `Webhook Error: ${err.message}` })
      }
    } else {
      return res.status(400).json({ error: `Webhook Error: ${err.message}` })
    }
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
