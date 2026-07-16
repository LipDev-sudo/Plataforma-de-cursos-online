import { ExternalLink, Github, Waypoints } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
        <div>
          <a href="#inicio" className="focus-ring inline-flex items-center gap-2 rounded-lg font-extrabold text-foreground"><Waypoints className="h-7 w-7 text-primary" aria-hidden="true" /> Trilhara</a>
          <p className="mt-3 max-w-lg text-sm leading-6 text-muted-foreground">Demonstração funcional de aprendizagem online desenvolvida por Hamilton Felipe. Não oferece matrículas, certificados ou pagamentos reais.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href="https://github.com/LipDev-sudo/trilhara" target="_blank" rel="noreferrer" className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-bold text-foreground transition hover:border-primary hover:text-primary"><Github className="h-4 w-4" aria-hidden="true" /> Código</a>
          <a href="https://lipdev.vercel.app/" target="_blank" rel="noreferrer" className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition hover:bg-[#214a40]">Portfólio <ExternalLink className="h-4 w-4" aria-hidden="true" /></a>
        </div>
      </div>
      <div className="border-t border-border px-4 py-5 text-center text-xs text-muted-foreground">© 2026 Hamilton Felipe · Trilhara é uma demonstração educacional</div>
    </footer>
  );
}
