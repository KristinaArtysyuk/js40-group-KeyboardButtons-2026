const tracks = [
  "Черновик прелюдии",
  "Гамма до мажор",
  "Этюд на легато",
  "Ансамбль: медленная часть"
];

let currentIndex = -1; // пока ничего не выбрано
const listEl = document.getElementById("track-list");
const nowEl = document.getElementById("now-playing");

function render() {
  listEl.innerHTML = ""; // очисти список, чтобы не дублировать строки

  // цикл for по tracks:
  //   создай li, запиши tracks[i]
  //   если i === currentIndex — добавь класс "current"
  //   по клику вызови selectTrack(i)
  //   добавь li в listEl
}

// Запоминает выбранный трек, пишет название и перерисовывает список
function selectTrack(index) {
  currentIndex = index;
  nowEl.textContent = tracks[index];
  render();
}

render();
