import { BarChart3, Briefcase, Code2, Megaphone, Palette, Sparkles } from "lucide-react";

const categories = [
  { icon: Code2, name: "Programação" },
  { icon: Palette, name: "Design" },
  { icon: Megaphone, name: "Marketing" },
  { icon: BarChart3, name: "Dados" },
  { icon: Briefcase, name: "Negócios" },
  { icon: Sparkles, name: "Criatividade" },
];

export function Categories() {
  return (
    <section className="bg-[#f7f7fc] py-16 sm:py-20" aria-labelledby="categories-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><span className="eyebrow">Estrutura escalável</span><h2 id="categories-title" className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Categorias previstas para um catálogo.</h2></div><p className="max-w-lg text-sm leading-6 text-slate-600">As categorias ilustram como o conteúdo poderia ser organizado. Elas não representam cursos publicados nesta demonstração.</p></div>
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => <li key={category.name} className="flex min-h-32 flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 text-center"><category.icon className="h-6 w-6 text-violet-700" /><strong className="mt-3 text-sm text-slate-900">{category.name}</strong></li>)}
        </ul>
      </div>
    </section>
  );
}
