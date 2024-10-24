
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";


const navLinks = [
  {
    href: "/inspiration",
    label: "Inspiration",
  },
  {
    href: "/qickcodes",
    label: "QickCodes",
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (

    <ul className="flex gap-x-5 text-[14px] lg:text-[18px]">
      {navLinks.map((link) => (
        <li key={link.href}>
          <Link href={link.href}>
            <p
              className={`${pathname === link.href ? `font-semibold` : ``
                } text-gradient`}
            >
              {link.label}
            </p>
          </Link>
        </li>
      ))}
    </ul>

  )
}
