// Список репетиций — стартер. Движок добавления и удаления уже работает.
// JS: замени примеры на свои репетиции. HTML/CSS: оформление формы.

let rehearsals = [
  { date: "2026-09-14", piece: "Гамма до мажор", note: "Медленно, легато" },
  { date: "2026-09-16", piece: "Этюд Черни", note: "Правая рука отдельно" }
];

const listEl = document.getElementById("list");
const countEl = document.getElementById("count");
const form = document.getElementById("add-form");

function render() {
  listEl.innerHTML = "";
  countEl.textContent = "Репетиций: " + rehearsals.length;

  for (let i = 0; i < rehearsals.length; i = i + 1) {
    let item = rehearsals[i];
    let li = document.createElement("li");
    li.innerHTML =
      "<div><div class=\"item-title\">" + item.piece + "</div>" +
      "<p class=\"item-meta\">" + item.date + " · " + (item.note || "без заметки") + "</p></div>";

    let del = document.createElement("button");
    del.type = "button";
    del.textContent = "Удалить";
    del.addEventListener("click", function () {
      rehearsals.splice(i, 1);
      render();
    });

    li.appendChild(del);
    listEl.appendChild(li);
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let date = document.getElementById("date").value;
  let piece = document.getElementById("piece").value.trim();
  let note = document.getElementById("note").value.trim();

  if (!date || !piece) {
    return;
  }

  rehearsals.push({ date: date, piece: piece, note: note });
  form.reset();
  render();
});

render();
