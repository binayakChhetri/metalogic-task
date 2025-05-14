import { Menu, X } from "lucide-react";
import { useState } from "react";
import LogoName from "../UI/LogoName";
import { NavLargeScreen, NavSmallScreen } from "../UI/Nav";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="bg-white shadow-xs sticky top-0 z-10 py-3 h-[10vh]">
      <div className="container max-w-[1366px] mx-auto flex justify-between items-center px-4 py-3">
        <div className="flex items-center">
          <LogoName />
          <NavLargeScreen />
        </div>
        <div className="flex items-center">
          <button className="cursor-pointer bg-red-500  px-4 py-2 text-white rounded-sm hover:bg-white hover:border-red-500 hover:text-red-500 border-2 transition-all">
            Get in Touch
          </button>
          <button className="md:hidden" onClick={toggleMenu}>
            {menuOpen ? (
              <X
                size={30}
                className="cursor-pointer hover:scale-120 transition-transform"
              />
            ) : (
              <Menu
                size={30}
                className="cursor-pointer hover:scale-120 transition-transform"
              />
            )}
          </button>
        </div>
      </div>

      {menuOpen && <NavSmallScreen />}
    </header>
  );
}
