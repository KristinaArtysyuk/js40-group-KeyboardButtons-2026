// Рандомайзер — стартер. Добавление и 3 случайных без повторов уже работают.
// JS: замени примеры на свой репертуар (нужно ≥ 3 пьес, чтобы кнопка сработала).

let pieces = [
  "Лунная соната",
  "К Элизе"
];

const poolEl = document.getElementById("pool");
const pickedEl = document.getElementById("picked");
const countEl = document.getElementById("count");
const messageEl = document.getElementById("message");
const inputEl = document.getElementById("piece-input");

function renderPool() {
  poolEl.innerHTML = "";
  countEl.textContent = "В списке: " + pieces.length;
  for (let i = 0; i < pieces.length; i = i + 1) {
    let li = document.createElement("li");
    li.textContent = pieces[i];
    poolEl.appendChild(li);
  }
}

document.getElementById("add-btn").addEventListener("click", function () {
  let name = inputEl.value.trim();
  if (name === "") {
    return;
  }
  pieces.push(name);
  inputEl.value = "";
  messageEl.textContent = "";
  renderPool();
});

document.getElementById("pick-btn").addEventListener("click", function () {
  pickedEl.innerHTML = "";

  if (pieces.length < 3) {
    messageEl.textContent = "Добавь ещё пьесы: нужно минимум 3.";
    return;
  }

  messageEl.textContent = "";
  let copy = pieces.slice();
  let chosen = [];

  for (let n = 0; n < 3; n = n + 1) {
    let index = Math.floor(Math.random() * copy.length);
    chosen.push(copy[index]);
    copy.splice(index, 1);
  }

  for (let i = 0; i < chosen.length; i = i + 1) {
    let li = document.createElement("li");
    li.textContent = chosen[i];
    pickedEl.appendChild(li);
  }
});

renderPool();
