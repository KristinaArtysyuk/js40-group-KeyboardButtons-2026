// Урок 09: циклы — список треков и повтор N раз

const tracks = [
  "Лунная соната",
  "Времена года: Весна",
  "Болеро",
  "К Элизе",
  "Ночь на Лысой горе",
  "Полёт шмеля",
];

const listEl = document.getElementById("track-list");
const countEl = document.getElementById("count");
const bisBox = document.getElementById("bis-box");

function renderPlaylist() {
  // 1) очисти список, чтобы не дублировать: listEl.innerHTML = "";
  // 2) for (let i = 0; i < tracks.length; i = i + 1) {
  //      создай li = document.createElement("li");
  //      li.textContent = (i + 1) + ". " + tracks[i];
  //      listEl.appendChild(li);
  //    }
  // 3) countEl.textContent = "Треков: " + tracks.length;
  countEl.textContent = "Допиши цикл for в script.js";
}

document.getElementById("show-btn").addEventListener("click", renderPlaylist);

document.getElementById("bis-btn").addEventListener("click", function () {
  // 1) получаем значение из input (document.getElementById("repeat-count").value)
  let n = Number(document.getElementById("repeat-count").value);

  // если !n или n < 1: bisBox.textContent = "Укажи число от 1 и больше."; return;

  // while: собери строки "👏 Бис! × " + k, пока k <= n
  // заведи 2 переменные: строка lines = "" и счетчик k = 1
  // в цикле while добавляем строку "👏 Бис! × " + k к lines
  // bisBox.textContent = lines.trim();
  bisBox.textContent = "Здесь должен быть цикл повтора…";
});

// сразу покажи плейлист при открытии страницы
renderPlaylist();
