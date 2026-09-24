/**
 * api/geo.js
 *
 * Vercel Serverless Function — Geo-IP Country Detection
 * Detectează țara vizitatorului prin header-ul nativ Vercel 'x-vercel-ip-country'
 */

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=3600')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  const country = req.headers['x-vercel-ip-country'] || 'US'
  return res.status(200).json({ country })
}
