import { Clock, Award, Users, RefreshCw } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Aprenda no seu ritmo",
    description: "Acesse os cursos a qualquer hora, de qualquer lugar. Sem prazos fixos.",
    color: "from-violet-500 to-purple-600",
    bgColor: "bg-violet-50",
  },
  {
    icon: Award,
    title: "Certificado digital",
    description: "Receba um certificado ao concluir cada curso para valorizar seu currículo.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: Users,
    title: "Professores especialistas",
    description: "Aprenda com profissionais reconhecidos e atuantes no mercado.",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50",
  },
  {
    icon: RefreshCw,
    title: "Conteúdo atualizado",
    description: "Material sempre atualizado com as últimas tendências do mercado.",
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-50",
  },
];

export function Benefits() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#f9f7ff] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[0.8rem] text-[#6c3ce0] uppercase tracking-wider" style={{ fontWeight: 600 }}>
            Por que nos escolher
          </span>
          <h2
            className="text-[2rem] md:text-[2.5rem] text-foreground mt-2 tracking-tight"
            style={{ fontWeight: 700 }}
          >
            Benefícios da plataforma
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Tudo o que você precisa para alcançar seus objetivos profissionais
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group p-6 rounded-2xl bg-white border border-border hover:border-[#6c3ce0]/20 shadow-sm hover:shadow-lg hover:shadow-[#6c3ce0]/5 transition-all duration-300 text-center"
            >
              <div
                className={`w-14 h-14 mx-auto rounded-xl ${b.bgColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
              >
                <div className={`w-7 h-7 bg-gradient-to-br ${b.color} rounded-lg flex items-center justify-center`}>
                  <b.icon className="w-4 h-4 text-white" />
                </div>
              </div>
              <h3 className="text-[1rem] text-foreground mb-2" style={{ fontWeight: 600 }}>
                {b.title}
              </h3>
              <p className="text-[0.85rem] text-muted-foreground leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
