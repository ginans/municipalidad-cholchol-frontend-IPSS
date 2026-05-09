import Link from "next/link";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { mainLinks, transparencyLinks } from "@/lib/nav-data";

export function AppSidebar() {
  return (
    <Sidebar side="right" collapsible="offcanvas">
      <SidebarHeader className="border-b border-sidebar-border px-4 py-3">
        <p className="text-xs uppercase tracking-[0.2em] text-sidebar-foreground/60">
          Municipalidad de
        </p>
        <p className="font-serif text-base font-semibold text-sidebar-foreground">
          Cholchol
        </p>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navegacion</SidebarGroupLabel>
          <SidebarMenu>
            {mainLinks.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton asChild tooltip={item.description}>
                  <Link href={item.href}>
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Transparencia</SidebarGroupLabel>
          <SidebarMenu>
            {transparencyLinks.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton asChild tooltip={item.description}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    <span>{item.label}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border px-4 py-3">
        <p className="text-xs text-sidebar-foreground/50">
          Municipalidad de Cholchol &mdash; Region de La Araucania
        </p>
      </SidebarFooter>
    </Sidebar>
  );
}
