export type NavItem = {
  label: string;
  href: string;
  description: string;
  external?: boolean;
};

export const transparencyLinks: NavItem[] = [
  {
    label: "Solicitar informacion",
    href: "https://www.portaltransparencia.cl/PortalPdT/ingreso-sai-v2?idOrg=498",
    description: "Ingreso a solicitud de acceso a informacion publica.",
    external: true,
  },
  {
    label: "Transparencia activa",
    href: "https://www.portaltransparencia.cl/PortalPdT/directorio-de-organismos-regulados/?org=MU045",
    description:
      "Consulta de informacion obligatoria publicada por el municipio.",
    external: true,
  },
  {
    label: "Plataforma Ley Lobby",
    href: "https://www.leylobby.gob.cl/instituciones/MU045",
    description:
      "Registro de audiencias y gestiones de intereses particulares.",
    external: true,
  },
];

export const mainLinks: NavItem[] = [
  {
    label: "Home",
    href: "#inicio",
    description: "Vista principal con accesos y contenidos destacados.",
  },
  {
    label: "Municipio",
    href: "#municipio",
    description: "Informacion institucional, servicios y gestion comunal.",
  },
  {
    label: "Patrimonio",
    href: "#patrimonio",
    description: "Identidad local, historia y elementos representativos.",
  },
  {
    label: "Contactos",
    href: "#contacto",
    description: "Canales de atencion para consultas y requerimientos.",
  },
];
