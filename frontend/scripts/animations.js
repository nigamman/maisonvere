// animations.js — Scroll and interactivity logic for Maison Veré

// Initialize AOS for scroll animations
AOS.init({
  once: true,
  duration: 600,
  easing: 'ease-out-cubic',
  mirror: false
});



// Optional IntersectionObserver for custom behavior (future use)
// Example: Add .visible class when elements come into view
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('visible');
//     }
//   });
// });

// document.querySelectorAll('.observe').forEach(el => observer.observe(el));
