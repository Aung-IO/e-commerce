"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  
  {
    href: "/inspiration",
    label: "Inspiration"
  },
  {
    href: "/qickcodes",
    label: "QickCodes"
  }
]

export default function Header() {
  const pathname = usePathname()
  return (
    <header className='flex justify-between items-center px-7 py-4 border-b'>
      <Link href={'/inspiration'} className='flex items-center'>
        <Image src={'spotlight_logo.svg'}
          alt='logo' className='w-[35px] h-[35px]' width={35} height={35} />
          <span className='font-mono text-xl'>CodeDam</span>
      </Link>

      <nav>
        <ul className='flex gap-x-5 text-[18px]'>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>
                <p className={`${pathname === link.href ? `text-nav_active` : `text-nav_inactive`} font-semibold`}>{link.label}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav className='flex gap-x-5 text-[14px]'>
        <span className='mt-2'>Log in</span>
       <button className='bg-[#000] text-white px-4 py-2 rounded-lg'>Sign up</button>
      </nav>
    </header>
  )
}
