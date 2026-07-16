import { ArrowRight, BookOpen, CheckCircle2, Route } from "lucide-react";

const steps = [
  { icon: BookOpen, number: "01", title: "Abra a próxima etapa", description: "Comece pelo conteúdo indicado e mantenha a sequência do percurso." },
  { icon: CheckCircle2, number: "02", title: "Registre o avanço", description: "Marque cada etapa concluída para atualizar o progresso imediatamente." },
  { icon: Route, number: "03", title: "Continue com clareza", description: "Retorne ao painel e encontre o próximo conteúdo sem perder o contexto." },
];

export function LearningJourney({ onStartDemo }: { onStartDemo: () => void }) {
  return (
    <section id="como-funciona" className="scroll-mt-24 bg-primary py-20 text-primary-foreground sm:py-28">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-[.16em] text-secondary">Como funciona</span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.035em] sm:text-5xl">Do conteúdo ao progresso, uma etapa por vez.</h2>
            <p className="mt-5 max-w-xl leading-7 text-white/70">A demonstração não envia informações para servidores. O avanço fica somente neste navegador e pode ser reiniciado quando você quiser.</p>
            <button onClick={onStartDemo} className="focus-ring mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-secondary px-6 py-3.5 font-bold text-secondary-foreground transition hover:bg-[#e8f28a]">Conhecer o percurso <ArrowRight className="h-5 w-5" aria-hidden="true" /></button>
          </div>
          <ol className="grid gap-8 sm:grid-cols-3" aria-label="Como testar a demonstração">
            {steps.map((step) => (
              <li key={step.number} className="border-t border-white/25 pt-6">
                <div className="flex items-center justify-between"><span className="text-sm font-extrabold text-secondary">{step.number}</span><step.icon className="h-6 w-6 text-secondary" strokeWidth={1.8} aria-hidden="true" /></div>
                <h3 className="mt-8 text-lg font-extrabold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/65">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
