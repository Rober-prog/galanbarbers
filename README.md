# Galán Barbers - Web Oficial

Web profesional para la barbería **Galán Barbers** ubicada en Vilafranca del Penedès, Barcelona.

## 🚀 Tecnologías

- **[Astro](https://astro.build/)** - Framework SSG para máximo rendimiento
- **[TailwindCSS](https://tailwindcss.com/)** - Utilidades CSS
- **[GSAP](https://greensock.com/gsap/)** + ScrollTrigger - Animaciones fluidas
- **TypeScript** - Tipado estático

## 📋 Requisitos

- Node.js 18+ (recomendado 20+)
- npm, pnpm o yarn

## 🛠️ Instalación

```bash
# Clonar o descargar el proyecto
cd galanbarbers

# Instalar dependencias
npm install
# o
pnpm install
```

## 💻 Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev

# El sitio estará disponible en http://localhost:4321
```

## 🏗️ Build

```bash
# Generar build de producción
npm run build

# Previsualizar build
npm run preview
```

## 📁 Estructura del Proyecto

```
galanbarbers/
├── public/
│   └── assets/           # Imágenes organizadas
│       ├── local/        # Fotos del local (LOC...)
│       ├── team/         # Fotos del equipo (TEAM...)
│       ├── works/        # Trabajos realizados (TRA...)
│       ├── LOGOPRINCIPAL.png
│       └── LOGOPEQUENOFOOTER.jpeg
├── src/
│   ├── components/       # Componentes Astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Services.astro
│   │   ├── Team.astro
│   │   ├── Works.astro
│   │   ├── Reviews.astro
│   │   ├── Schedule.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   └── FloatingCTA.astro
│   ├── config/
│   │   └── site.config.ts  # ⚡ EDITAR CONTENIDO AQUÍ
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── CONTENIDO.txt          # Fuente original del contenido
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── README.md
```

## ✏️ Editar Contenido

### Archivo principal: `src/config/site.config.ts`

Este archivo contiene **toda la información del negocio**:

- **Datos de contacto**: teléfono, dirección, WhatsApp
- **Horarios**: días y horas de apertura
- **Equipo**: nombres e imágenes de los barberos
- **Servicios**: precios por barbero
- **Reseñas**: testimonios de clientes
- **Redes sociales**: Instagram

### Cómo se parsea CONTENIDO.txt

El archivo `CONTENIDO.txt` es la fuente original. Los datos se han extraído manualmente a `site.config.ts` para:

1. **Servicios**: Organizados por barbero (Iván, Juan, Natanael)
2. **Horarios**: Convertidos a array con días y tramos
3. **Reseñas**: Parseadas del JSON original
4. **Contacto**: Dirección, teléfono, Instagram

Para actualizar contenido:

1. Modifica `CONTENIDO.txt` si quieres mantener el original
2. Actualiza `src/config/site.config.ts` con los nuevos datos
3. Reinicia el servidor de desarrollo

### Imágenes

Las imágenes se organizan por prefijo:

| Prefijo | Carpeta | Uso |
|---------|---------|-----|
| `LOC...` | `/public/assets/local/` | Fotos del local (hero, fondos) |
| `TEAM...` | `/public/assets/team/` | Fotos del equipo |
| `TRA...` | `/public/assets/works/` | Galería de trabajos |
| `LOGOPRINCIPAL` | `/public/assets/` | Logo hero |
| `LOGOPEQUENOFOOTER` | `/public/assets/` | Logo footer |

## 🎨 Personalización

### Colores (tailwind.config.mjs)

```javascript
colors: {
  'brand-black': '#0a0a0a',     // Negro principal (60%)
  'brand-white': '#fafafa',     // Blanco (30%)
  'brand-accent': '#c06b53',    // Acento 1 (5%)
  'brand-accent-light': '#f2ae74', // Acento 2 (5%)
}
```

### Tipografías

- **Display**: Oswald (titulares)
- **Body**: Inter (texto)

## 🔍 SEO

El sitio incluye:

- ✅ HTML semántico
- ✅ Meta tags (title, description, OG, Twitter)
- ✅ Schema.org JSON-LD (`BarberShop`)
- ✅ Canonical URL
- ✅ Lang="es-ES"
- ✅ Imágenes optimizadas con lazy-load

## ♿ Accesibilidad

- Respeta `prefers-reduced-motion`
- ARIA labels en elementos interactivos
- Navegación por teclado
- Contraste adecuado

## 🤖 Integración de Chatbot (Preparado)

El código incluye una sección comentada en `FloatingCTA.astro` preparada para integrar un chatbot de reservas. Busca el comentario:

```
SECCIÓN PREPARADA PARA CHATBOT DE RESERVAS
```

Incluye:
- Contenedor de montaje
- Configuración de ejemplo
- Eventos: `onOpen`, `onClose`, `onBookingConfirmed`

## 📱 Responsive

Diseño mobile-first con breakpoints:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## 📄 Licencia

Proyecto privado para Galán Barbers.
