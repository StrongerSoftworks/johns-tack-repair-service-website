import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { CalendarDays, Info, MapPinned, Phone } from "lucide-react";
import MenuTrigger from "./MenuTrigger";
import { useSidebar } from "@/components/ui/sidebar";
import useSmoothScroll from "@/hooks/useSmoothScroll";

export function MenuSidebar() {
  useSmoothScroll(100);

  const { setOpen, setOpenMobile } = useSidebar();

  const items = [
    {
      title: "About",
      url: "#about",
      icon: Info,
    },
    {
      title: "Hours",
      url: "#hours",
      icon: CalendarDays,
    },
    {
      title: "Contact",
      url: "#contact",
      icon: Phone,
    },
    {
      title: "Location",
      url: "#location",
      icon: MapPinned,
    },
  ];

  return (
    <Sidebar collapsible="icon" variant="sidebar" side="left">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <MenuTrigger className="m-1" />
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu role="navigation">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    onClick={() => {
                      setOpen(false);
                      setOpenMobile(false);
                    }}
                  >
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
