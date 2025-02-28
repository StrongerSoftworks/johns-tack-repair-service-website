import MenuTrigger from "../Menu/MenuTrigger";

function Header() {
  return (
    <div className="flex items-start bg-white p-6 w-full">
      <div className="flex items-center justify-between flex-shrink-0 w-full">
        <span className="font-mono antialiased font-extrabold text-4xl uppercase tracking-tighter">
          John's Tack Repair Service
        </span>
        <MenuTrigger className="md:hidden" />
      </div>
    </div>
  );
}

export default Header;
