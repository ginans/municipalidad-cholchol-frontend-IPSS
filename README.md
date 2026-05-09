# Municipalidad de Cholchol — Rediseño Home

Este repositorio contiene el rediseño de la página de inicio del sitio web de la **Municipalidad de Cholchol**, desarrollado como parte de la Evaluación Sumativa de la Unidad 2 del módulo de Desarrollo Frontend en el Instituto Profesional San Sebastián.

El sitio de referencia es [municholchol.cl](https://municholchol.cl). El objetivo de este proyecto es construir una nueva Home moderna, accesible e interactiva utilizando Next.js como framework principal, aplicando buenas prácticas de desarrollo frontend y cumpliendo los criterios de evaluación CE1 a CE8.

El enfoque está en mejorar la experiencia del vecino: información municipal clara, tramitación en línea accesible, agenda comunal visible y patrimonio local destacado, todo con un diseño responsivo que funcione bien en móvil, tablet y escritorio.

---

## Stack tecnológico

| Herramienta          | Versión |
| -------------------- | ------- |
| Next.js (App Router) | 15      |
| React                | 18      |
| TypeScript           | 5       |
| Tailwind CSS         | 3       |
| shadcn/ui            | latest  |
| Lucide React         | latest  |
| Sonner (toasts)      | latest  |

---

## Requisitos previos

- [Node.js](https://nodejs.org/) versión 20 (>= 20 y < 21)
- [Git](https://git-scm.com/)

> Podés verificar tu versión de Node con `node -v`. Si necesitás manejar varias versiones, podés usar [nvm](https://github.com/nvm-sh/nvm).

---

## Cómo clonar y ejecutar el proyecto

**1. Clonar el repositorio**

```bash
git clone https://github.com/ginans/municipalidad-cholchol-frontend-IPSS.git
cd municipalidad-cholchol-frontend-IPSS
```

**2. Instalar dependencias**

```bash
npm install
```

**3. Levantar el servidor de desarrollo**

```bash
npm run dev
```

Luego abrir [http://localhost:3000](http://localhost:3000) en el navegador. La página se actualiza automáticamente al guardar cambios.

---

## Otros comandos útiles

```bash
npm run build   # Genera el build de producción
npm run lint    # Ejecuta el linter (ESLint)
```

---

## Estructura del proyecto

```
app/
  layout.tsx              # Shell global (SidebarProvider, Toaster, footer)
  page.tsx                # Página de inicio

components/
  layout/
    app-sidebar.tsx       # Sidebar lateral con navegación
    site-navbar.tsx       # Navbar superior con logo y accesos
  sections/
    home-interactive.tsx  # Composición de secciones de la Home
    home/
      agenda-section.tsx          # Agenda comunal con toggle show/hide
      contact-section.tsx         # Formulario de contacto con validaciones
      home-banner-carousel.tsx    # Carrusel principal de banners
      home-data.ts                # Datos centralizados (servicios, agenda, galería, banners)
      municipio-section.tsx       # Sección Municipio (carrusel + agenda + servicios)
      patrimonio-section.tsx      # Galería fotográfica de patrimonio
      services-section.tsx        # Trámites y servicios con filtros y hover
  ui/                     # Componentes shadcn/ui (button, input, sidebar, carousel, sonner, etc.)

lib/
  utils.ts                # Utilidades (cn)
  nav-data.ts             # Links de navegación

public/
  cholchol/
    banners/              # Imágenes para el carrusel
    logos/                # Logo institucional
    patrimonio/           # Imágenes de patrimonio local

types/
  routes.d.ts             # Tipos de rutas generados por Next.js
```

---

## Imágenes

Todas las imágenes utilizadas fueron obtenidas del sitio oficial [municholchol.cl](https://municholchol.cl) con fines educativos.
