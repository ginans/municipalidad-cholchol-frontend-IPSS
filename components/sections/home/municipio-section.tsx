import { AgendaSection } from "@/components/sections/home/agenda-section";
import { HomeBannerCarousel } from "@/components/sections/home/home-banner-carousel";
import { ServicesSection } from "@/components/sections/home/services-section";

export function MunicipioSection() {
  return (
    <article id="municipio" className="space-y-6">
      <p className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-primary">
        Home
      </p>
      <h1 className="font-serif text-4xl leading-tight text-primary sm:text-5xl">
        Portal municipal
      </h1>
      <HomeBannerCarousel />
      <AgendaSection />
      <ServicesSection />
    </article>
  );
}
