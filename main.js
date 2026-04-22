// Block by Block Alliance — Main JS

document.addEventListener('DOMContentLoaded', () => {

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      const open = navLinks.classList.contains('open');
      if (open) {
        navLinks.classList.remove('open');
        navLinks.removeAttribute('style');
      } else {
        navLinks.classList.add('open');
        Object.assign(navLinks.style, {
          display: 'flex',
          flexDirection: 'column',
          position: 'absolute',
          top: '57px',
          left: '0',
          right: '0',
          background: '#fff',
          padding: '20px 24px',
          borderBottom: '1px solid #d8dde6',
          boxShadow: '0 4px 20px rgba(0,0,0,0.10)',
          zIndex: '99',
          gap: '14px',
        });
      }
    });
  }

  // Smooth scroll offset for sticky nav
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 68;
        window.scrollTo({ top, behavior: 'smooth' });
        // Close mobile nav if open
        if (navLinks?.classList.contains('open')) {
          navLinks.classList.remove('open');
          navLinks.removeAttribute('style');
        }
      }
    });
  });

});
