// Урок 10: свои функции

const outputEl = document.getElementById("output");

// Задание 1: собери подпись трека «название — исполнитель»
function formatTrack(title, artist) {
  // верни строку: название, длинное тире, исполнитель
}

// Задание 2: музыкальное приветствие
function greet(name) {
  // верни: «Привет, имя! Готов к джему? 🎸»
}

// Задание 3: число BPM → словесный темп
function bpmToTempo(bpm) {
  // меньше 60 — Largo (очень медленно)
  // меньше 80 — Adagio (медленно)
  // меньше 100 — Andante (спокойным шагом)
  // меньше 120 — Moderato (умеренно)
  // меньше 160 — Allegro (быстро)
  // иначе — Presto (очень быстро)
}

// Задание 4: случайная нота из списка
function randomNote() {
  const notes = ["До", "Ре", "Ми", "Фа", "Соль", "Ля", "Си"];
  // случайный индекс: Math.floor(Math.random() * notes.length)
  // верни notes[index]
}

document.getElementById("format-btn").addEventListener("click", function () {
  let title = document.getElementById("title-input").value;
  let artist = document.getElementById("artist-input").value;
  // запиши в outputEl результат formatTrack(title, artist)
  outputEl.textContent = "Допиши formatTrack и вызови её здесь";
});

document.getElementById("greet-btn").addEventListener("click", function () {
  let name = document.getElementById("name-input").value;
  // запиши в outputEl результат greet(name)
  outputEl.textContent = "Вызови greet(name)";
});

document.getElementById("tempo-btn").addEventListener("click", function () {
  let bpm = Number(document.getElementById("bpm-input").value);
  // запиши: bpm + " BPM → " + bpmToTempo(bpm)
  outputEl.textContent = "Вызови bpmToTempo(bpm)";
});

document.getElementById("note-btn").addEventListener("click", function () {
  // запиши: "Случайная нота: " + randomNote()
  outputEl.textContent = "Вызови randomNote()";
});
