// Клавиатура+ — стартер. 7 клавиш, тон и клавиши компьютера A S D F G H J уже работают.
// Пара: своё оформление. Stretch — чёрные клавиши или вторая октава.

const notes = [
  { name: "C", freq: 261.63 },
  { name: "D", freq: 293.66 },
  { name: "E", freq: 329.63 },
  { name: "F", freq: 349.23 },
  { name: "G", freq: 392.0 },
  { name: "A", freq: 440.0 },
  { name: "B", freq: 493.88 }
];

const keyCodes = ["KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ"];

const nameEl = document.getElementById("note-name");
const keys = document.querySelectorAll(".key");

function playTone(freq) {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  const ctx = new AudioCtx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "sine";
  osc.frequency.value = freq;
  gain.gain.value = 0.12;
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
  osc.stop(ctx.currentTime + 0.35);
}

function pressKey(index) {
  const note = notes[index];
  const key = keys[index];
  nameEl.textContent = note.name;
  playTone(note.freq);
  key.classList.add("on");
  setTimeout(function () {
    key.classList.remove("on");
  }, 200);
}

for (let i = 0; i < keys.length; i = i + 1) {
  keys[i].addEventListener("click", function () {
    pressKey(i);
  });
}

document.addEventListener("keydown", function (event) {
  for (let i = 0; i < keyCodes.length; i = i + 1) {
    if (event.code === keyCodes[i]) {
      pressKey(i);
    }
  }
});
