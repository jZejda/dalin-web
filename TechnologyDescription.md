# Dalin Website

Moderní statický web vytvořený s využitím Vite, Tailwind CSS v4, Alpine.js a PHP.

## 🚀 Technologie

- **Vite** - Rychlý build tool a dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **Alpine.js** - Lightweight JavaScript framework
- **Lucide** - Ikony jako SVG soubory
- **PHP** - Zpracování formulářů na backendu

## 📁 Struktura projektu

```
DalinWebsite/
├── index.html              # Landing page
├── o-projektu.html         # O projektu
├── napoveda.html          # Nápověda
├── kontakt.html           # Kontaktní formulář
├── api/
│   └── contact.php        # PHP handler pro formulář
├── src/
│   ├── css/
│   │   └── main.css       # Hlavní CSS soubor
│   └── js/
│       ├── main.js        # Hlavní JavaScript (Alpine.js)
│       └── icons.js       # Import Lucide ikon
├── logs/                  # Logy formulářů (gitignorováno)
├── dist/                  # Produkční build (gitignorováno)
├── package.json
├── vite.config.js
├── README.md
├── LUCIDE_PRIKLADY.md    # Návod na použití Lucide ikon
└── .htaccess             # Apache konfigurace
```

## 🛠️ Instalace

1. **Nainstalujte závislosti:**
```bash
npm install
```

## 💻 Lokální vývoj

Pro lokální vývoj spusťte Vite dev server:

```bash
npm run dev
```

Stránka bude dostupná na `http://localhost:5173`

## 🏗️ Produkční build

Pro vytvoření produkčního buildu spusťte:

```bash
npm run build
```

Výsledný build bude v adresáři `dist/`.

## 📤 Deployment

### Apache

1. Zkopírujte obsah složky `dist/` do vašeho Apache root adresáře (např. `/var/www/html` nebo vhodná složka pro váš Apache)

2. Zkopírujte složku `api/` do Apache root spolu s HTML soubory

3. Ujistěte se, že PHP je nainstalováno a Apache má povolený mod_php nebo PHP-FPM

4. Nastavte oprávnění pro složku `logs/`:
```bash
mkdir -p logs
chmod 755 logs
```

5. Potřebné Apache direktivy (obvykle v `.htaccess` nebo Apache konfiguraci):
```apache
# Rewrite rules pro clean URLs (volitelné)
RewriteEngine On
RewriteBase /

# Povoleno zpracování PHP
AddHandler php7-script .php
```

## ✨ Funkce

- ✅ Responzivní design
- ✅ Dark mode podpora
- ✅ Moderní UI s Tailwind CSS
- ✅ Lucide ikony jako SVG soubory
- ✅ Interaktivní prvky s Alpine.js
- ✅ Kontaktní formulář s PHP backendem
- ✅ Rychlé načítání stránek
- ✅ Optimalizované assety

## 🎨 Lucide ikony

Projekt používá [Lucide ikony](https://lucide.dev) jako inline SVG v HTML. Ikony jsou přímo vložené do HTML souborů:

```html
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <!-- SVG paths -->
</svg>
```

**Výhody:**
- Žádné externí HTTP requesty
- Plně stylizovatelné přes Tailwind CSS
- Automaticky podporují dark mode
- Malá velikost a rychlé načítání

Více informací v [LUCIDE_PRIKLADY.md](.cursor/plans/LUCIDE_PRIKLADY.md) a [RESENI_LUCIDE.md](.cursor/plans/RESENI_LUCIDE.md).

## 🌙 Dark Mode

Web podporuje automatické přepínání mezi světlým a tmavým režimem. Preference uživatele se ukládají do localStorage prohlížeče.

## 📝 Formulář

Kontaktní formulář odesílá data na `/api/contact.php`, která je zpracovávají a logují. V produkci byste měli přidat odesílání emailů nebo ukládání do databáze.

Logy formulářů jsou uloženy v `logs/contacts.log` ve formátu JSON.

## 🤝 Příspěvek

Pro změny vytvořte pull request na GitHub.

## 📄 Licence

© 2024 Dalin. Všechna práva vyhrazena.

