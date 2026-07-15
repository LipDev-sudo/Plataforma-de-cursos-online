import { ArrowRight, BookOpen, CheckCircle2, LayoutDashboard } from "lucide-react";

const steps = [
  { icon: BookOpen, number: "01", title: "Abra uma aula", description: "Conheça o conteúdo demonstrativo e navegue pelo módulo lateral." },
  { icon: CheckCircle2, number: "02", title: "Registre o avanço", description: "Marque cada aula concluída e veja o progresso ser atualizado." },
  { icon: LayoutDashboard, number: "03", title: "Volte ao painel", description: "Confira o próximo passo ou o estado de curso finalizado." },
];

export function Testimonials({ onStartDemo }: { onStartDemo: () => void }) {
  return (
    <section id="como-funciona" className="scroll-mt-24 bg-[#101126] py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
          <div><span className="text-xs font-bold uppercase tracking-[.18em] text-cyan-200">Como testar</span><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Avalie o fluxo em poucos minutos.</h2><p className="mt-4 leading-7 text-white/60">A demonstração não envia informações para servidores. O progresso fica somente no armazenamento local do navegador e pode ser reiniciado no painel.</p><button onClick={onStartDemo} className="focus-ring mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-violet-700 transition hover:bg-violet-50">Começar demonstração <ArrowRight className="h-5 w-5" /></button></div>
          <ol className="grid gap-4 sm:grid-cols-3">
            {steps.map((step) => <li key={step.number} className="rounded-2xl border border-white/10 bg-white/5 p-5"><span className="text-xs font-bold text-cyan-200">{step.number}</span><step.icon className="mt-6 h-6 w-6 text-violet-300" /><h3 className="mt-4 font-bold">{step.title}</h3><p className="mt-2 text-sm leading-6 text-white/55">{step.description}</p></li>)}
          </ol>
        </div>
      </div>
    </section>
  );
}
