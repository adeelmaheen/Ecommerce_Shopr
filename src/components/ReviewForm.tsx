// components/ReviewForm.tsx
import React, { useState } from 'react'
import { Review } from '@/types/types'

interface ReviewFormProps {
  productId: string
  onSubmit: (review: Omit<Review, 'createdAt'>) => void
}

export default function ReviewForm({ productId, onSubmit }: ReviewFormProps) {
  const [rating, setRating] = useState<number>(5)
  const [comment, setComment] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({
      userId: 'currentUserId', // get from auth context or similar
      rating,
      comment,
      productId,
    })
    setRating(5)
    setComment('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Leave a Review</h3>
      <label>Rating: </label>
      <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
        {[1, 2, 3, 4, 5].map((r) => (
          <option key={r} value={r}>{r}</option>
        ))}
      </select>

      <div>
        <label>Comment:</label>
        <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
      </div>

      <button type="submit">Submit Review</button>
    </form>
  )
}
