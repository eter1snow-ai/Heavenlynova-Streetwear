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
