

import Logo from "./logo";
import { ModeToggle } from "./mode-toggle";
import NavLinks from "./nav-links";
import SignIn from "./sign-in";

export default function Header() {

  return (
    <header className="flex justify-between items-center px-3 lg:px-14 py-4 border-b">
      <Logo />
      <NavLinks />
      <div className="flex items-center gap-5">
        <div className="hidden lg:inline-block">

        <ModeToggle />
        </div>
        <SignIn />
      </div>

    </header>
  );
}
