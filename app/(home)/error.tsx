'use client'

import { useEffect } from 'react'

interface HomeErrorProps {
  error: Error
  reset: () => void
}

export default function HomeError({ error, reset }: HomeErrorProps) {
  useEffect(() => {
    console.error(error)
  }, [error])
  return (
    <div aria-label="error page">
      <h1 className="mb-2">Something went wrong :(</h1>
      <button
        className="px-3 font-semibold rounded-sm shadow-sm bg-emerald-500 text-zinc-50 py-1.5"
        onClick={reset}
      >
        Try Again
      </button>
    </div>
  )
}
