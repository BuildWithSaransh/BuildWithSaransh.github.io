const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());

const menuButton = document.querySelector('.menu-toggle');
const mobileNavigation = document.getElementById('mobile-navigation');
const mobileBreakpoint = window.matchMedia('(min-width: 801px)');

function setMenuOpen(isOpen) {
  if (!menuButton || !mobileNavigation) return;

  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  mobileNavigation.dataset.open = String(isOpen);
  mobileNavigation.inert = !isOpen;
}

if (menuButton && mobileNavigation) {
  setMenuOpen(false);

  menuButton.addEventListener('click', () => {
    setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
  });

  mobileNavigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      setMenuOpen(false);
      menuButton.focus();
    }
  });

  mobileBreakpoint.addEventListener('change', (event) => {
    if (event.matches) setMenuOpen(false);
  });
}

const navigationLinks = document.querySelectorAll('.nav-link');
const observedSections = [...navigationLinks]
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter((section) => section instanceof HTMLElement);

if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    const activeEntry = entries
      .filter((entry) => entry.isIntersecting)
      .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

    if (!activeEntry) return;

    navigationLinks.forEach((link) => {
      if (link.getAttribute('href') === `#${activeEntry.target.id}`) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }, {
    rootMargin: '-20% 0px -65% 0px',
    threshold: [0, 0.15, 0.4]
  });

  observedSections.forEach((section) => sectionObserver.observe(section));
}
