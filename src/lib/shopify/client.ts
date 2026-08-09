/**
 * src/lib/shopify/client.ts
 *
 * Singurul punct de acces la Shopify Storefront API.
 * NICIO altă parte a codului nu face fetch() direct către Shopify.
 *
 * Usage:
 *   const data = await shopifyFetch<ShopifyProductsResponse>({ query: GET_PRODUCTS })
 */

const DOMAIN = import.meta.env.VITE_SHOPIFY_STORE_DOMAIN as string
const TOKEN = import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN as string
const API_VERSION = '2024-01'

export class ShopifyError extends Error {
  errors: { message: string; locations?: unknown; path?: unknown }[]

  constructor(errors: { message: string; locations?: unknown; path?: unknown }[]) {
    super(errors.map((e) => e.message).join('\n'))
    this.errors = errors
    this.name = 'ShopifyError'
  }
}

export async function shopifyFetch<T>({
  query,
  variables,
}: {
  query: string
  variables?: Record<string, unknown>
}): Promise<T> {
  if (!DOMAIN || !TOKEN) {
    throw new Error(
      '[shopifyFetch] Missing env vars: VITE_SHOPIFY_STORE_DOMAIN or VITE_SHOPIFY_STOREFRONT_TOKEN. ' +
      'Set VITE_USE_MOCK_DATA=true to use mock data without these.'
    )
  }

  const endpoint = `https://${DOMAIN}/api/${API_VERSION}/graphql.json`

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-Shopify-Storefront-Access-Token': TOKEN,
    },
    body: JSON.stringify({ query, variables: variables ?? {} }),
  })

  if (!res.ok) {
    throw new Error(`[shopifyFetch] HTTP ${res.status}: ${res.statusText} — endpoint: ${endpoint}`)
  }

  const json = await res.json()

  if (json.errors && json.errors.length > 0) {
    throw new ShopifyError(json.errors)
  }

  return json.data as T
}
