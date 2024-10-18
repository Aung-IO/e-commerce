"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./mode-toggle";
import { useTheme } from "next-themes";

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

export default function Header() {
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();
  return (
    <header className="flex justify-between items-center px-7 py-4 border-b">
      <Link href={"/inspiration"} className="flex items-center">
        <Image
          src={
            resolvedTheme === "light" || !resolvedTheme
              ? "/logo_dark.svg"
              : "/logo_light.svg"
          }
          alt="logo"
          className="w-[35px] h-[35px]"
          width={35}
          height={35}
        />
        <span className="font-mono text-xl text-gradient">CodeDam</span>
      </Link>

      <nav>
        <ul className="flex gap-x-5 text-[18px]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>
                <p
                  className={`${
                    pathname === link.href ? `font-semibold` : ``
                  } text-gradient`}
                >
                  {link.label}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav className="flex gap-x-5 text-[14px]">
        <ModeToggle />
        <span className="mt-2">Log in</span>
        <button className="button">Sign up</button>
      </nav>
    </header>
  );
}
