  tailwind.config = {
    theme: {
      extend: {
        colors: {
          bg: '#0a0e1a',
          surface: '#0f1524',
          card: '#111a2e',
          border: '#1e293b',
          cyan: {
            DEFAULT: '#22d3ee',
            soft: '#67e8f9'
          },
          indigo: {
            DEFAULT: '#6366f1'
          },
          muted: '#94a3b8'
        },
        fontFamily: {
          display: ['"Space Grotesk"', 'sans-serif'],
          body: ['Inter', 'sans-serif'],
          mono: ['"JetBrains Mono"', 'monospace']
        },
        boxShadow: {
          glow: '0 0 0 1px rgba(34,211,238,0.25), 0 0 24px -4px rgba(34,211,238,0.35)',
          glowIndigo: '0 0 0 1px rgba(99,102,241,0.25), 0 0 24px -4px rgba(99,102,241,0.35)'
        }
      }
    }
  }
    // Footer year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Mobile menu toggle
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const iconOpen = document.getElementById('iconOpen');
  const iconClose = document.getElementById('iconClose');

  menuBtn.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('hidden');
    mobileMenu.classList.toggle('hidden');
    iconOpen.classList.toggle('hidden');
    iconClose.classList.toggle('hidden');
    menuBtn.setAttribute('aria-expanded', String(!isOpen));
  });

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      iconOpen.classList.remove('hidden');
      iconClose.classList.add('hidden');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // Smooth scroll (native CSS scroll-smooth already applied; ensure anchor offset accounts for fixed nav)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = 64;
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // Typing animation for role
  const roles = [
    'AIML Student & Full-Stack Developer',
    'Machine Learning Enthusiast',
    'Builder of Practical AI Products'
  ];
  const typedEl = document.getElementById('typedRole');
  let roleIndex = 0, charIndex = 0, deleting = false;

  function typeLoop() {
    const current = roles[roleIndex];
    if (!deleting) {
      charIndex++;
      typedEl.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(typeLoop, 1600);
        return;
      }
    } else {
      charIndex--;
      typedEl.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }
    setTimeout(typeLoop, deleting ? 35 : 55);
  }
  typeLoop();

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => revealObserver.observe(el));

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      const link = document.querySelector(`.nav-link[href="#${id}"]`);
      if (!link) return;
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

  sections.forEach(s => navObserver.observe(s));

  // Sticky navbar shadow on scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 8) {
      navbar.classList.add('shadow-lg', 'shadow-black/30');
    } else {
      navbar.classList.remove('shadow-lg', 'shadow-black/30');
    }
  });