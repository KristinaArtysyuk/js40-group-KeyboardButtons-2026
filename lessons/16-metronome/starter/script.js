// Метроном (starter)
// Допиши tempoName, start, stop, changeBpm. playClick уже готов — не трогай.

let bpm = 120;
let running = false;
let timerId = null;
let beatCount = 0;
let audioCtx = null;

let bpmEl = document.getElementById("bpm");
let tempoEl = document.getElementById("tempo-name");
let beatEl = document.getElementById("beat-count");
let pulseEl = document.getElementById("pulse");
let toggleBtn = document.getElementById("toggle-btn");

// Звук в браузере можно включить только после клика — создаём «аудиопульт» один раз
function getAudioCtx() {
  // проверяем, есть ли AudioContext в браузере
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  // если AudioContext не существует, создаём его
  if (!audioCtx) {
    audioCtx = new AudioCtx();
  }
  // если звук на паузе, разрешаем его
  if (audioCtx.state === "suspended") {
    audioCtx.resume(); // браузер ставит звук на паузу, пока нет жеста пользователя
  }
  return audioCtx;
}

// Короткий щелчок: квадратная волна 1000 Гц на 0.05 секунды. Не переписывай.
function playClick() {
  // получаем AudioContext
  const ctx = getAudioCtx();
  // создаём генератор тона
  const osc = ctx.createOscillator(); 
  // создаём громкость
  const gain = ctx.createGain(); // громкость
  // устанавливаем тип волны
  osc.type = "square";
  // устанавливаем частоту
  osc.frequency.value = 1000;
  // устанавливаем громкость
  gain.gain.setValueAtTime(0.12, ctx.currentTime);
  // затухание
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05); // затухание
    // подключаем генератор тона к громкости
    osc.connect(gain);
  // подключаем громкость к колонкам
  gain.connect(ctx.destination); // в колонки
  // запускаем генератор тона
  osc.start();
  // останавливаем генератор тона
  osc.stop(ctx.currentTime + 0.05);
}

function tempoName(value) {
  // меньше 60 — Largo
  // меньше 76 — Adagio
  // меньше 108 — Andante
  // меньше 120 — Moderato
  // меньше 168 — Allegro
  // меньше 200 — Presto
  // иначе — Prestissimo
  return "—";
}

// Обновляет цифры на странице: BPM, название темпа, номер удара
function updateView() {
  // обновляем BPM
  bpmEl.textContent = String(bpm);
  // обновляем название темпа
  tempoEl.textContent = tempoName(bpm);
  // обновляем номер удара
  beatEl.textContent = String(beatCount);
}

// Вспышка кружка на 100 мс — визуальный удар
function flashPulse() {
  // добавляем класс on
  pulseEl.classList.add("on");
  // удаляем класс on через 100 мс
  setTimeout(function () {
    pulseEl.classList.remove("on");
  }, 100);
}

// Один удар метронома: счётчик + вспышка + клик. Вызывается из setInterval.
function tick() {
  // увеличиваем номер удара
  beatCount = beatCount + 1;
  // обновляем номер удара
  beatEl.textContent = String(beatCount);
  // вспышка
  flashPulse();
  // клик
  playClick();
}

function start() {
  // если timerId не null — clearInterval(timerId)
  // получаем AudioContext
  getAudioCtx();
  // период
  // let period = Math.round(60000 / bpm)
  // timerId = setInterval(tick, period)
  // запускаем интервал
  running = true;
  // обновляем текст кнопки
  toggleBtn.textContent = "Стоп";
}

function stop() {
  // если timerId не null — clearInterval(timerId), потом timerId = null
  running = false;
  // обновляем текст кнопки
  toggleBtn.textContent = "Старт";
}

function changeBpm(delta) {
  // bpm = bpm + delta
  // если bpm < 40 — поставь 40; если bpm > 240 — поставь 240
  // обновляем цифры на странице
  updateView();
  // если running — вызови start(), чтобы интервал пошёл с новым BPM
}

document.getElementById("minus-btn").addEventListener("click", function () {
  // изменяем BPM на -5
  changeBpm(-5);
});
document.getElementById("plus-btn").addEventListener("click", function () {
  // изменяем BPM на 5
  changeBpm(5);
});
toggleBtn.addEventListener("click", function () {
  if (running) {
    // останавливаем метроном
    stop();
  } else {
    // запускаем метроном
    start();
  }
});

// обновляем цифры на странице
updateView();
