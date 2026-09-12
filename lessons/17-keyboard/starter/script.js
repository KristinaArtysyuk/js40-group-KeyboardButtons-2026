const notes = [
  { name: "C", freq: 261.63 },
  { name: "D", freq: 293.66 },
  { name: "E", freq: 329.63 },
  { name: "F", freq: 349.23 },
  { name: "G", freq: 392.0 },
  { name: "A", freq: 440.0 },
  { name: "B", freq: 493.88 }
];

const nameEl = document.getElementById("note-name");
const keys = document.querySelectorAll(".key");

// Короткий тон: синус на частоте freq, 0.35 секунды. Не переписывай.
function playTone(freq) {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  const ctx = new AudioCtx();
  const osc = ctx.createOscillator(); // генератор тона
  const gain = ctx.createGain(); // громкость
  osc.type = "sine";
  osc.frequency.value = freq;
  gain.gain.value = 0.12;
  osc.connect(gain);
  gain.connect(ctx.destination); // в колонки
  osc.start();
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35); // затухание
  osc.stop(ctx.currentTime + 0.35);
}

function pressKey(index) {
  // получаем ноту
  const note = notes[index];
  // получаем клавишу
  const key = keys[index];
  // запиши note.name в nameEl
  // вызови playTone(note.freq)
  // добавь класс "on", через 200 мс сними (как вспышка на метрономе)
  nameEl.textContent = "Допиши pressKey в script.js";
}

// Цикл for, как на уроке 9. Индекс i совпадает с notes[i] (0 = C, 6 = B).
for (let i = 0; i < keys.length; i = i + 1) {
  keys[i].addEventListener("click", function () {
    pressKey(i);
  });
}
