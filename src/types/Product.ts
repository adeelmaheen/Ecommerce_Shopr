// /types/Product.ts

/**
 * Represents a single product in your e-commerce store.
 */
export interface Product {
    /**
     * Unique identifier from Sanity (e.g., "someProductId-abc123").
     */
    _id: string
  
    /**
     * Title or name of the product.
     */
    title: string
  
    /**
     * Slug object in Sanity is { current: string }, but we often flatten it to just a string.
     */
    slug: {
      current: string
    }
  
    /**
     * A short overview or snippet about the product.
     */
    shortDescription?: string
  
    /**
     * Detailed product description.
     */
    description?: string
  
    /**
     * Brand or manufacturer.
     */
    brand?: string
  
    /**
     * Stock Keeping Unit.
     */
    sku?: string
  
    /**
     * Regular or base price.
     */
    price: number
  
    /**
     * If available, a discounted price for sales.
     */
    discountPrice?: number
  
    /**
     * Number of items in stock.
     */
    stockQuantity?: number
  
    /**
     * Whether the product is featured.
     */
    isFeatured?: boolean
  
    /**
     * Whether the product is archived (hidden from store).
     */
    isArchived?: boolean
  
    /**
     * Categories or references. Could be just an array of strings or references to "category" docs.
     */
    categories?: string[]
  
    /**
     * Tags or keywords for search/related products.
     */
    tags?: string[]
  
    /**
     * List of images (in Sanity, each is an object with an 'asset' reference).
     */
    images?: {
      _key: string
      _type: string
      asset: {
        _ref: string
        _type: 'reference'
      }
    }[]
  
    /**
     * Possible variants (e.g., color, size, etc.).
     */
    variants?: {
      _key: string
      _type: string
      name: string
      value: string
      priceModifier?: number
    }[]
  
    /**
     * The average user rating (0-5).
     */
    averageRating?: number
  
    /**
     * Total number of reviews.
     */
    reviewCount?: number
  
    /**
     * SEO fields
     */
    metaTitle?: string
    metaDescription?: string
  
    /**
     * Built-in Sanity fields (date strings).
     */
    _createdAt?: string
    _updatedAt?: string
    _rev?: string
    _type?: 'product'
  }
  