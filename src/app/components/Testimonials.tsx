import { Star, Quote } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "Marina Alves",
    role: "Designer migrando para Front-end",
    text: "A trilha deixou claro o que eu precisava estudar e me deu seguranca para montar meus primeiros projetos reais.",
    rating: 5,
  },
  {
    name: "Lucas Pereira",
    role: "Desenvolvedor Junior",
    text: "Gostei da forma pratica. Cada modulo termina com algo que da para colocar no portfolio.",
    rating: 5,
  },
  {
    name: "Bianca Rocha",
    role: "Freelancer",
    text: "A plataforma passa uma experiencia profissional e ajuda a vender melhor o valor dos cursos.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="inline-block bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] bg-clip-text text-[0.8rem] font-semibold uppercase tracking-wider text-transparent">
            Historias de alunos
          </span>
          <h2 className="mt-2 text-[2rem] font-bold tracking-tight text-foreground md:text-[2.5rem]">
            Quem aprende, recomenda
          </h2>
          <p className="mt-3 text-muted-foreground">
            Depoimentos ajudam a transformar a plataforma em uma vitrine mais confiavel para vendas.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative overflow-hidden rounded-3xl border border-[#7C3AED]/10 bg-[#FAFAFF] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#7C3AED]/10"
            >
              <Quote className="mb-5 h-8 w-8 text-[#7C3AED]/25" />

              <div className="mb-4 flex items-center gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="mt-6 border-t border-[#7C3AED]/10 pt-5">
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
