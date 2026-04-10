import { GitHubIcon, LinkedInIcon } from "./icons";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} Gabriel Amarilla
        </p>
        <div className="flex items-center gap-5">
          <a href="https://github.com/gaperaltadev" target="_blank" rel="noopener noreferrer" className="text-muted/50 hover:text-foreground transition-colors" aria-label="GitHub"><GitHubIcon size={15} /></a>
          <a href="https://www.linkedin.com/in/gabriel-amarilla-5916a9170/" target="_blank" rel="noopener noreferrer" className="text-muted/50 hover:text-foreground transition-colors" aria-label="LinkedIn"><LinkedInIcon size={15} /></a>
          <a href="mailto:gaperalta.dev@gmail.com" className="text-muted/50 hover:text-foreground transition-colors" aria-label="Email"><Mail size={15} /></a>
        </div>
      </div>
    </footer>
  );
}
