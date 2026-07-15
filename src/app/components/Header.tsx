import { useEffect, useState } from "react";
import { GraduationCap, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Curso demo", href: "#cursos" },
  { label: "Recursos", href: "#recursos" },
  { label: "Como funciona", href: "#como-funciona" },
];

export function Header({ onOpenStudentArea }: { onOpenStudentArea: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 border-b transition-all duration-300 ${scrolled ? "border-violet-100 bg-white/95 shadow-lg shadow-violet-950/5 backdrop-blur-xl" : "border-transparent bg-white"}`}>
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="focus-ring flex items-center gap-2.5 rounded-xl" aria-label="SkillFlow - início">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-700 to-blue-600 shadow-lg shadow-violet-700/20"><GraduationCap className="h-5 w-5 text-white" /></span>
          <span className="text-xl font-bold tracking-tight text-slate-900">Skill<span className="text-violet-700">Flow</span></span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegação principal">
          {navLinks.map((link) => <a key={link.href} href={link.href} className="focus-ring rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-violet-50 hover:text-violet-700">{link.label}</a>)}
        </nav>

        <div className="hidden md:block"><button className="focus-ring min-h-11 rounded-xl bg-gradient-to-r from-violet-700 to-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-violet-700/20 transition hover:-translate-y-0.5 hover:shadow-xl" onClick={onOpenStudentArea}>Área do aluno</button></div>

        <button className="focus-ring rounded-xl p-2 text-slate-900 hover:bg-violet-50 md:hidden" onClick={() => setMobileOpen((open) => !open)} aria-expanded={mobileOpen} aria-controls="mobile-navigation" aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}>{mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav id="mobile-navigation" aria-label="Navegação mobile" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden border-t border-violet-100 bg-white px-4 pb-4 md:hidden">
            <div className="space-y-1 pt-3">
              {navLinks.map((link) => <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="focus-ring block rounded-xl px-4 py-3 font-medium text-slate-600 hover:bg-violet-50 hover:text-violet-700">{link.label}</a>)}
              <button className="focus-ring mt-2 min-h-11 w-full rounded-xl bg-violet-700 px-5 py-3 font-bold text-white" onClick={() => { setMobileOpen(false); onOpenStudentArea(); }}>Área do aluno</button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
