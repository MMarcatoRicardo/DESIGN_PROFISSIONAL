# Diretrizes de design — como fazer um site com cara de profissional

Este documento registra o raciocínio por trás do visual da Mercearia do Seu Zé, para que a equipe consiga repetir o resultado em outros projetos. Serve para qualquer site institucional de restaurante, café, empório, loja ou marca com produto físico.

---

## 1. O que separa um site "de template" de um site bom

Os sites que ganham prêmios (Awwwards, Webby) de restaurantes e empórios têm quatro coisas em comum:

| Eles têm | Templates genéricos têm |
|---|---|
| **Fotografia grande, real e bem iluminada** como protagonista | Ícones, emojis, ilustrações genéricas, cards sem imagem |
| **Uma paleta enxuta**: fundo, texto, **um** acento | 4–5 cores "de marca" competindo entre si |
| **Tipografia com personalidade**: uma serifa elegante para títulos + uma sans limpa para texto | Fonte do sistema ou uma sans-serif só, em todos os tamanhos |
| **Silêncio visual**: espaço em branco, linhas finas, poucos elementos de interface | Cards com borda e sombra, badges coloridos, pills, gradientes, botões arredondados por toda parte |

Regra prática: **se um elemento não é foto, título, texto ou botão, pergunte se ele precisa existir.**

Referências estudadas: Fat Cow (steakhouse, paleta escura), Aquarius Seafood (fotos escuras + dourado), Atelier Crenn (imagem em tela cheia, navegação mínima), Fiola DC (espaçamento generoso, "caro sem se esforçar"), King Restaurant (fontes pequenas + muito respiro).

---

## 2. Sinais de "cara de IA / template" — e o que fazer no lugar

| Evite | Faça |
|---|---|
| Cards com borda, sombra e cantos arredondados para tudo | Conteúdo direto no fundo, separado por espaço ou uma linha de 1px |
| Badges/pills coloridas ("-14%", "PROMO", "NOVO") | Preço riscado ao lado do novo, em texto |
| Emojis como ícones (📍 🕖 📞) | Rótulos em caixa alta pequena, ou ícones SVG de linha fina — ou nenhum ícone |
| Eyebrow + título + subtítulo em toda seção, sempre iguais | Variar o ritmo: seção com foto, seção só de texto, seção com citação |
| Paleta marrom/bege "aconchegante" | Escuro quente (quase preto) ou claro (papel) + um acento (dourado, verde, terracota) |
| Botões verdes de WhatsApp com ícone | Botão retangular, texto em caixa alta com espaçamento, uma cor |
| Faixa de "estatísticas" com números grandes | Uma frase forte, ou nada |
| Gradientes e "glows" coloridos de fundo | Foto com véu escuro (gradiente preto transparente) |
| Tudo centralizado | Alinhado à esquerda, com hierarquia clara; centralizar só citações |

---

## 3. Estrutura que funciona para restaurante / empório / loja

Ordem de seções da home, do mais importante ao complementar:

1. **Hero em tela cheia** — foto do lugar ou do produto, frase curta em serifa grande, 1–2 botões. Status "aberto/fechado" discreto.
2. **Barra de informações essenciais** — endereço, horário, contato. Sempre visível no primeiro scroll: é o que o cliente veio buscar.
3. **História / propósito** — foto de um lado, texto curto do outro. 2 parágrafos no máximo, com link para a página completa.
4. **Faixa rolante (marquee)** — opcional, dá vida e lista os produtos sem ocupar espaço.
5. **Produtos / cardápio** — grade de fotos com nome, origem e preço. Sem tabela na home.
6. **Citação ou frase** sobre foto escura — momento de pausa visual.
7. **Visite** — foto da fachada + endereço + horário + contato + mapa.
8. **Rodapé** — frase grande ("Até logo."), colunas de links, direitos autorais.

Páginas internas repetem o padrão: **hero menor com foto + título**, depois o conteúdo.

---

## 4. Fotografia

- **Prefira fotos reais do lugar.** Se não houver, use banco de imagens gratuito (Unsplash, Pexels) com **estilo coerente**: mesma temperatura de cor, mesma iluminação. Uma foto "de estúdio branco" no meio de fotos escuras quebra tudo.
- Fotos de **ambiente** (interior, fachada, balcão) para hero e seções; fotos de **produto** para a grade.
- Otimize: 1600 px de largura para hero, 1000 px para produtos, JPEG qualidade 75–80, progressivo. O site inteiro deve pesar poucos MB.
- `object-fit: cover` + `aspect-ratio` fixo na grade para tudo alinhar. Varie `object-position` quando reutilizar uma foto.
- Sempre um **véu escuro** (gradiente `rgba(0,0,0,.3)` → `rgba(0,0,0,.95)`) sobre foto que tem texto por cima. Texto sobre foto sem véu é ilegível.
- `loading="lazy"` em tudo que não está na primeira tela; `fetchpriority="high"` só no hero.

---

## 5. Tipografia

- **Duas famílias, não mais**: serifa para títulos (Cormorant Garamond, Fraunces, Playfair Display, Instrument Serif) + sans para texto (Manrope, Inter, DM Sans).
- **Contraste de tamanho agressivo**: título do hero de 5–6rem, texto de 1rem, rótulos de 0,7rem em caixa alta com `letter-spacing: 0.2em`. É essa distância que dá sofisticação.
- Itálico da serifa em uma palavra do título, na cor do acento — truque barato que funciona sempre.
- `line-height` baixo em títulos (0,98–1,05) e normal no texto (1,6).
- Largura máxima de texto corrido: 60–65 caracteres (`max-width: 62ch`).

---

## 6. Cor

- Escolha **um** de dois mundos: **escuro quente** (`#0e0d0b` fundo, `#efe8dc` texto) ou **claro papel** (`#f7f6f2` fundo, `#141614` texto). Não misture.
- **Um acento** só: dourado (`#d3a55a`), verde profundo, terracota. Use-o em: kicker/rótulos, palavra em itálico, preço, hover.
- Linhas divisórias com o próprio texto a 12% de opacidade (`rgba(239,232,220,.12)`), nunca cinza puro.
- Texto secundário: a cor do texto principal com menos contraste, não cinza `#999`.

---

## 7. Movimento (com moderação)

- **Header** transparente sobre o hero, ganha fundo com blur ao rolar.
- **Zoom lento** (1.06 → 1, 8s) na foto do hero.
- **Reveal**: elementos sobem 24px e aparecem ao entrar na tela (IntersectionObserver), com escalonamento de ~70ms entre vizinhos.
- **Hover** nas fotos: `scale(1.05)` em 1s com easing suave.
- **Marquee** contínuo em 40s.
- Tudo respeita `prefers-reduced-motion`.
- Easing padrão: `cubic-bezier(0.22, 1, 0.36, 1)`. Nunca `ease-in-out` linear de 0.3s em tudo.

---

## 8. Processo que usamos (e que vale repetir)

1. **Ler o briefing e listar as 3 informações que o usuário quer** — elas definem o que vai no topo.
2. **Pesquisar referências reais** do mesmo segmento antes de desenhar. Anotar padrões, não copiar layouts.
3. **Escolher fotos primeiro**, depois desenhar em torno delas. O layout serve à imagem, não o contrário.
4. **Definir tokens** (cores, fontes, espaçamentos) em `:root` antes de escrever qualquer componente.
5. **Construir mobile e desktop juntos**, testando com screenshots em 500px e 1440px.
6. **Validar**: HTML balanceado, JS sem erro, nenhuma classe sem CSS, nenhum scroll horizontal.
7. **Revisar com olhar de "isso parece template?"** e cortar tudo que parecer.

---

## 9. Checklist final antes de entregar

- [ ] As 3 informações essenciais (endereço, horário, contato) aparecem sem rolar?
- [ ] Todas as fotos têm o mesmo "clima"?
- [ ] Só existe uma cor de acento?
- [ ] Nenhum emoji, badge ou card com borda sobrou?
- [ ] Texto sobre foto tem véu escuro e está legível?
- [ ] Título do hero cabe em uma tela de 1366×768 sem cortar?
- [ ] Funciona em 400px de largura sem scroll horizontal?
- [ ] Botão de WhatsApp com mensagem pronta (`wa.me/…?text=`)?
- [ ] `<title>`, `<meta description>` e `alt` das imagens preenchidos?
- [ ] Peso total das imagens abaixo de 5 MB?
