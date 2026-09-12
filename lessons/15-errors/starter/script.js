// Урок 15 — Охота за багами (starter)
// В файле 6 намеренных ошибок. Открой F12 → Console и чини по одной.
// После каждой правки обнови страницу (F5).

console.log("Старт охоты за багами…");

// --- Баг 1: нет кавычек у строки ---
// Строка в JS должна быть в кавычках: "Лунная соната"
let trackTitle = Лунная соната;

// --- Баг 2: опечатка в имени переменной ---
// Объявлено artistName — используй то же имя, не artsitName
let artistName = "Бетховен";
console.log("Исполнитель:", artsitName);

// --- Баг 3: нет закрывающей скобки у if ---
// После условия нужна закрывающая ): if (bpm > 0) {
let bpm = 60;
if (bpm > 0 {
  console.log("BPM задан:", bpm);
}

// --- Баг 4: = вместо === ---
// = присваивает, === сравнивает. В условии нужен ===
// Этот баг НЕ краснеет в консоли — кнопка «Проверить» может пройти мимо него.
let genre = "Классика";
if (genre = "Классика") {
  console.log("Жанр подходит для карточки");
}

// --- Баг 5: вызов функции, которой ещё нет ---
// const fn = function () {} не поднимается вверх файла.
// Сначала объяви функцию, потом вызови showTrackCard().
showTrackCard();

const showTrackCard = function () {
  // --- Баг 6: неверный id в getElementById ---
  // В HTML id="title", не "titel"
  let titleEl = document.getElementById("titel");
  let artistEl = document.getElementById("artist");
  let bpmEl = document.getElementById("bpm-value");
  let statusEl = document.getElementById("status");

  titleEl.textContent = trackTitle;
  artistEl.textContent = artistName;
  bpmEl.textContent = String(bpm);
  statusEl.textContent = "Карточка заполнена. Нажми «Проверить».";
  console.log("Карточка отрисована:", trackTitle, artistName, bpm);
};

function onCheck() {
  let titleEl = document.getElementById("title");
  let statusEl = document.getElementById("status");

  if (titleEl.textContent === trackTitle && genre === "Классика") {
    statusEl.textContent = "Успех! Все баги пойманы. Молодец!";
    statusEl.classList.add("ok");
    console.log("Проверка пройдена. Баги исправлены.");
  } else {
    statusEl.textContent = "Ещё есть баги — смотри консоль.";
    console.log("Проверка не пройдена. title =", titleEl.textContent);
  }
}

document.getElementById("check-btn").addEventListener("click", onCheck);
