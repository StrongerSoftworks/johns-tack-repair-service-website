function Header() {
  return (
    <>
      <nav className="flex justify-between p-6 h-20 mb-40">
        <div className="">
          <img src="https://placecats.com/300/200" />
        </div>
        <div className="flex items-center flex-shrink-0 mr-6 ms-4">
          <span className="font-semibold text-xl tracking-tight">John's Tack Repair Service</span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded border-black-400 hover:text-amber-900 hover:border-amber-900">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a
              href="#about"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-amber-900 mr-4"
            >
              About
            </a>
            <a
              href="#services"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-amber-900 mr-4"
            >
              Services
            </a>
            <a
              href="#contact"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-amber-900"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
