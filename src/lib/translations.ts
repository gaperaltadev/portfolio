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
      role: "Construyo productos con IA y código",
      bio: "Full-stack developer con +5 años en fintech y SaaS. Uso agentes de IA para diseñar, construir y escalar productos — desde la idea hasta producción.",
      cta: "Ver lo que estoy construyendo",
    },
    about: {
      label: "Sobre mí",
      heading: "Cómo trabajo",
      bio1: "Trabajo con agentes de IA como motor central de mi flujo de desarrollo. No es un complemento — es cómo diseño arquitecturas, itero sobre features y llevo productos de cero a producción más rápido de lo que un equipo tradicional esperaría.",
      bio2: "+5 años como full-stack developer. Pasé por fintech en España con equipos distribuidos, software factories en Asunción, y proyectos variados — CRMs, flujos de pago, herramientas internas.",
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
        { title: "BusinessPy", subtitle: "SaaS — Gestión de negocios", description: "Plataforma integral para negocios de servicios: punto de venta, agenda de citas, reservas online, inventario, finanzas, gestión de equipo y más. Diseñada para spas, salones, barberías y cualquier negocio de servicios.", features: ["Punto de venta (POS)", "Agenda y reservas online", "Inventario en tiempo real", "Finanzas y reportes", "Roles y permisos", "Linktree integrado"] },
        { title: "Portal de Transparencia PY", subtitle: "Civic Tech — Datos abiertos", description: "Portal web de acceso libre que centraliza y visualiza datos de gasto público municipal de Paraguay. Permite a ciudadanos, periodistas y ONGs fiscalizar el gasto de sus municipios con datos claros y comparables.", features: ["Buscador de municipios", "Comparador municipal", "Gráficos de gastos", "Datos abiertos", "Mobile first", "Lenguaje ciudadano"] },
        { title: "Portfolio Personal", subtitle: "Web — CV Online", description: "Este mismo sitio. Portfolio minimalista y oscuro construido con Next.js, Tailwind CSS y Framer Motion. Desplegado en Vercel con dominio propio. Diseñado, desarrollado y mantenido por mí.", features: ["Animaciones scroll-aware", "Dark theme personalizado", "OG image dinámica", "Fully responsive", "Performance optimizado", "SEO completo"] },
      ],
    },
    skills: {
      label: "Skills",
      heading: "Tecnologías que uso",
      categories: [
        { title: "IA & Agentes", skills: ["Claude Code", "Cursor", "Prompt Engineering", "Diseño de agentes", "Orquestación multi-agente", "AI-assisted workflows"] },
        { title: "UI & Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "Framer Motion"] },
        { title: "Backend & APIs", skills: ["Node.js", "REST APIs", "PostgreSQL", "Prisma", "Auth & Payments"] },
        { title: "Infraestructura", skills: ["Git", "Vercel", "CI/CD", "Monorepos"] },
        { title: "Producto & UX", skills: ["UI/UX Design", "Figma", "Product Thinking", "Scrum"] },
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
      role: "I build products with AI and code",
      bio: "Full-stack developer with 5+ years in fintech and SaaS. I use AI agents to design, build, and scale products — from idea to production.",
      cta: "See what I'm building",
    },
    about: {
      label: "About me",
      heading: "How I work",
      bio1: "I work with AI agents as the core engine of my development workflow. It's not a complement — it's how I design architectures, iterate on features, and ship products from zero to production faster than a traditional team would expect.",
      bio2: "5+ years as a full-stack developer. I've worked in fintech in Spain with distributed teams, software factories in Asunción, and varied projects — CRMs, payment flows, internal tools.",
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
        { title: "BusinessPy", subtitle: "SaaS — Business management", description: "Comprehensive platform for service businesses: point of sale, appointment scheduling, online bookings, inventory, finances, team management and more. Built for spas, salons, barbershops, and any service business.", features: ["Point of Sale (POS)", "Scheduling & online bookings", "Real-time inventory", "Finances & reports", "Roles & permissions", "Built-in Linktree"] },
        { title: "Transparency Portal PY", subtitle: "Civic Tech — Open data", description: "A free-access web portal that centralizes and visualizes municipal public spending data in Paraguay. Enables citizens, journalists, and NGOs to monitor their municipalities' spending with clear, comparable data.", features: ["Municipality search", "Municipal comparator", "Spending charts", "Open data", "Mobile first", "Plain language"] },
        { title: "Personal Portfolio", subtitle: "Web — Online CV", description: "This very site. A minimal, dark portfolio built with Next.js, Tailwind CSS, and Framer Motion. Deployed on Vercel with a custom domain. Designed, developed, and maintained by me.", features: ["Scroll-aware animations", "Custom dark theme", "Dynamic OG image", "Fully responsive", "Performance optimized", "Full SEO"] },
      ],
    },
    skills: {
      label: "Skills",
      heading: "Technologies I use",
      categories: [
        { title: "AI & Agents", skills: ["Claude Code", "Cursor", "Prompt Engineering", "Agent design", "Multi-agent orchestration", "AI-assisted workflows"] },
        { title: "UI & Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "Framer Motion"] },
        { title: "Backend & APIs", skills: ["Node.js", "REST APIs", "PostgreSQL", "Prisma", "Auth & Payments"] },
        { title: "Infrastructure", skills: ["Git", "Vercel", "CI/CD", "Monorepos"] },
        { title: "Product & UX", skills: ["UI/UX Design", "Figma", "Product Thinking", "Scrum"] },
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
