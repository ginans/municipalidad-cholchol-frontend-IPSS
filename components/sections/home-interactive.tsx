import { ContactSection } from "@/components/sections/home/contact-section";
import { MunicipioSection } from "@/components/sections/home/municipio-section";
import { PatrimonioSection } from "@/components/sections/home/patrimonio-section";

export function HomeInteractive() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pt-14">
      <MunicipioSection />
      <PatrimonioSection />
      <ContactSection />
    </main>
  );
}
