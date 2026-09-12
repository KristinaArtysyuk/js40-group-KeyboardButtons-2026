// Урок 12: объекты — карточки песен

let example = {
  title: "Лунная соната",
  artist: "Бетховен",
  bpm: 60,
  genre: "Классика"
};

// добавь ещё 4 песни с полями title, artist, bpm, genre
let songs = [example];

function tempoName(bpm) {
  // меньше 60 — Largo
  // меньше 76 — Adagio
  // меньше 108 — Andante
  // меньше 120 — Moderato
  // меньше 168 — Allegro
  // меньше 200 — Presto
  // иначе — Prestissimo
  return "—";
}

function renderSongs() {
  let catalog = document.getElementById("catalog");
  catalog.innerHTML = "";

  // цикл for по songs:
  //   создай article с className "song-card"
  //   внутри: h2 — title; p.meta — исполнитель; p.meta — BPM и tempoName; span.badge — жанр
  //   catalog.appendChild(card)

  document.getElementById("count").textContent = "Песен: " + songs.length;
}

document.getElementById("add-btn").addEventListener("click", function () {
  // прочитай title, artist, bpm, genre из полей (trim; bpm через Number)
  // если жанр пустой — подставь "Разное"
  // если нет названия, исполнителя или bpm — alert и return
  // songs.push({ title, artist, bpm, genre })
  // вызови renderSongs() и очисти поля
  document.getElementById("count").textContent =
    "Сначала допиши добавление песни в script.js";
});

renderSongs();
