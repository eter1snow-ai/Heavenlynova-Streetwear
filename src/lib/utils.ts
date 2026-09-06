export function getOptimizedImageUrl(url: string, width: number): string {
  if (!url) return ''
  try {
    const urlObj = new URL(url)
    urlObj.searchParams.set('width', width.toString())
    return urlObj.toString()
  } catch (e) {
    // Fallback if URL is invalid or relative
    if (url.includes('?')) {
      if (url.includes('width=')) {
        return url.replace(/width=\d+/, `width=${width}`)
      }
      return `${url}&width=${width}`
    }
    return `${url}?width=${width}`
  }
}

export function formatMoney(amount: string | number, currencyCode: string = 'USD'): string {
  if (typeof amount === 'string') {
    const cleaned = amount.replace(/[^0-9.]/g, '')
    const num = parseFloat(cleaned)
    if (isNaN(num)) return '$0.00'
    const val = num.toFixed(2)
    if (currencyCode === 'USD') return `$${val}`
    if (currencyCode === 'CAD') return `CAD $${val}`
    if (currencyCode === 'EUR') return `${val}€`
    return `$${val}`
  }
  const val = Number(amount).toFixed(2)
  if (currencyCode === 'USD') return `$${val}`
  if (currencyCode === 'CAD') return `CAD $${val}`
  if (currencyCode === 'EUR') return `${val}€`
  return `$${val}`
}

