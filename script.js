// Smooth scroll functionality
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Dark/Light mode toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('bg-gray-100');
    document.body.classList.toggle('text-gray-900');
    themeToggle.classList.toggle('fa-sun');
    themeToggle.classList.toggle('fa-moon');
});

// Dynamic year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Form validation
document.getElementById('contact-form').addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        e.target.reset();
    } else {
        alert('Please fill in all fields.');
    }
});
