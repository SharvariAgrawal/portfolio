document.addEventListener('DOMContentLoaded', () => {

  // ── Floating nav active link on scroll ──
  const navLinks = document.querySelectorAll('.float-nav a[href^="#"]');
  const sections = document.querySelectorAll('[id]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { threshold: 0.5 });

  sections.forEach(el => observer.observe(el));

  // ── Contact form ──
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim() || 'there';
      alert(`Thank you, ${name}! I'll get back to you soon.`);
      form.reset();
    });
  }

});
