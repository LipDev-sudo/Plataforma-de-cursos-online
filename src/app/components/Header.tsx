import { useEffect, useState } from "react";
import { Menu, UserRound, Waypoints, X } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Percurso", href: "#percurso" },
  { label: "Recursos", href: "#recursos" },
  { label: "Como funciona", href: "#como-funciona" },
];

export function Header({ onOpenStudentArea }: { onOpenStudentArea: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:h-20 lg:px-12">
        <a href="#inicio" className="focus-ring flex items-center gap-2.5 rounded-lg" aria-label="Trilhara - início">
          <Waypoints className="h-8 w-8 text-primary" strokeWidth={2.25} aria-hidden="true" />
          <span className="text-xl font-extrabold tracking-[-0.035em] text-foreground sm:text-2xl">Trilhara</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="focus-ring rounded-lg px-4 py-2 text-sm font-semibold text-muted-foreground transition hover:bg-muted hover:text-primary">
              {link.label}
            </a>
          ))}
        </nav>

        <button className="focus-ring hidden min-h-11 items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition hover:bg-[#214a40] md:inline-flex" onClick={onOpenStudentArea}>
          <UserRound className="h-4 w-4" aria-hidden="true" /> Meu progresso
        </button>

        <button className="focus-ring inline-flex h-12 w-12 items-center justify-center rounded-xl border border-primary text-primary transition hover:bg-muted md:hidden" onClick={() => setMobileOpen((open) => !open)} aria-expanded={mobileOpen} aria-controls="mobile-navigation" aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}>
          {mobileOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </div>

      {mobileOpen && (
        <nav id="mobile-navigation" aria-label="Navegação mobile" className="border-t border-border bg-background px-5 pb-5 md:hidden">
          <div className="space-y-1 pt-3">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="focus-ring block min-h-12 rounded-xl px-4 py-3 font-semibold text-muted-foreground hover:bg-muted hover:text-primary">
                {link.label}
              </a>
            ))}
            <button className="focus-ring mt-2 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 font-bold text-primary-foreground" onClick={() => { setMobileOpen(false); onOpenStudentArea(); }}>
              <UserRound className="h-4 w-4" aria-hidden="true" /> Meu progresso
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
