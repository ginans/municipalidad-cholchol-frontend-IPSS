export default function Home() {
  return (
    <div className="relative flex-1 municipal-bg">
      <header className="sticky top-0 z-20 border-b border-border/70 bg-primary text-primary-foreground shadow-sm">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/75">
              Municipalidad de
            </p>
            <p className="font-serif text-xl font-semibold text-primary-foreground">
              Cholchol
            </p>
          </div>
          <button
            type="button"
            className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            Contacto rapido
          </button>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pt-14">
        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <article className="space-y-6">
            <p className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-primary">
              Base de desarrollo
            </p>
            <h1 className="font-serif text-4xl leading-tight text-primary sm:text-5xl">
              Rediseño del portal
            </h1>
            <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              estructura inicial: identidad visual, layout
              responsivo y base 
            </p>
          </article>

          <aside className="rounded-3xl border border-primary/20 bg-white/92 p-6 shadow-[0_20px_60px_-35px_rgba(33,91,173,0.55)]">
            <h2 className="text-lg font-semibold text-primary">
              Siguiente bloque
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>1. Hero con imagen institucional</li>
              <li>2. Accesos directos a tramites y servicios</li>
              <li>3. Noticias y agenda comunal dinamica</li>
              <li>
                4. Formulario de contacto con validaciones
              </li>
            </ul>
          </aside>
        </section>
      </main>
    </div>
  );
}
