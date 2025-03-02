import MenuTrigger from "../Menu/MenuTrigger";

function Header() {
  return (
    <div className="fixed flex items-start bg-white p-6 w-full z-30">
      <div className="flex items-center justify-between flex-shrink-0 w-full">
        <MenuTrigger className="md:hidden" />
        <span className="ms-6 font-mono antialiased font-extrabold text-4xl uppercase tracking-tighter">
          John's Tack Repair Service
        </span>
      </div>
    </div>
  );
}

export default Header;
