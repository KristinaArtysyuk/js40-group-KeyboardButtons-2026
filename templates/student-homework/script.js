// Шаблон ДЗ — JavaScript для музыкантов (Дмитрий Сергеевич)
let tempo = 100;

const tempoDisplay = document.getElementById("tempo-display");
const btnUp = document.getElementById("btn-up");
const btnDown = document.getElementById("btn-down");
const btnHello = document.getElementById("btn-hello");

function renderTempo() {
  tempoDisplay.textContent = String(tempo);
}

btnUp.addEventListener("click", function () {
  tempo += 10;
  renderTempo();
});

btnDown.addEventListener("click", function () {
  tempo = Math.max(40, tempo - 10);
  renderTempo();
});

btnHello.addEventListener("click", function () {
  console.log("Привет из script.js! Текущий темп:", tempo, "BPM");
});

renderTempo();
console.log("Шаблон ДЗ загружен. Открой консоль (F12).");
