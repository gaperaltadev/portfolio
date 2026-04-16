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
      role: "Full-Stack Developer",
      bio: "+5 años construyendo aplicaciones web en fintech y SaaS. Actualmente creando mis propios productos.",
      cta: "Ver proyectos",
    },
    about: {
      label: "Sobre mí",
      heading: "Contexto",
      bio1: "Soy Gabriel, desarrollador Full-Stack con más de 5 años de experiencia profesional. Los últimos dos años estuve enfocado en fintech, trabajando con un equipo distribuido para una empresa española — implementando features, manteniendo flujos de pago e iterando bajo Scrum.",
      bio2: "Antes de eso, pasé por desarrolladoras de software en Asunción donde trabajé en proyectos variados: CRMs, herramientas internas y aplicaciones web para distintos clientes.",
      bio3: "Hoy estoy construyendo mis propios productos. Uso agentes de IA como parte integral de mi flujo de desarrollo — desde scaffolding y refactoring hasta debugging y generación de código. Me interesa seguir explorando cómo la IA amplifica la capacidad de un developer individual.",
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
        { title: "Portfolio Personal", subtitle: "Web — CV Online", description: "Este mismo sitio. Portfolio minimalista y oscuro construido con Next.js, Tailwind CSS y Framer Motion. Desplegado en Vercel con dominio propio. Diseñado, desarrollado y mantenido por mí.", features: ["Animaciones scroll-aware", "Dark theme personalizado", "OG image dinámica", "Fully responsive", "Performance optimizado", "SEO completo"] },
      ],
    },
    skills: {
      label: "Skills",
      heading: "Tecnologías que uso",
      categories: [
        { title: "UI & Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "Framer Motion"] },
        { title: "Backend & APIs", skills: ["Node.js", "REST APIs", "PostgreSQL", "Prisma", "Auth & Payments"] },
        { title: "Infraestructura", skills: ["Git", "Vercel", "CI/CD", "Monorepos"] },
        { title: "Producto & UX", skills: ["UI/UX Design", "Figma", "Product Thinking", "Scrum"] },
        { title: "IA & Desarrollo", skills: ["AI Agents (Claude Code, Cursor)", "Prompt Engineering", "AI-assisted workflows", "Agent design & orchestration"] },
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
      role: "Full-Stack Developer",
      bio: "+5 years building web applications in fintech and SaaS. Currently creating my own products.",
      cta: "View projects",
    },
    about: {
      label: "About me",
      heading: "Background",
      bio1: "I'm Gabriel, a Full-Stack Developer with over 5 years of professional experience. The last two years I focused on fintech, working with a distributed team for a Spanish company — implementing features, maintaining payment flows, and iterating under Scrum.",
      bio2: "Before that, I worked at software development companies in Asunción on varied projects: CRMs, internal tools, and web applications for different clients.",
      bio3: "Today I'm building my own products. I use AI agents as an integral part of my development workflow — from scaffolding and refactoring to debugging and code generation. I'm interested in exploring how AI amplifies the capacity of an individual developer.",
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
        { title: "Personal Portfolio", subtitle: "Web — Online CV", description: "This very site. A minimal, dark portfolio built with Next.js, Tailwind CSS, and Framer Motion. Deployed on Vercel with a custom domain. Designed, developed, and maintained by me.", features: ["Scroll-aware animations", "Custom dark theme", "Dynamic OG image", "Fully responsive", "Performance optimized", "Full SEO"] },
      ],
    },
    skills: {
      label: "Skills",
      heading: "Technologies I use",
      categories: [
        { title: "UI & Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "Framer Motion"] },
        { title: "Backend & APIs", skills: ["Node.js", "REST APIs", "PostgreSQL", "Prisma", "Auth & Payments"] },
        { title: "Infrastructure", skills: ["Git", "Vercel", "CI/CD", "Monorepos"] },
        { title: "Product & UX", skills: ["UI/UX Design", "Figma", "Product Thinking", "Scrum"] },
        { title: "AI & Development", skills: ["AI Agents (Claude Code, Cursor)", "Prompt Engineering", "AI-assisted workflows", "Agent design & orchestration"] },
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
