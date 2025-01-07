// Плавна прокрутка до секцій
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Анімація появи карток при прокручуванні
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

document.querySelectorAll('.model-card').forEach((card) => {
    observer.observe(card);
});

// Обробка форми
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Дякуємо за ваше повідомлення! Ми зв\'яжемося з вами найближчим часом.');
    this.reset();
});
