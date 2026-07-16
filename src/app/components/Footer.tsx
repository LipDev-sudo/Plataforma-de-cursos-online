import { ExternalLink, Github, GraduationCap } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <a href="#inicio" className="focus-ring inline-flex items-center gap-2 rounded-lg font-bold text-slate-900"><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-700 text-white"><GraduationCap className="h-5 w-5" /></span> Trilhara</a>
          <p className="mt-3 max-w-lg text-sm leading-6 text-slate-500">Demonstração funcional de aprendizagem online desenvolvida por Hamilton Felipe. Não oferece matrículas, certificados ou pagamentos reais.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href="https://github.com/LipDev-sudo/Plataforma-de-cursos-online" target="_blank" rel="noreferrer" className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-violet-300 hover:text-violet-700"><Github className="h-4 w-4" /> Código</a>
          <a href="https://lipdev.vercel.app/" target="_blank" rel="noreferrer" className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-700">Portfólio <ExternalLink className="h-4 w-4" /></a>
        </div>
      </div>
      <div className="border-t border-slate-100 px-4 py-5 text-center text-xs text-slate-500">© 2026 Hamilton Felipe · Trilhara é uma demonstração educacional</div>
    </footer>
  );
}
