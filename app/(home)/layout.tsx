// Components
import {
  Header,
  Hero,
  PostWidget,
  CategoriesWidget,
  CategoriesNav
} from '@/components'

// Styles
import '@/app/globals.css'
import { Nunito } from 'next/font/google'

// Types
import { Metadata } from 'next'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Reactify.',
  description:
    'Reactify is a blog focused on Javascript and Web Development technologies.'
}

interface HomeLayoutProps {
  children: React.ReactNode
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} bg-zinc-100 text-zinc-800 selection:bg-emerald-400 selection:text-white`}
      >
        <Header />
        <main className="container px-8 mx-auto mb-8 sm:px-10">
          <Hero />
          <CategoriesNav />
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <section className="col-span-1 lg:col-span-8">{children}</section>

            <aside className="col-span-1 lg:col-span-4">
              <div className="relative lg:sticky top-8">
                <PostWidget type="Recent Posts" />
                <CategoriesWidget />
              </div>
            </aside>
          </div>
        </main>
      </body>
    </html>
  )
}
