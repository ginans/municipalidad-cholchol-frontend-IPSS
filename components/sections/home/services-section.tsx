"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { type Service, services } from "@/components/sections/home/home-data";

export function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<
    "todos" | Service["category"]
  >("todos");
  const [hoveredServiceId, setHoveredServiceId] = useState<string | null>(null);

  const visibleServices = useMemo(() => {
    if (activeCategory === "todos") {
      return services;
    }

    return services.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const hoveredService = services.find((item) => item.id === hoveredServiceId);

  return (
    <section id="tramites-servicios" className="mt-10 space-y-4">
      <h2 className="font-serif text-2xl text-primary">Tramites y servicios</h2>

      <div className="flex flex-wrap gap-2">
        {[
          ["todos", "Todos"],
          ["social", "Social"],
          ["permiso", "Permisos"],
          ["emergencia", "Emergencia"],
        ].map(([value, label]) => (
          <Button
            key={value}
            type="button"
            size="sm"
            variant={activeCategory === value ? "default" : "outline"}
            onClick={() =>
              setActiveCategory(value as "todos" | Service["category"])
            }
          >
            {label}
          </Button>
        ))}
      </div>

      <p className="text-sm text-muted-foreground" aria-live="polite">
        {hoveredService
          ? `Detalle rapido: ${hoveredService.description}`
          : "Pasa el cursor por un tramite para ver detalle rapido."}
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visibleServices.map((item) => {
          return (
            <article
              key={item.id}
              className="rounded-2xl border border-border/60 bg-white/90 p-4 shadow-sm transition hover:-translate-y-0.5"
              onMouseEnter={() => setHoveredServiceId(item.id)}
              onMouseLeave={() => setHoveredServiceId(null)}
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <span
                  className={cn(
                    "rounded-full px-2 py-0.5 text-xs",
                    item.online
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-amber-100 text-amber-700",
                  )}
                >
                  {item.online ? "En linea" : "Presencial"}
                </span>
              </div>

              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>

              {!item.online && item.address ? (
                <p className="mt-2 text-xs font-medium text-foreground/80">
                  Direccion: {item.address}
                </p>
              ) : null}

              <Button
                asChild
                size="sm"
                variant={item.online ? "default" : "outline"}
                className="mt-3"
              >
                <Link
                  href={item.procedureUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {item.online ? "Ir al tramite" : "Ver ubicacion"}
                </Link>
              </Button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
