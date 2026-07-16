# Trilhara Implementation Plan

**Status:** implementado e validado em 16 de julho de 2026.

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transformar a demonstração SkillFlow em Trilhara, preservando o fluxo React/Vite, o curso Fundamentos de Desenvolvimento Web e a persistência local.

**Architecture:** Manter a navegação por estado existente em `App.tsx` e o modelo tipado em `demoCourse.ts`. Substituir identidade, conteúdo e tokens visuais nos componentes ativos, remover superfícies genéricas sem função e manter todo o progresso no navegador.

**Tech Stack:** React 18, TypeScript 5.9, Vite 6, Tailwind CSS 4, Lucide React e Playwright.

## Global Constraints

- Preservar React/Vite, persistência local, fluxo ativo e escopo demonstrativo.
- Manter o curso Fundamentos de Desenvolvimento Web com três etapas.
- Usar Trilhara, slogan “Aprender tem caminho.” e público de escolas, instrutores e empresas de treinamento.
- Não adicionar autenticação, pagamentos, certificados, métricas, clientes ou depoimentos fictícios.
- Validar em 1440×900 e 390×844, com contraste WCAG AA, teclado, foco visível e sem erros no console.
- Produzir exatamente três commits de implementação; não fazer merge nem renomear o repositório.

## File Structure

- `src/app/data/demoCourse.ts`: fonte única do curso, instrutora e etapas.
- `src/app/hooks/useLearningProgress.ts`: persistência local com namespace Trilhara.
- `src/app/components/*`: vitrine, painel, aula e percurso demonstrativo.
- `src/styles/theme.css`: tokens, tipografia, foco e movimento reduzido.
- `index.html`, `public/*`: metadados, favicon e arquivos de descoberta.
- `tests/e2e/learning-flow.spec.ts`: contrato de marca, navegação, persistência e acessibilidade básica.
- `README.md`, `docs/screenshots/*`: documentação e evidências reais.

---

### Task 1: Identidade, conteúdo e testes

**Files:**
- Modify: `tests/e2e/learning-flow.spec.ts`
- Modify: `src/app/data/demoCourse.ts`
- Modify: `src/app/hooks/useLearningProgress.ts`
- Modify: `src/app/App.tsx`
- Modify: `src/app/components/Header.tsx`
- Modify: `src/app/components/Hero.tsx`
- Modify: `src/app/components/FeaturedCourses.tsx`
- Modify: `src/app/components/Benefits.tsx`
- Modify: `src/app/components/Footer.tsx`
- Modify: `src/app/components/StudentDashboard.tsx`
- Modify: `src/app/components/LessonView.tsx`
- Create: `src/app/components/LearningJourney.tsx`
- Delete: `src/app/components/Categories.tsx`
- Delete: `src/app/components/Testimonials.tsx`
- Modify: `index.html`
- Create: `public/favicon.svg`
- Create: `public/robots.txt`
- Create: `public/sitemap.xml`

**Interfaces:**
- Consumes: `demoCourse.lessons`, `useLearningProgress()` e callbacks de navegação existentes.
- Produces: `demoCourse.instructor`, chave `trilhara:demo-progress:v1` e conteúdo público Trilhara.

- [ ] **Step 1: Atualizar o teste E2E para o contrato Trilhara**

Adicionar expectativas para título `Trilhara | Aprender tem caminho`, marca Trilhara, CTA `Conhecer o percurso`, ação `Marcar etapa como concluída`, progresso em `etapas`, metadados e ausência pública de `SkillFlow`.

- [ ] **Step 2: Executar o teste e confirmar falha pelo nome antigo**

Run: `npm test -- --project=chromium`

Expected: FAIL ao encontrar título ou textos SkillFlow.

- [ ] **Step 3: Implementar conteúdo e identidade mínimos**

Atualizar dados, textos, metadados, persistência, favicon e descoberta sem alterar o mecanismo de navegação. Remover a seção de categorias fictícias e substituir `Testimonials` por `LearningJourney`, que descreve apenas o fluxo demonstrável real.

- [ ] **Step 4: Executar teste e verificações do commit**

Run: `npm run typecheck && npm run lint && npm test && npm run build`

Expected: todos os comandos com código 0.

- [ ] **Step 5: Commit**

```bash
git add src tests index.html public
git commit -m "feat: estabelece identidade e conteúdo da Trilhara"
```

### Task 2: Refinamento visual, responsivo e limpeza

**Files:**
- Modify: `src/styles/fonts.css`
- Modify: `src/styles/theme.css`
- Modify: `src/app/components/Header.tsx`
- Modify: `src/app/components/Hero.tsx`
- Modify: `src/app/components/FeaturedCourses.tsx`
- Modify: `src/app/components/Benefits.tsx`
- Modify: `src/app/components/LearningJourney.tsx`
- Modify: `src/app/components/Footer.tsx`
- Modify: `src/app/components/StudentDashboard.tsx`
- Modify: `src/app/components/LessonView.tsx`
- Modify: `package.json`
- Modify: `package-lock.json`

**Interfaces:**
- Consumes: conteúdo e callbacks do Task 1.
- Produces: tokens Trilhara, componentes responsivos e bundle sem `motion`.

- [ ] **Step 1: Estender testes para estados mobile, menu, foco e overflow**

Adicionar verificações para menu mobile, foco inicial, ausência de overflow, navegação completa e console sem erros nos dois viewports.

- [ ] **Step 2: Executar o teste e confirmar a falha visual/comportamental esperada**

Run: `npm test`

Expected: FAIL no contrato do menu, rótulos ou estados ainda não refinados.

- [ ] **Step 3: Aplicar sistema visual aprovado**

Implementar branco mineral `#FAFAF7`, grafite `#18211E`, verde profundo `#17362F`, acento `#DDEB68`, estados sem dependência exclusiva de cor, Manrope local, foco visível, áreas de toque e `prefers-reduced-motion`.

- [ ] **Step 4: Remover animação e dependências sem uso**

Substituir `motion/react` por transições CSS discretas, remover `motion` do manifesto e confirmar com `npm ls motion` que a dependência não permanece.

- [ ] **Step 5: Executar verificações e medir bundle final**

Run: `npm run typecheck && npm run lint && npm test && npm run build`

Expected: código 0, sem warnings de aplicação e bundle JavaScript menor que a linha de base de 314.17 kB (99.51 kB gzip).

- [ ] **Step 6: Commit**

```bash
git add src package.json package-lock.json tests
git commit -m "style: refina experiência responsiva da Trilhara"
```

### Task 3: Documentação, screenshots e auditoria final

**Files:**
- Modify: `README.md`
- Modify: `docs/screenshots/cursos-home-desktop.png`
- Modify: `docs/screenshots/cursos-desktop.png`
- Modify: `docs/screenshots/cursos-concluido.png`
- Create: `docs/screenshots/trilhara-home-mobile.png`
- Include: `docs/superpowers/specs/2026-07-16-trilhara-identity-design.md`
- Include: `docs/superpowers/plans/2026-07-16-trilhara-implementation.md`

**Interfaces:**
- Consumes: aplicação final dos Tasks 1 e 2.
- Produces: documentação pública, screenshots reais e evidência auditável.

- [ ] **Step 1: Capturar screenshots reais**

Capturar home desktop 1440×900, painel desktop, curso concluído e home mobile 390×844, sem alterar o estado funcional da aplicação.

- [ ] **Step 2: Atualizar README**

Documentar Trilhara, posicionamento, público, fluxo demonstrativo, limitações, comandos, persistência `trilhara:demo-progress:v1` e screenshots atuais.

- [ ] **Step 3: Executar auditorias finais**

Run: `npm ci; npm run typecheck; npm run lint; npm test; npm run build; npm audit; git diff --check`

Expected: todos com código 0 e `npm audit` com 0 vulnerabilidades.

Pesquisar nomes antigos, segredos, arquivos `.env`, caracteres bidirecionais e artefatos gerados. Permitir nomes antigos apenas em histórico interno da especificação, nunca no bundle ou documentação pública.

- [ ] **Step 4: Commit**

```bash
git add README.md docs
git commit -m "docs: documenta produto e screenshots da Trilhara"
```

- [ ] **Step 5: Atualizar PR existente**

Fazer push de `feat/portfolio-polish`, atualizar título e descrição do PR #1, acompanhar CI e preview sem fazer merge.
