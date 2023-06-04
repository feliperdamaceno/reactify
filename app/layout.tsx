// Components
import { Header } from '@/components'

// Styles
import './globals.css'
import { Nunito } from 'next/font/google'

// Types
import { Metadata } from 'next'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Reactify.',
  description:
    'Reactify is a blog focused on Javascript and Web Development technologies.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${nunito.className} bg-zinc-100 text-zinc-800`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
