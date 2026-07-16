import { ArrowRight, BookOpen, Clock, Code2, UserRound } from "lucide-react";
import { demoCourse } from "../data/demoCourse";

export function FeaturedCourses({ onStartDemo }: { onStartDemo: () => void }) {
  return (
    <section id="percurso" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <span className="eyebrow">Percurso demonstrativo</span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.035em] text-foreground sm:text-5xl">Fundamentos essenciais, em uma sequência que faz sentido.</h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">Este conteúdo fictício demonstra como Trilhara orienta cada etapa: você abre a aula, registra a conclusão e retoma exatamente de onde parou.</p>
            <button onClick={onStartDemo} className="focus-ring mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-bold text-primary-foreground transition hover:bg-[#214a40]">
              Começar primeira etapa <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <article className="surface-shadow overflow-hidden rounded-[26px] border border-border bg-card">
            <div className="grid sm:grid-cols-[190px_1fr]">
              <div className="flex min-h-52 items-center justify-center bg-primary p-8 text-primary-foreground">
                <div className="text-center"><Code2 className="mx-auto h-12 w-12" aria-hidden="true" /><p className="mt-4 text-xs font-extrabold uppercase tracking-[.18em] text-secondary">Percurso web</p></div>
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap gap-2 text-xs font-bold"><span className="rounded-lg bg-muted px-3 py-1.5 text-primary">{demoCourse.level}</span><span className="rounded-lg border border-border px-3 py-1.5 text-muted-foreground">Demonstração local</span></div>
                <h3 className="mt-5 text-2xl font-extrabold tracking-tight text-foreground">{demoCourse.title}</h3>
                <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-muted-foreground"><UserRound className="h-4 w-4" aria-hidden="true" /> {demoCourse.instructor.name}</p>
                <p className="mt-4 leading-7 text-muted-foreground">{demoCourse.description}</p>
                <div className="mt-6 flex flex-wrap gap-5 text-sm text-muted-foreground"><span className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-primary" aria-hidden="true" /> {demoCourse.lessons.length} etapas</span><span className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" aria-hidden="true" /> 21 min</span></div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
