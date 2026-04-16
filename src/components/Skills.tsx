"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useI18n } from "@/lib/i18n-context";
import {
  ReactIcon,
  NextjsIcon,
  TypeScriptIcon,
  TailwindIcon,
  HTMLCSSIcon,
  FramerIcon,
  NodejsIcon,
  APIIcon,
  PostgreSQLIcon,
  PrismaIcon,
  AuthIcon,
  GitIcon,
  VercelIcon,
  CICDIcon,
  MonorepoIcon,
  FigmaIcon,
  ProductIcon,
  ScrumIcon,
  AIIcon,
  PromptIcon,
} from "./icons";

type SkillIconComponent = React.FC<{ size?: number }>;

const skillIconMap: Record<string, SkillIconComponent> = {
  React: ReactIcon,
  "Next.js": NextjsIcon,
  TypeScript: TypeScriptIcon,
  "Tailwind CSS": TailwindIcon,
  "HTML/CSS": HTMLCSSIcon,
  "Framer Motion": FramerIcon,
  "Node.js": NodejsIcon,
  "REST APIs": APIIcon,
  PostgreSQL: PostgreSQLIcon,
  Prisma: PrismaIcon,
  "Auth & Payments": AuthIcon,
  "Auth & Pagos": AuthIcon,
  Git: GitIcon,
  Vercel: VercelIcon,
  "CI/CD": CICDIcon,
  Monorepos: MonorepoIcon,
  "UI/UX Design": FigmaIcon,
  "UI/UX Diseño": FigmaIcon,
  Figma: FigmaIcon,
  "Product Thinking": ProductIcon,
  Scrum: ScrumIcon,
  "AI Agents (Claude Code, Cursor)": AIIcon,
  "Claude Code": AIIcon,
  Cursor: AIIcon,
  "Prompt Engineering": PromptIcon,
  "AI-assisted workflows": AIIcon,
  "Agent design & orchestration": AIIcon,
  "Agent design": AIIcon,
  "Diseño de agentes": AIIcon,
  "Multi-agent orchestration": AIIcon,
  "Orquestación multi-agente": AIIcon,
  "Flujos asistidos por IA": AIIcon,
  "Diseño y orquestación de agentes": AIIcon,
};

const hoverContainerVariants = {
  rest: {},
  hover: {
    transition: { staggerChildren: 0.04 },
  },
};

const skillItemVariants = {
  rest: { x: 0 },
  hover: { x: 4 },
};

export default function Skills() {
  const { t } = useI18n();
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
            {t.skills.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16">
            {t.skills.heading}<span className="text-accent">.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.skills.categories.map((cat, i) => {
            const isHero = i === 0; // IA & Agentes = first card, takes 2x2
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
                className={
                  isHero
                    ? "sm:col-span-2 sm:row-span-2"
                    : ""
                }
              >
                <motion.div
                  variants={hoverContainerVariants}
                  initial="rest"
                  whileHover="hover"
                  className={`p-6 rounded-2xl border border-border h-full group ${
                    isHero
                      ? "bg-gradient-to-br from-accent/[0.08] to-card"
                      : "bg-card"
                  }`}
                >
                  <h3 className={`font-semibold uppercase tracking-widest text-foreground mb-5 ${
                    isHero ? "text-base" : "text-sm"
                  }`}>
                    {cat.title}
                  </h3>
                  <ul className={isHero ? "space-y-4" : "space-y-3"}>
                    {cat.skills.map((skill) => {
                      const Icon = skillIconMap[skill];
                      return (
                        <motion.li
                          key={skill}
                          variants={skillItemVariants}
                          className={`text-muted flex items-center gap-2.5 ${
                            isHero ? "text-sm md:text-base" : "text-sm"
                          }`}
                        >
                          {Icon ? (
                            <span className="text-accent/60 group-hover:text-accent/90 transition-colors duration-300 shrink-0">
                              <Icon size={isHero ? 18 : 15} />
                            </span>
                          ) : (
                            <span className="w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0" />
                          )}
                          {skill}
                        </motion.li>
                      );
                    })}
                  </ul>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
