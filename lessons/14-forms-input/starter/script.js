// Урок 14: фильтры каталога (текст + BPM + жанр)

let songs = [
  { title: "Лунная соната", artist: "Бетховен", bpm: 60, genre: "Классика" },
  { title: "Богемская рапсодия", artist: "Queen", bpm: 72, genre: "Рок" },
  { title: "Take Five", artist: "Dave Brubeck", bpm: 176, genre: "Джаз" },
  { title: "Billie Jean", artist: "Michael Jackson", bpm: 117, genre: "Поп" },
  { title: "Yesterday", artist: "The Beatles", bpm: 97, genre: "Поп" },
  { title: "Smells Like Teen Spirit", artist: "Nirvana", bpm: 117, genre: "Рок" },
  { title: "Вальс №2", artist: "Шостакович", bpm: 90, genre: "Классика" },
  { title: "So What", artist: "Miles Davis", bpm: 138, genre: "Джаз" },
  { title: "Кузнечик", artist: "Винтаж-кавер", bpm: 128, genre: "Поп" },
  { title: "Thunderstruck", artist: "AC/DC", bpm: 133, genre: "Рок" }
];

// Функция для отображения списка песен
function render(list) {
  let catalog = document.getElementById("catalog");
  catalog.innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    let s = list[i];
    let card = document.createElement("article");
    card.className = "song-card";
    card.innerHTML = "<h2>" + s.title + "</h2>" +
      "<p class=\"meta\">" + s.artist + " · " + s.bpm + " BPM</p>" +
      "<span class=\"badge\">" + s.genre + "</span>";
    catalog.appendChild(card);
  }
  document.getElementById("count").textContent = "Найдено: " + list.length;
}

// Функция для применения фильтров
function applyFilters() {
  // прочитай q (trim + toLowerCase), maxBpm (Number), genre
  // собери result = []
  // цикл по songs: песня проходит, если все три условия истинны
  //   текст: q пустой ИЛИ title/artist содержит q (toLowerCase, indexOf)
  //   BPM: s.bpm <= maxBpm
  //   жанр: genre пустой ИЛИ s.genre === genre
  // если прошло — result.push(s)
  // render(result)
  render(songs); // пока без фильтра — замени на отфильтрованный список
}

document.getElementById("q").addEventListener("input", applyFilters);
document.getElementById("bpm").addEventListener("input", function () {
  document.getElementById("bpm-label").textContent = document.getElementById("bpm").value;
  applyFilters();
});
document.getElementById("genre").addEventListener("change", applyFilters);

// сброс уже готов: чистит поля и вызывает applyFilters
document.getElementById("reset-btn").addEventListener("click", function () {
  document.getElementById("q").value = "";
  document.getElementById("bpm").value = "200";
  document.getElementById("bpm-label").textContent = "200";
  document.getElementById("genre").value = "";
  applyFilters();
});

applyFilters();
