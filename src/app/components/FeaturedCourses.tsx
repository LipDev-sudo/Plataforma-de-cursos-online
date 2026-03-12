import { Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const courses = [
  {
    id: 1,
    title: "Desenvolvimento Web Completo",
    instructor: "Carlos Mendes",
    rating: 4.9,
    reviews: 1240,
    price: "R$ 49,90",
    image:
      "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NzMyNzI4Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: "Bestseller",
  },
  {
    id: 2,
    title: "React para Iniciantes",
    instructor: "Ana Silva",
    rating: 4.8,
    reviews: 890,
    price: "R$ 39,90",
    image:
      "https://images.unsplash.com/photo-1653387319597-84bde7e5368e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFjdCUyMHByb2dyYW1taW5nJTIwamF2YXNjcmlwdHxlbnwxfHx8fDE3NzMyODc2Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: "Novo",
  },
  {
    id: 3,
    title: "UI/UX Design",
    instructor: "Juliana Costa",
    rating: 4.7,
    reviews: 650,
    price: "R$ 59,90",
    image:
      "https://images.unsplash.com/photo-1622117515670-fcb02499491f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVSSUyMFVYJTIwZGVzaWduJTIwd2lyZWZyYW1lfGVufDF8fHx8MTc3MzI4NzYzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: "Popular",
  },
  {
    id: 4,
    title: "JavaScript Avançado",
    instructor: "Rafael Lima",
    rating: 4.9,
    reviews: 1100,
    price: "R$ 44,90",
    image:
      "https://images.unsplash.com/photo-1653387137517-fbc54d488ed8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXZhc2NyaXB0JTIwY29kZSUyMHByb2dyYW1taW5nfGVufDF8fHx8MTc3MzI4NzY0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: "Bestseller",
  },
  {
    id: 5,
    title: "Python para Backend",
    instructor: "Marcos Oliveira",
    rating: 4.6,
    reviews: 430,
    price: "R$ 54,90",
    image:
      "https://images.unsplash.com/photo-1667372531881-6f975b1c86db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxweXRob24lMjBwcm9ncmFtbWluZyUyMGJhY2tlbmR8ZW58MXx8fHwxNzczMjg3NjQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: "Novo",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${
            i <= Math.round(rating) ? "text-amber-400 fill-amber-400" : "text-gray-200 fill-gray-200"
          }`}
        />
      ))}
      <span className="text-[0.8rem] text-foreground ml-1" style={{ fontWeight: 600 }}>{rating}</span>
      <span className="text-[0.75rem] text-muted-foreground">({rating >= 1000 ? `${(rating / 1000).toFixed(1)}k` : rating})</span>
    </div>
  );
}

function TagBadge({ tag }: { tag: string }) {
  const colors: Record<string, string> = {
    Bestseller: "bg-amber-100 text-amber-700",
    Novo: "bg-green-100 text-green-700",
    Popular: "bg-blue-100 text-blue-700",
  };
  return (
    <span
      className={`absolute top-3 left-3 px-2.5 py-1 rounded-md text-[0.7rem] ${colors[tag] || "bg-gray-100 text-gray-700"}`}
      style={{ fontWeight: 600 }}
    >
      {tag}
    </span>
  );
}

export function FeaturedCourses() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="text-[0.8rem] text-[#6c3ce0] uppercase tracking-wider" style={{ fontWeight: 600 }}>
            Cursos em destaque
          </span>
          <h2
            className="text-[2rem] md:text-[2.5rem] text-foreground mt-2 tracking-tight"
            style={{ fontWeight: 700 }}
          >
            Aprenda com os melhores
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Cursos selecionados com as melhores avaliações da plataforma
          </p>
        </div>

        {/* Course grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group bg-white rounded-xl border border-border shadow-sm hover:shadow-xl hover:shadow-[#6c3ce0]/5 transition-all duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={course.image}
                  alt={course.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <TagBadge tag={course.tag} />
              </div>
              <div className="p-4">
                <h3 className="text-[0.9rem] text-foreground mb-1 line-clamp-2 leading-snug" style={{ fontWeight: 600 }}>
                  {course.title}
                </h3>
                <p className="text-[0.8rem] text-muted-foreground mb-2">
                  {course.instructor}
                </p>
                <StarRating rating={course.rating} />
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                  <span className="text-[1rem] text-[#6c3ce0]" style={{ fontWeight: 700 }}>{course.price}</span>
                  <button className="text-[0.8rem] text-[#6c3ce0] hover:underline cursor-pointer" style={{ fontWeight: 500 }}>
                    Ver curso →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 rounded-xl border-2 border-[#6c3ce0] text-[#6c3ce0] hover:bg-[#6c3ce0] hover:text-white transition-colors cursor-pointer">
            Ver todos os cursos
          </button>
        </div>
      </div>
    </section>
  );
}
