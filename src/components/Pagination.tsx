// components/Pagination.tsx
import React from 'react'
import Link from 'next/link'

interface PaginationProps {
  totalPages: number
  currentPage: number
  basePath: string // e.g., '/products'
}

export default function Pagination({ totalPages, currentPage, basePath }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div style={{ marginTop: '1rem' }}>
      <button disabled={currentPage === 1}>
        <Link href={`${basePath}?page=${currentPage - 1}`}>
          Prev
        </Link>
      </button>

      {pages.map((page) => (
        <Link
          key={page}
          href={`${basePath}?page=${page}`}
          style={{ margin: '0 0.5rem', fontWeight: page === currentPage ? 'bold' : 'normal' }}
        >
          {page}
        </Link>
      ))}

      <button disabled={currentPage === totalPages}>
        <Link href={`${basePath}?page=${currentPage + 1}`}>
          Next
        </Link>
      </button>
    </div>
  )
}
