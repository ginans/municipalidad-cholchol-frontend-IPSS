import { SiteNavbar } from "../components/layout/site-navbar";

export default function Home() {
  return (
    <div id="inicio" className="relative flex-1 municipal-bg">
      <SiteNavbar />

      <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pt-14">
        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <article id="municipio" className="space-y-6">
            <p className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-primary">
              Base de desarrollo
            </p>
            <h1 className="font-serif text-4xl leading-tight text-primary sm:text-5xl">
              Rediseño del portal
            </h1>
            <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              estructura inicial: identidad visual, layout responsivo y base
            </p>
          </article>

          <aside
            id="patrimonio"
            className="rounded-3xl border border-primary/20 bg-white/92 p-6 shadow-[0_20px_60px_-35px_rgba(33,91,173,0.55)]"
          >
            <h2 className="text-lg font-semibold text-primary">
              Siguiente bloque
            </h2>
            <ul
              id="contacto"
              className="mt-4 space-y-3 text-sm text-muted-foreground"
            >
              <li>1. Hero con imagen institucional</li>
              <li>2. Accesos directos a tramites y servicios</li>
              <li>3. Noticias y agenda comunal dinamica</li>
              <li>4. Formulario de contacto con validaciones</li>
            </ul>
          </aside>
        </section>
      </main>
    </div>
  );
}
