import React from 'react'

export default function Loading() {
  return (
    <div className="pointer-events-none fixed inset-0 flex h-screen w-screen animate-pulse items-center justify-center">
      <h1>Loading...</h1>
    </div>
  )
}
