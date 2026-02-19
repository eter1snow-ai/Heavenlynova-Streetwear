// Image paths kept simple and direct (No Casino Mode)

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
    category: 'flagship' as Category,
    name: 'SERAPHIM // 001',
    tagline: 'THE ONES WHO BURN',
    description:
      'Archive Entry 01. High-vibration silhouette. Heavyweight 240 GSM organic cotton. Engineered for those who seek the light within the void.',
    price: '$89.90',
    images: ['/Assets/Images/Preview/Seraphim-01/Seraph-001.png'],
  },
  {
    id: 'shadow-01',
    category: 'individuals' as Category,
    name: 'EMBRACE YOUR SHADOW',
    tagline: 'BORN FROM THE DARK',
    description:
      '240 GSM Heavyweight standard. Boxy fit. High-density screen print. A statement of acceptance and power.',
    price: '$39.99',
    images: ['/Assets/Images/Preview/EmbraceYourShadow/Embrace Youre Shadow - Copy.png'],
  },
  {
    id: 'core-hoodie',
    category: 'essentials' as Category,
    name: 'Core Hoodie',
    tagline: '350 GSM Heavyweight Organic Cotton',
    description: 'Heavyweight organic cotton hoodie, 350 GSM, clean hood profile.',
    price: '$79.99',
    images: [
      '/Assets/Images/Preview/Esential Hoodie/HVN_Black_Hoodie_Original.webp',
      '/Assets/Images/Preview/Esential Hoodie/save.webp'
    ],
  },
  {
    id: 'core-hoodie-white',
    category: 'essentials' as Category,
    name: 'Core Hoodie',
    tagline: '350 GSM Heavyweight Organic Cotton',
    description: 'Heavyweight organic cotton hoodie, 350 GSM, clean hood profile.',
    price: '$79.99',
    images: [
      '/Assets/Images/Preview/Esential Hoodie/spod-3358987-1-12943-null-2.webp',
      '/Assets/Images/Preview/Esential Hoodie/save.webp'
    ],
  },
  {
    id: 'essentials-black',
    category: 'essentials' as Category,
    name: 'Essentials — Black',
    tagline: '240 GSM fleece',
    description: 'Heavyweight fleece, monochrome black. Minimal silhouette, everyday comfort.',
    price: '$39.99',
    images: [
      '/Assets/Images/Preview/Esentials_Black/Close up Black.webp',
      '/Assets/Images/Preview/Esentials_Black/Black Model.webp',
    ],
  },
  {
    id: 'essentials-crem',
    category: 'essentials' as Category,
    name: 'Essentials — White',
    tagline: '240 GSM cotton',
    description: 'Heavyweight cotton, clean white tone. Minimal silhouette.',
    price: '$39.99',
    images: [
      '/Assets/Images/Preview/Esential_White/White Close up.webp',
      '/Assets/Images/Preview/Esential_White/WHite Model.webp',
    ],
  },

  {
    id: 'esential-skye-blue',
    category: 'essentials' as Category,
    name: 'Essential Sky Blue',
    tagline: '240 GSM cotton',
    description: 'Skye Blue tee. Clean silhouette. Heavyweight comfort.',
    price: '$39.99',
    images: [
      '/Assets/Images/Preview/Esential_Skye _Blue/Close up Sky blue.webp',
      '/Assets/Images/Preview/Esential_Skye _Blue/Skye Blue model.webp',
    ],
  },
]

export const featuredProducts: Product[] = products.filter((p) => 
  p.id === 'seraphim-01' || p.id === 'core-hoodie'
)

export const getProductById = (id: string): Product | undefined => products.find((p) => p.id === id)
