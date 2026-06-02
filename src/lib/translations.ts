export type Locale = "es" | "en";

export interface ExperienceItem {
  period: string;
  role: string;
  description: string;
}

export interface ProjectItem {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Translations {
  nav: { inicio: string; sobreMi: string; proyectos: string; skills: string; contacto: string };
  hero: { location: string; role: string; bio: string; cta: string };
  about: { label: string; heading: string; bio1: string; bio2: string; bio3: string; expLabel: string; experience: ExperienceItem[] };
  projects: { label: string; heading: string; viewDemo: string; viewCode: string; items: ProjectItem[] };
  skills: { label: string; heading: string; categories: SkillCategory[] };
  contact: { label: string; heading: string; description: string; button: string };
}

export const translations: Record<Locale, Translations> = {
  es: {
    nav: {
      inicio: "Inicio",
      sobreMi: "Sobre mí",
      proyectos: "Proyectos",
      skills: "Skills",
      contacto: "Contacto",
    },
    hero: {
      location: "Asunción, Paraguay",
      role: "Full-stack developer. Construyo productos SaaS.",
      bio: "Más de 5 años construyendo aplicaciones web en fintech y SaaS — APIs, interfaces y lógica de negocio end-to-end. Hoy enfocado en mis propios productos.",
      cta: "Ver lo que estoy construyendo",
    },
    about: {
      label: "Sobre mí",
      heading: "Cómo trabajo",
      bio1: "Cinco años construyendo aplicaciones web: APIs, interfaces, lógica de negocio y deployment. Uso IA como parte del flujo de trabajo — acelera la iteración y me permite mantener el foco en lo que importa: construir bien.",
      bio2: "Pasé por fintech en España con equipos distribuidos, software factories en Asunción, y proyectos variados — CRMs, flujos de pago, herramientas internas.",
      bio3: "Hoy estoy enfocado en mis propios productos. BusinessPy es uno de ellos: un SaaS completo que diseñé, construí y mantengo.",
      expLabel: "Trayectoria",
      experience: [
        { period: "2024 — presente", role: "Full-Stack Developer — Proyecto propio", description: "Diseño y desarrollo de BusinessPy, un SaaS de gestión integral para negocios de servicios. Arquitectura completa, product design y deployment." },
        { period: "2024 — 2026", role: "Full-Stack Developer — Fintech (España)", description: "Desarrollo de features en una plataforma fintech bajo metodología Scrum. Implementación de interfaces, lógica de negocio y flujos de pago." },
        { period: "2023 — 2024", role: "Full-Stack Developer — DLS Technology (Asunción)", description: "Participación en múltiples proyectos para clientes, incluyendo sistemas CRM y herramientas internas." },
        { period: "2020 — 2022", role: "Full-Stack Developer — A.G. S.R.L. (Paraguay)", description: "Desarrollo full-stack de aplicaciones web, APIs y servicios backend. Primeras experiencias profesionales construyendo features end-to-end." },
      ],
    },
    projects: {
      label: "Proyectos",
      heading: "Lo que estoy construyendo",
      viewDemo: "Ver demo",
      viewCode: "Código",
      items: [
        { title: "BusinessPy", subtitle: "SaaS — Gestión de negocios", description: "Plataforma SaaS para negocios de servicios en Paraguay: spas, salones, barberías y clínicas. POS con múltiples medios de pago y descuentos automáticos, agenda visual con confirmación por WhatsApp, inventario con alertas de stock, gestión de personal con comisiones y herramientas financieras con cierre de caja diario. Disponible en tres planes con 30 días de prueba gratuita.", features: ["POS con descuentos automáticos", "Agenda + confirmación WhatsApp", "Inventario con alertas de stock", "Comisiones y rendimiento de equipo", "Logística con geolocalización", "Cierre de caja y balance diario"] },
        { title: "CGS Paraguay", subtitle: "Landing + Bot de WhatsApp", description: "Landing y catálogo para el representante oficial de lubricantes YPF en Paraguay. Backoffice para gestión de productos con Supabase. Bot de WhatsApp con la API oficial de Meta desplegado en Railway: vendedores y admins cargan productos, listan catálogo y registran ventas vía comandos y botones interactivos. Los mensajes se encolan en un webhook de n8n y un cron propio los procesa cada 2 segundos. Logs y errores monitoreados con Sentry.", features: ["Landing + catálogo YPF", "Backoffice de productos", "Bot WhatsApp (API Meta oficial)", "Comandos y botones interactivos", "Webhook n8n + cola de mensajes", "Sentry para logs y errores"] },
        { title: "Portal de Transparencia PY", subtitle: "Civic Tech — Datos abiertos", description: "Portal de datos abiertos que centraliza y visualiza transferencias del gobierno central a municipios paraguayos (FONACIDE, royalties, TGN). Cubre 5.726 billones de guaraníes en 5 años. Fuentes oficiales: Hacienda PY, datos.gov.py e INE. Muestra evolución histórica 2020–2024, gasto por categoría presupuestaria y comparativa entre municipios.", features: ["10 municipios piloto", "Evolución histórica 2020–2024", "Comparador de municipios", "Ranking per cápita", "Fuentes oficiales (Hacienda PY, INE)", "API REST propia"] },
      ],
    },
    skills: {
      label: "Skills",
      heading: "Tecnologías que uso",
      categories: [
        { title: "UI & Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "React Native"] },
        { title: "Backend & APIs", skills: ["Node.js", "Express.js", "REST APIs", "PostgreSQL", "Prisma", "Supabase"] },
        { title: "Auth & Pagos", skills: ["Firebase", "AWS Cognito", "Stripe", "Payretailers"] },
        { title: "Infra & QA", skills: ["Git", "GitHub Actions", "Vercel", "Railway", "Playwright E2E", "Sentry"] },
        { title: "Arquitectura & Producto", skills: ["Clean Architecture", "SOLID", "Figma", "Scrum", "Product Thinking"] },
      ],
    },
    contact: {
      label: "Contacto",
      heading: "Hablemos",
      description: "¿Tenés un proyecto en mente o querés colaborar? Escribime y te respondo lo antes posible.",
      button: "gaperalta.dev@gmail.com",
    },
  },
  en: {
    nav: {
      inicio: "Home",
      sobreMi: "About",
      proyectos: "Projects",
      skills: "Skills",
      contacto: "Contact",
    },
    hero: {
      location: "Asunción, Paraguay",
      role: "Full-stack developer. I build SaaS products.",
      bio: "5+ years building web applications in fintech and SaaS — APIs, interfaces, and business logic end-to-end. Now focused on my own products.",
      cta: "See what I'm building",
    },
    about: {
      label: "About me",
      heading: "How I work",
      bio1: "Five years building web applications: APIs, interfaces, business logic, and deployment. I use AI as part of my workflow — it speeds up iteration and lets me stay focused on what matters: building well.",
      bio2: "I've worked in fintech in Spain with distributed teams, software factories in Asunción, and varied projects — CRMs, payment flows, internal tools.",
      bio3: "Today I'm focused on my own products. BusinessPy is one of them: a complete SaaS I designed, built, and maintain.",
      expLabel: "Experience",
      experience: [
        { period: "2024 — present", role: "Full-Stack Developer — Own project", description: "Design and development of BusinessPy, a comprehensive SaaS for service businesses. Full architecture, product design, and deployment." },
        { period: "2024 — 2026", role: "Full-Stack Developer — Fintech (Spain)", description: "Feature development on a fintech platform under Scrum methodology. Implementation of UI, business logic, and payment flows." },
        { period: "2023 — 2024", role: "Full-Stack Developer — DLS Technology (Asunción)", description: "Participation in multiple client projects, including CRM systems and internal tools." },
        { period: "2020 — 2022", role: "Full-Stack Developer — A.G. S.R.L. (Paraguay)", description: "Full-stack development of web applications, APIs, and backend services. First professional experience building features end-to-end." },
      ],
    },
    projects: {
      label: "Projects",
      heading: "What I'm building",
      viewDemo: "Live demo",
      viewCode: "Code",
      items: [
        { title: "BusinessPy", subtitle: "SaaS — Business management", description: "SaaS platform for service businesses in Paraguay: spas, salons, barbershops, and clinics. POS with multi-payment support and automatic discounts, visual scheduling with WhatsApp confirmations, inventory with low-stock alerts, staff management with commissions, and financial tools with daily cash closures. Three subscription tiers with a 30-day free trial.", features: ["POS with automatic discounts", "Scheduling + WhatsApp confirmations", "Inventory with stock alerts", "Staff commissions & performance", "Logistics with geolocation", "Daily cash closure & balance"] },
        { title: "CGS Paraguay", subtitle: "Landing + WhatsApp Bot", description: "Landing and catalog for the official YPF lubricants distributor in Paraguay. Product backoffice powered by Supabase. WhatsApp bot using Meta's official API, deployed on Railway: sales reps and admins manage products, browse the catalog, and log sales via interactive commands and buttons. Messages are queued through an n8n webhook and processed by a custom backend cron every 2 seconds. Errors and logs tracked with Sentry.", features: ["Landing + YPF catalog", "Product backoffice", "WhatsApp Bot (Meta official API)", "Interactive commands & buttons", "n8n webhook + message queue", "Sentry error tracking"] },
        { title: "Transparency Portal PY", subtitle: "Civic Tech — Open data", description: "Open data portal centralizing central government transfers to Paraguayan municipalities (FONACIDE, royalties, TGN). Covers 5.7 trillion guaraníes over 5 years. Sources: Hacienda PY, datos.gov.py, and INE. Tracks historical evolution from 2020–2024, spending by budget category, and side-by-side municipality comparison.", features: ["10 pilot municipalities", "Historical data 2020–2024", "Municipality comparator", "Per capita spending ranking", "Official sources (Hacienda PY, INE)", "Own REST API"] },
      ],
    },
    skills: {
      label: "Skills",
      heading: "Technologies I use",
      categories: [
        { title: "UI & Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "React Native"] },
        { title: "Backend & APIs", skills: ["Node.js", "Express.js", "REST APIs", "PostgreSQL", "Prisma", "Supabase"] },
        { title: "Auth & Payments", skills: ["Firebase", "AWS Cognito", "Stripe", "Payretailers"] },
        { title: "Infra & QA", skills: ["Git", "GitHub Actions", "Vercel", "Railway", "Playwright E2E", "Sentry"] },
        { title: "Architecture & Product", skills: ["Clean Architecture", "SOLID", "Figma", "Scrum", "Product Thinking"] },
      ],
    },
    contact: {
      label: "Contact",
      heading: "Let's talk",
      description: "Have a project in mind or want to collaborate? Reach out and I'll get back to you as soon as possible.",
      button: "gaperalta.dev@gmail.com",
    },
  },
};
