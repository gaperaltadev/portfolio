"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { useI18n } from "@/lib/i18n-context";

export default function About() {
  const { t } = useI18n();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [imgError, setImgError] = useState(false);

  return (
    <section id="sobre-mi" className="py-32 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">
            {t.about.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            {t.about.heading}<span className="text-accent">.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 mb-20"
        >
          <div className="shrink-0">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border border-border bg-card">
              {imgError ? (
                <div className="w-full h-full flex items-center justify-center bg-card">
                  <span className="text-2xl font-bold text-accent/40">GA</span>
                </div>
              ) : (
                <Image
                  src="https://github.com/gaperaltadev.png"
                  alt="Gabriel Amarilla"
                  width={96}
                  height={96}
                  className="object-cover"
                  onError={() => setImgError(true)}
                />
              )}
            </div>
          </div>

          <div className="max-w-xl">
            <p className="text-muted leading-relaxed mb-5">{t.about.bio1}</p>
            <p className="text-muted leading-relaxed mb-5">{t.about.bio2}</p>
            <p className="text-muted leading-relaxed">{t.about.bio3}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground mb-8">
            {t.about.expLabel}
          </h3>
          <div className="space-y-0">
            {t.about.experience.map((exp, i) => (
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
