import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Home, Info, MapPinned } from "lucide-react";
import MenuTrigger from "./MenuTrigger";
import { useSidebar } from "@/components/ui/sidebar";

export function MenuSidebar() {
  const items = [
    {
      title: "Home",
      url: "#",
      icon: Home,
    },
    {
      title: "About",
      url: "#about",
      icon: Info,
    },
    // {
    //   title: "Services",
    //   url: "#services",
    //   icon: PencilRuler,
    // },
    {
      title: "Contact",
      url: "#contact",
      icon: MapPinned,
    },
  ];

  const { toggleSidebar } = useSidebar();

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
                  <SidebarMenuButton asChild onClick={toggleSidebar}>
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
