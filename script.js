// Theme Management & UI Initialization
document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Configuration
    const html = document.documentElement;
    const themeToggleBtn = document.getElementById('theme-toggle');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    // Check for saved theme preference or default to dark
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }

    // Toggle Theme
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            html.classList.toggle('dark');
            if (html.classList.contains('dark')) {
                localStorage.theme = 'dark';
            } else {
                localStorage.theme = 'light';
            }
        });
    }

    // Mobile Menu Toggle
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // 2. Typewriter Effect
    const typeWriterElement = document.getElementById('typewriter-text');
    if (typeWriterElement) {
        const textArray = ["Level Designer", "Environment Artist", "World Builder", "Technical Artist"];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentText = textArray[textIndex];
            if (isDeleting) {
                typeWriterElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typeWriterElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 100 : 200;

            if (!isDeleting && charIndex === currentText.length) {
                typeSpeed = 2000; // Pause at end
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % textArray.length;
                typeSpeed = 500;
            }

            setTimeout(type, typeSpeed);
        }
        // Start typing
        type();
    }

    // 3. AOS Animation Initialization
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out',
            once: true,
            mirror: false
        });
    } else {
        // Fallback: If AOS library fails to load, ensure content is visible
        console.warn('AOS library not loaded. Forcing content visibility.');
        const aosElements = document.querySelectorAll('[data-aos]');
        aosElements.forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'none';
            // Remove data-aos to prevent CSS hiding
            el.removeAttribute('data-aos');
        });
    }
});

// 4. Project Filtering Logic
function filterProjects(category) {
    const projects = document.querySelectorAll('.project-card');
    const buttons = document.querySelectorAll('button[onclick^="filterProjects"]');

    // Filter Items
    projects.forEach(project => {
        const categories = project.dataset.categories ? project.dataset.categories.split(',') : [];
        if (category === 'all' || categories.includes(category)) {
            project.classList.remove('hidden');
            // Re-trigger AOS if available
            project.classList.remove('aos-animate');
            setTimeout(() => project.classList.add('aos-animate'), 50);
        } else {
            project.classList.add('hidden');
        }
    });

    // Update Active Button State
    buttons.forEach(btn => {
        // Reset all buttons to default style
        btn.classList.remove('bg-accent', 'text-white', 'border-transparent');
        btn.classList.add('text-gray-700', 'dark:text-gray-300', 'border-gray-300', 'dark:border-gray-700');

        // Check if this button is the one clicked
        const btnCategory = btn.getAttribute('onclick').match(/'([^']+)'/)[1];
        if (btnCategory === category) {
            btn.classList.remove('text-gray-700', 'dark:text-gray-300', 'border-gray-300', 'dark:border-gray-700');
            btn.classList.add('bg-accent', 'text-white', 'border-transparent');
        }
    });

    // Refresh AOS layout
    if (typeof AOS !== 'undefined') {
        setTimeout(() => AOS.refresh(), 100);
    }
}
