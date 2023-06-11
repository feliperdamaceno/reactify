'use client'

// Components
import { Button } from '@/components'

// Hooks
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
      <Button
        type="regular"
        render={(styles) => (
          <button className={styles} onClick={reset}>
            Try Again
          </button>
        )}
      />
    </div>
  )
}
