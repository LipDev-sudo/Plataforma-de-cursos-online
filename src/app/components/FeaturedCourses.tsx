import { Star, Clock, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

const courses = [
  {
    id: 1,
    title: "Desenvolvimento Web Completo",
    instructor: "Carlos Mendes",
    avatar: "CM",
    rating: 4.9,
    reviews: 1240,
    price: "R$ 49,90",
    originalPrice: "R$ 99,90",
    progress: 75,
    students: 3200,
    hours: 42,
    image:
      "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NzMyNzI4Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: "Bestseller",
  },
  {
    id: 2,
    title: "React para Iniciantes",
    instructor: "Ana Silva",
    avatar: "AS",
    rating: 4.8,
    reviews: 890,
    price: "R$ 39,90",
    originalPrice: "R$ 79,90",
    progress: 30,
    students: 2100,
    hours: 28,
    image:
      "https://images.unsplash.com/photo-1653387319597-84bde7e5368e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFjdCUyMHByb2dyYW1taW5nJTIwamF2YXNjcmlwdHxlbnwxfHx8fDE3NzMyODc2Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: "Novo",
  },
  {
    id: 3,
    title: "UI/UX Design Masterclass",
    instructor: "Juliana Costa",
    avatar: "JC",
    rating: 4.7,
    reviews: 650,
    price: "R$ 59,90",
    originalPrice: "R$ 119,90",
    progress: 0,
    students: 1800,
    hours: 36,
    image:
      "https://images.unsplash.com/photo-1622117515670-fcb02499491f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVSSUyMFVYJTIwZGVzaWduJTIwd2lyZWZyYW1lfGVufDF8fHx8MTc3MzI4NzYzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: "Popular",
  },
  {
    id: 4,
    title: "JavaScript Avancado",
    instructor: "Rafael Lima",
    avatar: "RL",
    rating: 4.9,
    reviews: 1100,
    price: "R$ 44,90",
    originalPrice: "R$ 89,90",
    progress: 50,
    students: 2800,
    hours: 38,
    image:
      "https://images.unsplash.com/photo-1653387137517-fbc54d488ed8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXZhc2NyaXB0JTIwY29kZSUyMHByb2dyYW1taW5nfGVufDF8fHx8MTc3MzI4NzY0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: "Bestseller",
  },
  {
    id: 5,
    title: "Python para Backend",
    instructor: "Marcos Oliveira",
    avatar: "MO",
    rating: 4.6,
    reviews: 430,
    price: "R$ 54,90",
    originalPrice: "R$ 109,90",
    progress: 0,
    students: 1500,
    hours: 32,
    image:
      "https://images.unsplash.com/photo-1667372531881-6f975b1c86db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxweXRob24lMjBwcm9ncmFtbWluZyUyMGJhY2tlbmR8ZW58MXx8fHwxNzczMjg3NjQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: "Novo",
  },
];

function StarRating({ rating, reviews }: { rating: number; reviews: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            className={`w-3.5 h-3.5 ${
              i <= Math.round(rating) ? "text-amber-400 fill-amber-400" : "text-gray-200 fill-gray-200"
            }`}
          />
        ))}
      </div>
      <span className="text-[0.8rem] text-foreground font-semibold">{rating}</span>
      <span className="text-[0.75rem] text-muted-foreground">({reviews >= 1000 ? `${(reviews / 1000).toFixed(1)}k` : reviews})</span>
    </div>
  );
}

function TagBadge({ tag }: { tag: string }) {
  const colors: Record<string, string> = {
    Bestseller: "bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] text-white",
    Novo: "bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-white",
    Popular: "bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] text-white",
  };
  return (
    <span
      className={`absolute top-3 left-3 px-3 py-1 rounded-lg text-[0.7rem] font-semibold shadow-lg ${colors[tag] || "bg-gray-100 text-gray-700"}`}
    >
      {tag}
    </span>
  );
}

export function FeaturedCourses() {
  return (
    <section className="py-20 bg-[#FAFAFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[0.8rem] bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] bg-clip-text text-transparent uppercase tracking-wider font-semibold">
            Cursos em destaque
          </span>
          <h2 className="text-[2rem] md:text-[2.5rem] text-foreground mt-2 tracking-tight font-bold">
            Aprenda com os melhores
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Cursos selecionados com as melhores avaliacoes da plataforma
          </p>
        </div>

        {/* Course grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-white rounded-2xl border border-[#7C3AED]/8 hover:border-[#7C3AED]/20 shadow-sm hover:shadow-xl hover:shadow-[#7C3AED]/10 transition-all duration-500 overflow-hidden hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={course.image}
                  alt={course.title}
                  className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <TagBadge tag={course.tag} />
                {/* Price badge */}
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm rounded-lg px-2.5 py-1 shadow-lg">
                  <span className="text-[0.85rem] font-bold bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] bg-clip-text text-transparent">{course.price}</span>
                  <span className="text-[0.65rem] text-muted-foreground line-through ml-1">{course.originalPrice}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-[0.9rem] text-foreground mb-2 line-clamp-2 leading-snug font-semibold group-hover:text-[#7C3AED] transition-colors duration-300">
                  {course.title}
                </h3>

                {/* Instructor with avatar */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#3B82F6] flex items-center justify-center">
                    <span className="text-[0.5rem] text-white font-bold">{course.avatar}</span>
                  </div>
                  <p className="text-[0.8rem] text-muted-foreground">{course.instructor}</p>
                </div>

                <StarRating rating={course.rating} reviews={course.reviews} />

                {/* Course meta */}
                <div className="flex items-center gap-3 mt-3 text-[0.75rem] text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {course.hours}h
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {course.students >= 1000 ? `${(course.students / 1000).toFixed(1)}k` : course.students}
                  </span>
                </div>

                {/* Progress bar (if enrolled) */}
                {course.progress > 0 && (
                  <div className="mt-3 pt-3 border-t border-[#7C3AED]/8">
                    <div className="flex justify-between text-[0.7rem] mb-1.5">
                      <span className="text-muted-foreground">Progresso</span>
                      <span className="font-semibold bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] bg-clip-text text-transparent">{course.progress}%</span>
                    </div>
                    <div className="h-1.5 bg-[#7C3AED]/8 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${course.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 1.2, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ background: "var(--gradient-progress)" }}
                      />
                    </div>
                  </div>
                )}

                {course.progress === 0 && (
                  <div className="mt-3 pt-3 border-t border-[#7C3AED]/8">
                    <button className="w-full text-[0.8rem] text-[#7C3AED] hover:text-[#3B82F6] font-semibold cursor-pointer transition-colors duration-300 flex items-center justify-center gap-1">
                      Ver curso
                      <span className="group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3.5 rounded-xl border-2 border-[#7C3AED] text-[#7C3AED] hover:bg-gradient-to-r hover:from-[#7C3AED] hover:to-[#3B82F6] hover:text-white hover:border-transparent transition-all duration-300 cursor-pointer font-semibold hover:shadow-lg hover:shadow-[#7C3AED]/25 hover:-translate-y-0.5">
            Ver todos os cursos
          </button>
        </div>
      </div>
    </section>
  );
}
