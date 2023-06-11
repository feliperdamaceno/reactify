// Components
import { Header } from '@/components'

// Styles
import '@/app/globals.css'
import { Nunito } from 'next/font/google'

// Types
import { Metadata } from 'next'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Posts',
  description:
    'Reactify is a blog focused on Javascript and Web Development technologies.'
}

interface PostsLayoutProps {
  children: React.ReactNode
}

export default function PostsLayout({ children }: PostsLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} bg-zinc-100 text-zinc-800 selection:bg-emerald-400 selection:text-white`}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
