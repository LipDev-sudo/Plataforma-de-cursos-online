import { Accessibility, CheckCircle2, LayoutDashboard, RefreshCw, Smartphone, WifiOff } from "lucide-react";
import { motion } from "motion/react";

const capabilities = [
  { icon: LayoutDashboard, title: "Painel do aluno", description: "Visão clara das aulas, do avanço atual e da próxima atividade disponível." },
  { icon: CheckCircle2, title: "Conclusão de aulas", description: "Marcação individual e estado final quando toda a trilha demonstrativa é concluída." },
  { icon: RefreshCw, title: "Progresso persistente", description: "O navegador mantém o avanço local mesmo depois de atualizar a página." },
  { icon: WifiOff, title: "Sem credenciais", description: "A demonstração funciona sem login, banco de dados ou chaves de serviços externos." },
  { icon: Smartphone, title: "Interface responsiva", description: "Conteúdo e controles adaptados para desktop, tablet e telas móveis." },
  { icon: Accessibility, title: "Navegação acessível", description: "Estrutura semântica, foco visível, rótulos claros e controles utilizáveis por teclado." },
];

export function Benefits() {
  return (
    <section id="recursos" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center"><span className="eyebrow">Recursos implementados</span><h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Um protótipo que pode ser realmente avaliado.</h2><p className="mt-4 text-lg leading-8 text-slate-600">Os itens abaixo descrevem apenas o que está disponível nesta versão pública.</p></div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, index) => <motion.article key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .06 }} className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-950/5"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-700"><item.icon className="h-5 w-5" /></span><h3 className="mt-5 text-lg font-bold text-slate-900">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p></motion.article>)}
        </div>
      </div>
    </section>
  );
}
