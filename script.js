window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('logo').classList.add('fade-in');
    document.getElementById('title').classList.add('fade-in');
    document.getElementById('team').classList.add('fade-in');
    document.getElementById('lyrics').style.opacity = '1';
    document.getElementById('footer').style.opacity = '1';
  });
  
  // Scroll-triggered animation
  const scrollElements = document.querySelectorAll('.scroll-animate');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('scroll-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  
  scrollElements.forEach(el => observer.observe(el));
  
  
  