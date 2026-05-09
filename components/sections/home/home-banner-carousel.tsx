"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { bannerSlides } from "@/components/sections/home/home-data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

export function HomeBannerCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      setActiveIndex(api.selectedScrollSnap());
    };

    onSelect();
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api) {
      return;
    }

    const timer = window.setInterval(() => {
      api.scrollNext();
    }, 4500);

    return () => window.clearInterval(timer);
  }, [api]);

  return (
    <figure className="overflow-hidden rounded-2xl border border-primary/20 bg-white/80 shadow-[0_14px_40px_-28px_rgba(33,91,173,0.7)]">
      <Carousel
        setApi={setApi}
        opts={{ loop: true, align: "start" }}
        className="w-full"
      >
        <CarouselContent className="-ml-0">
          {bannerSlides.map((slide, index) => (
            <CarouselItem key={slide.src} className="pl-0">
              <div className="relative aspect-[16/5] w-full overflow-hidden bg-black/5 sm:aspect-[21/7]">
                <Image
                  src={slide.src}
                  alt={slide.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 1024px"
                  priority={index === 0}
                  className="object-contain object-center"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-2 h-8 w-8 border-white/70 bg-black/35 text-white hover:bg-black/45 hover:text-white" />
        <CarouselNext className="right-2 h-8 w-8 border-white/70 bg-black/35 text-white hover:bg-black/45 hover:text-white" />
      </Carousel>

      <figcaption className="flex items-center justify-between gap-3 px-3 py-2 text-xs text-muted-foreground">
        <span>{bannerSlides[activeIndex]?.title}</span>
        <div className="flex gap-1.5">
          {bannerSlides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Ir al banner ${index + 1}`}
              className={`h-2.5 w-2.5 rounded-full border border-primary/30 transition ${
                index === activeIndex ? "bg-primary" : "bg-primary/30"
              }`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </figcaption>
    </figure>
  );
}
