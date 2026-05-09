import Image from "next/image";

import { heritageGallery } from "@/components/sections/home/home-data";

export function PatrimonioSection() {
  return (
    <section id="patrimonio" className="mt-10 space-y-4">
      <div className="flex items-end justify-between gap-3">
        <h2 className="font-serif text-2xl text-primary">Patrimonio</h2>
        <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
          Seleccion fotografica local
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {heritageGallery.map((item) => (
          <figure
            key={item.src}
            className="overflow-hidden rounded-2xl border border-border/60 bg-white/90"
          >
            <Image
              src={item.src}
              alt={item.title}
              width={900}
              height={620}
              className="h-44 w-full object-cover"
            />
            <figcaption className="px-3 py-2 text-sm text-muted-foreground">
              {item.title}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
