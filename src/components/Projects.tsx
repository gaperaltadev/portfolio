"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "./icons";
import Image from "next/image";

const projects = [
  {
    title: "BusinessPy",
    subtitle: "SaaS — Gestión de negocios",
    description:
      "Plataforma integral para negocios de servicios: punto de venta, agenda de citas, reservas online, inventario, finanzas, gestión de equipo y más. Diseñada para spas, salones, barberías y cualquier negocio de servicios.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    features: [
      "Punto de venta (POS)",
      "Agenda y reservas online",
      "Inventario en tiempo real",
      "Finanzas y reportes",
      "Roles y permisos",
      "Linktree integrado",
    ],
    liveUrl: "https://businesspy.vercel.app",
    repoUrl: null, // Private repo
    image: null, // Add screenshot path here
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="proyectos" className="py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">
            Proyectos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16">
            Lo que estoy construyendo<span className="text-accent">.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-16">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 * (i + 1) }}
              className="group"
            >
              <div className="grid md:grid-cols-2 gap-0 rounded-2xl border border-border overflow-hidden bg-card">
                {/* Project image / placeholder */}
                <div className="aspect-video md:aspect-auto bg-gradient-to-br from-background to-card border-b md:border-b-0 md:border-r border-border relative overflow-hidden">
                  <Image
                    src="/business.webp"
                    alt="BusinessPy screenshot"
                    fill
                    className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>

                {/* Project info */}
                <div className="p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-accent mb-2">
                      {project.subtitle}
                    </p>
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="text-muted leading-relaxed text-sm mb-6">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
                      {project.features.map((f) => (
                        <p key={f} className="text-xs text-muted flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-accent inline-block" />
                          {f}
                        </p>
                      ))}
                    </div>

                    {/* Stack */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full border border-border text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors"
                      >
                        <ExternalLink size={16} />
                        Ver demo
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
                      >
                        <GitHubIcon size={16} />
                        Código
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
