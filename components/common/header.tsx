import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import CreatePostButton from "../../feature/inspiration/components/create-post-button";
import Logo from "./logo";
import { ModeToggle } from "./mode-toggle";
import NavLinks from "./nav-links";
import SignIn from "./sign-in";

export default async function Header() {

  const session = await auth()

  return (
    <header className="flex justify-between mx-3 items-center py-4 border-b">
      <Logo />
      <NavLinks />

      <div className="flex items-center gap-5">
        <div>
          <ModeToggle />

        </div>
        {session?.user ? (
          <div className="flex flex-row gap-3">
            <div className="hidden lg:inline-block">
              <CreatePostButton />
            </div>
         
            <Link href={"/profile"}>
              <Image src={session.user.image!} alt="user iamge" width={40} height={40} className="rounded-full"></Image>
            </Link>
          </div>
        ) : (
          <div>

            <SignIn />

          </div>
        )}

      </div>

    </header>
  );
}
