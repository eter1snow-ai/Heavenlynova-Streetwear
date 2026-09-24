import React, { createContext, useContext, useState, useEffect } from 'react'

export type Currency = 'USD' | 'EUR'

interface CurrencyContextType {
  currency: Currency
  setCurrency: (c: Currency) => void
  formatPrice: (amountNumeric: number) => string
  symbol: string
}

const EU_COUNTRIES = [
  'RO', 'DE', 'FR', 'IT', 'ES', 'NL', 'BE', 'AT', 'PL', 'CZ',
  'SK', 'HU', 'HR', 'BG', 'GR', 'PT', 'FI', 'SE', 'DK', 'IE',
  'LU', 'SI', 'EE', 'LV', 'LT', 'MT', 'CY', 'GB', 'CH', 'NO',
]

function detectInitialCurrency(): Currency {
  try {
    const saved = localStorage.getItem('hn_currency')
    if (saved === 'USD' || saved === 'EUR') {
      return saved as Currency
    }

    // Heuristică inițială 0-latency pe baza fusului orar și limbii browserului
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ''
    if (tz.startsWith('Europe/') || tz.startsWith('Atlantic/') || tz === 'UTC') {
      return 'EUR'
    }
    const lang = navigator.language || ''
    if (/(ro|de|fr|it|es|nl|pl|cs|sk|hu|bg|el|pt|sv|da|fi|nb|nn)/i.test(lang)) {
      return 'EUR'
    }
  } catch {
    /* noop */
  }
  return 'USD'
}

const CurrencyContext = createContext<CurrencyContextType>({
  currency: 'USD',
  setCurrency: () => {},
  formatPrice: (amount: number) => `$${amount.toFixed(2)}`,
  symbol: '$',
})

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>(detectInitialCurrency)

  const setCurrency = (c: Currency) => {
    setCurrencyState(c)
    try {
      localStorage.setItem('hn_currency', c)
    } catch {
      /* noop */
    }
  }

  // Detectare Vercel Geo-IP asincronă la prima vizită (dacă utilizatorul nu a ales manual)
  useEffect(() => {
    const saved = localStorage.getItem('hn_currency')
    if (saved === 'USD' || saved === 'EUR') return

    fetch('/api/geo')
      .then((r) => r.json())
      .then((data) => {
        if (data?.country && EU_COUNTRIES.includes(String(data.country).toUpperCase())) {
          setCurrencyState('EUR')
        } else {
          setCurrencyState('USD')
        }
      })
      .catch(() => {
        /* fallback pe euristica inițială */
      })
  }, [])

  const formatPrice = (amount: number): string => {
    const val = Number(amount).toFixed(2)
    if (currency === 'EUR') {
      return `${val} €`
    }
    return `$${val}`
  }

  const symbol = currency === 'EUR' ? '€' : '$'

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice, symbol }}>
      {children}
    </CurrencyContext.Provider>
  )
}

export function useCurrency() {
  return useContext(CurrencyContext)
}
