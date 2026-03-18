document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    menuBtn.addEventListener('click', () => {
        alert("Mobile menu functionality would go here! You can add a hidden div to toggle.");
    });

    // 2. Smooth Scrolling for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 3. Simple Form Submission Handling
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Visual feedback
        const btn = contactForm.querySelector('button');
        const originalText = btn.innerText;
        
        btn.innerText = "SENDING...";
        btn.disabled = true;

        setTimeout(() => {
            alert("Thank you! JimmyMotors has received your message.");
            btn.innerText = originalText;
            btn.disabled = false;
            contactForm.reset();
        }, 1500);
    });

    // 4. Reveal Animation on Scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.vehicle-card').forEach(card => {
        observer.observe(card);
    });
});
