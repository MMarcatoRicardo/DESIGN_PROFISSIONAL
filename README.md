# Mercearia do Seu Zé — Presença digital

Site institucional da **Mercearia do Seu Zé**, comércio tradicional com mais de 40 anos no Centro Histórico de Curitiba, a poucos passos do Calçadão da XV de Novembro.

> Projeto desenvolvido para a disciplina **Design Profissional** — Engenharia de Software, 2º período, Universidade Positivo.
> Professor: **Sedenilso Antonio Machado**.

---

## 1. Definição do objetivo

### Objetivo principal da página

Criar a **presença digital oficial da mercearia**, funcionando como um cartão de visitas rápido, informativo e confiável, para que o estabelecimento seja encontrado por quem pesquisa no Google por mercados, produtos coloniais e conveniências no Centro de Curitiba. A página não é uma loja virtual: ela existe para **levar o cliente até a loja física** (ou até o WhatsApp do Seu Zé), respeitando o modelo de negócio tradicional que ele quer manter.

### Público-alvo

- **Principal:** jovens adultos, universitários e novos moradores do Centro e bairros vizinhos, habituados a pesquisar no celular (Google Maps / navegador) antes de consumir.
- **Secundário:** filhos e netos dos clientes antigos, que buscam horário e contato para ajudar pais e avós.

### As 3 informações essenciais (visíveis logo no carregamento)

1. **Endereço completo + ponto de referência** no Centro de Curitiba, com mapa integrado e botão "Abrir no Google Maps".
2. **Horário de funcionamento** atualizado (semana e fim de semana), com indicador automático de "Aberto agora / Fechado".
3. **Canais de contato direto** (WhatsApp e telefone fixo) e a **lista de produtos e promoções da semana**.

---

## 2. Justificativa da solução

| Decisão | Motivo |
|---|---|
| Site estático (HTML + CSS + JS puro), sem framework ou backend | Custo zero de hospedagem (GitHub Pages), manutenção simples e nenhuma dependência — atende à exigência do Seu Zé de "não custar uma fortuna". |
| Direção visual editorial, escura e quente — fotografia em tela cheia, serifa elegante (Cormorant Garamond), dourado como único acento — inspirada em sites premiados de restaurantes e empórios | Transmite a tradição e o cuidado artesanal da mercearia e atrai o público jovem, acostumado a marcas com estética forte; foge do visual genérico de template. |
| Barra de informações essenciais logo abaixo do hero (endereço, horário, contato) | As 3 informações que o cliente busca antes de sair de casa aparecem no primeiro scroll, em qualquer tela. |
| Botão de WhatsApp com mensagem pronta | Converte a visita digital em contato real com a loja, sem exigir um sistema de pedidos. |
| Promoções em lista (`<ul>`) com fotos na home + catálogo completo em lista com busca e filtro por categoria | Cumpre o requisito de lista/tabela, valoriza os produtos com imagem e dá ao Lucas um lugar fácil de atualizar toda semana. |
| Página "Nossa história" | Transforma os 40 anos de tradição em diferencial de marketing para o público jovem. |
| HTML5 semântico (`header`, `nav`, `main`, `section`, `article`, `address`, `table`, `footer`) | Melhora o SEO local (objetivo principal) e a acessibilidade. |
| Meta tags de descrição e palavras-chave, textos com "Centro de Curitiba", "produtos coloniais" | Ajuda o Google a associar a página às buscas do público-alvo. |

> Os dados de endereço, telefone, preços e redes sociais são **ilustrativos**, criados para o estudo de caso. As fotografias são do Unsplash (licença de uso livre).

---

## 3. Estrutura do projeto

```
DESIGN_PROFISSIONAL/
├── index.html          # Página principal (boas-vindas, promoções, localização, horário, contato)
├── produtos.html       # Catálogo completo com busca e filtro por categoria
├── sobre.html          # História da mercearia (linha do tempo)
├── css/
│   └── style.css       # Estilos (editorial escuro, responsivo, animações de entrada)
├── js/
│   └── script.js       # Header ao rolar, menu mobile, status aberto/fechado, reveal, filtro do catálogo
├── assets/
│   └── img/            # Fotografias (Unsplash, licença livre) e logo.svg
├── docs/
│   ├── DIRETRIZES-DE-DESIGN.md   # Princípios: o que faz um site parecer profissional e o que evitar
│   └── SISTEMA-VISUAL.md         # Tokens, tipografia, componentes, JS e breakpoints deste projeto
├── .gitignore
└── README.md
```

### Como visualizar

1. Clone o repositório: `git clone https://github.com/MMarcatoRicardo/DESIGN_PROFISSIONAL.git`
2. Abra o arquivo `index.html` em qualquer navegador (não precisa de servidor).

---

## 4. Equipe e mini-currículos

Conforme solicitado pelo Seu Zé e pelo Lucas, seguem os perfis profissionais dos desenvolvedores responsáveis pela solução.

### Daniel Ribeiro da Costa — RGCM 47282487

- **Formação:** Engenharia de Software, 2º período — Universidade Positivo (Curitiba/PR).
- **Competências técnicas:** HTML5 semântico, CSS3 (layout responsivo com Flexbox e Grid), JavaScript, lógica de programação, Git e GitHub (branches, commits, pull requests), deploy de páginas estáticas (Vercel / GitHub Pages).
- **Perfis:** [GitHub — Dev-daniel-01](https://github.com/Dev-daniel-01) · [Portfólio](https://profile-hazel-zeta.vercel.app/)
- **Motivação:** "Sou um programador júnior apaixonado por tecnologia e inovação. Já publiquei dezenas de projetos pessoais no GitHub e sei entregar páginas que funcionam bem no celular — exatamente o que os clientes jovens do Seu Zé usam para encontrar a mercearia. Quero que a estrutura HTML deste site seja tão organizada quanto as prateleiras da loja."

### Lucas Markovicz Costa — RGCM 47454547

- **Formação:** Engenharia de Software, 2º período — Universidade Positivo (Curitiba/PR).
- **Competências técnicas:** HTML5, CSS3 (design responsivo, variáveis CSS, acessibilidade), JavaScript (manipulação do DOM), lógica de programação, Git e GitHub (fluxo de trabalho colaborativo com pull requests).
- **Perfis:** [GitHub — Lucasmkz](https://github.com/Lucasmkz)
- **Motivação:** "Cresci vendo o comércio de bairro perder espaço por não estar na internet. Meu foco neste projeto é a experiência visual e a interatividade: um site bonito, rápido e fácil de usar no celular, que mostre ao público jovem que tradição e modernidade cabem na mesma vitrine."

### Ricardo Medeiros Marcato — RGCM 47427400

- **Formação:** Engenharia de Software, 2º período — Universidade Positivo (Curitiba/PR).
- **Competências técnicas:** HTML5, CSS3, JavaScript, Git e GitHub (organização de repositórios, revisão de pull requests), Python, SQL e PostgreSQL, análise de dados e BI, engenharia de dados.
- **Perfis:** [GitHub — MMarcatoRicardo](https://github.com/MMarcatoRicardo)
- **Motivação:** "Atuo como analista de dados e gosto de construir soluções orientadas a resultado. Para o Seu Zé, isso significa uma página que responde às três perguntas que todo cliente faz antes de sair de casa — onde fica, que horas abre e como falo com vocês — e que pode ser medida e melhorada depois. Fico responsável pela organização do repositório, documentação e páginas complementares."

---

## 5. Fluxo de trabalho no Git

Cada integrante entregou sua parte por meio de um **pull request** separado, revisado pelos demais antes da integração na branch `main`:

| Integrante | Branch | Arquivos |
|---|---|---|
| Daniel Ribeiro da Costa | `feat/estrutura-html` | `index.html`, `assets/img/` (fotos e logo) |
| Lucas Markovicz Costa | `feat/estilos-e-scripts` | `css/style.css`, `js/script.js` |
| Ricardo Medeiros Marcato | `main` (commit inicial) e `feat/paginas-e-docs` | `.gitignore` (commit inicial); `produtos.html`, `sobre.html`, `README.md`, `docs/` (PR) |

Padrão de mensagens de commit: [Conventional Commits](https://www.conventionalcommits.org/pt-br/) (`feat:`, `style:`, `docs:`, `chore:`).

---

## Licença

Projeto acadêmico. Conteúdo fictício criado para fins educacionais.
