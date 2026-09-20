const button = document.querySelector('.theme-toggle');
function syncTheme() {
  const dark = document.documentElement.dataset.theme === 'dark';
  const action = dark ? 'Přepnout na světlý režim' : 'Přepnout na tmavý režim';
  button.setAttribute('aria-label', action);
  button.title = action;
  document.querySelector('meta[name="theme-color"]').content = dark ? '#202426' : '#F3F4EF';
}
button.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('dalin-theme', next); } catch {}
  syncTheme();
});
syncTheme();
