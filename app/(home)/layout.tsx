// Components
import { Header, Hero, PostWidget, CategoryWidget } from '@/components'

// Styles
import '../globals.css'
import { Nunito } from 'next/font/google'

// Types
import { Metadata } from 'next'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Reactify.',
  description:
    'Reactify is a blog focused on Javascript and Web Development technologies.'
}

export default function HomeLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} bg-zinc-50 text-zinc-800 selection:bg-emerald-400 selection:text-white`}
      >
        <Header />
        <main className="container px-8 mx-auto mb-8 sm:px-10">
          <Hero />
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {children}

            <aside className="col-span-1 lg:col-span-4">
              <div className="relative lg:sticky top-8">
                <PostWidget type="Recent Posts" />
                <CategoryWidget />
              </div>
            </aside>
          </div>
        </main>
      </body>
    </html>
  )
}
