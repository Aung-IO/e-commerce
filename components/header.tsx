

import { auth } from "@/auth";
import AddPost from "./add-post";
import Logo from "./logo";
import { ModeToggle } from "./mode-toggle";
import NavLinks from "./nav-links";
import SignIn from "./sign-in";
import Image from "next/image";
import { SignOut } from "./sign-out";

export default async function Header() {

  const session = await auth()

  return (
    <header className="flex justify-between mx-3 items-center py-4 border-b">
      <Logo />
      <NavLinks />
      
      <div className="flex items-center gap-5">
        <div className="hidden lg:inline-block">
        <ModeToggle />
      
        </div>
        {session?.user ? (
          <div className="flex flex-row gap-3">
            <AddPost/>
            <Image src={session.user.image} alt="user iamge" width={40} height={40} className="rounded-full"></Image>
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
