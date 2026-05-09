"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui/button";
import { agendaBase } from "@/components/sections/home/home-data";

export function AgendaSection() {
  const [showAgenda, setShowAgenda] = useState(true);

  return (
    <aside
      id="agenda"
      className="rounded-3xl border border-primary/20 bg-white/92 p-6 shadow-[0_20px_60px_-35px_rgba(33,91,173,0.55)]"
    >
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-lg font-semibold text-primary">Agenda comunal</h2>
        <Button
          type="button"
          size="sm"
          variant={showAgenda ? "default" : "secondary"}
          className="gap-2"
          onClick={() => setShowAgenda((prev) => !prev)}
        >
          {showAgenda ? (
            <Eye className="h-4 w-4" />
          ) : (
            <EyeOff className="h-4 w-4" />
          )}
          {showAgenda ? "Ocultar agenda" : "Mostrar agenda"}
        </Button>
      </div>

      {showAgenda ? (
        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
          {agendaBase.map((item) => (
            <li key={item} className="rounded-lg bg-secondary/40 px-3 py-2">
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </aside>
  );
}
