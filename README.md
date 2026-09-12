# JavaScript для музыкантов

Курс для музыкального колледжа. HTML, CSS и JavaScript в браузере (без npm). Преподаватель: Дмитрий Сергеевич.

Готовых решений нет. Застрял — F12 и скриншот преподавателю.

Программа: [PROGRAM.md](PROGRAM.md).

---

## Где работаем

Работы сдаются в репозиторий **своей группы**. Ссылку и доступ даёт преподаватель.

| Группа | Репозиторий |
|--------|-------------|
| Духовые | [js40-group-WindInstruments-2026](https://github.com/dmitriStpaniuk/js40-group-WindInstruments-2026) |
| Хор | [js40-group-Chorus-2026](https://github.com/dmitriStpaniuk/js40-group-Chorus-2026) |
| Фортепиано | [js40-group-Piano-2026](https://github.com/dmitriStpaniuk/js40-group-Piano-2026) |
| Народные | [js40-group-KeyboardButtons-2026](https://github.com/dmitriStpaniuk/js40-group-KeyboardButtons-2026) |
| Струнные и музыковеды | [js40-group-StringsMusicologists-2026](https://github.com/dmitriStpaniuk/js40-group-StringsMusicologists-2026) |

[js-music-course-40h](https://github.com/dmitriStpaniuk/js-music-course-40h) — оригинал программы. Туда не пушим и не открываем Pull Request.

---

## Как взять материалы (свой форк)

Ты уже на странице **своей группы** (или открой её по таблице). Своей папки на компьютере ещё нет.

1. https://github.com → **Sign up**. Логин латиницей (`anna-piano`), почта, пароль. Подтверди письмо.
2. **Fork** этого репозитория группы.
3. Дальше работаешь только в **своём форке**: clone, правки, commit, push.

Не правь файлы прямо в репозитории группы. ZIP «вместо форка» не бери: не будет commit, push и Pull Request.

Нужны: браузер, Git, VS Code (если нельзя — Блокнот).

---

## Clone

В **своём форке** зелёная **Code** → скопируй HTTPS-ссылку (в ней твой логин).

```bash
git clone https://github.com/ТВОЙ_ЛОГИН/js40-group-….git
```

Открой полученную папку в VS Code: File → Open Folder.

---

## Каждый урок

```text
js40-group-…/                         ← это ты клонировал (свой форк)
  lessons/
    01-files-folders-browser/         ← урок 1: файлы сюда
    04-html-basics/
      README.md                       ← задание
      starter/                        ← работа
```

1. VS Code → File → Open Folder → **корень** клона.
2. Прочитай `lessons/…/README.md`.
3. Прави `starter/` этого урока (урок 1 — в `lessons/01-files-folders-browser/`). Открой `index.html` в браузере. F12 → Console.
4. Сохрани (Ctrl+S / Cmd+S).
5. Сдай **Pull Request** по правилам ниже.

Дальше: [урок 01](lessons/01-files-folders-browser/README.md).

---

## Как оформить Pull Request

Один урок — один PR. Так преподаватель видит, кто что сдал.

1. Новая ветка на каждый урок (не пушь всё в `main`):

```bash
git checkout -b lesson-04
git add .
git commit -m "урок 04: афиша"
git push -u origin lesson-04
```

2. На github.com в своём форке: **Contribute** → **Open pull request** в репозиторий группы.
3. **Заголовок** — сначала номер, потом имя:

`урок 04 — Анна Иванова`

4. В тексте PR коротко:

- Must: что сделано
- Stretch: да / нет
- Если не успел — одной строкой

5. **Merge не нажимай.**

Поправка после замечания: тот же PR, новый commit в ту же ветку. Новый PR на тот же урок не открывай.

---

## Слова

| Слово | Что значит |
|--------|------------|
| **starter** | Заготовка в `lessons/…/starter/`. Дописываешь. Не готовый ответ. |
| **Must** | Обязательная часть ДЗ. |
| **Stretch** | Дополнительно, если Must готов. |
| **TODO** | «Здесь твоя задача». |
| **F12** | Консоль браузера. На Mac часто Cmd+Option+I. |
| **Fork** | Своя копия репозитория группы. |
| **clone** | Скачать репозиторий на компьютер. |
| **commit** | Сохранить версию с короткой подписью. |
| **push** | Отправить commit на GitHub (в свой форк). |
| **Pull Request** | Сдача: показать работу в репозитории группы. Merge не жмём. |
| **collaborator** | Напарник в общем репозитории (парный проект). |

---

## Если не получается

| Проблема | Что делать |
|----------|------------|
| Не подтвердил почту | GitHub ограничит push. Открой письмо. |
| Склонировал репозиторий группы, не свой форк | `git clone` заново: в URL твой логин. |
| Нет кнопки Fork | Нет доступа. Скажи преподавателю. |
| Все уроки в одном PR или в `main` | На каждый урок ветка `lesson-04` и свой PR |
| Заголовок `asdf` или без номера | `урок 04 — Имя Фамилия` |
| Имена с пробелами и кириллицей | Переименуй латиницей. |

---

## Для преподавателя

Репозитории групп приватные: Settings → разрешите Fork, добавьте учеников в Collaborators.

Проверка: вкладка **Pull requests** репозитория этой группы. Merge не нажимайте — иначе работы свалятся в общий `main`.
