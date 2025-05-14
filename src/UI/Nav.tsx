function NavLargeScreen() {
  return (
    <nav className="hidden md:flex ">
      <a href="#" className="mr-6 text-sm hover:text-red-500">
        Home
      </a>
      <a href="#" className="mr-6 text-sm hover:text-red-500">
        Services ▾
      </a>
      <a href="#" className="mr-6 text-sm font-semibold text-red-500">
        Career
      </a>
      <a href="#" className="mr-6 text-sm hover:text-red-500">
        Blogs
      </a>
      <a href="#" className="text-sm hover:text-red-500">
        About Us
      </a>
    </nav>
  );
}

function NavSmallScreen() {
  return (
    <div className="md:hidden bg-white shadow-xs pb-4 px-4">
      <nav className="flex flex-col space-y-3 mt-2">
        <a href="#" className="text-sm hover:text-red-500">
          Home
        </a>
        <a href="#" className="text-sm hover:text-red-500">
          Services
        </a>
        <a href="#" className="text-sm font-medium text-red-500">
          Career
        </a>
        <a href="#" className="text-sm hover:text-red-500">
          Blogs
        </a>
        <a href="#" className="text-sm hover:text-red-500">
          About Us
        </a>
      </nav>
    </div>
  );
}

export { NavLargeScreen, NavSmallScreen };
