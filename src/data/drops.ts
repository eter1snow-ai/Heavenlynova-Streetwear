export type Category = 'flagship' | 'individuals' | 'essentials'

export type Product = {
  id: string
  category: Category
  name: string
  tagline: string
  description: string
  price: string
  images: string[]
}

export const products: Product[] = [
  {
    id: 'seraphim-01',
    category: 'flagship',
    name: 'SERAPHIM // 001',
    tagline: 'THE ONES WHO BURN',
    description:
      'Archive Entry 01. High-vibration silhouette. Heavyweight 240 GSM organic cotton. Engineered for those who seek the light within the void.',
    price: '€89.90',
    images: ['/Assets/Images/Preview/Seraphim-01/ChatGPT Image Dec 5, 2025, 04_21_37 PM.png'],
  },
  {
    id: 'shadow-01',
    category: 'individuals',
    name: 'EMBRACE YOUR SHADOW',
    tagline: 'BORN FROM THE DARK',
    description:
      '240 GSM Heavyweight standard. Boxy fit. High-density screen print. A statement of acceptance and power.',
    price: '€39.99',
    images: ['/Assets/Images/Preview/EmbraceYourShadow/Embrace Youre Shadow - Copy.png'],
  },
  {
    id: 'core-hoodie',
    category: 'essentials',
    name: 'Core Hoodie',
    tagline: '240 GSM fleece',
    description: 'Heavyweight fleece hoodie, 240 GSM, clean hood profile.',
    price: '€59.90',
    images: [],
  },
]

export const featuredProducts: Product[] = [
  products.find((p) => p.id === 'seraphim-01')!,
  products.find((p) => p.id === 'core-hoodie')!,
]

export const getProductById = (id: string) => products.find((p) => p.id === id)
