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

```bash
npm run dev
```

Сайт откроется через BrowserSync (обычно `http://localhost:3000`).

## Сборка

```bash
npm run build
```

Результат — папка `dist/`.

## Архив для хостинга

```bash
npm run zip
```

## Деплой на GitHub Pages

Сайт публикуется автоматически при каждом `push` в ветку `main`.

### Адрес сайта

```
https://InnaGlebova.github.io/mk-narkolog-centr/
```

Если репозиторий называется иначе — замените `mk-narkolog-centr` на имя репозитория.

## Структура проекта

```
src/           — исходники (HTML, SCSS, JS, изображения, шрифты)
gulp/          — задачи сборки
dist/          — результат сборки (не коммитится, создаётся в CI)
.github/       — автодеплой на GitHub Pages
```
