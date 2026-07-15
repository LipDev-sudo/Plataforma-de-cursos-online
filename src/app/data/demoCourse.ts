export type DemoLesson = {
  id: string;
  title: string;
  duration: string;
  summary: string;
  content: string[];
};

export const demoCourse = {
  id: "fundamentos-web",
  title: "Fundamentos de Desenvolvimento Web",
  description:
    "Uma trilha demonstrativa para conhecer a experiência de estudo, navegação entre aulas e acompanhamento de progresso.",
  level: "Iniciante",
  lessons: [
    {
      id: "estrutura-html",
      title: "Estrutura de uma página HTML",
      duration: "6 min",
      summary: "Entenda como os elementos semânticos organizam o conteúdo de uma página.",
      content: [
        "HTML descreve a estrutura e o significado do conteúdo exibido no navegador.",
        "Elementos como header, main, section e footer ajudam pessoas e tecnologias assistivas a entender a página.",
        "Uma boa estrutura facilita manutenção, acessibilidade e indexação por mecanismos de busca.",
      ],
    },
    {
      id: "estilos-css",
      title: "Estilos responsivos com CSS",
      duration: "8 min",
      summary: "Veja como layout fluido e media queries adaptam a interface a diferentes telas.",
      content: [
        "CSS controla apresentação, espaçamento, cores e distribuição dos elementos.",
        "Layouts responsivos combinam medidas flexíveis, limites de largura e pontos de quebra quando necessários.",
        "O teste em telas reais evita textos cortados, sobreposições e controles difíceis de usar.",
      ],
    },
    {
      id: "interacao-javascript",
      title: "Interação com JavaScript",
      duration: "7 min",
      summary: "Conecte eventos da interface ao estado da aplicação de forma previsível.",
      content: [
        "JavaScript permite responder a cliques, entradas de dados e outras ações do usuário.",
        "Em React, a interface é derivada do estado, o que torna as mudanças mais fáceis de acompanhar.",
        "Feedback imediato de carregamento, sucesso e erro melhora a experiência e reduz dúvidas.",
      ],
    },
  ] satisfies DemoLesson[],
};

