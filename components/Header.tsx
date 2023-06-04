// Components
import Image from 'next/image'
import Link from 'next/link'

// Styles
import Logo from '@/public/reactify_logo.png'

export default function Header() {
  return (
    <header className="container flex items-center justify-between gap-4 px-8 pt-8 mx-auto sm:px-10">
      <Link href="/">
        <Image
          className="w-10 p-1 sm:w-12 drop-shadow-sm"
          src={Logo}
          width={50}
          height={50}
          alt="Reactify Logo"
        />
      </Link>

      <nav className="flex items-center gap-4 font-semibold">
        <a
          className="px-3 font-semibold py-1.5 drop-shadow-sm"
          href="https://github.com/feliperdamaceno"
          target="_blank"
        >
          GitHub
        </a>

        <Link
          className="px-3 font-semibold rounded-sm shadow-sm bg-emerald-500 text-zinc-50 py-1.5"
          href="/contact"
        >
          Contact Me
        </Link>
      </nav>
    </header>
  )
}
