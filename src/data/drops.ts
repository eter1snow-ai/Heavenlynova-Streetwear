// Image paths kept simple and direct (No Casino Mode)

export type Category = 'flagship' | 'individuals' | 'essentials'

export type ProductType = 'tee' | 'hoodie'

export type Product = {
  id: string
  category: Category
  productType: ProductType
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
    productType: 'tee' as ProductType,
    name: 'SERAPHIM // 001',
    tagline: 'THE ONES WHO BURN',
    description:
      '7.5oz (255 GSM) Heavyweight Cotton. Custom boxy fit. Rugged texture. Engineered for those who seek the light within the void.',
    price: '59.99€',
    images: ['/Assets/Images/Preview/Seraphim-01/Seraph-001.png'],
  },
  {
    id: 'shadow-01',
    category: 'individuals' as Category,
    productType: 'tee' as ProductType,
    name: 'EMBRACE YOUR SHADOW',
    tagline: 'BORN FROM THE DARK',
    description:
      '7.5oz (255 GSM) Heavyweight Cotton. Custom boxy fit. Rugged texture. A statement of acceptance and power.',
    price: '59.99€',
    images: ['/Assets/Images/Preview/EmbraceYourShadow/Embrace Youre Shadow - Copy.png'],
  },
  {
    id: 'core-hoodie-white',
    category: 'essentials' as Category,
    productType: 'hoodie' as ProductType,
    name: 'Core Hoodie',
    tagline: '350 GSM Heavyweight Organic Cotton',
    description: '350 GSM Brushed Fleece. Premium Organic Cotton Blend. Structured silhouette.',
    price: '89.99€',
    images: [
      '/Assets/Images/Preview/Esential Hoodie/Hoodie Origin 1.webp',
      '/Assets/Images/Preview/Esential Hoodie/save.webp'
    ],
  },
  {
    id: 'essentials-black',
    category: 'essentials' as Category,
    productType: 'tee' as ProductType,
    name: 'Essentials - Black',
    tagline: '240 GSM fleece',
    description: '7.5oz (255 GSM) Heavyweight Cotton. Custom boxy fit. Rugged texture.',
    price: '44.99€',
    images: [
      '/Assets/Images/Preview/Esentials_Black/Insta Origin 1.webp',
      '/Assets/Images/Preview/Esentials_Black/Close up Black.webp',
      '/Assets/Images/Preview/Esentials_Black/Neck Origin1.webp',
    ],
  },
  {
    id: 'essentials-crem',
    category: 'essentials' as Category,
    productType: 'tee' as ProductType,
    name: 'Essentials - White',
    tagline: '240 GSM cotton',
    description: '7.5oz (255 GSM) Heavyweight Cotton. Custom boxy fit. Rugged texture.',
    price: '44.99€',
    images: [
      '/Assets/Images/Preview/Esential_White/White Front1.webp',
      '/Assets/Images/Preview/Esential_White/White Close up.webp',
      '/Assets/Images/Preview/Esential_White/Neck Design White 1 Esential.webp',
    ],
  },

  {
    id: 'esential-skye-blue',
    category: 'essentials' as Category,
    productType: 'tee' as ProductType,
    name: 'Essential Sky Blue',
    tagline: '240 GSM cotton',
    description: '7.5oz (255 GSM) Heavyweight Cotton. Custom boxy fit. Rugged texture.',
    price: '44.99€',
    images: [
      '/Assets/Images/Preview/Esential_Skye _Blue/SkyBlue 2 Front.webp',
      '/Assets/Images/Preview/Esential_Skye _Blue/Close up Sky blue.webp',
      '/Assets/Images/Preview/Esential_Skye _Blue/Skye Blue Neck Origin1.webp',
    ],
  },
]

export const featuredProducts: Product[] = products.filter((p) => 
  p.id === 'seraphim-01' || p.id === 'core-hoodie-white'
)

export const getProductById = (id: string): Product | undefined => products.find((p) => p.id === id)
