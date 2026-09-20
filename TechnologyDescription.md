# Dalin Website

Jednostránkový prezentační web projektu [DaLin](https://github.com/jZejda/dalin). Obsahuje přehled funkcí, výhod a nároků na provoz, ukázky aplikace a odkazy na demo, dokumentaci a komunitu.

## Technologie

- Vite pro vývoj a produkční sestavení
- HTML, CSS a JavaScript bez aplikačního frameworku
- SVG ikony Lucide vložené přímo do stránky

## Struktura

- `index.html` — jediná stránka webu
- `src/css/landing.css` — vzhled a responzivní rozložení
- `src/js/landing.js` — přepínání světlého a tmavého režimu
- `images/` — loga a ukázky aplikace pro oba režimy
- `vite.config.js` — nastavení sestavení

## Lokální vývoj

```bash
npm install
npm run dev
```

Produkční soubory vytvoří `npm run build` v adresáři `dist/`. Web je statický a nevyžaduje PHP ani databázi. Výchozí je tmavý režim; ručně zvolený režim se ukládá do `localStorage`.
