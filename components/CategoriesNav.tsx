'use client'

// Components
import { List } from '@/components'
import Link from 'next/link'

// Hooks
import { usePathname } from 'next/navigation'

const MOCK_CATEGORIES = [
  { name: 'All', route: '/' },
  { name: 'React', route: '/category/react' },
  {
    name: 'Web Development',
    route: '/category/web-development'
  },
  {
    name: 'Tailwind CSS',
    route: '/category/tailwind-css'
  }
]

export default function CategoriesNav() {
  const setActiveRouteStyle = (route: string) => {
    const currentRoute = usePathname()
    return currentRoute === route ? 'text-zinc-800' : ''
  }

  return (
    <nav className="mb-4 -mx-4" aria-label="category navigation links">
      <ul className="relative flex gap-2 py-2 overflow-x-auto font-semibold text-zinc-400 whitespace-nowrap scrollbar-none">
        <List
          items={MOCK_CATEGORIES}
          render={(category) => (
            <li
              key={category.name}
              className={setActiveRouteStyle(category.route)}
            >
              <Link className="px-4 py-2" href={category.route}>
                {category.name}
              </Link>
            </li>
          )}
        />
      </ul>
      <hr className="mx-4 border-t-2 border-zinc-300" />
    </nav>
  )
}
