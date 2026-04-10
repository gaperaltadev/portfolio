"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const experience = [
  {
    period: "2024 — presente",
    role: "Full-Stack Developer — Proyecto propio",
    description:
      "Diseño y desarrollo de BusinessPy, un SaaS de gestión integral para negocios de servicios. Arquitectura completa, product design y deployment.",
  },
  {
    period: "2024 — 2026",
    role: "Full-Stack Developer — Fintech (España)",
    description:
      "Desarrollo de features en una plataforma fintech bajo metodología Scrum. Implementación de interfaces, lógica de negocio y flujos de pago.",
  },
  {
    period: "2023 — 2024",
    role: "Full-Stack Developer — DLS Technology (Asunción)",
    description:
      "Participación en múltiples proyectos para clientes, incluyendo sistemas CRM y herramientas internas.",
  },
  {
    period: "2020 — 2022",
    role: "Full-Stack Developer — A.G. S.R.L. (Paraguay)",
    description:
      "Desarrollo full-stack de aplicaciones web, APIs y servicios backend. Primeras experiencias profesionales construyendo features end-to-end.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre-mi" className="py-32 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">
            Sobre mí
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Contexto<span className="text-accent">.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex items-start gap-8 mb-20"
        >
          {/* Avatar */}
          <div className="shrink-0 hidden md:block">
            <div className="w-24 h-24 rounded-2xl overflow-hidden border border-border bg-card">
              <Image
                src="https://github.com/gaperaltadev.png"
                alt="Gabriel Amarilla"
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
          </div>

          <div className="max-w-xl">
          <p className="text-muted leading-relaxed mb-5">
            Soy Gabriel, desarrollador Full-Stack con más de 3 años de
            experiencia profesional. Los últimos dos años estuve enfocado en
            fintech, trabajando con un equipo distribuido para una empresa
            española — implementando features, manteniendo flujos de pago e
            iterando bajo Scrum.
          </p>
          <p className="text-muted leading-relaxed mb-5">
            Antes de eso, pasé por desarrolladoras de software en Asunción donde
            trabajé en proyectos variados: CRMs, herramientas internas y
            aplicaciones web para distintos clientes.
          </p>
          <p className="text-muted leading-relaxed">
            Hoy estoy construyendo mis propios productos. Uso agentes de IA como
            parte integral de mi flujo de desarrollo — desde scaffolding y
            refactoring hasta debugging y generación de código. Me interesa
            seguir explorando cómo la IA amplifica la capacidad de un developer
            individual.
          </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground mb-8">
            Trayectoria
          </h3>
          <div className="space-y-0">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
                className="grid md:grid-cols-[160px_1fr] gap-4 md:gap-8 py-6 border-t border-border"
              >
                <p className="text-xs text-muted/60 font-mono pt-1">
                  {exp.period}
                </p>
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">
                    {exp.role}
                  </p>
                  <p className="text-sm text-muted leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
