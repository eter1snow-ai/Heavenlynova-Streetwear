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
    id: 'broken-001',
    category: 'flagship' as Category,
    productType: 'tee' as ProductType,
    name: 'BROKEN // 001',
    tagline: 'THE ONES WHO ASCEND',
    description: '7.5oz (255 GSM) Heavyweight Cotton. Custom boxy fit. Rugged texture. Engineered for those who seek the light within the void.',
    price: '59.99€',
    images: [
      '/Assets/Images/Preview/Seraphim_Broken 001/Broken Original Black Back.webp',
      '/Assets/Images/Preview/Seraphim_Broken 001/V3B Original Black Front.webp',
      '/Assets/Images/Preview/Seraphim_Broken 001/Neck Label Black.webp',
    ],
  },
  {
    id: 'soulfull-black',
    category: 'individuals' as Category,
    productType: 'tee' as ProductType,
    name: 'SOULFULL — BLACK',
    tagline: 'From the first constellations',
    description: 'Part of the Heritage Line. Built for presence. 7.5oz (255 GSM) Heavyweight Cotton. Custom boxy fit. Rugged texture. A signal from the first constellations.',
    price: '59.99€',
    images: [
      '/Assets/Images/Preview/Soulfull/Soulfull Black/Back.webp',
      '/Assets/Images/Preview/Soulfull/Soulfull Black/Front.jpg',
      '/Assets/Images/Preview/Soulfull/Soulfull Black/Neck.webp',
    ],
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
      '/Assets/Images/Preview/Esential Hoodie/Hoodie On black Original Front.webp',
      '/Assets/Images/Preview/Esential Hoodie/Hoodie Black Original Back Black.webp',
      '/Assets/Images/Preview/Esential Hoodie/Detailed black hoodie close-up.webp',
    ],
  },
  {
    id: 'essentials-black',
    category: 'essentials' as Category,
    productType: 'tee' as ProductType,
    name: 'Essentials - Black',
    tagline: '255 GSM Heavyweight Cotton',
    description: '7.5oz (255 GSM) Heavyweight Cotton. Custom boxy fit. Rugged texture.',
    price: '44.99€',
    images: [
      '/Assets/Images/Preview/Esentials_Black/Original Esentials Black Front.webp',
      '/Assets/Images/Preview/Esentials_Black/Black closeup on Black.webp',
      '/Assets/Images/Preview/Esentials_Black/Neck Label Black.webp',
    ],
  },
  {
    id: 'essentials-white',
    category: 'essentials' as Category,
    productType: 'tee' as ProductType,
    name: 'Essentials - White',
    tagline: '255 GSM Heavyweight Cotton',
    description: '7.5oz (255 GSM) Heavyweight Cotton. Custom boxy fit. Rugged texture.',
    price: '44.99€',
    images: [
      '/Assets/Images/Preview/Esential_White/White ES Front.webp',
      '/Assets/Images/Preview/Esential_White/White closeup on black.webp',
      '/Assets/Images/Preview/Esential_White/Neck Label White.webp',
    ],
  },
  {
    id: 'the-origin',
    category: 'individuals' as Category,
    productType: 'tee' as ProductType,
    name: 'THE ORIGIN PIECE',
    tagline: 'Chapter 00 — The First Signal',
    description: 'Origin Tee - Chapter 00 is reserved for those who reach the end of the story. A quiet signal that you were here first. 7.5oz (255 GSM) Heavyweight Cotton. Custom boxy fit.',
    price: '59.99€',
    images: [
      '/Assets/Images/Preview/The Origin Piece/Original Esentials Black Front.webp',
      '/Assets/Images/Preview/The Origin Piece/The Origin 1.webp',
      '/Assets/Images/Preview/The Origin Piece/Neck Label Black.webp',
    ],
  },
]


export const featuredProducts: Product[] = products.filter((p) =>
  p.id === 'broken-001' || p.id === 'core-hoodie-white'
)

export const getProductById = (id: string): Product | undefined => products.find((p) => p.id === id)
