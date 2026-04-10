"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Send, MessageCircle } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./icons";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contacto" className="py-32 px-6" ref={ref}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">
            Contacto
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Hablemos<span className="text-accent">.</span>
          </h2>
          <p className="text-muted leading-relaxed max-w-md mx-auto mb-12">
            ¿Tenés un proyecto en mente o querés colaborar? Escribime y te
            respondo lo antes posible.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <a
            href="mailto:gaperalta.dev@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background font-medium rounded-full hover:bg-foreground/90 transition-colors text-sm"
          >
            <Send size={16} />
            gaperalta.dev@gmail.com
          </a>

          <div className="mt-12 flex items-center justify-center gap-8">
            <a
              href="https://github.com/gaperaltadev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
            >
              <GitHubIcon size={18} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/gabriel-amarilla-5916a9170/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
            >
              <LinkedInIcon size={18} />
              LinkedIn
            </a>
            <a
              href="mailto:gaperalta.dev@gmail.com"
              className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
            >
              <Mail size={18} />
              Email
            </a>
            <a
              href="https://wa.me/595986398117?text=Hola%20Gabriel%2C%20vi%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20conversar."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
