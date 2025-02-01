// components/UserProfile.tsx
import React from 'react'
import { useUser } from '@clerk/nextjs' // or your chosen auth provider

interface Order {
  id: string
  date: string
  total: number
  status: string
  // etc.
}

interface UserProfileProps {
  orders: Order[]
  addresses: string[]
}

export default function UserProfile({ orders, addresses }: UserProfileProps) {
  const { user } = useUser()

  if (!user) return <div>Please log in to see your profile.</div>

  return (
    <div>
      <h1>User Profile</h1>
      <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
      <p><strong>Email:</strong> {user.primaryEmailAddress?.emailAddress}</p>

      <h2>Saved Addresses</h2>
      <ul>
        {addresses.map((addr) => (
          <li key={addr}>{addr}</li>
        ))}
      </ul>

      <h2>Order History</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <a href={`/orders/${order.id}`}>
              Order #{order.id} - {order.status} - ${order.total}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
