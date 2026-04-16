"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "./icons";
import Image from "next/image";
import { useI18n } from "@/lib/i18n-context";

const projectMeta = [
  {
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://businesspy.vercel.app",
    repoUrl: null,
    image: "/business.webp",
  },
  {
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
    liveUrl: "https://portal-transparencia-py.vercel.app",
    repoUrl: null,
    image: "/portal-transparencia.webp",
  },
  {
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://gaperalta.dev",
    repoUrl: "https://github.com/gaperaltadev/portfolio",
    image: "/portfolio.webp",
  },
];

export default function Projects() {
  const { t } = useI18n();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = t.projects.items.map((item, i) => ({
    ...item,
    ...projectMeta[i],
  }));

  return (
    <section id="proyectos" className="py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">
            {t.projects.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16">
            {t.projects.heading}<span className="text-accent">.</span>
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
                <div className="aspect-video md:aspect-auto bg-gradient-to-br from-background to-card border-b md:border-b-0 md:border-r border-border relative overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      fill
                      className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl font-bold text-accent/10 select-none">{project.title[0]}</span>
                    </div>
                  )}
                </div>

                <div className="p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-accent mb-2">
                      {project.subtitle}
                    </p>
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="text-muted leading-relaxed text-sm mb-6">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
                      {project.features.map((f) => (
                        <p key={f} className="text-xs text-muted flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-accent inline-block" />
                          {f}
                        </p>
                      ))}
                    </div>

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

                  <div className="flex items-center gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors"
                      >
                        <ExternalLink size={16} />
                        {t.projects.viewDemo}
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
                        {t.projects.viewCode}
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
