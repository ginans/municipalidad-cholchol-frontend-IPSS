export type Service = {
  id: string;
  title: string;
  category: "social" | "permiso" | "emergencia";
  description: string;
  online: boolean;
  procedureUrl: string;
  address?: string;
};

export const services: Service[] = [
  {
    id: "s1",
    title: "Subsidio Social",
    category: "social",
    description: "Postulacion y seguimiento de ayudas sociales comunales.",
    online: true,
    procedureUrl: "https://municholchol.cl/",
  },
  {
    id: "s2",
    title: "Permiso de Circulacion",
    category: "permiso",
    description: "Renovacion y consulta del estado de permisos vehiculares.",
    online: true,
    procedureUrl: "https://municholchol.cl/",
  },
  {
    id: "s3",
    title: "Patentes Comerciales",
    category: "permiso",
    description: "Gestion de inicio, renovacion y descarga de comprobantes.",
    online: false,
    procedureUrl: "https://municholchol.cl/",
    address: "Oficina de Rentas y Patentes, Av. Libertad 590, Cholchol",
  },
  {
    id: "s4",
    title: "Alerta Comunitaria",
    category: "emergencia",
    description: "Canal para reportar emergencias y coordinar respuesta local.",
    online: true,
    procedureUrl: "https://municholchol.cl/",
  },
  {
    id: "s5",
    title: "Adulto Mayor",
    category: "social",
    description:
      "Inscripcion a talleres, beneficios y acompanamiento territorial.",
    online: false,
    procedureUrl: "https://municholchol.cl/",
    address:
      "DIDECO, Centro Comunitario Municipal, Av. Libertad 590, Cholchol",
  },
];

export const agendaBase = [
  "Feria de emprendedoras - Plaza de Cholchol (Sabado)",
  "Operativo de reciclaje electronico - Sector Sur (Domingo)",
  "Taller de cueca familiar - Gimnasio Municipal (Miercoles)",
];

export const heritageGallery = [
  {
    src: "/cholchol/patrimonio/plaza_frontis_1200.jpg",
    title: "Plaza y frontis municipal",
  },
  {
    src: "/cholchol/patrimonio/puente_1_1200.jpg",
    title: "Puente historico de Cholchol",
  },
  {
    src: "/cholchol/patrimonio/cruce_en_balsa.jpg",
    title: "Cruce en balsa del territorio",
  },
];

export const bannerSlides = [
  {
    src: "/cholchol/banners/banner_1920x600_1024.png",
    title: "Banner institucional principal",
  },
  {
    src: "/cholchol/banners/dividido_1920.jpg",
    title: "Panoramica comunal",
  },
  {
    src: "/cholchol/banners/banner_pago_1024.png",
    title: "Informacion de pago municipal",
  },
  {
    src: "/cholchol/banners/youtube_banner_800.png",
    title: "Canal municipal",
  },
  {
    src: "/cholchol/banners/permiso_circulacion.png",
    title: "Permiso de circulacion",
  },
];
