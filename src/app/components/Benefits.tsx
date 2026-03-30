import { Clock, Award, Users, RefreshCw, TrendingUp, Shield } from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";

function AnimatedStat({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString("pt-BR")}{suffix}
    </span>
  );
}

const benefits = [
  {
    icon: Clock,
    title: "Aprenda no seu ritmo",
    description: "Acesse os cursos a qualquer hora, de qualquer lugar. Sem prazos fixos.",
    stat: 24,
    statSuffix: "/7",
    statLabel: "Acesso ilimitado",
  },
  {
    icon: Award,
    title: "Certificado digital",
    description: "Receba um certificado ao concluir cada curso para valorizar seu curriculo.",
    stat: 15000,
    statSuffix: "+",
    statLabel: "Certificados emitidos",
  },
  {
    icon: Users,
    title: "Professores especialistas",
    description: "Aprenda com profissionais reconhecidos e atuantes no mercado.",
    stat: 50,
    statSuffix: "+",
    statLabel: "Instrutores ativos",
  },
  {
    icon: RefreshCw,
    title: "Conteudo atualizado",
    description: "Material sempre atualizado com as ultimas tendencias do mercado.",
    stat: 200,
    statSuffix: "+",
    statLabel: "Aulas novas/mes",
  },
  {
    icon: TrendingUp,
    title: "Progresso garantido",
    description: "Acompanhe seu progresso com metricas detalhadas e metas personalizadas.",
    stat: 95,
    statSuffix: "%",
    statLabel: "Taxa de satisfacao",
  },
  {
    icon: Shield,
    title: "Garantia de 30 dias",
    description: "Nao ficou satisfeito? Devolucao total em ate 30 dias, sem burocracia.",
    stat: 30,
    statSuffix: " dias",
    statLabel: "Garantia total",
  },
];

export function Benefits() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#F5F3FF] to-[#FAFAFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[0.8rem] bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] bg-clip-text text-transparent uppercase tracking-wider font-semibold">
            Por que nos escolher
          </span>
          <h2 className="text-[2rem] md:text-[2.5rem] text-foreground mt-2 tracking-tight font-bold">
            Beneficios da plataforma
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Tudo o que voce precisa para alcancar seus objetivos profissionais
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, index) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group p-7 rounded-2xl bg-white border border-[#7C3AED]/8 hover:border-[#7C3AED]/20 shadow-sm hover:shadow-xl hover:shadow-[#7C3AED]/10 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/3 to-[#3B82F6]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#3B82F6] flex items-center justify-center shadow-lg shadow-[#7C3AED]/20 group-hover:shadow-[#7C3AED]/30 transition-shadow duration-300 shrink-0">
                    <b.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-[1.05rem] text-foreground font-semibold mb-1 group-hover:text-[#7C3AED] transition-colors duration-300">
                      {b.title}
                    </h3>
                    <p className="text-[0.85rem] text-muted-foreground leading-relaxed">
                      {b.description}
                    </p>
                  </div>
                </div>

                {/* Animated stat */}
                <div className="mt-4 pt-4 border-t border-[#7C3AED]/8 flex items-center gap-3">
                  <span className="text-2xl font-bold bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] bg-clip-text text-transparent">
                    <AnimatedStat target={b.stat} suffix={b.statSuffix} duration={1800 + index * 200} />
                  </span>
                  <span className="text-[0.8rem] text-muted-foreground">{b.statLabel}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
