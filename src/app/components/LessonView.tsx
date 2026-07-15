import { ArrowLeft, ArrowRight, Check, Clock, Code2 } from "lucide-react";
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
    <main className="min-h-screen bg-[#0f1020] text-white">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <button className="focus-ring inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-white/70 hover:bg-white/10 hover:text-white" onClick={onBack}><ArrowLeft className="h-4 w-4" /> Área do aluno</button>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_340px]">
          <article className="overflow-hidden rounded-3xl border border-white/10 bg-[#17182c]">
            <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-violet-700 via-indigo-700 to-blue-700 p-8 text-center">
              <div>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur"><Code2 className="h-8 w-8" /></div>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Aula demonstrativa {index + 1}</p>
                <h1 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">{lesson.title}</h1>
                <p className="mt-4 inline-flex items-center gap-2 text-sm text-white/65"><Clock className="h-4 w-4" /> {lesson.duration}</p>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-lg leading-8 text-white/80">{lesson.summary}</p>
              <div className="mt-6 space-y-4">
                {lesson.content.map((paragraph) => <p key={paragraph} className="leading-7 text-white/65">{paragraph}</p>)}
              </div>
              <div className="mt-8 rounded-2xl border border-cyan-300/15 bg-cyan-300/5 p-5"><strong className="text-cyan-200">Prática sugerida</strong><p className="mt-2 text-sm leading-6 text-white/65">Abra o inspetor do navegador e identifique a estrutura, os estilos responsivos e os elementos interativos desta própria demonstração.</p></div>
            </div>
          </article>

          <aside className="h-fit rounded-3xl border border-white/10 bg-[#17182c] p-5 lg:sticky lg:top-6">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-300">{demoCourse.level}</span>
            <h2 className="mt-2 text-xl font-bold">{demoCourse.title}</h2>
            <div className="mt-6 space-y-2">
              {demoCourse.lessons.map((item, itemIndex) => {
                const done = completedLessonIds.includes(item.id);
                return <button key={item.id} aria-current={item.id === lesson.id ? "step" : undefined} className={`focus-ring flex w-full items-center gap-3 rounded-xl p-3 text-left text-sm transition ${item.id === lesson.id ? "bg-violet-600 text-white" : "text-white/65 hover:bg-white/5 hover:text-white"}`} onClick={() => onOpenLesson(item.id)}><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/10 text-xs">{done ? <Check className="h-3.5 w-3.5" /> : itemIndex + 1}</span><span className="min-w-0 flex-1">{item.title}</span></button>;
              })}
            </div>
            <button className={`focus-ring mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl px-4 py-3 font-bold transition ${completed ? "border border-emerald-400/30 bg-emerald-400/10 text-emerald-200" : "bg-white text-violet-700 hover:bg-violet-50"}`} onClick={() => onToggleComplete(lesson.id)}>{completed ? <><Check className="h-4 w-4" /> Aula concluída</> : "Marcar como concluída"}</button>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <button disabled={!previous} className="focus-ring inline-flex items-center justify-center gap-1 rounded-xl border border-white/10 px-3 py-2 text-sm text-white/70 enabled:hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-35" onClick={() => previous && onOpenLesson(previous.id)}><ArrowLeft className="h-4 w-4" /> Anterior</button>
              <button disabled={!next} className="focus-ring inline-flex items-center justify-center gap-1 rounded-xl border border-white/10 px-3 py-2 text-sm text-white/70 enabled:hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-35" onClick={() => next && onOpenLesson(next.id)}>Próxima <ArrowRight className="h-4 w-4" /></button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
