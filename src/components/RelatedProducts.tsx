// components/RelatedProducts.tsx
import React, { useEffect, useState } from 'react'
import { Product } from '@/types/Product'
import { fetchRelatedProducts } from '@/lib/fetchRelatedProducts'

interface RelatedProductsProps {
  productId: string
  tags: string[]
}

export default function RelatedProducts({ productId, tags }: RelatedProductsProps) {
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([])

  useEffect(() => {
    if (tags.length > 0) {
      fetchRelatedProducts(productId, tags).then(setRelatedProducts)
    }
  }, [productId, tags])

  if (!tags.length) {
    return null
  }

  return (
    <div style={{ marginTop: '2rem' }}>
      <h2>Related Products</h2>
      {relatedProducts.length === 0 ? (
        <p>No related products found.</p>
      ) : (
        <ul>
          {relatedProducts.map((rp) => (
            <li key={rp._id}>
              {rp.title} - ${rp.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
