import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  {
    href: "/",
    label: "Home"
  },
  {
    href: "/about",
    label: "About"
  },
  {
    href: "/contact",
    label: "Contact"
  },
  {
    href: "/blog",
    label: "Blog"
  }
]

export default function Header() {
  return (
    <header className='flex justify-between items-center px-7 py-4 border-b'>
      <Link href={'/'}>
        <Image src={'https://bytegrad.com/course-assets/youtube/example-logo.png'}
          alt='logo' className='w-[35px] h-[35px]' width={35} height={35} />
      </Link>

      <nav>
        <ul className='flex gap-x-5 text-[14px]'>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>
                <p className="text-nav_inactive">{link.label}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
