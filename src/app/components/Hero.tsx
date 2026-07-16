import { ArrowRight, Check, ChevronRight, Code2, FileText, UserRound } from "lucide-react";
import { demoCourse } from "../data/demoCourse";

type HeroProps = {
  completedLessons: number;
  onOpenLesson: (lessonId: string) => void;
  onOpenStudentArea: () => void;
  onStartDemo: () => void;
};

export function Hero({ completedLessons, onOpenLesson, onOpenStudentArea, onStartDemo }: HeroProps) {
  const progress = Math.round((completedLessons / demoCourse.lessons.length) * 100);

  return (
    <section id="inicio" className="border-b border-border bg-background">
      <div className="mx-auto grid min-h-[calc(100svh-72px)] max-w-[1440px] items-center gap-12 px-5 py-14 sm:px-8 lg:min-h-[720px] lg:grid-cols-[.9fr_1.1fr] lg:px-12 lg:py-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-extrabold leading-[1.02] tracking-[-0.055em] text-foreground sm:text-6xl lg:text-7xl">Aprender tem caminho.</h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl">Um percurso claro para estudar, avançar e saber exatamente qual é a próxima etapa.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button className="focus-ring inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 font-bold text-primary-foreground transition hover:bg-[#214a40]" onClick={onStartDemo}>
              <ArrowRight className="h-5 w-5" aria-hidden="true" /> Conhecer o percurso
            </button>
            <button className="focus-ring inline-flex min-h-13 items-center justify-center gap-2 rounded-xl border border-primary bg-transparent px-7 py-3.5 font-bold text-primary transition hover:bg-muted" onClick={onOpenStudentArea}>
              <UserRound className="h-5 w-5" aria-hidden="true" /> Ver meu progresso
            </button>
          </div>
          <p className="mt-7 text-sm font-medium text-muted-foreground">Demonstração funcional · sem cadastro ou dados pessoais</p>
        </div>

        <div className="surface-shadow overflow-hidden rounded-[26px] border border-border bg-card">
          <div className="flex flex-col gap-5 border-b border-border p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div className="flex min-w-0 items-center gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <Code2 className="h-7 w-7" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-extrabold uppercase tracking-[.12em] text-primary">Percurso</p>
                <h2 className="mt-1 text-lg font-extrabold tracking-tight text-foreground sm:text-xl">{demoCourse.title}</h2>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground"><UserRound className="h-4 w-4" aria-hidden="true" /> {demoCourse.instructor.name}</p>
              </div>
            </div>
            <div role="progressbar" aria-label="Progresso do percurso" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress} className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-[6px] border-muted text-sm font-extrabold text-primary">
              {progress}%
            </div>
          </div>

          <ol className="relative space-y-3 p-5 sm:p-7" aria-label="Etapas do percurso">
            <span aria-hidden="true" className="absolute bottom-12 left-[2.45rem] top-12 w-0.5 bg-primary sm:left-[3.2rem]" />
            {demoCourse.lessons.map((lesson, index) => {
              const complete = index < completedLessons;
              return (
                <li key={lesson.id} className="relative flex items-center gap-4">
                  <span className={`z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-card text-sm font-extrabold ${complete ? "bg-success text-white" : "bg-secondary text-secondary-foreground"}`}>
                    {complete ? <Check className="h-4 w-4" aria-label="Concluída" /> : index + 1}
                  </span>
                  <button onClick={() => onOpenLesson(lesson.id)} className="focus-ring group flex min-h-20 min-w-0 flex-1 items-center gap-3 rounded-2xl border border-border bg-card px-4 py-4 text-left transition hover:border-primary/40 hover:bg-muted/60">
                    <FileText className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span className="min-w-0 flex-1">
                      <strong className="block text-sm leading-5 text-foreground sm:text-base">{lesson.title}</strong>
                      <span className="mt-1 block text-xs text-muted-foreground">{lesson.duration}</span>
                    </span>
                    <ChevronRight className="h-5 w-5 shrink-0 text-primary transition group-hover:translate-x-0.5" aria-hidden="true" />
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
