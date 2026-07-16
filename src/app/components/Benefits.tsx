import { Accessibility, CheckCircle2, Compass, RefreshCw, Smartphone, WifiOff } from "lucide-react";

const capabilities = [
  { icon: Compass, title: "Próxima etapa visível", description: "O painel mostra o avanço atual e indica com clareza onde continuar." },
  { icon: CheckCircle2, title: "Conclusão por etapa", description: "Cada conteúdo pode ser marcado individualmente até finalizar todo o percurso." },
  { icon: RefreshCw, title: "Progresso persistente", description: "O navegador mantém o avanço local mesmo depois de atualizar a página." },
  { icon: WifiOff, title: "Sem credenciais", description: "A demonstração funciona sem login, banco de dados ou chaves externas." },
  { icon: Smartphone, title: "Interface responsiva", description: "Conteúdo e controles preservam a hierarquia em desktop e mobile." },
  { icon: Accessibility, title: "Navegação acessível", description: "Semântica, foco visível e controles utilizáveis por teclado." },
];

export function Benefits() {
  return (
    <section id="recursos" className="scroll-mt-24 border-y border-border bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl"><span className="eyebrow">Recursos implementados</span><h2 className="mt-4 text-3xl font-extrabold tracking-[-0.035em] text-foreground sm:text-5xl">Clareza para aprender sem perder o ritmo.</h2><p className="mt-5 text-lg leading-8 text-muted-foreground">Cada recurso abaixo pode ser testado nesta demonstração pública.</p></div>
        <div className="mt-14 grid border-t border-border sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => (
            <article key={item.title} className="border-b border-border py-7 sm:px-6">
              <item.icon className="h-6 w-6 text-primary" strokeWidth={1.8} aria-hidden="true" />
              <h3 className="mt-5 text-lg font-extrabold text-foreground">{item.title}</h3>
              <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
