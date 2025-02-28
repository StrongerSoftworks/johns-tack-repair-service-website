import { useSidebar } from "@/components/ui/sidebar";
import { Menu, X } from "lucide-react";

export default function MenuTrigger({
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { toggleSidebar, state } = useSidebar();

  return (
    <button {...props} onClick={toggleSidebar}>
      {state === "expanded" ? <X /> : <Menu />}
    </button>
  );
}
