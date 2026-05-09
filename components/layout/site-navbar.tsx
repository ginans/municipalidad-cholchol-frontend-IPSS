"use client";

import { House } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useSidebar } from "@/components/ui/sidebar";
import { mainLinks, transparencyLinks } from "@/lib/nav-data";

export function SiteNavbar() {
  const { setOpenMobile } = useSidebar();

  return (
    <header className="sticky top-0 z-20 border-b border-border/70 bg-primary text-primary-foreground shadow-sm">
      <nav className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-3 sm:px-6 lg:px-8">
        {/* Fila superior: branding + links de transparencia (desktop) + controles mobile */}
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/75">
              Municipalidad de
            </p>
            <p className="font-serif text-xl font-semibold text-primary-foreground">
              Cholchol
            </p>
          </div>

          {/* Links de transparencia — solo desktop */}
          <div className="hidden items-center gap-2 md:flex">
            {transparencyLinks.map((item) => (
              <Button
                key={item.href}
                asChild
                variant="ghost"
                size="sm"
                className="h-7 rounded-full px-2.5 text-[11px] font-semibold uppercase tracking-[0.06em] text-primary-foreground/85 hover:bg-white/15 hover:text-primary-foreground"
              >
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.label}
                </a>
              </Button>
            ))}
          </div>

          {/* Controles mobile: casita + trigger del sidebar */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              asChild
              variant="secondary"
              size="icon"
              className="h-9 w-9 rounded-full bg-white/15 text-primary-foreground hover:bg-white/25"
            >
              <a href="#inicio" aria-label="Ir al inicio">
                <House className="h-4 w-4" />
              </a>
            </Button>

            <Button
              variant="secondary"
              size="icon"
              className="h-9 w-9 rounded-full bg-white/15 text-primary-foreground hover:bg-white/25"
              aria-label="Abrir menu de navegacion"
              type="button"
              onClick={() => setOpenMobile(true)}
            >
              <span className="sr-only">Abrir menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M3 12h18" />
                <path d="M3 6h18" />
                <path d="M3 18h18" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Navegacion principal — solo desktop */}
        <div className="hidden border-t border-white/20 pt-2 md:block">
          <NavigationMenu className="max-w-full justify-start">
            <NavigationMenuList className="w-full flex-wrap justify-start gap-1">
              {mainLinks.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild>
                    <a
                      href={item.href}
                      className={`${navigationMenuTriggerStyle()} bg-white/10 text-primary-foreground hover:bg-white/20 hover:text-primary-foreground focus:bg-white/20 focus:text-primary-foreground`}
                    >
                      {item.label}
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>
    </header>
  );
}
