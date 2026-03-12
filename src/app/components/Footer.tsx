import { GraduationCap } from "lucide-react";

const footerLinks = {
  Plataforma: ["Sobre nós", "Carreiras", "Blog", "Parceiros"],
  Cursos: ["Programação", "Design", "Marketing", "Negócios"],
  Suporte: ["Central de Ajuda", "FAQ", "Contato", "Comunidade"],
  Legal: ["Termos de Uso", "Privacidade", "Cookies", "Licenças"],
};

const socialIcons = [
  { name: "Twitter", path: "M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.43.36a9.72 9.72 0 01-3.36 1.29A4.48 4.48 0 0011.5 7.5 12.72 12.72 0 011.64 1.15 4.48 4.48 0 003 7.47a4.48 4.48 0 002 3.72A4.49 4.49 0 012.8 10.6v.06a4.48 4.48 0 003.58 4.39 4.48 4.48 0 01-2 .08 4.48 4.48 0 004.18 3.12A9 9 0 010 19.54a12.72 12.72 0 006.92 2.03c8.3 0 12.84-6.88 12.84-12.84 0-.2 0-.39-.01-.58A9.22 9.22 0 0023 3z" },
  { name: "Instagram", path: "M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5A4.25 4.25 0 0020.5 16.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-2.5a1 1 0 110 2 1 1 0 010-2z" },
  { name: "LinkedIn", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
  { name: "YouTube", path: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
];

export function Footer() {
  return (
    <footer className="bg-[#0f0d1a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#6c3ce0] to-[#4f46e5] flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-[1.15rem] tracking-tight" style={{ fontWeight: 700 }}>
                Skill<span className="text-[#a78bfa]">Flow</span>
              </span>
            </a>
            <p className="text-[0.85rem] text-gray-400 leading-relaxed mb-6 max-w-xs">
              Transforme sua carreira com cursos online de alta qualidade. Aprenda com os melhores profissionais do mercado.
            </p>
            <div className="flex gap-3">
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#6c3ce0] flex items-center justify-center transition-colors"
                  aria-label={social.name}
                >
                  <svg className="w-4 h-4 fill-current text-gray-400 hover:text-white" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[0.85rem] text-white mb-4 uppercase tracking-wider" style={{ fontWeight: 600 }}>
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[0.85rem] text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[0.8rem] text-gray-500">
            © 2026 SkillFlow. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[0.8rem] text-gray-500 hover:text-gray-300 transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-[0.8rem] text-gray-500 hover:text-gray-300 transition-colors">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
