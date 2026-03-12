import { Play, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const heroImage =
  "https://images.unsplash.com/photo-1758612215020-842383aadb9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMHN0dWRlbnRzJTIwbGFwdG9wfGVufDF8fHx8MTc3MzI4NzYzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f5f0ff] via-white to-[#eef2ff]">
      {/* Background shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#6c3ce0]/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4f46e5]/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="order-2 md:order-1">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#6c3ce0]/10 text-[#6c3ce0] text-[0.8rem] mb-6" style={{ fontWeight: 600 }}>
              <Play className="w-3.5 h-3.5" /> Plataforma #1 de ensino online
            </span>
            <h1
              className="text-[2.5rem] md:text-[3.25rem] leading-[1.1] tracking-tight text-foreground mb-6"
              style={{ fontWeight: 800 }}
            >
              Aprenda novas{" "}
              <span className="bg-gradient-to-r from-[#6c3ce0] to-[#4f46e5] bg-clip-text text-transparent">
                habilidades
              </span>{" "}
              online
            </h1>
            <p className="text-[1.1rem] text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Cursos completos para impulsionar sua carreira. Aprenda com
              especialistas do mercado no seu próprio ritmo.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#6c3ce0] to-[#4f46e5] text-white hover:opacity-90 transition-opacity shadow-lg shadow-[#6c3ce0]/25 cursor-pointer">
                Explorar Cursos <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-7 py-3.5 rounded-xl border-2 border-[#6c3ce0]/20 text-[#6c3ce0] hover:bg-[#6c3ce0]/5 transition-colors cursor-pointer">
                Saiba mais
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-10">
              {[
                { value: "50K+", label: "Alunos" },
                { value: "200+", label: "Cursos" },
                { value: "4.9", label: "Avaliação" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-[1.5rem] text-foreground" style={{ fontWeight: 700 }}>
                    {stat.value}
                  </p>
                  <p className="text-[0.85rem] text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-[#6c3ce0]/10 border border-white/50">
              <ImageWithFallback
                src={heroImage}
                alt="Pessoas estudando online"
                className="w-full h-[320px] md:h-[420px] object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3 border border-border">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-green-600 text-[1.25rem]">✓</span>
              </div>
              <div>
                <p className="text-[0.8rem] text-foreground" style={{ fontWeight: 600 }}>Certificado Digital</p>
                <p className="text-[0.7rem] text-muted-foreground">Ao concluir cada curso</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
