// Image paths kept simple and direct (No Casino Mode)

export type Category = 'flagship' | 'individuals' | 'essentials' | 'origin'

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
    tagline: 'Not everything needs to be loud to be felt. Soulfull is a quiet statement — for those who carry more than they show.',
    description: '· EMOTIONAL IDENTITY PIECE\n· PART OF THE HERITAGE LINE\n· DESIGNED FOR INTROSPECTION, NOT ATTENTION\n\nBuilt for those who don\'t need to explain what they feel.\nPart of the HeavenlyNova universe.\n\nSoulfull is the original piece that started it all — the foundation of the HVN universe, calm in presence, strong in identity.\n\nIt exists between what is seen and what is felt, holding attention rather than seeking it.\n\nHeavyweight oversized boxy fit at 7.5oz cotton, drop shoulder construction, premium long-lasting print.\n\nPart of the Heritage Collection — the origin layer of HeavenlyNova, where everything begins.',
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
    description: 'Minimal. Structured. Essential. A core layer built for everyday wear, clean in design and strong in presence.\n\n350 GSM heavyweight organic cotton, relaxed oversized fit with drop shoulder, adjustable hood, and kangaroo pocket.\n\nA quiet staple that carries the full weight of the story behind it.',
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
    name: 'Essential T-Shirt — Black',
    tagline: 'The Foundation of Shadow. A pure, structural staple forged in stillness and depth.',
    description: 'Boxy oversized fit with dropped shoulders and relaxed sleeves.\n\nCut from 100% heavyweight cotton at 7.5 oz — garment-washed for a soft touch and a natural, deep black fall.\n\nMinimal HeavenlyNova insignia on the left chest, heavy ribbed collar with double-needle stitching throughout.\n\nTrue to size for the oversized drape — size down for a closer fit.\n\nMachine wash cold, inside out. Do not tumble dry. Hang dry in shade.',
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
    name: 'Essential T-Shirt — White',
    tagline: 'The Foundation of Light. A pure, structural staple built for form, drape, and enduring presence.',
    description: 'Boxy oversized fit with dropped shoulders and relaxed sleeves, cut from 100% heavyweight cotton at 7.5oz — garment-washed for a soft touch and a natural fall.\n\nMinimal HeavenlyNova insignia on the left chest, heavy ribbed collar with double-needle stitching throughout.\n\nTrue to size for the oversized drape — size down for a closer fit. Machine wash cold, inside out. Do not tumble dry. Hang dry in shade.',
    price: '44.99€',
    images: [
      '/Assets/Images/Preview/Esential_White/White ES Front.webp',
      '/Assets/Images/Preview/Esential_White/White closeup on black.webp',
      '/Assets/Images/Preview/Esential_White/Neck Label White.webp',
    ],
  },
  {
    id: 'the-origin',
    category: 'origin' as Category,
    productType: 'tee' as ProductType,
    name: 'THE ORIGIN PIECE',
    tagline: 'Chapter 000 — The First Signal',
    description: 'Chapter /000 is reserved for those who reach the end. A quiet signal that you were here first.\n\nHeavyweight 7.5oz cotton, custom boxy fit — the origin point of the HeavenlyNova universe.',
    price: '59.99€',
    images: [
      '/Assets/Images/Preview/The Origin Piece/The Origin Piece Back.webp',
      '/Assets/Images/Preview/The Origin Piece/Original Esentials Black Front.webp',
      '/Assets/Images/Preview/The Origin Piece/Neck Label Black.webp',
    ],
  },
  {
    id: 'soulfull-hoodie',
    category: 'individuals' as Category,
    productType: 'hoodie' as ProductType,
    name: 'SOULFULL HOODIE',
    tagline: 'From the first constellations',
    description: 'Minimal. Structured. Essential. A core layer built for everyday wear, clean in design and strong in presence.\n\n350 GSM heavyweight organic cotton, relaxed oversized fit with drop shoulder, adjustable hood, and kangaroo pocket.\n\nA quiet staple that carries the full weight of the story behind it.',
    price: '89.99€',
    images: [
      '/Assets/Images/Preview/Design Hoodies/Soulfull Hoodie/Soulfull Hoodie Back.webp',
      '/Assets/Images/Preview/Design Hoodies/Soulfull Hoodie/Hoodie On black Original Front.webp',
      '/Assets/Images/Preview/Design Hoodies/Soulfull Hoodie/Detailed black hoodie close-up.webp',
    ],
  },
]


export const featuredProducts: Product[] = products.filter((p) =>
  p.id === 'broken-001' || p.id === 'core-hoodie-white'
)

export const getProductById = (id: string): Product | undefined => products.find((p) => p.id === id)
