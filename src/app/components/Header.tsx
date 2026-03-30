import { useState, useEffect } from "react";
import { GraduationCap, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "Inicio", href: "#" },
  { label: "Cursos", href: "#cursos" },
  { label: "Categorias", href: "#categorias" },
  { label: "Depoimentos", href: "#depoimentos" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-[#7C3AED]/5 border-b border-[#7C3AED]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-18">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#3B82F6] flex items-center justify-center shadow-lg shadow-[#7C3AED]/25 group-hover:shadow-[#7C3AED]/40 transition-shadow duration-300">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl text-[#1E293B] tracking-tight font-bold">
            Skill<span className="bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] bg-clip-text text-transparent">Flow</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative px-4 py-2 text-sm text-[#64748B] hover:text-[#7C3AED] transition-all duration-300 rounded-lg hover:bg-gradient-to-r hover:from-[#7C3AED]/5 hover:to-[#3B82F6]/5 font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm text-[#64748B] hover:text-[#7C3AED] transition-colors duration-300 font-medium px-4 py-2">
            Login
          </a>
          <button className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] text-white text-sm font-semibold hover:shadow-xl hover:shadow-[#7C3AED]/30 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer relative overflow-hidden group">
            <span className="relative z-10">Comece Gratis</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] to-[#7C3AED] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#1E293B] cursor-pointer p-2 rounded-lg hover:bg-[#7C3AED]/5 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/98 backdrop-blur-xl border-t border-[#7C3AED]/10 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block py-3 px-4 text-[#64748B] hover:text-[#7C3AED] hover:bg-gradient-to-r hover:from-[#7C3AED]/5 hover:to-[#3B82F6]/5 rounded-xl transition-all duration-300 font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-[#7C3AED]/10 space-y-2">
                <a href="#" className="block py-3 px-4 text-[#64748B] hover:text-[#7C3AED] font-medium transition-colors">
                  Login
                </a>
                <button className="w-full px-5 py-3 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] text-white text-sm font-semibold cursor-pointer hover:shadow-lg hover:shadow-[#7C3AED]/25 transition-shadow">
                  Comece Gratis
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
