"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { useI18n } from "@/lib/i18n-context";

function MeshGradient() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient blobs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[150px] bg-accent/[0.06]"
        style={{ top: "10%", left: "15%" }}
        animate={
          prefersReducedMotion
            ? {}
            : {
                x: [0, 80, -40, 0],
                y: [0, -60, 40, 0],
              }
        }
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[140px] bg-blue-900/[0.04]"
        style={{ top: "30%", right: "10%" }}
        animate={
          prefersReducedMotion
            ? {}
            : {
                x: [0, -60, 50, 0],
                y: [0, 50, -30, 0],
              }
        }
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full blur-[120px] bg-accent/[0.04]"
        style={{ bottom: "10%", left: "40%" }}
        animate={
          prefersReducedMotion
            ? {}
            : {
                x: [0, 40, -60, 0],
                y: [0, -40, 20, 0],
              }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Noise/grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--color-background)_70%)]" />
    </div>
  );
}

export default function Hero() {
  const { t } = useI18n();

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-end pb-24 md:pb-32 px-6 overflow-hidden"
    >
      <MeshGradient />

      <div className="relative max-w-4xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-8 h-px bg-accent" />
          <span className="text-xs uppercase tracking-[0.3em] text-muted">
            {t.hero.location}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08]"
        >
          Gabriel Amarilla
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 text-xl md:text-2xl text-muted font-light tracking-tight"
        >
          {t.hero.role}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-8 text-base text-muted/80 max-w-lg leading-relaxed"
        >
          {t.hero.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex items-center gap-6"
        >
          <a
            href="https://github.com/gaperaltadev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <GitHubIcon size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/gabriel-amarilla-5916a9170/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={18} />
          </a>
          <span className="w-px h-4 bg-border" />
          <a
            href="#proyectos"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            {t.hero.cta} &darr;
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#sobre-mi"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 right-6 md:right-10 text-muted hover:text-foreground transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown size={16} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
