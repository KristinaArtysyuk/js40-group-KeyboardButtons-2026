// Плейлист+ — стартер. Выбор, подсветка, добавить и удалить уже работают.
// JS: замени примеры на свой плейлист. HTML/CSS: оформление списка.

let tracks = [
  "Черновик прелюдии",
  "Гамма до мажор",
  "Этюд на легато"
];

let currentIndex = -1;
const listEl = document.getElementById("track-list");
const nowEl = document.getElementById("now-playing");
const songInput = document.getElementById("song-input");

function render() {
  listEl.innerHTML = "";
  for (let i = 0; i < tracks.length; i = i + 1) {
    let li = document.createElement("li");
    li.textContent = tracks[i];
    if (i === currentIndex) {
      li.classList.add("current");
    }
    li.addEventListener("click", function () {
      selectTrack(i);
    });
    listEl.appendChild(li);
  }
}

function selectTrack(index) {
  currentIndex = index;
  nowEl.textContent = tracks[index];
  render();
}

document.getElementById("add-btn").addEventListener("click", function () {
  let song = songInput.value.trim();
  if (song === "") {
    return;
  }
  tracks.push(song);
  songInput.value = "";
  render();
});

document.getElementById("remove-btn").addEventListener("click", function () {
  if (currentIndex < 0 || tracks.length === 0) {
    nowEl.textContent = "Сначала выбери трек";
    return;
  }
  tracks.splice(currentIndex, 1);
  currentIndex = -1;
  nowEl.textContent = "ничего не выбрано";
  render();
});

render();
