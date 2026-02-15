import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Product } from '../../data/drops'

type Props = {
  product: Product
  showPrice?: boolean
  className?: string
}

export default function ProductCard({ product, showPrice = false, className }: Props) {
  const front = product.images?.[0]
  const alt = product.images?.[1]
  return (
    <Link to={`/product/${product.id}`} className={className ? className : 'w-full max-w-[400px]'}>
      <motion.article
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="border border-neutral-800 bg-transparent"
      >
        <div className="relative aspect-[3/4] border-b border-neutral-800 overflow-hidden bg-transparent">
          {front && alt ? (
            <motion.div initial="rest" animate="rest" whileHover="hover" transition={{ duration: 0.3, ease: 'easeOut' }}>
              <motion.img
                src={front}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover object-top"
                style={{ backgroundColor: 'transparent', mixBlendMode: 'normal' }}
                variants={{ rest: { opacity: 1 }, hover: { opacity: 0 } }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                loading="lazy"
                onError={(e) => (e.currentTarget.src = '/Assets/Images/placeholder.svg')}
              />
              <motion.img
                src={alt}
                alt={`${product.name} alt`}
                className="absolute inset-0 w-full h-full object-cover object-top"
                style={{ backgroundColor: 'transparent', mixBlendMode: 'normal' }}
                variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                loading="lazy"
                onError={(e) => (e.currentTarget.src = '/Assets/Images/placeholder.svg')}
              />
            </motion.div>
          ) : front ? (
            <img
              src={front}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover object-top"
              style={{ backgroundColor: 'transparent', mixBlendMode: 'normal' }}
              loading="lazy"
              onError={(e) => (e.currentTarget.src = '/Assets/Images/placeholder.svg')}
            />
          ) : (
            <div className="absolute inset-0 w-full h-full bg-transparent" />
          )}
        </div>
        <div className="p-5">
          <h3 className="text-sm font-medium leading-snug truncate">{product.name}</h3>
          {showPrice ? (
            <>
              <p className="text-sm font-semibold tracking-wide text-white mt-2">{product.price}</p>
              <p className="text-xs opacity-70 mt-1">Worldwide shipping included</p>
            </>
          ) : (
            <p className="mt-2 text-xs text-neutral-400 leading-relaxed">{product.tagline}</p>
          )}
        </div>
      </motion.article>
    </Link>
  )
}
