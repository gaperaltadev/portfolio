# gaperalta.dev — Portfolio Personal

Portfolio personal de Gabriel Amarilla, Full-Stack Developer de Asunción, Paraguay.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Animaciones:** Framer Motion
- **Deploy:** Vercel

## Estructura

```
src/
├── app/
│   ├── page.tsx              # Página principal
│   ├── layout.tsx            # Layout global + metadata SEO
│   ├── globals.css           # Variables de diseño y estilos base
│   ├── opengraph-image.tsx   # OG image dinámica
│   ├── sitemap.ts            # Sitemap automático
│   └── robots.ts             # Robots.txt
└── components/
    ├── Header.tsx             # Navegación con scroll awareness
    ├── Hero.tsx               # Sección inicial con animaciones
    ├── About.tsx              # Sobre mí + timeline de experiencia
    ├── Projects.tsx           # Proyectos destacados
    ├── Skills.tsx             # Stack tecnológico por categoría
    ├── Contact.tsx            # Contacto y redes
    ├── Footer.tsx             # Footer
    └── icons.tsx              # Iconos SVG (GitHub, LinkedIn)
```

## Desarrollo local

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000) en el navegador.

## Deploy

Deploy automático en Vercel desde la rama `main`. Dominio: [gaperalta.dev](https://gaperalta.dev)
