import { ArrowRight, BookOpen, Clock, MonitorPlay } from "lucide-react";
import { motion } from "motion/react";
import { demoCourse } from "../data/demoCourse";

export function FeaturedCourses({ onStartDemo }: { onStartDemo: () => void }) {
  return (
    <section id="cursos" className="scroll-mt-24 bg-[#fafaff] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[.78fr_1.22fr] lg:items-center">
          <div>
            <span className="eyebrow">Curso demonstrativo</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Uma trilha curta para testar a experiência completa.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">O conteúdo é fictício e existe para demonstrar o fluxo do produto. Você pode abrir aulas, navegar pelo módulo, marcar etapas e recuperar o progresso após recarregar a página.</p>
            <button onClick={onStartDemo} className="focus-ring mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-violet-700 px-6 py-3.5 font-bold text-white shadow-lg shadow-violet-700/20 transition hover:-translate-y-0.5 hover:bg-violet-800">Abrir primeira aula <ArrowRight className="h-5 w-5" /></button>
          </div>

          <motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="overflow-hidden rounded-3xl border border-violet-100 bg-white shadow-xl shadow-violet-950/5">
            <div className="grid sm:grid-cols-[220px_1fr]">
              <div className="flex min-h-56 items-center justify-center bg-gradient-to-br from-violet-700 to-blue-600 p-8 text-white"><div className="text-center"><MonitorPlay className="mx-auto h-12 w-12" /><p className="mt-4 text-xs font-bold uppercase tracking-[.2em] text-cyan-200">Demo LMS</p></div></div>
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap gap-2"><span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-bold text-violet-700">{demoCourse.level}</span><span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">Dados locais</span></div>
                <h3 className="mt-4 text-2xl font-bold text-slate-900">{demoCourse.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{demoCourse.description}</p>
                <div className="mt-6 flex flex-wrap gap-5 text-sm text-slate-500"><span className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-violet-600" /> {demoCourse.lessons.length} aulas</span><span className="flex items-center gap-2"><Clock className="h-4 w-4 text-violet-600" /> 21 min de leitura</span></div>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
