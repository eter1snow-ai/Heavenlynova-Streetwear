export type Product = {
  id: string
  name: string
  price: string
  description: string
  image?: string
}

export type Collection = {
  key: 'heritage' | 'shadows' | 'angels' | 'angel-dragon'
  title: string
  description: string
  heroImage?: string
  products: Product[]
}

export const featuredProducts: Product[] = [
  {
    id: 'fp-1',
    name: 'Nova Hoodie',
    price: '—',
    description: 'Heavyweight fleece. Clean hood profile.',
  },
  {
    id: 'fp-2',
    name: 'Echelon Cargo',
    price: '—',
    description: 'Structured cargo with sharp pocket lines.',
  },
  {
    id: 'fp-3',
    name: 'Gravity Tee',
    price: '—',
    description: 'Dense cotton. Relaxed but controlled drape.',
  },
  {
    id: 'fp-4',
    name: 'Halo Jacket',
    price: '—',
    description: 'Matte shell with subtle reflective detail.',
  },
]

export const collections: Collection[] = [
  {
    key: 'heritage',
    title: 'Heritage',
    description: 'Foundational cuts. Timeless black-on-black.',
    products: [
      {
        id: 'heritage-1',
        name: 'Heritage Crew',
        price: '—',
        description: 'Classic crew in dense brushed cotton.',
      },
      {
        id: 'heritage-2',
        name: 'Foundry Pant',
        price: '—',
        description: 'Straight leg, clean hardware, no branding.',
      },
      {
        id: 'heritage-3',
        name: 'Origin Hoodie',
        price: '—',
        description: 'Heavy hood, minimal drawcords.',
      },
    ],
  },
  {
    key: 'shadows',
    title: 'Shadows',
    description: 'Matte textures. Soft edges. Night city rhythm.',
    products: [
      {
        id: 'shadows-1',
        name: 'Shadow Shell',
        price: '—',
        description: 'Light technical shell with muted hardware.',
      },
      {
        id: 'shadows-2',
        name: 'Noir Track',
        price: '—',
        description: 'Tapered track pant with tonal striping.',
      },
      {
        id: 'shadows-3',
        name: 'Lowlight Tee',
        price: '—',
        description: 'Soft jersey, washed black finish.',
      },
    ],
  },
  {
    key: 'angels',
    title: 'Angels',
    description: 'Elevated minimalism. Serene presence.',
    products: [
      {
        id: 'angels-1',
        name: 'Halo Crew',
        price: '—',
        description: 'Soft grey crew with clean neckline.',
      },
      {
        id: 'angels-2',
        name: 'Cloud Pant',
        price: '—',
        description: 'Relaxed trouser, barely-there branding.',
      },
      {
        id: 'angels-3',
        name: 'Seraph Tee',
        price: '—',
        description: 'Off-black tee with subtle sheen.',
      },
    ],
  },
  {
    key: 'angel-dragon',
    title: 'Angel & Dragon',
    description: 'The duality capsule. Power with grace.',
    products: [
      {
        id: 'angel-dragon-1',
        name: 'Duality Bomber',
        price: '—',
        description: 'Boxy bomber, neon lining detail.',
      },
      {
        id: 'angel-dragon-2',
        name: 'Spine Cargo',
        price: '—',
        description: 'Paneled cargo with articulated knees.',
      },
      {
        id: 'angel-dragon-3',
        name: 'Signal Tee',
        price: '—',
        description: 'High-density print, minimal front.',
      },
    ],
  },
]
