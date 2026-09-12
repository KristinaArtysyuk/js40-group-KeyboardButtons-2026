// Карточки терминов — стартер. Переворот и «следующая» уже работают.
// JS: замени примеры и допиши массив до 8+ своих терминов.

const cards = [
  { term: "Forte (f)", def: "Громко" },
  { term: "Piano (p)", def: "Тихо" },
  { term: "Легато", def: "Связно, без разрыва между звуками" }
];

let index = 0;
let showBack = false;

const cardEl = document.getElementById("card");
const textEl = document.getElementById("card-text");
const progressEl = document.getElementById("progress");

function render() {
  let card = cards[index];
  textEl.textContent = showBack ? card.def : card.term;
  if (showBack) {
    cardEl.classList.add("back");
  } else {
    cardEl.classList.remove("back");
  }
  progressEl.textContent = (index + 1) + " / " + cards.length;
}

cardEl.addEventListener("click", function () {
  showBack = !showBack;
  render();
});

document.getElementById("next-btn").addEventListener("click", function () {
  index = index + 1;
  if (index >= cards.length) {
    index = 0;
  }
  showBack = false;
  render();
});

render();
