// Урок 13: DOM — афиша концерта

let poster = document.getElementById("poster");
let titleEl = document.getElementById("concert-title");
let dateEl = document.getElementById("concert-date");
let venueEl = document.getElementById("concert-venue");
let artists = document.getElementById("artists");

// Задание 1: смена текста
document.getElementById("btn-title").addEventListener("click", function () {
  // titleEl.textContent = "Ночь джаза и импровизации"
  titleEl.textContent = "Допиши смену названия в script.js";
});

document.getElementById("btn-date").addEventListener("click", function () {
  // dateEl.textContent = "Дата: 21 июня, 20:00"
});

document.getElementById("btn-venue").addEventListener("click", function () {
  // venueEl.textContent = "Площадка: Открытая сцена во дворе"
});

// Задание 2: темы афиши
function setTheme(name) {
  // сними theme-classical, theme-rock, theme-jazz (classList.remove("theme-classical", "theme-rock", "theme-jazz"))
  // добавь класс name (classList.add(name))
}

document.getElementById("btn-classical").addEventListener("click", function () {
  // setTheme("theme-classical"); titleEl — «Вечер камерной музыки»
});

document.getElementById("btn-rock").addEventListener("click", function () {
  // setTheme("theme-rock"); titleEl — «Рок-вечер выпускников»
});

document.getElementById("btn-jazz").addEventListener("click", function () {
  // setTheme("theme-jazz"); titleEl — «Джазовый джем»
});

// Задание 3: добавить артиста
let artistNames = ["Игорь Бас", "Мария Фортепиано", "Кирилл Ударные", "Лена Вокал"];
let artistIndex = 0;

document.getElementById("btn-add").addEventListener("click", function () {
  // создай div с className "artist-card"
  // текст — artistNames[artistIndex % artistNames.length]
  // увеличь artistIndex, добавь карточку в artists (appendChild)
});
