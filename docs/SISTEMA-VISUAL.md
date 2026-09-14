# Sistema visual — Mercearia do Seu Zé

Referência técnica do que está implementado em `css/style.css`, `js/script.js` e nas páginas. Use este arquivo para manter consistência ao criar novas seções ou páginas.

---

## Tokens (`:root`)

| Token | Valor | Uso |
|---|---|---|
| `--bg` | `#0e0d0b` | Fundo principal (quase preto quente) |
| `--bg-2` | `#151311` | Barra de informações, rodapé |
| `--bg-3` | `#1d1a17` | Placeholder de imagem |
| `--ink` | `#efe8dc` | Texto principal (creme) |
| `--ink-2` | `#a89f92` | Texto secundário |
| `--ink-3` | `#6f675c` | Texto terciário, preço riscado |
| `--line` | `rgba(239,232,220,.12)` | Todas as linhas divisórias |
| `--gold` | `#d3a55a` | **Único acento**: kickers, itálico, preço, hover |
| `--serif` | Cormorant Garamond | Títulos, preços grandes, endereço, marquee |
| `--sans` | Manrope | Texto, botões, rótulos |
| `--gutter` | `clamp(1.25rem, 5vw, 4.5rem)` | Margem lateral de todas as seções |
| `--ease` | `cubic-bezier(0.22, 1, 0.36, 1)` | Easing padrão de todas as transições |

Fontes carregadas do Google Fonts no `<head>` de cada página:
```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Manrope:wght@400;500;600&display=swap" rel="stylesheet">
```

---

## Escala tipográfica

| Classe / elemento | Fonte | Tamanho | Observações |
|---|---|---|---|
| `.hero-title` | serif 500 | `clamp(2.6rem, 6vw, 5.4rem)` | `line-height: .98`, `max-width: 14ch`, `<em>` em itálico dourado |
| `.page-hero .display` | serif 500 | `clamp(2.8rem, 7vw, 6rem)` | Hero das páginas internas |
| `.display` | serif 500 | `clamp(2.2rem, 4.2vw, 3.6rem)` | Título de seção |
| `.product-info h3` | serif 500 | `1.6rem` (catálogo: `1.35rem`) | Nome do produto |
| `.infobar-value`, `.visit-block address` | serif 500 | `1.35–1.5rem` | Informações em destaque |
| `.kicker` | sans 600 | `.72rem`, caixa alta, `letter-spacing: .22em` | Rótulo acima de títulos, cor dourada |
| `.link` | sans 600 | `.8rem`, caixa alta, `letter-spacing: .16em` | Link com sublinhado dourado que encolhe no hover |
| `.btn` | sans 600 | `.78rem`, caixa alta, `letter-spacing: .16em` | Botão retangular |
| Texto corrido | sans 400 | `1rem` / `1.05–1.12rem` em story | `line-height: 1.65`, cor `--ink-2` |
| `.muted` | sans 400 | `.95rem` | Texto de apoio |

---

## Componentes

### Cabeçalho `.site-header`
- `position: fixed`, transparente sobre o hero.
- Classe `.solid` (adicionada pelo JS após 40px de scroll): fundo `rgba(14,13,11,.88)` + `backdrop-filter: blur(14px)` + borda inferior.
- Marca em serifa (`.brand-mark`) + sublinha em caixa alta (`.brand-sub`).
- Menu em caixa alta `--ink-2`, fica `--ink` no hover/ativo.
- CTA dourado à direita (`.header-cta`); some no mobile, onde entra o `.nav-toggle` (duas linhas que viram X).

### Hero `.hero`
- `height: clamp(640px, 100svh, 1000px)` — nunca use `100vh` puro (fica gigante em monitores grandes).
- `<img class="hero-img">` com `object-fit: cover` e animação `hero-zoom` (1.06 → 1 em 8s).
- `.hero-shade`: gradiente vertical `.6 → .3 → .65 → .97` de preto — garante legibilidade embaixo.
- Conteúdo alinhado ao **rodapé** do hero (`align-items: flex-end`).
- `.hero-status`: pill com borda fina e ponto colorido (verde aberto / vermelho fechado), posicionada no canto superior direito.

### Barra de informações `.infobar`
- Grade de 3 colunas separadas por `--line`, fundo `--bg-2`.
- Cada item: rótulo dourado → valor em serifa → nota em `--ink-2`.
- No mobile vira uma coluna.

### Seção dividida `.split`
- Grade 1fr/1fr, `min-height: clamp(520px, 80vh, 760px)`.
- Foto de um lado com `object-fit: cover`; texto do outro com `padding: 6rem var(--gutter)` e `max-width: 640px`.
- Hover na seção dá `scale(1.03)` na foto.

### Marquee `.marquee`
- `.marquee-track` com o conteúdo **duplicado** e `animation: marquee 40s linear infinite` (translateX -50%).
- Itens em serifa itálica, separados por `·` dourado.

### Grade de produtos `.product-grid` / `.catalog-grid`
- Home: 3 colunas, foto `aspect-ratio: 4/5`. Catálogo: 4 colunas, foto `1/1`.
- Foto com `filter: saturate(.9)` que vai a 1 e `scale(1.05)` no hover.
- Abaixo: nome (serif), meta em caixa alta (`origem · unidade`), preço dourado com `<s>` do preço antigo.
- Itens têm `data-categoria` para o filtro do catálogo.

### Citação `.quote`
- Foto de fundo com `opacity: .4` + véu radial.
- Texto em serifa itálica `clamp(2rem, 5vw, 4rem)`, `max-width: 34ch`, centralizado (único lugar onde centralizamos).

### Visite `.visit`
- Grade foto/texto; blocos `.visit-block` separados por linha, com `h3` em rótulo dourado.
- `.hours` lista dia/horário com `li.hoje` destacado (JS) e sufixo "hoje" em dourado.
- Mapa do Google em iframe com `filter: invert(.92) hue-rotate(180deg) saturate(.4)` para ficar escuro.

### Rodapé `.site-footer`
- Frase grande em serifa itálica (`.footer-big`, "Até logo.") + 3 colunas de links.
- Linha inferior com direitos e créditos em `.75rem`.

### Página interna `.page-hero`
- `height: clamp(480px, 62vh, 720px)`, mesma lógica do hero (foto + véu + kicker + título com itálico + texto).

### História `.story` (sobre.html)
- Grade 1fr/1.4fr: coluna esquerda `position: sticky` com título e valores; direita com texto, capitular dourada (`::first-letter`) e figura com legenda.
- `.gallery`: 3 fotos com a do meio deslocada para baixo (`margin-top: 4rem`).
- `.timeline ol`: 5 colunas com ano grande em serifa.

---

## JavaScript (`js/script.js`)

| Função | O que faz |
|---|---|
| `iniciarHeader()` | Adiciona `.solid` ao header após 40px de scroll |
| `iniciarMenu()` | Abre/fecha o menu mobile, atualiza `aria-expanded` |
| `atualizarStatusLoja()` | Calcula aberto/fechado com base em `HORARIOS` e escreve em `#status-loja` (roda a cada minuto) |
| `destacarDiaAtual()` | Adiciona `.hoje` ao `li[data-dia]` do dia atual em `#lista-horario` |
| `atualizarAno()` | Ano atual em `#ano-atual` |
| `marcarLinkAtivo()` | `.ativo` no link do menu da página atual |
| `iniciarReveal()` | IntersectionObserver que adiciona `.in` aos `.reveal` (delay escalonado de 70ms) |
| `iniciarFiltroProdutos()` | Busca por texto + filtro por `data-categoria` em `#lista-produtos`; mostra `#sem-resultado` se vazio |

Para alterar o horário de funcionamento, edite o objeto `HORARIOS` no topo do arquivo **e** a lista `#lista-horario` / a `.infobar` no HTML.

---

## Breakpoints

| Largura | Mudanças |
|---|---|
| ≤ 1100px | Produtos 2 colunas; catálogo 3; timeline 3 |
| ≤ 860px | Menu hambúrguer; CTA do header some; infobar, split, visit, story e footer em 1 coluna; fotos com `aspect-ratio: 4/3` |
| ≤ 600px | Produtos e catálogo 2 colunas; timeline 2; mapa 320px; footer 1 coluna |

---

## Imagens (`assets/img/`)

| Arquivo | Uso | Tamanho |
|---|---|---|
| `hero.jpg` | Hero da home (interior do empório) | 1600×1200 |
| `caixotes.jpg` | Seção história (home) e figura em sobre.html | 1400 |
| `natureza-morta.jpg` | Fundo da citação; hero de sobre.html | 1600 |
| `fachada.jpg` | Seção Visite | 1400 |
| `padaria.jpg` | Hero do catálogo; produtos de padaria | 1200 |
| `cafe`, `queijo`, `salame`, `pao`, `mel`, `temperos`, `cuca`, `vinho`, `tomates`, `legumes`, `sacola` | Grade de produtos | 1000 |
| `logo.svg` | Favicon | — |

Todas do Unsplash (licença livre), JPEG progressivo qualidade 78–80. Para trocar por fotos reais, mantenha o nome do arquivo e proporção aproximada.

---

## Como adicionar uma nova seção sem quebrar o padrão

1. Comece com `padding: 6–7rem var(--gutter)`.
2. Abra com `<p class="kicker">` + `<h2 class="display">` (uma palavra em `<em>` se fizer sentido).
3. Texto em `--ink-2`, máximo `62ch`.
4. Se tiver foto, ela ocupa metade ou a tela inteira — nunca um thumbnail pequeno.
5. Adicione `class="reveal"` nos blocos que devem animar.
6. Nada de borda, sombra ou fundo em card. Separe com espaço ou `border-top: 1px solid var(--line)`.
7. Teste em 500px e 1440px.
