// Урок 08: if / else — угадай ноту

const notes = ["До", "Ре", "Ми", "Фа", "Соль", "Ля", "Си"]; // список, разбор на уроке 11

// Случайная нота при старте
let secretNote = notes[Math.floor(Math.random() * notes.length)];
let attempts = 0;

const guessInput = document.getElementById("guess");
const resultEl = document.getElementById("result");
const attemptsEl = document.getElementById("attempts");

function pickNewNote() {
  // новая secretNote из notes (та же формула, что выше)
  // attempts = 0 и обновить attemptsEl (textContent)
  // очистить guessInput (value = "")
  // сообщение в resultEl (textContent), className = "result"
}

document.getElementById("check-btn").addEventListener("click", function () {
  let guess = guessInput.value.trim(); // Очищаем значение input и удаляем пробелы

  if (guess === "") {
    // resultEl: текст и className "result bad" (стиль из style.css)
    return;
  }

  // attempts + 1, записать в attemptsEl Увеличиваем количество попыток на 1
  //  и обновляем attemptsEl (textContent)
  // Главное условие урока
  if (guess === secretNote) {
    // Угадали, выводим сообщение в resultEl (textContent), className = "result ok"
    // resultEl: угадали, className "result ok"
  } else {
    // Не угадали, выводим сообщение в resultEl (textContent), className = "result bad"
    // resultEl: мимо, className "result bad"
  }
});

document.getElementById("new-btn").addEventListener("click", pickNewNote);
