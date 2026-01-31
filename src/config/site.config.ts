/**
 * Configuración del sitio Galán Barbers
 * Todos los datos extraídos de CONTENIDO.txt
 * Edita este archivo para actualizar información del negocio
 */

export const siteConfig = {
  // Nombre comercial (inferido del Instagram)
  name: "Galán Barbers",
  
  // Claim / Tagline (genérico, no factual)
  tagline: "Tu estilo, nuestra pasión",
  
  // SEO
  seo: {
    title: "Galán Barbers | Barbería en Vilafranca del Penedès",
    description: "Barbería profesional en Vilafranca del Penedès. Cortes de cabello, arreglo de barba y servicios premium. Reserva tu cita.",
    locale: "es_ES",
    type: "website",
  },

  // Contacto
  contact: {
    phone: "695 96 92 11",
    phoneClean: "34695969211", // Para WhatsApp con prefijo España
    phoneTel: "+34695969211", // Para tel:
    address: "Rambla de Nostra Senyora, 29",
    postalCode: "08720",
    city: "Vilafranca del Penedès",
    province: "Barcelona",
    country: "ES",
    fullAddress: "Rambla de Nostra Senyora, 29, 08720 Vilafranca del Penedès, Barcelona",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rambla+de+Nostra+Senyora+29+08720+Vilafranca+del+Penedes+Barcelona",
  },

  // Redes sociales
  social: {
    instagram: "https://www.instagram.com/galan_barbers/?hl=es",
    instagramHandle: "@galan_barbers",
  },

  // Horarios
  schedule: [
    { day: "Lunes", hours: "Cerrado", closed: true },
    { day: "Martes", hours: "10:00–14:15 y 15:00–19:00", closed: false, opens: "10:00", closes: "19:00" },
    { day: "Miércoles", hours: "10:00–14:15 y 15:00–19:00", closed: false, opens: "10:00", closes: "19:00" },
    { day: "Jueves", hours: "10:00–14:15 y 15:00–19:00", closed: false, opens: "10:00", closes: "19:00" },
    { day: "Viernes", hours: "10:00–14:15 y 15:00–19:00", closed: false, opens: "10:00", closes: "19:00" },
    { day: "Sábado", hours: "09:00–14:00", closed: false, opens: "09:00", closes: "14:00" },
    { day: "Domingo", hours: "Cerrado", closed: true },
  ],

  // Equipo de barberos
  team: [
    { 
      id: "ivan",
      name: "Iván Martínez Galán",
      shortName: "Iván",
      role: "Barbero",
      image: "/galanbarbers/assets/team/TEAM1.png"
    },
    { 
      id: "juan",
      name: "Juan Martínez Galán",
      shortName: "Juan",
      role: "Barbero",
      image: "/galanbarbers/assets/team/TEAM2.png"
    },
    { 
      id: "natanael",
      name: "Natanael",
      shortName: "Natanael",
      role: "Barbero",
      image: "/galanbarbers/assets/team/TEAM3.png"
    },
  ],

  // Servicios por barbero
  services: {
    ivan: {
      barberId: "ivan",
      barberName: "Iván Martínez Galán",
      items: [
        { name: "Corte de cabello + lavado", price: 16, tag: null },
        { name: "Corte de cabello + lavado + cejas", price: 18, tag: null },
        { name: "Arreglo de barba", price: 12, tag: null },
        { name: "Rapado todo al mismo número", price: 8, tag: "MAR-MIÉ", note: "Martes y Miércoles" },
        { name: "Rapado todo al mismo número", price: 10, tag: "JUE-SÁB", note: "Jueves, Viernes y Sábado" },
        { name: "Corte de cabello + lavado + arreglo de barba", price: 23, tag: null },
        { name: "Rapado + afeitado + arreglo de barba", price: 19, tag: null },
        { name: "Corte de niño", price: 12, tag: null },
        { name: "Arreglo de barba", price: 15, tag: "Premium" },
        { name: "Corte de cabello + lavado + arreglo de barba", price: 30, tag: "VIP" },
        { name: "Especial chicas", price: 10, tag: null },
      ]
    },
    juan: {
      barberId: "juan",
      barberName: "Juan Martínez Galán",
      items: [
        { name: "Corte de cabello + lavado", price: 16, tag: null },
        { name: "Corte de cabello + lavado + cejas", price: 18, tag: null },
        { name: "Arreglo de barba", price: 12, tag: null },
        { name: "Rapado todo al mismo número", price: 8, tag: "MAR-MIÉ", note: "Martes y Miércoles" },
        { name: "Rapado todo al mismo número", price: 10, tag: "JUE-SÁB", note: "Jueves, Viernes y Sábado" },
        { name: "Corte de cabello + lavado + arreglo de barba", price: 23, tag: null },
        { name: "Rapado + afeitado + arreglo de barba", price: 19, tag: null },
        { name: "Corte de niño", price: 12, tag: null },
        { name: "Arreglo de barba", price: 15, tag: "Premium" },
        { name: "Corte de cabello + lavado + arreglo de barba", price: 30, tag: "VIP" },
        { name: "Especial chicas", price: 10, tag: null },
      ]
    },
    natanael: {
      barberId: "natanael",
      barberName: "Natanael",
      items: [
        { name: "Corte de cabello + lavado", price: 16, tag: null },
        { name: "Rapado todo al mismo número", price: 8, tag: "MAR-MIÉ", note: "Martes y Miércoles" },
        { name: "Rapado todo al mismo número", price: 10, tag: "JUE-SÁB", note: "Jueves, Viernes y Sábado" },
        { name: "Corte de cabello + lavado + arreglo de barba", price: 23, tag: null },
        { name: "Rapado o afeitado + arreglo de barba", price: 19, tag: null },
        { name: "Corte de niño", price: 12, tag: null },
      ]
    }
  },

  // Reseñas
  reviews: [
    {
      reviewerName: "Iván T.",
      date: "Ene. 27, 2026",
      rating: 5,
      service: "Corte de cabello + lavado",
      barber: "Natanael",
      text: "Muy buen trato y muy detallistas. Me he sentido muy cómodo."
    },
    {
      reviewerName: "Humberto V.",
      date: "Ene. 24, 2026",
      rating: 5,
      service: "Corte de cabello + lavado",
      barber: "Natanael",
      text: "Super"
    },
    {
      reviewerName: "Pablo G.",
      date: "Ene. 22, 2026",
      rating: 5,
      service: "Corte de cabello + lavado",
      barber: "Ivan Martinez Galan",
      text: "Excelentes profesionales!!!"
    },
    {
      reviewerName: "Ofelio D.",
      date: "Ene. 18, 2026",
      rating: 5,
      service: "Corte de niño",
      barber: "Natanael",
      text: "Todo ha sido muy guay y el peluquero me ha tratado muy bien aparte de que me ha hecho un corte y le ha salido muy bien"
    }
  ],

  // Imágenes (agrupadas por prefijo)
  images: {
    logo: {
      main: "/galanbarbers/assets/LOGOPRINCIPAL.png",
      footer: "/galanbarbers/assets/LOGOPEQUENOFOOTER.jpeg"
    },
    local: [
      "/galanbarbers/assets/local/LOC1.jpeg",
      "/galanbarbers/assets/local/LOC2.jpeg"
    ],
    team: [
      "/galanbarbers/assets/team/TEAM1.png",
      "/galanbarbers/assets/team/TEAM2.png",
      "/galanbarbers/assets/team/TEAM3.png",
      "/galanbarbers/assets/team/TEAM4.png"
    ],
    works: [
      "/galanbarbers/assets/works/TRA1.jpeg",
      "/galanbarbers/assets/works/TRA2.jpeg",
      "/galanbarbers/assets/works/TRA3.jpeg",
      "/galanbarbers/assets/works/TRA4.jpeg"
    ]
  }
} as const;

export type SiteConfig = typeof siteConfig;
