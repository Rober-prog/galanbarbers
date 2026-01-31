/**
 * Configuración de internacionalización (i18n)
 * Idiomas: Español (es) y Catalán (ca)
 */

export const languages = {
  es: 'Español',
  ca: 'Català',
} as const;

export const defaultLang = 'es';

export type Language = keyof typeof languages;

export const translations = {
  es: {
    // Header
    nav: {
      services: 'Servicios',
      team: 'Equipo',
      works: 'Trabajos',
      reviews: 'Reseñas',
      schedule: 'Horario',
      contact: 'Contacto',
      book: 'Reservar',
      bookNow: 'Reservar cita',
      openMenu: 'Abrir menú',
    },
    // Hero
    hero: {
      tagline: 'Tu estilo, nuestra pasión',
      bookCta: 'Reservar cita',
    },
    // Services
    services: {
      sectionLabel: 'Nuestros servicios',
      sectionTitle: 'Servicios & Precios',
      viewServices: 'Ver servicios y precios',
      bookNow: 'Reservar ahora',
      close: 'Cerrar',
    },
    // Team
    team: {
      sectionLabel: 'Conoce a',
      sectionTitle: 'Nuestro Equipo',
      role: 'Barbero',
    },
    // Works
    works: {
      sectionLabel: 'Galería',
      sectionTitle: 'Nuestros Trabajos',
    },
    // Reviews
    reviews: {
      sectionLabel: 'Testimonios',
      sectionTitle: 'Lo que dicen nuestros clientes',
      service: 'Servicio',
      barber: 'Barbero',
    },
    // Schedule
    schedule: {
      sectionLabel: 'Visítanos',
      sectionTitle: 'Horario',
      days: {
        monday: 'Lunes',
        tuesday: 'Martes',
        wednesday: 'Miércoles',
        thursday: 'Jueves',
        friday: 'Viernes',
        saturday: 'Sábado',
        sunday: 'Domingo',
      },
      closed: 'Cerrado',
      and: 'y',
    },
    // Contact
    contact: {
      sectionLabel: 'Encuéntranos',
      sectionTitle: 'Contacto',
      phone: 'Teléfono',
      address: 'Dirección',
      followUs: 'Síguenos',
      callUs: 'Llámanos',
      writeUs: 'Escríbenos',
      viewMap: 'Ver en mapa',
    },
    // Footer
    footer: {
      rights: 'Todos los derechos reservados',
      privacy: 'Política de privacidad',
      legal: 'Aviso legal',
    },
    // Floating CTA
    floatingCta: {
      book: 'Reservar',
    },
    // Language selector
    language: {
      select: 'Idioma',
      es: 'Español',
      ca: 'Català',
    },
  },
  ca: {
    // Header
    nav: {
      services: 'Serveis',
      team: 'Equip',
      works: 'Treballs',
      reviews: 'Ressenyes',
      schedule: 'Horari',
      contact: 'Contacte',
      book: 'Reservar',
      bookNow: 'Reservar cita',
      openMenu: 'Obrir menú',
    },
    // Hero
    hero: {
      tagline: 'El teu estil, la nostra passió',
      bookCta: 'Reservar cita',
    },
    // Services
    services: {
      sectionLabel: 'Els nostres serveis',
      sectionTitle: 'Serveis i Preus',
      viewServices: 'Veure serveis i preus',
      bookNow: 'Reservar ara',
      close: 'Tancar',
    },
    // Team
    team: {
      sectionLabel: 'Coneix a',
      sectionTitle: 'El Nostre Equip',
      role: 'Barber',
    },
    // Works
    works: {
      sectionLabel: 'Galeria',
      sectionTitle: 'Els Nostres Treballs',
    },
    // Reviews
    reviews: {
      sectionLabel: 'Testimonis',
      sectionTitle: 'El que diuen els nostres clients',
      service: 'Servei',
      barber: 'Barber',
    },
    // Schedule
    schedule: {
      sectionLabel: 'Visita\'ns',
      sectionTitle: 'Horari',
      days: {
        monday: 'Dilluns',
        tuesday: 'Dimarts',
        wednesday: 'Dimecres',
        thursday: 'Dijous',
        friday: 'Divendres',
        saturday: 'Dissabte',
        sunday: 'Diumenge',
      },
      closed: 'Tancat',
      and: 'i',
    },
    // Contact
    contact: {
      sectionLabel: 'Troba\'ns',
      sectionTitle: 'Contacte',
      phone: 'Telèfon',
      address: 'Adreça',
      followUs: 'Segueix-nos',
      callUs: 'Truca\'ns',
      writeUs: 'Escriu-nos',
      viewMap: 'Veure al mapa',
    },
    // Footer
    footer: {
      rights: 'Tots els drets reservats',
      privacy: 'Política de privacitat',
      legal: 'Avís legal',
    },
    // Floating CTA
    floatingCta: {
      book: 'Reservar',
    },
    // Language selector
    language: {
      select: 'Idioma',
      es: 'Español',
      ca: 'Català',
    },
  },
} as const;

// Traducciones de servicios
export const serviceTranslations = {
  es: {
    'Corte de cabello + lavado': 'Corte de cabello + lavado',
    'Corte de cabello + lavado + cejas': 'Corte de cabello + lavado + cejas',
    'Arreglo de barba': 'Arreglo de barba',
    'Rapado todo al mismo número': 'Rapado todo al mismo número',
    'Corte de cabello + lavado + arreglo de barba': 'Corte de cabello + lavado + arreglo de barba',
    'Rapado + afeitado + arreglo de barba': 'Rapado + afeitado + arreglo de barba',
    'Rapado o afeitado + arreglo de barba': 'Rapado o afeitado + arreglo de barba',
    'Corte de niño': 'Corte de niño',
    'Especial chicas': 'Especial chicas',
    'Martes y Miércoles': 'Martes y Miércoles',
    'Jueves, Viernes y Sábado': 'Jueves, Viernes y Sábado',
  },
  ca: {
    'Corte de cabello + lavado': 'Tall de cabell + rentat',
    'Corte de cabello + lavado + cejas': 'Tall de cabell + rentat + celles',
    'Arreglo de barba': 'Arranjament de barba',
    'Rapado todo al mismo número': 'Rapat tot al mateix número',
    'Corte de cabello + lavado + arreglo de barba': 'Tall de cabell + rentat + arranjament de barba',
    'Rapado + afeitado + arreglo de barba': 'Rapat + afaitat + arranjament de barba',
    'Rapado o afeitado + arreglo de barba': 'Rapat o afaitat + arranjament de barba',
    'Corte de niño': 'Tall de nen',
    'Especial chicas': 'Especial noies',
    'Martes y Miércoles': 'Dimarts i Dimecres',
    'Jueves, Viernes y Sábado': 'Dijous, Divendres i Dissabte',
  },
} as const;

// Función helper para obtener traducciones
export function t(lang: Language) {
  return translations[lang];
}

// Función helper para traducir servicios
export function tService(lang: Language, serviceName: string): string {
  const trans = serviceTranslations[lang] as Record<string, string>;
  return trans[serviceName] || serviceName;
}

// Función para obtener el idioma de localStorage o por defecto
export function getStoredLanguage(): Language {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('language') as Language;
    if (stored && (stored === 'es' || stored === 'ca')) {
      return stored;
    }
  }
  return defaultLang;
}

// Función para guardar idioma
export function setStoredLanguage(lang: Language): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', lang);
  }
}
