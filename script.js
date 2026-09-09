document.getElementById('year').textContent = new Date().getFullYear();

const navLinksEl = document.getElementById('navLinks');
const navToggle = document.getElementById('navToggle');

function closeNav() {
  navLinksEl.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
}

function toggleNav() {
  const isOpen = navLinksEl.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
}

navToggle.addEventListener('click', toggleNav);

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', closeNav);
});

// Scroll-spy: highlight the nav link for the section in view
const sections = document.querySelectorAll('.block');
const navLinks = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.section === id);
      });
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' });

sections.forEach(section => observer.observe(section));