let btnMenu = document.getElementById("btn-menu");
let menu = document.getElementById("menu-mobile");

btnMenu.addEventListener("click", () => {
  menu.classList.add("abrir-menu");
});

menu.addEventListener("click", () => {
  menu.classList.remove("abrir-menu");
});

const cards = document.querySelectorAll(".especialidades-box");
const indicators = document.querySelectorAll(".indicator");
const previousButton = document.querySelector(".carousel-prev");
const nextButton = document.querySelector(".carousel-next");

let currentCard = 0;

function showCard(index) {
  cards.forEach((card) => {
    card.classList.remove("active");
  });

  indicators.forEach((indicator) => {
    indicator.classList.remove("active");
  });

  cards[index].classList.add("active");
  indicators[index].classList.add("active");

  currentCard = index;
}

nextButton.addEventListener("click", () => {
  let nextCard = currentCard + 1;

  if (nextCard >= cards.length) {
    nextCard = 0;
  }

  showCard(nextCard);
});

previousButton.addEventListener("click", () => {
  let previousCard = currentCard - 1;

  if (previousCard < 0) {
    previousCard = cards.length - 1;
  }

  showCard(previousCard);
});

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    showCard(index);
  });
});

// Envio do formulário de contato (Formspree)
const formContato = document.getElementById("form-contato");

if (formContato) {
  formContato.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Alerta de carregamento
    Swal.fire({
      title: "Enviando...",
      text: "Aguarde um momento.",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const response = await fetch(formContato.action, {
        method: "POST",
        body: new FormData(formContato),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Mensagem enviada!",
          text: "Obrigada pelo contato. Responderei assim que possível.",
          confirmButtonText: "OK",
        });

        formContato.reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Ops!",
          text: "Não foi possível enviar sua mensagem. Tente novamente.",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Erro de conexão",
        text: "Verifique sua internet e tente novamente.",
        confirmButtonText: "OK",
      });
    }
  });
}

//Máscara para telefone
const telefone = document.getElementById("telefone");

if (telefone) {
  telefone.addEventListener("input", function (event) {
    let valor = event.target.value.replace(/\D/g, "").slice(0, 11);

    if (valor.length <= 2) {
      valor = valor.replace(/^(\d{0,2})/, "($1");
    } else if (valor.length <= 6) {
      valor = valor.replace(/^(\d{2})(\d{0,4})/, "($1) $2");
    } else if (valor.length <= 10) {
      valor = valor.replace(/^(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    } else {
      valor = valor.replace(/^(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
    }

    event.target.value = valor;
  });
}
