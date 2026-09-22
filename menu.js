let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')

btnMenu.addEventListener('click',()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click',()=>{
    menu.classList.remove('abrir-menu')
})

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
