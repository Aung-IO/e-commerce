"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    const { resolvedTheme } = useTheme();
  return (
    <div>
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
          <span className="font-mono text-xl text-gradient hidden lg:inline-block">CodeDam</span>
        </Link>
      </div>
  )
}