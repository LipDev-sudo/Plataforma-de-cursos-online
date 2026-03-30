import { Code, Palette, Megaphone, Cpu, Briefcase, Camera, BarChart3, Music } from "lucide-react";
import { motion } from "motion/react";

const categories = [
  { icon: Code, name: "Programacao", count: 85, gradient: "from-[#7C3AED] to-[#6D28D9]" },
  { icon: Palette, name: "Design", count: 42, gradient: "from-[#EC4899] to-[#F43F5E]" },
  { icon: Megaphone, name: "Marketing Digital", count: 36, gradient: "from-[#F97316] to-[#EAB308]" },
  { icon: Cpu, name: "Tecnologia", count: 58, gradient: "from-[#3B82F6] to-[#06B6D4]" },
  { icon: Briefcase, name: "Negocios", count: 29, gradient: "from-[#10B981] to-[#14B8A6]" },
  { icon: Camera, name: "Fotografia", count: 24, gradient: "from-[#8B5CF6] to-[#A78BFA]" },
  { icon: BarChart3, name: "Data Science", count: 47, gradient: "from-[#6366F1] to-[#3B82F6]" },
  { icon: Music, name: "Musica", count: 18, gradient: "from-[#F43F5E] to-[#FB923C]" },
];

export function Categories() {
  return (
    <section className="py-20" style={{ background: "var(--gradient-subtle)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[0.8rem] bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] bg-clip-text text-transparent uppercase tracking-wider font-semibold">
            Explore por area
          </span>
          <h2 className="text-[2rem] md:text-[2.5rem] text-foreground mt-2 tracking-tight font-bold">
            Categorias populares
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Encontre o curso ideal para a sua carreira
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-5">
          {categories.map((cat, index) => (
            <motion.button
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              whileHover={{ y: -5 }}
              className="group p-6 rounded-2xl bg-white border border-[#7C3AED]/8 hover:border-transparent shadow-sm hover:shadow-xl hover:shadow-[#7C3AED]/15 transition-all duration-500 text-center cursor-pointer relative overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div
                  className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center mb-4 group-hover:bg-white/20 group-hover:shadow-lg transition-all duration-500 shadow-md`}
                >
                  <cat.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-[0.95rem] text-foreground group-hover:text-white mb-1 font-semibold transition-colors duration-500">
                  {cat.name}
                </h3>
                <p className="text-[0.8rem] text-muted-foreground group-hover:text-white/80 transition-colors duration-500">
                  {cat.count} cursos
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
