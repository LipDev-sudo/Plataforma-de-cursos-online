import { ArrowRight, Play, Sparkles, BookOpen, Trophy, Search } from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";

function AnimatedCounter({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
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

export function Hero() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative overflow-hidden min-h-[92vh] flex items-center" style={{ background: "var(--gradient-hero)" }}>
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#3B82F6]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#7C3AED]/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#3B82F6]/10 rounded-full blur-2xl animate-float" />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-8 border border-white/15"
            >
              <Sparkles className="w-4 h-4 text-[#38BDF8]" />
              Plataforma #1 de ensino online no Brasil
            </motion.span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight mb-6">
              Transforme sua{" "}
              <span className="relative inline-block">
                carreira
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 8C50 2 100 2 150 6C200 10 250 4 298 8" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>{" "}
              agora
            </h1>

            <p className="text-lg sm:text-xl text-white/70 mb-8 max-w-xl leading-relaxed">
              Cursos completos com especialistas do mercado. Aprenda no seu ritmo, de qualquer lugar, com certificado reconhecido.
            </p>

            {/* Search bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="relative max-w-lg mb-8"
            >
              <div className="relative flex items-center">
                <Search className="absolute left-4 w-5 h-5 text-white/40" />
                <input
                  type="text"
                  placeholder="Buscar cursos, habilidades ou instrutores..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-32 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 text-white placeholder-white/40 focus:outline-none focus:border-white/30 focus:bg-white/15 transition-all duration-300"
                />
                <button className="absolute right-2 px-5 py-2.5 rounded-xl bg-white text-[#7C3AED] font-bold text-sm hover:shadow-lg hover:shadow-white/20 transition-all duration-300 cursor-pointer">
                  Buscar
                </button>
              </div>
            </motion.div>

            <div className="flex flex-wrap gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-white text-[#7C3AED] font-bold text-base hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 cursor-pointer"
              >
                Explorar Cursos
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl border-2 border-white/20 text-white font-semibold text-base hover:bg-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer backdrop-blur-sm"
              >
                <Play className="w-5 h-5" />
                Ver Demo
              </motion.button>
            </div>

            {/* Animated Stats row */}
            <div className="flex gap-8 sm:gap-12">
              {[
                { value: 10000, suffix: "+", label: "Alunos ativos" },
                { value: 500, suffix: "+", label: "Cursos disponiveis" },
                { value: 50, suffix: "+", label: "Instrutores" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.15, duration: 0.5 }}
                >
                  <p className="text-2xl sm:text-3xl font-bold text-white">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} duration={2000 + i * 300} />
                  </p>
                  <p className="text-sm text-white/50 mt-0.5">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Floating UI cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="relative h-[500px]">
              {/* Main floating card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 left-8 right-8 bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/15 shadow-2xl"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#3B82F6] flex items-center justify-center shadow-lg shadow-[#7C3AED]/30">
                    <BookOpen className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">React Avancado</p>
                    <p className="text-white/50 text-sm">Ana Silva - 42 aulas</p>
                  </div>
                </div>
                {/* Progress bar */}
                <div className="mb-3">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white/60">Progresso</span>
                    <span className="text-[#38BDF8] font-semibold">67%</span>
                  </div>
                  <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "67%" }}
                      transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ background: "var(--gradient-progress)" }}
                    />
                  </div>
                </div>
                <button className="w-full mt-3 py-3 rounded-xl bg-gradient-to-r from-[#7C3AED]/20 to-[#3B82F6]/20 text-white font-semibold text-sm hover:from-[#7C3AED]/30 hover:to-[#3B82F6]/30 transition-all duration-300 cursor-pointer border border-white/10">
                  Continuar Aprendendo
                </button>
              </motion.div>

              {/* Achievement card */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-16 -left-4 bg-white rounded-2xl shadow-2xl shadow-[#7C3AED]/15 p-4 flex items-center gap-3 border border-[#7C3AED]/10"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#3B82F6] flex items-center justify-center shadow-lg shadow-[#7C3AED]/25">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-[#1E293B] font-bold text-sm">Conquista Desbloqueada!</p>
                  <p className="text-[#64748B] text-xs">5 cursos concluidos</p>
                </div>
              </motion.div>

              {/* Live indicator */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-0 right-0 bg-white rounded-2xl shadow-2xl shadow-[#7C3AED]/15 px-5 py-3 flex items-center gap-2.5 border border-[#7C3AED]/10"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#10B981]" />
                </span>
                <span className="text-[#1E293B] font-bold text-sm">1.2K online agora</span>
              </motion.div>

              {/* Rating card */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/15"
              >
                <div className="flex items-center gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/80 text-xs">Avaliado 4.9/5</p>
                <p className="text-white/50 text-xs">por 12,400+ alunos</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full">
          <path
            d="M0 80V40C240 10 480 0 720 20C960 40 1200 50 1440 30V80H0Z"
            fill="#FAFAFF"
          />
        </svg>
      </div>
    </section>
  );
}
