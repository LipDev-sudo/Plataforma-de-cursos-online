import { ArrowLeft, ArrowRight, BookOpen, Check, CheckCircle2, Code2, FileText, Info, RotateCcw, UserRound } from "lucide-react";
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
    <main className="min-h-screen bg-background px-5 py-7 sm:px-8 lg:px-12 lg:py-10">
      <div className="mx-auto max-w-[1400px]">
        <button className="focus-ring mb-7 inline-flex min-h-11 items-center gap-2 rounded-lg px-2 text-sm font-bold text-primary transition hover:bg-muted" onClick={onBack}>
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Voltar para o início
        </button>

        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <section className="surface-shadow rounded-[26px] border border-border bg-card p-6 sm:p-9" aria-labelledby="student-title">
            <h1 id="student-title" className="text-4xl font-extrabold tracking-[-0.045em] text-foreground sm:text-5xl">Seu percurso</h1>
            <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">O progresso desta demonstração é salvo somente neste navegador. Nenhum cadastro ou pagamento é necessário.</p>

            <div className="mt-9 border-b border-border pb-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground"><Code2 className="h-9 w-9" aria-hidden="true" /></span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-extrabold uppercase tracking-[.12em] text-primary">Percurso</p>
                  <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-foreground">{demoCourse.title}</h2>
                  <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground"><UserRound className="h-4 w-4" aria-hidden="true" /> {demoCourse.instructor.name}</p>
                </div>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <span className="shrink-0 text-sm font-semibold text-muted-foreground">{completed} de {demoCourse.lessons.length} etapas</span>
                <div role="progressbar" aria-label="Progresso do percurso" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress} className="h-2 flex-1 overflow-hidden rounded-full bg-muted"><div className="h-full rounded-full bg-primary transition-[width] duration-300" style={{ width: `${progress}%` }} /></div>
                <strong className="text-sm text-primary">{progress}%</strong>
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <button className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-bold text-primary-foreground transition hover:bg-[#214a40]" onClick={() => onOpenLesson(nextLesson.id)}>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" /> {isComplete ? "Rever percurso" : completed > 0 ? "Continuar aprendendo" : "Começar primeira etapa"}
                </button>
                {completed > 0 && <button className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold text-muted-foreground transition hover:bg-muted hover:text-foreground" onClick={onReset}><RotateCcw className="h-4 w-4" aria-hidden="true" /> Recomeçar demonstração</button>}
              </div>
            </div>

            <h2 className="mt-9 text-xl font-extrabold text-foreground">Etapas do percurso</h2>
            <ol className="relative mt-5 space-y-3" aria-label="Conteúdo do percurso">
              <span aria-hidden="true" className="absolute bottom-8 left-5 top-8 w-0.5 bg-primary" />
              {demoCourse.lessons.map((lesson, index) => {
                const done = completedLessonIds.includes(lesson.id);
                return (
                  <li key={lesson.id} className="relative flex items-center gap-4">
                    <span className={`z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-card text-sm font-extrabold ${done ? "bg-success text-white" : "bg-secondary text-secondary-foreground"}`}>{done ? <Check className="h-4 w-4" aria-label="Concluída" /> : index + 1}</span>
                    <button className="focus-ring group flex min-h-18 min-w-0 flex-1 items-center gap-3 rounded-2xl border border-border px-4 py-3 text-left transition hover:border-primary/45 hover:bg-muted/60" onClick={() => onOpenLesson(lesson.id)}>
                      <FileText className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                      <span className="min-w-0 flex-1"><strong className="block text-sm text-foreground sm:text-base">{lesson.title}</strong><span className="mt-1 block text-xs text-muted-foreground">{lesson.duration}</span></span>
                      {done ? <CheckCircle2 className="h-5 w-5 shrink-0 text-success" aria-label="Concluída" /> : <ArrowRight className="h-5 w-5 shrink-0 text-primary transition group-hover:translate-x-0.5" aria-hidden="true" />}
                    </button>
                  </li>
                );
              })}
            </ol>
          </section>

          <aside className="space-y-6">
            <div className={`rounded-[26px] border p-7 ${isComplete ? "border-success/25 bg-[#edf7f2]" : "border-border bg-card"}`}>
              {isComplete ? <><CheckCircle2 className="h-9 w-9 text-success" aria-hidden="true" /><h2 className="mt-5 text-xl font-extrabold text-foreground">Percurso concluído</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">Você finalizou todas as etapas da demonstração neste navegador.</p></> : <><BookOpen className="h-9 w-9 text-primary" aria-hidden="true" /><h2 className="mt-5 text-xl font-extrabold text-foreground">Seu percurso começa na primeira etapa</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">Conclua as etapas em ordem para acompanhar seu progresso.</p></>}
            </div>
            <div className="rounded-[26px] border border-border bg-card p-7">
              <Info className="h-9 w-9 text-primary" aria-hidden="true" />
              <h2 className="mt-5 text-xl font-extrabold text-foreground">Sobre esta demo</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">Esta é uma experiência local e fictícia criada para demonstrar interface, navegação e persistência de progresso.</p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
