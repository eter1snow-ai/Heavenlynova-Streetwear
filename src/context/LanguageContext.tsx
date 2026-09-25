import React, { createContext, useContext, useState, useEffect } from 'react'

export type Language = 'en' | 'ro' | 'es' | 'de' | 'fr' | 'it' | 'sv'

export interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string, fallback?: string) => string
  languages: { code: Language; label: string; flag: string }[]
}

export const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: 'GLOBAL' },
  { code: 'ro', label: 'Română', flag: 'RO' },
  { code: 'es', label: 'Español', flag: 'ES' },
  { code: 'de', label: 'Deutsch', flag: 'DE' },
  { code: 'fr', label: 'Français', flag: 'FR' },
  { code: 'it', label: 'Italiano', flag: 'IT' },
  { code: 'sv', label: 'Svenska', flag: 'NORDIC' },
]

export const TRANSLATIONS: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    'nav.drops': 'Drops',
    'nav.heritage': 'Heritage',
    'nav.essentials': 'Essentials',
    'nav.seraphim': 'Seraphim',
    'nav.collections': 'Collections',
    'nav.story': 'Story',
    'nav.join': 'Join',
    'nav.cart': 'Cart',
    
    // Product CTA & Details
    'product.claim': 'Claim Your Piece',
    'product.adding': 'Adding...',
    'product.select_size': 'Select a Size',
    'product.size_guide': 'Size Guide',
    'product.price': 'Price',
    'product.color': 'Color',
    'product.size': 'Size',
    'product.universe': 'Part of the HeavenlyNova universe.',
    'product.curated_sizing': 'True to size for oversized drape — size down for a closer fit.',
    'product.shipping_included': 'Worldwide shipping included',
    'size_guide.chest': 'Chest Width',
    'size_guide.length': 'Length',
    'size_guide.sleeve': 'Sleeve',
    'size_guide.note': 'All measurements are approximate and may vary slightly. Measured flat across the garment.',
    
    // Drops
    'drops.title': 'Drops',
    'drops.subtitle': 'Core capsules in rotation. Simple, heavyweight, built to last.',
    'drops.type': 'Type',
    'drops.collection': 'Collection',
    'drops.all': 'All',
    'drops.tees': 'Tees',
    'drops.hoodies': 'Hoodies',
    'drops.none': 'No products found.',
    
    // Cart
    'cart.title': 'Your Artifacts',
    'cart.empty': 'Your cart is empty',
    'cart.explore': 'Explore Collection',
    'cart.subtotal': 'Subtotal',
    'cart.shipping': 'Shipping',
    'cart.free_shipping': 'Free Standard Delivery',
    'cart.checkout': 'Proceed to Checkout',
    'cart.secure': 'Encrypted 256-Bit SSL Checkout',
    
    // Footer & Legal
    'footer.tagline': 'Between Light & Shadow',
    'footer.support': 'Support',
    'footer.brand': 'Brand',
    'footer.social': 'Social',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.shipping': 'Shipping Policy',
    'footer.refunds': 'Refund Policy',
    'footer.track': 'Track Order',
    'footer.contact': 'Contact Atelier',
    'footer.origin': '— THE ORIGIN —',
    
    // Hero & Home
    'hero.enter': 'Enter The Archive',
    'hero.explore': 'Explore Drops',
  },

  ro: {
    // Nav
    'nav.drops': 'Drops',
    'nav.heritage': 'Heritage',
    'nav.essentials': 'Essentials',
    'nav.seraphim': 'Seraphim',
    'nav.collections': 'Colecții',
    'nav.story': 'Poveste',
    'nav.join': 'Alătură-te',
    'nav.cart': 'Coș',
    
    // Product CTA & Details
    'product.claim': 'Adaugă în Coș',
    'product.adding': 'Se adaugă...',
    'product.select_size': 'Alege o Mărime',
    'product.size_guide': 'Ghid de Mărimi',
    'product.price': 'Preț',
    'product.color': 'Culoare',
    'product.size': 'Mărime',
    'product.universe': 'Parte din universul HeavenlyNova.',
    'product.curated_sizing': 'Mărime standard pentru croială oversized lejeră — alege o mărime mai mică pentru o potrivire clasică.',
    'product.shipping_included': 'Livrare internațională inclusă',
    'size_guide.chest': 'Lățime Piept',
    'size_guide.length': 'Lungime',
    'size_guide.sleeve': 'Mânecă',
    'size_guide.note': 'Toate măsurătorile sunt aproximative și pot varia ușor. Măsurat pe suprafață plană.',
    
    // Drops
    'drops.title': 'Drops',
    'drops.subtitle': 'Capsule de bază în rotație. Simple, grele, create să reziste.',
    'drops.type': 'Tip',
    'drops.collection': 'Colecție',
    'drops.all': 'Toate',
    'drops.tees': 'Tricouri',
    'drops.hoodies': 'Hanorace',
    'drops.none': 'Niciun produs găsit.',
    
    // Cart
    'cart.title': 'Piesele Tale',
    'cart.empty': 'Coșul tău este gol',
    'cart.explore': 'Explorează Colecția',
    'cart.subtotal': 'Subtotal',
    'cart.shipping': 'Transport',
    'cart.free_shipping': 'Livrare Gratuită Inclusă',
    'cart.checkout': 'Finalizează Comanda',
    'cart.secure': 'Checkout Securizat SSL 256-Bit',
    
    // Footer & Legal
    'footer.tagline': 'Între Lumină și Umbră',
    'footer.support': 'Suport',
    'footer.brand': 'Brand',
    'footer.social': 'Social',
    'footer.rights': 'Toate drepturile rezervate.',
    'footer.privacy': 'Confidențialitate',
    'footer.terms': 'Termeni și Condiții',
    'footer.shipping': 'Politică de Livrare',
    'footer.refunds': 'Politică de Retur',
    'footer.track': 'Urmărește Comanda',
    'footer.contact': 'Contact Atelier',
    'footer.origin': '— ORIGINEA —',
    
    // Hero & Home
    'hero.enter': 'Intră în Arhivă',
    'hero.explore': 'Vezi Piesele',
  },

  es: {
    // Nav
    'nav.drops': 'Drops',
    'nav.heritage': 'Heritage',
    'nav.essentials': 'Essentials',
    'nav.seraphim': 'Seraphim',
    'nav.collections': 'Colecciones',
    'nav.story': 'Historia',
    'nav.join': 'Unirse',
    'nav.cart': 'Carrito',
    
    // Product CTA & Details
    'product.claim': 'Añadir al Carrito',
    'product.adding': 'Añadiendo...',
    'product.select_size': 'Elige una Talla',
    'product.size_guide': 'Guía de Tallas',
    'product.price': 'Precio',
    'product.color': 'Color',
    'product.size': 'Talla',
    'product.universe': 'Parte del universo HeavenlyNova.',
    'product.curated_sizing': 'Corte boxy oversized — elige una talla menos si prefieres un ajuste clásico.',
    'product.shipping_included': 'Envío mundial incluido',
    'size_guide.chest': 'Ancho Pecho',
    'size_guide.length': 'Largo',
    'size_guide.sleeve': 'Manga',
    'size_guide.note': 'Todas las medidas son aproximadas y pueden variar ligeramente. Medido en plano.',
    
    // Drops
    'drops.title': 'Drops',
    'drops.subtitle': 'Cápsulas esenciales en rotación. Simples, pesadas, hechas para durar.',
    'drops.type': 'Tipo',
    'drops.collection': 'Colección',
    'drops.all': 'Todos',
    'drops.tees': 'Camisetas',
    'drops.hoodies': 'Sudaderas',
    'drops.none': 'No se encontraron productos.',
    
    // Cart
    'cart.title': 'Tus Piezas',
    'cart.empty': 'Tu carrito está vacío',
    'cart.explore': 'Explorar Colección',
    'cart.subtotal': 'Subtotal',
    'cart.shipping': 'Envío',
    'cart.free_shipping': 'Envío Estándar Gratuito',
    'cart.checkout': 'Finalizar Pedido',
    'cart.secure': 'Pago Seguro SSL 256-Bit',
    
    // Footer & Legal
    'footer.tagline': 'Entre Luz y Sombra',
    'footer.support': 'Soporte',
    'footer.brand': 'Marca',
    'footer.social': 'Social',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio',
    'footer.shipping': 'Política de Envíos',
    'footer.refunds': 'Política de Devoluciones',
    'footer.track': 'Seguir Pedido',
    'footer.contact': 'Contactar Atelier',
    'footer.origin': '— EL ORIGEN —',
    
    // Hero & Home
    'hero.enter': 'Entrar al Archivo',
    'hero.explore': 'Ver Todos los Drops',
  },

  de: {
    // Nav
    'nav.drops': 'Drops',
    'nav.heritage': 'Heritage',
    'nav.essentials': 'Essentials',
    'nav.seraphim': 'Seraphim',
    'nav.collections': 'Kollektionen',
    'nav.story': 'Geschichte',
    'nav.join': 'Beitreten',
    'nav.cart': 'Warenkorb',
    
    // Product CTA & Details
    'product.claim': 'In den Warenkorb',
    'product.adding': 'Wird hinzugefügt...',
    'product.select_size': 'Größe wählen',
    'product.size_guide': 'Größentabelle',
    'product.price': 'Preis',
    'product.color': 'Farbe',
    'product.size': 'Größe',
    'product.universe': 'Teil des HeavenlyNova Universums.',
    'product.curated_sizing': 'Fällt oversized aus — für reguläre Passform eine Größe kleiner wählen.',
    'product.shipping_included': 'Weltweiter Versand inklusive',
    'size_guide.chest': 'Brustweite',
    'size_guide.length': 'Länge',
    'size_guide.sleeve': 'Ärmellänge',
    'size_guide.note': 'Alle Maße sind Richtwerte und können leicht variieren. Flach liegend gemessen.',
    
    // Drops
    'drops.title': 'Drops',
    'drops.subtitle': 'Kapselkollektionen in Rotation. Schlicht, schwer, für die Ewigkeit gebaut.',
    'drops.type': 'Typ',
    'drops.collection': 'Kollektion',
    'drops.all': 'Alle',
    'drops.tees': 'T-Shirts',
    'drops.hoodies': 'Hoodies',
    'drops.none': 'Keine Produkte gefunden.',
    
    // Cart
    'cart.title': 'Deine Artefakte',
    'cart.empty': 'Dein Warenkorb ist leer',
    'cart.explore': 'Kollektion erkunden',
    'cart.subtotal': 'Zwischensumme',
    'cart.shipping': 'Versand',
    'cart.free_shipping': 'Kostenloser Standardversand',
    'cart.checkout': 'Zur Kasse',
    'cart.secure': 'Sichere 256-Bit SSL Kasse',
    
    // Footer & Legal
    'footer.tagline': 'Zwischen Licht und Schatten',
    'footer.support': 'Support',
    'footer.brand': 'Marke',
    'footer.social': 'Social',
    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.privacy': 'Datenschutz',
    'footer.terms': 'AGB',
    'footer.shipping': 'Versandrichtlinie',
    'footer.refunds': 'Rückgaberichtlinie',
    'footer.track': 'Bestellung verfolgen',
    'footer.contact': 'Atelier kontaktieren',
    'footer.origin': '— DER URSPRUNG —',
    
    // Hero & Home
    'hero.enter': 'Archiv betreten',
    'hero.explore': 'Drops ansehen',
  },

  fr: {
    // Nav
    'nav.drops': 'Drops',
    'nav.heritage': 'Heritage',
    'nav.essentials': 'Essentials',
    'nav.seraphim': 'Seraphim',
    'nav.collections': 'Collections',
    'nav.story': 'Histoire',
    'nav.join': 'Rejoindre',
    'nav.cart': 'Panier',
    
    // Product CTA & Details
    'product.claim': 'Ajouter au Panier',
    'product.adding': 'Ajout en cours...',
    'product.select_size': 'Choisir une Taille',
    'product.size_guide': 'Guide des Tailles',
    'product.price': 'Prix',
    'product.color': 'Couleur',
    'product.size': 'Taille',
    'product.universe': "Fait partie de l'univers HeavenlyNova.",
    'product.curated_sizing': 'Coupe oversize streetwear — prenez une taille en dessous pour une coupe classique.',
    'product.shipping_included': 'Livraison mondiale incluse',
    'size_guide.chest': 'Largeur Poitrine',
    'size_guide.length': 'Longueur',
    'size_guide.sleeve': 'Manche',
    'size_guide.note': 'Toutes les mesures sont approximatives et peuvent varier légèrement. Mesuré à plat.',
    
    // Drops
    'drops.title': 'Drops',
    'drops.subtitle': 'Capsules essentielles en rotation. Épurées, denses, taillées pour durer.',
    'drops.type': 'Type',
    'drops.collection': 'Collection',
    'drops.all': 'Tous',
    'drops.tees': 'T-shirts',
    'drops.hoodies': 'Sweats',
    'drops.none': 'Aucun produit trouvé.',
    
    // Cart
    'cart.title': 'Vos Pièces',
    'cart.empty': 'Votre panier est vide',
    'cart.explore': 'Découvrir la Collection',
    'cart.subtotal': 'Sous-total',
    'cart.shipping': 'Livraison',
    'cart.free_shipping': 'Livraison Gratuite Incluse',
    'cart.checkout': 'Passer la Commande',
    'cart.secure': 'Paiement Sécurisé SSL 256-Bit',
    
    // Footer & Legal
    'footer.tagline': 'Entre Ombre et Lumière',
    'footer.support': 'Support',
    'footer.brand': 'Marque',
    'footer.social': 'Réseaux',
    'footer.rights': 'Tous droits réservés.',
    'footer.privacy': 'Confidentialité',
    'footer.terms': 'Conditions Générales',
    'footer.shipping': 'Livraison',
    'footer.refunds': 'Retours',
    'footer.track': 'Suivre ma Commande',
    'footer.contact': 'Contacter l’Atelier',
    'footer.origin': '— L’ORIGINE —',
    
    // Hero & Home
    'hero.enter': 'Entrer dans l’Archive',
    'hero.explore': 'Découvrir les Drops',
  },

  it: {
    // Nav
    'nav.drops': 'Drops',
    'nav.heritage': 'Heritage',
    'nav.essentials': 'Essentials',
    'nav.seraphim': 'Seraphim',
    'nav.collections': 'Collezioni',
    'nav.story': 'Storia',
    'nav.join': 'Unisciti',
    'nav.cart': 'Carrello',
    
    // Product CTA & Details
    'product.claim': 'Aggiungi al Carrello',
    'product.adding': 'Aggiunta...',
    'product.select_size': 'Seleziona Taglia',
    'product.size_guide': 'Guida alle Taglie',
    'product.price': 'Prezzo',
    'product.color': 'Colore',
    'product.size': 'Taglia',
    'product.universe': "Parte dell'universo HeavenlyNova.",
    'product.curated_sizing': 'Vestibilità oversize — scegli una taglia in meno per un fit classico.',
    'product.shipping_included': 'Spedizione mondiale inclusa',
    'size_guide.chest': 'Larghezza Torace',
    'size_guide.length': 'Lunghezza',
    'size_guide.sleeve': 'Manica',
    'size_guide.note': 'Tutte le misure sono approssimative e possono variare leggermente. Misurato in piano.',
    
    // Drops
    'drops.title': 'Drops',
    'drops.subtitle': 'Capsule essenziali a rotazione. Semplici, pesanti, create per durare.',
    'drops.type': 'Tipo',
    'drops.collection': 'Colezione',
    'drops.all': 'Tutti',
    'drops.tees': 'Magliette',
    'drops.hoodies': 'Felpe',
    'drops.none': 'Nessun prodotto trovato.',
    
    // Cart
    'cart.title': 'I Tuoi Capi',
    'cart.empty': 'Il tuo carrello è vuoto',
    'cart.explore': 'Esplora la Collezione',
    'cart.subtotal': 'Subtotale',
    'cart.shipping': 'Spedizione',
    'cart.free_shipping': 'Spedizione Gratuita Inclusa',
    'cart.checkout': 'Procedi all’Acquisto',
    'cart.secure': 'Pagamento Protetto SSL 256-Bit',
    
    // Footer & Legal
    'footer.tagline': 'Tra Luce e Ombra',
    'footer.support': 'Supporto',
    'footer.brand': 'Brand',
    'footer.social': 'Social',
    'footer.rights': 'Tutti i diritti riservati.',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Termini di Servizio',
    'footer.shipping': 'Spedizioni',
    'footer.refunds': 'Resi',
    'footer.track': 'Traccia Ordine',
    'footer.contact': 'Contatta Atelier',
    'footer.origin': '— L’ORIGINE —',
    
    // Hero & Home
    'hero.enter': 'Accedi all’Archivio',
    'hero.explore': 'Scopri i Drops',
  },

  sv: {
    // Nav
    'nav.drops': 'Drops',
    'nav.heritage': 'Heritage',
    'nav.essentials': 'Essentials',
    'nav.seraphim': 'Seraphim',
    'nav.collections': 'Kollektioner',
    'nav.story': 'Historia',
    'nav.join': 'Gå med',
    'nav.cart': 'Varukorg',
    
    // Product CTA & Details
    'product.claim': 'Lägg i Varukorg',
    'product.adding': 'Lägger till...',
    'product.select_size': 'Välj Storlek',
    'product.size_guide': 'Storleksguide',
    'product.price': 'Pris',
    'product.color': 'Färg',
    'product.size': 'Storlek',
    'product.universe': 'En del av HeavenlyNova universumet.',
    'product.curated_sizing': 'Oversized passform — välj en storlek mindre för klassisk passform.',
    'product.shipping_included': 'Världsomspännande frakt ingår',
    'size_guide.chest': 'Bröstbredd',
    'size_guide.length': 'Längd',
    'size_guide.sleeve': 'Ärmlängd',
    'size_guide.note': 'Alla mått är ungefärliga och kan variera något. Mätt plant.',
    
    // Drops
    'drops.title': 'Drops',
    'drops.subtitle': 'Kärnkapslar i rotation. Rena, tunga, skapade för att bestå.',
    'drops.type': 'Typ',
    'drops.collection': 'Kollektion',
    'drops.all': 'Alla',
    'drops.tees': 'T-shirts',
    'drops.hoodies': 'Hoodies',
    'drops.none': 'Inga produkter hittades.',
    
    // Cart
    'cart.title': 'Dina Plagg',
    'cart.empty': 'Din varukorg är tom',
    'cart.explore': 'Utforska Kollektionen',
    'cart.subtotal': 'Delsumma',
    'cart.shipping': 'Frakt',
    'cart.free_shipping': 'Fri Standardfrakt Ingår',
    'cart.checkout': 'Gå till Kassan',
    'cart.secure': 'Säker 256-Bit SSL Betalning',
    
    // Footer & Legal
    'footer.tagline': 'Mellan Ljus och Skugga',
    'footer.support': 'Support',
    'footer.brand': 'Varumärke',
    'footer.social': 'Socialt',
    'footer.rights': 'Alla rättigheter förbehållna.',
    'footer.privacy': 'Integritetspolicy',
    'footer.terms': 'Användarvillkor',
    'footer.shipping': 'Fraktpolicy',
    'footer.refunds': 'Återbetalningspolicy',
    'footer.track': 'Spåra Beställning',
    'footer.contact': 'Kontakta Ateljén',
    'footer.origin': '— URSPRUNGET —',
    
    // Hero & Home
    'hero.enter': 'Gå till Arkivet',
    'hero.explore': 'Se Alla Drops',
  },
}

function detectInitialLanguage(): Language {
  try {
    const saved = localStorage.getItem('hn_lang') as Language
    if (saved && ['en', 'ro', 'es', 'de', 'fr', 'it', 'sv'].includes(saved)) {
      return saved
    }

    // Detect din browser locale (navigator.language)
    const browserLang = (navigator.language || '').toLowerCase()
    if (browserLang.startsWith('ro')) return 'ro'
    if (browserLang.startsWith('es')) return 'es'
    if (browserLang.startsWith('de')) return 'de'
    if (browserLang.startsWith('fr')) return 'fr'
    if (browserLang.startsWith('it')) return 'it'
    if (browserLang.startsWith('sv') || browserLang.startsWith('no') || browserLang.startsWith('da') || browserLang.startsWith('fi')) {
      return 'sv'
    }
  } catch {
    /* fallback la en */
  }
  return 'en'
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string, fallback?: string) => fallback || key,
  languages: LANGUAGES,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(detectInitialLanguage)

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    try {
      localStorage.setItem('hn_lang', lang)
      document.documentElement.lang = lang
    } catch {
      /* noop */
    }
  }

  // Detectare asincronă bazată pe Geo-IP la prima vizită (dacă utilizatorul nu a ales manual)
  useEffect(() => {
    const saved = localStorage.getItem('hn_lang')
    if (saved) return

    fetch('/api/geo')
      .then((r) => r.json())
      .then((data) => {
        const country = String(data?.country || '').toUpperCase()
        if (country === 'RO') setLanguage('ro')
        else if (['ES', 'MX', 'AR', 'CO', 'CL'].includes(country)) setLanguage('es')
        else if (['DE', 'AT', 'CH'].includes(country)) setLanguage('de')
        else if (['FR', 'BE', 'MC'].includes(country)) setLanguage('fr')
        else if (country === 'IT') setLanguage('it')
        else if (['SE', 'NO', 'DK', 'FI'].includes(country)) setLanguage('sv')
      })
      .catch(() => {
        /* păstrăm euristica navigator.language */
      })
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const t = (key: string, fallback?: string): string => {
    return TRANSLATIONS[language]?.[key] || TRANSLATIONS['en']?.[key] || fallback || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, languages: LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
