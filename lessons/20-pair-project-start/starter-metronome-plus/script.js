// Метроном+ для пары. Викторина — в соседней папке starter/.
let bpm = 100;
let running = false;
let timerId = null;
let beatsInBar = 4;
let beat = 0;
let audioCtx = null;

const bpmEl = document.getElementById("bpm");
const meterLabel = document.getElementById("meter-label");
const beatLabel = document.getElementById("beat-label");
const pulse = document.getElementById("pulse");
const toggleBtn = document.getElementById("toggle");

function getAudioCtx() {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!audioCtx) audioCtx = new AudioCtx();
  if (audioCtx.state === "suspended") audioCtx.resume();
  return audioCtx;
}

function playClick(accent) {
  const ctx = getAudioCtx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "square";
  osc.frequency.value = accent ? 1400 : 900;
  gain.gain.setValueAtTime(accent ? 0.16 : 0.1, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + 0.05);
}

function tick() {
  beat = beat + 1;
  if (beat > beatsInBar) beat = 1;
  beatLabel.textContent = String(beat);
  pulse.classList.add("on");
  setTimeout(function () {
    pulse.classList.remove("on");
  }, 80);
  playClick(beat === 1);
}

function start() {
  if (timerId !== null) clearInterval(timerId);
  getAudioCtx();
  timerId = setInterval(tick, Math.round(60000 / bpm));
  running = true;
  toggleBtn.textContent = "Стоп";
}

function stop() {
  if (timerId !== null) {
    clearInterval(timerId);
    timerId = null;
  }
  running = false;
  toggleBtn.textContent = "Старт";
}

document.getElementById("slower").addEventListener("click", function () {
  bpm = Math.max(40, bpm - 5);
  bpmEl.textContent = String(bpm);
  if (running) start();
});
document.getElementById("faster").addEventListener("click", function () {
  bpm = Math.min(240, bpm + 5);
  bpmEl.textContent = String(bpm);
  if (running) start();
});
toggleBtn.addEventListener("click", function () {
  if (running) stop();
  else start();
});

const meterBtns = document.querySelectorAll("[data-meter]");
for (let i = 0; i < meterBtns.length; i = i + 1) {
  let btn = meterBtns[i];
  btn.addEventListener("click", function () {
    beatsInBar = Number(btn.getAttribute("data-meter"));
    meterLabel.textContent = beatsInBar + "/4";
    beat = 0;
  });
}
