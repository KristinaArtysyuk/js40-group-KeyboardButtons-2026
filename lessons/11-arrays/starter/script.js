// Урок 11: массивы — плейлист

let playlist = [
  "Лунная соната",
  "Богемская рапсодия",
  "Smells Like Teen Spirit"
];

const listEl = document.getElementById("playlist");
const countEl = document.getElementById("count");
const randomBox = document.getElementById("random-box");
const songInput = document.getElementById("song-input");

// Показать все треки из массива
function showAll() {
  // очисти список: listEl.innerHTML = "";
  // цикл for по playlist: создай li, запиши номер (innerHTML) и название, добавь в listEl (appendChild)
  
  // countEl.textContent = "Треков: " + playlist.length;
  countEl.textContent = "Допиши showAll()";
}

// Добавить трек из поля ввода
document.getElementById("add-btn").addEventListener("click", function () {
  // let song = songInput.value.trim();
  // если пусто — напиши «Введи название трека!» и return
  // иначе: playlist.push(song), очисти поле, вызови showAll()
});

document.getElementById("show-btn").addEventListener("click", showAll);

// Если успели на паре: случайный трек (на зачёт не обязательно)
document.getElementById("random-btn").addEventListener("click", function () {
  // если playlist пуст — напиши «Плейлист пуст…» и return
  // let index = Math.floor(Math.random() * playlist.length);
  // randomBox.textContent = "🎲 " + playlist[index];
  randomBox.textContent = "Допиши выбор случайного трека";
});

// По желанию: удалить последний трек — playlist.pop()
document.getElementById("remove-btn").addEventListener("click", function () {
  // если пусто — «Нечего удалять.»
  // иначе pop, showAll(), напиши «Удалено: » и название
});

// Можно сразу показать стартовый список:
// showAll();
