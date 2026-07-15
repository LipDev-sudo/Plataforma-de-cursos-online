import { ArrowRight, BookOpen, CheckCircle2, Play, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { demoCourse } from "../data/demoCourse";

type HeroProps = {
  completedLessons: number;
  onOpenStudentArea: () => void;
  onStartDemo: () => void;
};

export function Hero({ completedLessons, onOpenStudentArea, onStartDemo }: HeroProps) {
  const progress = Math.round((completedLessons / demoCourse.lessons.length) * 100);

  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-br from-violet-800 via-indigo-700 to-blue-600 text-white">
      <div aria-hidden="true" className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
      <div className="relative mx-auto grid min-h-[calc(100svh-72px)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-20">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur"><Sparkles className="h-4 w-4 text-cyan-200" /> Protótipo interativo de plataforma LMS</span>
          <h1 className="mt-7 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">Conheça uma experiência de estudo <span className="text-cyan-200">do início ao progresso.</span></h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">Explore uma aula demonstrativa, acompanhe o avanço no painel do aluno e teste a persistência local sem criar conta ou informar dados pessoais.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 font-bold text-violet-700 shadow-xl shadow-violet-950/20 transition hover:-translate-y-0.5 hover:bg-violet-50" onClick={onStartDemo}><Play className="h-5 w-5 fill-current" /> Iniciar aula demo</button>
            <button className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-7 py-3.5 font-bold text-white transition hover:bg-white/15" onClick={onOpenStudentArea}>Abrir painel do aluno <ArrowRight className="h-5 w-5" /></button>
          </div>
          <ul className="mt-8 grid gap-3 text-sm text-white/75 sm:grid-cols-3" aria-label="Características da demonstração">
            {["Sem cadastro", "Progresso local", "Responsivo"].map((item) => <li key={item} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-200" /> {item}</li>)}
          </ul>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65, delay: 0.12 }} className="relative">
          <div className="rounded-[28px] border border-white/20 bg-[#11142a]/80 p-4 shadow-2xl shadow-indigo-950/40 backdrop-blur sm:p-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600"><BookOpen className="h-5 w-5" /></span><div><p className="text-xs text-white/50">Curso demonstrativo</p><h2 className="font-bold">{demoCourse.title}</h2></div></div>
              <span className="rounded-lg bg-cyan-300/10 px-3 py-1.5 text-xs font-bold text-cyan-200">{progress}%</span>
            </div>
            <div className="mt-5 space-y-3">
              {demoCourse.lessons.map((lesson, index) => {
                const complete = index < completedLessons;
                return <div key={lesson.id} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3"><span className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold ${complete ? "bg-emerald-400/15 text-emerald-200" : "bg-white/10 text-white/65"}`}>{complete ? <CheckCircle2 className="h-4 w-4" /> : index + 1}</span><span className="min-w-0 flex-1"><strong className="block truncate text-sm">{lesson.title}</strong><span className="text-xs text-white/45">{lesson.duration}</span></span></div>;
              })}
            </div>
            <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-blue-400 transition-[width] duration-500" style={{ width: `${progress}%` }} /></div>
            <button className="focus-ring mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 px-4 py-3 font-bold text-white hover:from-violet-500 hover:to-blue-400" onClick={onOpenStudentArea}>{completedLessons ? "Continuar aprendendo" : "Conhecer o painel"} <ArrowRight className="h-4 w-4" /></button>
          </div>
          <div aria-hidden="true" className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-cyan-300/20 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
