# Biblioteca Universitária — React (Vite + TypeScript)

Aplicação React criada com Vite para a Biblioteca Universitária, preparada para publicação no GitHub Pages.

## Scripts

- `npm run dev` — desenvolvimento (http://localhost:5173)
- `npm run build` — build de produção (gera `dist/`)
- `npm run preview` — pré-visualização do build

## Estrutura

- `index.html` — entrada Vite
- `src/` — código React (`App.tsx`, `main.tsx`, `index.css`)
- `public/404.html` — fallback SPA para GitHub Pages
- `.nojekyll` — impede processamento pelo Jekyll

Notas:
- `vite.config.ts` já está com `base: "/biblioteca_universitaria/"` (project page).
- Se for um site de utilizador/organização (`username.github.io`), deixe `base: "/"`.

## Publicar no GitHub Pages (branch)

1) Faça build:
   ```bash
   npm install
   npm run build
   ```
2) Publique o conteúdo de `dist/` para o GitHub Pages:
   - Opção simples: servir a raiz do repositório e copiar `dist` para a branch `main` (como root).
   - Opção recomendada: ativar Pages em Settings → Pages:
     - Source: “Deploy from a branch”
     - Branch: `gh-pages` e pasta `/ (root)` (recomendado com action)

### Deploy automático (opcional)
Este repositório já inclui um workflow GitHub Actions (`.github/workflows/deploy.yml`) que publica para GitHub Pages em cada push para `main`. A primeira execução ativará as Pages automaticamente.

## Desenvolvimento local

```bash
npm install
npm run dev
```

## Próximos passos

- Replicar o layout/design do Canva.
- Definir navegação e conteúdos.
- Integrar pesquisa real (se aplicável).


