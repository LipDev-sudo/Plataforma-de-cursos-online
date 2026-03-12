import { useState } from "react";
import { GraduationCap, Menu, X } from "lucide-react";

const navLinks = ["Início", "Cursos", "Categorias", "Sobre", "Login"];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#6c3ce0] to-[#4f46e5] flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <span className="text-[1.15rem] text-foreground tracking-tight" style={{ fontWeight: 700 }}>
            Skill<span className="text-[#6c3ce0]">Flow</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-[0.9rem] text-muted-foreground hover:text-foreground transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <button className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#6c3ce0] to-[#4f46e5] text-white text-[0.875rem] hover:opacity-90 transition-opacity shadow-md shadow-[#6c3ce0]/25 cursor-pointer">
            Começar agora
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="block py-3 text-muted-foreground hover:text-foreground transition-colors border-b border-border last:border-0"
            >
              {link}
            </a>
          ))}
          <button className="mt-3 w-full px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#6c3ce0] to-[#4f46e5] text-white text-[0.875rem] hover:opacity-90 transition-opacity cursor-pointer">
            Começar agora
          </button>
        </div>
      )}
    </header>
  );
}
