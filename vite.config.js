import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function navPlaceholders(currentPage) {
  const inactiveCls =
    'text-zinc-600 dark:text-zinc-300 hover:text-brand dark:hover:text-brand-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/55 focus-visible:ring-offset-2 dark:focus-visible:ring-brand-foreground/50 dark:focus-visible:ring-offset-gray-800 rounded-md';
  const activeCls = 'font-semibold text-brand dark:text-brand-foreground';
  const map = {
    home: 'HOME',
    oprojektu: 'OPROJEKTU',
    napoveda: 'NAPOVEDA',
    kontakt: 'KONTAKT',
  };
  const out = {};
  for (const [key, name] of Object.entries(map)) {
    const on = currentPage === key;
    out[`__C_${name}__`] = on ? activeCls : inactiveCls;
    out[`__A_${name}__`] = on ? ' aria-current="page"' : '';
  }
  return out;
}

function injectSiteNav() {
  const navPath = path.resolve(__dirname, 'src/partials/site-nav.html');
  const navTemplate = fs.readFileSync(navPath, 'utf-8');
  return {
    name: 'inject-site-nav',
    transformIndexHtml(html) {
      const match = html.match(/<!-- SITE_NAV:(\w+) -->/);
      if (!match) return html;
      const current = match[1];
      const valid = ['home', 'oprojektu', 'napoveda', 'kontakt'];
      if (!valid.includes(current)) {
        throw new Error(`[inject-site-nav] Invalid SITE_NAV: ${current}`);
      }
      let nav = navTemplate;
      const placeholders = navPlaceholders(current);
      for (const [k, v] of Object.entries(placeholders)) {
        nav = nav.split(k).join(v);
      }
      return html.replace(match[0], nav.trim());
    },
  };
}

function injectSiteFooter() {
  return {
    name: 'inject-site-footer',
    transformIndexHtml(html) {
      if (!html.includes('<!-- SITE_FOOTER -->')) return html;
      const footerPath = path.resolve(__dirname, 'src/partials/site-footer.html');
      const footer = fs.readFileSync(footerPath, 'utf-8');
      return html.replace('<!-- SITE_FOOTER -->', footer.trimEnd());
    },
  };
}

export default defineConfig({
  plugins: [tailwindcss(), injectSiteNav(), injectSiteFooter()],
  
  // Vite plugin pro zpracování SVG
  optimizeDeps: {
    include: ['lucide-static']
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'index.html',
        oprojektu: 'oprojektu.html',
        napoveda: 'napoveda.html',
        kontakt: 'kontakt.html'
      }
    }
  }
});

