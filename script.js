// Mobile navigation toggle (for future use)
// You can expand this if you add a hamburger menu for mobile

document.addEventListener('DOMContentLoaded', function() {
    // Placeholder for future interactivity
});

// Back to Top button
const backToTopBtn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if(window.scrollY > 300) {
        backToTopBtn.style.display = 'flex';
    } else {
        backToTopBtn.style.display = 'none';
    }
});
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Animate skill bars
function animateSkillBars() {
    document.querySelectorAll('.skill-bar').forEach(bar => {
        bar.classList.add('visible');
    });
}

// Contact dropdown
const contactBtn = document.querySelector('.contact-btn');
const contactList = document.querySelector('.contact-list');
if(contactBtn && contactList) {
    contactBtn.addEventListener('click', () => {
        contactList.style.display = contactList.style.display === 'flex' ? 'none' : 'flex';
    });
    document.addEventListener('click', (e) => {
        if (!contactBtn.contains(e.target) && !contactList.contains(e.target)) {
            contactList.style.display = 'none';
        }
    });
}

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
menuToggle.addEventListener('click', function() {
    mobileMenu.classList.toggle('open');
});

// Only declare these once
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

// Highlight active nav link on scroll
window.addEventListener('scroll', function() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Contact form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon.`);
        contactForm.reset();
    });
}

// Fade-in animation on scroll
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);
sections.forEach(section => {
    observer.observe(section);
}); 