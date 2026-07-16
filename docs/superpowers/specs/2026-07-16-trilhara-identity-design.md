# Trilhara — especificação de identidade e produto

## Objetivo

Transformar a demonstração SkillFlow em Trilhara, um produto fictício de aprendizagem online que apresenta uma jornada completa de estudo sem parecer um marketplace genérico ou um exercício acadêmico. A implementação deve preservar a arquitetura React/Vite, a persistência local e o fluxo ativo existente.

## Posicionamento

- **Nome:** Trilhara
- **Categoria:** plataforma de aprendizagem online
- **Público:** escolas digitais, instrutores independentes e empresas que oferecem treinamentos
- **Proposta de valor:** organizar conteúdos em percursos claros, mostrando o que estudar agora, o que vem depois e quanto já foi concluído
- **Slogan:** “Aprender tem caminho.”
- **Personalidade:** clara, estimulante, segura e humana
- **Tom de voz:** orientador, direto e encorajador, sem infantilização, promessas exageradas ou jargão corporativo

Trilhara deve comunicar continuidade e direção. O nome não será associado a turismo: todo o vocabulário público deve falar de aprendizagem, aulas, etapas, percurso formativo e progresso.

## Diferenciação no portfólio

Trilhara continuará existindo para demonstrar competência em arquitetura de experiência educacional: organização de conteúdo, navegação entre aulas, progresso persistente e estados de conclusão.

Ela não deve reutilizar:

- a linguagem operacional de gestão de trabalho da Ritmoar;
- a experiência mobile de compra e alimentação da Mesaora;
- a agenda e o vocabulário de serviços da Horavia;
- layouts, paletas ou componentes que façam os quatro produtos parecerem variações do mesmo template.

O principal fluxo demonstrável será: conhecer o curso, iniciar a aula, avançar pelo conteúdo, marcar etapas como concluídas, acompanhar o progresso e reiniciar a demonstração.

## Direção visual

A interface terá caráter editorial e educacional contemporâneo, com hierarquia forte e baixa carga visual.

- **Base:** branco mineral `#FAFAF7`, superfície branca `#FFFFFF` e cinzas neutros, evitando o fundo lilás dominante atual.
- **Texto:** grafite `#18211E`, com texto secundário `#5C6863`.
- **Cor principal:** verde profundo `#17362F`, associado a direção e confiança, sem remeter a finanças ou saúde.
- **Acento:** amarelo-lima `#DDEB68`, controlado para progresso, foco e próxima ação; nunca para grandes áreas de fundo.
- **Estados:** sucesso `#217A5B`, atenção `#A75D12` e erro `#B33A3A`, sempre acompanhados por texto ou ícone.
- **Estados:** sucesso, foco, erro e conteúdo bloqueado devem ter cor, texto e ícone, sem depender apenas da cor.
- **Tipografia:** Manrope para interface e leitura longa, entregue localmente pela aplicação, com contraste evidente entre título, resumo, conteúdo e metadados.
- **Ícones:** Lucide em traço consistente, apenas quando melhorarem reconhecimento ou navegação.
- **Imagens:** capas editoriais abstratas ou composições simples relacionadas ao conteúdo do curso; sem fotos genéricas de bancos de imagem, pessoas fictícias ou ilustrações 3D de tecnologia.
- **Superfícies:** espaço em branco amplo, bordas suaves e sombras discretas; sem gradientes decorativos genéricos.

Desktop e mobile manterão a mesma identidade. Em telas pequenas, a próxima ação e o progresso devem permanecer visíveis antes de conteúdo secundário.

## Marca

O logotipo será tipográfico, acompanhado por um símbolo simples inspirado em uma sequência de três etapas conectadas. O símbolo deve permanecer legível como favicon e não será construído como ilustração complexa.

Aplicações obrigatórias:

- cabeçalho e rodapé;
- favicon;
- título da página e metadados;
- Open Graph;
- README e screenshots;
- textos acessíveis usados por tecnologias assistivas.

## Conteúdo demonstrativo

O curso continuará sendo **Fundamentos de Desenvolvimento Web**, pois ele sustenta o fluxo atual e demonstra uma trilha coerente para iniciantes. O conteúdo será apresentado como uma amostra criada pela instrutora fictícia **Marina Costa**, especialista em desenvolvimento front-end e educação digital.

O percurso manterá três etapas:

1. Estrutura semântica com HTML;
2. Interfaces responsivas com CSS;
3. Interações previsíveis com JavaScript.

Não serão adicionados números de alunos, avaliações, depoimentos, certificados, empresas clientes ou resultados inventados. A aplicação continuará indicando com clareza que é uma demonstração de produto, sem cadastro, pagamentos ou emissão de certificados.

## Linguagem da interface

As ações devem indicar claramente o resultado esperado:

- “Conhecer o percurso” para apresentar o curso;
- “Continuar aprendendo” quando houver progresso salvo;
- “Marcar etapa como concluída” na aula;
- “Ver meu progresso” para abrir o painel;
- “Recomeçar demonstração” para apagar o estado local.

Estados vazios e mensagens usarão linguagem orientadora, por exemplo: “Seu percurso começa na primeira etapa” e “Etapa concluída. A próxima aula já está disponível.”

## Arquitetura e dados

Não haverá mudança de framework, roteamento, autenticação, banco de dados ou serviços externos. A implementação reutilizará os componentes ativos e removerá apenas código ou dependências comprovadamente sem uso.

A chave de persistência migrará de `skillflow:demo-progress:v1` para `trilhara:demo-progress:v1`. Como os dados são exclusivamente demonstrativos, não será mantida compatibilidade com o nome antigo.

## Acessibilidade e responsividade

- contraste mínimo WCAG AA;
- foco visível em todos os controles;
- navegação completa por teclado;
- landmarks e títulos em ordem lógica;
- texto alternativo útil para imagens informativas;
- ícones decorativos ignorados por leitores de tela;
- alvos de toque adequados em 390×844;
- ausência de overflow horizontal em 390×844 e 1440×900;
- suporte a `prefers-reduced-motion` nas animações.

## SEO e metadados

Título, descrição, canonical, Open Graph, robots e sitemap devem usar Trilhara e a URL oficial de produção definida para o projeto. A descrição deve informar que se trata de uma demonstração funcional de plataforma educacional, sem sugerir uma operação comercial real.

## Testes e validação

A implementação será considerada pronta somente após:

- `npm ci`;
- `npm run typecheck`;
- `npm run lint`;
- `npm run build`;
- testes Playwright existentes em 1440×900 e 390×844;
- revisão de todos os textos e busca por `SkillFlow`, `Nexora` e nomes históricos;
- verificação de favicon, título, metadata, canonical, Open Graph, robots e sitemap;
- verificação de contraste, teclado e console;
- screenshots reais atualizadas;
- `npm audit` e auditoria de segredos.

## Commits previstos

1. identidade, conteúdo e testes de comportamento;
2. refinamento visual e responsivo;
3. documentação e screenshots.

O Pull Request existente será atualizado. Não haverá merge nem renomeação do repositório sem autorização posterior.

## Fora de escopo

- autenticação real;
- pagamentos;
- upload ou streaming de vídeo;
- certificados;
- painel administrativo completo;
- novos cursos além do percurso demonstrativo;
- mudança de arquitetura;
- renomeação do repositório;
- merge do Pull Request.
