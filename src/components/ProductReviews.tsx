// components/ProductReviews.tsx
import React, { useState, useEffect } from 'react'
import ReviewList from './ReviewList'
import ReviewForm from './ReviewForm'
import { Review } from '@/types/types'

interface ProductReviewsProps {
  productId: string
}

export default function ProductReviews({ productId }: ProductReviewsProps) {
  const [reviews, setReviews] = useState<Review[]>([])

  useEffect(() => {
    // Fetch reviews from server or CMS
    const fetchReviews = async () => {
      const res = await fetch(`/api/reviews?productId=${productId}`)
      const data = await res.json()
      setReviews(data)
    }
    fetchReviews()
  }, [productId])

  const handleReviewSubmit = async (newReview: Omit<Review, 'createdAt'>) => {
    // Post review to server
    const res = await fetch('/api/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newReview),
    })
    const savedReview = await res.json()
    setReviews((prev) => [...prev, savedReview])
  }

  return (
    <div>
      <ReviewList reviews={reviews} />
      <ReviewForm productId={productId} onSubmit={handleReviewSubmit} />
    </div>
  )
}
