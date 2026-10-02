const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('main-nav');
const desktop = window.matchMedia('(min-width: 64em)');

function setOpen(open) {
  toggle.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('is-open', open);
}

toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    setOpen(false);
    toggle.focus();
  }
});
nav.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
desktop.addEventListener('change', () => setOpen(false));
