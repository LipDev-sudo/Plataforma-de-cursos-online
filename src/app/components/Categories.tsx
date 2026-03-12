import { Code, Palette, Megaphone, Cpu, Briefcase } from "lucide-react";

const categories = [
  { icon: Code, name: "Programação", count: 85, color: "from-[#6c3ce0] to-[#4f46e5]" },
  { icon: Palette, name: "Design", count: 42, color: "from-pink-500 to-rose-500" },
  { icon: Megaphone, name: "Marketing Digital", count: 36, color: "from-orange-500 to-amber-500" },
  { icon: Cpu, name: "Tecnologia", count: 58, color: "from-cyan-500 to-blue-500" },
  { icon: Briefcase, name: "Negócios", count: 29, color: "from-emerald-500 to-teal-500" },
];

export function Categories() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[0.8rem] text-[#6c3ce0] uppercase tracking-wider" style={{ fontWeight: 600 }}>
            Explore por área
          </span>
          <h2
            className="text-[2rem] md:text-[2.5rem] text-foreground mt-2 tracking-tight"
            style={{ fontWeight: 700 }}
          >
            Categorias populares
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Encontre o curso ideal para a sua carreira
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {categories.map((cat) => (
            <button
              key={cat.name}
              className="group p-6 rounded-2xl bg-white border border-border hover:border-[#6c3ce0]/30 shadow-sm hover:shadow-lg hover:shadow-[#6c3ce0]/5 transition-all duration-300 text-center cursor-pointer"
            >
              <div
                className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}
              >
                <cat.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-[0.95rem] text-foreground mb-1" style={{ fontWeight: 600 }}>
                {cat.name}
              </h3>
              <p className="text-[0.8rem] text-muted-foreground">{cat.count} cursos</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
