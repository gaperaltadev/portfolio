"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./icons";

function FloatingNode({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) {
  return (
    <motion.div
      className="absolute rounded-full bg-accent/[0.07] border border-accent/[0.08]"
      style={{ left: x, top: y, width: size, height: size }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 1, 0],
        scale: [0.5, 1, 1, 0.5],
        y: [0, -15, 15, 0],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

function ConnectionLine({ x1, y1, x2, y2, delay }: { x1: string; y1: string; x2: string; y2: string; delay: number }) {
  return (
    <motion.svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.15, 0.15, 0] }}
      transition={{ duration: 8, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="currentColor"
        strokeWidth="0.5"
        className="text-accent"
      />
    </motion.svg>
  );
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-end pb-24 md:pb-32 px-6 overflow-hidden"
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(196,181,160,1) 1px, transparent 1px), linear-gradient(90deg, rgba(196,181,160,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial fade to hide grid edges */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--color-background)_75%)]" />

      {/* Floating nodes */}
      <FloatingNode delay={0} x="15%" y="20%" size={6} />
      <FloatingNode delay={1.5} x="75%" y="15%" size={4} />
      <FloatingNode delay={0.8} x="60%" y="45%" size={8} />
      <FloatingNode delay={2.2} x="25%" y="60%" size={5} />
      <FloatingNode delay={3} x="80%" y="70%" size={6} />
      <FloatingNode delay={1} x="45%" y="30%" size={4} />
      <FloatingNode delay={2.8} x="10%" y="80%" size={5} />
      <FloatingNode delay={0.5} x="90%" y="40%" size={7} />

      {/* Connection lines between nodes */}
      <ConnectionLine x1="15%" y1="20%" x2="45%" y2="30%" delay={0.3} />
      <ConnectionLine x1="45%" y1="30%" x2="75%" y2="15%" delay={1.2} />
      <ConnectionLine x1="60%" y1="45%" x2="80%" y2="70%" delay={0.8} />
      <ConnectionLine x1="25%" y1="60%" x2="60%" y2="45%" delay={2} />
      <ConnectionLine x1="10%" y1="80%" x2="25%" y2="60%" delay={2.5} />

      {/* Gradient accent glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-8 h-px bg-accent" />
          <span className="text-xs uppercase tracking-[0.3em] text-muted">
            Asunción, Paraguay
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
          Full-Stack Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-8 text-base text-muted/80 max-w-lg leading-relaxed"
        >
          +5 años construyendo aplicaciones web en fintech y SaaS.
          Actualmente creando mis propios productos.
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
            Ver proyectos &darr;
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
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
