import { ArrowLeft, ArrowRight, Check, Clock, Code2, FileText, Terminal, Waypoints } from "lucide-react";
import { demoCourse } from "../data/demoCourse";

type LessonViewProps = {
  lessonId: string;
  completedLessonIds: string[];
  onBack: () => void;
  onOpenLesson: (lessonId: string) => void;
  onToggleComplete: (lessonId: string) => void;
};

export function LessonView({ lessonId, completedLessonIds, onBack, onOpenLesson, onToggleComplete }: LessonViewProps) {
  const index = Math.max(0, demoCourse.lessons.findIndex((lesson) => lesson.id === lessonId));
  const lesson = demoCourse.lessons[index];
  const previous = demoCourse.lessons[index - 1];
  const next = demoCourse.lessons[index + 1];
  const completed = completedLessonIds.includes(lesson.id);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="border-b border-border bg-card">
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <span className="flex items-center gap-2.5 font-extrabold"><Waypoints className="h-7 w-7 text-primary" aria-hidden="true" /> Trilhara</span>
          <button className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-xl border border-primary px-4 py-2 text-sm font-bold text-primary transition hover:bg-muted" onClick={onBack}><ArrowLeft className="h-4 w-4" aria-hidden="true" /> Meu progresso</button>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
          <article className="min-w-0">
            <div className="flex items-center gap-4 border-b border-border pb-7">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground"><Code2 className="h-8 w-8" aria-hidden="true" /></span>
              <div><p className="text-xs font-extrabold uppercase tracking-[.12em] text-primary">Percurso</p><h2 className="mt-1 text-lg font-extrabold sm:text-xl">{demoCourse.title}</h2></div>
            </div>

            <div className="py-9 sm:py-12">
              <span className="inline-flex rounded-md bg-secondary px-3 py-1.5 text-sm font-extrabold text-secondary-foreground">Etapa {index + 1} de {demoCourse.lessons.length}</span>
              <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-[-0.045em] sm:text-6xl">{lesson.title}</h1>
              <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground"><Clock className="h-4 w-4" aria-hidden="true" /> {lesson.duration}</p>
            </div>

            <div className="border-y border-border py-8">
              <p className="text-xl font-semibold leading-8 text-foreground">{lesson.summary}</p>
              <div className="mt-7 max-w-4xl space-y-5 text-base leading-8 text-muted-foreground sm:text-lg">
                {lesson.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>

            <div className="mt-8 flex gap-4 rounded-2xl border border-primary/15 bg-[#f3f7f4] p-5 sm:p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground"><Terminal className="h-5 w-5" aria-hidden="true" /></span>
              <div><h2 className="font-extrabold">Prática sugerida</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">Abra o inspetor do navegador e identifique a estrutura, os estilos responsivos e os elementos interativos desta própria demonstração.</p></div>
            </div>
          </article>

          <aside className="h-fit rounded-[26px] border border-border bg-card p-5 surface-shadow lg:sticky lg:top-7 sm:p-7">
            <h2 className="text-2xl font-extrabold tracking-tight">Etapas do percurso</h2>
            <ol className="relative mt-7 space-y-3" aria-label="Navegação pelas etapas">
              <span aria-hidden="true" className="absolute bottom-8 left-5 top-8 w-0.5 bg-primary" />
              {demoCourse.lessons.map((item, itemIndex) => {
                const done = completedLessonIds.includes(item.id);
                const active = item.id === lesson.id;
                return (
                  <li key={item.id} className="relative flex items-center gap-3">
                    <span className={`z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-card text-sm font-extrabold ${done ? "bg-success text-white" : active ? "bg-secondary text-secondary-foreground" : "bg-card text-foreground ring-1 ring-border"}`}>{done ? <Check className="h-4 w-4" aria-label="Concluída" /> : itemIndex + 1}</span>
                    <button aria-current={active ? "step" : undefined} className={`focus-ring group flex min-h-20 min-w-0 flex-1 items-center gap-3 rounded-2xl border p-4 text-left transition ${active ? "border-secondary bg-[#fbfce9]" : "border-border hover:border-primary/40 hover:bg-muted/50"}`} onClick={() => onOpenLesson(item.id)}>
                      <FileText className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      <span className="min-w-0 flex-1"><strong className="block text-sm leading-5">{item.title}</strong><span className="mt-1 flex items-center gap-1 text-xs text-muted-foreground"><Clock className="h-3.5 w-3.5" aria-hidden="true" /> {item.duration}</span></span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    </button>
                  </li>
                );
              })}
            </ol>

            <button className={`focus-ring mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl px-4 py-3 font-bold transition ${completed ? "border border-success/30 bg-[#edf7f2] text-success" : "bg-primary text-primary-foreground hover:bg-[#214a40]"}`} onClick={() => onToggleComplete(lesson.id)}>
              {completed ? <><Check className="h-4 w-4" aria-hidden="true" /> Etapa concluída</> : "Marcar etapa como concluída"}
            </button>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <button disabled={!previous} className="focus-ring inline-flex min-h-11 items-center justify-center gap-1 rounded-xl border border-border px-3 py-2 text-sm font-bold text-muted-foreground enabled:hover:border-primary enabled:hover:text-primary disabled:cursor-not-allowed disabled:opacity-40" onClick={() => previous && onOpenLesson(previous.id)}><ArrowLeft className="h-4 w-4" aria-hidden="true" /> Anterior</button>
              <button disabled={!next} className="focus-ring inline-flex min-h-11 items-center justify-center gap-1 rounded-xl border border-border px-3 py-2 text-sm font-bold text-muted-foreground enabled:hover:border-primary enabled:hover:text-primary disabled:cursor-not-allowed disabled:opacity-40" onClick={() => next && onOpenLesson(next.id)}>Próxima <ArrowRight className="h-4 w-4" aria-hidden="true" /></button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
