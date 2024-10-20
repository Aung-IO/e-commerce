

import AddPost from "./add-post";
import Logo from "./logo";
import { ModeToggle } from "./mode-toggle";
import NavLinks from "./nav-links";
import SignIn from "./sign-in";

export default function Header() {

  return (
    <header className="flex justify-between mx-3 items-center py-4 border-b">
      <Logo />
      <NavLinks />
      <div className="flex items-center gap-5">
        <div className="hidden lg:inline-block">
        <ModeToggle />
        </div>
        <div className="hidden lg:inline-block">

        <AddPost/>
        </div>
        <SignIn />
      </div>

    </header>
  );
}
