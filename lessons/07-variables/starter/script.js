// Урок 07: переменные, числа, строки, шаблонные строки
// Задача: описать трек переменными и показать его на странице

// TODO 1: объяви переменные songTitle (строка), artist (строка), year (число)
// Пример идей: "Yesterday", "The Beatles", 1965

// TODO 2: объяви const genre — жанр, который не будешь менять

// TODO 3: собери шаблонную строку cardText с ${songTitle}, ${artist}, ${year}, ${genre}

// TODO 4: по клику на кнопку запиши данные в элементы страницы
document.getElementById("show-btn").addEventListener("click", function () {
  // Подсказка:
  // document.getElementById("title").textContent = songTitle;
  // document.getElementById("artist").textContent = artist;
  // document.getElementById("card-text").textContent = cardText;

  document.getElementById("card-text").textContent =
    "Сначала заполни переменные в script.js (TODO 1–3).";
});
