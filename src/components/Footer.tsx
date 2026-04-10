export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} — Hecho con Next.js y desplegado en
          Vercel.
        </p>
        <p className="text-xs text-muted/50">
          Diseñado & desarrollado por mí.
        </p>
      </div>
    </footer>
  );
}
