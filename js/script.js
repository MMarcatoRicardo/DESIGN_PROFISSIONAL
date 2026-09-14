/* ============================================================
   Mercearia do Seu Zé — Scripts
   1. Cabeçalho que ganha fundo ao rolar
   2. Menu responsivo
   3. Status "Aberto / Fechado" calculado pelo horário
   4. Destaque do dia atual na lista de horários
   5. Ano automático no rodapé
   6. Link ativo no menu
   7. Animação de entrada (reveal) ao rolar
   8. Busca e filtro do catálogo
   ============================================================ */

// Horário de funcionamento: dia da semana (0 = domingo) -> [abre, fecha]
const HORARIOS = {
  0: null,
  1: [7, 19],
  2: [7, 19],
  3: [7, 19],
  4: [7, 19],
  5: [7, 19],
  6: [7, 14],
};

/* ---------- 1. Cabeçalho ao rolar ---------- */
function iniciarHeader() {
  const header = document.getElementById("site-header");
  if (!header) return;

  const atualizar = () => header.classList.toggle("solid", window.scrollY > 40);
  atualizar();
  window.addEventListener("scroll", atualizar, { passive: true });
}

/* ---------- 2. Menu responsivo ---------- */
function iniciarMenu() {
  const botao = document.getElementById("nav-toggle");
  const nav = document.getElementById("main-nav");
  if (!botao || !nav) return;

  botao.addEventListener("click", () => {
    const aberto = nav.classList.toggle("aberto");
    botao.setAttribute("aria-expanded", String(aberto));
    botao.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("aberto");
      botao.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---------- 3. Status aberto/fechado ---------- */
function atualizarStatusLoja() {
  const badge = document.getElementById("status-loja");
  if (!badge) return;

  const agora = new Date();
  const dia = agora.getDay();
  const hora = agora.getHours() + agora.getMinutes() / 60;
  const faixa = HORARIOS[dia];
  const aberto = faixa !== null && hora >= faixa[0] && hora < faixa[1];

  const texto = badge.querySelector(".status-text") || badge;
  badge.classList.remove("aberto", "fechado");

  if (aberto) {
    texto.textContent = `Aberto · fecha às ${formatarHora(faixa[1])}`;
    badge.classList.add("aberto");
  } else {
    texto.textContent = `Fechado · ${proximaAbertura(dia, hora)}`;
    badge.classList.add("fechado");
  }
}

function formatarHora(h) {
  return `${String(h).padStart(2, "0")}h`;
}

function proximaAbertura(diaAtual, horaAtual) {
  const nomes = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];
  const hoje = HORARIOS[diaAtual];
  if (hoje && horaAtual < hoje[0]) return `abre hoje às ${formatarHora(hoje[0])}`;

  for (let i = 1; i <= 7; i++) {
    const d = (diaAtual + i) % 7;
    const faixa = HORARIOS[d];
    if (faixa) {
      const prefixo = i === 1 ? "abre amanhã" : `abre ${nomes[d]}`;
      return `${prefixo} às ${formatarHora(faixa[0])}`;
    }
  }
  return "";
}

/* ---------- 4. Destaque do dia atual ---------- */
function destacarDiaAtual() {
  const lista = document.getElementById("lista-horario");
  if (!lista) return;
  const hoje = String(new Date().getDay());
  lista.querySelectorAll("[data-dia]").forEach((item) => {
    if (item.dataset.dia === hoje) item.classList.add("hoje");
  });
}

/* ---------- 5. Ano no rodapé ---------- */
function atualizarAno() {
  const span = document.getElementById("ano-atual");
  if (span) span.textContent = new Date().getFullYear();
}

/* ---------- 6. Link ativo ---------- */
function marcarLinkAtivo() {
  const pagina = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".main-nav a").forEach((link) => {
    if (link.getAttribute("href") === pagina) {
      link.classList.add("ativo");
      link.setAttribute("aria-current", "page");
    }
  });
}

/* ---------- 7. Reveal ao rolar ---------- */
function iniciarReveal() {
  const itens = document.querySelectorAll(".reveal");
  if (!itens.length) return;

  if (!("IntersectionObserver" in window)) {
    itens.forEach((el) => el.classList.add("in"));
    return;
  }

  const obs = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );

  itens.forEach((el, i) => {
    // pequeno escalonamento entre elementos vizinhos
    el.style.transitionDelay = `${(i % 4) * 70}ms`;
    obs.observe(el);
  });
}

/* ---------- 8. Busca e filtro do catálogo ---------- */
function iniciarFiltroProdutos() {
  const campo = document.getElementById("busca-produto");
  const lista = document.getElementById("lista-produtos");
  if (!campo || !lista) return;

  const itens = Array.from(lista.querySelectorAll("[data-categoria]"));
  const botoes = document.querySelectorAll(".filtro-btn");
  const vazio = document.getElementById("sem-resultado");
  let categoria = "todos";

  function aplicar() {
    const termo = campo.value.trim().toLowerCase();
    let visiveis = 0;
    itens.forEach((item) => {
      const okTexto = item.textContent.toLowerCase().includes(termo);
      const okCat = categoria === "todos" || item.dataset.categoria === categoria;
      const mostrar = okTexto && okCat;
      item.hidden = !mostrar;
      if (mostrar) visiveis++;
    });
    if (vazio) vazio.hidden = visiveis > 0;
  }

  campo.addEventListener("input", aplicar);
  botoes.forEach((b) => {
    b.addEventListener("click", () => {
      botoes.forEach((x) => x.classList.remove("ativo"));
      b.classList.add("ativo");
      categoria = b.dataset.categoria;
      aplicar();
    });
  });
}

/* ---------- Inicialização ---------- */
document.addEventListener("DOMContentLoaded", () => {
  iniciarHeader();
  iniciarMenu();
  atualizarStatusLoja();
  destacarDiaAtual();
  atualizarAno();
  marcarLinkAtivo();
  iniciarReveal();
  iniciarFiltroProdutos();
  setInterval(atualizarStatusLoja, 60 * 1000);
});
