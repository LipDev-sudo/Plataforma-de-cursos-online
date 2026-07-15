import { ArrowLeft, BookOpen, CheckCircle2, Circle, Play, RotateCcw } from "lucide-react";
import { demoCourse } from "../data/demoCourse";

type StudentDashboardProps = {
  completedLessonIds: string[];
  onBack: () => void;
  onOpenLesson: (lessonId: string) => void;
  onReset: () => void;
};

export function StudentDashboard({ completedLessonIds, onBack, onOpenLesson, onReset }: StudentDashboardProps) {
  const completed = demoCourse.lessons.filter((lesson) => completedLessonIds.includes(lesson.id)).length;
  const progress = Math.round((completed / demoCourse.lessons.length) * 100);
  const nextLesson = demoCourse.lessons.find((lesson) => !completedLessonIds.includes(lesson.id)) ?? demoCourse.lessons[0];
  const isComplete = completed === demoCourse.lessons.length;

  return (
    <main className="min-h-screen bg-[#f7f7fc] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <button className="focus-ring mb-8 inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-white hover:text-violet-700" onClick={onBack}>
          <ArrowLeft className="h-4 w-4" /> Voltar para a vitrine
        </button>

        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          <section className="rounded-3xl border border-violet-100 bg-white p-6 shadow-sm sm:p-8" aria-labelledby="student-title">
            <span className="eyebrow">Área demonstrativa do aluno</span>
            <h1 id="student-title" className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Continue de onde parou</h1>
            <p className="mt-3 max-w-2xl text-slate-600">O progresso desta demonstração é salvo somente neste navegador. Nenhum cadastro ou pagamento é necessário.</p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-violet-700 to-blue-600 p-6 text-white">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="flex items-center gap-2 text-sm text-white/75"><BookOpen className="h-4 w-4" /> Curso demonstrativo</div>
                  <h2 className="mt-2 text-2xl font-bold">{demoCourse.title}</h2>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-white/75">{demoCourse.description}</p>
                </div>
                <button className="focus-ring inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-violet-700 hover:bg-violet-50" onClick={() => onOpenLesson(nextLesson.id)}>
                  <Play className="h-4 w-4 fill-current" /> {isComplete ? "Rever curso" : completed > 0 ? "Continuar" : "Começar aula"}
                </button>
              </div>
              <div className="mt-6" aria-label={`${progress}% do curso concluído`}>
                <div className="mb-2 flex justify-between text-sm"><span>{completed} de {demoCourse.lessons.length} aulas</span><strong>{progress}%</strong></div>
                <div className="h-2 overflow-hidden rounded-full bg-white/20"><div className="h-full rounded-full bg-cyan-300 transition-[width] duration-500" style={{ width: `${progress}%` }} /></div>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-xl font-bold text-slate-900">Conteúdo do curso</h2>
                {completed > 0 && <button className="focus-ring inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold text-slate-500 hover:bg-slate-100 hover:text-slate-900" onClick={onReset}><RotateCcw className="h-3.5 w-3.5" /> Reiniciar</button>}
              </div>
              {demoCourse.lessons.map((lesson, index) => {
                const done = completedLessonIds.includes(lesson.id);
                return (
                  <button key={lesson.id} className="focus-ring flex w-full items-center gap-4 rounded-2xl border border-slate-200 p-4 text-left transition hover:border-violet-300 hover:bg-violet-50/50" onClick={() => onOpenLesson(lesson.id)}>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-sm font-bold text-slate-600">{String(index + 1).padStart(2, "0")}</span>
                    <span className="min-w-0 flex-1"><strong className="block text-slate-900">{lesson.title}</strong><span className="mt-1 block text-sm text-slate-500">{lesson.duration}</span></span>
                    {done ? <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" aria-label="Concluída" /> : <Circle className="h-5 w-5 shrink-0 text-slate-300" aria-label="Pendente" />}
                  </button>
                );
              })}
            </div>
          </section>

          <aside className="space-y-6">
            <div className={`rounded-3xl border p-6 ${isComplete ? "border-emerald-200 bg-emerald-50" : "border-slate-200 bg-white"}`}>
              {isComplete ? <><CheckCircle2 className="h-8 w-8 text-emerald-600" /><h2 className="mt-4 text-xl font-bold text-slate-900">Curso concluído</h2><p className="mt-2 text-sm leading-6 text-slate-600">Você finalizou todas as aulas da demonstração neste navegador.</p></> : <><BookOpen className="h-8 w-8 text-violet-600" /><h2 className="mt-4 text-xl font-bold text-slate-900">Nenhuma conclusão ainda</h2><p className="mt-2 text-sm leading-6 text-slate-600">Conclua as três aulas para visualizar o estado final do curso.</p></>}
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h2 className="font-bold text-slate-900">Sobre esta demo</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">Esta é uma experiência local e fictícia criada para demonstrar interface, navegação e persistência de progresso.</p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

