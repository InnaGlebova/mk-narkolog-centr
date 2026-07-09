# mk-narkolog-centr

Статический сайт наркологического центра. Сборка на Gulp + Panini + Sass.

## Требования

- Node.js 18+
- npm

## Установка

```bash
npm install
```

## Разработка

Запуск сборки и локального сервера с live reload:

```bash
npm run dev
```

Сайт откроется через BrowserSync (обычно `http://localhost:3000`).

## Сборка

Сборка проекта в папку `dist/`:

```bash
npm run build
```

## Архив для выкладки

```bash
npm run zip
```

Создаёт `mk-narkolog-centr.zip` из содержимого `dist/`.

## Структура проекта

```
src/           — исходники (HTML, SCSS, JS, изображения, шрифты)
gulp/          — задачи сборки
dist/          — результат сборки (не коммитится)
```

## Публикация на GitHub

1. Создайте репозиторий на GitHub.
2. В корне проекта:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<user>/<repo>.git
git push -u origin main
```

Для деплоя на хостинг используйте содержимое `dist/` после `npm run build`.
