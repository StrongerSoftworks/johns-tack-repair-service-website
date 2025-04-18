import { useSidebar } from "@/components/ui/sidebar";
import { Menu, X } from "lucide-react";

export default function MenuTrigger({
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { toggleSidebar, open, openMobile } = useSidebar();

  return (
    <button
      {...props}
      onClick={toggleSidebar}
      aria-label="menu button"
      name="menu"
    >
      {open || openMobile ? <X /> : <Menu />}
    </button>
  );
}
