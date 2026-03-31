# Studio Tattoo Cyber Tribal - Astro SSG

Site estático de portfólio de tatuagem migrado para **Astro** mantendo 100% da estética visual original.

##  Tecnologias

- **Astro 4+**: Framework SSG (Static Site Generation)
- **HTML/CSS/JavaScript Puro**: Sem dependências de frameworks JS
- **Responsive Design**: Otimizado para desktop, tablet e mobile

##  Estrutura do Projeto

```
src/
├── layouts/
│   └── BaseLayout.astro       # Layout principal (meta tags, estrutura HTML base)
├── pages/
│   └── index.astro             # Página inicial com intro + menu + conteúdo
├── scripts/
│   └── interaction.js          # JavaScript da página (mantido para referência)
└── styles/
    └── global.css              # CSS global (100% preservado do original)

public/
├── images/
│   └── preto.png              # Logo da página
└── scripts/
    └── interaction.js          # Script público (referência)

dist/                           # Saída do build (ignorado)
node_modules/                   # Dependências (ignorado)
```

##  Como Usar

### Desenvolvimento

```bash
npm install
npm run dev
# Abrir http://localhost:4321/
```

### Build (Produção)

```bash
npm run build
npm run preview  # Pré-visualizar build
```

##  Funcionalidades Preservadas

- ✅ Intro com animação de linhas (slide-in)
- ✅ Logo com animação de pulse
- ✅ Menu interativo com seleção de estilos de tatuagem
- ✅ Transições suaves de conteúdo ao trocar estilos
- ✅ Efeito do mouse glow seguindo cursor
- ✅ Grid background com tribal overlay
- ✅ Cards com hover effects
- ✅ Design responsivo (mobile-first)

##  Estética 100% Preservada

- **Cores**: Cyber tribal (cyan #00f7ff, pink #ff005d, purple #7a00ff)
- **Tipografia**: Arial/Helvetica com letter-spacing
- **Layout**: Introdução full-screen → Main flex layout (sidebar + content)
- **Animações**: Todas as estruturas visuais identicas
- **Responsividade**: Quebras em 980px e 600px mantidas

##  Notas de Migração

### O que mudou (tecnicamente)

1. **HTML**: Estruturado em componentes Astro (.astro files)
2. **CSS**: Movido para `src/styles/global.css` (sem alterações no conteúdo)
3. **JavaScript**: Embedado com `<script is:inline>` no `index.astro` (sem alterações lógicas)
4. **Build**: De HTML/CSS/JS puro → Astro SSG com otimizações

### O que NÃO mudou

- Layout visual
- Cores e espaçamento
- Animações e transições
- Funcionalidade do menu e interações
- Estrutura de classes CSS

##  Build Output

O site compilado fica em `dist/`. Cada build gera:
- `index.html`: Página única com CSS inline e scripts embarcados
- Arquivos otimizados e minificados

##  Deploy

Para deployar:

```bash
npm run build
# Copiar conteúdo de 'dist/' para seu servidor
```

Compatível com qualquer servidor de arquivos estáticos (Netlify, Vercel, GitHub Pages, etc).

##  Manutenção Futura

Se precisar adicionar conteúdo:

1. **Editar conteúdo HTML**: Modificar `src/pages/index.astro`
2. **Editar estilos**: Editar `src/styles/global.css`
3. **Editar scripts**: Editar a tag `<script is:inline>` em `src/pages/index.astro`

Tudo permanece com a mesma lógica do arquivo original - fácil manutenção!

---

**Migração concluída com sucesso! **
