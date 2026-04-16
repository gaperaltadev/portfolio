"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n-context";

export default function Header() {
  const { t, locale, setLocale } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#inicio", label: t.nav.inicio },
    { href: "#sobre-mi", label: t.nav.sobreMi },
    { href: "#proyectos", label: t.nav.proyectos },
    { href: "#skills", label: t.nav.skills },
    { href: "#contacto", label: t.nav.contacto },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#inicio"
          className="text-lg font-semibold tracking-tight text-foreground hover:text-accent transition-colors"
        >
          gaperalta<span className="text-accent">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Language toggle */}
          <div className="flex items-center gap-1 text-xs font-mono">
            <button
              onClick={() => setLocale("es")}
              className={`px-1.5 py-0.5 transition-colors ${
                locale === "es"
                  ? "text-foreground"
                  : "text-muted/40 hover:text-muted"
              }`}
              aria-label="Español"
            >
              ES
            </button>
            <span className="text-border">|</span>
            <button
              onClick={() => setLocale("en")}
              className={`px-1.5 py-0.5 transition-colors ${
                locale === "en"
                  ? "text-foreground"
                  : "text-muted/40 hover:text-muted"
              }`}
              aria-label="English"
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-muted hover:text-foreground transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-border overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              {/* Language toggle mobile */}
              <li className="flex items-center gap-2 pt-2 border-t border-border">
                <button
                  onClick={() => { setLocale("es"); setMenuOpen(false); }}
                  className={`text-xs font-mono px-1.5 py-0.5 transition-colors ${locale === "es" ? "text-foreground" : "text-muted/40"}`}
                >
                  ES
                </button>
                <span className="text-border text-xs">|</span>
                <button
                  onClick={() => { setLocale("en"); setMenuOpen(false); }}
                  className={`text-xs font-mono px-1.5 py-0.5 transition-colors ${locale === "en" ? "text-foreground" : "text-muted/40"}`}
                >
                  EN
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
