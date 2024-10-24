"use client";
import LogoDark from "@/public/icons/logo_dark.svg";
import LogoLight from "@/public/icons/logo_light.svg";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    const { resolvedTheme } = useTheme(); 
  return (
    <div>
        <Link href={"/"} className="flex items-center">
          <Image
            src={
              resolvedTheme === "dark" || !resolvedTheme
                ? LogoLight
                : LogoDark
            }
            alt="logo"
            className="w-[35px] h-[35px]"
            width={35}
            height={35}
          />
          <span className="font-mono text-xl text-gradient hidden lg:inline-block">CodeDam</span>
        </Link>
      </div>
  )
}
