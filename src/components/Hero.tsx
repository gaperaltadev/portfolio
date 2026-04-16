"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { useI18n } from "@/lib/i18n-context";

/** Lightweight canvas grid with drifting dots — no external resources, GPU-friendly */
function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width: number;
    let height: number;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio, 2);
      width = canvas!.clientWidth;
      height = canvas!.clientHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      ctx!.scale(dpr, dpr);
    }

    resize();
    setReady(true);

    const COLS = 18;
    const ROWS = 12;
    const accentRGB = [232, 160, 74]; // --color-accent

    // Create dots with slight random offsets
    const dots = Array.from({ length: COLS * ROWS }, (_, i) => {
      const col = i % COLS;
      const row = Math.floor(i / COLS);
      return {
        baseX: (col / (COLS - 1)) * 1.2 - 0.1,
        baseY: (row / (ROWS - 1)) * 1.2 - 0.1,
        phase: Math.random() * Math.PI * 2,
        speed: 0.3 + Math.random() * 0.4,
        amp: 0.006 + Math.random() * 0.008,
      };
    });

    function draw(time: number) {
      ctx!.clearRect(0, 0, width, height);

      const t = time * 0.001;

      for (const dot of dots) {
        const drift = prefersReducedMotion ? 0 : 1;
        const x = (dot.baseX + Math.sin(t * dot.speed + dot.phase) * dot.amp * drift) * width;
        const y = (dot.baseY + Math.cos(t * dot.speed * 0.7 + dot.phase) * dot.amp * drift) * height;

        // Distance from center for intensity falloff
        const cx = x / width - 0.5;
        const cy = y / height - 0.5;
        const dist = Math.sqrt(cx * cx + cy * cy);
        const alpha = Math.max(0, 0.12 - dist * 0.15);

        ctx!.beginPath();
        ctx!.arc(x, y, 1.2, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${accentRGB[0]},${accentRGB[1]},${accentRGB[2]},${alpha})`;
        ctx!.fill();
      }

      animationId = requestAnimationFrame(draw);
    }

    animationId = requestAnimationFrame(draw);

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [prefersReducedMotion]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: ready ? 1 : 0, transition: "opacity 0.8s ease-in" }}
        aria-hidden="true"
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
      <GridBackground />

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
