import MenuTrigger from "../Menu/MenuTrigger";

function Header() {
  return (
    <div className="fixed flex items-start bg-white p-6 w-full">
      <div className="flex items-center justify-between flex-shrink-0 w-full">
        <span className="font-semibold text-xl tracking-tight">
          John's Tack Repair Service
        </span>
        <MenuTrigger className="md:hidden" />
      </div>
    </div>
  );
}

export default Header;
