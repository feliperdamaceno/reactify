// Components
import { Button } from '@/components'
import Image from 'next/image'
import Link from 'next/link'

// Images
import Logo from '@/public/reactify_logo.png'

export default function Header() {
  return (
    <header className="container flex items-center justify-between gap-4 px-8 pt-8 mx-auto sm:px-10">
      <Link href="/">
        <Image
          className="w-10 p-1 select-none sm:w-12 drop-shadow-sm"
          src={Logo}
          width={50}
          height={50}
          alt="Reactify Logo"
        />
      </Link>

      <nav
        className="flex items-center gap-4 font-semibold"
        aria-label="header links"
      >
        <Button
          type="transparent"
          render={(styles) => (
            <a
              className={styles}
              href="https://github.com/feliperdamaceno"
              target="_blank"
            >
              GitHub
            </a>
          )}
        />

        <Button
          type="regular"
          render={(styles) => (
            <Link className={styles} href="/contact">
              Contact Me
            </Link>
          )}
        />
      </nav>
    </header>
  )
}
