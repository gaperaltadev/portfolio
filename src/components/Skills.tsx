"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    title: "UI & Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "Framer Motion"],
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "REST APIs", "PostgreSQL", "Prisma", "Auth & Payments"],
  },
  {
    title: "Infraestructura",
    skills: ["Git", "Vercel", "CI/CD", "Monorepos"],
  },
  {
    title: "Producto & UX",
    skills: ["UI/UX Design", "Figma", "Product Thinking", "Scrum"],
  },
  {
    title: "IA & Desarrollo",
    skills: ["AI Agents (Copilot, Cursor)", "Prompt Engineering", "AI-assisted workflows", "Code generation"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">
            Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16">
            Tecnologías que uso<span className="text-accent">.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
              className="p-6 rounded-2xl border border-border bg-card"
            >
              <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground mb-5">
                {cat.title}
              </h3>
              <ul className="space-y-3">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-muted flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
