// components/ReviewList.tsx
import React from 'react'
import { Review } from '@/types/types'

interface ReviewListProps {
  reviews: Review[]
}

export default function ReviewList({ reviews }: ReviewListProps) {
  if (!reviews?.length) return <p>No reviews yet.</p>

  // Compute average rating
  const averageRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length

  return (
    <div>
      <h2>Reviews ({reviews.length})</h2>
      <p>Average Rating: {averageRating.toFixed(1)}/5</p>
      <ul>
        {reviews.map((review) => (
          <li key={review.userId + review.createdAt}>
            <strong>Rating:</strong> {review.rating}/5<br />
            <strong>Comment:</strong> {review.comment}<br />
            <small>By user {review.userId} on {new Date(review.createdAt).toLocaleDateString()}</small>
          </li>
        ))}
      </ul>
    </div>
  )
}
