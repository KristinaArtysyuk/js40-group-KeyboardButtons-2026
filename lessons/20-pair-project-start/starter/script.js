// Музыкальная викторина — стартер для парного проекта (урок 20)
// Движок показа вопросов уже работает. Замените пример на 10+ своих вопросов,
// подписи и оформление. Эталон «с ответами курса» в репозиторий не кладём.

// === ЧАСТЬ 1: HTML-разработчик ===
// Проверь id в index.html: screen-start, screen-quiz, screen-result,
// btn-start, btn-retry, question-text, answers, progress-bar, progress-text,
// feedback, score-text, grade-text.
// Можно улучшить подписи и добавить классы — не ломай id без договорённости.

const screenStart = document.getElementById("screen-start");
const screenQuiz = document.getElementById("screen-quiz");
const screenResult = document.getElementById("screen-result");
const btnStart = document.getElementById("btn-start");
const btnRetry = document.getElementById("btn-retry");
const questionText = document.getElementById("question-text");
const answersBox = document.getElementById("answers");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const feedback = document.getElementById("feedback");
const scoreText = document.getElementById("score-text");
const gradeText = document.getElementById("grade-text");

// === ЧАСТЬ 2: JS-разработчик ===
// TODO: замени пример на 10+ своих вопросов.

const questions = [
  {
    text: "Как называется скрипичный ключ по-другому?",
    options: ["Ключ соли", "Ключ фа", "Ключ до", "Басовый ключ"],
    correctIndex: 0
  },
  {
    text: "Что означает forte (f)?",
    options: ["Тихо", "Громко", "Умеренно", "Очень тихо"],
    correctIndex: 1
  },
  {
    text: "Сколько четвертей в такте при размере 4/4?",
    options: ["2", "3", "4", "8"],
    correctIndex: 2
  }
];

let currentIndex = 0;
let score = 0;
let locked = false;

function showScreen(screen) {
  screenStart.classList.add("hidden");
  screenQuiz.classList.add("hidden");
  screenResult.classList.add("hidden");
  screen.classList.remove("hidden");
}

function gradeFromScore(correct, total) {
  const ratio = correct / total;
  if (ratio >= 0.9) return "5 — отлично";
  if (ratio >= 0.75) return "4 — хорошо";
  if (ratio >= 0.5) return "3 — нормально";
  return "2 — нужно повторить";
}

function updateProgress() {
  const total = questions.length;
  const pct = (currentIndex / total) * 100;
  progressBar.style.width = pct + "%";
  progressText.textContent = "Вопрос " + (currentIndex + 1) + " из " + total;
}

function renderQuestion() {
  locked = false;
  feedback.textContent = "";
  const q = questions[currentIndex];
  questionText.textContent = q.text;
  answersBox.innerHTML = "";
  updateProgress();

  for (let index = 0; index < q.options.length; index = index + 1) {
    const option = q.options[index];
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = option;
    btn.addEventListener("click", function () {
      onAnswer(index, btn);
    });
    answersBox.appendChild(btn);
  }
}

function onAnswer(index, btn) {
  if (locked) return;
  locked = true;
  const q = questions[currentIndex];
  const buttons = answersBox.querySelectorAll("button");
  for (let i = 0; i < buttons.length; i = i + 1) {
    if (i === q.correctIndex) buttons[i].classList.add("correct");
    if (i === index && index !== q.correctIndex) buttons[i].classList.add("wrong");
  }

  if (index === q.correctIndex) {
    score += 1;
    feedback.textContent = "Верно!";
  } else {
    feedback.textContent = "Пока мимо — смотри правильный вариант.";
  }

  setTimeout(function () {
    currentIndex += 1;
    if (currentIndex >= questions.length) {
      finishQuiz();
    } else {
      renderQuestion();
    }
  }, 700);
}

function finishQuiz() {
  progressBar.style.width = "100%";
  showScreen(screenResult);
  scoreText.textContent = "Твой счёт: " + score + " / " + questions.length;
  gradeText.textContent = "Оценка: " + gradeFromScore(score, questions.length);
}

function startQuiz() {
  currentIndex = 0;
  score = 0;
  showScreen(screenQuiz);
  renderQuestion();
}

btnStart.addEventListener("click", startQuiz);
btnRetry.addEventListener("click", startQuiz);

// На старте показываем только приветственный экран
showScreen(screenStart);
