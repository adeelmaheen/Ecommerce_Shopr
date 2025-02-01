// lib/fetchRelatedProducts.ts
import { Product } from '@/types/Product'

export async function fetchRelatedProducts(productId: string, tags: string[]): Promise<Product[]> {
  // For example, fetch from your /api/products or directly from Sanity
  // Where at least one tag overlaps
  const res = await fetch(`https://api.example.com/related?tags=${tags.join(',')}&exclude=${productId}`)
  return res.json()
}
